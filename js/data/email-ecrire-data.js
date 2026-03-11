'use strict';

window.EMAIL_ECRIRE_DATA = [
  {
    category: 'Candidature',
    situation: 'Vous postulez pour un poste de vendeuse. Vous devez envoyer votre CV et votre lettre de motivation.',
    choices: [
      {
        subject: 'Candidature - Vendeuse - Sara Martin',
        body: 'Bonjour Madame,\n\nJe vous envoie ma candidature pour le poste de vendeuse. Vous trouverez mon CV et ma lettre de motivation en pièces jointes.\n\nJe vous remercie pour votre retour.\n\nCordialement,\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Candidature',
        body: 'Bonjour Madame,\n\nJe vous transmets ma candidature pour le poste de vendeuse. Mon CV est joint à ce message.\n\nJe vous remercie d\'avance pour votre retour.\n\nCordialement,\nSara Martin',
        attachment: 'CV uniquement',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est poli, mais il manque la lettre de motivation demandée.'
      },
      {
        subject: 'Poste de vendeuse - Sara Martin',
        body: 'Bonjour,\n\nJe vous adresse ma candidature pour le poste de vendeuse. Vous trouverez mon CV et ma lettre de motivation en pièces jointes.\n\nDans l\'attente de votre réponse.\n\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Nom sans formule finale',
        reasonIfWrong: 'L\'ensemble est presque correct, mais la formule de politesse finale manque.'
      },
      {
        subject: 'Candidature au poste de vendeuse - Sara Martin',
        body: 'Bonjour Madame,\n\nJe vous envoie mon CV et ma lettre de motivation pour le poste de vendeuse.\n\nMerci de me répondre.\n\nCordialement,\nSara Martin',
        attachment: 'CV + Lettre',
        signature: 'Signature complète',
        reasonIfWrong: 'Le contenu est compréhensible, mais "Merci de me répondre" est plus direct et moins professionnel que la meilleure option.'
      }
    ],
    answer: 0,
    correctFeedback: 'Cet e-mail est correct : objet précis, politesse, pièces jointes et signature claire.'
  },
  {
    category: 'ORP',
    situation: 'Votre conseiller ORP demande un justificatif de recherche d’emploi. Vous répondez par e-mail.',
    choices: [
      {
        subject: 'Envoi justificatif ORP - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nSuite à votre demande, je vous transmets en pièce jointe mon justificatif de recherche d’emploi pour ce mois.\n\nJe reste à disposition.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Justificatif ORP',
        body: 'Bonjour Madame Dupont,\n\nComme convenu, vous trouverez en pièce jointe mon justificatif de recherche d’emploi.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse fonctionne, mais elle est moins précise que la meilleure option: le mois concerné n\'est pas mentionné.'
      },
      {
        subject: 'Transmission du justificatif ORP - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nJe vous transmets mon justificatif de recherche d’emploi pour ce mois.\n\nJe reste à disposition.\n\nCordialement,\nMalik Ben Ali',
        attachment: 'Pièce jointe non annoncée',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message semble correct, mais il ne dit pas explicitement qu\'une pièce jointe accompagne l\'e-mail.'
      },
      {
        subject: 'Envoi justificatif ORP - Malik Ben Ali',
        body: 'Bonjour Madame Dupont,\n\nSuite à votre demande, je vous transmets en pièce jointe mon justificatif de recherche d’emploi pour ce mois.\n\nSalutations,\nMalik Ben Ali',
        attachment: 'Justificatif joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message reste acceptable, mais la formule finale est moins soignée que dans la meilleure réponse.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne réponse : message clair, poli, et pièce jointe annoncée.'
  },
  {
    category: 'Administratif',
    situation: 'Vous devez envoyer votre attestation de domicile à la commune.',
    choices: [
      {
        subject: 'Attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie pour votre confirmation de réception.\n\nMeilleures salutations,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Attestation de domicile',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nMerci de confirmer la réception.\n\nMeilleures salutations,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette version est correcte, mais l\'objet est moins précis car il ne contient pas le nom de l\'expéditrice.'
      },
      {
        subject: 'Envoi attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nJe vous transmets mon attestation de domicile en pièce jointe.\n\nJe vous remercie pour votre confirmation de réception.\n\nCordialement,\nLea Dubois',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est solide, mais "Meilleures salutations" correspond mieux ici au registre administratif.'
      },
      {
        subject: 'Attestation de domicile - Lea Dubois',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie pour votre retour.\n\nMeilleures salutations,\nLea',
        attachment: 'Attestation jointe',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'Le message est presque bon, mais la signature est incomplète pour un envoi administratif.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : objet adapté, message professionnel, pièce jointe et signature.'
  }
];
