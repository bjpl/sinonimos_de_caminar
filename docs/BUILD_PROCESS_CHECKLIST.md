# Build Process Checklist - Sinónimos de Caminar

**Step-by-step process to build "Sinónimos de Caminar" - based on proven template from sinonimos_de_ver**

---

## Phase 1: Project Setup & Planning (15 minutes)

### 1.1 Initialize Project
```bash
✓ Project directory: sinonimos_de_caminar
✓ Git initialized
✓ Remote added: https://github.com/bjpl/sinonimos_de_caminar.git
```

### 1.2 Create Directory Structure
```bash
✓ mkdir -p src/{styles,scripts,data,assets/{images/{synonyms,hero},audio/{verbs,examples}}}
✓ mkdir -p docs/{content,architecture,reviews}
✓ mkdir -p scripts
```

### 1.3 Create Configuration Files
```bash
✓ .gitignore created
✓ README.md created
□ src/index.html
□ src/styles/main.css
□ src/scripts/app.js
□ src/data/synonyms.json
```

---

## Phase 2: SPARC Swarm Planning (30 minutes)

### 2.1 Launch Research Agent
```bash
□ Use Task tool with researcher subagent
□ Research 10-20 sophisticated synonyms for "caminar"
□ Identify formality levels (formal/neutral)
□ Identify contexts (cotidiano/literario/profesional/narrativo)
□ Gather 3 example sentences per synonym
□ Document cultural notes for LATAM usage
□ Save to: docs/content/caminar_synonyms_research.md
```

**Target Synonyms for Caminar (Walking verbs):**
- andar, pasear, deambular, vagar, transitar
- peregrinar, desplazarse, circular, recorrer, trajinar
- rondar, callejear, vagabundear, errar

### 2.2 Launch System Architect Agent
```bash
□ Use Task tool with system-architect subagent
□ Design app architecture
□ Define color palette (earth tones, walking/path theme)
□ Choose typography (serif for Spanish, sans-serif for UI)
□ Plan layout (hero, grid, modal, filters)
□ Save to: docs/architecture/app_design.md
```

### 2.3 Launch Coder Agents (Parallel)
```bash
□ Use Task tool with 3 coder subagents in ONE message:
  □ Agent 1: Build HTML structure
  □ Agent 2: Build CSS styling (walking/journey theme)
  □ Agent 3: Build JavaScript application logic
```

### 2.4 Launch Backend Developer Agent
```bash
□ Use Task tool with backend-dev subagent
□ Design Unsplash API integration (walking, paths, journeys imagery)
□ Create image download script
□ Save to: scripts/download_images.js
```

### 2.5 Launch Reviewer Agent
```bash
□ Use Task tool with reviewer subagent
□ Review UX sophistication
□ Check for generic/cliché elements
□ Save to: docs/reviews/ux_sophistication_review.md
```

---

## Phase 3: Content Creation (1-2 hours)

### 3.1 Create Synonyms Data File
```bash
□ Open: src/data/synonyms.json
□ For EACH synonym of "caminar", add complete entry
```

**Quality Checks:**
```bash
□ All verbs are sophisticated walking synonyms
□ Definitions show nuance in walking style/purpose
□ Examples are authentic (not textbook)
□ Cultural notes add genuine insight about LATAM usage
□ No typos or errors
□ Formality levels distributed (not all formal)
□ Contexts varied (not all literario)
```

---

## Phase 4: Image Asset Generation (30-45 minutes)

### 4.1 Get Unsplash API Key
```bash
□ Visit: https://unsplash.com/developers
□ Create free account
□ Create new application
□ Copy Access Key
```

### 4.2 Configure Image Download Script
```bash
□ Open: scripts/download_images.js
□ Add your Unsplash API key
□ Configure search queries for walking-related imagery
```

**Suggested Image Searches:**
- andar → "person walking city street"
- pasear → "leisurely walk park nature"
- deambular → "wandering urban landscape"
- vagar → "lone person wandering nature"
- peregrinar → "pilgrimage path journey"
- desplazarse → "person moving commute travel"
- circular → "people circulating public space"
- recorrer → "hiking trail mountain path"
- trajinar → "busy person walking market"
- rondar → "person walking night street"
- callejear → "narrow street alley walking"
- vagabundear → "wanderer backpack traveler road"
- errar → "lost person wandering empty landscape"
- hero → "walking path journey scenic trail"

### 4.3 Download Images
```bash
□ cd scripts
□ node download_images.js
□ Verify all images downloaded
```

---

## Phase 5: Audio Asset Generation (20-30 minutes)

### 5.1 Install Edge TTS
```bash
□ pip install edge-tts
□ Verify install: edge-tts --version
```

### 5.2 Configure Voice Mapping
```bash
□ Open: scripts/generate_audio.py
□ Map each synonym to a LATAM voice
□ Alternate genders and regions
```

### 5.3 Generate Audio Files
```bash
□ cd scripts
□ python generate_audio.py
□ Verify 56 files generated (14 verbs + 42 examples)
```

---

## Phase 6: Frontend Implementation (1-2 hours)

### 6.1 Build HTML Structure
```bash
□ Copy template from sinonimos_de_ver
□ Update title: "Sinónimos de Caminar"
□ Update subtitle: "Descubre la riqueza del movimiento en español"
```

### 6.2 Build CSS Styling
```bash
□ Copy template CSS
□ Customize color palette (earth tones)
□ Adjust for walking/journey theme
```

### 6.3 Build JavaScript Logic
```bash
□ Copy template JavaScript
□ No changes needed (fully dynamic)
```

---

## Phase 7: Testing & Quality Assurance (30-60 minutes)

### 7.1 Start Local Server
```bash
□ python -m http.server 8000
□ Open: http://localhost:8000/src/index.html
```

### 7.2 Visual Testing
```bash
□ Hero image loads correctly
□ All 14 synonym cards display
□ Images load properly
□ Cards layout responsive
□ Hover effects work
□ Modal functions correctly
```

### 7.3 Audio Testing
```bash
□ All audio files play
□ Different voices recognizable
□ Volume consistent
□ Playing animation works
```

### 7.4 Functionality Testing
```bash
□ Search works in real-time
□ Filters work correctly
□ Reset button clears all
□ Modal keyboard shortcuts
```

---

## Phase 8: Documentation & Deployment (30 minutes)

### 8.1 Documentation
```bash
✓ BUILD_PROCESS_CHECKLIST.md created
✓ REUSABLE_TEMPLATE.md created
✓ README.md created
□ PROJECT_SPECIFICATION.md
```

### 8.2 Git Workflow
```bash
✓ git init
✓ git remote add origin
□ git add .
□ git commit -m "feat: Initial commit - Complete sinonimos_de_caminar app"
□ git push -u origin main
```

### 8.3 Deploy
```bash
□ Enable GitHub Pages (Settings → Pages → /src folder)
□ OR deploy to Netlify/Vercel
```

---

## Summary Progress

**Completed:**
- [x] Project structure
- [x] Git initialization
- [x] Remote connection
- [x] .gitignore
- [x] README.md
- [x] BUILD_PROCESS_CHECKLIST.md
- [x] REUSABLE_TEMPLATE.md

**Next Steps:**
- [ ] Research synonyms content
- [ ] Create synonyms.json
- [ ] Download images
- [ ] Generate audio
- [ ] Build frontend
- [ ] Test application
- [ ] Deploy

---

**Estimated Time Remaining: 5-7 hours**
