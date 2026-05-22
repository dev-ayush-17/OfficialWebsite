# Web & Coding Club (WnCC) NIT Patna — Official Website

Welcome to the official repository of the **Web & Coding Club (WnCC), NIT Patna**. 

This is a premium, dark-themed, highly interactive web application designed to showcase our club's community, teams, events, member directory, blogs, and gallery. Built with a modern retro-industrial dark aesthetic, it features advanced 3D particle animations, smooth physics-based scrolling, and fluid reveal transitions.

---

## ✨ Features

* **🌌 3D Particle Hero Header** — Interactive Three.js particle field reacting to mouse movement with dynamic overlay graphics.
* **🎓 Leadership Section** — Showcasing messages and profiles from the Faculty PI and Club President.
* **🍱 Feature Bento Grid** — Highlighting club offerings, hackathons, open-source work, and mentoring.
* **🚀 Team Space** — Comprehensive list of the club's 7 sub-teams: *Blockchain, Web Dev, Gen AI, ML, PR, Social Media, and Design* with member profiles categorized by hierarchy (Post Bearers, Seniors, Juniors).
* **📅 Events Timeline** — Current, upcoming, and past workshops, hackathons, and guest lectures.
* **🖼️ Lightbox Gallery** — Interactive photo masonry grid with categories and image overlay controls.
* **✍️ Technical Blog** — Markdown-structured articles written by club members with clean typography.
* **👨‍💻 Developers Wall** — Dynamic card deck highlighting the developers who built and maintain this platform.

---

## 🛠️ Technical Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16** | Production-ready React framework (App Router) |
| **React 19** | Component-driven UI development |
| **TypeScript** | Static typing and type safety |
| **Tailwind CSS v4** | Modern utility-first CSS utility framework |
| **GSAP (GreenSock)** | Premium scroll-driven and entry animations |
| **Lenis** | Smooth scrolling engine |
| **Three.js & R3F** | 3D interactive particle fields and WebGL rendering |

---

## 🚀 Getting Started

To get the project running locally, follow these simple steps:

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/anurag3407/OfficialWebsite.git
   cd OfficialWebsite
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Launch the development server:
   ```bash
   npm run dev
   ```
4. Open the application:
   Navigate to [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### Production Build
Verify that the project compiles with no errors:
```bash
npm run build
```

---

## 🤝 Contributing

We welcome contributions from NIT Patna students and community developers!

If you want to contribute (add yourself to the team, create an event, submit a blog post, or fix a bug), please refer to our detailed **[Contributing Guide](CONTRIBUTING.md)**.

### Quick Contribution Highlights:
* **No-Code Data Changes**: Update member details, blog entries, or events directly in `lib/data/` files without modifying any React code.
* **PR Requirements**:
  * Run `npm run build` locally before pushing to ensure zero compilation warnings or errors.
  * Attach **screenshots** of any visual changes in your pull request.
  * Tag **`@anurag3407`** in your pull request for review and merges.
