# Narrative Audio Generation Guide

## Overview

This guide explains how to generate audio narration for the literary narrative experiences in Sinónimos de Caminar using ElevenLabs TTS API.

## Prerequisites

1. **ElevenLabs API Key**: Sign up at [ElevenLabs](https://elevenlabs.io) and get your API key
2. **Node.js**: Ensure Node.js is installed (v14+ recommended)

## Audio Configuration

### Voice Selection

Each literary verb uses a specific Spanish voice for narrative consistency:

- **deambular**: `ar_female_1` (Argentine female) - Urban sophistication
- **vagar**: `co_female_1` (Colombian female) - Poetic wandering
- **errar**: `mx_male_1` (Mexican male) - Mythological gravitas

### Audio Specifications

- **Model**: `eleven_multilingual_v2` (ElevenLabs Spanish TTS)
- **Format**: MP3
- **Settings**:
  - Stability: 0.5
  - Similarity Boost: 0.75
  - Style: 0.5
  - Speaker Boost: enabled

## Generation Process

### Step 1: Set API Key

```bash
export ELEVENLABS_API_KEY="your_elevenlabs_api_key_here"
```

### Step 2: Run Generation Script

```bash
node scripts/generate_narrative_audio.js
```

This script will:
1. Generate 9 audio files (3 verbs × 3 parts each)
2. Save to `assets/audio/narratives/`
3. Update `data/audio_metadata.json` automatically

### Step 3: Verify Generated Files

```bash
ls -la assets/audio/narratives/
```

Expected files:
- `deambular_part1.mp3`
- `deambular_part2.mp3`
- `deambular_part3.mp3`
- `vagar_part1.mp3`
- `vagar_part2.mp3`
- `vagar_part3.mp3`
- `errar_part1.mp3`
- `errar_part2.mp3`
- `errar_part3.mp3`

## Audio Integration

### Component Integration

Audio buttons are automatically integrated into `NarrativeViewer.js`:

- **Location**: Top-right of each narrative part
- **Icon**: Speaker icon with sound waves
- **Behavior**: Click to play, shows pulsing animation while playing
- **Fallback**: Global `playAudio()` function with graceful degradation

### Metadata Structure

Audio metadata in `data/audio_metadata.json`:

```json
{
  "narratives": {
    "deambular": [
      {
        "part": 1,
        "file": "assets/audio/narratives/deambular_part1.mp3",
        "voice": "ar_female_1",
        "text": "Martín salió del apartamento..."
      }
    ]
  }
}
```

### Styling

Audio buttons styled in `styles/narrative.css`:

- **Default**: Subtle gray circle
- **Hover**: Slightly darker, scales to 1.1x
- **Playing**: Blue tint with pulsing animation
- **Size**: 36×36px circular button

## Testing

### Manual Testing Checklist

1. ✅ Open narrative viewer for each literary verb
2. ✅ Click audio button on Part 1
3. ✅ Verify audio plays and button shows "playing" state
4. ✅ Click audio button on Part 2 while Part 1 is playing
5. ✅ Verify Part 1 stops and Part 2 starts
6. ✅ Test on mobile devices (audio buttons should be visible)

### Browser Console Testing

```javascript
// Check if audio metadata is loaded
console.log(window.audioMetadata.narratives);

// Manually play audio
window.playAudio('assets/audio/narratives/deambular_part1.mp3');
```

## Troubleshooting

### Audio Files Not Playing

**Issue**: Audio buttons appear but no sound plays

**Solutions**:
1. Check browser console for errors
2. Verify audio files exist in `assets/audio/narratives/`
3. Check file permissions (should be readable)
4. Test audio URL directly in browser
5. Verify audio metadata JSON is valid

### Audio Buttons Not Appearing

**Issue**: No audio buttons visible in narrative viewer

**Solutions**:
1. Verify `window.audioMetadata` is loaded in app.js
2. Check narrative metadata exists for the verb
3. Inspect component with DevTools to verify HTML structure
4. Clear browser cache and hard refresh

### Generation Script Fails

**Issue**: `generate_narrative_audio.js` throws errors

**Solutions**:
1. Verify `ELEVENLABS_API_KEY` is set correctly
2. Check API quota/limits on ElevenLabs account
3. Verify network connectivity
4. Check Node.js version (requires v14+)

## Cost Estimation

### ElevenLabs Pricing

- **Free Tier**: 10,000 characters/month
- **Narrative Text**: ~600 words/part × 3 parts × 3 verbs = ~5,400 words
- **Characters**: ~32,000 characters total
- **Cost**: Requires paid tier or multiple free accounts

### Production Considerations

1. **One-time Generation**: Audio files are generated once and committed to repo
2. **CDN Delivery**: Serve from GitHub Pages (free) or CDN
3. **File Size**: ~500KB per part × 9 = ~4.5MB total
4. **Bandwidth**: Minimal (users only download audio they listen to)

## Deployment

### Include in Git

```bash
git add assets/audio/narratives/*.mp3
git add data/audio_metadata.json
git commit -m "feat: Add narrative audio narration"
git push origin main
```

### GitHub Pages

Audio files deploy automatically with GitHub Pages since they're in `assets/audio/`.

## Alternative: Manual Audio Upload

If you don't have an ElevenLabs API key, you can:

1. Use ElevenLabs web interface to generate audio manually
2. Download each audio file
3. Rename to match expected filenames
4. Place in `assets/audio/narratives/`
5. Metadata structure is already configured

## Future Enhancements

- [ ] Add playback speed controls
- [ ] Add text highlighting synchronized with audio
- [ ] Support multiple voice options per verb
- [ ] Add audio quality selector (high/low bandwidth)
- [ ] Implement audio preloading for smoother experience

---

**Last Updated**: November 10, 2025
**Component Version**: NarrativeViewer v1.0 with Audio Support
