# NexaCore — Company Portfolio Website

A professional, production-grade company portfolio built with **Next.js 14 App Router**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Dark-themed, fully responsive, and Vercel/Netlify-ready.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion (scroll-triggered fade + slide-up) |
| Icons | Lucide React |
| Fonts | Space Grotesk (display) + DM Sans (body) |
| Data | Local TypeScript constants in `/data` |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Editing Site Content

All content lives in the `/data` folder — no backend required.

| File | What it controls |
|------|-----------------|
| `data/company.ts` | Company name, tagline, description, mission, social links |
| `data/achievements.ts` | Achievement cards and detail pages |
| `data/projects.ts` | Project cards and detail pages |
| `data/team.ts` | Team member cards |

Simply edit the arrays in these files — the UI updates automatically.

---

## Project Structure

```
/app
  /achievements/[slug]/page.tsx   — Achievement detail page
  /projects/[slug]/page.tsx       — Project detail page
  page.tsx                        — Home page
  layout.tsx                      — Root layout + fonts
/components
  Navbar.tsx
  Hero.tsx
  WhoWeAre.tsx
  Achievements.tsx / AchievementCard.tsx
  Projects.tsx / ProjectCard.tsx
  Team.tsx / TeamCard.tsx
  Footer.tsx
  ScrollReveal.tsx                — Reusable scroll animation wrapper
/data
  company.ts
  achievements.ts
  projects.ts
  team.ts
```

---

## Deploy to Vercel (One-Click)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.

No environment variables are required for the base portfolio. See `.env.example` if you add integrations later.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Deploy to Netlify

1. Push this repository to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Set build command: `npm run build`, publish directory: `.next`.
4. Install the [Netlify Next.js plugin](https://github.com/netlify/netlify-plugin-nextjs) for full SSR support.
