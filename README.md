# Sinónimos de Caminar

An elegant, interactive Spanish language learning application exploring synonyms of "caminar" (to walk) with Latin American Spanish pronunciation.

## Live Demo

**Deployed Application:** https://bjpl.github.io/sinonimos_de_caminar/

This project demonstrates interactive language learning through synonym exploration, featuring audio pronunciation from multiple Latin American voices, contextual imagery, and cultural notes.

## Technical Overview

**Key Technologies:**
- Vanilla JavaScript (ES6+)
- HTML5 / CSS3 with custom properties
- Microsoft Edge TTS (8 LATAM voices)
- Unsplash API for imagery
- Static site deployment

**Implementation Highlights:**
- 14 curated synonyms with nuanced definitions
- 56 MP3 audio files covering verbs and example sentences
- Multi-voice pronunciation (Mexico, Colombia, Argentina, Neutral)
- Real-time search and filtering by formality and context
- Responsive grid layout with smooth animations
- Fully offline-capable after initial load

## Features

**Language Learning:**
- 14 sophisticated synonyms: andar, pasear, deambular, vagar, transitar, peregrinar, desplazarse, circular, recorrer, trajinar, rondar, callejear, vagabundear, errar
- Detailed definitions with cultural context
- 3 authentic example sentences per verb
- Regional usage notes for Latin America

**Interactive Interface:**
- Search functionality across synonyms and definitions
- Filter by formality level (formal/neutral/informal)
- Filter by context (cotidiano/literario/narrativo/profesional)
- Modal view with full details and pronunciation
- High-quality contextual images with attribution

**Audio System:**
- 8 distinct LATAM voices for variety
- Verb pronunciations and example sentences
- Voice metadata tracking

## Exploring the Code

```
sinonimos_de_caminar/
├── index.html              # Main application
├── app.js                  # Application logic and state management
├── styles/
│   └── main.css           # Earth-tones design system
├── data/
│   ├── synonyms.json      # Complete synonym dataset
│   ├── image_credits.json # Unsplash photographer attributions
│   └── audio_metadata.json # Voice and audio file metadata
├── assets/
│   ├── images/            # Hero image and synonym visuals
│   └── audio/             # 56 MP3 pronunciation files
├── components/            # Reusable UI components
├── services/              # Data fetching services
└── scripts/               # Image and audio generation tools
```

## Local Development

<details>
<summary>Click to expand setup instructions</summary>

```bash
# Clone repository
git clone https://github.com/bjpl/sinonimos_de_caminar.git
cd sinonimos_de_caminar

# Option 1: Open directly in browser
open index.html

# Option 2: Run local server (recommended)
python -m http.server 8000
# Visit http://localhost:8000

# Optional: Regenerate assets
cd scripts
node download_images.js          # Requires Unsplash API key
pip install edge-tts
python generate_audio.py         # Generates TTS audio
```

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
</details>

## Design System

**Color Palette:**
- Earth tones inspired by natural pathways
- Rich browns (#3d2e1f, #2a1f15)
- Warm tans (#a89080, #c1a898)

**Typography:**
- Cormorant Garamond (Spanish content)
- Inter (UI elements)

**Layout:**
- Responsive masonry grid
- Smooth 60fps animations
- Generous whitespace
- Mobile-first approach

## Attribution

**Images:**
- Source: Unsplash
- License: Unsplash License (free use)
- Credits: See data/image_credits.json

**Audio:**
- Generated: Microsoft Edge TTS
- Voices: 8 LATAM speakers (see data/audio_metadata.json)

**Content:**
- Definitions, examples, cultural notes: Original work
- License: Educational use with attribution

## Related Projects

Part of the Spanish Verb Synonyms Series:
- [Sinónimos de Ver](https://bjpl.github.io/sinonimos_de_ver) - Visual verbs
- [Sinónimos de Hablar](https://bjpl.github.io/sinonimos_de_hablar) - Speaking verbs
- [Sinónimos de Comer](https://bjpl.github.io/sinonimos_de_comer) - Eating verbs

---

**Explora la riqueza del movimiento en español**
