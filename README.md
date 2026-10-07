# DNA Screen Printing — website redesign

A static, responsive rebuild of [dnascreening.com](http://www.dnascreening.com/) — custom screen printing in
Kitchener, Ontario since 1994. Built with **React + Vite + plain CSS**, routed with `HashRouter` so it works on
GitHub Pages.

All copy and images come from the original site; edit the text in [`src/data/content.js`](src/data/content.js).

## Run locally

Requires Node.js 18+ (Vite 6).

```bash
npm install
npm run dev       # http://localhost:5173/DNAClothing/
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deploy to GitHub Pages

1. Create a GitHub repository. If you don't name it `DNAClothing`, change `base` in
   [`vite.config.js`](vite.config.js) to `'/<your-repo-name>/'`.
2. Push this project to the repository.
3. Run:

   ```bash
   npm run deploy
   ```

   This builds the site (`predeploy`) and publishes `dist/` to a `gh-pages` branch with the
   [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.
4. In the repository on GitHub, open **Settings → Pages** and set the source to the `gh-pages` branch (root).
   The site will be at `https://<your-username>.github.io/<your-repo-name>/`.

## Project structure

```
src/
  assets/        logo, header banners, gallery photos (+ thumbs), news map, ink ads
  components/    Header, Footer, Layout, Hero (knockout headline), FeatureCard, Reveal, ...
  data/          content.js — all site text, business details, gallery and Q&A data
  hooks/         useReveal (IntersectionObserver scroll fade-ins)
  pages/         Home, About, Gallery, QA, News, Post, Contact, Quote, NotFound
  utils/         mailto.js — builds prefilled emails for the forms
  index.css      design tokens (colours, fonts), resets, buttons, form styles
```

## Notes

- **Forms are view-only.** Contact and Quote open a prefilled `mailto:mail@dnascreening.com` email in the
  visitor's email app; artwork must be attached there. The search box is visual only.
- **Login** links out to the existing customer order-tracking page on dnascreening.com.
- Animations are limited to scroll fade-ins and hover lifts, and are disabled for `prefers-reduced-motion`.
