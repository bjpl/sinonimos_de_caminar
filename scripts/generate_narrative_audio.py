#!/usr/bin/env python3
"""
Generate audio files for narrative experiences
Uses Microsoft Edge TTS (FREE - no API key needed!)
"""

import asyncio
import json
import os
from pathlib import Path

try:
    import edge_tts
except ImportError:
    print("Installing edge-tts...")
    os.system("pip install edge-tts")
    import edge_tts

# Directories
AUDIO_DIR = Path(__file__).parent.parent / "assets" / "audio"
NARRATIVES_DIR = AUDIO_DIR / "narratives"
DATA_DIR = Path(__file__).parent.parent / "data"

NARRATIVES_DIR.mkdir(parents=True, exist_ok=True)

# Voice mapping (Microsoft Edge TTS - FREE!)
VOICES = {
    "mx_female_1": "es-MX-DaliaNeural",
    "mx_male_1": "es-MX-JorgeNeural",
    "co_female_1": "es-CO-SalomeNeural",
    "co_male_1": "es-CO-GonzaloNeural",
    "ar_female_1": "es-AR-ElenaNeural",
    "ar_male_1": "es-AR-TomasNeural",
}

# Verb voice mapping for narrative consistency
VERB_VOICES = {
    "deambular": "ar_female_1",  # Argentine female - urban sophistication
    "vagar": "co_female_1",       # Colombian female - poetic wandering
    "errar": "mx_male_1",         # Mexican male - mythological gravitas
}

async def generate_audio(text, output_path, voice):
    """Generate audio file using Edge TTS (FREE)"""
    communicate = edge_tts.Communicate(text, VOICES[voice])
    await communicate.save(output_path)
    print(f"✅ Generated: {output_path.name} ({voice})")

async def generate_narrative_audio():
    """Generate audio for all narrative parts"""

    # Load synonyms data
    synonyms_path = DATA_DIR / "synonyms.json"
    with open(synonyms_path, 'r', encoding='utf-8') as f:
        synonyms = json.load(f)

    # Load existing metadata
    metadata_path = DATA_DIR / "audio_metadata.json"
    with open(metadata_path, 'r', encoding='utf-8') as f:
        audio_metadata = json.load(f)

    # Add narratives section if not exists
    if "narratives" not in audio_metadata:
        audio_metadata["narratives"] = {}

    tasks = []
    narrative_count = 0

    print("🎙️  Generating narrative audio with LATAM voices (FREE!)...\n")

    for synonym in synonyms:
        verb = synonym["verb"]

        # Only process if has narrative
        if "narrativeExperience" not in synonym:
            continue

        narrative = synonym["narrativeExperience"]
        voice = VERB_VOICES.get(verb)

        if not voice:
            print(f"⚠️  No voice mapping for {verb}, skipping...")
            continue

        print(f"📖 {verb} ({VOICES[voice]})")

        # Update metadata
        audio_metadata["narratives"][verb] = []

        # Generate audio for each part
        for i, part_text in enumerate(narrative["parts"], 1):
            output_file = NARRATIVES_DIR / f"{verb}_part_{i}.mp3"

            # Add to tasks
            tasks.append(generate_audio(part_text, output_file, voice))

            # Update metadata
            audio_metadata["narratives"][verb].append({
                "part": i,
                "file": f"assets/audio/narratives/{verb}_part_{i}.mp3",
                "voice": voice,
                "text": part_text[:50] + "..."  # Truncated for metadata
            })

            narrative_count += 1

        print()

    # Generate all audio files
    print(f"Generating {narrative_count} audio files...\n")
    await asyncio.gather(*tasks)

    # Save updated metadata
    with open(metadata_path, 'w', encoding='utf-8') as f:
        json.dump(audio_metadata, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Generated {narrative_count} narrative audio files!")
    print(f"✅ Updated {metadata_path}")
    print("\n🎉 Audio generation complete!")

if __name__ == "__main__":
    asyncio.run(generate_narrative_audio())
