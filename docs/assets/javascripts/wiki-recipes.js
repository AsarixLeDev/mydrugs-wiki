(function () {
  function getBasePath() {
    const path = window.location.pathname || "/";
    const parts = path.split('/').filter(Boolean);
    if (window.location.hostname.endsWith('github.io') && parts.length) {
      return '/' + parts[0] + '/';
    }
    return '/';
  }

  function normalizeRecipeImages() {
    const base = getBasePath();
    document.querySelectorAll('img[src^="assets/"]').forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) return;
      const normalized = base + src.replace(/^\/+/, '');
      if (img.src !== normalized) {
        img.src = normalized;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', normalizeRecipeImages);
  } else {
    normalizeRecipeImages();
  }
})();
