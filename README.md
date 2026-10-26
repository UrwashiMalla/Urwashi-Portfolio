# Urwashi Malla — 3D Developer Portfolio

An immersive, interactive developer portfolio built with **Next.js 16**, **React Three Fiber**, and **Tailwind CSS v4**. Features a 3D mechanical keyboard hero scene with verified backend/system architecture tech stack icons, seasonal themes, smooth scroll animations, bilingual support (English & Hinglish), and an interactive contact modal.

**Target Role:** System Architect & Backend Engineer  
**Connect:** [LinkedIn](https://www.linkedin.com/in/urwashi-malla-63b499403/) &nbsp;|&nbsp; [GitHub](https://github.com/adi-Git-Hub) &nbsp;|&nbsp; [Email](mailto:urwashimalla@gmail.com)

---

## Highlights

- **Interactive 3D Mechanical Keyboard** — Built with React Three Fiber, Three.js, and Simple Icons. Features keycaps with authentic backend technologies (Node.js, Express, Docker, AWS, PostgreSQL, Python, etc.) reacting to live keypresses and scroll interactions.
- **Hero & Identity** — Prominent bold typography highlighting Urwashi Malla's background as a System Architect & Backend Engineer with transparent portrait presentation.
- **Featured Projects Showcase:**
  - **SolivaGuard E-Commerce Storefront** — Full-stack commercial platform with Node.js/Express, Tailwind CSS, Stripe integration, and responsive state management.
  - **SolivaGuard Admin Suite** — Operations dashboard with role-based access control (RBAC), inventory tracking, analytics, and order management.
  - **Amravati Sahayak (AI Civic System)** — NLP-driven civic assistance platform presented at the Amravati AI Summit 2026.
  - **Modular Microservices Auth Service** — Production-grade authentication service with JWT rotation, Redis session caching, and rate limiting.
- **Interactive Contact Modal:**
  - **Hiring & Other:** Synchronously transfers visitors directly to Google Gmail web compose with pre-filled subject and inquiry details.
  - **Project Inquiries:** Dispatches project collaboration inquiries to `/api/contact` and displays an inquiry confirmation screen.
- **Bilingual Experience (EN / Hinglish)** — Toggle between English and natural Hinglish.
- **Smooth Scroll & Micro-interactions** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) with custom cursor and magnetic hover effects.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **3D & Graphics** | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) + [Three.js](https://threejs.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Icons** | [Simple Icons](https://simpleicons.org/) |
| **Language** | TypeScript |
| **Deploy** | Vercel / Docker |

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** 10+

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/adi-Git-Hub/portfolio-urwashi.git
cd portfolio-urwashi

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t portfolio-urwashi .
docker run -p 3000:3000 portfolio-urwashi
```

---

## License

This project is licensed under the MIT License.
