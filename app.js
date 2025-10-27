/**
 * Sinónimos de Caminar - Working Application
 */

const state = {
  synonyms: [],
  currentAudio: null,
  filters: { search: '', formality: 'all', context: 'all' }
};

async function init() {
  try {
    const res = await fetch('./data/synonyms.json');
    state.synonyms = await res.json();
    console.log('Loaded', state.synonyms.length, 'synonyms');

    const hero = document.getElementById('hero-image');
    if (hero) hero.src = 'assets/images/hero/hero-walking.jpg';

    render();
    setupEvents();
  } catch (e) {
    console.error('Error:', e);
  }
}

function render() {
  const container = document.getElementById('cards-container');
  if (!container) {
    console.error('Container not found!');
    return;
  }

  container.innerHTML = '';

  const filtered = state.synonyms.filter(v => {
    const search = !state.filters.search ||
      v.verb.toLowerCase().includes(state.filters.search.toLowerCase()) ||
      v.quickDefinition.toLowerCase().includes(state.filters.search.toLowerCase());
    const form = state.filters.formality === 'all' || v.formality === state.filters.formality;
    const ctx = state.filters.context === 'all' || v.context === state.filters.context;
    return search && form && ctx;
  });

  filtered.forEach(function(v) {
    const card = document.createElement('div');
    card.className = 'verb-card';
    card.innerHTML =
      '<div class="card-img-wrapper">' +
        '<img src="' + v.image + '" alt="' + v.verb + '" class="card-img">' +
      '</div>' +
      '<div class="card-body">' +
        '<h3>' + v.verb + ' <button class="audio-btn-inline" onclick="event.stopPropagation(); play(\'assets/audio/verbs/' + v.verb + '.mp3\')">🔊</button></h3>' +
        '<p>' + v.quickDefinition + '</p>' +
        '<div class="badges">' +
          '<span class="badge badge-' + v.formality + '">' + v.formality + '</span>' +
          '<span class="badge badge-' + v.context + '">' + v.context + '</span>' +
        '</div>' +
      '</div>';

    card.onclick = function() { openModal(v); };
    container.appendChild(card);
  });

  updateCount(filtered.length);

  const noRes = document.getElementById('no-results');
  if (noRes) noRes.style.display = filtered.length === 0 ? 'flex' : 'none';
}

function play(path) {
  if (state.currentAudio) state.currentAudio.pause();
  state.currentAudio = new Audio(path);
  state.currentAudio.play().catch(function(err) {
    console.error('Audio error:', err);
  });
}

function openModal(v) {
  const modal = document.getElementById('verb-modal');

  const examplesHTML = v.examples.map(function(ex, i) {
    return '<li>' + highlightVerb(ex, v.verb) +
           ' <button onclick="event.stopPropagation(); play(\'assets/audio/examples/' + v.verb + '_example_' + (i+1) + '.mp3\')">🔊</button></li>';
  }).join('');

  modal.innerHTML =
    '<div class="modal-content">' +
      '<button class="modal-close" onclick="closeModal()">&times;</button>' +
      '<div class="modal-img-section">' +
        '<img src="' + v.image + '" alt="' + v.verb + '" class="modal-img">' +
      '</div>' +
      '<div class="modal-body-section">' +
        '<h2>' + v.verb + ' <button onclick="event.stopPropagation(); play(\'assets/audio/verbs/' + v.verb + '.mp3\')">🔊</button></h2>' +
        '<p class="pron">' + v.pronunciation + '</p>' +
        '<h3>Definición</h3><p>' + v.definition + '</p>' +
        '<h3>Ejemplos</h3><ul class="examples">' + examplesHTML + '</ul>' +
        '<h3>Notas Culturales</h3><p>' + v.culturalNotes + '</p>' +
        '<div class="meta">' +
          '<span><strong>Formalidad:</strong> ' + v.formality + '</span><br>' +
          '<span><strong>Contexto:</strong> ' + v.context + '</span>' +
        '</div>' +
      '</div>' +
    '</div>';

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('verb-modal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio = null;
  }
}

function highlightVerb(text, verb) {
  const regex = new RegExp('\\b' + verb + '\\w*\\b', 'gi');
  return text.replace(regex, '<strong>$&</strong>');
}

function updateCount(n) {
  const el = document.getElementById('results-count');
  if (el) el.textContent = n + ' de ' + state.synonyms.length + ' resultados';
}

function setupEvents() {
  const search = document.getElementById('search-input');
  if (search) {
    search.oninput = function() {
      state.filters.search = this.value;
      render();
    };
  }

  const form = document.getElementById('formality-filter');
  if (form) {
    form.onchange = function() {
      state.filters.formality = this.value;
      render();
    };
  }

  const ctx = document.getElementById('context-filter');
  if (ctx) {
    ctx.onchange = function() {
      state.filters.context = this.value;
      render();
    };
  }

  const reset = document.getElementById('reset-filters');
  if (reset) {
    reset.onclick = function() {
      state.filters = { search: '', formality: 'all', context: 'all' };
      if (search) search.value = '';
      if (form) form.value = 'all';
      if (ctx) ctx.value = 'all';
      render();
    };
  }

  document.onkeydown = function(e) {
    if (e.key === 'Escape') closeModal();
  };

  const modal = document.getElementById('verb-modal');
  if (modal) {
    modal.onclick = function(e) {
      if (e.target === modal) closeModal();
    };
  }
}

function scrollToContent() {
  const el = document.getElementById('content-start');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', init);
