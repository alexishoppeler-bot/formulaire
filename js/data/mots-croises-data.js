'use strict';

window.MOTS_CROISES_DATA = [
  {
    name: 'Grille 1 — Dossier',
    rows: 7,
    cols: 8,
    layout: [
      'DOSSIER#',
      'A#I#N###',
      'T#G#F###',
      'E#N#O###',
      '##E#####',
      'EMAIL###',
      'NOM#####',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'DOSSIER', clue: 'Ensemble de documents a remettre' },
      { id: 2, dir: 'across', r: 5, c: 0, answer: 'EMAIL', clue: 'Adresse electronique de contact' },
      { id: 3, dir: 'across', r: 6, c: 0, answer: 'NOM', clue: 'Nom de famille' },
      { id: 4, dir: 'down', r: 0, c: 0, answer: 'DATE', clue: 'Jour, mois et annee a indiquer' },
      { id: 5, dir: 'down', r: 0, c: 2, answer: 'SIGNE', clue: 'Action a faire pour valider un document' },
      { id: 6, dir: 'down', r: 0, c: 4, answer: 'INFO', clue: 'Renseignement demande dans un champ' },
    ],
  },

  {
    name: 'Grille 2 — Identite',
    rows: 6,
    cols: 7,
    layout: [
      'PRENOM#',
      'A#T#U##',
      'P#A#I##',
      'I#T####',
      'E######',
      'RUE####',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'PRENOM', clue: 'Nom personnel' },
      { id: 2, dir: 'across', r: 5, c: 0, answer: 'RUE', clue: 'Element principal de l adresse' },
      { id: 3, dir: 'down', r: 0, c: 0, answer: 'PAPIER', clue: 'Support d un formulaire imprime' },
      { id: 4, dir: 'down', r: 0, c: 2, answer: 'ETAT', clue: 'Mot present dans "etat civil"' },
      { id: 5, dir: 'down', r: 0, c: 4, answer: 'OUI', clue: 'Reponse possible dans une case a cocher' },
    ],
  },

  {
    name: 'Grille 3 — Coordonnees',
    rows: 6,
    cols: 7,
    layout: [
      'ADRESSE',
      'I#U#I##',
      'D#E#G##',
      'E###N##',
      '####E##',
      'DATE###',
    ],
    words: [
      { id: 1, dir: 'across', r: 0, c: 0, answer: 'ADRESSE', clue: 'Lieu ou vous habitez' },
      { id: 2, dir: 'across', r: 5, c: 0, answer: 'DATE', clue: 'Champ pour indiquer le jour' },
      { id: 3, dir: 'down', r: 0, c: 0, answer: 'AIDE', clue: 'Coup de pouce pour remplir un formulaire' },
      { id: 4, dir: 'down', r: 0, c: 2, answer: 'RUE', clue: 'Voie dans une adresse postale' },
      { id: 5, dir: 'down', r: 0, c: 4, answer: 'SIGNE', clue: 'Etat d un document une fois valide' },
    ],
  },
];
