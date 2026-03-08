# 🎮 Démo Système de Votes

## Comment ça marche?

### 1. **Sur les pages de jeux**
Chaque jeu affiche maintenant deux boutons en bas à droite:
```
    👍 5        👎 2
  [J'aime]   [J'aime pas]
```

**Actions:**
- Cliquer 👍 = voter "j'aime"
- Cliquer 👎 = voter "j'aime pas"
- Re-cliquer = annuler le vote
- Compteurs mis à jour en direct

### 2. **Sur la page Évaluations** (`evaluations.html`)
Une nouvelle section "Avis sur les jeux" affiche:
```
👍 J'aimes
23

👎 J'aimes pas
8
```

Les totals sont agrégés de TOUS les jeux.

## Parcours utilisateur

```
1. Utilisateur joue "Clavier"
   └─ Boutons vote visibles en bas à droite

2. Utilisateur clique 👍
   └─ localStorage sauvegarde: { clavier: { like: 1, userVote: 'like' } }
   └─ Compteur passe à 1

3. Utilisateur va voir "Évaluations"
   └─ Section "Avis" affiche: 👍 1

4. Utilisateur joue "Cliquer"
   └─ Clique 👍
   └─ Sauvegarde: { cliquer: { like: 1, ... } }

5. Retour "Évaluations"
   └─ Section "Avis" affiche: 👍 2 (1 de clavier + 1 de cliquer)
```

## Données stockées

```javascript
localStorage['formation_votes'] = {
  "clavier": {
    "like": 5,
    "dislike": 2,
    "userVote": "like"
  },
  "cliquer": {
    "like": 3,
    "dislike": 1,
    "userVote": "dislike"
  },
  "anagramme": {
    "like": 0,
    "dislike": 0,
    "userVote": null
  }
  // ... tous les autres jeux
}
```

## API pour développeurs

```javascript
// Enregistrer un vote
ScoreManager.recordVote('clavier', 'like');
ScoreManager.recordVote('clavier', 'dislike');
ScoreManager.recordVote('clavier', null); // annuler

// Lire les votes d'un jeu
const votes = ScoreManager.getVotes('clavier');
// → { like: 5, dislike: 2, userVote: 'like' }

// Lire TOUS les votes
const allVotes = ScoreManager.getAllVotes();

// Statistiques agrégées
const stats = ScoreManager.getVotesStats(['clavier', 'cliquer', 'alphabet']);
// → { totalLikes: 15, totalDislikes: 5 }

// Initialiser le composant vote manuellement
VoteSystem.init('clavier', {
  position: 'bottom-right',  // 'bottom-right', 'top-left', etc.
  label: false               // afficher "Jeu:" avant les boutons?
});

// Détruire le composant
VoteSystem.destroy();
```

## Points d'intégration

| Fichier | Modification |
|---------|--------------|
| `js/score.js` | +4 fonctions de gestion des votes |
| `js/vote-system.js` | **NOUVEAU** — Composant UI |
| `js/ui.js` | +initVoteSystem() dans globalInit() |
| `games/evaluations.html` | +section "Avis" + rendu des votes |

## Tests

### Test 1: Voter sur un jeu
1. Aller à `games/clavier.html`
2. Voir les boutons 👍👎 en bas à droite
3. Cliquer 👍
4. Vérifier que le compteur passe à 1
5. Re-cliquer pour annuler

### Test 2: Voir les totals
1. Aller à `games/evaluations.html`
2. Chercher la section "Avis sur les jeux"
3. Vérifier que le total des likes correspond

### Test 3: Persistence
1. Voter sur un jeu
2. Fermer le navigateur
3. Rouvrir et retourner au jeu
4. Vérifier que le vote est toujours là

## Intégrations futures possibles

✓ **Déjà fait:**
- Votes par jeu
- Compteurs dans evaluations.html
- Persistance localStorage
- UI + compteurs

⭐ **À faire:**
- Graphique "jeux favoris" (top 5 likes)
- Jeux à améliorer (top 5 dislikes)
- Stats par catégorie
- Rapport satisfaction générale
- Avertissements pour les jeux avec beaucoup de dislikes
- Export statistiques
- Animation confetti sur vote
- Feedback sonore optionnel

## Troubleshooting

**Les boutons n'apparaissent pas?**
- Vérifier que `vote-system.js` existe et est chargé
- Vérifier que `PAGE_ID` est défini dans la page
- Ouvrir la console pour voir les erreurs

**Les votes ne sont pas sauvegardés?**
- Vérifier que localStorage est activé
- Vérifier qu'il reste de la place (< 5MB)
- Voir localStorage dans DevTools > Application

**Les compteurs ne se mettent pas à jour?**
- Rafraîchir la page (`F5`)
- Vérifier que `renderEvaluation()` est appelée
- Vérifier que `ScoreManager.getVotesStats()` retourne des données
