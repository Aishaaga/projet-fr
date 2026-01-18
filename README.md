# ArtisanLink

ArtisanLink est une plateforme web innovante qui connecte directement les particuliers ayant besoin de services à domicile avec des professionnels qualifiés. Notre mission est de simplifier la recherche d'artisans tout en offrant aux professionnels une source régulière de nouvelles opportunités.

## 🚀 Fonctionnalités

- **Page d'accueil** : Présentation de la plateforme avec ses avantages
- **Recherche d'artisans** : Système de recherche et filtrage par profession et localisation
- **Profil d'artisan** : Affichage détaillé avec coordonnées et services proposés
- **Inscription/Connexion** : Système d'authentification pour clients et artisans
- **Tableau de bord artisan** : Gestion du profil professionnel et des services proposés

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 14 ou supérieure)
- npm (généralement inclus avec Node.js)

## 🔧 Installation

1. Clonez ou téléchargez ce projet
2. Ouvrez un terminal dans le dossier du projet
3. Installez les dépendances :

```bash
npm install
```

## ▶️ Lancement de l'application

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse `http://localhost:3000`

## 📦 Build de production

Pour créer une version optimisée pour la production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build/`.

## 🏗️ Structure du projet

```
artisanlink/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Auth.css
│   │   ├── ArtisansList.js
│   │   ├── ArtisansList.css
│   │   ├── ArtisanProfile.js
│   │   ├── ArtisanProfile.css
│   │   ├── ArtisanDashboard.js
│   │   └── ArtisanDashboard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Utilisation

### Pour les particuliers (clients)

1. Accédez à la page d'accueil
2. Cliquez sur "Trouver un artisan" pour voir la liste des professionnels
3. Utilisez la barre de recherche et les filtres pour trouver l'artisan idéal
4. Consultez le profil détaillé de l'artisan
5. Contactez l'artisan directement via email ou téléphone

### Pour les artisans

1. Créez un compte en sélectionnant "Un artisan" lors de l'inscription
2. Remplissez vos informations professionnelles
3. Accédez à votre tableau de bord pour gérer votre profil
4. Ajoutez vos services et complétez votre description
5. Les clients pourront vous trouver et vous contacter

## 🛠️ Technologies utilisées

- **React** : Bibliothèque JavaScript pour créer l'interface utilisateur
- **React Router** : Gestion de la navigation entre les pages
- **CSS3** : Styles personnalisés pour une interface moderne et responsive

## 📝 Notes

- Les données sont actuellement stockées dans le localStorage du navigateur (développement)
- Pour une application en production, il faudrait intégrer un backend avec une base de données
- Les images utilisent des placeholders - remplacez-les par de vraies images en production

## 📄 Licence

Ce projet est un exemple d'application créé pour démontrer les fonctionnalités de la plateforme ArtisanLink.

---

Créé avec ❤️ pour simplifier la connexion entre particuliers et artisans qualifiés.
