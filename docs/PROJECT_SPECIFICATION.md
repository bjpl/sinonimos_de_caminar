# Project Specification - Sinónimos de Caminar

**Complete technical specification for an elegant, interactive Spanish vocabulary learning application**

---

## 1. Project Overview

### 1.1 Purpose
Create an educational web application that teaches sophisticated synonyms of the verb "caminar" (to walk) to intermediate and advanced Spanish learners, with emphasis on Latin American usage, pronunciation, and cultural context.

### 1.2 Target Audience
- Intermediate to Advanced Spanish learners (B1-C1 CEFR)
- English speakers learning LATAM Spanish
- Language enthusiasts interested in nuanced vocabulary
- Students preparing for DELE/SIELE exams

### 1.3 Core Value Proposition
- **Sophisticated vocabulary** beyond basic textbooks
- **Multi-voice audio** from 4 LATAM regions (Mexico, Colombia, Argentina, US/Neutral)
- **Contextual imagery** representing semantic concepts
- **Cultural insights** specific to LATAM usage
- **Elegant design** that respects the learner's intelligence

---

## 2. Core Features

### 2.1 Content Features

#### 14 Walking Synonyms
- **andar** (general walking)
- **pasear** (leisurely stroll)
- **deambular** (aimless wandering)
- **vagar** (roaming)
- **transitar** (passing through)
- **peregrinar** (pilgrimage)
- **desplazarse** (moving/displacing)
- **circular** (circulating)
- **recorrer** (traversing)
- **trajinar** (bustling about)
- **rondar** (prowling)
- **callejear** (street wandering)
- **vagabundear** (vagabonding)
- **errar** (wandering/roaming)

#### Data Per Synonym
- Infinitive form
- Syllabic pronunciation guide
- Quick definition (5-10 words)
- Full definition (20-50 words)
- Formality level (formal/neutral)
- Context (cotidiano/literario/profesional/narrativo)
- Regional usage (general or specific)
- 3 authentic example sentences
- Cultural notes on LATAM usage
- High-quality contextual image
- Audio pronunciation (verb + 3 examples)

### 2.2 Audio Features

#### Multi-Voice System
- 8 distinct LATAM voices
- 4 female voices (MX, CO, AR, US)
- 4 male voices (MX, CO, AR, US)
- Alternating voices for variety
- Same voice for verb + examples (consistency)

#### Audio Files
- 14 verb pronunciation files
- 42 example sentence files
- Total: 56 MP3 files (~1MB)
- Generated with Microsoft Edge TTS

### 2.3 Visual Features

#### Hero Section
- Full-screen hero with background image
- Walking/journey themed imagery
- App title and subtitle overlay
- Smooth scroll-down indicator

#### Card Grid
- Responsive grid layout (1-4 columns)
- Card design:
  - Large contextual image
  - Verb name
  - Quick definition
  - Formality badge
  - Context badge
  - Audio play button
  - Hover zoom effect

#### Detail Modal
- Full-screen overlay
- Large image with credit
- Complete definition
- Pronunciation guide
- 3 example sentences with audio
- Cultural notes
- Close on Escape/click outside

### 2.4 Interaction Features

#### Filtering System
- **Search**: Real-time text filtering
- **Formality**: Filter by formal/neutral
- **Context**: Filter by cotidiano/literario/profesional/narrativo
- **Reset**: Clear all filters button
- **Count display**: Shows X of 14 results

#### Audio Playback
- Click speaker icon to play
- Visual playing indicator (pulse animation)
- Auto-stop previous audio
- Smooth transitions
- Works in both card and modal views

---

## 3. Technical Architecture

### 3.1 Technology Stack

#### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern layout (Grid, Flexbox, Custom Properties)
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Fonts**: Google Fonts (Lora + Inter)

#### Asset Generation
- **Images**: Unsplash API (Node.js script)
- **Audio**: Microsoft Edge TTS (Python script)

#### Hosting
- **Primary**: GitHub Pages
- **Alternative**: Netlify, Vercel
- **Static files**: No server required

### 3.2 File Organization

```
src/
├── index.html              # Main application (single page)
├── styles/
│   └── main.css           # All styles (~700 lines)
├── scripts/
│   └── app.js             # All logic (~350 lines)
├── data/
│   ├── synonyms.json      # Content data
│   ├── image_credits.json # Auto-generated
│   └── audio_metadata.json # Auto-generated
└── assets/
    ├── images/            # JPG images (~1.5MB)
    └── audio/             # MP3 files (~1MB)
```

### 3.3 Data Structure

#### synonyms.json Schema
```json
{
  "verb": "string (infinitive)",
  "pronunciation": "string (syllables)",
  "quickDefinition": "string (5-10 words)",
  "definition": "string (20-50 words)",
  "formality": "formal | neutral",
  "context": "cotidiano | literario | profesional | narrativo",
  "regions": ["general"] | ["mexico", "colombia", "argentina"],
  "image": "path/to/image.jpg",
  "examples": ["sentence1", "sentence2", "sentence3"],
  "culturalNotes": "string (2-4 sentences)"
}
```

---

## 4. Visual Design System

### 4.1 Color Palette (Earth Tones)

```css
--color-primary: #3d2e1f      /* Dark brown - earth */
--color-secondary: #6b5d4f    /* Medium brown - path */
--color-accent: #a89080       /* Light brown/tan - sand */
--color-light: #f5f1ed        /* Off-white - clouds */
--color-bg: #fafaf8           /* Background */
--color-card-bg: #ffffff      /* Card background */
--color-text: #2c2c2c         /* Primary text */
--color-text-light: #6b6b6b   /* Secondary text */
--color-audio: #4a90e2        /* Audio button */
--color-audio-playing: #2ecc71 /* Audio playing */
```

### 4.2 Typography

#### Font Families
- **Serif**: 'Lora' - Spanish content, definitions, examples
- **Sans-serif**: 'Inter' - UI elements, labels, buttons

#### Type Scale
- Hero title: 2.5rem (40px)
- Card verb: 2rem (32px)
- Modal verb: 1.5rem (24px)
- Body text: 1rem (16px)
- Small text: 0.875rem (14px)

### 4.3 Spacing System
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96px

### 4.4 Layout

#### Breakpoints
- Mobile: < 640px (1 column)
- Tablet: 640-1024px (2 columns)
- Desktop: 1024-1440px (3 columns)
- Large: > 1440px (4 columns)

---

## 5. Performance Requirements

### 5.1 Load Time
- **Target**: < 3 seconds on 4G
- **Assets**: ~2.5MB total
- **Strategy**: Lazy loading, optimized images

### 5.2 Animation
- **Target**: 60fps smooth animations
- **Technique**: CSS transforms, will-change
- **Fallback**: Reduced motion for accessibility

### 5.3 Browser Support
- Chrome/Edge 90+ (primary)
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android 10+)

---

## 6. Accessibility Standards

### 6.1 WCAG 2.1 Level AA Compliance

#### Keyboard Navigation
- Tab through all interactive elements
- Escape to close modal
- Enter to activate buttons
- Focus indicators on all elements

#### Screen Reader Support
- Semantic HTML structure
- ARIA labels on buttons
- Alt text on all images
- Proper heading hierarchy

#### Visual Accessibility
- Color contrast ratio ≥ 4.5:1 (text)
- Color contrast ratio ≥ 3:1 (UI)
- No information by color alone
- Resizable text up to 200%

---

## 7. Development Workflow

### 7.1 Content Creation (2-4 hours)
1. Research synonyms
2. Write definitions and examples
3. Document cultural notes
4. Create synonyms.json

### 7.2 Asset Generation (1-1.5 hours)
1. Configure image search terms
2. Download images via Unsplash
3. Configure voice mapping
4. Generate audio with Edge TTS

### 7.3 Frontend Development (1 hour)
1. Copy template HTML/CSS/JS
2. Customize title, subtitle, colors
3. Test locally
4. Fix any issues

### 7.4 Testing & Deployment (1 hour)
1. Visual testing
2. Audio testing
3. Functionality testing
4. Browser compatibility
5. Deploy to GitHub Pages

**Total Development Time: 5-7 hours**

---

## 8. Quality Assurance

### 8.1 Content Quality Checklist
- [ ] All synonyms are sophisticated (not basic)
- [ ] Definitions explain nuances clearly
- [ ] Examples are authentic and varied
- [ ] Cultural notes add genuine insight
- [ ] No typos or grammatical errors
- [ ] Pronunciation guides are accurate

### 8.2 Technical Quality Checklist
- [ ] Page loads in < 3 seconds
- [ ] All images load correctly
- [ ] All audio files play
- [ ] Filters work correctly
- [ ] Search works in real-time
- [ ] Modal opens/closes properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Accessible via keyboard
- [ ] Works in all target browsers

---

## 9. Future Enhancements (Out of Scope v1.0)

### Potential Features
- User accounts and progress tracking
- Spaced repetition system
- Conjugation tables for each verb
- Quiz/test mode
- More verbs (hacer, decir, pensar, etc.)
- Download audio for offline use
- Flashcard mode
- Share individual cards on social media

---

## 10. Success Metrics

### User Engagement
- Average time on site: > 5 minutes
- Cards viewed per session: > 7 (50%)
- Audio plays per session: > 10
- Return visitors: > 30%

### Technical Performance
- Page load time: < 3 seconds
- Audio playback success: > 99%
- Mobile bounce rate: < 40%
- Error rate: < 1%

### Learning Outcomes
- Users can distinguish between synonyms
- Users understand formality levels
- Users recognize cultural usage patterns
- Users improve vocabulary sophistication

---

## 11. Maintenance & Updates

### Regular Maintenance
- Update dependencies (quarterly)
- Check link rot (quarterly)
- Review audio quality (yearly)
- Refresh images (yearly)

### Content Updates
- Add user-suggested examples
- Expand cultural notes based on feedback
- Fix any errors or typos
- Update for evolving LATAM usage

---

## 12. License & Attribution

### Code
- MIT License
- Free for educational and commercial use

### Images
- Unsplash License
- Free to use with attribution
- Credits in image_credits.json

### Audio
- Microsoft Edge TTS
- Free for educational use
- Credits in audio_metadata.json

### Content
- Original work
- Free for educational use with attribution

---

**Version**: 1.0.0
**Last Updated**: October 2025
**Author**: Brandon Lambert
**Repository**: https://github.com/bjpl/sinonimos_de_caminar
