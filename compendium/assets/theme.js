(function () {
  var b = document.getElementById('theme-toggle'); if (!b) return;
  var r = document.documentElement;
  var cur = function () { return r.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'); };
  var label = function () { b.textContent = cur() === 'dark' ? 'Light' : 'Dark'; b.setAttribute('aria-label', 'Switch to ' + b.textContent.toLowerCase() + ' theme'); };
  b.hidden = false; label();
  b.addEventListener('click', function () { var n = cur() === 'dark' ? 'light' : 'dark'; r.dataset.theme = n; try { localStorage.setItem('gh-theme', n); } catch (e) {} label(); });
})();
