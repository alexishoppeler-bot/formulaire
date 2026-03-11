'use strict';

window.EMAIL_PRO_DATA = [
  {
    category: 'ORP',
    received: {
      from: 'De : Mme Dupont (Conseillère ORP)',
      subject: 'Demande de preuves de recherches',
      body: 'Bonjour Monsieur,\n\nMerci de m\'envoyer vos preuves de recherches d\'emploi pour le mois de février avant vendredi 17h.\n\nSalutations,\nMme Dupont',
      request: 'Action attendue : répondre poliment et indiquer la pièce jointe demandée.'
    },
    responses: [
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie en pièce jointe mes preuves de recherches d’emploi pour février.\n\nJe vous remercie.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous transmets mes preuves de recherches d’emploi.\n\nCordialement,\nYacine Ben Saad',
        attachment: 'Pièce jointe non annoncée',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est proche du bon, mais il ne précise pas clairement la pièce jointe.'
      },
      {
        subject: 'Preuves de recherches - février',
        body: 'Bonjour Madame Dupont,\n\nVeuillez trouver en pièce jointe mes preuves de recherches d’emploi.\n\nMeilleures salutations,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse fonctionne, mais elle reprend moins bien l’objet initial et ne mentionne pas explicitement février dans le message.'
      },
      {
        subject: 'Re: Demande de preuves de recherches',
        body: 'Bonjour Madame Dupont,\n\nJe vous envoie en pièce jointe mes preuves de recherches d’emploi pour février.\n\nSalutations,\nYacine Ben Saad',
        attachment: 'Preuves jointes',
        signature: 'Signature complète',
        reasonIfWrong: 'Le contenu est bon, mais la formule finale est moins soignée que dans la meilleure réponse.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne réponse : politesse, information claire et document joint.'
  },
  {
    category: 'Emploi',
    received: {
      from: 'De : RH Garage Martin',
      subject: 'Disponibilité pour entretien',
      body: 'Bonjour,\n\nNous vous proposons un entretien mardi à 10h. Merci de confirmer votre disponibilité.\n\nCordialement,\nService RH',
      request: 'Action attendue : confirmer clairement la disponibilité.'
    },
    responses: [
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nMerci pour votre message. Je confirme ma disponibilité mardi à 10h pour l’entretien.\n\nMeilleures salutations,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nJe confirme que je suis disponible mardi à 10h pour l’entretien.\n\nCordialement,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est acceptable, mais la meilleure reprend aussi le remerciement initial.'
      },
      {
        subject: 'Disponibilité entretien mardi',
        body: 'Bonjour,\n\nMerci pour votre message. Je serai disponible mardi à 10h.\n\nMeilleures salutations,\nInes',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'Le message confirme bien le rendez-vous, mais la signature est incomplète.'
      },
      {
        subject: 'Re: Disponibilité pour entretien',
        body: 'Bonjour,\n\nMerci pour votre message. Je confirme ma disponibilité pour mardi.\n\nMeilleures salutations,\nInes Carvalho',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse est proche, mais elle oublie l’heure précise de 10h.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : la disponibilité est confirmée clairement avec un ton professionnel.'
  },
  {
    category: 'Administratif',
    received: {
      from: 'De : Commune de Nyon',
      subject: 'Attestation demandée',
      body: 'Bonjour Madame,\n\nMerci de nous transmettre votre attestation de domicile en PDF.\n\nCordialement,\nGuichet population',
      request: 'Action attendue : annoncer la pièce jointe PDF dans la réponse.'
    },
    responses: [
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile au format PDF.\n\nJe vous remercie.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Attestation PDF jointe',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile.\n\nJe vous remercie.\n\nMeilleures salutations,\nLina Messaoudi',
        attachment: 'Attestation jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse est presque bonne, mais elle ne précise pas que le document est bien en PDF.'
      },
      {
        subject: 'Attestation de domicile - Lina Messaoudi',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile au format PDF.\n\nCordialement,\nLina Messaoudi',
        attachment: 'Attestation PDF jointe',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette version est correcte, mais la meilleure garde l’objet de la demande reçue et une formule un peu plus soignée.'
      },
      {
        subject: 'Re: Attestation demandée',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe mon attestation de domicile au format PDF.\n\nJe vous remercie.\n\nMeilleures salutations,\nLina',
        attachment: 'Attestation PDF jointe',
        signature: 'Prénom uniquement',
        reasonIfWrong: 'Le contenu est solide, mais la signature reste incomplète dans un contexte administratif.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : le message est clair, poli et annonce la pièce jointe PDF.'
  },
  {
    category: 'Emploi',
    received: {
      from: 'De : Mme Renaud, Entreprise CleanPlus',
      subject: 'Merci d’envoyer votre CV mis à jour',
      body: 'Bonjour,\n\nAfin de finaliser votre dossier, merci de répondre à ce message avec votre CV mis à jour en pièce jointe.\n\nCordialement,\nMme Renaud',
      request: 'Action attendue : réponse complète avec mention du CV joint.'
    },
    responses: [
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Je vous transmets mon CV mis à jour en pièce jointe.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nJe vous transmets mon CV mis à jour.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV non annoncé clairement',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse paraît correcte, mais elle n’indique pas explicitement la pièce jointe.'
      },
      {
        subject: 'CV mis à jour - Joao Pereira',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Vous trouverez mon CV mis à jour en pièce jointe.\n\nMeilleures salutations,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est bonne, mais la meilleure garde la formulation la plus directe par rapport à la demande reçue.'
      },
      {
        subject: 'Re: Merci d’envoyer votre CV mis à jour',
        body: 'Bonjour Madame Renaud,\n\nMerci pour votre message. Je vous transmets mon CV en pièce jointe.\n\nCordialement,\nJoao Pereira',
        attachment: 'CV joint',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse reste plausible, mais elle ne reprend pas le fait que le CV doit être mis à jour.'
      }
    ],
    answer: 0,
    correctFeedback: 'Bonne pratique : réponse professionnelle avec pièce jointe annoncée.'
  },
  {
    category: 'ORP',
    received: {
      from: 'De : ORP Lausanne',
      subject: 'Convocation entretien ORP',
      body: 'Bonjour,\n\nVous êtes convoqué le jeudi 14 mars à 09h00. Merci de confirmer votre présence.\n\nSalutations,\nORP Lausanne',
      request: 'Action attendue : confirmer sa présence.'
    },
    responses: [
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma présence à l’entretien ORP du jeudi 14 mars à 09h00.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma présence à l’entretien ORP du jeudi 14 mars.\n\nMeilleures salutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse est presque correcte, mais elle oublie l’heure de 09h00.'
      },
      {
        subject: 'Confirmation présence ORP',
        body: 'Bonjour,\n\nJe confirme ma présence le jeudi 14 mars à 09h00.\n\nCordialement,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse est correcte, mais la meilleure reprend aussi le contexte précis de l’entretien ORP.'
      },
      {
        subject: 'Re: Convocation entretien ORP',
        body: 'Bonjour,\n\nJe confirme ma présence à l’entretien ORP du jeudi 14 mars à 09h00.\n\nSalutations,\nFatima El Idrissi',
        attachment: 'Aucune pièce jointe nécessaire',
        signature: 'Signature complète',
        reasonIfWrong: 'Le message est bon, mais la formule finale est un peu moins soignée que dans la meilleure réponse.'
      }
    ],
    answer: 0,
    correctFeedback: 'Correct : confirmation claire, ton adapté et signature complète.'
  },
  {
    category: 'Administratif',
    received: {
      from: 'De : Assurance Santé Helvia',
      subject: 'Formulaire à signer',
      body: 'Bonjour,\n\nMerci de nous retourner le formulaire signé en pièce jointe.\n\nCordialement,\nService clients',
      request: 'Action attendue : envoyer le formulaire signé et le mentionner.'
    },
    responses: [
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire signé demandé.\n\nJe vous remercie de votre confirmation de réception.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Formulaire signé joint',
        signature: 'Signature complète',
        reasonIfWrong: ''
      },
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire demandé.\n\nJe vous remercie de votre confirmation de réception.\n\nCordialement,\nNora Ait Ali',
        attachment: 'Formulaire joint',
        signature: 'Signature complète',
        reasonIfWrong: 'La réponse est proche, mais elle ne précise pas que le formulaire est signé.'
      },
      {
        subject: 'Formulaire signé - Nora Ait Ali',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire signé demandé.\n\nMeilleures salutations,\nNora Ait Ali',
        attachment: 'Formulaire signé joint',
        signature: 'Signature complète',
        reasonIfWrong: 'Cette réponse fonctionne, mais la meilleure demande aussi une confirmation de réception.'
      },
      {
        subject: 'Re: Formulaire à signer',
        body: 'Bonjour,\n\nVeuillez trouver en pièce jointe le formulaire signé demandé.\n\nJe vous remercie.\n\nNora Ait Ali',
        attachment: 'Formulaire signé joint',
        signature: 'Nom sans formule finale',
        reasonIfWrong: 'Le contenu est presque bon, mais la formule finale manque.'
      }
    ],
    answer: 0,
    correctFeedback: 'Exact : réponse claire, polie, et pièce jointe correctement annoncée.'
  }
];
