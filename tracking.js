(function() {
  const key = 'visits-' + window.location.pathname;
  const count = Number(localStorage.getItem(key) || 0) + 1;
  localStorage.setItem(key, count);
  document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('visit-count');
    if (el) {
      el.textContent = 'Visits: ' + count;
    }
  });
})();
