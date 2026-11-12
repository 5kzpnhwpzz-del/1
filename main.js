(function () {
  'use strict';

  var PREFIX = '[MEGA GO Diagnostico]';

  try {
    console.log(PREFIX, 'Modulo iniciado');
    console.log(PREFIX, 'URL:', location.href);
    console.log(PREFIX, 'User Agent:', navigator.userAgent);

    function mostrarDiagnostico() {
      if (!document.body) {
        console.warn(PREFIX, 'document.body no disponible');
        return;
      }

      var panel = document.createElement('div');

      panel.id = 'megago-diagnostico';
      panel.textContent =
        'MEGA GO - Diagnostico OK | TizenBrew activo';

      panel.style.cssText =
        'position:fixed;' +
        'top:20%;left:5%;width:90%;' +
        'box-sizing:border-box;' +
        'background:#123b62;color:white;' +
        'padding:25px;text-align:center;' +
        'font:22px sans-serif;' +
        'z-index:2147483647;' +
        'border:3px solid white;';

      document.body.appendChild(panel);

      console.log(PREFIX, 'Panel mostrado');
    }

    if (document.readyState === 'loading') {
      document.addEventListener(
        'DOMContentLoaded',
        mostrarDiagnostico
      );
    } else {
      mostrarDiagnostico();
    }

  } catch (error) {
    console.error(PREFIX, error);
  }
}());
