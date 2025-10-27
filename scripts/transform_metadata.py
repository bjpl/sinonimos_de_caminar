#!/usr/bin/env python3
"""
Transform audio_metadata.json to the format expected by app.js
"""

import json
from pathlib import Path

def transform_metadata(input_file, output_file):
    """Transform metadata from generator format to app.js format"""

    # Read generated metadata
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Create new structure
    transformed = {
        "verbs": {},
        "examples": {}
    }

    # Transform each verb
    for verb, verb_data in data['verbs'].items():
        # Fix path separators (\ to /)
        verb_file = verb_data['files']['verb'].replace('\\', '/')

        # Add verb audio metadata
        transformed['verbs'][verb] = {
            "file": verb_file,
            "voice": verb_data['voice'],
            "text": verb
        }

        # Add example audio metadata
        transformed['examples'][verb] = []
        for example in verb_data['files']['examples']:
            example_file = example['file'].replace('\\', '/')
            transformed['examples'][verb].append({
                "file": example_file,
                "text": example['text']
            })

    # Write transformed metadata
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(transformed, f, indent=2, ensure_ascii=False)

    print(f"✓ Transformed metadata saved to: {output_file}")
    print(f"  - {len(transformed['verbs'])} verbs")
    print(f"  - {sum(len(ex) for ex in transformed['examples'].values())} examples")

if __name__ == '__main__':
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    input_file = project_root / 'data' / 'audio_metadata.json'
    output_file = project_root / 'data' / 'audio_metadata.json'

    print("Transforming audio_metadata.json...")
    transform_metadata(input_file, output_file)
    print("✓ Done!")
