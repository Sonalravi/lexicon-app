# Lexicon — Setup

## Structure

```
lexicon/
├── public/
│   └── lexicon_glossary_v5.html   ← drop the HTML file here
├── server.js
├── package.json
├── .env                           ← create this from .env.example
└── .env.example
```

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Create your .env file
cp .env.example .env

# 3. Add your keys to .env
#    ANTHROPIC_API_KEY  → platform.anthropic.com/settings/keys
#    ELEVENLABS_API_KEY → elevenlabs.io/app/settings/api-keys

# 4. Put the HTML file in /public
mkdir public
cp lexicon_glossary_v5.html public/

# 5. Start the server
npm start
```

Open http://localhost:3000 in your browser.

## ElevenLabs voice

The voice ID `bbGtsRRKUfYO634UxSjz` is set in the HTML frontend.
If you want to change it, search for `voiceId` in the HTML file.

To use your own cloned voice:
1. Go to elevenlabs.io → Voices → Add Voice → Instant Voice Clone
2. Upload your recordings (30s minimum)
3. Copy the voice ID and replace `bbGtsRRKUfYO634UxSjz` in the HTML

## How the audio works

1. You click ▶ on a term card
2. The frontend calls `/api/spoken-script` with the term name, definition, and analogy
3. The backend asks Claude to write a short, casual spoken explanation (not a reading of the definition)
4. That script goes to `/api/tts` which calls ElevenLabs with your voice ID
5. The audio blob streams back and plays in the browser
6. Both the script and the audio URL are cached per term so repeat clicks are instant

## Notes

- Both API keys stay server-side — they never appear in the HTML
- Audio is cached as blob URLs in memory per session
- If the server is unavailable, the play button shows an error state gracefully
