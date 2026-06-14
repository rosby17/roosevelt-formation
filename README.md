# Roosevelt Mogo — Formation YouTube Monétisation

Landing page Next.js 16 pour la formation YouTube de Roosevelt Mogo.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** — Playfair Display + DM Sans

## Structure

```
src/
├── app/
│   ├── layout.tsx       ← Metadata SEO
│   ├── page.tsx         ← Page principale (composition)
│   └── globals.css      ← CSS variables + reset
├── components/
│   ├── Navbar.tsx       ← Navigation fixe + mobile
│   ├── Hero.tsx         ← Section hero (split layout)
│   ├── About.tsx        ← À propos (photo + texte)
│   ├── Programme.tsx    ← 10 modules en grille
│   ├── Offres.tsx       ← Cartes de prix (Replay vs Live)
│   ├── Resultats.tsx    ← 6 résultats attendus
│   ├── Faq.tsx          ← Accordion FAQ (client)
│   └── Contact.tsx      ← Réseaux + CTA + Footer
└── lib/
    └── data.ts          ← Toutes les données (textes, liens, prix)
```

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Déploiement Vercel

```bash
# Option 1 — CLI
npm i -g vercel
vercel

# Option 2 — GitHub
# Push sur GitHub → connecte le repo sur vercel.com → deploy automatique
```

## GitHub

```bash
cd roosevelt-mogo
git init
git add .
git commit -m "feat: landing page formation YouTube"
git remote add origin https://github.com/TON_USER/roosevelt-formation.git
git push -u origin main
```

## Modifier le contenu

Tout le contenu est centralisé dans **`src/lib/data.ts`** :
- Prix et liens de paiement → `SITE.offers`
- Réseaux sociaux → `SITE.socials`
- Les 10 modules → `MODULES`
- Les features des offres → `REPLAY_FEATURES` / `LIVE_FEATURES`
- Les résultats → `RESULTS`
- FAQ → `FAQS`

## Ajouter ta vraie photo

Dans `Hero.tsx` et `About.tsx`, remplace l'URL `src="https://yt3.googleusercontent.com/..."` 
par une photo portrait en studio uploadée dans `/public/photo.jpg` :

```tsx
src="/photo.jpg"
```

Puis supprime le `remotePatterns` dans `next.config.ts`.
