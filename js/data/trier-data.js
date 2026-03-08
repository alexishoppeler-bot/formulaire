/* ===== JS/DATA/TRIER-DATA.JS ===== */
'use strict';

window.TRIER_DATA = [
  {
    theme: 'Remplir un formulaire',
    groups: [
      { label: 'Identité', emoji: '👤', items: ['Nom', 'Prénom', 'Date de naissance', 'Nationalité'] },
      { label: 'Adresse', emoji: '🏠', items: ['Rue', 'Numéro', 'Code postal', 'Ville'] },
      { label: 'Contact', emoji: '📞', items: ['Téléphone', 'E-mail', 'Portable', 'Adresse électronique'] },
      { label: 'Validation', emoji: '✍️', items: ['Signature', 'Date', 'Vérifier', 'Envoyer'] },
    ],
  },
  {
    theme: 'Types d’informations',
    groups: [
      { label: 'Informations personnelles', emoji: '🧍', items: ['Nom', 'Prénom', 'Sexe', 'État civil'] },
      { label: 'Coordonnées', emoji: '📬', items: ['Adresse', 'Téléphone', 'E-mail', 'Code postal'] },
      { label: 'Documents', emoji: '📄', items: ['Formulaire', 'Pièce d’identité', 'Attestation', 'Signature'] },
      { label: 'Actions', emoji: '✅', items: ['Lire', 'Écrire', 'Cocher', 'Relire'] },
    ],
  },
  {
    theme: 'Formulaire papier',
    groups: [
      { label: 'Avant', emoji: '👀', items: ['Lire les questions', 'Prendre un stylo', 'Regarder les consignes', 'Préparer les documents'] },
      { label: 'Pendant', emoji: '📝', items: ['Écrire les réponses', 'Compléter les cases', 'Cocher', 'Demander de l’aide'] },
      { label: 'Après', emoji: '🔎', items: ['Relire', 'Corriger', 'Signer', 'Remettre le document'] },
      { label: 'Erreurs à éviter', emoji: '⚠️', items: ['Laisser vide', 'Signer trop vite', 'Oublier la date', 'Écrire faux'] },
    ],
  },
  {
    theme: 'Formulaire en ligne',
    groups: [
      { label: 'Champs à remplir', emoji: '⌨️', items: ['Nom', 'Prénom', 'Téléphone', 'E-mail'] },
      { label: 'Sélection', emoji: '☑️', items: ['Case à cocher', 'Menu déroulant', 'Choix', 'Réponse'] },
      { label: 'Vérification', emoji: '🔍', items: ['Champ obligatoire', 'Message rouge', 'Erreur', 'Corriger'] },
      { label: 'Fin', emoji: '📨', items: ['Envoyer', 'Confirmation', 'Formulaire terminé', 'Message reçu'] },
    ],
  },
  {
    theme: 'Adresse complète',
    groups: [
      { label: 'Rue et lieu', emoji: '📍', items: ['Rue', 'Avenue', 'Chemin', 'Numéro'] },
      { label: 'Commune', emoji: '🏙️', items: ['Code postal', 'Ville', 'Commune', 'Pays'] },
      { label: 'Contact', emoji: '☎️', items: ['Téléphone', 'Portable', 'E-mail', 'Adresse électronique'] },
      { label: 'Identité', emoji: '🪪', items: ['Nom', 'Prénom', 'Date de naissance', 'Nationalité'] },
    ],
  },
];
