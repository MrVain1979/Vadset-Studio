# Fjord Digital

En komplett, statisk nettside bygget med Vite, React og TypeScript. Den er klar for deploy på Vercel og trenger ikke CMS eller backend.

## Kom i gang

```bash
npm install
npm run dev
```

## Produksjonsbygg

```bash
npm run build
```

På Vercel kan prosjektet importeres direkte. Bruk standardinnstillingene for Vite:

- Build command: `npm run build`
- Output directory: `dist`

## Tilpasning

Innholdet ligger i `src/main.tsx`, mens uttrykk, layout og responsivitet ligger i `src/styles.css`. Bytt `public/hero-studio.png` for å bruke eget hero-bilde.
