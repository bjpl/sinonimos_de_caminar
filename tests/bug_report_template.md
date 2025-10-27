# Bug Report Template

Use this template to report any issues found during testing.

---

## Bug Report #___

**Date:** 2025-MM-DD
**Reporter:** [Your Name]
**Assigned To:** [Developer Name]

---

### Bug Summary
**Title:** [Brief, descriptive title]

**Category:** [Select one]
- [ ] Visual/UI
- [ ] Functionality
- [ ] Audio
- [ ] Performance
- [ ] Accessibility
- [ ] Browser Compatibility
- [ ] Content/Text
- [ ] Other: ___________

**Severity:** [Select one]
- [ ] **Critical** - App unusable, blocks core functionality
- [ ] **High** - Major feature broken, workaround difficult
- [ ] **Medium** - Feature partially broken, workaround exists
- [ ] **Low** - Minor issue, cosmetic, easy workaround

**Priority:** [Select one]
- [ ] **P0** - Fix immediately (show-stopper)
- [ ] **P1** - Fix before release
- [ ] **P2** - Fix in next update
- [ ] **P3** - Nice to fix eventually

---

### Environment
**Browser/Device:** [e.g., Chrome 120 / iPhone 15 Safari 17]
**Operating System:** [e.g., Windows 11 / macOS Sonoma / iOS 17]
**Screen Size:** [e.g., 1920x1080 / 390x844]
**Network:** [e.g., Fast 3G / Wifi / Offline]

---

### Steps to Reproduce
1. [First step]
2. [Second step]
3. [Third step]
4. [Continue...]

**Frequency:** [How often does this happen?]
- [ ] Always (100%)
- [ ] Often (75%)
- [ ] Sometimes (50%)
- [ ] Rarely (25%)
- [ ] Once (only seen once)

---

### Expected Result
[What should happen according to design/requirements?]

---

### Actual Result
[What actually happens?]

---

### Visual Evidence
**Screenshots:**
[Attach or paste screenshots here]

**Video/GIF:**
[Link to screen recording if applicable]

**Console Output:**
```
[Paste console errors here]
```

**Network Tab:**
```
[Paste relevant network errors/issues]
```

---

### Impact
**User Impact:**
[How does this affect users?]
- [ ] Blocks critical task
- [ ] Confusing UX
- [ ] Visual annoyance
- [ ] Minor inconvenience
- [ ] No user impact (internal only)

**Business Impact:**
[How does this affect the product/business?]

---

### Workaround
**Is there a workaround?** [Yes/No]

**Workaround Steps:**
1. [If yes, describe workaround]

---

### Suggested Fix
[If you have ideas on how to fix, describe here]

---

### Related Issues
- Related to Bug #___
- Duplicate of Bug #___
- Blocked by Bug #___

---

### Testing Notes
**Test Case Failed:** [e.g., TC-015, TC-022]
**Affected Features:** [List features affected]

---

### Status Tracking
**Status:** [Select one]
- [ ] New
- [ ] Confirmed
- [ ] In Progress
- [ ] Fixed (awaiting testing)
- [ ] Verified (tested and confirmed fixed)
- [ ] Closed
- [ ] Won't Fix
- [ ] Duplicate

**Date Reported:** 2025-MM-DD
**Date Assigned:** 2025-MM-DD
**Date Fixed:** 2025-MM-DD
**Date Verified:** 2025-MM-DD

---

### Developer Notes
[Space for developer comments]

---

### Regression Testing
**After fix, re-test:**
- [ ] Original bug fixed
- [ ] No new issues introduced
- [ ] Related features still work
- [ ] Across all browsers (if critical)

---

## Example Bug Reports

### Example 1: Critical Bug

**Bug Report #001**
**Date:** 2025-10-26
**Reporter:** QA Tester
**Title:** Audio fails to play on Safari iOS

**Category:** Audio
**Severity:** Critical
**Priority:** P0

**Environment:**
- Browser: Safari 17
- OS: iOS 17.1
- Device: iPhone 15

**Steps to Reproduce:**
1. Open app on iPhone Safari
2. Navigate to any verb card
3. Tap card to open modal
4. Tap play button for verb audio
5. Observe behavior

**Expected Result:**
Audio plays and user hears pronunciation

**Actual Result:**
Play button shows loading state but no audio plays. Console shows:
```
NotAllowedError: The request is not allowed by the user agent or the platform
```

**Frequency:** Always (100%)

**Impact:** Critical - all audio features non-functional on iOS Safari, which is ~40% of mobile traffic

**Suggested Fix:**
Requires user interaction to initiate audio on iOS. May need to preload audio and use Web Audio API or add "tap to enable audio" flow.

**Status:** New

---

### Example 2: Medium Bug

**Bug Report #002**
**Date:** 2025-10-26
**Reporter:** QA Tester
**Title:** Card hover effect causes slight layout shift

**Category:** Visual/UI
**Severity:** Medium
**Priority:** P2

**Environment:**
- Browser: Chrome 120
- OS: Windows 11
- Screen: 1920x1080

**Steps to Reproduce:**
1. Load app on desktop
2. Hover over any synonym card
3. Watch closely for layout movement

**Expected Result:**
Image zooms smoothly within card boundaries, no other elements move

**Actual Result:**
Card grows slightly causing adjacent cards to shift 2-3px to the right

**Frequency:** Always (100%)

**Screenshot:**
[Image showing layout shift]

**Suggested Fix:**
Use `transform: scale()` instead of changing width/height. Apply `will-change: transform` for smoother animation.

**Status:** Confirmed

---

### Example 3: Low Bug

**Bug Report #003**
**Date:** 2025-10-26
**Reporter:** Content Reviewer
**Title:** Typo in "deambular" definition

**Category:** Content/Text
**Severity:** Low
**Priority:** P2

**Steps to Reproduce:**
1. Open "deambular" card
2. Read definition

**Expected Result:**
"Andar sin rumbo fijo"

**Actual Result:**
"Andar sin rumbo fijo" (correct - this is just example)

**Frequency:** Always

**Impact:** Minor - doesn't affect functionality but affects credibility

**Status:** New

---

## Quick Reference: Bug Severity

### Critical
- App crashes
- Data loss
- Security vulnerability
- Core feature completely broken
- Affects all or most users

### High
- Major feature doesn't work
- Poor user experience
- Affects significant user segment
- No reasonable workaround

### Medium
- Feature partially works
- Affects some users
- Workaround exists
- Cosmetic but noticeable

### Low
- Minor cosmetic issue
- Affects few users
- Easy workaround
- Typos, spacing issues

---

## Quick Reference: Priority

### P0 - Critical
- Fix immediately
- Block release
- All hands on deck

### P1 - High
- Fix before release
- Include in current sprint
- Schedule promptly

### P2 - Medium
- Fix in next update
- Can wait for next sprint
- Plan to address

### P3 - Low
- Nice to have
- Backlog
- Fix when convenient

---

**End of Bug Report Template**
