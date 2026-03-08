# Système de Votes (Like/Dislike) 👍👎

## Vue d'ensemble
Un système de votes a été ajouté à tous les jeux permettant aux utilisateurs d'exprimer leur avis (like ou dislike) sur chaque exercice.

## Fichiers modifiés/créés

### 1. **js/score.js** — Ajout du gestionnaire de votes
- `recordVote(page, vote)` — Enregistrer un vote pour une page
- `getVotes(page)` — Obtenir les votes d'une page
- `getAllVotes()` — Obtenir tous les votes
- `getVotesStats(pages)` — Statistiques agrégées des votes

**Stockage:** localStorage sous la clé `formation_votes`

### 2. **js/vote-system.js** — Nouveau fichier
Composant UI qui affiche les boutons 👍/👎 en bas à droite de chaque jeu.

**Fonctionnalités:**
- Affichage dynamique des compteurs
- Toggle vote (clic = vote, re-clic = annuler)
- Styles avec couleurs (vert pour like, rouge pour dislike)
- Auto-chargement si absent
- Destroy automatique si nécessaire

### 3. **js/ui.js** — Ajout de `initVoteSystem()`
- Initialise le système de votes pour les pages de jeux
- Charge automatiquement vote-system.js s'il manque
- Appelé dans `globalInit()`

### 4. **games/evaluations.html**
- Section "Avis sur les jeux" affichant les totals 👍/👎
- Compteurs mis à jour en temps réel
- Import du script vote-system.js

## Structure des données

```javascript
// localStorage['formation_votes']
{
  "clavier": {
    "like": 5,
    "dislike": 2,
    "userVote": "like"  // ou "dislike" ou null
  },
  "cliquer": {
    "like": 3,
    "dislike": 1,
    "userVote": null
  }
  // ... tous les jeux
}
```

## Utilisation

### Pour un développeur qui veut ajouter manuellement les votes:
```javascript
// Enregistrer un vote
ScoreManager.recordVote('clavier', 'like');

// Obtenir les votes d'un jeu
const votes = ScoreManager.getVotes('clavier');
console.log(votes.like, votes.dislike, votes.userVote);

// Statistiques globales
const stats = ScoreManager.getVotesStats(['clavier', 'cliquer', ...]);
```

### Pour afficher les boutons dans un jeu:
```javascript
// Automatique via globalInit() → initVoteSystem()
// Les boutons apparaissent automatiquement en bas à droite

// Ou manuellement:
VoteSystem.init('clavier', { position: 'bottom-right', label: true });
```

## Intégration avec evaluations.html
- Les compteurs totals sont affichés dans la section "Avis sur les jeux"
- Ils se mettent à jour quand `renderEvaluation()` est appelée
- Événement `score:updated` déclenche la mise à jour

## Notes
- Les votes sont stockés dans localStorage (persistance locale)
- Un clic sur un bouton toggle le vote
- Les compteurs se mettent à jour immédiatement
- Pas de limite de votes par jeu
- Utilisateur anonyme (pas d'authentification requise)

## Événements
- `score:updated` — Déclenché après chaque vote, permet de rafraîchir les UI liées

## Intégration future possible
- Afficher les jeux les plus aimés/détestés
- Statistiques par catégorie
- Graphique de satisfaction
- Recommandations basées sur les votes
