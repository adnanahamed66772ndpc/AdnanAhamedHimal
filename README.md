# Adnan Ahamed Himal — Portfolio

A modern, animated personal portfolio built with React and TypeScript. Features smooth animations inspired by [React Bits](https://reactbits.dev/), a gooey navigation menu, and a responsive layout.

**Live site:** [https://adnanahamed66772ndpc.github.io/AdnanAhamedHimal/](https://adnanahamed66772ndpc.github.io/AdnanAhamedHimal/)

---

## ✨ Features  

- **Hero** — Animated intro with gradient background and clear call-to-actions
- **About** — Profile summary and professional focus
- **Skills** — Telephony & VoIP, Backend, Frontend, DevOps & Server Management
- **Experience** — Highlights from Asterisk PBX, VPS, and automation work
- **Projects** — Top 5 projects (PBX System, Live Call Monitoring, Extension Automation, ADNFLIX, Multi-VPS DevOps) with tags and descriptions
- **Contact** — Email and social links
- **Gooey Nav** — React Bits–style pill navigation with blob effect on desktop
- **Animations** — GSAP and Framer Motion for scroll-triggered and hover effects
- **Responsive** — Mobile-first layout with breakpoints and touch-friendly targets

---

## 🛠 Tech Stack

| Category        | Technologies                                      |
|----------------|---------------------------------------------------|
| **Framework**  | React 19, TypeScript, Vite 7                      |
| **Animation**  | GSAP, Framer Motion                               |
| **3D**         | Three.js, @react-three/fiber                      |
| **Styling**    | CSS (custom properties, flexbox, grid)            |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/adnanahamed66772ndpc/AdnanAhamedHimal.git
cd AdnanAhamedHimal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `docs/` folder (used for GitHub Pages). Preview locally with:

```bash
npm run preview
```

### Deploy to GitHub Pages

1. In your repo go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Push to `main`; the workflow will build and deploy. Your site will be at:
   **https://adnanahamed66772ndpc.github.io/AdnanAhamedHimal/**

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/     # Hero, Nav, About, Skills, Experience, Projects, Contact, etc.
│   ├── App.css         # Global and section styles
│   ├── App.tsx
│   ├── index.css       # Base styles and variables
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License

MIT

---

**Adnan Ahamed Himal** — Full-Stack Developer & Telecom System Builder
