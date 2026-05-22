# Baklava Club de Mar — Landing QR

Landing tipo "link hub premium" para Baklava Club de Mar, construida en **Astro**.

## Requisitos

- Node.js 18+
- npm / pnpm / bun

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Despliegue

Compatible con **Vercel**, **Netlify** y **Cloudflare Pages**. Solo conecta el repo y usa los comandos por defecto de Astro (`npm run build`, output `dist/`).

## Editar contenido

Todo el contenido editable vive en `src/data/site.ts` (textos, links, promociones, horarios, redes).

## Estructura

```
src/
├── components/
│   ├── Hero.astro
│   ├── LinkButton.astro
│   ├── Promotions.astro
│   ├── Hours.astro
│   ├── SocialLinks.astro
│   ├── LocationCard.astro
│   └── Footer.astro
├── data/site.ts
├── layouts/MainLayout.astro
└── pages/index.astro
public/
├── logo-baklava.png
└── favicon.png
```
