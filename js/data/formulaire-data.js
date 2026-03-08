'use strict';

window.FORMULAIRE_DATA = [
  {
    id: 'form-1',
    tag: 'Professionnel',
    profile: {
      name: 'Jean Dupont',
      age: 35,
      email: 'jean.dupont@email.com',
      phone: '+41 79 123 45 67',
      address: '123 Rue de la Paix, 1200 Genève',
      education: 'Baccalauréat en Informatique (2008)',
      experience: '10 ans d\'expérience en développement web',
      skills: ['JavaScript', 'Python', 'HTML/CSS', 'React']
    },
    form: {
      fields: [
        { name: 'firstName', label: 'Prénom', expected: 'Jean', type: 'text' },
        { name: 'lastName', label: 'Nom', expected: 'Dupont', type: 'text' },
        { name: 'email', label: 'E-mail', expected: 'jean.dupont@email.com', type: 'email' },
        { name: 'phone', label: 'Téléphone', expected: '+41 79 123 45 67', type: 'tel' },
        { name: 'experience', label: 'Années d\'expérience', expected: '10', type: 'number' },
        { name: 'skills', label: 'Compétences principales', expected: 'JavaScript, Python', type: 'text' }
      ]
    }
  },
  {
    id: 'form-2',
    tag: 'Assistante',
    profile: {
      name: 'Marie Martin',
      age: 28,
      email: 'marie.martin@email.com',
      phone: '+41 78 234 56 78',
      address: '456 Avenue des Alpes, 1700 Fribourg',
      education: 'Diplôme en Gestion Administrative (2018)',
      experience: '5 ans en secrétariat et gestion administrative',
      skills: ['Microsoft Office', 'Gestion de projets', 'Service clients']
    },
    form: {
      fields: [
        { name: 'firstName', label: 'Prénom', expected: 'Marie', type: 'text' },
        { name: 'lastName', label: 'Nom', expected: 'Martin', type: 'text' },
        { name: 'email', label: 'E-mail', expected: 'marie.martin@email.com', type: 'email' },
        { name: 'phone', label: 'Téléphone', expected: '+41 78 234 56 78', type: 'tel' },
        { name: 'experience', label: 'Années d\'expérience', expected: '5', type: 'number' },
        { name: 'skills', label: 'Compétences principales', expected: 'Microsoft Office, Gestion', type: 'text' }
      ]
    }
  },
  {
    id: 'form-3',
    tag: 'Vendeur',
    profile: {
      name: 'Pierre Lefevre',
      age: 32,
      email: 'pierre.lefevre@email.com',
      phone: '+41 77 345 67 89',
      address: '789 Boulevard Principal, 1800 Vevey',
      education: 'BTS Vente et Négociation (2010)',
      experience: '8 ans dans le secteur du commerce de détail',
      skills: ['Vente', 'Négociation', 'Service client', 'Gestion de stock']
    },
    form: {
      fields: [
        { name: 'firstName', label: 'Prénom', expected: 'Pierre', type: 'text' },
        { name: 'lastName', label: 'Nom', expected: 'Lefevre', type: 'text' },
        { name: 'email', label: 'E-mail', expected: 'pierre.lefevre@email.com', type: 'email' },
        { name: 'phone', label: 'Téléphone', expected: '+41 77 345 67 89', type: 'tel' },
        { name: 'experience', label: 'Années d\'expérience', expected: '8', type: 'number' },
        { name: 'skills', label: 'Compétences principales', expected: 'Vente, Négociation', type: 'text' }
      ]
    }
  },
  {
    id: 'form-4',
    tag: 'Infirmière',
    profile: {
      name: 'Sophie Bernard',
      age: 41,
      email: 'sophie.bernard@email.com',
      phone: '+41 76 456 78 90',
      address: '321 Rue de la Santé, 2000 Neuchâtel',
      education: 'Diplôme Infirmière (1999)',
      experience: '22 ans dans le secteur sanitaire',
      skills: ['Soins', 'Urgences', 'Relation patient', 'Pharmacologie']
    },
    form: {
      fields: [
        { name: 'firstName', label: 'Prénom', expected: 'Sophie', type: 'text' },
        { name: 'lastName', label: 'Nom', expected: 'Bernard', type: 'text' },
        { name: 'email', label: 'E-mail', expected: 'sophie.bernard@email.com', type: 'email' },
        { name: 'phone', label: 'Téléphone', expected: '+41 76 456 78 90', type: 'tel' },
        { name: 'experience', label: 'Années d\'expérience', expected: '22', type: 'number' },
        { name: 'skills', label: 'Compétences principales', expected: 'Soins, Urgences', type: 'text' }
      ]
    }
  }
];
