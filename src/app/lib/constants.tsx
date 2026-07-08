export const skillCategories = [
  {
    label: "Core",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "State & Data",
    skills: ["React Query", "SWR", "Redux Toolkit", "Zustand"],
  },
  {
    label: "UI & Design",
    skills: ["Figma", "Shadcn UI", "Material UI"],
  },
  {
    label: "Tooling",
    skills: ["Vite", "Docker", "Git", "Node.js"],
  },
];

export const skills = skillCategories.flatMap((category) => category.skills);

export const expertise = [
  {
    title: "Interface architecture",
    description:
      "Component-driven systems with clear boundaries, reusable patterns, and type-safe APIs across complex product surfaces.",
  },
  {
    title: "Performance & reliability",
    description:
      "Core Web Vitals, bundle optimization, and resilient data flows for apps where latency and uptime matter.",
  },
  {
    title: "Design systems",
    description:
      "Token-based UI, accessible primitives, and consistent interaction patterns that scale across teams.",
  },
  {
    title: "Product collaboration",
    description:
      "Partnering with design and backend to ship polished flows — from discovery through production.",
  },
];

export const projects = [
  {
    title: "Trukkr",
    thumbnail: "/images/portal-trukkr.png",
    landingpage: "https://trukkr.ai",
    portal: "https://trukkr.ai/transporter-portal",
    source: "",
    description:
      "Logistics marketplace ($6M funding) connecting carriers with shippers — dashboards, portals, and high-volume transactional flows.",
    featured: true,
  },
  {
    title: "On Demand",
    thumbnail: "/images/on-demand.png",
    landingpage: "https://on-demand.io/",
    portal: "https://app.on-demand.io/",
    source: "",
    description:
      "AI platform powered by RAG technology — complex data interfaces, real-time product management, and enterprise-grade UX.",
    featured: true,
  },
  {
    title: "Sav",
    thumbnail: "/images/savings.png",
    landingpage: "https://savings-calculator-roan.vercel.app/",
    portal: "",
    source: "https://github.com/akramnarejo/savings-calculator",
    description:
      "Multi-period savings calculator — financial planning UI with clear data visualization and input validation.",
    featured: true,
  },
  {
    title: "Bailey Motors",
    thumbnail: "/images/bailey-motors.png",
    landingpage: "https://next-js-five-lemon-14.vercel.app/",
    source: "",
    portal: "",
    description:
      "Family-focused car lot and repair shop site built for trust, transparency, and lasting customer relationships.",
    featured: false,
  },
  {
    title: "URL Keeper",
    thumbnail: "/images/url-keeper.png",
    landingpage:
      "https://chromewebstore.google.com/detail/url-keeper/ccelhojgnbidfilmdgpfnoncffmiogik",
    portal: "",
    source: "https://github.com/akramnarejo/url-keeper#url-keepr",
    description:
      "Open-source Chrome extension to save and organize URLs with a lightweight, focused interface.",
    featured: false,
  },
  {
    title: "skvllpkvnz",
    thumbnail: "/images/nft.png",
    landingpage: "https://akramnarejo.github.io/skvllpkvz/",
    source: "https://github.com/akramnarejo/skvllpkvz",
    portal: "",
    description: "NFT landing page with responsive layout and motion design.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
