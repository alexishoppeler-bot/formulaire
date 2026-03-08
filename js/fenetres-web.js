'use strict';

(function initPlaceholderFenetresWeb() {
  document.addEventListener('DOMContentLoaded', () => {
    const instruction = document.getElementById('fw-instruction');
    const progress = document.getElementById('fw-progress');
    if (instruction) instruction.textContent = 'Simulation disponible prochainement.';
    if (progress) progress.textContent = 'Étape 0 / 0';
  });
})();
