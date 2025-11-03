/**
 * Security Utilities Module
 * Provides input sanitization, XSS prevention, and security helpers
 */

// ============================================================================
// HTML Sanitization
// ============================================================================

/**
 * Sanitize HTML string to prevent XSS attacks
 * Removes potentially dangerous tags and attributes
 * @param {string} html - Raw HTML string
 * @returns {string} - Sanitized HTML string
 */
export function sanitizeHTML(html) {
  if (typeof html !== 'string') {
    return '';
  }

  // Create a temporary div to parse HTML
  const temp = document.createElement('div');
  temp.textContent = html;
  return temp.innerHTML;
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
export function escapeHTML(text) {
  if (typeof text !== 'string') {
    return '';
  }

  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };

  return text.replace(/[&<>"'/]/g, char => map[char]);
}

/**
 * Sanitize text for safe display (allows basic formatting)
 * Allows only safe HTML tags: <strong>, <em>, <p>, <br>
 * @param {string} html - HTML string
 * @returns {string} - Sanitized HTML
 */
export function sanitizeForDisplay(html) {
  if (typeof html !== 'string') {
    return '';
  }

  // First escape all HTML
  let safe = escapeHTML(html);

  // Then allow specific safe tags
  safe = safe.replace(/&lt;strong&gt;/g, '<strong>');
  safe = safe.replace(/&lt;\/strong&gt;/g, '</strong>');
  safe = safe.replace(/&lt;em&gt;/g, '<em>');
  safe = safe.replace(/&lt;\/em&gt;/g, '</em>');
  safe = safe.replace(/&lt;br&gt;/g, '<br>');

  return safe;
}

// ============================================================================
// Input Validation
// ============================================================================

/**
 * Validate and sanitize search input
 * @param {string} input - User search input
 * @returns {string} - Sanitized search string
 */
export function sanitizeSearchInput(input) {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove any HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');

  // Remove special characters that could be used for injection
  sanitized = sanitized.replace(/[<>{}()[\]\\]/g, '');

  // Trim whitespace
  sanitized = sanitized.trim();

  // Limit length
  const MAX_LENGTH = 100;
  if (sanitized.length > MAX_LENGTH) {
    sanitized = sanitized.substring(0, MAX_LENGTH);
  }

  return sanitized;
}

/**
 * Validate filter selection (formality, context)
 * @param {string} value - Filter value
 * @param {Array<string>} allowedValues - Allowed filter values
 * @returns {string} - Valid filter value or 'all'
 */
export function validateFilterValue(value, allowedValues) {
  if (typeof value !== 'string') {
    return 'all';
  }

  // Check if value is in allowed list
  if (allowedValues.includes(value)) {
    return value;
  }

  return 'all';
}

/**
 * Sanitize URL parameter
 * @param {string} param - URL parameter
 * @returns {string} - Sanitized parameter
 */
export function sanitizeURLParameter(param) {
  if (typeof param !== 'string') {
    return '';
  }

  // Remove any dangerous characters
  return param.replace(/[^a-zA-Z0-9_-]/g, '');
}

// ============================================================================
// Path Validation
// ============================================================================

/**
 * Validate file path to prevent directory traversal attacks
 * @param {string} path - File path
 * @param {Array<string>} allowedPaths - List of allowed path prefixes
 * @returns {boolean} - True if path is valid
 */
export function isValidPath(path, allowedPaths = ['./assets/', './data/']) {
  if (typeof path !== 'string') {
    return false;
  }

  // Check for directory traversal attempts
  if (path.includes('..') || path.includes('//')) {
    return false;
  }

  // Check if path starts with allowed prefix
  return allowedPaths.some(allowed => path.startsWith(allowed));
}

/**
 * Sanitize and validate image path
 * @param {string} imageName - Image filename
 * @returns {string|null} - Safe image path or null
 */
export function sanitizeImagePath(imageName) {
  if (typeof imageName !== 'string') {
    return null;
  }

  // Remove path separators
  const sanitized = imageName.replace(/[\/\\]/g, '');

  // Validate file extension
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const hasValidExtension = validExtensions.some(ext =>
    sanitized.toLowerCase().endsWith(ext)
  );

  if (!hasValidExtension) {
    return null;
  }

  return `./assets/images/${sanitized}`;
}

/**
 * Sanitize and validate audio path
 * @param {string} audioName - Audio filename
 * @returns {string|null} - Safe audio path or null
 */
export function sanitizeAudioPath(audioName) {
  if (typeof audioName !== 'string') {
    return null;
  }

  // Remove path separators
  const sanitized = audioName.replace(/[\/\\]/g, '');

  // Validate file extension
  const validExtensions = ['.mp3', '.wav', '.ogg'];
  const hasValidExtension = validExtensions.some(ext =>
    sanitized.toLowerCase().endsWith(ext)
  );

  if (!hasValidExtension) {
    return null;
  }

  return `./assets/audio/${sanitized}`;
}

// ============================================================================
// Content Security Policy Helpers
// ============================================================================

/**
 * Generate nonce for inline scripts (to be used with CSP)
 * @returns {string} - Random nonce string
 */
export function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

/**
 * Check if browser supports required security features
 * @returns {Object} - Feature support status
 */
export function checkSecurityFeatures() {
  return {
    crypto: typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function',
    csp: typeof CSPViolationEvent !== 'undefined',
    cors: typeof fetch !== 'undefined'
  };
}

// ============================================================================
// Rate Limiting (Client-side)
// ============================================================================

/**
 * Simple rate limiter for API calls or actions
 */
export class RateLimiter {
  constructor(maxCalls = 10, windowMs = 1000) {
    this.maxCalls = maxCalls;
    this.windowMs = windowMs;
    this.calls = [];
  }

  /**
   * Check if action is allowed
   * @param {string} key - Action identifier
   * @returns {boolean} - True if allowed
   */
  isAllowed(key = 'default') {
    const now = Date.now();

    // Remove old entries
    this.calls = this.calls.filter(call =>
      call.timestamp > now - this.windowMs && call.key === key
    );

    // Check limit
    if (this.calls.length >= this.maxCalls) {
      return false;
    }

    // Add new call
    this.calls.push({ key, timestamp: now });
    return true;
  }

  /**
   * Reset rate limiter
   */
  reset() {
    this.calls = [];
  }
}

// ============================================================================
// Security Configuration
// ============================================================================

/**
 * Content Security Policy directives
 */
export const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'connect-src': ["'self'"],
  'media-src': ["'self'"],
  'object-src': ["'none'"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"]
};

/**
 * Generate CSP header string
 * @returns {string} - CSP header value
 */
export function generateCSPHeader() {
  return Object.entries(CSP_DIRECTIVES)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
}

// ============================================================================
// Exports
// ============================================================================

export default {
  sanitizeHTML,
  escapeHTML,
  sanitizeForDisplay,
  sanitizeSearchInput,
  validateFilterValue,
  sanitizeURLParameter,
  isValidPath,
  sanitizeImagePath,
  sanitizeAudioPath,
  generateNonce,
  checkSecurityFeatures,
  RateLimiter,
  CSP_DIRECTIVES,
  generateCSPHeader
};
