(function () {
  'use strict';
  // Diagnostic only: does not alter authentication, DRM, or playback.
  console.log('[MEGA GO TizenBrew test] Script loaded at:', location.href);
  function showStatus() {
    var el = document.createElement('div');
    el.textContent = 'MEGA GO: módulo de prueba activo';
    el.style.cssText = 'position:fixed;left:12px;bottom:12px;z-index:2147483647;background:#202020;color:white;padding:10px;font:16px sans-serif;border:1px solid #999';
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 12000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showStatus);
  else showStatus();
}());
