/* ===== JS/DATA/PAIRE-DATA.JS ===== */
'use strict';

window.PAIRE_DATA = [
  // === VRAIES PAIRES ===
  {
    category: 'Remplir un formulaire',
    isPair: true,
    card1: { emoji: '👤', text: 'Nom' },
    card2: { emoji: '📝', text: 'Nom de famille' },
    explication: 'Dans un formulaire, le nom correspond au nom de famille.'
  },
  {
    category: 'Remplir un formulaire',
    isPair: true,
    card1: { emoji: '🧍', text: 'Prénom' },
    card2: { emoji: '🙂', text: 'Nom personnel' },
    explication: 'Le prénom est le nom personnel de la personne.'
  },
  {
    category: 'Adresse',
    isPair: true,
    card1: { emoji: '🏠', text: 'Adresse' },
    card2: { emoji: '📍', text: 'Rue et numéro' },
    explication: 'L’adresse contient en général la rue et le numéro.'
  },
  {
    category: 'Adresse',
    isPair: true,
    card1: { emoji: '📮', text: 'Code postal' },
    card2: { emoji: '🏙️', text: 'Ville' },
    explication: 'Le code postal va avec la ville dans une adresse complète.'
  },
  {
    category: 'Contact',
    isPair: true,
    card1: { emoji: '📞', text: 'Téléphone' },
    card2: { emoji: '☎️', text: 'Numéro pour appeler' },
    explication: 'Le téléphone permet de contacter la personne.'
  },
  {
    category: 'Contact',
    isPair: true,
    card1: { emoji: '✉️', text: 'E-mail' },
    card2: { emoji: '📧', text: 'Adresse électronique' },
    explication: 'L’e-mail est l’adresse électronique utilisée pour recevoir des messages.'
  },
  {
    category: 'Document',
    isPair: true,
    card1: { emoji: '✍️', text: 'Signature' },
    card2: { emoji: '✅', text: 'Validation du document' },
    explication: 'La signature sert à valider ou confirmer les informations écrites.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '☑️', text: 'Cocher' },
    card2: { emoji: '📦', text: 'Choisir une case' },
    explication: 'Cocher signifie sélectionner une case dans le formulaire.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '👀', text: 'Vérifier' },
    card2: { emoji: '🔎', text: 'Relire avant envoyer' },
    explication: 'Il faut vérifier les informations avant d’envoyer ou de remettre le formulaire.'
  },
  {
    category: 'Action',
    isPair: true,
    card1: { emoji: '📨', text: 'Envoyer' },
    card2: { emoji: '📄', text: 'Formulaire terminé' },
    explication: 'On envoie le formulaire quand il est complété et vérifié.'
  },

  // === FAUSSES PAIRES ===
  {
    category: 'Remplir un formulaire',
    isPair: false,
    card1: { emoji: '👤', text: 'Nom' },
    card2: { emoji: '📅', text: 'Date' },
    explication: 'Le nom et la date sont deux informations différentes dans un formulaire.'
  },
  {
    category: 'Remplir un formulaire',
    isPair: false,
    card1: { emoji: '🧍', text: 'Prénom' },
    card2: { emoji: '🏙️', text: 'Ville' },
    explication: 'Le prénom est une information personnelle, pas une adresse.'
  },
  {
    category: 'Adresse',
    isPair: false,
    card1: { emoji: '🏠', text: 'Adresse' },
    card2: { emoji: '✍️', text: 'Signature' },
    explication: 'L’adresse indique où on habite, la signature sert à valider le document.'
  },
  {
    category: 'Adresse',
    isPair: false,
    card1: { emoji: '📮', text: 'Code postal' },
    card2: { emoji: '📞', text: 'Téléphone' },
    explication: 'Le code postal concerne l’adresse, pas le numéro de téléphone.'
  },
  {
    category: 'Contact',
    isPair: false,
    card1: { emoji: '✉️', text: 'E-mail' },
    card2: { emoji: '🏠', text: 'Rue' },
    explication: 'L’e-mail est une adresse électronique, la rue fait partie de l’adresse postale.'
  },
  {
    category: 'Document',
    isPair: false,
    card1: { emoji: '✍️', text: 'Signature' },
    card2: { emoji: '📞', text: 'Téléphone' },
    explication: 'La signature et le téléphone sont deux champs différents.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '☑️', text: 'Cocher' },
    card2: { emoji: '✉️', text: 'E-mail' },
    explication: 'Cocher est une action, e-mail est une information de contact.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '📨', text: 'Envoyer' },
    card2: { emoji: '❌', text: 'Formulaire vide' },
    explication: 'On n’envoie pas un formulaire vide. Il faut d’abord le remplir.'
  },
  {
    category: 'Action',
    isPair: false,
    card1: { emoji: '👀', text: 'Vérifier' },
    card2: { emoji: '⚡', text: 'Aller vite sans lire' },
    explication: 'Vérifier veut dire relire avec attention, pas aller vite sans contrôler.'
  },
];
