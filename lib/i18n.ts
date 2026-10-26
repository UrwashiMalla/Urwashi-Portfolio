// Minimal i18n layer: bilingual English & Hinglish dictionary
export type Lang = "en" | "hi";

export const LANGUAGES: Lang[] = ["en", "hi"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).en === "string";
}

export const DICT = {
  picker: {
    season: { en: "Season", hi: "Mausam" },
    language: { en: "Language", hi: "Bhasha" },
  },
  seasons: {
    spring: { en: "Spring", hi: "Basant" },
    summer: { en: "Summer", hi: "Garmi" },
    autumn: { en: "Autumn", hi: "Patjhad" },
    winter: { en: "Winter", hi: "Sardi" },
  },
  nav: {
    aria: { en: "Sections", hi: "Sections" },
    home: { en: "Home", hi: "Home" },
    stack: { en: "Tech Stack", hi: "Tech Stack" },
    experience: { en: "Experience & Leadership", hi: "Experience & Journey" },
    education: { en: "Education & Certs", hi: "Education & Certs" },
    project: { en: "Project", hi: "Projects" },
    contact: { en: "Contact", hi: "Connect Karein" },
  },
  header: {
    availability: {
      en: "Open to opportunities",
      hi: "Open for opportunities",
    },
  },
  hero: {
    greeting: { en: "HELLO, I'M", hi: "HELLO, MAIN HOON" },
    roleLine: {
      en: "System Architect & Backend Engineer",
      hi: "System Architect & Backend Engineer",
    },
    tagline: {
      en: "Building scalable systems, robust APIs, and reliable backend infrastructure.",
      hi: "Scalable systems, robust APIs aur reliable backend infrastructure build karti hoon.",
    },
    cv: { en: "Download Resume", hi: "Resume Download Karein" },
    hire: { en: "Get In Touch", hi: "Connect Karein" },
    scroll: { en: "Scroll to explore", hi: "Neeche scroll karein" },
    keysHint: {
      en: "· hover or tap the 3D keyboard",
      hi: "· 3D keyboard keys pe hover ya tap karein",
    },
  },
  stack: {
    title: { en: "Tech Stack", hi: "Tech Stack" },
    hint: {
      en: "(hover over the 3D keys to inspect technologies)",
      hi: "(kisi bhi 3D key pe hover karke tech inspect karein)",
    },
    hintMobile: {
      en: "Core technologies and tools I design and build with.",
      hi: "Wo tools aur technologies jinke sath main systems build karti hoon.",
    },
  },
  experience: {
    title: { en: "Experience & Leadership", hi: "Experience & Leadership" },
    subtitle: {
      en: "Technical leadership, national hackathons, and systems engineering.",
      hi: "Technical leadership, national hackathons aur systems engineering ka safar.",
    },
  },
  education: {
    title: { en: "Education & Certifications", hi: "Education & Certifications" },
    subtitle: {
      en: "Academic foundation and verified technical certifications.",
      hi: "Solid academic foundation aur verified technical certifications.",
    },
    pursuing: { en: "In Progress", hi: "Currently Pursuing" },
    verified: { en: "Verified", hi: "Verified" },
    sgpaLabel: { en: "Semester 4 SGPA", hi: "Semester 4 SGPA" },
  },
  projects: {
    kicker: { en: "project", hi: "project" },
    viewMore: { en: "View details", hi: "Details dekhein" },
    openSite: { en: "Visit live site", hi: "Live site dekhein" },
    viewCode: { en: "View source", hi: "Code dekhein" },
    close: { en: "Close", hi: "Band karein" },
    stackLabel: { en: "Stack", hi: "Tech Stack" },
    overview: { en: "Overview", hi: "Overview" },
  },
  contact: {
    kicker: { en: "contact", hi: "get in touch" },
    title: { en: "Let's connect.", hi: "Chalo baat karte hain." },
    body: {
      en: "Always open to discussing system architecture, backend engineering, or innovative full-stack opportunities.",
      hi: "System architecture, backend engineering ya kisi exciting opportunity par discuss karne ke liye mera inbox hamesha open hai.",
    },
    copyEmail: { en: "Copy Email", hi: "Email Copy Karein" },
    openMail: { en: "Send Email", hi: "Mail Bhejein" },
    github: { en: "GitHub", hi: "GitHub" },
    linkedin: { en: "LinkedIn", hi: "LinkedIn" },
    emailToast: { en: "Email copied to clipboard", hi: "Email clipboard pe copy ho gaya!" },
    footer: {
      en: "© 2026 Urwashi Malla. All rights reserved.",
      hi: "© 2026 Urwashi Malla. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        en: "Core language of the modern web and full-stack asynchronous systems.",
        hi: "Modern web aur asynchronous full-stack systems ki backbone.",
      },
      typescript: {
        en: "Type-safe scalability for robust frontend and backend engineering.",
        hi: "Type-safety ke sath scalable frontend aur backend engineering.",
      },
      react: {
        en: "Component-driven architecture for dynamic, performant user interfaces.",
        hi: "Dynamic aur performant UI ke liye reactive component architecture.",
      },
      nextdotjs: {
        en: "Production-grade React framework with SSR, routing, and edge execution.",
        hi: "Production-grade React framework SSR aur edge performance ke sath.",
      },
      tailwindcss: {
        en: "Utility-first design framework for modern, maintainable user interfaces.",
        hi: "Modern aur maintainable interfaces ke liye utility-first styling.",
      },
      nodedotjs: {
        en: "High-throughput asynchronous runtime powering backend services and APIs.",
        hi: "Fast backend services aur APIs power karne wala asynchronous runtime.",
      },
      express: {
        en: "Fast, unopinionated framework for architecting RESTful services.",
        hi: "Scalable REST APIs design karne ke liye lightweight backend framework.",
      },
      postgresql: {
        en: "Relational database engine with strict ACID compliance and structured queries.",
        hi: "Rock-solid ACID compliance aur fast structured queries wali relational DB.",
      },
      mongodb: {
        en: "Flexible NoSQL document database for scalable, high-volume data storage.",
        hi: "Flexible schemas aur high-scale storage ke liye NoSQL document DB.",
      },
      firebase: {
        en: "Cloud infrastructure for real-time data synchronization and rapid serverless deployment.",
        hi: "Real-time data sync aur serverless cloud infrastructure.",
      },
      openjdk: {
        en: "Object-oriented foundation for robust algorithms, data structures, and core systems.",
        hi: "Core algorithms, data structures aur heavy backend systems ki foundation.",
      },
      python: {
        en: "Versatile language powering AI integrations, automation, and backend intelligence.",
        hi: "AI integrations, smart automation aur intelligent backend logic.",
      },
      axios: {
        en: "Promise-based HTTP client with interceptors for seamless frontend-to-API requests.",
        hi: "Seamless frontend-to-backend API communication aur token interceptors.",
      },
      git: {
        en: "Distributed version control for team workflows, code audits, and branch management.",
        hi: "Team workflows aur safe code deployment ke liye version control.",
      },
      docker: {
        en: "Containerization guaranteeing reproducible environments across development and production.",
        hi: "Local machine se production tak identical environment containers.",
      },
      html5: {
        en: "Accessible semantic structure for modern web applications.",
        hi: "Modern web applications ke liye semantic accessible structure.",
      },
      css: {
        en: "Visual styling, responsive layouts, and smooth animations.",
        hi: "Clean visuals, responsive layouts aur smooth animations.",
      },
      github: {
        en: "Cloud collaboration, code reviews, and automated deployment pipelines.",
        hi: "Cloud collaboration, pull requests aur deployment workflows.",
      },
    },
  },
} as const satisfies Record<string, Node>;

export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.en ?? path;
  return path;
}
