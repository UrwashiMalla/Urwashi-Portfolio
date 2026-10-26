"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";
import type { Lang } from "@/lib/i18n";

const EMAIL = "urwashimalla@gmail.com";
const GITHUB_URL = "https://github.com/UrwashiMalla";
const LINKEDIN_URL = "https://www.linkedin.com/in/urwashi-malla-63b499403/";

type Localised = { en: string; hi: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      en: "SolivaGuard — E-Commerce Platform",
      hi: "SolivaGuard — E-Commerce Platform",
    },
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Docker",
      "Node.js",
    ],
    desc: {
      en: "Production e-commerce platform for UV-protective apparel featuring responsive product discovery, secure checkout workflows, and modular UI architecture.",
      hi: "UV-protective activewear ke liye production e-commerce platform, responsive product discovery aur secure checkout workflows ke sath.",
    },
    details: {
      en: "SolivaGuard is a full-scale commercial e-commerce solution. Focused on storefront architecture and user experience, implementing modular, reusable React UI components across desktop and mobile screens. Integrated with backend REST endpoints, optimized product browsing performance, and supported containerized deployment configurations with Docker and Nginx.",
      hi: "SolivaGuard ek high-performance e-commerce platform hai. Maine iska customer-facing storefront React se architect kiya, reusable modular UI components banaye aur backend REST endpoints ke sath integrate kiya. Docker aur Nginx ke deployment containers configure karne me contribute kiya.",
    },
    url: "https://solivaguard.com",
    media: [
      "/projects/solivaguard/banner.webp",
      "/projects/solivaguard/protection.webp",
      "/projects/solivaguard/commute.webp",
      "/projects/solivaguard/details.webp",
      "/projects/solivaguard/logo.webp",
      "/projects/solivaguard/nav.webp",
    ],
    highlights: ["react", "javascript", "tailwindcss", "docker", "nodedotjs"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      en: "Authentication & Security System",
      hi: "Authentication & Security System",
    },
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Bcrypt",
      "React",
      "Axios",
    ],
    desc: {
      en: "Full-stack authentication and session management engine featuring JWT tokens, email OTP verification, bcrypt password hashing, and PostgreSQL persistence.",
      hi: "JWT access tokens, email OTP verification, bcrypt password hashing aur PostgreSQL storage ke sath full-stack auth engine.",
    },
    details: {
      en: "Engineered a production-ready authentication subsystem covering user registration, authenticated session lifecycles, and password recovery. The Express backend handles JWT signing/verification, bcrypt salt hashing, automated email OTP delivery via Nodemailer, and structured audit persistence in PostgreSQL. Frontend integrates client-side protected route guards with React Router and Axios interceptors.",
      hi: "Production-ready authentication subsystem jisme user registration, login, email OTP verification aur password recovery shamil hai. Express backend JWT signing, bcrypt password hashing aur PostgreSQL persistence handle karta hai. React frontend Axios interceptors ke sath protected routes ensure karta hai.",
    },
    github: "https://github.com/adi-Git-Hub/Authentication-Login-System",
    media: [
      "/projects/auth/dashboard.png",
      "/projects/auth/login.png",
    ],
    highlights: ["nodedotjs", "express", "postgresql", "react", "axios"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      en: "Talent Track — AI Placement Platform",
      hi: "Talent Track — AI Placement Platform",
    },
    stack: [
      "React",
      "Node.js",
      "Express",
      "AI Resume Scoring",
      "PostgreSQL",
      "REST APIs",
    ],
    desc: {
      en: "AI-driven placement platform built for students, recruiters, and college placement cells, featuring resume scoring, skill-gap analysis, and mock tests.",
      hi: "Students aur recruiters ke liye AI placement platform, jisme automated resume scoring, skill-gap analysis aur mock tests integrated hain.",
    },
    details: {
      en: "Developed as team leader for TechnoSphere at the National-Level Rackathon 2026. The platform streamlines campus recruitment through AI-assisted workflows: automated resume evaluation against job descriptions, diagnostic skill-gap reports, interactive mock technical evaluations, and administrative oversight dashboards for placement officers.",
      hi: "National-Level Rackathon 2026 me Team TechnoSphere ke leader ke roop me develop kiya gaya platform. Ye college recruitment process ko AI workflows se simplify karta hai: automated resume evaluation, skill-gap identification aur placement dashboards.",
    },
    badge: { en: "Rackathon 2026", hi: "Rackathon 2026" },
    media: [
      "/projects/talent-track/dashboard.png",
      "/projects/talent-track/analysis.png",
    ],
    highlights: ["react", "nodedotjs", "postgresql", "javascript", "python"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      en: "Amravati Sahayak — AI Local Assistant",
      hi: "Amravati Sahayak — AI Local Assistant",
    },
    stack: [
      "JavaScript",
      "Gemini AI",
      "Firebase",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    desc: {
      en: "Conversational AI assistant empowering citizens and travelers with instant access to hospitals, emergency amenities, and local business information.",
      hi: "Amravati ke citizens aur travelers ke liye conversational AI assistant, hospitals aur essential services ki instant local jankari ke sath.",
    },
    details: {
      en: "Independently conceptualized and demonstrated at the Amravati AI Summit 2026. Features a responsive chat UI communicating with generative AI endpoints to answer location-specific inquiries for healthcare, dining, and city amenities with multilingual conversational capabilities across English, Hindi, and Marathi.",
      hi: "Amravati AI Summit 2026 me independently present kiya gaya conversational assistant. Generative AI aur Firebase real-time database use karke Hindi, Marathi aur English me local public services ki accurate information deta hai.",
    },
    url: "https://amravati-sahayak.vercel.app/chat.html",
    badge: { en: "Amravati AI Summit 2026", hi: "Amravati AI Summit 2026" },
    media: [
      "/projects/sahayak/chat.png",
      "/projects/sahayak/search.png",
    ],
    highlights: ["javascript", "firebase", "axios"],
    align: "right",
    section: "project4",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: {
      en: "Team Leader & Full-Stack Developer",
      hi: "Team Leader & Full-Stack Developer",
    },
    company: "TechnoSphere · National-Level Rackathon 2026",
    period: { en: "2026", hi: "2026" },
    location: { en: "Amravati, India", hi: "Amravati, India" },
    summary: {
      en: "Led the TechnoSphere engineering team in designing and building the Talent Track platform to streamline university campus placements between students, recruiters, and placement directors.",
      hi: "TechnoSphere engineering team ko lead kiya Talent Track platform build karne ke liye, taaki campus placements aur technical evaluation process streamlined ho sake.",
    },
    bullets: [
      {
        en: "Architected placement-readiness workflows: automated resume evaluation against industry benchmarks and diagnostic skill-gap identification.",
        hi: "Placement-readiness workflows architect kiye: automated resume evaluation aur skill-gap identification.",
      },
      {
        en: "Engineered frontend React interfaces connected to Node.js/Express REST endpoints for secure multi-role dashboard access.",
        hi: "React UI ko Node.js/Express REST APIs ke sath connect karke multi-role dashboards develop kiye.",
      },
      {
        en: "Formulated technical architecture and defended system design before the national-level jury panel.",
        hi: "System architecture design formulate kiya aur national jury ke samne live defend kiya.",
      },
    ],
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    role: {
      en: "AI Solutions Developer & Presenter",
      hi: "AI Solutions Developer & Presenter",
    },
    company: "Amravati AI Summit 2026",
    period: { en: "2026", hi: "2026" },
    location: { en: "Amravati, India", hi: "Amravati, India" },
    summary: {
      en: "Independently conceptualized, engineered, and demonstrated Amravati Sahayak, a multilingual AI civic assistant for emergency and municipal discovery.",
      hi: "Amravati Sahayak conversational assistant ko independently build kiya aur Amravati AI Summit me showcase kiya.",
    },
    bullets: [
      {
        en: "Designed conversational user experience with multilingual natural interaction in Hindi, Marathi, and English for broad civic accessibility.",
        hi: "Hindi, Marathi aur English me multilingual conversational UI design kiya.",
      },
      {
        en: "Integrated generative AI endpoints with Firebase real-time database for rapid contextual responses on hospitals and local services.",
        hi: "Generative AI aur Firebase real-time data sync integrate kiya low-latency responses ke liye.",
      },
      {
        en: "Delivered live technical demonstration and architecture walkthrough to industry leaders and engineers at the summit.",
        hi: "Summit me industry experts aur engineers ke samne live technical demo deliver kiya.",
      },
    ],
    stack: ["JavaScript", "Gemini AI", "Firebase", "REST APIs", "HTML5", "CSS3"],
  },
  {
    role: {
      en: "Frontend & Storefront Contributor",
      hi: "Frontend & Storefront Contributor",
    },
    company: "SolivaGuard Project",
    period: { en: "2025 — 2026", hi: "2025 — 2026" },
    location: { en: "Remote", hi: "Remote" },
    summary: {
      en: "Contributed to the customer-facing storefront of SolivaGuard, establishing responsive page architecture and fluid shopping user flows.",
      hi: "SolivaGuard production e-commerce platform ke storefront UI aur responsive shopping flows me contribute kiya.",
    },
    bullets: [
      {
        en: "Developed responsive page layouts and reusable React UI component systems maintaining visual fidelity across mobile and desktop viewports.",
        hi: "Mobile aur desktop ke liye modular React UI components aur responsive layouts create kiye.",
      },
      {
        en: "Streamlined product catalog discovery, variant inspection, and customer shopping navigation performance.",
        hi: "Product catalog browsing, item discovery aur shopping navigation performance optimize kiya.",
      },
      {
        en: "Collaborated on containerized deployment readiness using Docker and production-level service configurations.",
        hi: "Docker containers aur production service deployment configurations me actively collaborate kiya.",
      },
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Docker", "REST APIs"],
  },
];

const educationItems = [
  {
    degree: {
      en: "B.Tech in Information Technology",
      hi: "B.Tech in Information Technology",
    },
    status: {
      en: "Pursuing · Expected 2027",
      hi: "Currently Pursuing · 2027 Expected",
    },
    institution: "H.V.P.M. College of Engineering and Technology",
    university: "Sant Gadge Baba Amravati University (SGBAU)",
    metrics: {
      label: { en: "Semester 4 SGPA", hi: "Semester 4 SGPA" },
      val: "9.18 / 10",
    },
    highlights: [
      {
        en: "Core focus on web development, software architectures, and data structures.",
        hi: "Backend architectures, data structures aur web systems development pe main focus.",
      },
      {
        en: "Active participant in tech innovation competitions, ideathons, and university hackathons.",
        hi: "Hackathons, technical competitions aur state-level ideathons me active participation.",
      },
    ],
  },
];

const certificationItems = [
  {
    title: "Data Structures and Algorithms with Java",
    issuer: "Apna College",
    verified: true,
    desc: {
      en: "Mastery of core data structures, asymptotic algorithmic complexity, and object-oriented systems design.",
      hi: "Core data structures, algorithm optimization aur object-oriented system design.",
    },
    badge: "Java / DSA",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    verified: true,
    desc: {
      en: "End-to-end full-stack web applications, client-server architectures, and relational & NoSQL databases.",
      hi: "Complete full-stack web applications, client-server architectures aur SQL/NoSQL databases.",
    },
    badge: "Full-Stack Web",
  },
];

function pick<T>(loc: { en: T; hi: T }, lang: Lang): T {
  return loc[lang] ?? loc.en;
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              &lt;Urwashi /&gt;
            </span>
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="frost-btn !py-1.5 !px-3 !text-xs"
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GitHub</span>
              </a>
            </span>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-16">
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                {/* Background-Removed Cutout Portrait Card */}
                <div
                  className="relative shrink-0 pointer-events-auto fade-in-up"
                  style={{ ["--d" as string]: "100ms" }}
                >
                  {/* Atmospheric Glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-gradient-to-tr from-ice-500/30 via-ice-300/15 to-transparent blur-2xl pointer-events-none opacity-80"
                  />

                  {/* Glassmorphic Frame */}
                  <div className="relative group rounded-3xl border border-ice-700/60 bg-gradient-to-b from-ink-1/90 via-ink-2/65 to-ink-1/90 backdrop-blur-xl p-3 sm:p-3.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-ice-500/70">
                    <div className="relative w-48 sm:w-56 md:w-60 lg:w-64 aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-ink-2/40 to-ink-0/70 flex items-end justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(122,166,208,0.22),transparent_70%)] pointer-events-none" />

                      <picture>
                        <source srcSet="/urwashi_transparent.webp" type="image/webp" />
                        <img
                          src="/urwashi_transparent.png"
                          alt="Urwashi Malla"
                          className="w-full h-full object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.75)] transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="eager"
                        />
                      </picture>

                      {/* Glass Floating Status Badge */}
                      <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between px-2.5 py-1 rounded-xl border border-ice-700/80 bg-ink-1/85 backdrop-blur-md text-[11px] font-mono text-ice-100 shadow-lg">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Urwashi Malla
                        </span>
                        <span className="text-ice-400 text-[10px]">Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hero Details Column */}
                <div className="max-w-xl">
                  {/* Eyebrow */}
                  <p
                    className="text-[12px] uppercase tracking-[0.35em] text-ice-300 mb-2 font-mono fade-in-up"
                    style={{ ["--d" as string]: "0ms" }}
                  >
                    HELLO, I&apos;M
                  </p>

                  {/* Dominant Bold Name */}
                  <h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] text-ice-50 leading-[0.98] mb-4 fade-in-up"
                    style={{ ["--d" as string]: "150ms" }}
                  >
                    Urwashi <span className="text-ice-400 font-black">Malla</span>
                  </h1>

                  {/* Role Title */}
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-ice-100 tracking-tight mb-3 fade-in-up"
                    style={{ ["--d" as string]: "280ms" }}
                  >
                    System Architect &amp; Backend Engineer
                  </h2>

                  {/* Description */}
                  <p
                    className="text-base sm:text-lg text-ice-200/90 leading-relaxed max-w-lg mb-6 fade-in-up"
                    style={{ ["--d" as string]: "380ms" }}
                  >
                    Building scalable systems, robust APIs, and reliable backend infrastructure.
                  </p>

                  {/* Verified Quick Badges */}
                  <div
                    className="mt-6 flex flex-wrap gap-2.5 pointer-events-auto fade-in-up"
                    style={{ ["--d" as string]: "500ms" }}
                  >
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-ice-700/60 bg-ink-2/70 text-ice-200">
                      ⚡ 9.18 SGPA
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-ice-700/60 bg-ink-2/70 text-ice-200">
                      🏆 Rackathon &apos;26 Lead
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full border border-ice-700/60 bg-ink-2/70 text-ice-200">
                      🤖 AI Summit Presenter
                    </span>
                  </div>

                  {/* CTAs */}
                  <div
                    className="mt-8 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                    style={{ ["--d" as string]: "650ms" }}
                  >
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn frost-btn--primary"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                        <path d="M14 3v5h5" />
                      </svg>
                      {t("hero.cv")}
                    </a>
                    <button
                      type="button"
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                      onClick={() =>
                        document
                          .querySelector<HTMLElement>(
                            '[data-kb-section="contact"]'
                          )
                          ?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    >
                      {t("hero.hire")}
                    </button>
                    <div className="basis-full h-0 md:hidden" aria-hidden />
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      data-magnetic
                      className="frost-icon"
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                      </svg>
                    </a>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="hover"
                      data-magnetic
                      className="frost-icon"
                      aria-label="GitHub"
                    >
                      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Education & Certifications */}
          <section
            data-kb-section="education"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="text-center mb-12 sm:mb-16">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("education.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("education.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Degree Card */}
              {educationItems.map((edu, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 100}
                  as="article"
                  className="rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 pointer-events-auto flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-ice-400">
                        {pick(edu.status, lang)}
                      </span>
                      <span className="font-mono text-xs text-ice-100 px-2.5 py-0.5 rounded-full border border-ice-700/60 bg-ink-2/60">
                        SGPA: {edu.metrics.val}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-ice-50 tracking-tight mb-2">
                      {pick(edu.degree, lang)}
                    </h3>
                    <p className="text-ice-300 font-medium text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-ice-400 text-xs mb-5">
                      {edu.university}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 text-xs text-ice-200 leading-relaxed">
                          <span className="mt-[0.55em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                          <span>{pick(h, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-ink-3/60 flex items-center justify-between">
                    <span className="text-xs text-ice-400 font-mono">Academic Status</span>
                    <span className="text-xs text-emerald-400 font-medium">Verified Active</span>
                  </div>
                </Reveal>
              ))}

              {/* Certifications Card */}
              <div className="space-y-4">
                {certificationItems.map((c, i) => (
                  <Reveal
                    key={i}
                    delay={160 + i * 100}
                    as="div"
                    className="rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 pointer-events-auto"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-ice-300 font-medium">
                        {c.issuer}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-950/30">
                        ✓ {t("education.verified")}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-ice-50 mb-1.5">
                      {c.title}
                    </h4>
                    <p className="text-xs text-ice-300 leading-relaxed mb-3">
                      {pick(c.desc, lang)}
                    </p>
                    <span className="font-mono text-[11px] text-ice-400 bg-ink-2/80 px-2.5 py-1 rounded-md border border-ink-3">
                      {c.badge}
                    </span>
                  </Reveal>
                ))}

                {/* Hackathon & Summit Accolades */}
                <Reveal
                  delay={360}
                  as="div"
                  className="rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 pointer-events-auto"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-ice-300 mb-3">
                    Hackathons & Key Accolades
                  </h4>
                  <ul className="space-y-2 text-xs text-ice-200">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400">★</span>
                      <span>Team Leader for <strong>TechnoSphere</strong> at National-Level Rackathon 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">★</span>
                      <span>Presenter at <strong>Amravati AI Summit 2026</strong> (Amravati Sahayak)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">★</span>
                      <span>Participant in Business-Plan Competitions & Regional Ideathons</span>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>

                  {/* Send Email button opens interactive modal */}
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(true)}
                    data-cursor="hover"
                    className="frost-btn flex items-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    <span>{t("contact.openMail")}</span>
                  </button>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          emailDestination={EMAIL}
        />
      </div>
    </SmoothScroll>
  );
}
