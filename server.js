import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Serve static files from /public
app.use(express.static(join(__dirname, 'public')));

// Explicit homepage route
app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

// ── Claude: generate natural spoken script ───────────────
app.post('/api/spoken-script', async (req, res) => {
  try {
    const { prompt, name, def, ana } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5',
        max_tokens: 140,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic error:', errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    let script = data?.content?.[0]?.text?.trim() || ana || def || name || '';

    script = script.replace(
      /^(Oh[,.]?\s+|So[,.]?\s+|Well[,.]?\s+|Sure[,.]?\s+|Right[,.]?\s+|Okay[,.]?\s+|Alright[,.]?\s+)/i,
      ''
    );

    res.json({ script });
  } catch (err) {
    console.error('spoken-script error:', err);
    res.status(500).json({ error: 'Failed to generate script' });
  }
});

// ── ElevenLabs: text to speech ───────────────────────────
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voiceId } = req.body || {};

    if (!text) {
      return res.status(400).json({ error: 'Missing text' });
    }

    if (!voiceId) {
      return res.status(400).json({ error: 'Missing voiceId' });
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_22050_32`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': process.env.ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text,
          model_id: process.env.ELEVENLABS_MODEL || 'eleven_flash_v2_5',
          voice_settings: {
            stability: 0.45,
            similarity_boost: 0.8
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ElevenLabs error:', errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
  } catch (err) {
    console.error('tts error:', err);
    res.status(500).json({ error: 'TTS generation failed' });
  }
});

// ── Claude: extract terms from uploaded document ─────
app.post('/api/extract-terms', async (req, res) => {
  try {
    const { text } = req.body || {};
    if (!text) return res.status(400).json({ error: 'Missing text' });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5',
        max_tokens: 3000,
        messages: [{
          role: 'user',
          content: `Extract all glossary terms from this document. Return ONLY a valid JSON array, no markdown, no backticks. Each object: {n,c,l,d,a,synonyms,related} where c is one of: AI, Prompt, Eng, Tools, Fluency, Safety, Product, Business, Content, Design. l is one of: Basics, Intermediate, Advanced. d: plain 1-3 sentence definition, no em dashes. a: plain analogy.\n\nDocument:\n${text}`
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic extract error:', errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    const raw = data?.content?.[0]?.text || '[]';
    let terms;
    try { terms = JSON.parse(raw); }
    catch { const m = raw.match(/\[[\s\S]*\]/); terms = m ? JSON.parse(m[0]) : []; }
    res.json({ terms: terms.filter(t => t.n && t.d) });
  } catch (err) {
    console.error('extract-terms error:', err);
    res.status(500).json({ error: 'Extraction failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Lexicon server running at http://localhost:${PORT}`);
});