#!/usr/bin/env node

/**
 * Generate Narrative Audio for Literary Synonyms
 * Uses ElevenLabs TTS API to generate audio for narrative parts
 *
 * Usage: ELEVENLABS_API_KEY=your_key node scripts/generate_narrative_audio.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const API_KEY = process.env.ELEVENLABS_API_KEY;
const OUTPUT_DIR = path.join(__dirname, '../assets/audio/narratives');
const METADATA_FILE = path.join(__dirname, '../data/audio_metadata.json');

// ElevenLabs voice IDs for different Spanish variants
const VOICES = {
  ar_female_1: 'gvEEEfUqSkaUj4hRaHmI', // Argentine female - elegant
  mx_male_1: 'kHqkub1Nb3fCMkYp0kqs',   // Mexican male - narrative
  co_female_1: 'eWImkZw8GqxY2WQFC38U'  // Colombian female - literary
};

// Narrative audio configuration
const NARRATIVES = {
  deambular: {
    voice: VOICES.ar_female_1, // Argentine female for urban sophistication
    parts: [
      {
        part: 1,
        text: "Martín salió del apartamento sin saber adónde iba. Sus pies lo llevaron por calles que conocía de memoria, pero esa noche todo le parecía extraño, como si la ciudad misma hubiera cambiado de rostro. Deambulaba sin propósito, dejando que el ritmo de sus pasos dictara el rumbo. Las luces de los escaparates proyectaban sombras que lo seguían, cómplices silenciosos de su deriva urbana."
      },
      {
        part: 2,
        text: "Pasó tres veces por la misma esquina sin darse cuenta. El bar donde solía reunirse con ella seguía abierto, con su letrero de neón parpadeante. Siguió deambulando, evitando conscientemente ciertos lugares mientras sus pies lo traicionaban, llevándolo inevitablemente hacia los recuerdos. La ciudad nocturna se había convertido en un laberinto de su propia construcción, cada calle una decisión que no quería tomar."
      },
      {
        part: 3,
        text: "Al amanecer, se encontró frente a su propio edificio sin recordar el camino de regreso. Había deambulado en círculos toda la noche, y en ese andar sin rumbo había trazado un mapa invisible de su estado interior. Comprendió entonces que deambular no es simplemente caminar sin destino, es el acto de externalizar el laberinto interno, de darle forma física a la desorientación del alma. Sus pasos errantes habían sido, al final, el único lenguaje posible para expresar lo que las palabras no podían."
      }
    ]
  },
  vagar: {
    voice: VOICES.co_female_1, // Colombian female for poetic journey
    parts: [
      {
        part: 1,
        text: "Elena llevaba seis meses vagando por la costa cuando llegó a un pueblo cuyo nombre nunca aprendió. No era turista ni buscaba nada en particular; simplemente vagaba, dejando que cada amanecer decidiera su próximo destino. Su mochila contenía lo esencial: ropa, un cuaderno, y las cenizas de su madre que había prometido esparcir en algún lugar que se sintiera correcto. Pero cada playa, cada mirador, cada puerto, le parecía insuficiente para ese gesto final."
      },
      {
        part: 2,
        text: "Vagó de pueblo en pueblo, de hostal en hostal, aceptando trabajos temporales que le permitían seguir en movimiento. Conoció a otros vagantes: un músico brasileño que huía del éxito, una pareja argentina que llevaba años recorriendo el continente en bicicleta. Todos compartían esa mirada característica, no perdida sino perpetuamente en búsqueda. No preguntaban adónde vas sino cuánto tiempo llevas vagando, como si el vagar mismo fuera el único hogar que necesitaban."
      },
      {
        part: 3,
        text: "Un año después, Elena se encontró en un acantilado mirando el océano Pacífico. Las cenizas seguían en su mochila, intactas. Comprendió que había malinterpretado su promesa desde el principio. No se trataba de encontrar el lugar perfecto para esparcirlas, sino de aceptar que vagar era la manera adecuada de honrar a su madre, quien también había sido una vagante del espíritu. El viaje sin fin no era el camino hacia el destino; vagar era el destino mismo. Guardó la urna nuevamente y siguió caminando hacia el sur."
      }
    ]
  },
  errar: {
    voice: VOICES.mx_male_1, // Mexican male for mythological gravitas
    parts: [
      {
        part: 1,
        text: "Don Miguel había errado durante veinte años desde la noche que traicionó a su hermano. No vagaba por placer ni deambulaba sin sentido, erraba como los antiguos condenados de las leyendas, llevando su culpa como una cruz invisible. Los campesinos lo reconocían por su paso característico, siempre hacia adelante pero nunca hacia ningún lado en particular, como si buscara un perdón que la tierra misma se negaba a conceder. Su errar no era físico solamente; era la manifestación externa de un alma que nunca hallaría reposo."
      },
      {
        part: 2,
        text: "Lo vieron en ferias de pueblos remotos, en procesiones religiosas, en caminos polvorientos que no llevaban a ninguna parte. Algunos decían que erraba siguiendo las rutas coloniales antiguas; otros, que simplemente repetía el camino que su hermano habría tomado aquella noche fatal. Lo que nadie podía negar era la cualidad mítica de su andar, no era un vagabundo común sino una figura casi alegórica, un ejemplo viviente de que algunos errores condenan al alma a errar para siempre."
      },
      {
        part: 3,
        text: "Cuando encontraron a Don Miguel, había muerto sentado bajo un árbol de ceibo, con la mirada fija en el horizonte. Los aldeanos discutieron si su errar había terminado finalmente o si continuaría en algún plano más allá de la vida. Pero lo que quedó claro para todos fue que errar no es simplemente caminar sin rumbo, es el castigo eterno de quien cometió un error imperdonable, es la manifestación física del arrepentimiento, es caminar eternamente alejándose de un pasado que nunca puede ser alcanzado ni enmendado. Don Miguel no caminaba: erraba, y en ese errar había toda una teología del pecado y la redención imposible."
      }
    ]
  }
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Generate audio file using ElevenLabs TTS
 */
async function generateAudio(text, voiceId, outputPath) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      text: text,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0.5,
        use_speaker_boost: true
      }
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      port: 443,
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY,
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`API returned ${res.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

/**
 * Generate all narrative audio files
 */
async function generateAllNarratives() {
  if (!API_KEY) {
    console.error('❌ ELEVENLABS_API_KEY environment variable not set');
    console.log('Usage: ELEVENLABS_API_KEY=your_key node scripts/generate_narrative_audio.js');
    process.exit(1);
  }

  console.log('🎙️  Generating narrative audio files...\n');

  const metadata = {
    narratives: {}
  };

  for (const [verb, config] of Object.entries(NARRATIVES)) {
    console.log(`📖 Processing: ${verb}`);
    metadata.narratives[verb] = [];

    for (const partConfig of config.parts) {
      const filename = `${verb}_part${partConfig.part}.mp3`;
      const filepath = path.join(OUTPUT_DIR, filename);
      const relPath = `assets/audio/narratives/${filename}`;

      try {
        console.log(`   Part ${partConfig.part}... `, );
        await generateAudio(partConfig.text, config.voice, filepath);

        metadata.narratives[verb].push({
          part: partConfig.part,
          file: relPath,
          voice: Object.keys(VOICES).find(k => VOICES[k] === config.voice),
          text: partConfig.text
        });

        console.log('✓');

        // Rate limiting: wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.log(`✗ Error: ${error.message}`);
      }
    }
    console.log();
  }

  // Update audio metadata file
  try {
    let existingMetadata = {};
    if (fs.existsSync(METADATA_FILE)) {
      existingMetadata = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf8'));
    }

    existingMetadata.narratives = metadata.narratives;
    fs.writeFileSync(METADATA_FILE, JSON.stringify(existingMetadata, null, 2));
    console.log('✅ Updated audio_metadata.json');
  } catch (error) {
    console.error('❌ Failed to update metadata:', error.message);
  }

  console.log('\n🎉 Narrative audio generation complete!');
}

// Run generation
generateAllNarratives().catch(console.error);
