'use strict';

(function initPlaceholderFormulaire() {
  document.addEventListener('DOMContentLoaded', () => {
    const feedback = document.getElementById('formFeedback');
    if (feedback) {
      feedback.textContent = 'Exercice en cours de configuration.';
    }
  });
})();
