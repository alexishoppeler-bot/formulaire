/* ===== JS/DATA/APPARIER-DATA.JS ===== */
'use strict';

window.APPARIER_DATA = [
  {
    category: 'Identité',
    pairs: [
      { term: 'Nom',               def: 'Nom de famille' },
      { term: 'Prénom',            def: 'Nom personnel' },
      { term: 'Date de naissance', def: 'Jour, mois et année de naissance' },
      { term: 'Nationalité',       def: 'Pays de la personne' },
      { term: 'État civil',        def: 'Situation : célibataire, marié, etc.' },
    ]
  },
  {
    category: 'Coordonnées',
    pairs: [
      { term: 'Adresse',     def: 'Lieu où la personne habite' },
      { term: 'Code postal', def: 'Numéro de la commune ou du quartier' },
      { term: 'Ville',       def: 'Commune où la personne habite' },
      { term: 'Téléphone',   def: 'Numéro pour appeler' },
      { term: 'E-mail',      def: 'Adresse électronique' },
    ]
  },
  {
    category: 'Document',
    pairs: [
      { term: 'Formulaire', def: 'Document avec des informations à écrire' },
      { term: 'Case',       def: 'Petit espace à remplir ou à cocher' },
      { term: 'Signature',  def: 'Nom écrit à la main à la fin' },
      { term: 'Document',   def: 'Papier demandé avec le formulaire' },
      { term: 'Date',       def: 'Jour, mois et année' },
    ]
  },
];
