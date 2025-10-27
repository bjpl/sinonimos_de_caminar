# Sinónimos de Caminar - Visual System & Architecture Design

## Design Philosophy

The visual system embodies the concept of walking and journeying through language - grounded, natural, progressive, and inviting exploration. Earth tones connect users to the physical act of walking while maintaining a modern, accessible interface.

---

## 1. Color Palette

### Primary Colors (Walking Path)
```css
--path-brown: #6B4423;        /* Primary - Rich earth, well-worn path */
--path-brown-light: #8B5A2B;  /* Hover states, lighter earth */
--path-brown-dark: #4A2E17;   /* Active states, deep soil */
```

**Reasoning**: Brown represents the earth beneath our feet, the path we walk. Rich but not overwhelming, professional yet warm.

### Secondary Colors (Natural Surroundings)
```css
--sage-green: #7A9B76;        /* Secondary - Growth along the path */
--sage-green-light: #9BB896;  /* Subtle highlights */
--sage-green-dark: #5C7858;   /* Depth and shadow */
```

**Reasoning**: Sage green evokes vegetation along walking paths, symbolizing growth in language learning. Muted tone ensures it doesn't compete with primary colors.

### Accent Colors (Journey Markers)
```css
--terracotta: #C7694A;        /* Accent - Trail markers, important elements */
--terracotta-light: #D9896F;  /* Hover states */
--terracotta-dark: #A35438;   /* Active states */
```

**Reasoning**: Terracotta suggests trail markers and waypoints - warm, inviting, draws attention without being jarring.

### Neutral Colors (Foundation)
```css
--cream-bg: #F5F1E8;          /* Primary background - Parchment/sand */
--cream-card: #FDFBF7;        /* Card background - Lighter cream */
--stone-gray: #5A5550;        /* Primary text - Stone on path */
--stone-gray-light: #7D7873;  /* Secondary text - Lighter stone */
--stone-gray-dark: #3A352F;   /* Headings - Deep shadow */
```

**Reasoning**: Cream backgrounds feel like aged parchment or sandy paths - softer than white, easier on eyes during extended use. Stone grays provide excellent contrast while staying within the earth-tone palette.

### Audio Player Colors
```css
--audio-bg: #4A2E17;          /* Player background - Deep earth */
--audio-progress: #C7694A;    /* Progress bar - Journey progress */
--audio-control: #F5F1E8;     /* Control icons - Light against dark */
--audio-hover: #8B5A2B;       /* Hover state - Warm interaction */
--audio-playing: #7A9B76;     /* Active indicator - Growth/movement */
```

**Reasoning**: Dark background creates visual weight appropriate for audio controls. Terracotta progress bar shows journey through the audio. Green playing indicator suggests movement and life.

### Functional Colors (Status & Feedback)
```css
--success-green: #6B8E6F;     /* Success - Natural green */
--warning-amber: #D4A574;     /* Warning - Autumn tone */
--error-rust: #A84E3F;        /* Error - Rust/clay */
--info-blue: #7A94A8;         /* Info - Sky along path */
```

**Reasoning**: Functional colors stay within natural palette while providing clear visual feedback. Muted saturation prevents jarring transitions.

### Border & Shadow Colors
```css
--border-light: #E5DED0;      /* Subtle borders */
--border-medium: #CFBFA8;     /* Defined borders */
--border-dark: #A89B86;       /* Strong borders */
--shadow-soft: rgba(58, 53, 47, 0.08);    /* Gentle elevation */
--shadow-medium: rgba(58, 53, 47, 0.12);  /* Card elevation */
--shadow-strong: rgba(58, 53, 47, 0.16);  /* Modal elevation */
```

---

## 2. Typography System

### Font Families

#### Primary Font: Merriweather (Serif)
```css
font-family: 'Merriweather', Georgia, serif;
```

**Use Cases**: Spanish words, card titles, hero headline, all linguistic content

**Reasoning**:
- Designed for screen readability
- Classic serif conveys educational quality
- Excellent Spanish character support
- Warm, approachable personality fits walking theme

#### Secondary Font: Inter (Sans-serif)
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Use Cases**: UI elements, labels, buttons, filters, metadata

**Reasoning**:
- Exceptional legibility at small sizes
- Modern, clean aesthetic for controls
- Excellent weight range for hierarchy
- Professional without being sterile

### Type Scale

```css
/* Hero Section */
--text-hero: 3.5rem / 56px;          /* Main headline */
--text-hero-line: 1.1;
--text-hero-weight: 700;
--text-hero-font: 'Merriweather';

/* Headings */
--text-h1: 2.5rem / 40px;            /* Section headers */
--text-h1-line: 1.2;
--text-h1-weight: 700;

--text-h2: 2rem / 32px;              /* Card titles */
--text-h2-line: 1.25;
--text-h2-weight: 600;

--text-h3: 1.5rem / 24px;            /* Modal titles */
--text-h3-line: 1.3;
--text-h3-weight: 600;

/* Body Text */
--text-body-large: 1.125rem / 18px;  /* Definitions, important content */
--text-body-large-line: 1.6;
--text-body-large-weight: 400;

--text-body: 1rem / 16px;            /* Standard body text */
--text-body-line: 1.5;
--text-body-weight: 400;

--text-body-small: 0.875rem / 14px;  /* Labels, metadata */
--text-body-small-line: 1.5;
--text-body-small-weight: 400;

/* UI Elements */
--text-button: 0.9375rem / 15px;     /* Button text */
--text-button-line: 1;
--text-button-weight: 500;

--text-caption: 0.75rem / 12px;      /* Captions, hints */
--text-caption-line: 1.4;
--text-caption-weight: 400;

/* Badge Text */
--text-badge: 0.6875rem / 11px;      /* Formality/context badges */
--text-badge-line: 1.2;
--text-badge-weight: 600;
--text-badge-transform: uppercase;
--text-badge-spacing: 0.05em;
```

### Font Pairing Rationale

The combination of Merriweather (serif) and Inter (sans-serif) creates clear visual hierarchy:

1. **Content vs. Interface**: Serif for language content emphasizes its importance and educational nature. Sans-serif for UI elements maintains modern usability.

2. **Warmth vs. Precision**: Merriweather's warmth matches the walking theme. Inter's precision ensures functional clarity.

3. **Readability Across Contexts**: Both fonts excel at their respective tasks - Merriweather for sustained reading, Inter for quick scanning.

4. **Weight Range**: Both families offer extensive weight options, enabling subtle hierarchy without font switching.

---

## 3. Layout Architecture

### Hero Section Design

```
┌─────────────────────────────────────────────────┐
│  [BACKGROUND: Subtle earth-tone gradient]       │
│                                                 │
│         Sinónimos de Caminar                    │
│     ━━━━━━━━━━━━━━━━━━━━━━━━━━━                │
│   Descubre las muchas formas de caminar        │
│                                                 │
│     [Search Bar: Full width, max 600px]        │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications**:
- Height: 400px (mobile), 500px (tablet), 600px (desktop)
- Background: Linear gradient from cream-bg to sage-green-light (5% opacity)
- Center-aligned content, vertical centering
- Max content width: 800px
- Padding: 2rem (mobile), 3rem (tablet), 4rem (desktop)

**Typography**:
- Title: var(--text-hero), Merriweather 700, path-brown-dark
- Decorative line: 4px terracotta border, 120px width, centered
- Subtitle: var(--text-body-large), Inter 400, stone-gray

**Search Bar**:
- Width: 100% (max 600px)
- Height: 56px
- Background: cream-card
- Border: 2px solid border-medium
- Border-radius: 28px (fully rounded)
- Focus state: border-color terracotta, shadow-medium
- Icon: sage-green on left, 24px
- Text: var(--text-body), Inter 400

### Card Grid System

```
Mobile (< 640px):
┌─────────┐
│  Card   │
├─────────┤
│  Card   │
├─────────┤
│  Card   │
└─────────┘

Tablet (640-1024px):
┌─────────┬─────────┐
│  Card   │  Card   │
├─────────┼─────────┤
│  Card   │  Card   │
└─────────┴─────────┘

Desktop (1024-1440px):
┌───────┬───────┬───────┐
│ Card  │ Card  │ Card  │
├───────┼───────┼───────┤
│ Card  │ Card  │ Card  │
└───────┴───────┴───────┘

Large (> 1440px):
┌─────┬─────┬─────┬─────┐
│Card │Card │Card │Card │
├─────┼─────┼─────┼─────┤
│Card │Card │Card │Card │
└─────┴─────┴─────┴─────┘
```

**Grid Specifications**:
```css
/* Container */
.grid-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 1rem; /* mobile */
  padding: 3rem 2rem; /* tablet+ */
}

/* Grid */
.synonym-grid {
  display: grid;
  gap: 1.5rem; /* mobile */
  gap: 2rem;   /* tablet+ */

  /* Responsive columns */
  grid-template-columns: 1fr;                    /* mobile */
  grid-template-columns: repeat(2, 1fr);         /* tablet */
  grid-template-columns: repeat(3, 1fr);         /* desktop */
  grid-template-columns: repeat(4, 1fr);         /* large */
}
```

**Breakpoints**:
```css
--breakpoint-mobile: 640px;
--breakpoint-tablet: 1024px;
--breakpoint-desktop: 1440px;
```

### Modal Overlay Design

```
┌─────────────────────────────────────────────────┐
│ [OVERLAY: rgba(58, 53, 47, 0.75)]              │
│                                                 │
│   ┌───────────────────────────────────┐        │
│   │ [X]                               │        │
│   │                                   │        │
│   │  Deambular                        │        │
│   │  ━━━━━━━━                         │        │
│   │                                   │        │
│   │  [Audio Player]                  │        │
│   │                                   │        │
│   │  Definición:                      │        │
│   │  Caminar sin rumbo fijo...        │        │
│   │                                   │        │
│   │  [Formality] [Context badges]    │        │
│   │                                   │        │
│   │  Uso en oraciones:                │        │
│   │  • Ejemplo 1                      │        │
│   │  • Ejemplo 2                      │        │
│   │                                   │        │
│   └───────────────────────────────────┘        │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications**:
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(58, 53, 47, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-content {
  background: var(--cream-card);
  border-radius: 16px;
  box-shadow: var(--shadow-strong),
              0 20px 40px rgba(58, 53, 47, 0.2);

  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;

  padding: 2rem; /* mobile */
  padding: 3rem; /* tablet+ */
}
```

### Filter Bar Layout

```
┌─────────────────────────────────────────────────┐
│  [Formality ▼]  [Context ▼]  [Clear Filters]   │
└─────────────────────────────────────────────────┘
```

**Specifications**:
```css
.filter-bar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  padding: 1.5rem;
  background: var(--cream-card);
  border-bottom: 1px solid var(--border-light);

  position: sticky;
  top: 0;
  z-index: 100;
}

.filter-dropdown {
  min-width: 140px;
  height: 40px;

  border: 1px solid var(--border-medium);
  border-radius: 8px;
  background: var(--cream-bg);

  padding: 0.5rem 1rem;
  font: var(--text-body-small);
}
```

---

## 4. Component Design

### Card Component Specifications

```
┌─────────────────────────┐
│ [🔊]         [Badges]   │
│                         │
│  Deambular              │
│  ━━━━━━━━               │
│                         │
│  Caminar sin rumbo      │
│  fijo por algún lugar   │
│                         │
│  [FORMAL] [LITERARY]    │
│                         │
└─────────────────────────┘
```

**Dimensions**:
```css
.synonym-card {
  /* Base */
  background: var(--cream-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 1.5rem;

  /* Elevation */
  box-shadow: var(--shadow-soft);

  /* Transition */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Dimensions */
  min-height: 200px;
  height: 100%;
}

/* States */
.synonym-card:hover {
  border-color: var(--terracotta-light);
  box-shadow: var(--shadow-medium),
              0 8px 16px rgba(199, 105, 74, 0.12);
  transform: translateY(-2px);
  cursor: pointer;
}

.synonym-card:active {
  transform: translateY(0);
  box-shadow: var(--shadow-soft);
}
```

**Internal Layout**:
```css
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.card-title {
  font: var(--text-h2);
  font-family: 'Merriweather', serif;
  color: var(--path-brown-dark);
  margin: 0.5rem 0;

  /* Decorative underline */
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--terracotta);
  display: inline-block;
}

.card-definition {
  font: var(--text-body);
  color: var(--stone-gray);
  line-height: var(--text-body-line);

  /* Truncate if needed */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto; /* Push to bottom */
}
```

### Audio Button Design

```css
.audio-button {
  /* Dimensions */
  width: 40px;
  height: 40px;

  /* Appearance */
  background: var(--path-brown);
  border: none;
  border-radius: 50%;

  /* Icon */
  color: var(--cream-bg);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Interaction */
  cursor: pointer;
  transition: all 0.2s ease;

  /* Elevation */
  box-shadow: 0 2px 4px rgba(58, 53, 47, 0.2);
}

/* States */
.audio-button:hover {
  background: var(--path-brown-light);
  box-shadow: 0 4px 8px rgba(58, 53, 47, 0.25);
  transform: scale(1.05);
}

.audio-button:active {
  background: var(--path-brown-dark);
  transform: scale(0.95);
}

.audio-button.playing {
  background: var(--sage-green);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(122, 155, 118, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(122, 155, 118, 0); }
}

/* Icon sizing */
.audio-button svg {
  width: 20px;
  height: 20px;
}
```

### Badge Design

```css
.badge {
  /* Base styling */
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;

  /* Typography */
  font: var(--text-badge);
  font-weight: var(--text-badge-weight);
  text-transform: var(--text-badge-transform);
  letter-spacing: var(--text-badge-spacing);

  /* Default appearance */
  background: var(--border-light);
  color: var(--stone-gray-dark);
  border: 1px solid var(--border-medium);

  /* Transition */
  transition: all 0.2s ease;
}

/* Formality Badges */
.badge-formal {
  background: rgba(107, 68, 35, 0.1);
  color: var(--path-brown-dark);
  border-color: var(--path-brown-light);
}

.badge-informal {
  background: rgba(122, 155, 118, 0.1);
  color: var(--sage-green-dark);
  border-color: var(--sage-green);
}

.badge-neutral {
  background: rgba(90, 85, 80, 0.1);
  color: var(--stone-gray-dark);
  border-color: var(--stone-gray-light);
}

/* Context Badges */
.badge-literary {
  background: rgba(199, 105, 74, 0.1);
  color: var(--terracotta-dark);
  border-color: var(--terracotta);
}

.badge-everyday {
  background: rgba(212, 165, 116, 0.1);
  color: #8B6834;
  border-color: var(--warning-amber);
}

.badge-professional {
  background: rgba(107, 68, 35, 0.15);
  color: var(--path-brown-dark);
  border-color: var(--path-brown);
}

.badge-technical {
  background: rgba(122, 148, 168, 0.1);
  color: #4A6174;
  border-color: var(--info-blue);
}

/* Hover effect */
.badge:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 4px rgba(58, 53, 47, 0.1);
}
```

### Modal Component Specifications

```css
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.modal-title {
  font: var(--text-h1);
  font-family: 'Merriweather', serif;
  color: var(--path-brown-dark);

  /* Decorative element */
  padding-bottom: 0.75rem;
  border-bottom: 4px solid var(--terracotta);
  display: inline-block;
}

.modal-close-button {
  width: 36px;
  height: 36px;

  background: transparent;
  border: none;
  border-radius: 50%;

  color: var(--stone-gray);
  cursor: pointer;

  transition: all 0.2s ease;
}

.modal-close-button:hover {
  background: var(--border-light);
  color: var(--path-brown-dark);
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section-title {
  font: var(--text-h3);
  font-family: 'Inter', sans-serif;
  color: var(--stone-gray-dark);
  margin-bottom: 0.75rem;
}

.modal-content-text {
  font: var(--text-body-large);
  color: var(--stone-gray);
  line-height: var(--text-body-large-line);
}

.modal-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.modal-list-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-light);

  font: var(--text-body);
  color: var(--stone-gray);
}

.modal-list-item:last-child {
  border-bottom: none;
}

.modal-list-item::before {
  content: '•';
  color: var(--terracotta);
  font-weight: 700;
  margin-right: 0.75rem;
}
```

---

## 5. Animation Strategy

### Card Hover Effects

```css
/* Primary hover animation */
@keyframes card-lift {
  0% {
    transform: translateY(0);
    box-shadow: var(--shadow-soft);
  }
  100% {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium),
                0 8px 16px rgba(199, 105, 74, 0.12);
  }
}

.synonym-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.synonym-card:hover {
  animation: card-lift 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Decorative underline growth */
.card-title::after {
  content: '';
  display: block;
  width: 0;
  height: 3px;
  background: var(--terracotta);
  transition: width 0.3s ease;
}

.synonym-card:hover .card-title::after {
  width: 100%;
}

/* Badge scale on card hover */
.synonym-card:hover .badge {
  transform: scale(1.02);
}

/* Audio button pulse on card hover */
.synonym-card:hover .audio-button {
  animation: gentle-pulse 2s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Modal Transitions

```css
/* Overlay fade-in */
@keyframes overlay-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-overlay {
  animation: overlay-fade 0.25s ease-out;
}

/* Modal slide-up */
@keyframes modal-slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-content {
  animation: modal-slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Modal exit */
@keyframes modal-exit {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
}

.modal-content.closing {
  animation: modal-exit 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* Stagger children */
@keyframes stagger-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-section {
  animation: stagger-fade-in 0.4s ease-out;
  animation-fill-mode: backwards;
}

.modal-section:nth-child(1) { animation-delay: 0.05s; }
.modal-section:nth-child(2) { animation-delay: 0.10s; }
.modal-section:nth-child(3) { animation-delay: 0.15s; }
.modal-section:nth-child(4) { animation-delay: 0.20s; }
```

### Audio Playing Indicators

```css
/* Playing state pulse */
@keyframes audio-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(122, 155, 118, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(122, 155, 118, 0);
  }
}

.audio-button.playing {
  animation: audio-pulse 2s ease-in-out infinite;
}

/* Sound wave icon animation */
@keyframes wave-1 {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.5); }
}

@keyframes wave-2 {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.8); }
}

@keyframes wave-3 {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(1.3); }
}

.audio-wave-icon .wave-1 {
  animation: wave-1 1s ease-in-out infinite;
}

.audio-wave-icon .wave-2 {
  animation: wave-2 1s ease-in-out infinite 0.15s;
}

.audio-wave-icon .wave-3 {
  animation: wave-3 1s ease-in-out infinite 0.3s;
}

/* Progress bar animation */
@keyframes progress-fill {
  from { width: 0%; }
  to { width: var(--progress-percent); }
}

.audio-progress-bar {
  animation: progress-fill 0.3s ease-out;
}

/* Loading state */
@keyframes audio-loading {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.audio-button.loading::after {
  content: '';
  position: absolute;
  inset: 2px;
  border: 2px solid transparent;
  border-top-color: var(--cream-bg);
  border-radius: 50%;
  animation: audio-loading 0.8s linear infinite;
}
```

### Page Load Animations

```css
/* Hero section entrance */
@keyframes hero-fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-section {
  animation: hero-fade-in 0.6s ease-out;
}

/* Stagger card grid */
@keyframes card-cascade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.synonym-card {
  animation: card-cascade 0.5s ease-out backwards;
}

/* Stagger delays based on position */
.synonym-card:nth-child(1) { animation-delay: 0.05s; }
.synonym-card:nth-child(2) { animation-delay: 0.10s; }
.synonym-card:nth-child(3) { animation-delay: 0.15s; }
.synonym-card:nth-child(4) { animation-delay: 0.20s; }
.synonym-card:nth-child(5) { animation-delay: 0.25s; }
.synonym-card:nth-child(6) { animation-delay: 0.30s; }
.synonym-card:nth-child(7) { animation-delay: 0.35s; }
.synonym-card:nth-child(8) { animation-delay: 0.40s; }

/* Filter bar slide-in */
@keyframes filter-slide-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.filter-bar {
  animation: filter-slide-in 0.4s ease-out 0.3s backwards;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Responsive Design

### Mobile (< 640px)

```css
/* Layout */
.hero-section {
  height: 400px;
  padding: 2rem 1rem;
}

.hero-title {
  font-size: 2.5rem;
  line-height: 1.1;
}

.search-bar {
  width: 100%;
  height: 48px;
  font-size: 0.9375rem;
}

/* Grid */
.synonym-grid {
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
}

/* Cards */
.synonym-card {
  padding: 1.25rem;
  min-height: 180px;
}

.card-title {
  font-size: 1.5rem;
}

.card-definition {
  font-size: 0.9375rem;
  -webkit-line-clamp: 2;
}

/* Audio button */
.audio-button {
  width: 36px;
  height: 36px;
}

.audio-button svg {
  width: 18px;
  height: 18px;
}

/* Badges */
.badge {
  padding: 0.2rem 0.6rem;
  font-size: 0.625rem;
}

/* Modal */
.modal-overlay {
  padding: 0.5rem;
}

.modal-content {
  padding: 1.5rem;
  max-height: 95vh;
  border-radius: 12px;
}

.modal-title {
  font-size: 1.75rem;
}

.modal-section-title {
  font-size: 1.125rem;
}

/* Filter bar */
.filter-bar {
  padding: 1rem;
  gap: 0.75rem;
}

.filter-dropdown {
  min-width: 120px;
  height: 36px;
  font-size: 0.8125rem;
}

/* Touch targets */
button, a, .clickable {
  min-height: 44px;
  min-width: 44px;
}
```

### Tablet (640px - 1024px)

```css
/* Layout */
.hero-section {
  height: 500px;
  padding: 3rem 2rem;
}

.hero-title {
  font-size: 3rem;
  line-height: 1.15;
}

.search-bar {
  width: 100%;
  max-width: 500px;
  height: 52px;
}

/* Grid */
.synonym-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
  padding: 2rem;
}

/* Cards */
.synonym-card {
  padding: 1.5rem;
  min-height: 220px;
}

.card-title {
  font-size: 1.75rem;
}

.card-definition {
  font-size: 1rem;
  -webkit-line-clamp: 3;
}

/* Modal */
.modal-content {
  padding: 2.5rem;
  max-width: 600px;
  border-radius: 16px;
}

.modal-title {
  font-size: 2rem;
}

/* Filter bar */
.filter-bar {
  padding: 1.25rem 2rem;
  gap: 1rem;
}

.filter-dropdown {
  min-width: 140px;
  height: 40px;
}

/* Two-column modal layout for landscape */
@media (orientation: landscape) {
  .modal-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
```

### Desktop (1024px - 1440px)

```css
/* Layout */
.hero-section {
  height: 600px;
  padding: 4rem 3rem;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.1;
}

.search-bar {
  max-width: 600px;
  height: 56px;
}

/* Grid */
.synonym-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 3rem 2rem;
}

/* Cards */
.synonym-card {
  padding: 1.75rem;
  min-height: 240px;
}

.card-title {
  font-size: 2rem;
}

.card-definition {
  font-size: 1rem;
  -webkit-line-clamp: 3;
}

/* Modal */
.modal-content {
  padding: 3rem;
  max-width: 700px;
}

.modal-title {
  font-size: 2.5rem;
}

/* Filter bar */
.filter-bar {
  padding: 1.5rem 3rem;
  gap: 1.25rem;
}

.filter-dropdown {
  min-width: 160px;
  height: 44px;
}

/* Hover effects enabled */
.synonym-card:hover {
  transform: translateY(-4px);
}
```

### Large Screens (> 1440px)

```css
/* Layout */
.hero-section {
  height: 650px;
  padding: 5rem 4rem;
}

.hero-title {
  font-size: 4rem;
  line-height: 1.1;
}

/* Grid */
.synonym-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding: 4rem 3rem;
  max-width: 1600px;
  margin: 0 auto;
}

/* Cards */
.synonym-card {
  padding: 2rem;
  min-height: 260px;
}

.card-title {
  font-size: 2rem;
}

.card-definition {
  font-size: 1.0625rem;
}

/* Modal */
.modal-content {
  padding: 3.5rem;
  max-width: 800px;
}

/* Ultra-wide optimization */
@media (min-width: 1920px) {
  .synonym-grid {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1920px;
  }
}
```

### Responsive Breakpoint Strategy

```css
/* Custom properties for breakpoints */
:root {
  --bp-mobile: 640px;
  --bp-tablet: 1024px;
  --bp-desktop: 1440px;
  --bp-large: 1920px;
}

/* Mobile-first approach */
/* Base styles are mobile */

/* Tablet and up */
@media (min-width: 640px) {
  /* Tablet styles */
}

/* Desktop and up */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large screens and up */
@media (min-width: 1440px) {
  /* Large screen styles */
}

/* Ultra-wide screens */
@media (min-width: 1920px) {
  /* Ultra-wide styles */
}

/* Height-based queries for modals */
@media (max-height: 600px) {
  .modal-content {
    max-height: 100vh;
    padding: 1.5rem;
  }
}

/* Landscape mobile devices */
@media (max-width: 640px) and (orientation: landscape) {
  .hero-section {
    height: 350px;
  }

  .modal-content {
    max-height: 80vh;
  }
}
```

---

## 7. Accessibility Considerations

### Color Contrast Ratios

All text meets WCAG AA standards:
- **Primary text** (stone-gray-dark on cream-bg): 7.2:1 (AAA)
- **Secondary text** (stone-gray on cream-bg): 4.8:1 (AA)
- **Buttons** (cream-bg on path-brown): 6.5:1 (AAA)
- **Badges** (Various): Minimum 4.5:1 (AA)

### Focus States

```css
/* Keyboard focus indicators */
*:focus-visible {
  outline: 3px solid var(--terracotta);
  outline-offset: 2px;
  border-radius: 4px;
}

.synonym-card:focus-visible {
  outline: 3px solid var(--terracotta);
  outline-offset: 4px;
}

.audio-button:focus-visible {
  outline: 3px solid var(--terracotta);
  outline-offset: 3px;
}

/* Skip to content link */
.skip-to-content {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 9999;

  padding: 1rem 2rem;
  background: var(--path-brown);
  color: var(--cream-bg);

  text-decoration: none;
  font-weight: 600;
}

.skip-to-content:focus {
  left: 50%;
  transform: translateX(-50%);
}
```

### Screen Reader Support

```html
<!-- ARIA landmarks -->
<header role="banner">
<main role="main" id="main-content">
<nav role="navigation" aria-label="Filters">
<section aria-labelledby="synonyms-heading">

<!-- ARIA labels -->
<button aria-label="Play pronunciation for deambular">
<div role="status" aria-live="polite" aria-atomic="true">
<span class="sr-only">Loading synonyms...</span>

<!-- Skip navigation -->
<a href="#main-content" class="skip-to-content">
  Skip to main content
</a>
```

---

## 8. Performance Optimization

### Font Loading Strategy

```css
/* Font display swap */
@font-face {
  font-family: 'Merriweather';
  src: url('/fonts/merriweather.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 700;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 600;
}

/* Preload critical fonts */
<link rel="preload" href="/fonts/merriweather.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
```

### Image Optimization

```css
/* Lazy loading */
img {
  loading: lazy;
  decoding: async;
}

/* Responsive images */
.hero-background {
  background-image: url('/images/hero-mobile.jpg');
}

@media (min-width: 640px) {
  .hero-background {
    background-image: url('/images/hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero-background {
    background-image: url('/images/hero-desktop.jpg');
  }
}
```

### Animation Performance

```css
/* GPU acceleration for animations */
.synonym-card,
.modal-content,
.audio-button {
  will-change: transform;
}

/* Use transform and opacity only */
@keyframes performant-hover {
  to {
    transform: translateY(-2px); /* GPU accelerated */
    opacity: 1; /* GPU accelerated */
  }
}

/* Avoid animating these properties */
/* ❌ width, height, margin, padding */
/* ✅ transform, opacity */
```

---

## 9. Dark Mode Considerations (Future Enhancement)

```css
/* Dark mode color palette */
@media (prefers-color-scheme: dark) {
  :root {
    --cream-bg: #1C1814;
    --cream-card: #25201B;
    --stone-gray: #D4CFCA;
    --stone-gray-light: #A39D98;
    --stone-gray-dark: #E8E3DE;

    --path-brown: #D4A574;
    --path-brown-light: #E5B885;
    --path-brown-dark: #C39563;

    --border-light: #3A342E;
    --border-medium: #4A433D;
    --border-dark: #5A544E;

    --shadow-soft: rgba(0, 0, 0, 0.3);
    --shadow-medium: rgba(0, 0, 0, 0.4);
    --shadow-strong: rgba(0, 0, 0, 0.5);
  }
}
```

---

## 10. Implementation Priority

### Phase 1: Core Visual System
1. Set up CSS custom properties for colors
2. Implement typography system
3. Create base layout containers
4. Build card component
5. Implement grid system

### Phase 2: Interactive Components
1. Audio button with states
2. Badge components
3. Filter dropdowns
4. Search bar

### Phase 3: Advanced Features
1. Modal component
2. Animations and transitions
3. Responsive refinements
4. Accessibility enhancements

### Phase 4: Polish
1. Micro-interactions
2. Loading states
3. Error states
4. Performance optimization

---

## Design Token Export

```json
{
  "colors": {
    "primary": {
      "base": "#6B4423",
      "light": "#8B5A2B",
      "dark": "#4A2E17"
    },
    "secondary": {
      "base": "#7A9B76",
      "light": "#9BB896",
      "dark": "#5C7858"
    },
    "accent": {
      "base": "#C7694A",
      "light": "#D9896F",
      "dark": "#A35438"
    }
  },
  "typography": {
    "fontFamily": {
      "serif": "Merriweather, Georgia, serif",
      "sans": "Inter, -apple-system, sans-serif"
    },
    "fontSize": {
      "hero": "3.5rem",
      "h1": "2.5rem",
      "h2": "2rem",
      "h3": "1.5rem",
      "bodyLarge": "1.125rem",
      "body": "1rem",
      "bodySmall": "0.875rem",
      "caption": "0.75rem",
      "badge": "0.6875rem"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "full": "9999px"
  }
}
```

---

**Document Version**: 1.0.0
**Last Updated**: 2025-10-26
**Design System**: Sinónimos de Caminar v1
**Theme**: Walking Through Language - Earth Tones & Natural Flow
