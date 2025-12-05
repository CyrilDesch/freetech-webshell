const COMMANDS_HELP = `
Commandes disponibles:
  help        - Affiche cette aide
  nird        - Découvrir la démarche NIRD
  contexte    - Comprendre le contexte actuel
  piliers     - Les 3 piliers de NIRD
  actions     - Actions concrètes de NIRD
  acteurs     - Qui sont les acteurs de NIRD?
  benefices   - Pourquoi adopter NIRD?
  ressources  - Ressources et liens utiles
  tools       - Outils open source recommandés
  etapes      - Démarche progressive pour établissements
  clear       - Effacer le terminal
  
Navigation:
  login       - Lancer le jeu de libération arcade
  home        - Retour au terminal principal
`;

const ABOUT_NIRD = `
╔══════════════════════════════════════════════════════╗
║        NIRD - NUMERIQUE INCLUSIF RESPONSABLE         ║
║                    ET DURABLE                        ║
╚══════════════════════════════════════════════════════╝

NIRD est une démarche portée par un collectif enseignant
de la Forge des communs numériques éducatifs, projet
soutenu par la Direction du numérique pour l'éducation.

C'est une initiative d'en bas qui cherche à montrer en haut
qu'il y a urgence à agir pour changer la situation.

OBJECTIF PRINCIPAL:
Permettre aux établissements scolaires d'adopter
progressivement un numérique plus inclusif, responsable
et durable, en redonnant du pouvoir d'agir aux équipes
éducatives et en renforçant leur autonomie technologique.

ORIGINE:
Le projet NIRD est né au lycée Carnot de Bruay-la-Buissière
(Hauts-de-France). La démarche cherche maintenant à étendre
ce modèle au maximum d'établissements scolaires.

"Face au Goliath numérique des Big Tech, l'École peut
devenir un village résistant, ingénieux, autonome et
créatif, à l'image du village d'Astérix."
`;

const CONTEXTE = `
╔══════════════════════════════════════════════════════╗
║            LE CONTEXTE: POURQUOI NIRD?               ║
╚══════════════════════════════════════════════════════╝

LA SITUATION ACTUELLE:
À l'heure où la fin du support de Windows 10 met en
évidence la dépendance structurelle aux Big Tech, les
établissements scolaires se retrouvent confrontés à un
empire numérique puissant.

LES PROBLÈMES IDENTIFIÉS:

→ OBSOLESCENCE PROGRAMMÉE
  Matériel rendu obsolète alors qu'il fonctionne encore
  Des milliers d'ordinateurs jetés prématurément

→ DÉPENDANCE ÉCONOMIQUE
  Licences coûteuses et abonnements indispensables
  Budget IT en constante augmentation

→ PERTE DE SOUVERAINETÉ
  Stockage de données hors Union Européenne
  Écosystèmes fermés imposés

→ IMPACT ENVIRONNEMENTAL
  Renouvellement forcé du parc informatique
  Déchets électroniques massifs

NIRD propose une alternative concrète et progressive
pour reprendre le contrôle de l'infrastructure numérique
éducative.
`;

const PILIERS = `
╔══════════════════════════════════════════════════════╗
║            LES 3 PILIERS DE LA DÉMARCHE              ║
╚══════════════════════════════════════════════════════╝

1. INCLUSIF
   ────────────────────────────────────────────────────
   → Donner accès au numérique à tous les élèves
   → Réemploi du matériel ancien pour réduire la fracture
   → Linux pour prolonger la vie des ordinateurs
   → Ressources accessibles et gratuites

2. RESPONSABLE
   ────────────────────────────────────────────────────
   → Protection des données personnelles
   → Souveraineté numérique (hébergement EU)
   → Transparence et auditabilité (open source)
   → Éthique dans les choix technologiques

3. DURABLE
   ────────────────────────────────────────────────────
   → Lutte contre l'obsolescence programmée
   → Reconditionnement et réemploi du matériel
   → Sobriété numérique
   → Réduction de l'empreinte carbone
   → Économie circulaire

Ces trois piliers guident l'ensemble des actions menées
dans le cadre de la démarche NIRD.
`;

const ACTIONS = `
╔══════════════════════════════════════════════════════╗
║          ACTIONS CONCRÈTES DE NIRD                   ║
╚══════════════════════════════════════════════════════╝

Les principales activités de la démarche NIRD:

→ SENSIBILISATION
  Éduquer les équipes éducatives et les élèves à la
  sobriété numérique et aux enjeux du libre

→ RÉEMPLOI & RECONDITIONNEMENT
  Encourager la récupération et la remise en service
  du matériel informatique avec Linux

→ PROMOTION DE LINUX
  Démontrer que "Linux, c'est facile!"
  Lutter contre l'obsolescence programmée de Windows

→ MUTUALISATION
  Partager ressources et outils libres via la Forge
  des communs numériques éducatifs

→ ACCOMPAGNEMENT
  Aider les établissements et collectivités dans leur
  transition numérique écoresponsable

→ CO-CONSTRUCTION
  Favoriser la création de solutions numériques locales,
  ouvertes et autonomes

→ FORMATION
  Développer les compétences des équipes pour gagner
  en autonomie technologique
`;

const ACTEURS = `
╔══════════════════════════════════════════════════════╗
║          LES ACTEURS DE LA DÉMARCHE NIRD             ║
╚══════════════════════════════════════════════════════╝

NIRD associe un ensemble d'acteurs du système éducatif
et des territoires:

→ ÉLÈVES ET ÉCO-DÉLÉGUÉS
  Au cœur de la démarche, acteurs du changement

→ ENSEIGNANTS ET ENSEIGNANTES
  Porteurs du projet dans les établissements

→ DIRECTIONS D'ÉTABLISSEMENTS
  Décideurs et facilitateurs institutionnels

→ TECHNICIENS ET ADMINISTRATEURS RÉSEAUX
  Experts techniques des lycées

→ ASSOCIATIONS PARTENAIRES
  Clubs informatiques et structures locales

→ COLLECTIVITÉS TERRITORIALES
  Financeurs et décideurs du matériel

→ SERVICES ACADÉMIQUES ET MINISTÈRE
  Soutien institutionnel et déploiement

ENSEMBLE, ces acteurs expérimentent, partagent et
transforment les pratiques pour construire un numérique
éducatif plus autonome, plus durable, plus éthique.

La force de NIRD réside dans cette collaboration
multi-niveaux et multi-acteurs.
`;

const BENEFICES = `
╔══════════════════════════════════════════════════════╗
║        POURQUOI ADOPTER LA DÉMARCHE NIRD?            ║
╚══════════════════════════════════════════════════════╝

AVANTAGES POUR LES ÉTABLISSEMENTS:

→ AUTONOMIE TECHNOLOGIQUE
  Reprendre le contrôle de votre infrastructure
  Moins de dépendance aux Big Tech

→ ÉCONOMIES BUDGÉTAIRES
  Réduction drastique des coûts de licences
  Réemploi du matériel existant
  Pas de renouvellement forcé

→ IMPACT ENVIRONNEMENTAL POSITIF
  Réduction des déchets électroniques
  Prolongation de la durée de vie du matériel
  Empreinte carbone réduite

→ SOUVERAINETÉ DES DONNÉES
  Hébergement local ou en UE
  Maîtrise complète des données personnelles
  Conformité RGPD facilitée

→ PÉDAGOGIE ACTIVE
  Élèves acteurs de la transition
  Apprentissage de compétences techniques
  Sensibilisation aux enjeux numériques

→ INNOVATION ET CRÉATIVITÉ
  Solutions adaptées aux besoins locaux
  Expérimentation encouragée
  Partage d'expériences entre établissements

La démarche NIRD est progressive, réaliste et motivante.
Chaque établissement avance à son rythme.
`;

const ETAPES = `
╔══════════════════════════════════════════════════════╗
║    DÉMARCHE PROGRESSIVE POUR LES ÉTABLISSEMENTS      ║
╚══════════════════════════════════════════════════════╝

PHASE 1 - SENSIBILISATION (2-3 mois)
────────────────────────────────────────────────────
→ Organiser une présentation NIRD pour l'équipe
→ Identifier les éco-délégués et enseignants motivés
→ Évaluer le parc informatique actuel
→ Découvrir les ressources de la Forge des communs

PHASE 2 - EXPÉRIMENTATION (3-6 mois)
────────────────────────────────────────────────────
→ Installer Linux sur quelques machines test
→ Former un petit groupe d'élèves ambassadeurs
→ Tester des outils open source en parallèle
→ Documenter les premiers retours d'expérience

PHASE 3 - DÉPLOIEMENT PARTIEL (6-12 mois)
────────────────────────────────────────────────────
→ Équiper une salle informatique en Linux
→ Reconditionner du matériel ancien
→ Former les enseignants volontaires
→ Créer un club informatique libre

PHASE 4 - GÉNÉRALISATION (12-24 mois)
────────────────────────────────────────────────────
→ Étendre Linux à d'autres salles
→ Intégrer NIRD dans le projet d'établissement
→ Mutualiser avec d'autres établissements
→ Devenir établissement référent NIRD

PHASE 5 - ESSAIMAGE
────────────────────────────────────────────────────
→ Partager votre expérience
→ Accueillir des visites d'autres établissements
→ Contribuer à la Forge des communs
→ Former d'autres équipes éducatives

Chaque établissement est libre d'adapter ce parcours
selon ses contraintes, son contexte et ses ambitions.
`;

const RESSOURCES = `
╔══════════════════════════════════════════════════════╗
║          RESSOURCES ET LIENS UTILES                  ║
╚══════════════════════════════════════════════════════╝

SITE OFFICIEL NIRD:
→ https://nird.forge.apps.education.fr/

VIDÉOS ET REPORTAGES:

→ Windows 11 : l'alternative des logiciels libres
  Reportage France 3 Alpes (2 min, octobre 2025)
  https://video.echirolles.fr/w/hVykGUtRZqRen6eiutqRvQ

→ Le projet NIRD présenté par les élèves du lycée Carnot
  Vidéo des élèves (4 min)
  https://tube-numerique-educatif.apps.education.fr/
  w/pZCnzPKTYX2iF38Qh4ZGmq

→ "Linux, c'est facile !"
  Intervention des élèves du lycée Carnot (5 min)
  https://tube-numerique-educatif.apps.education.fr/
  w/3LXem3XK4asbwZa5R1qGkW

→ L'Ordinateur Obsolète
  Vidéo Back Market (1 min)
  https://www.youtube.com/watch?v=S6GLqkhykmA

ARTICLES:

→ En savoir plus sur le projet NIRD au lycée Carnot
  Article du Café Pédagogique
  https://www.cafepedagogique.net/2025/04/27/
  bruay-labuissiere-voyage-au-centre-du-libre-educatif/

AUDIO:

→ Face à l'obsolescence programmée, le logiciel libre
  comme solution ?
  Grand reportage France Inter (4 min, octobre 2025)
  https://www.radiofrance.fr/franceinter/podcasts/
  le-grand-reportage-de-france-inter/...

Pour plus d'informations ou pour être accompagné dans
votre démarche, visitez le site officiel du collectif NIRD.
`;

const TOOLS = `
╔══════════════════════════════════════════════════════╗
║       OUTILS OPEN SOURCE RECOMMANDÉS PAR NIRD        ║
╚══════════════════════════════════════════════════════╝

SYSTÈMES D'EXPLOITATION:
→ Linux Ubuntu (débutants)
→ Linux Mint (interface familière Windows)
→ Debian (stabilité)
→ Fedora (technologies récentes)

BUREAUTIQUE:
→ LibreOffice (suite bureautique complète)
→ OnlyOffice (compatible Microsoft Office)
→ Collabora Online (édition collaborative)

COMMUNICATION:
→ Thunderbird (emails)
→ Nextcloud (cloud collaboratif)
→ Jitsi Meet (visioconférence)
→ Element/Matrix (messagerie)

ÉDUCATION:
→ GeoGebra (mathématiques)
→ Scratch (programmation pour débutants)
→ Moodle (plateforme d'apprentissage)
→ LaTeX (documents scientifiques)

CRÉATION:
→ GIMP (retouche image)
→ Inkscape (dessin vectoriel)
→ Blender (3D et animation)
→ Kdenlive (montage vidéo)
→ Audacity (audio)

DÉVELOPPEMENT:
→ VSCodium (éditeur de code)
→ Git (gestion de versions)
→ Firefox Developer Edition

SÉCURITÉ:
→ KeePassXC (gestionnaire de mots de passe)
→ Veracrypt (chiffrement de données)

Tous ces outils sont gratuits, libres, et peuvent
remplacer leurs équivalents propriétaires coûteux.
`;
