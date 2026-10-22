# Alfio Perino — Frontend Designer Portfolio

A responsive portfolio showcasing selected frontend design and engineering projects. It features project summaries, contributions, technology stacks, and outcome metrics, with responsive layouts and print-friendly styling.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 and custom CSS
- pnpm

## Getting started

### Requirements

- Node.js
- pnpm 12.3.4 (the package manager version declared by this project)

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The development server reloads as you edit files.
If port 3000 is already occupied, Next.js will select another available port and print its URL. In development, the site is served from `/`; the GitHub Pages base path is applied only to production builds.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |

## Project structure

- `app/page.tsx` — portfolio page and project content
- `app/layout.tsx` — root layout, metadata
- `app/globals.css` — site styling, responsive rules, and print styles
- `public/projects/` — project preview images
- `public/icon.svg` — site favicon
