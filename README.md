# Coffee Shop – Mobile App UI

Mobile web app built from the "Coffee Shop Mobile App Design" Figma file.

**Tech stack:** React 19, Vite, Tailwind CSS v4, React Router

## Screens

| Route | Screen |
| --- | --- |
| `/` | Onboarding |
| `/home` | Home – location, search, promo banner, category filter, coffee list |
| `/coffee/:id` | Detail – size selection, favourite, read more, buy now |
| `/order` | Order – deliver / pick up, quantity, payment summary |
| `/delivery` | Delivery tracking |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 (use the browser's mobile view, e.g. iPhone 12 Pro / 375px).

## Build

```bash
npm run build
npm run preview
```

## Deployment

- **Vercel:** import the repo, framework preset "Vite". `vercel.json` handles SPA routing.
- **Netlify:** build command `npm run build`, publish directory `dist`. `netlify.toml` handles SPA routing.

## Project structure

```
src/
  assets/images/   images exported from the design
  components/      shared UI (header, bottom nav, product card, icons, promo banner)
  context/         order state (selected coffee, size, quantity, deliver / pick up)
  data/            products and categories
  pages/           Onboarding, Home, Detail, Order, Delivery
```
