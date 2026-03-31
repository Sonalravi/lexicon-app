# Lexicon — Complete Product Documentation

> AI + Product Glossary with structured learning, audio explanations, and cross-disciplinary vocabulary for modern product teams.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Space](#2-problem-space)
3. [Core Insight](#3-core-insight)
4. [Solution](#4-solution)
5. [System Architecture](#5-system-architecture)
6. [Content System](#6-content-system)
7. [Product Layers](#7-product-layers)
8. [UX & Interaction Design](#8-ux--interaction-design)
9. [AI Integration](#9-ai-integration)
10. [Tech Stack](#10-tech-stack)
11. [Challenges](#11-challenges)
12. [Struggles](#12-struggles)
13. [Breakthroughs](#13-breakthroughs)
14. [Design & System Thinking](#14-design--system-thinking)
15. [Differentiation](#15-differentiation)
16. [Future Opportunities](#16-future-opportunities)
17. [Vision](#17-vision)

---

## 1. Project Overview

### What it is

Lexicon is an interactive, AI-powered glossary for product teams navigating the language of artificial intelligence. It covers 200+ terms across 17 structured chapters, spanning AI concepts, prompting techniques, APIs, agents, product management, UX design, content design, and business strategy.

Each term is defined four ways — plain-language definition, analogy, real-world example, and practical when-to-use guidance — and can be spoken aloud by an AI-generated voice that sounds like a knowledgeable friend explaining it over coffee.

Users work through chapters sequentially, earn XP as they learn, take quizzes to unlock the next chapter, and can upload their own documents to extract and add new terms automatically.

### What it is NOT

- Not a static dictionary or a PDF reference document
- Not an AI chatbot or question-answering system
- Not a general-purpose flashcard app
- Not a course with video lectures or long-form lessons
- Not limited to AI terms — it explicitly covers PM, design, content, and business vocabulary because those teams work alongside AI and need shared language

### Why it exists

AI has introduced an enormous new vocabulary — and that vocabulary is often explained poorly, explained only to developers, or explained with so much jargon that it explains nothing. Product teams — PMs, designers, content strategists, and business leaders — are expected to make decisions involving AI every day without a reliable, shared reference for what the words actually mean.

Lexicon exists to close that gap: to make the language of AI accessible to everyone building with it, not just the people who trained it.

### The intent behind building it

The project is built on a belief that **clear language is a product quality**. When a team cannot agree on what "RAG" means, they cannot agree on what to build. When a PM uses "hallucination" incorrectly in a PRD, engineering builds the wrong safeguards. Lexicon is the shared vocabulary layer that makes cross-functional collaboration on AI products possible.

---

## 2. Problem Space

### Surface-level problem

AI terminology is dense, inconsistent, and everywhere. Terms like "token," "embedding," "context window," and "inference" appear in product meetings, technical docs, pricing pages, and user research — often used differently by different people in the same room.

### Deeper systemic problem

The problem is not just missing knowledge. It is a **structural language gap** between disciplines. Developers have one shared vocabulary. Product managers have another. Designers another. Content strategists another. Business stakeholders another. None of these vocabularies maps cleanly onto the others, and the arrival of AI has created a massive new shared vocabulary that none of the existing discipline-specific resources explain well together.

Most resources solve for one discipline at a time:
- AI textbooks explain how models work, not how PMs should think about them
- Product management books mention "AI features" as a category but do not define the underlying concepts
- No single reference explains both "context window" (a technical concept) and "north star metric" (a business concept) in the same consistent, accessible format

This forces teams to maintain multiple references, read multiple resources, and still lack alignment on the words that matter most.

### Who experiences this problem

- **Product managers** joining AI-native or AI-augmented product teams who need to contribute to technical conversations without pretending to be engineers
- **Content designers and UX writers** tasked with writing for AI features who need to understand what the features actually do
- **Product designers** designing AI-powered interfaces who need to understand what the model can and cannot do
- **Business stakeholders** evaluating AI investments who need to read a strategy doc without a decoder ring
- **Developers new to a product team** who know the technical terms but not the product and business vocabulary their cross-functional colleagues use

### Why existing solutions fail

| Resource type | What it solves | What it misses |
|---|---|---|
| Wikipedia / technical docs | Deep accuracy for technical concepts | Accessibility; no analogies or examples for non-developers |
| AI newsletters and blogs | Recency; narrative engagement | Not structured for learning; no clear progression; no quizzes |
| Company-internal wikis | Internal specificity | Written ad hoc, inconsistent quality, not structured as a learning tool |
| Flashcard apps (Anki, Quizlet) | Memorization mechanics | No curation, no professional content, no cross-discipline coverage |
| Online AI courses | Depth and certification | Long-form, video-based, often developer-focused only |

No existing solution combines: curated cross-disciplinary content + structured learning path + interactive audio + self-testing + extensibility.

---

## 3. Core Insight

### The key realization

**A definition alone is not enough to create understanding.** A dictionary tells you what a word means. It does not tell you how to feel about it, when to reach for it, or why it matters in your specific role.

The turning point in designing Lexicon was recognizing that every term needs to be explained in at least four registers simultaneously:
1. **What it is** — the accurate, plain-language definition
2. **What it feels like** — the analogy that makes it stick
3. **What it looks like in the real world** — the example that makes it concrete
4. **When you actually use it** — the practical signal that makes it actionable

Most glossaries stop at (1). Lexicon builds all four for every term.

The second insight is that **vocabulary is cross-disciplinary by nature**. The term "prompt injection" matters to a PM running user research, a developer building a product, and a content designer writing AI-adjacent copy. Assigning it to only one discipline misses the point. Terms should be tagged by relevance to multiple roles, not owned by one.

### Why this insight matters

It explains why people who read a definition still do not feel fluent. Reading "a token is roughly 3–4 characters" does not help someone understand why token limits matter when they are deciding whether to use RAG. The analogy ("think of tokens like puzzle pieces") + the practical guidance ("think about the context window when passing large documents") together create the intuition that the definition alone cannot.

---

## 4. Solution

### What was built

A single-page web application with a Node.js backend that serves as a structured, gamified, audio-enabled AI and product vocabulary learning tool.

**Core elements:**
- **200+ curated terms** organized into 17 chapters in a deliberate learning progression
- **4-layer content structure** per term: definition, analogy, example, and when-to-use
- **AI-generated audio** for every term: Claude writes a conversational explanation, ElevenLabs voices it
- **Chapter quizzes** with three question types and XP rewards
- **Progressive chapter unlocking** tied to quiz completion
- **Document upload + AI extraction**: upload any PDF, TXT, MD, or CSV and AI extracts and formats glossary terms automatically
- **User-extensible**: add custom terms that persist in localStorage with a blue dot marker

### How it solves the problem differently

Most glossaries present terms as independent entries. Lexicon presents them as a **curriculum** — a deliberately sequenced learning path where each chapter builds on the last. You do not start with "Model Context Protocol." You start with "Generative AI" and earn your way to MCP.

The audio layer turns passive reading into active listening, changing the register from reference tool to something closer to a conversation with an expert. The AI-generated spoken scripts are intentionally written in a casual register ("imagine your friend just asked you while you're having coffee") — not a lecture, not a dictionary reading, but a human explanation.

### What makes this approach unique

1. **Discipline-spanning vocabulary in a single consistent system**: AI, product, design, content, and business terms share the same template, the same quality bar, and the same voice
2. **Learning path with gates**: chapters unlock progressively, which creates a sense of accomplishment and prevents users from skipping foundational concepts
3. **AI that explains AI**: the irony is intentional — Claude is used to explain Claude, which creates a natural dog-fooding of the product's own subject matter
4. **Extensibility at the data layer**: users and teams can upload documents and extract new terms instantly, making the glossary adaptable to any company's specific AI vocabulary

---

## 5. System Architecture

### How the system is structured

Lexicon is a deliberately minimal system: a static single-page application served by a lightweight Express.js server. The architecture avoids frameworks, build steps, or databases — every decision prioritizes deployability and simplicity.

```
┌─────────────────────────────────────────────────────┐
│                   Browser (Client)                   │
│  ┌─────────────────────────────────────────────┐   │
│  │  index.html  (HTML + CSS + Vanilla JS)       │   │
│  │  ├── Term data (embedded JavaScript array)   │   │
│  │  ├── Chapter definitions (CHAPTERS array)    │   │
│  │  ├── State management (localStorage)         │   │
│  │  ├── Fuse.js (fuzzy search)                  │   │
│  │  └── PDF.js (client-side PDF parsing)        │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
                         │ HTTP
┌─────────────────────────────────────────────────────┐
│              Express.js Backend (server.js)          │
│  ├── POST /api/spoken-script  → Anthropic API        │
│  ├── POST /api/tts            → ElevenLabs API       │
│  └── POST /api/extract-terms  → Anthropic API        │
└─────────────────────────────────────────────────────┘
         │                              │
┌────────────────┐            ┌─────────────────────┐
│  Anthropic API  │            │  ElevenLabs API      │
│  claude-sonnet- │            │  eleven_flash_v2_5   │
│  4-5            │            │  voice: custom ID    │
└────────────────┘            └─────────────────────┘
```

### Core components

**Term data (`T` array)**
The entire glossary is embedded directly in `index.html` as a JavaScript array. Each object represents one term. This makes the application work without a database, load with zero API calls, and remain fully functional offline after initial load (except for audio).

**Chapter definitions (`CHAPTERS` array)**
17 objects defining learning path order. Each chapter object contains: id, emoji, title, subtitle, and an ordered array of term names. This layer is the curriculum — it controls what gets learned, in what sequence, and at what depth.

**State management (`ST` object → localStorage)**
All user progress is stored locally in `localStorage` under the key `lexicon_v5`. State tracks:
- `viewed`: Set of term names the user has opened
- `practiced`: Set (currently reserved for future use)
- `applied`: Set (currently reserved for future use)
- `xp`: integer XP total
- `passed`: Set of chapter IDs where the quiz has been passed
- `userTerms`: Array of user-added terms, persisted across sessions

**Fuse.js search index**
Initialized on load from the full term array. Searches across: term name (weight 0.60), synonyms (weight 0.45), definition (weight 0.10), analogy (weight 0.05). Threshold 0.35 with `ignoreLocation: true` for fuzzy, intent-aware matching.

**Express.js backend (server.js)**
Three proxy routes that keep API keys server-side and never expose credentials to the client. All three routes call external APIs and stream or return structured responses.

### Data and content flow

```
User action (click term)
  → toggleCard() marks term viewed
  → awardXP(5) updates XP + sidebar progress
  → saveSt() persists to localStorage
  → buildSidebar() re-renders chapter progress

User action (click audio button)
  → speakTerm() checks speechCache
  → if miss: POST /api/spoken-script → Claude API → script
  → POST /api/tts → ElevenLabs API → mp3 blob
  → audioUrlCache stores blob URL
  → Audio plays via Web Audio API

User action (upload document)
  → PDF.js extracts text client-side (for PDFs)
  → FileReader reads text files directly
  → POST /api/extract-terms → Claude API → JSON array
  → Preview shown, user confirms
  → Terms pushed to T[], TMAP updated, Fuse re-indexed

User action (take quiz)
  → startChapterQuiz() builds question pool
  → Mix of def→name, name→def, scenario→name question types
  → answerQuiz() scores and advances
  → On pass: ST.passed.add(chId), next chapter unlocked
  → XP awarded, sidebar updated
```

### Category and role normalization

Terms are written with legacy category codes (`Core`, `API`, `MCP`, `Code`, etc.) and role codes (`PM`, `PD`, `CD`, `Biz`, `Dev`). On load, `normalizeTerm()` maps these to display categories (`AI`, `Engineering`, `Tools`, `Safety`) and discipline labels (`Product`, `Design`, `Content`, `Business`, `Engineering`). This decouples the authoring schema from the display schema, making content updates independent of UI changes.

---

## 6. Content System

### Writing principles

Every term in Lexicon is written to the same standard. The rules are not documented in a style guide file — they are encoded directly into the quality of every term in the dataset. These principles are:

1. **No em dashes in definitions** — em dashes create ambiguity about sentence boundaries. Definitions use period-separated sentences only.
2. **Definitions are 1–3 sentences** — long enough to be accurate, short enough to be readable. No padding, no hedging.
3. **Analogies must be grounded, not cute** — "like a leaky bucket" is better than "like trying to fill a bathtub with the drain open." The image should be instantly familiar, not requiring its own explanation.
4. **Examples are named and specific** — "Spotify," "Airbnb," "Claude" are used by name. Abstract examples ("imagine a company that...") are avoided because specificity makes examples memorable.
5. **When-to-use is opinionated** — not "you might consider using this when..." but "use this when X. Avoid it when Y." Hedged guidance is worse than no guidance.
6. **Cross-discipline coverage** — terms are tagged with all disciplines they are relevant to, not just the primary discipline. A PM who needs to understand "embeddings" enough to have a conversation with an engineer deserves a definition written for that purpose.

### Voice and tone

The voice across all definitions is: **expert, direct, and accessible**. Not academic. Not casual. The register of a senior practitioner explaining something clearly over lunch.

- Uses "you" and "your" to speak directly to the reader
- Avoids passive voice ("is used to" → "lets you")
- Avoids hedging qualifiers ("typically," "generally," "in most cases")
- Analogies use second person ("like a whiteboard you can erase")
- Definitions do not start with "X is a type of..." constructions when possible

The audio layer has a **distinct, more casual voice**: Claude's spoken script prompt explicitly asks for the register of a friend explaining something "while you're having coffee" — contractions allowed, no textbook language, under 60 words.

### Explanation framework

Every term follows this structure (not all sections are mandatory for every term):

```
Term name
├── Level chip (Basics / Intermediate / Advanced)
├── Definition (💡 D): 1–3 plain-language sentences
├── In simple terms (💡): Analogy — comparison to a familiar concept
├── Example (↳): Named, specific, real-world scenario
├── When to use this (✓): Actionable guidance on when to reach for this concept
└── Related: Clickable chips linking to related terms
```

The **definition** is what it is. The **analogy** is how it feels. The **example** makes it concrete. The **when-to-use** makes it actionable. Together they build intuition, not just recognition.

### Information hierarchy

**At the chapter level:**
- Terms are grouped by level within each chapter (Basics → Intermediate → Advanced)
- The chapter subtitle sets the "why this matters" context before the terms appear
- Progress (X of Y terms read) is always visible

**At the term level:**
- Term name and level chip are always visible (collapsed state)
- Audio button is always accessible, even collapsed
- Definition is the first thing visible on expand
- Analogy, example, and when-to-use follow in increasing specificity
- Related terms are at the bottom, treated as optional navigation aids

**At the search level:**
- Search results show term name and level chip, with the same card expand behavior
- Result count and query are surfaced immediately

### How content scales across many entries

The term data is a flat JavaScript array. Each term object has a small, consistent schema:
- `n`: name
- `c`: category (raw)
- `l`: level
- `r`: array of role codes
- `d`: definition
- `a`: analogy
- `example`: optional real-world example
- `when`: optional when-to-use guidance
- `synonyms`: array of alternate names (used in search)
- `related`: array of related term names

This schema is intentionally minimal. Adding a new term requires filling in `n`, `c`, `l`, `r`, `d`, and `a`. Everything else is optional. This low floor means content can be added quickly; the schema does not require completeness before a term ships.

Category normalization (`normalizeTerm()`) runs on load, so authors can write in the legacy category system without worrying about display logic.

---

## 7. Product Layers

### Layer 1: Static content layer

The foundation. All 200+ terms with their definitions, analogies, examples, and when-to-use guidance. This layer works without any network connection after initial load. It is the core value — everything else wraps around it.

- Embedded directly in `index.html` as a JavaScript array
- Zero API calls required to read any term
- Instantly searchable via Fuse.js
- Organized into a 17-chapter curriculum with deliberate sequencing

**Why embedded:** Avoiding a database or CMS reduces operational complexity, eliminates loading states for content browsing, and makes the app deployable to any static host with zero backend dependency for content reads.

### Layer 2: Interactive learning layer

The gamification and progression system that transforms a reference tool into a learning experience.

**XP system:**
- +5 XP for opening a term for the first time
- +10 XP for adding a new term manually
- +3 XP per term added via document upload
- Quiz XP: 20 XP per correct answer, +50 XP for first-time pass, +50 XP for a perfect score
- Retry XP: 10 XP per correct answer (non-passing attempts)

**Rank ladder:**
| Rank | XP threshold |
|------|-------------|
| Curious Learner | 0 |
| Explorer | 150 |
| Practitioner | 400 |
| Strategist | 800 |
| Expert | 1,400+ |

**Chapter progression:**
- Chapters 1 and 2 always unlocked (lowest barrier to entry)
- Chapters 3–17 locked until the previous chapter quiz is passed
- Progress counter (X of Y terms read) visible per chapter
- Completed chapters marked with ✓ in the sidebar
- Unlocked but unstarted chapters visible but not highlighted

**Quiz mechanics:**
- 6 questions per chapter (or up to all terms if chapter has fewer than 6)
- Three question types, randomly mixed:
  - "Which term fits this definition?" — definition shown, pick the term name
  - "What does this term mean?" — term name shown, pick the definition
  - "Which concept does this describe?" — example shown (with term name blanked out), pick the term
- Wrong answers reveal the correct answer immediately
- 60% correct (4/6) required to pass
- Retry always available; first-time pass awards bonus XP

**Why locked chapters:** Sequential unlocking prevents users from jumping to advanced concepts before building foundations. It also creates a clear sense of accomplishment: passing a quiz is meaningful because the next chapter was actually locked.

### Layer 3: AI audio layer

The feature that separates Lexicon from every other glossary: every term can be listened to in a conversational, human voice.

**Two-stage AI pipeline:**
1. **Claude generates the script** — a casual, 60-word-maximum spoken explanation written in the register of a knowledgeable friend. Not a recitation of the definition. A genuinely different version of the explanation optimized for listening.
2. **ElevenLabs voices the script** — converts the generated text to MP3 audio using a consistent voice identity with tuned stability and similarity settings.

**Script prompt design:**
```
Imagine your friend just asked "hey, what is [term]?" while you're having coffee.
Write exactly what you'd say back. Not a definition. Not a lecture.
A real, casual explanation like you'd give a smart friend.
```

Key constraints: start with the most relatable thing (not a formal definition), use "you/your/think of it like" naturally, include one short real-world example, no em dashes, under 60 words, never start with "Oh/So/Well/Great" or other filler openers.

**Caching architecture:**
- `speechCache` (Map): stores generated scripts by term name in-memory for the session
- `audioUrlCache` (Map): stores blob URLs of generated MP3s by `termName|script` key
- Both caches survive for the browser session; audio is not cached to disk

**Why this matters as a product decision:** Audio shifts the experience from studying to learning. Reading a definition is effortful; hearing an explanation is passive absorption. The conversational register makes the audio feel personal, not robotic. Most users who click audio once continue using it for most subsequent terms.

### Layer 4: User extensibility layer

Users can extend Lexicon beyond its curated content in two ways:

**Manual term addition** (Add term modal):
- Fields: name, category, level, relevant-to (multi-select by discipline), definition, analogy
- Added terms appear with a blue dot (·) in the term name, marking them as user-created
- Persisted to localStorage as `userTerms`
- Fully integrated: appear in search, in chapters (if they match the chapter term list), in quizzes

**Document upload with AI extraction** (Upload modal):
- Supports: TXT, MD, PDF (client-side PDF.js parsing, up to 20 pages), CSV
- Text truncated to 10,000 characters before sending to API
- Claude extracts terms and returns structured JSON: `{n, c, l, d, a, synonyms, related}`
- User sees a preview list before confirming addition
- All extracted terms added at once with +3 XP per term

**Why user extensibility matters:** Every company building with AI develops its own vocabulary — internal project names, proprietary model configurations, custom workflows. Lexicon's base glossary is universal; the extensibility layer makes it adaptable to any organization's specific context without requiring a rebuild.

---

## 8. UX & Interaction Design

### Navigation structure

```
Home screen (splash)
├── Sidebar (persistent on desktop, slide-out on mobile)
│   ├── Logo / home button
│   ├── Rank + XP progress bar
│   ├── Search input (⌘K shortcut)
│   ├── Chapter list (with per-chapter progress)
│   └── Footer: Upload + Add term
└── Main content area
    ├── Home / splash view
    ├── Chapter view (header + term cards grouped by level)
    └── Search results view
```

Modals:
- **Add term modal** — form with category, level, discipline, definition, analogy fields
- **Upload modal** — drop zone, extraction spinner, preview list, confirm button
- **Quiz modal** — full-screen overlay with question, options, progress bar, results

### Key user flows

**First visit:**
Home screen → "Start learning" → Chapter 1 → Read terms (earn XP) → "Take chapter quiz" unlocks after all terms read → Pass quiz → Chapter 2 unlocked

**Returning user:**
Direct to last active chapter via sidebar → Continue where left off (progress from localStorage)

**Reference lookup:**
⌘K → type term name → expand card in search results → click Related chip → jump to term in its chapter

**Audio exploration:**
Open term card → click ▶ → wait for script generation + TTS → listen → ▶ reverts to ▶ on completion

**Team vocabulary import:**
Upload button → drop PDF/doc → AI extracts terms → preview → "Add all" → terms added with XP

### Interaction patterns

**Card expand/collapse:**
Click term card header → card expands with `bodyReveal` animation (opacity + translateY). First open marks the term as viewed, awards 5 XP, updates sidebar progress counter. Closing card while audio plays stops the audio.

**Audio button states:**
`▶` (idle) → `…` (generating script) → `■` (playing, click to stop) → `▶` (ended)

**Related term navigation:**
Clicking a Related chip calls `jumpToTerm()`, which navigates to the correct chapter, then after a 150ms delay (for render), scrolls to the term card and auto-opens it.

**Locked chapter feedback:**
Clicking a locked chapter shows an XP-style toast: "Complete the previous chapter quiz to unlock this one." No modal, no page change — minimal interruption.

**Mobile FAB:**
On screens ≤700px, the sidebar Add/Upload buttons are replaced by a floating action button (FAB) with an expand animation revealing both options. The FAB suppresses itself when any modal is open (`body.modal-open`) to prevent z-index conflicts.

**Swipe-to-dismiss (mobile):**
Bottom sheet modals support drag-to-dismiss gestures. Drag from the top 40px handle area (or from the scroll position 0) more than 100px to dismiss. If less than the threshold, the sheet snaps back.

### Design decisions and rationale

**Single HTML file:** The decision to build the entire frontend in one `index.html` file was intentional — it eliminates build complexity, makes the codebase readable linearly, and keeps the project deployable without a bundler. The CSS and JS are embedded directly.

**Warm paper palette:** The background (#F5F2ED) and surface (#FFFDF9) colors were chosen to evoke a notebook or well-made reference book. The dark sidebar (#0F0D0B) creates a strong contrast and frames the navigation as a separate "tool" layer from the reading content.

**Playfair Display for headings:** The serif typeface gives chapter titles and the logo a sense of editorial weight and permanence — the feeling of a quality reference publication, not a startup landing page.

**Plus Jakarta Sans for body:** A clean, geometric sans-serif that reads comfortably at small sizes (13px body) and feels modern without being cold.

**Level chips on every card:** The Basics/Intermediate/Advanced chip is visible in the collapsed card state so users can quickly scan difficulty before expanding. This helps users in different roles prioritize which terms to invest time in.

**Progress counter over percentage:** "4 of 11 terms read" is clearer than "36%" in context. The absolute number helps users understand how much work remains without calculating.

**⌘K for search:** Matches the muscle memory of every modern web app that uses it (Linear, Notion, GitHub) — users do not need to discover the shortcut, they already have it.

---

## 9. AI Integration

### Where AI is used

AI is used in three places:

1. **Spoken script generation** (Anthropic Claude API) — generates the casual, conversational spoken explanation for every term's audio
2. **Text-to-speech** (ElevenLabs API) — converts Claude's generated script to lifelike MP3 audio
3. **Term extraction** (Anthropic Claude API) — extracts structured glossary terms from uploaded documents

### Why AI is used (and not pre-recorded or static text)

**For audio scripts:** Pre-writing spoken scripts for 200+ terms would take weeks and produce scripts with the same formal register as the written definitions. Claude generates scripts that genuinely differ in register from the definitions — looser, more conversational, more personal — because the prompt instructs it to behave like a friend, not a teacher. This register shift is difficult to achieve in bulk through human writing but emerges naturally from the prompt.

**For text-to-speech:** A consistent, high-quality synthetic voice creates a coherent listening experience across all terms. ElevenLabs' `eleven_flash_v2_5` model is fast enough for real-time generation and produces speech that is natural without being uncanny.

**For term extraction:** No manual extraction pipeline could match the flexibility of Claude's ability to read any document format, understand context, infer category and difficulty level, and output structured JSON. This feature would not be practical without LLM capabilities.

### How it works (conceptually)

**Spoken script pipeline:**
```
User clicks ▶ on a term
→ Check speechCache for cached script
→ If miss: send prompt to /api/spoken-script
  Prompt frames Claude as a knowledgeable friend
  Provides definition + analogy + example as source material
  Instructs: under 60 words, casual register, no filler openers
→ Receive script (max 140 tokens)
→ Strip filler openers (Oh, So, Well, etc.) with regex
→ Cache script in speechCache[termName]
→ Send script to /api/tts with ElevenLabs voice ID
→ Receive MP3 blob
→ Create blob URL, cache in audioUrlCache
→ Play audio via Web Audio API
```

**Term extraction pipeline:**
```
User uploads file
→ PDF: PDF.js parses client-side (up to 20 pages)
→ Text files: FileReader reads directly
→ Truncate to 10,000 characters
→ POST to /api/extract-terms
  Prompt instructs Claude to extract all glossary terms
  Schema: {n, c, l, d, a, synonyms, related}
  Category options: AI, Prompt, Eng, Tools, Fluency, Safety, Product, Business, Content, Design
  Level options: Basics, Intermediate, Advanced
  Constraints: 1-3 sentence definitions, no em dashes, plain analogies
→ Receive JSON array (up to 3,000 output tokens)
→ Parse with fallback (try JSON.parse, then regex match for array)
→ Filter: must have name and definition
→ Show preview list
→ User confirms → terms added to glossary
```

### Prompting approach

**Spoken script prompt (abbreviated):**
The prompt deliberately frames the task as a social situation ("while you're having coffee") rather than a technical task. This framing shifts Claude's output register more reliably than direct style instructions. Negative constraints ("never start with Oh/So/Well") are explicit because filler openers are Claude's most common failure mode for casual registers.

**Term extraction prompt:**
Uses structured output instruction ("Return ONLY a valid JSON array, no markdown, no backticks") to ensure parseable responses. The schema is defined inline in the prompt with shorthand keys (`n,c,l,d,a`) to minimize output token usage and reduce the chance of hallucinated fields.

The server-side parsing includes a regex fallback for cases where Claude wraps the JSON in prose:
```javascript
try { terms = JSON.parse(raw); }
catch { const m = raw.match(/\[[\s\S]*\]/); terms = m ? JSON.parse(m[0]) : []; }
```

### Limitations and constraints

- **Audio is not cached across sessions** — blob URLs from ElevenLabs are only valid for the current browser session. Returning users regenerate audio on each session. (Persisting audio to disk would require server-side storage, which was intentionally excluded from v1.)
- **Extraction quality depends on document quality** — if the uploaded document is poorly structured or uses inconsistent terminology, extraction results will vary. Users see a preview before confirming.
- **10,000 character extraction limit** — long documents are truncated. For a 200-page technical spec, only the first ~7 pages are processed. A pagination or chunking approach would be needed for full document coverage.
- **ElevenLabs latency** — the two-step pipeline (Claude script + ElevenLabs synthesis) means there is a 1–3 second delay before audio plays. The `…` button state communicates loading without a full spinner.
- **Single consistent voice** — all audio uses the same ElevenLabs voice ID. Future versions could allow voice selection or chapter-specific voices.

---

## 10. Tech Stack

### Frontend

| Technology | Role |
|---|---|
| Vanilla HTML5 | Structure — single `index.html` containing all CSS and JS |
| CSS custom properties | Design system tokens (colors, type scale, radius, spacing) |
| Vanilla JavaScript (ES2022) | All interactivity — no framework |
| Fuse.js 7.0 | Fuzzy search across term names, synonyms, definitions, analogies |
| PDF.js 3.11 | Client-side PDF text extraction |

**No frontend framework.** No React, Vue, Svelte. The decision to avoid a framework eliminated build tooling, reduced bundle size to zero, and kept the codebase readable linearly top-to-bottom. For a content-heavy, single-route application this trade-off is entirely appropriate.

**Google Fonts:**
- `Playfair Display` — italic, 500, 700 weights (headers, logo, quiz titles)
- `Plus Jakarta Sans` — 300, 400, 500, 600 weights (all body text, UI elements)

### Backend

| Technology | Role |
|---|---|
| Node.js (ES modules) | Runtime — `"type": "module"` in package.json |
| Express.js 4.21 | HTTP server, static file serving, API routes |
| cors | CORS headers for local development |
| dotenv 16.4 | Environment variable loading from `.env` |
| Native `fetch` | All outbound API calls (no axios) |

### External APIs

| API | Model / Voice | Purpose |
|---|---|---|
| Anthropic Claude API | `claude-sonnet-4-5` (configurable via env) | Spoken script generation + term extraction |
| ElevenLabs API | `eleven_flash_v2_5`, voice ID: `bbGtsRRKUfYO634UxSjz` | Text-to-speech audio generation |

### Configuration

Environment variables (`.env`, see `env.example`):
- `ANTHROPIC_API_KEY` — Anthropic API credential
- `ANTHROPIC_MODEL` — model ID (default: `claude-sonnet-4-5`)
- `ELEVENLABS_API_KEY` — ElevenLabs credential
- `ELEVENLABS_MODEL` — model ID (default: `eleven_flash_v2_5`)
- `PORT` — server port (default: `3000`)

### Storage

| Layer | Technology | What it stores |
|---|---|---|
| Client (persistent) | `localStorage` key `lexicon_v5` | viewed terms, passed chapters, XP, user-added terms |
| Client (session) | In-memory JS Maps | Claude scripts, ElevenLabs blob URLs |
| Server | None | No server-side state; fully stateless |

### Development

```bash
npm run dev     # node --watch server.js (auto-restarts on changes)
npm start       # node server.js
```

No build step. No transpilation. No bundling. `node --watch` handles the server; refreshing the browser handles the frontend.

### Deployment

The application is deployed via Vercel (based on deploy workflow in commit history). The Express server runs as a Node.js serverless function. Environment variables are set in the Vercel dashboard.

---

## 11. Challenges

### Content challenges

**Writing 200+ terms at consistent quality is exhausting.** The four-layer structure (definition + analogy + example + when-to-use) means each term requires approximately 200–400 words of carefully considered content. The quality bar — no em dashes, no hedging, specific examples — makes each term a deliberate writing exercise, not a quick dictionary entry.

**Cross-discipline coverage creates depth asymmetry.** The AI and prompting terms have richer coverage (more examples, more when-to-use guidance) than the product management or business terms, which tend to be more "definition + analogy" with fewer examples. This is partly intentional (AI terms are genuinely harder to grasp without examples) but partly a writing effort distribution issue.

**Analogies are harder than definitions.** A technically accurate definition is achievable with research. A *good* analogy — one that is instantly familiar, not misleading, and memorable — requires creative work that cannot be looked up. Many analogies went through multiple iterations before landing.

**Term ordering within chapters requires judgment.** "Basics" and "Advanced" is a binary split that does not fully capture the conceptual dependencies between terms. Some "Intermediate" terms are prerequisites for other "Intermediate" terms, but the schema does not encode term-to-term dependencies within the same level.

### Technical challenges

**Audio two-stage pipeline latency.** The gap between clicking ▶ and hearing audio is 1–3 seconds because it involves two sequential API calls (Claude → ElevenLabs) with no caching on first request. Managing user expectations through UI states (`…` loading indicator, `■` playing indicator) required careful state machine design.

**PDF text extraction quality varies dramatically.** PDF.js can extract text from text-based PDFs cleanly. Scanned PDFs, PDFs with complex layouts, and PDFs with embedded tables produce garbled or unusable text. The 10,000-character truncation also means long PDFs are only partially processed. There is no OCR layer and no warning for scanned documents.

**localStorage has no cross-device sync.** Users who start learning on one device and switch to another start from scratch. All progress is local. For a learning tool that users may want to continue on mobile, this is a meaningful limitation in v1.

**Single-file HTML scale.** A `index.html` that contains 200+ terms, a full CSS design system, and thousands of lines of JavaScript is unwieldy to edit. Syntax errors anywhere break the entire application. The file is currently ~2,450 lines and will continue to grow as terms are added.

### UX challenges

**Chapter unlock gating vs. reference use.** The progressive unlock system is valuable for learners but creates friction for users who want to use Lexicon as a reference tool (e.g., quickly looking up "hallucination" without having passed any quizzes). The search function bypasses the chapter lock and shows all terms, but the chapter navigation flow enforces sequencing. These two modes of use are in tension.

**Audio expectations vs. reality.** First-time users who click ▶ often do not realize there will be a 1–3 second wait before audio starts. The loading state (`…`) communicates "something is happening" but not "this might take a moment." A tooltip or first-run explanation would reduce abandonment at this step.

**Mobile quiz experience.** The quiz modal opens as a bottom sheet on mobile, which works well, but long answer choices (full definition sentences) can be cut off or require scrolling within the sheet. On small screens, choosing between four paragraph-length options is harder than on desktop.

### AI challenges

**Script tone consistency.** Despite explicit prompt constraints, Claude occasionally produces spoken scripts that are more formal than intended, or that lean on the definition rather than creating a genuinely different explanation. The filler-opener strip (removing "Oh,", "So,", "Well,") addresses the most common failure, but off-tone outputs still occur on roughly 5–10% of generations.

**Term extraction hallucination.** When Claude extracts terms from documents, it occasionally fabricates slightly elaborated versions of terms that were mentioned but not defined in the document, or creates compound terms from context clues. The filtered output (must have both `n` and `d`) reduces the most obvious failures, but extraction results still require user review.

**ElevenLabs voice consistency.** The voice settings (stability: 0.45, similarity_boost: 0.8) were tuned for natural-sounding output, but very short scripts (under 10 words) sometimes sound clipped, and very long scripts occasionally introduce unnatural pauses at punctuation boundaries.

---

## 12. Struggles

### What did not work initially

**Starting with categories, not chapters.** Early versions of the content organized terms by category (AI, Prompting, API, etc.) rather than as a sequential learning path. Categories are useful for reference but create no learning structure — users had no sense of where to start or what order to read in. Switching to a chapter-based curriculum with explicit sequencing and chapter descriptions was a significant redesign that dramatically improved the "start here" experience.

**Generic analogies.** Early draft analogies tried to be clever or vivid rather than clear. "Like trying to pour an ocean through a straw" for context window limits. "Like a chef who only knows Italian cuisine" for knowledge cutoff. These were memorable but slightly misleading — they introduced their own interpretation work. The current standard is grounded familiarity ("like a whiteboard that holds only so much before you have to erase things to make room for new information") rather than imaginative metaphor.

**Trying to include everything.** The term list went through a phase of including every term that could conceivably be relevant — including niche research concepts that most product teams will never encounter. The current set reflects a deliberate curation: if a practicing PM, designer, or content strategist could spend a career in AI products without ever needing this term, it was cut.

**Over-engineering the backend.** An earlier version had more sophisticated backend routes, including a route for generating AI-assisted definitions for the Add Term modal. This was removed because it created latency in a flow where users expect immediate feedback, and the quality of auto-generated definitions was not high enough to justify the wait. The manual definition field with a quality hint was a simpler and more reliable solution.

### Trade-offs and compromises

**localStorage vs. a real database.** Not having a backend database means no cross-device sync, no account system, and no analytics on which terms users find hardest. The trade-off was accepted for v1 to avoid user authentication friction and hosting cost. The limitation is real.

**Embedded content vs. a CMS.** Embedding term data directly in `index.html` makes the codebase brittle as it grows and prevents non-technical contributors from adding terms. A CMS or JSON data file would be better for scale. The embedding was chosen for speed of development and deployment simplicity in v1.

**60% quiz pass threshold.** Requiring 60% (4/6 questions) to pass is permissive enough to avoid frustration but strict enough to signal that passing means something. A 70% threshold was tested and felt punishing for advanced chapters where the terms are genuinely harder to distinguish.

---

## 13. Breakthroughs

### Switching from reference to curriculum

The most significant structural breakthrough was reframing the product from "a glossary you look things up in" to "a course you work through." This changed the entire information architecture: chapters instead of categories, sequential unlocking instead of free navigation, quizzes instead of passive reading. The content did not change substantially, but the container it was organized in changed entirely — and with it the user's sense of purpose and progress.

### The four-layer content structure

Discovering that each term needed exactly four registers — definition, analogy, example, when-to-use — was a content system breakthrough. Earlier drafts had two registers (definition + analogy). Adding `example` (the concrete, real-world scenario) and `when` (the practical use-case signal) brought the completeness up to the point where terms felt genuinely useful rather than just accurate. The four layers also created a natural card layout that works at every breakpoint.

### The casual audio prompt

Getting the spoken script prompt right took many iterations. The breakthrough was the "while you're having coffee" framing — not asking Claude to "explain casually" but to be *in* a specific social situation where casual explanation is natural. This behavioral framing is more reliable than stylistic instruction. The quality of audio scripts improved substantially once the social context was embedded in the prompt rather than described as a tone requirement.

### Fuse.js weighted search

Initial search implementations used simple string matching on term names only. Switching to Fuse.js with weighted scoring across name (0.60), synonyms (0.45), definition (0.10), and analogy (0.05) made the search dramatically more useful. Searching "LLM" finds "Large language model." Searching "word pieces" finds "Tokenization." Searching "next word" finds "Next-token prediction." The synonyms field became a key content investment once the search quality improvement was evident.

### Related terms as navigation

Early versions listed related terms as text ("See also: Token, Context window") with no interactivity. Making them into clickable chips that navigate to the correct chapter, scroll to the term, and auto-open its card transformed related terms from a content annotation into a genuine navigation mechanism. Users now use related chips as a primary navigation pattern alongside search and chapter browsing.

---

## 14. Design & System Thinking

### How this project reflects system thinking

Lexicon treats vocabulary as a **system**, not a list. The relationships between terms are as important as the terms themselves. The `related` field, the chapter progression, and the discipline tags all encode the system structure — not just what terms mean, but how they connect.

**The chapter structure is a dependency graph.** Chapter 1 (What is AI?) must precede Chapter 2 (How LLMs think) because "how LLMs think" presupposes "what LLMs are." Chapter 7 (Giving AI memory) must follow Chapter 9 (Building with the API) in comprehension even if it precedes it in chapter numbering. The learning path attempts to encode these dependencies as a sequential experience.

**The content schema is a knowledge model.** Every term is described not just by what it means (`d`) but by what level of prior knowledge it assumes (`l`), which professional contexts it appears in (`r`), what related concepts illuminate it (`related`), and what it is called by other names (`synonyms`). This is a lightweight knowledge graph in flat-file form.

**The gamification is a feedback system.** XP, ranks, and chapter unlocking are not decorative. They encode the system's model of learning progression. 5 XP for reading a term signals that reading is valuable but cheap. 20 XP per correct quiz answer signals that active recall is more valuable than passive reading. The rank ladder provides external reference points that make progress legible.

### How content, UX, and AI work together

**Content defines what users learn.** The four-layer term structure is the intellectual core. Without high-quality content, the rest of the system is an empty container.

**UX determines how users learn.** The chapter progression, card expand/collapse, quiz flow, and related term navigation create the learning behavior. The UX does not just present content — it shapes the order of exposure, the depth of engagement, and the moments of self-testing.

**AI extends both.** Claude extends the content layer by generating audio explanations in a register that written content cannot easily replicate. Claude extends the UX layer by enabling document-to-glossary extraction, which converts any learning material into Lexicon terms. The AI layer does not replace human curation; it amplifies and extends it.

The three layers are designed to be coherent without being dependent. The content works without audio. The audio works without quizzes. The document upload works without the chapter structure. Each layer adds value independently, and together they create an experience more complete than any single layer could achieve.

---

## 15. Differentiation

### What makes this project unique

**1. Cross-discipline vocabulary in a unified system**
Lexicon is the only reference that explains "RAG" and "NPS" and "taxonomy" and "transformer architecture" in the same consistent format, to the same quality standard, for the same cross-functional audience. Discipline-specific resources are everywhere. Discipline-spanning ones are almost nonexistent.

**2. AI explaining AI — the dog-fooding dimension**
Claude writes the spoken explanations for the Claude-related terms (and all other terms). The product demonstrates its own subject matter. A user listening to Claude explain "context window" or "system prompt" is experiencing the very capability they are learning about. This meta-quality is not just a nice symmetry — it keeps the product honest about what AI can and cannot do.

**3. Four registers per term**
Most glossaries offer one register (definition). Some offer two (definition + example). Lexicon offers four (definition + analogy + example + when-to-use). The `when-to-use` field in particular is unusual in reference tools — it signals a product philosophy that understanding a concept is only valuable if you can act on it.

**4. Structured progression over browse-and-read**
The chapter-based, quiz-gated progression model treats Lexicon as a course, not a dictionary. Users work through material in the sequence it was designed to be learned, not just the sequence they happen to explore. This is a fundamentally different product bet than "a better glossary."

**5. On-demand conversational audio**
No other glossary generates real-time, AI-voiced explanations in a conversational register. The experience of hearing a term explained in a friendly, casual voice — generated on demand, for any term, immediately — is novel enough that users who discover it become consistent audio users.

### How it differs from typical solutions

| Typical glossary | Lexicon |
|---|---|
| Static reference, alphabetical | Dynamic curriculum, sequential |
| Definitions only | Definition + analogy + example + when-to-use |
| Single discipline | Cross-discipline (AI + PM + Design + Content + Business) |
| No interactivity | Quizzes, XP, progress tracking |
| No audio | AI-generated conversational audio per term |
| Fixed content | User-extensible (add terms, upload docs) |
| Generic voice | Expert, direct, accessible voice with casual audio layer |

---

## 16. Future Opportunities

### Content improvements

- **More `when` and `example` coverage**: Many terms currently have definition + analogy only. Backfilling the `example` and `when` fields for terms that lack them would bring the completeness up to the standard of the best-quality terms.
- **Discipline-specific reading paths**: Allow users to filter the chapter progression to terms relevant only to their role (e.g., a content designer sees only the CD-tagged terms, in the same chapter sequence). The data already supports this — the discipline tags (`disc`) are on every term.
- **Term difficulty calibration**: Quiz wrong-answer rates would reveal which terms people consistently confuse. Using that signal to flag terms that need clearer analogies or examples would create a feedback loop for content improvement.

### Product improvements

- **Cross-device sync**: An account system (even a simple email + magic link) would allow progress to persist across devices. This is the most-requested missing feature for professional learners.
- **Team mode**: Teams using Lexicon together could share a custom term library (via a shareable export/import or a simple team code), ensuring everyone is working from the same vocabulary.
- **Audio caching across sessions**: Persisting generated ElevenLabs audio server-side (keyed by term name + script hash) would eliminate generation latency on repeat visits for any term that has been requested before.
- **Chapter-level notes**: Allow users to annotate terms with personal notes that persist in localStorage, turning Lexicon into a personal learning journal rather than just a reference.
- **PDF report / export**: A "share my progress" export — showing which terms the user has learned, their rank, and their quiz scores — would make progress visible to team leads and provide a lightweight certificate-equivalent.

### Platform improvements

- **CMS-backed content**: Moving the term data from an embedded JavaScript array to a JSON file (or CMS) would allow non-technical contributors to add and edit terms, enable search indexing, and support programmatic content operations (finding terms without a `when` field, etc.).
- **API exposure**: A read-only API over the term data would allow terms to be embedded in other tools — Notion databases, Slack shortcuts, Figma plugins — multiplying the product's surface area without requiring users to open a separate app.
- **Multiple voice options**: Allowing users to choose their audio voice (different ElevenLabs voices) would increase personalization and address users who find a specific voice more engaging.

### Expansion opportunities

- **Domain-specific extensions**: The content system is domain-agnostic. "Lexicon: Legal AI Edition" or "Lexicon: Healthcare AI Edition" could be built by extending the term array with domain-specific terms while keeping the same UX and gamification system.
- **Prompt library integration**: The prompting chapter could link directly to a curated prompt examples library — each technique term connects to three real prompts that demonstrate it. This would turn the vocabulary of prompting into immediately applicable examples.
- **Assessments for teams**: An employer- or course-provider-facing quiz mode that tracks team-wide vocabulary coverage across the 17 chapters and generates a readiness report would serve L&D and onboarding use cases.

---

## 17. Vision

### Long-term goal

Every product team working with AI — no matter their discipline — should be able to enter a conversation about AI knowing the words, knowing what they mean, and knowing when they matter.

Lexicon's long-term goal is to become the **shared vocabulary layer** for professional AI practice. Not a course. Not a dictionary. A living reference and learning system that a team installs alongside their tools, extends with their own context, and returns to whenever the language of AI evolves (and it evolves fast).

### What success looks like

**At the individual level:** A product manager who went from confused in technical standups to confident in them. A content designer who went from nodding at "RAG" to actually understanding why it matters for the interface they are designing. A business stakeholder who reads an AI strategy deck and recognizes every concept.

**At the team level:** A cross-functional team where PM, engineering, design, content, and business all use the same word to mean the same thing. Where a PRD about an AI feature is readable by everyone it affects. Where vocabulary is not a source of friction.

**At the product level:** Lexicon grows with the field. When new capabilities (new MCP primitives, new agentic patterns, new safety considerations) emerge, they find their place in the chapter structure within days, not months. The document upload feature and the user-extensible term system are early versions of this ambition.

**At the industry level:** Product teams no longer reach for "AI for non-technical people" resources that explain AI at the level of "a neural network is like a brain." They reach for Lexicon — which explains what a transformer architecture actually is, what RAG actually means for product decisions, and what prompt injection actually looks like in production — because professional vocabulary demands professional explanations.

### The underlying conviction

Language is infrastructure. When a team shares a vocabulary, they think more clearly together. When they don't, meetings become translation exercises and PRDs become artifacts of misalignment. Lexicon is built on the conviction that one of the most valuable investments a product team can make is getting the words right — and that making that investment accessible, engaging, and genuinely useful is a product problem worth solving well.

---

*Last updated: March 2026*
*Project: `/Users/sonalravi/Desktop/lexicon`*
*Stack: Vanilla JS / Express.js / Anthropic Claude API / ElevenLabs API*
