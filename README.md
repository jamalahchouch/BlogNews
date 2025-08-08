# BlogNews - Application React

Une application de blog simple créée avec React qui permet de lire et publier des articles.

## 🚀 Fonctionnalités

### User Stories implémentées

✅ **En tant qu'utilisateur, je peux voir la liste des articles disponibles**
- Affichage d'une grille d'articles avec titre et extrait
- Design responsive avec cartes modernes
- Chargement depuis l'API Gnews.io

✅ **En tant qu'utilisateur, je peux cliquer sur un article pour voir son contenu complet**
- Page de détail d'article avec navigation
- Utilisation de React Router pour la navigation
- Gestion des erreurs si l'article n'existe pas

✅ **En tant qu'utilisateur, je peux remplir un formulaire pour ajouter un nouvel article**
- Formulaire avec validation des champs
- Champs titre et contenu obligatoires
- Simulation d'ajout à l'API

✅ **En tant qu'utilisateur, je veux voir un message d'erreur si je soumets un formulaire vide**
- Validation côté client
- Messages d'erreur contextuels
- Messages de succès après publication

## 🏗️ Architecture

### Composants

- **App** : Composant principal avec routage
- **Navigation** : Barre de navigation avec liens
- **ArticleList** : Affichage de la liste des articles
- **ArticleDetail** : Détails d'un article (avec useEffect)
- **NewArticleForm** : Formulaire de publication
- **ArticleContext** : Contexte pour partager les données

### Technologies utilisées

- **React 19** : Framework principal
- **React Router** : Navigation entre les pages
- **Context API** : Gestion d'état global
- **Fetch API** : Consommation d'API (gnews.io)
- **CSS Modules** : Styling moderne et responsive

## 🛠️ Compétences React démontrées

### Hooks
- `useState` : Gestion des formulaires et état local
- `useEffect` : Chargement des données depuis l'API
- `useContext` : Partage de données globales
- `useParams` : Récupération des paramètres d'URL

### Gestion d'événements
- `onChange` : Formulaire contrôlé
- `onSubmit` : Soumission de formulaire
- `onClick` : Navigation et interactions

### Validation
- Champs obligatoires
- Messages d'erreur contextuels
- Feedback utilisateur

## 🎨 Design

- **Interface moderne** : Design épuré avec ombres et animations
- **Responsive** : Adaptation mobile et desktop
- **UX optimisée** : Feedback visuel et états de chargement
- **Accessibilité** : Labels, focus states, navigation claire

## 🚀 Installation et démarrage

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd firstappsimplon
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer l'application**
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 📁 Structure des fichiers

```
src/
├── components/
│   ├── ArticleList.js          # Liste des articles
│   ├── ArticleDetail.js        # Détails d'un article
│   ├── NewArticleForm.js       # Formulaire de publication
│   ├── Navigation.js           # Barre de navigation
│   └── *.css                   # Styles des composants
├── contexts/
│   └── ArticleContext.js       # Contexte global
├── App.js                      # Composant principal
├── App.css                     # Styles globaux
└── index.js                    # Point d'entrée
```

## 🔧 API utilisée

L'application utilise [JSONPlaceholder](https://gnews.io/) pour simuler une API :

- `GET /posts` : Récupération des articles
- `GET /posts/:id` : Récupération d'un article
- `POST /posts` : Création d'un article

## 🎯 Fonctionnalités avancées

- **Gestion d'état globale** avec Context API
- **Navigation programmatique** avec React Router
- **Gestion d'erreurs** et états de chargement
- **Validation de formulaires** côté client
- **Design responsive** et moderne
- **Composants réutilisables** et modulaires

## 📚 Apprentissage

Cette application démontre les concepts fondamentaux de React :
- Composants fonctionnels vs composants de classe
- Gestion d'état local et global
- Consommation d'API
- Routage et navigation
- Gestion d'événements
- Validation de formulaires
- Design responsive

Parfait pour apprendre React de manière pratique !
