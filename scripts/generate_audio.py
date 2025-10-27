#!/usr/bin/env python3
"""
Audio Generation Script for Sinónimos de Caminar
Uses Microsoft Edge TTS to generate audio files with diverse LATAM voices
"""

import asyncio
import edge_tts
import json
import os
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Tuple

# Voice configuration - 8 different LATAM voices
VOICES = {
    'mx_female_1': 'es-MX-DaliaNeural',
    'co_male_1': 'es-CO-GonzaloNeural',
    'ar_female_1': 'es-AR-ElenaNeural',
    'mx_male_1': 'es-MX-JorgeNeural',
    'us_female_1': 'es-US-PalomaNeural',
    'co_female_1': 'es-CO-SalomeNeural',
    'ar_male_1': 'es-AR-TomasNeural',
    'us_male_1': 'es-US-AlonsoNeural',
}

# Voice mapping for each verb (alternating for variety)
VERB_VOICE_MAPPING = {
    'andar': 'mx_female_1',
    'pasear': 'co_male_1',
    'deambular': 'ar_female_1',
    'vagar': 'mx_male_1',
    'transitar': 'us_female_1',
    'peregrinar': 'co_female_1',
    'desplazarse': 'ar_male_1',
    'circular': 'us_male_1',
    'recorrer': 'mx_female_1',
    'trajinar': 'co_male_1',
    'rondar': 'ar_female_1',
    'callejear': 'mx_male_1',
    'vagabundear': 'us_female_1',
    'errar': 'co_female_1',
}

# Verb definitions with examples - MATCHING synonyms.json
VERB_DATA = {
    'andar': {
        'definition': 'moverse de un lugar a otro, ir o funcionar',
        'examples': [
            '¿Cómo andas? —Ando buscando trabajo.',
            'El reloj no anda bien desde que se cayó.',
            'Ando muy cansado últimamente, necesito vacaciones.'
        ]
    },
    'pasear': {
        'definition': 'caminar sin prisa por placer o recreación',
        'examples': [
            'Nos gusta pasear por la playa al atardecer.',
            'Cada domingo saco a pasear al perro en el parque del barrio.',
            'Paseamos por el centro histórico sin ningún apuro.'
        ]
    },
    'deambular': {
        'definition': 'vagar sin rumbo fijo o dirección clara',
        'examples': [
            'Deambulaba por las calles del barrio viejo, perdido en sus recuerdos.',
            'Los pacientes pueden deambular libremente por esta área del hospital.',
            'Después de la noticia, salió a deambular sin rumbo fijo por la ciudad.'
        ]
    },
    'vagar': {
        'definition': 'andar errante sin destino ni propósito fijo',
        'examples': [
            'Vagó por el mundo durante años, buscando algo que nunca encontró.',
            'Su mente vagaba mientras miraba por la ventana del tren.',
            'Vagaban de pueblo en pueblo, sin establecerse en ningún lugar.'
        ]
    },
    'transitar': {
        'definition': 'pasar por un lugar, circular por una vía',
        'examples': [
            'Está prohibido transitar por esta zona durante las obras.',
            'Los peatones pueden transitar libremente por el paseo marítimo.',
            'Vehículos pesados no pueden transitar por el centro histórico.'
        ]
    },
    'peregrinar': {
        'definition': 'hacer una peregrinación con propósito espiritual',
        'examples': [
            'Miles de fieles peregrinan cada año a la Basílica de Guadalupe.',
            'Peregrinó durante meses por el Camino de Santiago.',
            'Peregrinar por la vida en busca de la verdad es una tarea noble.'
        ]
    },
    'desplazarse': {
        'definition': 'moverse o trasladarse de un lugar a otro',
        'examples': [
            'Me desplazo al trabajo en metro porque hay mucho tráfico.',
            'La población se vio obligada a desplazarse debido al conflicto.',
            '¿Cómo te desplazas por la ciudad normalmente?'
        ]
    },
    'circular': {
        'definition': 'moverse por un área, transitar o fluir',
        'examples': [
            'Los vehículos no pueden circular por esta calle los domingos.',
            'La sangre circula por todo el cuerpo a través de las venas.',
            'Circulan muchos rumores sobre la renuncia del director.'
        ]
    },
    'recorrer': {
        'definition': 'atravesar o cubrir una distancia o área',
        'examples': [
            'Recorrimos toda la ciudad en un solo día, ¡estamos agotados!',
            'El río recorre cientos de kilómetros hasta llegar al mar.',
            'Recorrió la casa con la mirada, buscando algún cambio.'
        ]
    },
    'trajinar': {
        'definition': 'andar atareado llevando cosas o haciendo diligencias',
        'examples': [
            'He estado trajinando todo el día con los preparativos de la fiesta.',
            'Mi abuela trajina en la cocina desde temprano en la mañana.',
            'Los trabajadores trajinaban de un lado a otro, cargando cajas.'
        ]
    },
    'rondar': {
        'definition': 'patrullar, merodear o estar alrededor de un área',
        'examples': [
            'El vigilante ronda el edificio cada hora durante la noche.',
            'Había un hombre sospechoso rondando la tienda desde hace rato.',
            'Los precios de las casas en este barrio rondan el millón de dólares.'
        ]
    },
    'callejear': {
        'definition': 'vagar por las calles sin destino particular',
        'examples': [
            'Nos gusta callejear por el centro histórico los fines de semana.',
            'Pasé la tarde callejeando, viendo las vitrinas y la gente.',
            'Callejeando por el barrio descubrí un café increíble.'
        ]
    },
    'vagabundear': {
        'definition': 'vagar como vagabundo, vivir estilo errante',
        'examples': [
            'Después de perder su trabajo, pasó meses vagabundeando por las calles.',
            'Me gusta vagabundear por los mercados de pulgas, nunca sabes qué vas a encontrar.',
            'En su juventud vagabundeó por toda Europa con una mochila y una guitarra.'
        ]
    },
    'errar': {
        'definition': 'equivocarse; vagar o errar',
        'examples': [
            'Erraba por los campos como alma en pena, buscando redención.',
            'Como Ulises, erró durante años antes de hallar su hogar.',
            'Si he errado en mi juicio, pido disculpas.'
        ]
    },
}


class AudioGenerator:
    """Generates audio files using Edge TTS"""

    def __init__(self, base_path: str):
        self.base_path = Path(base_path)
        self.verbs_dir = self.base_path / 'assets' / 'audio' / 'verbs'
        self.examples_dir = self.base_path / 'assets' / 'audio' / 'examples'
        self.metadata: Dict = {
            'generated_at': datetime.now().isoformat(),
            'total_files': 0,
            'voices_used': list(VOICES.keys()),
            'voice_details': VOICES,
            'verbs': {}
        }

    def setup_directories(self):
        """Create necessary directories"""
        print("Setting up directories...")
        self.verbs_dir.mkdir(parents=True, exist_ok=True)
        self.examples_dir.mkdir(parents=True, exist_ok=True)
        print(f"✓ Created: {self.verbs_dir}")
        print(f"✓ Created: {self.examples_dir}")

    async def check_voices(self) -> bool:
        """Verify all voices are available"""
        print("\nChecking voice availability...")
        try:
            voices = await edge_tts.list_voices()
            available_voices = {v['ShortName'] for v in voices}

            all_available = True
            for voice_id, voice_name in VOICES.items():
                if voice_name in available_voices:
                    print(f"✓ {voice_id}: {voice_name}")
                else:
                    print(f"✗ {voice_id}: {voice_name} NOT AVAILABLE")
                    all_available = False

            return all_available
        except Exception as e:
            print(f"Error checking voices: {e}")
            return False

    async def generate_audio(self, text: str, voice: str, output_path: Path) -> bool:
        """Generate a single audio file"""
        try:
            voice_name = VOICES[voice]
            communicate = edge_tts.Communicate(text, voice_name)
            await communicate.save(str(output_path))
            return True
        except Exception as e:
            print(f"  ✗ Error: {e}")
            return False

    async def generate_verb_audio(self, verb: str, voice_id: str) -> Tuple[bool, Dict]:
        """Generate audio for a verb and its examples"""
        print(f"\n📢 Generating audio for: {verb}")
        print(f"   Voice: {voice_id} ({VOICES[voice_id]})")

        verb_info = {
            'voice': voice_id,
            'voice_name': VOICES[voice_id],
            'files': {},
            'success': True
        }

        # Generate verb audio
        verb_file = self.verbs_dir / f"{verb}.mp3"
        print(f"   Verb file: {verb_file.name}")
        success = await self.generate_audio(verb, voice_id, verb_file)
        verb_info['files']['verb'] = str(verb_file.relative_to(self.base_path))

        if not success:
            verb_info['success'] = False
            return False, verb_info

        # Generate example audios
        examples = VERB_DATA[verb]['examples']
        verb_info['files']['examples'] = []

        for idx, example in enumerate(examples, 1):
            example_file = self.examples_dir / f"{verb}_example_{idx}.mp3"
            print(f"   Example {idx}: {example_file.name}")
            success = await self.generate_audio(example, voice_id, example_file)

            if success:
                verb_info['files']['examples'].append({
                    'file': str(example_file.relative_to(self.base_path)),
                    'text': example
                })
            else:
                verb_info['success'] = False

        return verb_info['success'], verb_info

    async def generate_all(self):
        """Generate all audio files"""
        print("\n" + "="*60)
        print("AUDIO GENERATION STARTED")
        print("="*60)

        total_verbs = len(VERB_DATA)
        total_files = total_verbs + sum(len(v['examples']) for v in VERB_DATA.values())

        print(f"\nTarget: {total_verbs} verbs + {total_files - total_verbs} examples = {total_files} files")
        print(f"Using {len(VOICES)} different voices")

        success_count = 0
        failed_verbs = []

        for idx, (verb, voice_id) in enumerate(VERB_VOICE_MAPPING.items(), 1):
            print(f"\n[{idx}/{total_verbs}] Processing: {verb}")
            success, verb_info = await self.generate_verb_audio(verb, voice_id)

            self.metadata['verbs'][verb] = verb_info

            if success:
                success_count += 1
                print(f"✓ Completed: {verb}")
            else:
                failed_verbs.append(verb)
                print(f"✗ Failed: {verb}")

        # Update metadata
        self.metadata['total_files'] = total_files
        self.metadata['successful_verbs'] = success_count
        self.metadata['failed_verbs'] = failed_verbs

        # Save metadata
        metadata_file = self.base_path / 'data' / 'audio_metadata.json'
        with open(metadata_file, 'w', encoding='utf-8') as f:
            json.dump(self.metadata, f, indent=2, ensure_ascii=False)

        print("\n" + "="*60)
        print("GENERATION COMPLETE")
        print("="*60)
        print(f"✓ Successful: {success_count}/{total_verbs} verbs")
        if failed_verbs:
            print(f"✗ Failed: {', '.join(failed_verbs)}")
        print(f"📄 Metadata saved to: {metadata_file}")
        print("="*60)

        return success_count == total_verbs


async def main():
    """Main execution function"""
    # Get the project root (assuming script is in scripts/ directory)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent

    print("Sinónimos de Caminar - Audio Generator")
    print("Using Microsoft Edge TTS with LATAM voices")
    print(f"Project root: {project_root}")

    generator = AudioGenerator(str(project_root))

    # Setup
    generator.setup_directories()

    # Check voices
    if not await generator.check_voices():
        print("\n⚠️  Some voices are not available!")
        response = input("Continue anyway? (y/N): ")
        if response.lower() != 'y':
            print("Aborted.")
            return

    # Generate all audio
    success = await generator.generate_all()

    if success:
        print("\n✓ All audio files generated successfully!")
        print("\nNext steps:")
        print("1. Review generated files in src/assets/audio/")
        print("2. Check audio_metadata.json for voice mapping")
        print("3. Test audio playback in the app")
    else:
        print("\n⚠️  Some files failed to generate. Check the output above.")


if __name__ == '__main__':
    asyncio.run(main())
