# Test Cases: Sinónimos de Caminar

**Version:** 1.0
**Last Updated:** 2025-10-26

---

## TC-001: Search Functionality

### Test Case: Real-time search filtering
**Priority:** High
**Category:** Functionality

**Prerequisites:**
- App loaded with all 14 cards visible

**Test Steps:**
1. Locate search input field
2. Type "amb" into search
3. Observe results

**Expected Result:**
- Only "deambular" and "vagabundear" cards display
- Results count shows "2 sinónimos"
- Other cards hidden
- Filter happens in real-time (no delay)

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-002: Formality Filter - Cotidiano

### Test Case: Filter by everyday/casual usage
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Click "Cotidiano" filter button
2. Observe displayed cards

**Expected Result:**
- Shows: andar, pasear, recorrer, trajinar, callejear (5 cards)
- Results count: "5 sinónimos"
- "Cotidiano" button highlighted/active
- Other formality buttons not highlighted

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-003: Formality Filter - Literario

### Test Case: Filter by literary usage
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Click "Literario" filter button
2. Observe displayed cards

**Expected Result:**
- Shows: deambular, peregrinar, errar (3 cards)
- Results count: "3 sinónimos"
- "Literario" button highlighted/active

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-004: Formality Filter - Narrativo

### Test Case: Filter by narrative usage
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Click "Narrativo" filter button
2. Observe displayed cards

**Expected Result:**
- Shows: vagar, rondar, vagabundear (3 cards)
- Results count: "3 sinónimos"

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-005: Formality Filter - Profesional

### Test Case: Filter by professional usage
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Click "Profesional" filter button
2. Observe displayed cards

**Expected Result:**
- Shows: transitar, desplazarse, circular (3 cards)
- Results count: "3 sinónimos"

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-006: Combined Filters

### Test Case: Search + Formality filter
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Type "ar" in search
2. Click "Cotidiano" filter
3. Observe results

**Expected Result:**
- Shows only cards matching BOTH criteria
- Should show: andar, pasear, callejear (3 cards)
- Results count updates correctly

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-007: Reset Button

### Test Case: Clear all filters
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Apply search: "amb"
2. Apply formality filter: "Literario"
3. Click Reset button
4. Observe results

**Expected Result:**
- Search input cleared
- All filter buttons reset to "Todos"
- All 14 cards visible
- Results count: "14 sinónimos"

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-008: Card Click Opens Modal

### Test Case: Detail view modal
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Click on "andar" card
2. Observe modal appearance

**Expected Result:**
- Modal opens with smooth animation
- Background dims with overlay
- Modal displays full details for "andar"
- Large image at top
- Definition, examples, cultural notes visible
- Audio controls present

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-009: Modal Close - Escape Key

### Test Case: Close modal with keyboard
**Priority:** Medium
**Category:** Functionality

**Test Steps:**
1. Open any card modal
2. Press Escape key
3. Observe modal behavior

**Expected Result:**
- Modal closes smoothly
- Returns to card grid
- Focus returns to clicked card

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-010: Modal Close - Click Outside

### Test Case: Close modal with overlay click
**Priority:** Medium
**Category:** Functionality

**Test Steps:**
1. Open any card modal
2. Click on darkened background (overlay)
3. Observe modal behavior

**Expected Result:**
- Modal closes
- Clicking modal content itself does NOT close modal

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-011: Modal Close - Close Button

### Test Case: Close modal with X button
**Priority:** High
**Category:** Functionality

**Test Steps:**
1. Open any card modal
2. Click X close button (top-right)
3. Observe modal behavior

**Expected Result:**
- Modal closes smoothly
- Button has visible hover state

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-012: Verb Audio Playback

### Test Case: Play verb pronunciation
**Priority:** High
**Category:** Audio

**Test Steps:**
1. Open "andar" modal
2. Click play button for verb audio
3. Listen to audio

**Expected Result:**
- Audio plays clearly
- "andar" pronounced correctly
- Play button shows playing state (animation/icon change)
- Audio completes fully

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-013: Example Audio Playback

### Test Case: Play example sentence audio
**Priority:** High
**Category:** Audio

**Test Steps:**
1. Open any verb modal
2. Click play button for first example
3. Listen to audio

**Expected Result:**
- Full sentence plays clearly
- Natural intonation
- Audio matches displayed text
- Playing indicator visible

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-014: Audio Stop on New Play

### Test Case: Only one audio plays at a time
**Priority:** Medium
**Category:** Audio

**Test Steps:**
1. Open modal with multiple audio buttons
2. Play verb audio
3. While still playing, click example 1 audio
4. Observe behavior

**Expected Result:**
- Verb audio stops
- Example audio starts
- Only one audio plays simultaneously
- Previous audio resets to beginning

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-015: Voice Diversity

### Test Case: Different voices for different verbs
**Priority:** Medium
**Category:** Audio

**Test Steps:**
1. Play audio for "andar"
2. Play audio for "pasear"
3. Play audio for "deambular"
4. Compare voices

**Expected Result:**
- Each verb uses different voice
- Voices distinguishable (male/female, accent differences)
- 8 voices total across 14 verbs

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-016: Responsive Layout - Mobile

### Test Case: Mobile viewport (375px)
**Priority:** High
**Category:** Visual

**Test Steps:**
1. Open app in Chrome DevTools
2. Set device to iPhone 12 (390x844)
3. Observe layout

**Expected Result:**
- Cards stack in single column
- Full width on small screen
- All content readable
- Touch targets minimum 44px
- No horizontal scroll

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-017: Responsive Layout - Tablet

### Test Case: Tablet viewport (768px)
**Priority:** Medium
**Category:** Visual

**Test Steps:**
1. Set viewport to 768px width
2. Observe card layout

**Expected Result:**
- Cards display in 2 columns
- Balanced spacing
- Images scale proportionally
- Modal fits comfortably

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-018: Responsive Layout - Desktop

### Test Case: Desktop viewport (1440px)
**Priority:** Medium
**Category:** Visual

**Test Steps:**
1. Set viewport to 1440px width
2. Observe card layout

**Expected Result:**
- Cards in 3-4 columns
- Centered or max-width container
- Proper spacing between cards
- Hover effects work

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-019: Card Hover Effect

### Test Case: Image zoom on hover
**Priority:** Medium
**Category:** Visual

**Test Steps:**
1. On desktop, hover over any card
2. Observe image and card behavior

**Expected Result:**
- Image zooms slightly (scale 1.05-1.1)
- Transition smooth (0.3s)
- Shadow/elevation increases
- Cursor changes to pointer
- No layout shift

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-020: Hero Image Loading

### Test Case: Hero section displays correctly
**Priority:** High
**Category:** Visual

**Test Steps:**
1. Load page from scratch
2. Observe hero section

**Expected Result:**
- Hero image loads
- Image centered and scaled properly
- Title "Sinónimos de Caminar" displays
- Subtitle visible and legible
- No broken image icon

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-021: All Card Images Load

### Test Case: 14 synonym images display
**Priority:** High
**Category:** Visual

**Test Steps:**
1. Load page
2. Verify all card images loaded

**Expected Result:**
- 14 unique images visible
- No 404 errors in console
- Images contextually appropriate
- No distortion or stretching

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-022: Typography Hierarchy

### Test Case: Font sizes and hierarchy
**Priority:** Medium
**Category:** Visual

**Test Steps:**
1. Inspect page typography
2. Verify heading levels

**Expected Result:**
- H1 larger than H2
- H2 larger than H3
- Body text minimum 16px
- Clear visual hierarchy
- Proper line height (1.5-1.8)

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-023: Color Contrast - Body Text

### Test Case: WCAG AA compliance for text
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Use color contrast checker
2. Test body text on background
3. Verify ratio

**Expected Result:**
- Contrast ratio ≥ 4.5:1 for normal text
- Contrast ratio ≥ 3:1 for large text (24px+)
- Text easily readable

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-024: Keyboard Navigation - Tab Order

### Test Case: Logical tab sequence
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Click in search input
2. Press Tab repeatedly
3. Observe focus progression

**Expected Result:**
- Tab order: search → formality filters → context filters → reset → cards
- No keyboard traps
- Focus visible at all times
- Can reach all interactive elements

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-025: Keyboard Navigation - Modal

### Test Case: Keyboard access in modal
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Open modal with keyboard (Tab to card, Enter to open)
2. Tab through modal elements
3. Press Escape to close

**Expected Result:**
- Focus moves to modal on open
- Can tab through all modal controls
- Escape closes modal
- Focus returns to trigger card

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-026: Focus Indicators

### Test Case: Visible focus states
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Tab through all interactive elements
2. Verify focus ring visibility

**Expected Result:**
- Focus ring visible on all elements
- Contrast ratio ≥ 3:1
- Ring width ≥ 2px
- Doesn't obscure content

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-027: Screen Reader - Card Announcement

### Test Case: Cards announced properly
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Start screen reader (NVDA/JAWS/VoiceOver)
2. Navigate to card grid
3. Listen to announcements

**Expected Result:**
- Each card announced with verb name
- Formality level announced
- Brief definition read
- Announced as clickable/button

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-028: Screen Reader - Modal Content

### Test Case: Modal content accessible
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Open modal with screen reader
2. Navigate through content
3. Verify all content announced

**Expected Result:**
- Verb name announced
- Definition read
- Examples enumerated and read
- Cultural notes accessible
- Audio controls labeled

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-029: ARIA Labels - Buttons

### Test Case: Icon buttons have labels
**Priority:** High
**Category:** Accessibility

**Test Steps:**
1. Inspect audio play buttons
2. Inspect close button
3. Verify ARIA attributes

**Expected Result:**
- Play buttons have `aria-label="Play audio"`
- Close button has `aria-label="Close modal"`
- Purpose clear to screen readers

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-030: Page Load Time

### Test Case: Performance under 3 seconds
**Priority:** High
**Category:** Performance

**Test Steps:**
1. Open Chrome DevTools → Network tab
2. Clear cache
3. Reload page
4. Check "Load" time

**Expected Result:**
- Page fully loaded in < 3 seconds
- TTFB < 500ms
- FCP < 1.5s
- LCP < 2.5s

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-031: Animation Smoothness

### Test Case: 60fps animations
**Priority:** Medium
**Category:** Performance

**Test Steps:**
1. Open DevTools → Performance tab
2. Record while hovering cards and opening modal
3. Analyze frame rate

**Expected Result:**
- Maintains 60fps
- No dropped frames
- Smooth visual transitions
- No jank or stuttering

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-032: Console Errors

### Test Case: No JavaScript errors
**Priority:** High
**Category:** Performance

**Test Steps:**
1. Open DevTools → Console
2. Load page
3. Interact with all features
4. Check for errors

**Expected Result:**
- No errors in console
- No warnings (except acceptable ones)
- No network failures (404s)

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-033: Memory Leaks

### Test Case: Stable memory usage
**Priority:** Medium
**Category:** Performance

**Test Steps:**
1. Open DevTools → Memory tab
2. Take heap snapshot
3. Open/close modals 20 times
4. Take another snapshot
5. Compare

**Expected Result:**
- Memory usage stable
- No continuous growth
- Detached DOM nodes minimal
- Audio files released after use

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-034: Browser Compatibility - Chrome

### Test Case: Works in Chrome latest
**Priority:** High
**Category:** Browser

**Test Steps:**
1. Open in Chrome (version 120+)
2. Test all features
3. Check console

**Expected Result:**
- All features work
- Layout correct
- Audio plays
- No errors

**Actual Result:** [To be filled]
**Browser Version:** _______
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-035: Browser Compatibility - Firefox

### Test Case: Works in Firefox latest
**Priority:** High
**Category:** Browser

**Test Steps:**
1. Open in Firefox (version 120+)
2. Test all features
3. Check console

**Expected Result:**
- Matches Chrome behavior
- Audio plays correctly
- No Firefox-specific bugs

**Actual Result:** [To be filled]
**Browser Version:** _______
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-036: Browser Compatibility - Safari

### Test Case: Works in Safari latest
**Priority:** High
**Category:** Browser

**Test Steps:**
1. Open in Safari (macOS/iOS)
2. Test all features
3. Check console

**Expected Result:**
- Webkit rendering correct
- Audio plays (tap to play on iOS)
- Grid/Flexbox works
- No Safari bugs

**Actual Result:** [To be filled]
**Browser Version:** _______
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-037: Mobile Safari

### Test Case: Works on iPhone Safari
**Priority:** High
**Category:** Browser

**Test Steps:**
1. Open on actual iPhone or simulator
2. Test touch interactions
3. Test audio playback

**Expected Result:**
- Touch targets adequate (44px)
- Audio plays on tap
- Modal works on small screen
- Responsive layout correct
- No iOS-specific bugs

**Actual Result:** [To be filled]
**Device/Version:** _______
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-038: Chrome Mobile (Android)

### Test Case: Works on Android Chrome
**Priority:** High
**Category:** Browser

**Test Steps:**
1. Open on Android device
2. Test all features

**Expected Result:**
- Touch interactions work
- Audio plays
- Performance acceptable
- Layout responsive

**Actual Result:** [To be filled]
**Device/Version:** _______
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-039: Definition Accuracy

### Test Case: All definitions correct
**Priority:** High
**Category:** Content

**Test Steps:**
1. Review each of 14 definitions
2. Verify against dictionary/references
3. Check for accuracy

**Expected Result:**
- All definitions factually correct
- Nuanced meanings explained
- Usage context clear
- No misleading information

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-040: Example Sentence Quality

### Test Case: Authentic examples
**Priority:** High
**Category:** Content

**Test Steps:**
1. Read all 42 example sentences (3 per verb)
2. Evaluate naturalness
3. Verify grammatical correctness

**Expected Result:**
- Sentences sound natural
- Authentic LATAM Spanish
- Grammatically correct
- Contextually appropriate
- Diverse scenarios

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-041: Spelling and Grammar

### Test Case: No typos or errors
**Priority:** High
**Category:** Content

**Test Steps:**
1. Proofread all Spanish text
2. Check all English UI text
3. Verify accent marks (á, é, í, ó, ú, ñ)

**Expected Result:**
- Zero spelling errors
- Proper accent placement
- Grammatically correct
- Professional quality

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-042: Cultural Notes Quality

### Test Case: Insightful cultural information
**Priority:** Medium
**Category:** Content

**Test Steps:**
1. Read all cultural notes
2. Verify factual accuracy
3. Assess educational value

**Expected Result:**
- LATAM-specific insights
- Factually accurate
- Respectful presentation
- Educational value high

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-043: Image Credits Display

### Test Case: Photographer attribution
**Priority:** Medium
**Category:** Content

**Test Steps:**
1. Check for image credits in modal or footer
2. Verify all photographers credited
3. Check Unsplash attribution

**Expected Result:**
- All 14 photographers credited
- Unsplash logo/link present
- Credits easily accessible
- Links work correctly

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-044: Empty State

### Test Case: No results message
**Priority:** Medium
**Category:** Functionality

**Test Steps:**
1. Enter search that has no matches (e.g., "xyz")
2. Observe empty state

**Expected Result:**
- "No results found" message displays
- Helpful text suggests trying different filters
- Reset button or link provided
- No error in console

**Actual Result:** [To be filled]
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

## TC-045: Lighthouse Audit

### Test Case: Pass Lighthouse checks
**Priority:** Medium
**Category:** Performance

**Test Steps:**
1. Open Chrome DevTools → Lighthouse
2. Run audit (Desktop)
3. Review scores

**Expected Result:**
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

**Actual Result:** [To be filled]
**Scores:** P___ A___ BP___ SEO___
**Status:** [ ] Pass [ ] Fail
**Notes:**

---

**Total Test Cases:** 45
**Test Cases Passed:** ___/45
**Pass Rate:** ___%

---

## Test Execution Log

| Date | Tester | Cases Run | Passed | Failed | Notes |
|------|--------|-----------|--------|--------|-------|
|      |        |           |        |        |       |
|      |        |           |        |        |       |
|      |        |           |        |        |       |
