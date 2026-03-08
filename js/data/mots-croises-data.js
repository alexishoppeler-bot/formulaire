/* ===== JS/DATA/MOTS-CROISES-DATA.JS ===== */
'use strict';

window.MOTS_CROISES_DATA = [
  {
    name: 'Grille 1 — Formulaire',
    rows: 9,
    cols: 10,
    layout: [
      'FORMULAIRE',
      '##########',
      'ADRESSE###',
      '##########',
      'SIGNATURE',
      '##########',
      'TELEPHONE',
      '##########',
      'EMAIL#####',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'FORMULAIRE', clue: 'Document avec des cases à remplir' },
      { id: 2, dir: 'across', r: 2, c: 0, answer: 'ADRESSE', clue: 'Lieu où vous habitez' },
      { id: 3, dir: 'across', r: 4, c: 0, answer: 'SIGNATURE', clue: 'Nom écrit à la main à la fin du document' },
      { id: 4, dir: 'across', r: 6, c: 0, answer: 'TELEPHONE', clue: 'Numéro pour appeler la personne' },
      { id: 5, dir: 'across', r: 8, c: 0, answer: 'EMAIL', clue: 'Adresse électronique' },
    ],
  },

  {
    name: 'Grille 2 — Identité',
    rows: 9,
    cols: 10,
    layout: [
      'PRENOM####',
      '##########',
      'NOM#######',
      '##########',
      'NAISSANCE#',
      '##########',
      'PAYS######',
      '##########',
      'VILLE#####',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'PRENOM', clue: 'Nom personnel' },
      { id: 2, dir: 'across', r: 2, c: 0, answer: 'NOM', clue: 'Nom de famille' },
      { id: 3, dir: 'across', r: 4, c: 0, answer: 'NAISSANCE', clue: 'Mot utilisé dans “date de ...”' },
      { id: 4, dir: 'across', r: 6, c: 0, answer: 'PAYS', clue: 'Exemple : Suisse, France, Italie' },
      { id: 5, dir: 'across', r: 8, c: 0, answer: 'VILLE', clue: 'Commune où vous habitez' },
    ],
  },

  {
    name: 'Grille 3 — Actions',
    rows: 9,
    cols: 10,
    layout: [
      'ECRIRE####',
      '##########',
      'COCHER####',
      '##########',
      'VERIFIER##',
      '##########',
      'ENVOYER###',
      '##########',
      'DATE######',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'ECRIRE', clue: 'Action pour compléter un champ' },
      { id: 2, dir: 'across', r: 2, c: 0, answer: 'COCHER', clue: 'Action dans une case' },
      { id: 3, dir: 'across', r: 4, c: 0, answer: 'VERIFIER', clue: 'Contrôler avant de finir' },
      { id: 4, dir: 'across', r: 6, c: 0, answer: 'ENVOYER', clue: 'Action finale pour transmettre le formulaire' },
      { id: 5, dir: 'across', r: 8, c: 0, answer: 'DATE', clue: 'Jour, mois, année' },
    ],
  },
];
