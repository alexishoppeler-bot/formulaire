'use strict';

window.DOSSIERS_EXPLORATEUR_DATA = {
  initialTree: {
    id: 'root',
    type: 'folder',
    name: 'Ordinateur',
    children: [
      {
        id: 'desktop',
        type: 'folder',
        name: 'Bureau',
        children: []
      },
      {
        id: 'documents',
        type: 'folder',
        name: 'Documents',
        children: [
          {
            id: 'docs-cv',
            type: 'folder',
            name: 'CV',
            children: [
              { id: 'file-lettre', type: 'file', name: 'Lettre_motivation.docx' },
              { id: 'file-cv-ancien', type: 'file', name: 'CV_ancien.pdf' }
            ]
          }
        ]
      },
      {
        id: 'downloads',
        type: 'folder',
        name: 'Téléchargements',
        children: [
          { id: 'file-cv-alex', type: 'file', name: 'CV_Alex.pdf' },
          { id: 'file-contrat', type: 'file', name: 'Contrat_temporaire.pdf' },
          { id: 'file-attest', type: 'file', name: 'Attestation_ORP.pdf' },
          { id: 'file-notes', type: 'file', name: 'Notes_tmp.txt' }
        ]
      },
      {
        id: 'images',
        type: 'folder',
        name: 'Images',
        children: [
          { id: 'file-photo', type: 'file', name: 'Photo_profil.jpg' }
        ]
      },
      {
        id: 'recycle',
        type: 'folder',
        name: 'Corbeille',
        children: []
      }
    ]
  },

  missions: [
    {
      id: 'm1',
      title: 'Mission 1 : Créer un dossier',
      instruction: 'Dans Documents, créez un dossier nommé ORP.',
      hint: 'Ouvrez Documents, puis cliquez sur « Nouveau dossier ».',
      check: {
        type: 'folder_exists',
        parentPath: ['Documents'],
        name: 'ORP'
      }
    },
    {
      id: 'm2',
      title: 'Mission 2 : Renommer un dossier',
      instruction: 'Renommez le dossier CV en Candidatures.',
      hint: 'Sélectionnez le dossier CV, puis cliquez sur « Renommer ».',
      check: {
        type: 'folder_exists',
        parentPath: ['Documents'],
        name: 'Candidatures'
      }
    },
    {
      id: 'm3',
      title: 'Mission 3 : Créer un sous-dossier',
      instruction: 'Dans Documents > ORP, créez un sous-dossier nommé Dossier_2026.',
      hint: 'Ouvrez le dossier ORP, puis créez un nouveau dossier.',
      check: {
        type: 'folder_exists',
        parentPath: ['Documents', 'ORP'],
        name: 'Dossier_2026'
      }
    },
    {
      id: 'm4',
      title: 'Mission 4 : Déplacer un fichier',
      instruction: 'Déplacez CV_Alex.pdf dans Documents > ORP.',
      hint: 'Glissez le fichier sur ORP ou utilisez Couper / Coller.',
      check: {
        type: 'node_in_path',
        name: 'CV_Alex.pdf',
        targetPath: ['Documents', 'ORP'],
        sourcePathMustNotContain: ['Téléchargements']
      }
    },
    {
      id: 'm5',
      title: 'Mission 5 : Copier / Coller',
      instruction: 'Copiez Lettre_motivation.docx dans Documents > ORP, sans supprimer l’original.',
      hint: 'Sélectionnez le fichier, cliquez sur « Copier », ouvrez ORP, puis cliquez sur « Coller ».',
      check: {
        type: 'copy_vs_move',
        name: 'Lettre_motivation.docx',
        sourcePath: ['Documents', 'Candidatures'],
        targetPath: ['Documents', 'ORP'],
        expectInSource: true
      }
    },
    {
      id: 'm6',
      title: 'Mission 6 : Déplacer plusieurs fichiers',
      instruction: 'Déplacez Contrat_temporaire.pdf et Attestation_ORP.pdf dans Documents > ORP.',
      hint: 'Sélection multiple : Ctrl + clic, puis Couper et Coller.',
      check: {
        type: 'multi_nodes_in_path',
        names: ['Contrat_temporaire.pdf', 'Attestation_ORP.pdf'],
        targetPath: ['Documents', 'ORP'],
        sourcePathMustNotContain: ['Téléchargements']
      }
    },
    {
      id: 'm7',
      title: 'Mission 7 : Supprimer un fichier',
      instruction: 'Supprimez Attestation_ORP.pdf. Le fichier doit aller dans la Corbeille.',
      hint: 'Sélectionnez le fichier, puis cliquez sur « Supprimer ».',
      check: {
        type: 'recycle_contains',
        name: 'Attestation_ORP.pdf'
      }
    },
    {
      id: 'm8',
      title: 'Mission 8 : Restaurer depuis la Corbeille',
      instruction: 'Depuis la Corbeille, restaurez Attestation_ORP.pdf.',
      hint: 'Ouvrez la Corbeille, sélectionnez le fichier, puis cliquez sur « Restaurer ».',
      check: {
        type: 'restored_from_recycle',
        name: 'Attestation_ORP.pdf',
        targetPath: ['Documents', 'ORP']
      }
    },
    {
      id: 'm9',
      title: 'Mission 9 : Vider la Corbeille',
      instruction: 'Supprimez Notes_tmp.txt, puis videz la Corbeille.',
      hint: 'Supprimez Notes_tmp.txt, ouvrez la Corbeille, puis cliquez sur « Vider la Corbeille ».',
      check: {
        type: 'delete_and_empty_recycle',
        deletedName: 'Notes_tmp.txt'
      }
    }
  ]
};
