# Test Plan: Sinónimos de Caminar

**Version:** 1.0
**Last Updated:** 2025-10-26
**Testing Framework:** Manual Testing + Automated (future)

---

## Table of Contents

1. [Visual Testing](#1-visual-testing)
2. [Functionality Testing](#2-functionality-testing)
3. [Audio Testing](#3-audio-testing)
4. [Performance Testing](#4-performance-testing)
5. [Accessibility Testing](#5-accessibility-testing)
6. [Browser Compatibility](#6-browser-compatibility)
7. [Content Quality](#7-content-quality)
8. [Test Execution Checklist](#test-execution-checklist)

---

## 1. Visual Testing

### 1.1 Hero Section
- [ ] **Hero image loads correctly**
  - Image displays without broken links
  - Image is properly centered and scaled
  - Image maintains aspect ratio on all screen sizes
  - Loading state displays during image fetch

- [ ] **Hero typography**
  - Title "Sinónimos de Caminar" displays correctly
  - Subtitle is legible and properly styled
  - Font family matches design (serif for Spanish content)
  - Text color has proper contrast against background

### 1.2 Synonym Cards Grid
- [ ] **All 14 cards display correctly**
  - andar, pasear, deambular, vagar, transitar, peregrinar, desplazarse
  - circular, recorrer, trajinar, rondar, callejear, vagabundear, errar
  - Each card has proper spacing and padding
  - Cards align in responsive grid layout

- [ ] **Card images load properly**
  - All 14 images load without 404 errors
  - Images are high quality and contextually appropriate
  - Images fill card area without distortion
  - Alt text displays if image fails to load

- [ ] **Card content displays**
  - Verb title is prominent and readable
  - Formality level badge displays (cotidiano/literario/narrativo/profesional)
  - Context tag displays correctly
  - Brief definition preview shows

### 1.3 Grid Layout Responsiveness
- [ ] **Mobile (320px - 767px)**
  - Cards stack in single column
  - Full width on small screens
  - Proper spacing between cards
  - Touch targets are minimum 44px

- [ ] **Tablet (768px - 1023px)**
  - 2 columns layout
  - Balanced spacing
  - Images scale proportionally

- [ ] **Desktop (1024px - 1439px)**
  - 3 columns layout
  - Consistent gap between cards
  - Hover states work properly

- [ ] **Large Desktop (1440px+)**
  - Maximum 4 columns or centered content
  - Cards don't stretch too wide
  - Maintains visual hierarchy

### 1.4 Hover Effects
- [ ] **Card hover state**
  - Image zooms smoothly (scale 1.05-1.1)
  - Transition is smooth (0.3s ease)
  - Shadow/elevation increases
  - Cursor changes to pointer

- [ ] **Button hover states**
  - Search button changes color
  - Filter buttons show active state
  - Audio play buttons highlight
  - Close modal button highlights

### 1.5 Modal Display
- [ ] **Modal opens correctly**
  - Smooth fade-in animation
  - Centers on screen
  - Background dims with overlay
  - Scrollable content if needed

- [ ] **Modal content layout**
  - Large image displays at top
  - Verb title prominent
  - Definition section clear
  - 3 examples display properly
  - Cultural notes visible
  - Audio controls accessible

- [ ] **Modal closes correctly**
  - Close button (X) works
  - Clicking overlay closes modal
  - Escape key closes modal
  - Smooth fade-out animation

### 1.6 Typography Rendering
- [ ] **Font families load**
  - Serif font for Spanish content
  - Sans-serif for UI elements
  - Fallback fonts work if primary fails

- [ ] **Font sizes**
  - Headers: clear hierarchy (h1 > h2 > h3)
  - Body text: 16px minimum for readability
  - Small text: 14px minimum
  - Scales properly on mobile

- [ ] **Line height and spacing**
  - Line height 1.5-1.8 for body text
  - Adequate paragraph spacing
  - No text overlap

### 1.7 Color Scheme Consistency
- [ ] **Earth tone palette**
  - Browns: #8B4513, #A0826D, #D2B48C
  - Neutrals: #F5F5DC, #FFFFFF, #333333
  - Accent: warm brown/orange tones

- [ ] **Color usage**
  - Background colors match design
  - Text colors have proper contrast
  - Links are distinguishable
  - Buttons use consistent colors

- [ ] **Visual feedback**
  - Active states show clearly
  - Disabled states are obvious
  - Error states use appropriate colors
  - Success states show green/positive color

---

## 2. Functionality Testing

### 2.1 Search Filter
- [ ] **Real-time filtering**
  - Typing filters results immediately
  - No delay or lag
  - Partial matches work
  - Case-insensitive search

- [ ] **Search behavior**
  - Searches verb name
  - Searches definition text
  - Searches example sentences
  - Updates results count

- [ ] **Search edge cases**
  - Empty search shows all 14 cards
  - No matches shows "No results" message
  - Special characters handled
  - Accented characters work (á, é, í, ó, ú, ñ)

### 2.2 Formality Filter
- [ ] **Filter options work**
  - "Todos" shows all 14 verbs
  - "Cotidiano" shows: andar, pasear, recorrer, trajinar, callejear
  - "Literario" shows: deambular, peregrinar, errar
  - "Narrativo" shows: vagar, rondar, vagabundear
  - "Profesional" shows: transitar, desplazarse, circular

- [ ] **Filter UI states**
  - Selected filter highlights
  - Unselected filters are neutral
  - Only one formality can be selected at a time

### 2.3 Context Filter
- [ ] **Context options work**
  - "Todos" shows all verbs
  - "Urbano" filters appropriately
  - "Rural/Natural" filters appropriately
  - "Religioso/Espiritual" shows peregrinar, errar
  - "Cotidiano/Diario" filters correctly

- [ ] **Context UI states**
  - Selected context highlights
  - Multiple contexts can be selected
  - Deselecting works properly

### 2.4 Combined Filters
- [ ] **Multiple filters work together**
  - Search + Formality filter
  - Search + Context filter
  - Formality + Context filter
  - All three filters combined

- [ ] **Filter logic**
  - AND logic for multiple filters
  - Results update in real-time
  - Counts update correctly

### 2.5 Reset Functionality
- [ ] **Reset button**
  - Clears search input
  - Resets formality to "Todos"
  - Resets context to "Todos"
  - Shows all 14 cards again
  - Updates results count to 14

### 2.6 Results Count
- [ ] **Count displays correctly**
  - Shows "14 sinónimos" initially
  - Updates with each filter change
  - Shows "1 sinónimo" for single result
  - Shows "0 sinónimos" for no matches

### 2.7 Empty State
- [ ] **No results message**
  - Displays when no cards match
  - Message is helpful and clear
  - Suggests trying different filters
  - Includes reset button or link

### 2.8 Card Click Behavior
- [ ] **Click opens modal**
  - Any card click opens detail view
  - Correct verb data loads
  - Animation is smooth
  - Focus moves to modal

### 2.9 Modal Close Methods
- [ ] **Escape key**
  - Press ESC closes modal
  - Works from any focused element
  - Returns focus to card

- [ ] **Click outside**
  - Clicking overlay closes modal
  - Clicking modal content doesn't close
  - Works consistently

- [ ] **Close button**
  - X button visible and accessible
  - Clicking closes modal
  - Hover state shows

---

## 3. Audio Testing

### 3.1 Verb Audio Files
- [ ] **All 14 verb audio files play**
  - andar.mp3 plays
  - pasear.mp3 plays
  - deambular.mp3 plays
  - vagar.mp3 plays
  - transitar.mp3 plays
  - peregrinar.mp3 plays
  - desplazarse.mp3 plays
  - circular.mp3 plays
  - recorrer.mp3 plays
  - trajinar.mp3 plays
  - rondar.mp3 plays
  - callejear.mp3 plays
  - vagabundear.mp3 plays
  - errar.mp3 plays

- [ ] **Verb audio quality**
  - Clear pronunciation
  - No background noise
  - Appropriate volume level
  - Natural speech rhythm

### 3.2 Example Audio Files (42 total)
- [ ] **3 examples per verb play**
  - Example 1 for each verb
  - Example 2 for each verb
  - Example 3 for each verb

- [ ] **Example audio quality**
  - Complete sentences audible
  - Natural intonation
  - Appropriate pacing
  - Context matches text

### 3.3 Audio Playback Behavior
- [ ] **Play button functionality**
  - Click plays audio
  - Button shows playing state
  - Audio plays to completion

- [ ] **Stop on new audio**
  - Playing new audio stops current
  - Only one audio plays at a time
  - Previous audio resets

- [ ] **Play/Pause toggle**
  - Can pause playing audio
  - Can resume from pause point
  - UI reflects state

### 3.4 Playing Animation
- [ ] **Visual feedback**
  - Icon animates while playing
  - Animation stops when complete
  - Different state for playing/paused/stopped

### 3.5 Voice Diversity
- [ ] **8 different voices recognizable**
  - 🇲🇽 Dalia (female, Mexico)
  - 🇲🇽 Jorge (male, Mexico)
  - 🇨🇴 Salome (female, Colombia)
  - 🇨🇴 Gonzalo (male, Colombia)
  - 🇦🇷 Elena (female, Argentina)
  - 🇦🇷 Tomás (male, Argentina)
  - 🇺🇸 Paloma (female, Neutral)
  - 🇺🇸 Alonso (male, Neutral)

- [ ] **Voice assignment**
  - Each verb has different voice
  - Voice metadata displays in modal
  - Accents are distinguishable

### 3.6 Volume Consistency
- [ ] **Audio levels**
  - All verb audio at similar volume
  - All example audio at similar volume
  - No sudden loud/quiet files
  - Comfortable listening level

### 3.7 Audio Quality
- [ ] **No glitches**
  - No clicks or pops
  - No distortion
  - No cutoffs at start/end
  - Smooth playback

- [ ] **No artifacts**
  - No robotic sound
  - Natural TTS quality
  - Proper word spacing

---

## 4. Performance Testing

### 4.1 Page Load Performance
- [ ] **Initial load time < 3 seconds**
  - Time to First Byte (TTFB) < 500ms
  - First Contentful Paint (FCP) < 1.5s
  - Largest Contentful Paint (LCP) < 2.5s
  - Time to Interactive (TTI) < 3s

- [ ] **Resource loading**
  - HTML loads first
  - CSS loads and parses quickly
  - JavaScript loads and executes
  - Fonts load efficiently

### 4.2 Animation Performance
- [ ] **Smooth animations (60fps)**
  - Card hover zoom smooth
  - Modal open/close smooth
  - Filter transitions smooth
  - Scroll performance good

- [ ] **No jank or stuttering**
  - No frame drops during animations
  - GPU acceleration used where appropriate
  - Will-change properties set correctly

### 4.3 Console Errors
- [ ] **No JavaScript errors**
  - Console clean on page load
  - No errors during interaction
  - No errors in modal
  - No errors with filters

- [ ] **No network errors**
  - All assets load successfully
  - No 404 errors for images/audio
  - CORS configured correctly

- [ ] **No warnings**
  - No deprecation warnings
  - No accessibility warnings
  - No best practice warnings

### 4.4 Memory Usage
- [ ] **Memory stable**
  - No memory leaks
  - Memory usage stays constant
  - Audio files released properly
  - Images don't accumulate

- [ ] **Memory monitoring**
  - Check DevTools Performance tab
  - Monitor heap size over time
  - Test after multiple interactions

### 4.5 Asset Loading
- [ ] **All assets load**
  - 15 images total (1 hero + 14 synonyms)
  - 56 audio files (14 verbs + 42 examples)
  - CSS file loads
  - JavaScript file loads
  - JSON data files load

- [ ] **Loading indicators**
  - Spinner or skeleton during load
  - Progressive image loading
  - Audio preloading strategy

### 4.6 Network Efficiency
- [ ] **Optimized requests**
  - Images compressed/optimized
  - Audio files appropriately sized
  - Minimal HTTP requests
  - Caching headers set

- [ ] **Lazy loading**
  - Images lazy load on scroll
  - Audio loads on demand
  - Non-critical resources deferred

---

## 5. Accessibility Testing

### 5.1 Keyboard Navigation
- [ ] **Tab navigation works**
  - Tab moves through interactive elements
  - Tab order is logical (top to bottom, left to right)
  - Shift+Tab moves backwards
  - No keyboard traps

- [ ] **Interactive elements accessible**
  - Search input focusable
  - Filter buttons focusable
  - Cards focusable and clickable with Enter
  - Audio buttons keyboard accessible
  - Modal close button focusable

### 5.2 Tab Order
- [ ] **Logical tab sequence**
  1. Skip to content link
  2. Search input
  3. Formality filters
  4. Context filters
  5. Reset button
  6. Card 1 through Card 14
  7. Modal elements (when open)

### 5.3 Focus Indicators
- [ ] **Visible focus states**
  - Focus ring visible on all interactive elements
  - Focus ring has sufficient contrast (3:1 minimum)
  - Focus ring is 2px or larger
  - Focus doesn't get lost

- [ ] **Focus management**
  - Focus moves to modal when opened
  - Focus returns to trigger when closed
  - Focus doesn't jump unexpectedly

### 5.4 Screen Reader Compatibility
- [ ] **Screen reader testing**
  - Test with NVDA (Windows)
  - Test with JAWS (Windows)
  - Test with VoiceOver (macOS/iOS)
  - Test with TalkBack (Android)

- [ ] **Content announced correctly**
  - Page title announced
  - Headings announced with level
  - Buttons announced as buttons
  - Links announced as links
  - Images have alt text read

### 5.5 ARIA Labels
- [ ] **ARIA attributes present**
  - `aria-label` on icon buttons
  - `aria-describedby` for descriptions
  - `aria-live` for dynamic content
  - `aria-expanded` for expandable content
  - `aria-hidden` for decorative elements

- [ ] **ARIA landmarks**
  - `<header>` or `role="banner"`
  - `<main>` or `role="main"`
  - `<nav>` or `role="navigation"`
  - `role="search"` for search form

### 5.6 Color Contrast (WCAG AA)
- [ ] **Text contrast ratios**
  - Normal text (16px+): 4.5:1 minimum
  - Large text (24px+): 3:1 minimum
  - UI components: 3:1 minimum

- [ ] **Specific checks**
  - Body text on background
  - Headers on background
  - Button text on button background
  - Link text distinguishable
  - Form labels and inputs

### 5.7 Semantic HTML
- [ ] **Proper HTML elements**
  - `<header>`, `<main>`, `<footer>`
  - `<h1>` to `<h6>` hierarchy
  - `<nav>` for navigation
  - `<article>` or `<section>` for cards
  - `<button>` for buttons (not `<div>`)
  - `<a>` for links

- [ ] **Heading hierarchy**
  - One `<h1>` per page
  - Headings don't skip levels
  - Logical document outline

---

## 6. Browser Compatibility

### 6.1 Chrome/Edge (Chromium) - Latest
- [ ] **Desktop Chrome**
  - All features work
  - CSS renders correctly
  - Audio plays
  - No console errors

- [ ] **Desktop Edge**
  - Same as Chrome
  - Microsoft TTS compatibility

### 6.2 Firefox - Latest
- [ ] **Desktop Firefox**
  - Layout matches Chrome
  - Audio playback works
  - Animations smooth
  - No Firefox-specific bugs

### 6.3 Safari - Latest
- [ ] **Desktop Safari (macOS)**
  - Webkit rendering correct
  - Audio formats supported
  - Flexbox/Grid layout works
  - No Safari-specific bugs

### 6.4 Mobile Browsers
- [ ] **Mobile Safari (iOS)**
  - Touch interactions work
  - Audio plays on tap
  - Modal works on small screens
  - Responsive layout correct

- [ ] **Chrome Mobile (Android)**
  - Touch targets adequate
  - Audio playback works
  - Performance acceptable
  - No Android-specific issues

- [ ] **Samsung Internet**
  - Compatible with Chrome Mobile
  - No Samsung-specific bugs

### 6.5 Cross-Browser Features
- [ ] **CSS Grid/Flexbox**
  - Works in all browsers
  - Fallbacks for older browsers

- [ ] **ES6+ JavaScript**
  - Arrow functions work
  - Template literals work
  - Const/let work
  - Promises/async-await work

- [ ] **Audio formats**
  - MP3 supported everywhere
  - Fallback formats if needed

---

## 7. Content Quality

### 7.1 Definition Accuracy
- [ ] **All 14 definitions accurate**
  - andar: Moverse de un lugar a otro a pie
  - pasear: Caminar sin prisa, por placer
  - deambular: Andar sin rumbo fijo
  - vagar: Ir de un lugar a otro sin destino
  - transitar: Pasar por un lugar
  - peregrinar: Viajar a pie, motivos religiosos
  - desplazarse: Moverse de un punto a otro
  - circular: Moverse por un espacio
  - recorrer: Atravesar o cubrir una distancia
  - trajinar: Andar de un lado a otro con actividad
  - rondar: Andar alrededor de un lugar
  - callejear: Andar por las calles sin rumbo
  - vagabundear: Andar errante de un lugar a otro
  - errar: Andar sin rumbo, vagar

- [ ] **Nuanced meanings**
  - Subtle differences explained
  - Usage context clear
  - Connotations described

### 7.2 Example Authenticity
- [ ] **Examples sound natural**
  - 3 examples per verb (42 total)
  - Authentic LATAM Spanish
  - Natural sentence structure
  - Realistic contexts

- [ ] **Example diversity**
  - Different scenarios
  - Different grammatical forms
  - Different time periods/tenses where appropriate

### 7.3 Cultural Notes
- [ ] **Cultural insights valuable**
  - LATAM-specific usage notes
  - Regional variations mentioned
  - Historical or cultural context
  - When/where commonly used

- [ ] **Accuracy of cultural info**
  - Factually correct
  - Not stereotypical
  - Respectful and educational

### 7.4 Grammar and Spelling
- [ ] **No typos in Spanish text**
  - Verbs spelled correctly
  - Definitions error-free
  - Examples grammatically correct
  - Accents placed properly (á, é, í, ó, ú, ñ)

- [ ] **No typos in English text**
  - UI labels correct
  - Instructions clear
  - No spelling errors

### 7.5 Pronunciation Guides
- [ ] **IPA or pronunciation help**
  - Phonetic guides accurate
  - Stress marks correct
  - Helps with difficult words

### 7.6 Image Credits
- [ ] **Credits display properly**
  - Photographer names shown
  - Unsplash attribution present
  - Links to original photos work
  - Credits accessible in modal or footer

---

## Test Execution Checklist

### Pre-Testing Setup
- [ ] Clear browser cache
- [ ] Close unnecessary tabs/apps
- [ ] Use incognito/private mode for fresh state
- [ ] Prepare testing devices (mobile, tablet, desktop)
- [ ] Install screen readers if testing accessibility
- [ ] Document browser versions

### Testing Process
- [ ] Test one category at a time
- [ ] Document all issues found
- [ ] Take screenshots of visual bugs
- [ ] Record console errors
- [ ] Note steps to reproduce issues
- [ ] Prioritize issues (critical, high, medium, low)

### Issue Template
```markdown
**Issue Title:** [Brief description]
**Category:** [Visual/Functionality/Audio/Performance/etc.]
**Severity:** [Critical/High/Medium/Low]
**Browser/Device:** [Chrome 120 / iPhone 15 Safari]
**Steps to Reproduce:**
1. Step one
2. Step two
3. Step three

**Expected Result:** [What should happen]
**Actual Result:** [What actually happens]
**Screenshots:** [Attach if relevant]
**Console Errors:** [Copy/paste if present]
```

### Test Coverage Summary
- [ ] Visual Testing: ___/40 tests passed
- [ ] Functionality Testing: ___/35 tests passed
- [ ] Audio Testing: ___/25 tests passed
- [ ] Performance Testing: ___/20 tests passed
- [ ] Accessibility Testing: ___/30 tests passed
- [ ] Browser Compatibility: ___/15 tests passed
- [ ] Content Quality: ___/20 tests passed

**Total: ___/185 tests passed (____%)**

---

## Testing Tools

### Recommended Tools
- **Browser DevTools**: Chrome, Firefox, Safari
- **Lighthouse**: Performance, Accessibility, SEO audits
- **WAVE**: Web accessibility evaluation
- **axe DevTools**: Accessibility testing
- **Screen Readers**: NVDA, JAWS, VoiceOver
- **BrowserStack**: Cross-browser testing
- **WebPageTest**: Performance analysis
- **Color Contrast Checker**: WCAG compliance

### Automated Testing (Future)
- **Jest**: JavaScript unit tests
- **Playwright/Cypress**: E2E testing
- **Pa11y**: Accessibility automation
- **Percy**: Visual regression testing

---

## Sign-Off

**Tester Name:** _______________
**Date:** _______________
**Version Tested:** _______________
**Overall Pass/Fail:** _______________
**Notes:**

---

**End of Test Plan**
