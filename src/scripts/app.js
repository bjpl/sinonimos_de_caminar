/**
 * Sinónimos de Caminar - Interactive Spanish Verb Learning Application
 * Main application logic for filtering, rendering, and audio playback
 */

// ============================================================================
// Application State
// ============================================================================

const state = {
  synonyms: [],
  imageCredits: {},
  audioMetadata: {},
  currentAudio: null,
  filters: {
    search: '',
    formality: 'all',
    context: 'all'
  }
};

// ============================================================================
// Data Loading
// ============================================================================

/**
 * Load all required data files on application initialization
 */
async function loadApplicationData() {
  try {
    // Load all data in parallel
    const [synonymsData, creditsData, audioData] = await Promise.all([
      fetch('./data/synonyms.json').then(response => {
        if (!response.ok) throw new Error('Failed to load synonyms.json');
        return response.json();
      }),
      fetch('./data/image_credits.json').then(response => {
        if (!response.ok) throw new Error('Failed to load image_credits.json');
        return response.json();
      }),
      fetch('./data/audio_metadata.json').then(response => {
        if (!response.ok) throw new Error('Failed to load audio_metadata.json');
        return response.json();
      })
    ]);

    // Store in application state
    state.synonyms = synonymsData.verbs || [];
    state.imageCredits = creditsData.credits || {};
    state.audioMetadata = audioData.audio || {};

    // Initialize the application
    initializeApp();
  } catch (error) {
    console.error('Error loading application data:', error);
    showErrorState('Failed to load application data. Please refresh the page.');
  }
}

/**
 * Display error state to user
 */
function showErrorState(message) {
  const container = document.getElementById('cards-container');
  if (container) {
    container.innerHTML = `
      <div class="error-state" role="alert">
        <h2>Error Loading Application</h2>
        <p>${message}</p>
        <button onclick="location.reload()">Reload Page</button>
      </div>
    `;
  }
}

// ============================================================================
// Application Initialization
// ============================================================================

/**
 * Initialize application after data is loaded
 */
function initializeApp() {
  // Render all cards initially
  renderCards();

  // Set up event listeners
  setupEventListeners();

  // Announce to screen readers
  announceToScreenReader('Application loaded successfully. 14 verbs available.');
}

/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
  // Search input with debouncing
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      state.filters.search = e.target.value.trim();
      applyFilters();
    }, 300));
  }

  // Formality filter
  const formalityFilter = document.getElementById('formality-filter');
  if (formalityFilter) {
    formalityFilter.addEventListener('change', (e) => {
      state.filters.formality = e.target.value;
      applyFilters();
    });
  }

  // Context filter
  const contextFilter = document.getElementById('context-filter');
  if (contextFilter) {
    contextFilter.addEventListener('change', (e) => {
      state.filters.context = e.target.value;
      applyFilters();
    });
  }

  // Reset button
  const resetButton = document.getElementById('reset-filters');
  if (resetButton) {
    resetButton.addEventListener('click', resetFilters);
  }

  // Modal close button
  const closeButton = document.getElementById('close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  // Modal overlay click
  const modal = document.getElementById('verb-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
}

/**
 * Handle keyboard shortcuts for accessibility
 */
function handleKeyboardShortcuts(e) {
  // Escape key - close modal
  if (e.key === 'Escape') {
    closeModal();
  }

  // Enter key on search - focus first result
  if (e.key === 'Enter' && e.target.id === 'search-input') {
    const firstCard = document.querySelector('.verb-card:not([style*="display: none"])');
    if (firstCard) {
      firstCard.focus();
    }
  }
}

// ============================================================================
// Filtering Logic
// ============================================================================

/**
 * Apply all active filters and re-render cards
 */
function applyFilters() {
  const { search, formality, context } = state.filters;
  let visibleCount = 0;

  state.synonyms.forEach((verb, index) => {
    const card = document.querySelector(`[data-verb-index="${index}"]`);
    if (!card) return;

    let isVisible = true;

    // Search filter (case-insensitive, matches verb or translation)
    if (search) {
      const searchLower = search.toLowerCase();
      const matchesVerb = verb.verb.toLowerCase().includes(searchLower);
      const matchesTranslation = verb.translation.toLowerCase().includes(searchLower);
      const matchesDefinition = verb.definition.toLowerCase().includes(searchLower);

      isVisible = matchesVerb || matchesTranslation || matchesDefinition;
    }

    // Formality filter
    if (isVisible && formality !== 'all') {
      isVisible = verb.formality === formality;
    }

    // Context filter
    if (isVisible && context !== 'all') {
      isVisible = verb.contexts.includes(context);
    }

    // Show/hide card
    if (isVisible) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Update results count
  updateResultsCount(visibleCount);

  // Show empty state if no results
  if (visibleCount === 0) {
    showEmptyState();
  } else {
    hideEmptyState();
  }

  // Announce to screen readers
  announceToScreenReader(`Showing ${visibleCount} of ${state.synonyms.length} verbs`);
}

/**
 * Reset all filters to default state
 */
function resetFilters() {
  // Reset state
  state.filters = {
    search: '',
    formality: 'all',
    context: 'all'
  };

  // Reset UI elements
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';

  const formalityFilter = document.getElementById('formality-filter');
  if (formalityFilter) formalityFilter.value = 'all';

  const contextFilter = document.getElementById('context-filter');
  if (contextFilter) contextFilter.value = 'all';

  // Re-apply filters (will show all)
  applyFilters();

  // Announce to screen readers
  announceToScreenReader('Filters reset. Showing all 14 verbs.');
}

/**
 * Update the results count display
 */
function updateResultsCount(count) {
  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    const total = state.synonyms.length;
    resultsCount.textContent = `Showing ${count} of ${total} verbs`;
  }
}

/**
 * Show empty state when no results
 */
function showEmptyState() {
  let emptyState = document.getElementById('empty-state');

  if (!emptyState) {
    emptyState = document.createElement('div');
    emptyState.id = 'empty-state';
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <p>No verbs match your filters. Try adjusting your search criteria.</p>
      <button onclick="resetFilters()">Reset Filters</button>
    `;

    const container = document.getElementById('cards-container');
    if (container) {
      container.appendChild(emptyState);
    }
  }

  emptyState.style.display = 'block';
}

/**
 * Hide empty state
 */
function hideEmptyState() {
  const emptyState = document.getElementById('empty-state');
  if (emptyState) {
    emptyState.style.display = 'none';
  }
}

// ============================================================================
// Rendering Functions
// ============================================================================

/**
 * Render all verb cards to the DOM
 */
function renderCards() {
  const container = document.getElementById('cards-container');
  if (!container) {
    console.error('Cards container not found');
    return;
  }

  // Clear existing content
  container.innerHTML = '';

  // Create and append all cards
  state.synonyms.forEach((verb, index) => {
    const card = createCard(verb, index);
    container.appendChild(card);
  });

  // Update results count
  updateResultsCount(state.synonyms.length);
}

/**
 * Create a single verb card element
 */
function createCard(verb, index) {
  const card = document.createElement('article');
  card.className = 'verb-card';
  card.dataset.verbIndex = index;
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${verb.verb} - ${verb.translation}. Click for details.`);

  // Get image credit
  const credit = getImageCredit(verb.image);

  card.innerHTML = `
    <div class="card-image" style="background-image: url('./assets/images/${verb.image}');">
      <div class="image-credit" aria-hidden="true">${credit}</div>
    </div>
    <div class="card-content">
      <h2 class="verb-title">${verb.verb}</h2>
      <p class="verb-translation">${verb.translation}</p>
      <div class="verb-meta">
        <span class="formality-badge ${verb.formality}" aria-label="Formality: ${verb.formality}">
          ${verb.formality}
        </span>
      </div>
      <button
        class="audio-button"
        aria-label="Play pronunciation for ${verb.verb}"
        onclick="event.stopPropagation(); playAudio('${verb.audioPath}', this);">
        <span class="audio-icon">🔊</span>
        <span class="audio-text">Pronunciation</span>
      </button>
    </div>
  `;

  // Click handler for opening modal
  card.addEventListener('click', (e) => {
    // Don't trigger if clicking audio button
    if (!e.target.closest('.audio-button')) {
      openModal(index);
    }
  });

  // Keyboard support for card activation
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(index);
    }
  });

  return card;
}

// ============================================================================
// Modal Functions
// ============================================================================

/**
 * Open modal with verb details
 */
function openModal(index) {
  const verb = state.synonyms[index];
  if (!verb) return;

  const modal = document.getElementById('verb-modal');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalContent) return;

  // Get image credit
  const credit = getImageCredit(verb.image);

  // Build modal content
  modalContent.innerHTML = `
    <div class="modal-image" style="background-image: url('./assets/images/${verb.image}');">
      <div class="image-credit">${credit}</div>
    </div>

    <div class="modal-body">
      <div class="modal-header">
        <h2 class="modal-verb">${verb.verb}</h2>
        <p class="modal-pronunciation">${formatPronunciation(verb.pronunciation)}</p>
        <button
          class="audio-button large"
          aria-label="Play pronunciation for ${verb.verb}"
          onclick="playAudio('${verb.audioPath}', this);">
          <span class="audio-icon">🔊</span>
          <span class="audio-text">Play Pronunciation</span>
        </button>
      </div>

      <div class="modal-section">
        <h3>Translation</h3>
        <p class="modal-translation">${verb.translation}</p>
      </div>

      <div class="modal-section">
        <h3>Definition</h3>
        <p class="modal-definition">${verb.definition}</p>
      </div>

      <div class="modal-section">
        <h3>Example Sentences</h3>
        <ul class="example-list">
          ${verb.examples.map(example => `
            <li>
              <p class="example-spanish">${highlightVerb(example.spanish, verb.verb)}</p>
              <p class="example-english">${example.english}</p>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Usage Information</h3>
        <div class="usage-grid">
          <div class="usage-item">
            <strong>Formality:</strong>
            <span class="formality-badge ${verb.formality}">${verb.formality}</span>
          </div>
          <div class="usage-item">
            <strong>Contexts:</strong>
            <div class="context-tags">
              ${verb.contexts.map(ctx => `<span class="context-tag">${ctx}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>

      ${verb.culturalNote ? `
        <div class="modal-section cultural-note">
          <h3>Cultural Note</h3>
          <p>${verb.culturalNote}</p>
        </div>
      ` : ''}

      ${verb.relatedVerbs && verb.relatedVerbs.length > 0 ? `
        <div class="modal-section">
          <h3>Related Verbs</h3>
          <div class="related-verbs">
            ${verb.relatedVerbs.map(related => `<span class="related-verb">${related}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Show modal
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');

  // Focus management
  const closeButton = document.getElementById('close-modal');
  if (closeButton) {
    closeButton.focus();
  }

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Announce to screen readers
  announceToScreenReader(`Opened details for ${verb.verb}`);
}

/**
 * Close the modal
 */
function closeModal() {
  const modal = document.getElementById('verb-modal');
  if (!modal) return;

  // Hide modal
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');

  // Stop any playing audio
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio = null;
  }

  // Remove playing indicators
  document.querySelectorAll('.audio-button.playing').forEach(btn => {
    btn.classList.remove('playing');
  });

  // Restore body scroll
  document.body.style.overflow = '';

  // Return focus to triggering element if possible
  const focusedCard = document.querySelector('.verb-card:focus');
  if (focusedCard) {
    focusedCard.focus();
  }
}

// ============================================================================
// Audio Player
// ============================================================================

/**
 * Play audio file with error handling
 */
function playAudio(audioPath, buttonElement) {
  // Stop current audio if playing
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio.currentTime = 0;
  }

  // Remove all playing indicators
  document.querySelectorAll('.audio-button.playing').forEach(btn => {
    btn.classList.remove('playing');
  });

  try {
    // Create new audio instance
    const audio = new Audio(`./assets/audio/${audioPath}`);
    state.currentAudio = audio;

    // Add playing indicator
    if (buttonElement) {
      buttonElement.classList.add('playing');
    }

    // Handle audio end
    audio.addEventListener('ended', () => {
      if (buttonElement) {
        buttonElement.classList.remove('playing');
      }
      state.currentAudio = null;
    });

    // Handle audio error
    audio.addEventListener('error', () => {
      console.error(`Failed to load audio: ${audioPath}`);
      if (buttonElement) {
        buttonElement.classList.remove('playing');
      }
      announceToScreenReader('Audio failed to load');
    });

    // Play audio
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
      if (buttonElement) {
        buttonElement.classList.remove('playing');
      }
      announceToScreenReader('Error playing audio');
    });

  } catch (error) {
    console.error('Error creating audio:', error);
    if (buttonElement) {
      buttonElement.classList.remove('playing');
    }
  }
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Highlight the verb in example sentences
 */
function highlightVerb(sentence, verb) {
  // Create regex to match the verb (case-insensitive)
  const verbBase = verb.toLowerCase();
  const regex = new RegExp(`\\b(${verbBase}\\w*)\\b`, 'gi');

  return sentence.replace(regex, '<strong>$1</strong>');
}

/**
 * Format pronunciation with syllable breaks
 */
function formatPronunciation(pronunciation) {
  // Replace dots with middle dots for syllable separation
  return pronunciation.replace(/\./g, '·');
}

/**
 * Get image credit for a given image filename
 */
function getImageCredit(imageName) {
  const credit = state.imageCredits[imageName];
  if (!credit) {
    return 'Photo by Unknown';
  }

  return `Photo by ${credit.photographer}${credit.source ? ` on ${credit.source}` : ''}`;
}

/**
 * Debounce function for search input
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
  let liveRegion = document.getElementById('aria-live-region');

  // Create live region if it doesn't exist
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.className = 'sr-only';
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    document.body.appendChild(liveRegion);
  }

  // Update message
  liveRegion.textContent = message;
}

// ============================================================================
// Application Entry Point
// ============================================================================

/**
 * Initialize application when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadApplicationData);
} else {
  loadApplicationData();
}

// Export functions to global scope for inline event handlers
window.playAudio = playAudio;
window.resetFilters = resetFilters;
window.openModal = openModal;
window.closeModal = closeModal;
