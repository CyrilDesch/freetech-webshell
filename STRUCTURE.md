# Structure du Projet FreeTech

## Architecture

Le projet a été complètement refactorisé avec une séparation claire entre :
- **Structure HTML/PHP** : Pages et logique métier
- **Styles CSS** : Fichiers CSS séparés par page
- **Logique JavaScript** : Scripts modulaires par fonctionnalité

## Arborescence

```
NDL/
├── docker-compose.yaml          # Configuration Docker
├── Dockerfile                   # Image PHP 8.2-apache
└── src/                         # Code source web
    ├── index.php                # Point d'entrée + navigation
    ├── styles.css               # Styles globaux
    ├── assets/                  # Ressources statiques
    │   ├── css/                 # Feuilles de style
    │   │   ├── terminal.css     # Styles page terminal
    │   │   ├── music.css        # Styles visualiseur audio
    │   │   ├── game.css         # Styles jeu Space Invaders
    │   │   └── contact.css      # Styles formulaire contact
    │   └── js/                  # Scripts JavaScript
    │       ├── terminal-data.js # Données des commandes terminal
    │       ├── terminal.js      # Logique du terminal
    │       ├── music.js         # Visualiseur audio Web Audio API
    │       ├── game-config.js   # Configuration du jeu
    │       ├── game-state.js    # État global du jeu
    │       ├── game-logic.js    # Logique métier du jeu
    │       ├── game-render.js   # Rendu Canvas du jeu
    │       ├── game-loop.js     # Boucle de jeu et contrôles
    │       └── contact.js       # Compteur de caractères
    ├── includes/                # Logique PHP réutilisable
    │   └── contact-handler.php  # Traitement formulaire contact
    └── pages/                   # Pages individuelles
        ├── terminal.php         # Page d'accueil terminal
        ├── music.php            # Visualiseur musical
        ├── login.php            # Jeu Space Invaders
        └── contact.php          # Formulaire de contact
```

## Fichiers Supprimés

Tous les fichiers TSX ont été supprimés :
- ❌ App.tsx
- ❌ Contact.tsx
- ❌ Login.tsx
- ❌ Music.tsx
- ❌ MusicVisualizer.tsx
- ❌ Terminal.tsx

## Pages PHP

### 1. **index.php** - Point d'entrée
- Gestion de session
- Système de navigation par paramètre `?page=`
- Header et footer globaux
- Styles globaux inclus

### 2. **pages/terminal.php** - Terminal interactif
- **CSS** : `assets/css/terminal.css`
- **JS** : 
  - `assets/js/terminal-data.js` (commandes et contenus)
  - `assets/js/terminal.js` (logique d'interaction)
- Commandes disponibles : help, about, why, freedom, tools, clear
- Navigation : matrix, patrix/login, contact, home

### 3. **pages/music.php** - Visualiseur audio
- **CSS** : `assets/css/music.css`
- **JS** : `assets/js/music.js`
- Upload de fichiers audio (MP3, WAV, OGG)
- Visualisation temps réel avec Web Audio API
- Canvas 2D avec effets cyberpunk (barres fréquences, grille, particules)

### 4. **pages/login.php** - Jeu Space Invaders
- **CSS** : `assets/css/game.css`
- **JS** (modulaire) :
  - `assets/js/game-config.js` : Constantes et templates ennemis
  - `assets/js/game-state.js` : Variables d'état global
  - `assets/js/game-logic.js` : Fonctions métier (startGame, createWave, shoot, reload)
  - `assets/js/game-render.js` : Rendu Canvas (draw, updateHUD)
  - `assets/js/game-loop.js` : Boucle principale et contrôles clavier
- Sélection de vaisseaux (Fedora, Ubuntu, Debian, Arch, FreeBSD, Linux)
- Système de vagues progressives avec difficulté croissante
- Power-ups : munitions et bouclier
- HUD complet : score, vague, munitions, vies

### 5. **pages/contact.php** - Formulaire de contact
- **CSS** : `assets/css/contact.css`
- **JS** : `assets/js/contact.js`
- **PHP** : `includes/contact-handler.php` (traitement POST)
- Validation côté serveur
- Messages de statut (succès/erreur)
- Compteur de caractères dynamique

## Logique Métier

### Fichiers PHP
- **includes/contact-handler.php**
  - Traitement sécurisé des données POST
  - Validation des champs requis
  - Échappement HTML avec `htmlspecialchars()`
  - Prêt pour intégration mail() ou PHPMailer

## Styles CSS

Tous les styles inline ont été extraits dans des fichiers dédiés :

1. **assets/css/terminal.css**
   - Layout terminal avec scrolling
   - Animation blink pour curseur
   - Grid responsive pour features
   - Thème cyberpunk vert

2. **assets/css/music.css**
   - Section upload avec drag&drop visuel
   - Canvas visualiseur plein écran
   - Overlay ASCII
   - Messages d'attente

3. **assets/css/game.css**
   - Écran de sélection vaisseaux
   - HUD multi-colonnes responsive
   - Canvas de jeu avec bordures néon
   - Écran game over

4. **assets/css/contact.css**
   - Formulaire avec inputs stylisés
   - Messages de statut colorés
   - Méthodes de contact alternatives
   - Layout responsive

## Scripts JavaScript

### Terminal
- **terminal-data.js** : Contenu textuel des commandes (COMMANDS_HELP, ABOUT, WHY_OPENSOURCE, FREEDOM_MANIFEST, TOOLS)
- **terminal.js** : Gestion des commandes, ajout de lignes, navigation

### Visualiseur Audio
- **music.js** : 
  - Upload et lecture audio
  - Configuration Web Audio API (analyser, FFT)
  - Boucle de rendu Canvas avec effets visuels
  - Gestion play/pause

### Jeu Space Invaders
- **game-config.js** : Constantes (dimensions, vitesses, templates ennemis)
- **game-state.js** : Variables globales (score, vies, munitions, vague, etc.)
- **game-logic.js** : 
  - `startGame()` : Initialisation
  - `createWave()` : Génération ennemis avec progression
  - `shoot()` : Tir avec cooldown
  - `reload()` : Rechargement munitions
  - `gameOver()` : Fin de partie
- **game-render.js** :
  - `draw()` : Rendu complet Canvas (grille, joueur, ennemis, bullets, power-ups)
  - `updateHUD()` : Mise à jour affichage score/vies/munitions
- **game-loop.js** :
  - Boucle `requestAnimationFrame`
  - Contrôles clavier (flèches, espace, R)
  - Collisions et logique de jeu
  - Gestion vagues et power-ups

### Contact
- **contact.js** : Compteur de caractères temps réel pour textarea

## Déploiement Docker

### Configuration
```yaml
services:
  php-apache:
    build: .
    container_name: freetech-web
    ports:
      - "8080:80"
    volumes:
      - ./src:/var/www/html
```

### Commandes
```bash
# Démarrer
docker compose up -d

# Redémarrer (après modifications)
docker compose restart

# Voir les logs
docker compose logs -f

# Arrêter
docker compose down
```

### Accès
- **URL** : http://localhost:8080
- **Point d'entrée** : index.php
- **Navigation** : 
  - `?page=home` ou `/` → Terminal
  - `?page=music` → Visualiseur
  - `?page=login` → Jeu
  - `?page=contact` → Contact

## Améliorations Apportées

### Organisation
✅ Séparation claire des responsabilités (HTML/CSS/JS/PHP)
✅ Structure modulaire et maintenable
✅ Fichiers nommés de manière cohérente
✅ Suppression de tous les fichiers TSX obsolètes

### Performance
✅ Chargement CSS/JS optimisé par page
✅ Pas de code dupliqué
✅ Scripts chargés en fin de page

### Maintenabilité
✅ Logique métier isolée dans includes/
✅ JavaScript fragmenté par fonctionnalité
✅ CSS séparé par page
✅ Facile à déboguer et étendre

### Sécurité
✅ Échappement HTML sur les données POST
✅ Validation côté serveur
✅ Volume Docker pour hot-reload sans exposition code source

## Technologies Utilisées

- **Backend** : PHP 8.2
- **Serveur** : Apache 2.4
- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **APIs Web** : 
  - Canvas 2D (visualiseur + jeu)
  - Web Audio API (analyse fréquences)
  - File API (upload audio)
- **Conteneurisation** : Docker, Docker Compose

## Prochaines Étapes Possibles

1. **Amélioration formulaire contact**
   - Intégration PHPMailer pour envoi réel
   - CAPTCHA anti-spam
   - Confirmation par email

2. **Persistence des scores**
   - Base de données (MySQL/PostgreSQL)
   - Classement des meilleurs scores
   - Sauvegarde de progression

3. **Optimisation**
   - Minification CSS/JS
   - Cache navigateur avec versioning
   - CDN pour assets statiques

4. **Tests**
   - Tests unitaires JavaScript
   - Tests PHP avec PHPUnit
   - Tests E2E avec Playwright

## Maintenance

### Modification des styles
Éditer les fichiers dans `src/assets/css/`

### Modification de la logique
- **Terminal** : `src/assets/js/terminal.js` et `terminal-data.js`
- **Visualiseur** : `src/assets/js/music.js`
- **Jeu** : Fichiers `game-*.js` selon la partie à modifier
- **Contact** : `src/includes/contact-handler.php`

### Ajout d'une page
1. Créer `src/pages/nouvelle-page.php`
2. Créer `src/assets/css/nouvelle-page.css`
3. Créer `src/assets/js/nouvelle-page.js` si nécessaire
4. Ajouter le cas dans le `switch` de `index.php`

---

**Projet FreeTech** - Libération Numérique par l'Open Source
