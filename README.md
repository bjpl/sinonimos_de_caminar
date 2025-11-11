# Sinónimos de Caminar

**Una colección elegante e interactiva de sinónimos del verbo "caminar" en español latinoamericano**

Aplicación web educativa que presenta sinónimos sofisticados del verbo "caminar", con audio pronunciado por múltiples voces latinoamericanas, imágenes contextuales de alta calidad, y definiciones culturalmente relevantes.

---

## 🎯 Características

- **14 sinónimos sofisticados** del verbo caminar
- **Múltiples voces LATAM** - 8 voces diferentes (México, Colombia, Argentina, Neutral)
- **56 archivos de audio MP3** - Pronunciación de verbos y ejemplos
- **Imágenes contextuales** - Fotografías de alta calidad que representan cada concepto
- **Definiciones matizadas** - Explicaciones detalladas del uso de cada sinónimo
- **Ejemplos auténticos** - 3 oraciones por verbo en contextos reales
- **Notas culturales** - Información sobre el uso en LATAM
- **Filtros inteligentes** - Por formalidad, contexto, y búsqueda en tiempo real
- **Diseño elegante** - Paleta de colores tierra, tipografía sofisticada
- **100% responsive** - Funciona perfectamente en móvil y escritorio
- **Deployment:** GitHub Pages ready

---

## 📚 Sinónimos Incluidos

1. **andar** - Moverse de un lugar a otro a pie (cotidiano)
2. **pasear** - Caminar sin prisa, por placer (cotidiano)
3. **deambular** - Andar sin rumbo fijo (literario)
4. **vagar** - Ir de un lugar a otro sin destino (narrativo)
5. **transitar** - Pasar por un lugar (profesional)
6. **peregrinar** - Viajar a pie, especialmente por motivos religiosos (literario)
7. **desplazarse** - Moverse de un punto a otro (profesional)
8. **circular** - Moverse por un espacio (profesional)
9. **recorrer** - Atravesar o cubrir una distancia (cotidiano)
10. **trajinar** - Andar de un lado a otro con actividad (cotidiano)
11. **rondar** - Andar alrededor de un lugar (narrativo)
12. **callejear** - Andar por las calles sin rumbo (cotidiano)
13. **vagabundear** - Andar errante de un lugar a otro (narrativo)
14. **errar** - Andar sin rumbo, vagar (literario)

---

## 🚀 Cómo Usar

### Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/bjpl/sinonimos_de_caminar.git
cd sinonimos_de_caminar

# Iniciar servidor local (Python)
python -m http.server 8000

# Abrir en navegador
http://localhost:8000/src/index.html
```

### Generar Assets (Opcional)

Si quieres regenerar las imágenes o audio:

```bash
# Descargar imágenes (requiere API key de Unsplash)
cd scripts
node download_images.js

# Generar audio (requiere edge-tts)
pip install edge-tts
python generate_audio.py
```

---

## 🏗️ Estructura del Proyecto

```
sinonimos_de_caminar/
├── src/
│   ├── index.html              # Aplicación principal
│   ├── styles/main.css         # Estilos completos
│   ├── scripts/app.js          # Lógica de la aplicación
│   ├── data/
│   │   ├── synonyms.json       # Datos de sinónimos
│   │   ├── image_credits.json  # Créditos de fotógrafos
│   │   └── audio_metadata.json # Metadatos de audio
│   └── assets/
│       ├── images/             # Imágenes (hero + sinónimos)
│       └── audio/              # Archivos MP3 (verbos + ejemplos)
├── scripts/
│   ├── download_images.js      # Descargador de Unsplash
│   └── generate_audio.py       # Generador de audio TTS
├── docs/
│   ├── BUILD_PROCESS_CHECKLIST.md
│   ├── REUSABLE_TEMPLATE.md
│   └── content/                # Investigación de contenido
└── README.md
```

---

## 🎨 Características de Diseño

- **Paleta de colores tierra**: Tonos marrones que evocan caminos y naturaleza
- **Tipografía elegante**: Serif para contenido español, sans-serif para UI
- **Animaciones suaves**: Transiciones fluidas de 60fps
- **Grid responsivo**: Se adapta a cualquier tamaño de pantalla
- **Modal inmersivo**: Vista detallada de pantalla completa
- **Efectos hover**: Zoom en imágenes, estados interactivos

---

## 🔊 Voces LATAM

El proyecto incluye 8 voces naturales de Microsoft Edge TTS:

- 🇲🇽 **Dalia** & **Jorge** - México
- 🇨🇴 **Salome** & **Gonzalo** - Colombia
- 🇦🇷 **Elena** & **Tomás** - Argentina
- 🇺🇸 **Paloma** & **Alonso** - Español Neutral (US)

Cada sinónimo tiene una voz diferente para máxima variedad y exposición a diferentes acentos.

---

## 📖 Créditos

### Imágenes
- Fuente: [Unsplash](https://unsplash.com)
- Licencia: Unsplash License (uso gratuito)
- Créditos completos: Ver `src/data/image_credits.json`

### Audio
- Generado con: Microsoft Edge TTS
- Voces: Ver `src/data/audio_metadata.json`

### Contenido
- Definiciones, ejemplos, notas culturales: Trabajo original
- Licencia: Uso educativo con atribución

---

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6+)
- **Audio**: Microsoft Edge TTS (edge-tts) - 56 archivos MP3
- **Imágenes**: Unsplash API
- **Status:** No package.json - Pure HTML/CSS/JS static site
- **Hosting**: GitHub Pages compatible / Netlify / Vercel
- **Browser Support:** Modern browsers with ES6+ support

---

## 📝 Licencia

- **Código**: MIT License
- **Imágenes**: Unsplash License
- **Audio**: Microsoft Edge TTS (uso educativo)
- **Contenido**: Uso educativo con atribución

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📧 Contacto

Brandon Lambert - [@bjpl](https://github.com/bjpl)

Proyecto: [https://github.com/bjpl/sinonimos_de_caminar](https://github.com/bjpl/sinonimos_de_caminar)

---

## 🙏 Agradecimientos

- [Unsplash](https://unsplash.com) - Por las hermosas fotografías
- [Microsoft Edge TTS](https://github.com/rany2/edge-tts) - Por las voces naturales
- Comunidad LATAM de educadores de español

---

**¡Explora la riqueza del movimiento en español! 🚶‍♂️🇪🇸**
