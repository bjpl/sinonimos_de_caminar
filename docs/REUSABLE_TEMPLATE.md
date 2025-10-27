# Spanish Verb Synonyms App - Reusable Template

**Complete specification for building "Sinónimos de Caminar" - an elegant, visual Spanish vocabulary learning app with multiple LATAM voices and curated imagery.**

---

## Project Configuration

```json
{
  "targetVerb": "caminar",
  "appTitle": "Sinónimos de Caminar",
  "description": "Learning walking/movement synonyms in LATAM Spanish",
  "semanticField": "movimiento a pie",
  "targetAudience": "Intermediate/Advanced learners",
  "synonymCount": 14,
  "colorTheme": "earth-tones",
  "visualTheme": "walking-journey-paths"
}
```

---

## Complete File Structure

```
sinonimos_de_caminar/
├── src/
│   ├── index.html                      # Main application
│   ├── styles/
│   │   └── main.css                    # Complete styling
│   ├── scripts/
│   │   └── app.js                      # Application logic
│   ├── data/
│   │   ├── synonyms.json               # YOUR CONTENT HERE
│   │   ├── image_credits.json          # Auto-generated
│   │   └── audio_metadata.json         # Auto-generated
│   └── assets/
│       ├── images/
│       │   ├── hero/hero.jpg
│       │   └── synonyms/*.jpg
│       └── audio/
│           ├── verbs/*.mp3
│           └── examples/*.mp3
├── scripts/
│   ├── download_images.js              # Unsplash downloader
│   ├── generate_audio.py               # Edge TTS generator
│   └── download_missing.js             # Fallback downloader
├── docs/
│   ├── content/
│   │   └── caminar_synonyms_research.md
│   ├── architecture/
│   │   └── app_design.md
│   ├── reviews/
│   │   └── ux_sophistication_review.md
│   ├── BUILD_PROCESS_CHECKLIST.md
│   ├── REUSABLE_TEMPLATE.md
│   └── PROJECT_SPECIFICATION.md
├── tests/
├── .gitignore
├── README.md
└── CLAUDE.md
```

---

## Phase 1: Content Research & Creation

### Target Synonyms for "Caminar"

**Movement Verbs (Walking):**

1. **andar** - General walking, most common substitute
   - Context: cotidiano
   - Formality: neutral
   - Visual: person walking city street

2. **pasear** - Leisurely stroll, walking for pleasure
   - Context: cotidiano
   - Formality: neutral
   - Visual: leisurely walk park nature

3. **deambular** - Wandering aimlessly
   - Context: literario
   - Formality: formal
   - Visual: wandering urban landscape

4. **vagar** - Roaming, vagabond-like walking
   - Context: narrativo
   - Formality: formal
   - Visual: lone person wandering nature

5. **transitar** - Passing through, traversing
   - Context: profesional
   - Formality: formal
   - Visual: pedestrian crossing street

6. **peregrinar** - Pilgrimage walking
   - Context: literario
   - Formality: formal
   - Visual: pilgrimage path journey

7. **desplazarse** - Moving/displacing oneself
   - Context: profesional
   - Formality: neutral
   - Visual: person moving commute

8. **circular** - Circulating, moving around
   - Context: profesional
   - Formality: formal
   - Visual: people circulating plaza

9. **recorrer** - Traversing, covering distance
   - Context: cotidiano
   - Formality: neutral
   - Visual: hiking trail mountain

10. **trajinar** - Bustling about, busy walking
    - Context: cotidiano
    - Formality: neutral
    - Visual: busy market street

11. **rondar** - Prowling, patrolling
    - Context: narrativo
    - Formality: formal
    - Visual: person walking night street

12. **callejear** - Street wandering
    - Context: cotidiano
    - Formality: neutral
    - Visual: narrow alley exploration

13. **vagabundear** - Vagabonding, wandering as traveler
    - Context: narrativo
    - Formality: formal
    - Visual: wanderer backpack road

14. **errar** - Wandering, roaming (literary)
    - Context: literario
    - Formality: formal
    - Visual: lost person empty landscape

---

## Phase 2: Data Structure Template

### synonyms.json Template

```json
[
  {
    "verb": "andar",
    "pronunciation": "an-dar",
    "quickDefinition": "Moverse de un lugar a otro a pie",
    "definition": "Verbo general para indicar el movimiento a pie. Es el sustituto más común de 'caminar' en el habla cotidiana latinoamericana.",
    "formality": "neutral",
    "context": "cotidiano",
    "regions": ["general"],
    "image": "assets/images/synonyms/andar.jpg",
    "examples": [
      "Me gusta andar por el parque cada mañana.",
      "Anduvimos toda la tarde buscando el museo.",
      "Prefiero andar en lugar de tomar el autobús."
    ],
    "culturalNotes": "Universal en LATAM. Es la forma más natural de decir 'caminar' en conversación diaria. En algunos contextos, 'andar' también puede significar 'funcionar' (el coche anda bien)."
  }
]
```

---

## Phase 3: Asset Generation

### Image Search Queries (Unsplash)

```javascript
const SYNONYM_IMAGES = {
  hero: {
    query: 'walking path journey scenic trail nature',
    filename: 'hero.jpg'
  },
  andar: {
    query: 'person walking city street daylight urban',
    filename: 'andar.jpg'
  },
  pasear: {
    query: 'leisurely walk park nature sunset people',
    filename: 'pasear.jpg'
  },
  deambular: {
    query: 'wandering urban landscape alone contemplative',
    filename: 'deambular.jpg'
  },
  vagar: {
    query: 'lone person wandering nature wilderness path',
    filename: 'vagar.jpg'
  },
  transitar: {
    query: 'pedestrian crossing street urban movement',
    filename: 'transitar.jpg'
  },
  peregrinar: {
    query: 'pilgrimage path camino journey walking spiritual',
    filename: 'peregrinar.jpg'
  },
  desplazarse: {
    query: 'person moving walking commute travel motion',
    filename: 'desplazarse.jpg'
  },
  circular: {
    query: 'people circulating public space plaza crowd',
    filename: 'circular.jpg'
  },
  recorrer: {
    query: 'hiking trail mountain path trekking adventure',
    filename: 'recorrer.jpg'
  },
  trajinar: {
    query: 'busy person walking market street bustling activity',
    filename: 'trajinar.jpg'
  },
  rondar: {
    query: 'person walking night street patrol urban dark',
    filename: 'rondar.jpg'
  },
  callejear: {
    query: 'narrow street alley walking exploration cobblestone',
    filename: 'callejear.jpg'
  },
  vagabundear: {
    query: 'wanderer backpack traveler road journey nomad',
    filename: 'vagabundear.jpg'
  },
  errar: {
    query: 'lost person wandering empty landscape solitary',
    filename: 'errar.jpg'
  }
};
```

### Voice Mapping (LATAM Diversity)

```python
VERB_VOICE_MAPPING = {
    "andar": "mx_female_1",        # Mexican female - Dalia
    "pasear": "co_male_1",         # Colombian male - Gonzalo
    "deambular": "ar_female_1",    # Argentine female - Elena
    "vagar": "mx_male_1",          # Mexican male - Jorge
    "transitar": "us_female_1",    # US female - Paloma
    "peregrinar": "co_female_1",   # Colombian female - Salome
    "desplazarse": "ar_male_1",    # Argentine male - Tomás
    "circular": "us_male_1",       # US male - Alonso
    "recorrer": "mx_female_1",     # Mexican female - Dalia
    "trajinar": "co_male_1",       # Colombian male - Gonzalo
    "rondar": "ar_female_1",       # Argentine female - Elena
    "callejear": "mx_male_1",      # Mexican male - Jorge
    "vagabundear": "us_female_1",  # US female - Paloma
    "errar": "co_female_1",        # Colombian female - Salome
}
```

---

## Phase 4: Visual Design System

### Color Palette (Earth Tones)

```css
:root {
    /* Primary Colors - Earth/Path Theme */
    --color-primary: #3d2e1f;      /* Dark brown - earth */
    --color-secondary: #6b5d4f;    /* Medium brown - path */
    --color-accent: #a89080;       /* Light brown/tan - sand */
    --color-light: #f5f1ed;        /* Off-white - clouds */

    /* Semantic Colors */
    --color-bg: #fafaf8;
    --color-card-bg: #ffffff;
    --color-text: #2c2c2c;
    --color-text-light: #6b6b6b;
    --color-border: #e5e5e5;
    --color-hover: rgba(61, 46, 31, 0.08);

    /* Audio Player */
    --color-audio: #4a90e2;
    --color-audio-playing: #2ecc71;

    /* Typography */
    --font-serif: 'Lora', serif;
    --font-sans: 'Inter', sans-serif;
}
```

### Typography Scale

```css
/* Headings */
h1: 2.5rem (40px) - Hero title
h2: 2rem (32px) - Card verb
h3: 1.5rem (24px) - Modal verb
h4: 1.25rem (20px) - Section headers
h5: 1.125rem (18px) - Subsections

/* Body */
body: 1rem (16px) - Base text
.definition: 1.125rem (18px) - Definitions
.example: 1rem (16px) - Example sentences
.cultural-note: 0.9375rem (15px) - Cultural notes
.label: 0.875rem (14px) - UI labels
.caption: 0.8125rem (13px) - Image credits
```

---

## Phase 5: Frontend Customization

### HTML Customizations Needed

```html
<!-- Update these sections only -->
<title>Sinónimos de Caminar | Explorando el Lenguaje del Movimiento</title>
<meta name="description" content="Una colección elegante de sinónimos del verbo 'caminar' en español latinoamericano con audio multi-voz y fotografías contextuales">

<h1 class="hero-title">Sinónimos de Caminar</h1>
<p class="hero-subtitle">Descubre la riqueza del movimiento a pie en español</p>
```

### CSS Customizations (Optional)

Only if you want different colors from earth tones:

```css
/* Change primary color palette */
:root {
    --color-primary: #[YOUR_COLOR];
    --color-secondary: #[YOUR_COLOR];
    --color-accent: #[YOUR_COLOR];
}
```

### JavaScript (No Changes Needed)

The JavaScript is fully template-ready and works dynamically with any synonym data.

---

## Phase 6: Quality Checklist

### Content Quality
- [ ] 14 sophisticated walking synonyms (not basic)
- [ ] Nuanced definitions explain walking style/purpose
- [ ] 3 authentic examples per synonym
- [ ] Cultural notes add LATAM insight
- [ ] No typos or grammatical errors

### Visual Quality
- [ ] High-quality contextual images
- [ ] Images represent semantic concepts of walking
- [ ] Consistent landscape orientation
- [ ] Proper photographer attribution
- [ ] Earth tone theme throughout

### Audio Quality
- [ ] 8 different LATAM voices
- [ ] Clear pronunciation
- [ ] Natural intonation
- [ ] Consistent volume
- [ ] 56 files total (14 verbs + 42 examples)

### Technical Quality
- [ ] Loads in < 3 seconds
- [ ] 60fps animations
- [ ] Mobile responsive
- [ ] Filters work correctly
- [ ] Search real-time
- [ ] Audio plays reliably
- [ ] No console errors

---

## Phase 7: Deployment

### GitHub Pages

```bash
# Push to main
git add .
git commit -m "feat: Complete sinonimos_de_caminar app"
git push -u origin main

# Enable in Settings → Pages → /src folder
```

### Netlify

```toml
# netlify.toml
[build]
  publish = "src"
```

### Vercel

```bash
vercel --prod
# Select src/ as root directory
```

---

## Time Estimates

- **Research & Content**: 2.5-4.5 hours
- **Asset Generation**: 1-1.5 hours
- **Implementation**: 50 minutes
- **Testing & Refinement**: 30-60 minutes
- **Documentation**: 30 minutes
- **Deployment**: 15 minutes

**Total: 5-7 hours**

---

## Quick Commands Reference

```bash
# Setup
git init
git remote add origin https://github.com/bjpl/sinonimos_de_caminar.git
mkdir -p src/{styles,scripts,data,assets/{images/{synonyms,hero},audio/{verbs,examples}}}

# Assets
node scripts/download_images.js
python scripts/generate_audio.py

# Testing
python -m http.server 8000
# http://localhost:8000/src/index.html

# Deployment
git add .
git commit -m "feat: Complete app"
git push -u origin main
```

---

**You now have a complete blueprint for building "Sinónimos de Caminar"!** 🚶‍♂️🎯
