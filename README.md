# MLBB Animated Website

>A small, animated marketing/demo site built with React, Vite, Tailwind and GSAP showcasing Mobile Legends: Bang Bang events, skins and lore stories.

This repository is a front-end demo project that combines smooth animations (GSAP + ScrollTrigger), responsive layout (TailwindCSS), and interactive UI components. It was built as an exercise in performant animations, accessible interactions (touch-safe tilt), and clean component structure — a great fit to demonstrate technical leadership, front-end engineering, and collaboration for a GitHub Campus Expert application.

---

## Why this project demonstrates relevant skills

- Uses modern front-end tooling: Vite, React (JSX), TailwindCSS.
- Advanced animations: GSAP with ScrollTrigger to deliver smooth, performant entrance and scroll animations.
- Accessibility and performance in mind: tilt interactions are disabled on touch devices, image fallbacks are provided to avoid layout breakage, and `will-change`/transform optimizations are used for smooth rendering.
- Component-driven architecture: reusable `EventCard`, `SkinCard`, `StoryCard`, and a small `BentoTilt` wrapper demonstrate composability and separation of concerns.
- Practical engineering practices: linting, git history, and clear README + contribution notes.

---

## Features

- Events grid with video links (YouTube thumbnails + "▶ Watch").
- Inline skins grid (images + role metadata).
- Stories section with links to fandom/wiki pages.
- Touch-safe 3D tilt (`BentoTilt`) enabled only on hover-capable devices.
- Animated, game-themed footer and hero with GSAP.
- Image onError fallbacks (to `/img/thumbnail.png`) to keep layout robust against broken hotlinks.

---

## Quick start (macOS / Linux / WSL)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the site

Open the local dev URL printed by Vite (usually `http://localhost:5173`) in your browser.

4. Build for production

```bash
npm run build
```

5. Lint

```bash
npm run lint
```

---

## Project structure (high level)

- `src/` — React source code
	- `components/Events.jsx` — Events, Skins and Stories UI (cards + BentoTilt)
	- `components/Hero.jsx`, `Navbar.jsx`, `Footer.jsx`, `Button.jsx` — site structure and interactions
	- `main.jsx`, `App.jsx` — app bootstrap
- `public/` — static assets (images, audio)
- `index.html`, `vite.config.js`, `tailwind.config.js` — build + tooling

---

## Notable implementation details

- BentoTilt: a small wrapper that applies a 3D transform on mouse move when the device supports hover AND a fine pointer (so it doesn't apply on touch devices). This reduces layout thrashing and prevents overlap/lag on mobile.
- Image fallbacks: every card image includes an `onError` handler that replaces failed external image links with `/img/thumbnail.png` to maintain a consistent layout.
- Anchors: the nav links point to `#events`, `#skins`, and `#stories` — the corresponding sections include matching `id` attributes for smooth navigation.

---

## Development notes and suggestions

- External image hosting such as `encrypted-tbn0.gstatic.com` (Google cached thumbnails) is unreliable for production. For stability, copy important assets into `public/img/` and reference them locally.
- Consider adding unit tests (React Testing Library) and end-to-end tests (Playwright) if this repo will be used as a teaching/demo artifact.
- If you plan to demo this to evaluators, prepare a short recording (30–60s) highlighting the key interactions: tilt behavior, GSAP scroll animations, nav anchors to Skins/Stories, and the image fallback in action.

---

## Contribution

Contributions are welcome. If you want to contribute:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/some-feature`.
3. Make your changes and run the lint and dev server locally.
4. Open a pull request with a clear description and screenshots or a short gif when UI changes are involved.

Sample PR checklist for reviewers:
- [ ] Builds locally and `npm run lint` passes
- [ ] No console errors or layout regressions on common screen sizes
- [ ] Accessibility: keyboard and touch interactions behave correctly

---

## How this helps your GitHub Campus Expert application

This repo demonstrates real-world front-end engineering choices, performance considerations, animation craftsmanship, and collaboration-ready practices. When presenting it:

- Emphasize measurable engineering decisions (why tilt is disabled on touch, why image fallbacks matter, how GSAP ScrollTrigger is used to reduce repaints).
- Include a short `demo.md` or a 60s video in the PR showing the interactive bits.
- Point reviewers to the component files mentioned above and explain the responsibilities of each.

---

## License

MIT — see `LICENSE` (create one if you intend to publish this publicly).

---

If you'd like, I can also:

- Copy key external images into `public/img/` and update references (recommended). 
- Start the dev server and capture any console warnings and a quick verification checklist. 
- Add a short demo GIF under `assets/` showing the tilt + GSAP scroll in action.

If you want me to do any of these, tell me which and I'll add them next.

# MLBB-Game-website

An interactive and visually rich website built using **React**, **GSAP (GreenSock Animation Platform)**, and **Vite**. This project showcases smooth animations, scroll-triggered effects, and a modern user interface — perfect for portfolios, creative landing pages, or storytelling sites.


---

## 🖼️ Preview

## ✨ Features

- 🔄 Smooth animations powered by [GSAP](https://greensock.com/gsap/)
- 🎯 Scroll-triggered animations using GSAP ScrollTrigger
- ⚛️ Built with [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- 📱 Responsive and mobile-friendly layout

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Animations**: GSAP + ScrollTrigger
- **Tooling**: ESLint, Prettier


## 🚀 Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/AlizayAyesha/MLBB-Game-website.git.git
cd gsap-animated-website
npm install
npm run dev
```
The site will open at http://localhost:5173

## 📌 Project Status
<pre>
 Setup with Vite + React
 Navbar with basic animation
 Hero section animation
 ScrollReveal sections
 Bento Cards with animations
 Footer design
 Responsive layout
</pre>

# 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change or improve.

# 💬 Let's Connect
For questions, suggestions, or collaboration, feel free to reach out.
# MLBB-Game-website
