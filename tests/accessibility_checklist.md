# Accessibility Testing Checklist

**Project:** Sinónimos de Caminar
**WCAG Level:** AA Compliance
**Version:** 1.0
**Last Updated:** 2025-10-26

---

## Quick Reference: WCAG 2.1 Level AA Requirements

### Perceivable
- Text alternatives for non-text content
- Captions and alternatives for multimedia
- Adaptable content presentation
- Distinguishable content (color, contrast)

### Operable
- Keyboard accessible
- Sufficient time for interaction
- Seizure prevention (no flashing)
- Navigable and findable

### Understandable
- Readable text
- Predictable behavior
- Input assistance

### Robust
- Compatible with assistive technologies
- Valid HTML

---

## 1. Keyboard Accessibility

### 1.1 Keyboard Navigation
- [ ] **All interactive elements reachable via Tab**
  - Search input
  - All filter buttons
  - Reset button
  - All 14 cards
  - Audio play buttons
  - Modal close button

- [ ] **Tab order is logical**
  - Left to right, top to bottom
  - Matches visual layout
  - No confusing jumps

- [ ] **Shift+Tab works backwards**
  - Reverse tab order functions
  - Returns to previous element

- [ ] **No keyboard traps**
  - Can always move forward/backward
  - Can escape from all components
  - Modal doesn't trap focus permanently

### 1.2 Keyboard Shortcuts
- [ ] **Enter key activates buttons**
  - Cards open with Enter
  - Buttons activate with Enter
  - Audio plays with Enter

- [ ] **Space key activates buttons**
  - Buttons toggle with Space
  - Checkboxes toggle with Space

- [ ] **Escape key closes modal**
  - ESC closes detail view
  - Returns to previous state

- [ ] **Arrow keys work where expected**
  - Not required but nice to have

### 1.3 Focus Management
- [ ] **Focus visible at all times**
  - Clear focus indicator
  - Never hidden or removed
  - Consistent across components

- [ ] **Focus indicator sufficient**
  - Minimum 2px outline/border
  - Contrast ratio ≥ 3:1
  - Doesn't rely on color alone

- [ ] **Focus moves logically on modal open**
  - Focus moves into modal
  - First focusable element receives focus
  - Or modal container with tabindex="-1"

- [ ] **Focus returns on modal close**
  - Returns to trigger element (card)
  - User doesn't lose place

---

## 2. Screen Reader Support

### 2.1 Page Structure
- [ ] **Page has proper title**
  - `<title>Sinónimos de Caminar | Learning Spanish</title>`
  - Descriptive and unique

- [ ] **Landmarks present**
  - `<header>` or `role="banner"`
  - `<main>` or `role="main"`
  - `<nav>` or `role="navigation"` (if nav present)
  - `<footer>` or `role="contentinfo"`
  - `role="search"` on search form

- [ ] **Heading hierarchy correct**
  - One `<h1>` per page
  - Headings don't skip levels (h1→h2→h3)
  - Logical document outline

- [ ] **Skip link present**
  - "Skip to main content" link
  - Visible on focus
  - Works correctly

### 2.2 Content Announcement
- [ ] **Images have alt text**
  - Hero image: descriptive alt
  - Card images: contextual alt
  - Decorative images: `alt=""` or `aria-hidden="true"`

- [ ] **Buttons have accessible names**
  - Filter buttons: clear text
  - Icon buttons: `aria-label`
  - Audio buttons: "Play pronunciation of [verb]"

- [ ] **Links are descriptive**
  - No "click here" or "read more"
  - Purpose clear from text
  - Or use `aria-label` for context

- [ ] **Dynamic content announced**
  - Filter results use `aria-live`
  - Loading states announced
  - Error messages announced

### 2.3 Form Elements
- [ ] **Search input has label**
  - `<label for="search">Search verbs</label>`
  - Or `aria-label="Search verbs"`

- [ ] **Placeholder not sole label**
  - Label always visible
  - Placeholder is hint only

- [ ] **Error messages associated**
  - `aria-describedby` for errors
  - Error announced by screen reader

### 2.4 ARIA Attributes
- [ ] **ARIA labels on icon buttons**
  ```html
  <button aria-label="Play audio">
    <span aria-hidden="true">▶</span>
  </button>
  ```

- [ ] **ARIA live regions for dynamic content**
  ```html
  <div aria-live="polite" aria-atomic="true">
    Showing 5 of 14 verbs
  </div>
  ```

- [ ] **ARIA expanded on collapsible content**
  ```html
  <button aria-expanded="false" aria-controls="filters">
    Filters
  </button>
  ```

- [ ] **ARIA hidden for decorative elements**
  ```html
  <span aria-hidden="true" class="icon">🎵</span>
  ```

- [ ] **ARIA current for active filters**
  ```html
  <button aria-current="true">Cotidiano</button>
  ```

### 2.5 Testing with Screen Readers
- [ ] **Test with NVDA (Windows)**
  - All content announced
  - Navigation works
  - Controls operable

- [ ] **Test with JAWS (Windows)**
  - Same as NVDA
  - Professional standard

- [ ] **Test with VoiceOver (macOS)**
  - Cmd+F5 to start
  - Test navigation
  - Verify announcements

- [ ] **Test with VoiceOver (iOS)**
  - Settings → Accessibility → VoiceOver
  - Test on actual device
  - Touch gestures work

- [ ] **Test with TalkBack (Android)**
  - Android accessibility service
  - Test on device
  - Navigation smooth

---

## 3. Visual Design

### 3.1 Color Contrast (WCAG AA)
- [ ] **Normal text (< 24px): 4.5:1**
  - Body text on background
  - Button text on button
  - Link text on background

- [ ] **Large text (≥ 24px): 3:1**
  - Headers on background
  - Large UI text

- [ ] **UI components: 3:1**
  - Button borders
  - Form inputs
  - Focus indicators
  - Icons

- [ ] **Specific element checks**
  - [ ] Hero title on hero image
  - [ ] Card verb names on card backgrounds
  - [ ] Filter button text (active/inactive)
  - [ ] Modal text on modal background
  - [ ] Search input text
  - [ ] Results count text

### 3.2 Color Independence
- [ ] **Don't rely on color alone**
  - Active filters have text label or icon
  - Links underlined or have icon
  - Errors have icon and text
  - Required fields marked with asterisk

- [ ] **Color-blind friendly**
  - Test with color-blind simulator
  - Red-green distinctions avoided
  - Information conveyed multiple ways

### 3.3 Text and Typography
- [ ] **Minimum font size: 16px**
  - Body text readable
  - No text smaller than 14px

- [ ] **Line height adequate**
  - Body text: 1.5 minimum
  - Headers: 1.2 minimum

- [ ] **Paragraph spacing**
  - Space between paragraphs
  - Not just line breaks

- [ ] **Text resizable to 200%**
  - Text can zoom
  - Layout doesn't break
  - No horizontal scroll (usually)

- [ ] **Font choices**
  - Readable fonts selected
  - Sufficient weight (not too thin)
  - Good x-height

### 3.4 Visual Indicators
- [ ] **Focus indicators**
  - Visible on all interactive elements
  - Sufficient thickness (2px+)
  - Sufficient contrast (3:1)

- [ ] **Hover states**
  - Don't rely solely on hover
  - Keyboard has equivalent feedback

- [ ] **Active/selected states**
  - Clear visual difference
  - Not color alone

---

## 4. Content and Structure

### 4.1 Semantic HTML
- [ ] **Use semantic elements**
  - `<header>`, `<main>`, `<footer>`
  - `<nav>`, `<article>`, `<section>`
  - `<button>` for buttons (not `<div>`)
  - `<a>` for links

- [ ] **Tables for tabular data**
  - If tables used: `<th>` for headers
  - `scope` attribute on headers
  - `<caption>` for table title

- [ ] **Lists for lists**
  - `<ul>`/`<ol>` for card grids (optional)
  - `<li>` for each item

### 4.2 Language
- [ ] **Page language declared**
  ```html
  <html lang="es">
  ```

- [ ] **Language changes marked**
  ```html
  <p lang="en">This paragraph is in English.</p>
  ```

### 4.3 Link Purpose
- [ ] **Link text descriptive**
  - "Read more about andar" not "Read more"
  - Or use `aria-label` for context

- [ ] **Link opens in new tab indicated**
  ```html
  <a href="..." target="_blank" aria-label="Opens in new window">
  ```

### 4.4 Headings
- [ ] **Heading hierarchy**
  - H1: "Sinónimos de Caminar"
  - H2: Section titles
  - H3: Verb names in modal
  - No skipped levels

- [ ] **Headings descriptive**
  - Not generic ("Section 1")
  - Clear about content

---

## 5. Multimedia

### 5.1 Audio
- [ ] **Audio has text alternative**
  - Verb pronunciation: verb name visible
  - Example audio: sentence text visible
  - Transcript or visible text equivalent

- [ ] **User can control audio**
  - Play/pause buttons
  - Stop button
  - No auto-play (or easy to stop)

- [ ] **Audio doesn't auto-play**
  - Or auto-pauses after 3 seconds
  - Or easy pause mechanism

- [ ] **Audio player keyboard accessible**
  - All controls reachable via Tab
  - Space/Enter activates

### 5.2 Images
- [ ] **All images have alt text**
  - Informative images: descriptive alt
  - Decorative images: `alt=""` or `aria-hidden="true"`
  - Complex images: longer description

- [ ] **Image quality**
  - High enough resolution
  - Not pixelated when scaled

---

## 6. Forms (if applicable)

### 6.1 Search Input
- [ ] **Label present and visible**
  - `<label>` associated with `<input>`
  - Or `aria-label` on input

- [ ] **Placeholder is hint, not label**
  - Label always visible
  - Placeholder provides example

- [ ] **Error messages clear**
  - Associated with input
  - Announced by screen reader
  - Visible and understandable

### 6.2 Filter Controls
- [ ] **Radio/checkbox labels clickable**
  - Clicking label activates control
  - Label properly associated

- [ ] **Fieldset and legend**
  - Group related controls
  - Legend describes group

---

## 7. Interaction and Timing

### 7.1 Time Limits
- [ ] **No strict time limits**
  - User has unlimited time
  - Or user can extend time
  - Or time limit ≥ 20 hours

- [ ] **Pausing/stopping**
  - User can pause animations
  - User can stop auto-updating content

### 7.2 Motion and Animation
- [ ] **Respect prefers-reduced-motion**
  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

- [ ] **No seizure-inducing flashing**
  - No flashing more than 3 times per second
  - Or flashing area very small

- [ ] **Animation can be disabled**
  - Via OS setting or app setting
  - Essential animations okay

### 7.3 User Control
- [ ] **User can pause/stop animations**
  - Not essential animations
  - Option in settings or OS respects

- [ ] **User can replay audio**
  - Rewind or restart button
  - Not one-time-only

---

## 8. Mobile and Touch

### 8.1 Touch Targets
- [ ] **Minimum 44x44 CSS pixels**
  - All buttons
  - All links
  - Cards

- [ ] **Adequate spacing between targets**
  - Minimum 8px spacing
  - Prevents accidental taps

### 8.2 Orientation
- [ ] **Works in portrait and landscape**
  - Layout adapts
  - No orientation lock (unless essential)

### 8.3 Touch Gestures
- [ ] **Alternative to complex gestures**
  - Swipe gestures have button alternative
  - Pinch-zoom not sole method

- [ ] **Single-point activation**
  - No multi-touch required
  - Or alternative provided

---

## 9. Testing Tools and Resources

### 9.1 Automated Testing Tools
- [ ] **WAVE (WebAIM)**
  - Browser extension
  - Identifies errors, alerts, features

- [ ] **axe DevTools**
  - Chrome/Firefox extension
  - Comprehensive accessibility testing

- [ ] **Lighthouse**
  - Chrome DevTools
  - Accessibility score and recommendations

- [ ] **Pa11y**
  - Command-line tool
  - Automated accessibility testing

### 9.2 Manual Testing Tools
- [ ] **Color Contrast Checker**
  - WebAIM Contrast Checker
  - Verify WCAG compliance

- [ ] **HeadingsMap**
  - Browser extension
  - Verify heading hierarchy

- [ ] **Accessibility Insights**
  - Microsoft tool
  - Comprehensive testing

### 9.3 Screen Readers
- [ ] **Windows: NVDA (free)**
  - https://www.nvaccess.org/

- [ ] **Windows: JAWS (paid)**
  - Industry standard

- [ ] **macOS: VoiceOver (built-in)**
  - Cmd+F5 to start

- [ ] **iOS: VoiceOver (built-in)**
  - Settings → Accessibility

- [ ] **Android: TalkBack (built-in)**
  - Accessibility service

### 9.4 Simulators
- [ ] **Color-blind simulators**
  - Chromatic Vision Simulator
  - Color Oracle

- [ ] **Low vision simulators**
  - NoCoffee Vision Simulator

---

## 10. Checklist Summary

### Critical Issues (Must Fix)
- [ ] Keyboard navigation works completely
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] No console errors affecting accessibility
- [ ] Screen reader announces all content
- [ ] Focus visible on all interactive elements
- [ ] Semantic HTML structure correct

### High Priority
- [ ] ARIA labels on icon buttons
- [ ] Skip link present and working
- [ ] Heading hierarchy logical
- [ ] Audio controls keyboard accessible
- [ ] Touch targets minimum 44px
- [ ] Respects prefers-reduced-motion

### Medium Priority
- [ ] Lighthouse accessibility score ≥ 90
- [ ] Multiple screen reader tests pass
- [ ] Color-blind friendly
- [ ] Text resizable to 200%

### Nice to Have
- [ ] Accessibility statement page
- [ ] Keyboard shortcuts documented
- [ ] User preferences for animations

---

## Testing Sign-Off

**Tester:** _______________
**Date:** _______________
**Screen Readers Tested:** _______________
**Tools Used:** _______________

**Critical Issues Found:** ___
**High Priority Issues:** ___
**Medium Priority Issues:** ___

**Overall WCAG AA Compliance:** [ ] Pass [ ] Fail

**Notes:**

---

**End of Accessibility Checklist**
