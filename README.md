# Carambar & Co — Landing (Front)

Mini **landing page** qui reflète la marque Carambar & Co et affiche, via un bouton, **une blague aléatoire** provenant de l’API **v1**.

---

## 🔗 Démo & API

- **Démo (GitHub Pages)** : https://viejofacha.github.io/carambar-jokes-front/
- **API (Render)** : https://carambar-jokes-api-yjvd.onrender.com
- **Swagger (doc API)** : https://carambar-jokes-api-yjvd.onrender.com/docs

> L’instance Render (plan gratuit) peut avoir un **cold start** : la 1ʳᵉ requête peut prendre quelques secondes.

---

## ✨ Fonctionnalités

- Bouton “Nouvelle blague aléatoire” → appelle `GET /api/v1/jokes/random`.
- Affichage **question + réponse**.
- Mise en page responsive, thème compatible **mode sombre** du système.
- Lien “Source: API v1” pointant vers l’endpoint utilisé.

---

## ⚙️ Configuration (`API_BASE`)

Dans `index.html`, définir la base de l’API **production** (Render) :

```html
<script>window.API_BASE = "https://carambar-jokes-api-yjvd.onrender.com";</script>
En développement local (API lancée en local) :

html
Copiar código
<script>window.API_BASE = "http://127.0.0.1:3000";</script>
Important : sur GitHub Pages, utiliser https pour éviter le “mixed content”.

▶️ Lancer le front en local
Ouvrir index.html directement dans le navigateur ou

VS Code → extension Live Server → “Open with Live Server”.

🚀 Déploiement (GitHub Pages)
Pousser ce dépôt sur GitHub (main).

Repo → Settings → Pages → Deploy from a branch → main / (root).

Ouvrir l’URL fournie (voir ci-dessus “Démo”).

🗂️ Structure du projet
arduino
Copiar código
carambar-jokes-front/
 ├─ index.html        # page statique + config API_BASE
 ├─ styles.css        # styles (light/dark via variables CSS)
 ├─ app.js            # logique fetch + rendu
 └─ img/              # assets (hero, mascotte, etc.)
✅ Vérifications rapides
Le bouton renvoie une blague depuis :
GET https://carambar-jokes-api-yjvd.onrender.com/api/v1/jokes/random

La doc Swagger est accessible :
https://carambar-jokes-api-yjvd.onrender.com/docs

🔧 Dépannage
CORS : l’API active cors() globalement. Si erreur, recharger (Ctrl/Cmd+F5).

Mixed content : sur Pages, l’API doit être https.

404 GitHub Pages : vérifier Settings → Pages (branche main, dossier /).

📦 Livrables (récap)
Front (Pages) : https://viejofacha.github.io/carambar-jokes-front/

API (Render) : https://carambar-jokes-api-yjvd.onrender.com/

Swagger : https://carambar-jokes-api-yjvd.onrender.com/docs

Repos : carambar-jokes-front · carambar-jokes-api
