export const profile = {
  name: "Muhammad Akram",
  role: "Senior Frontend Engineer",
  email: "makramnarejo@gmail.com",
  location: "Dubai, UAE",
  timezone: "GST (UTC+4)",
  status: "Open to senior frontend roles",
  links: {
    github: "https://github.com/akramnarejo",
    linkedin: "https://linkedin.com/in/akramnarejo",
    medium: "https://akramnarejo.medium.com",
  },
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: profile.links.medium, external: true },
];

export const hero = {
  eyebrow: "Senior Frontend Engineer",
  headline:
    "Fast, accessible interfaces for products that refuse to be simple.",
  intro:
    "Seven years turning dense workflows — AI agents, payments, logistics, financial data — into interfaces people can use without thinking. I care about the parts most people skip: bundle size, keyboard paths, type safety, and the design decisions that keep a product coherent at scale.",
  meta: [
    { label: "Based in", value: "Dubai, UAE" },
    { label: "Currently", value: "Komut" },
    { label: "Focus", value: "AI · Fintech · Tooling" },
    { label: "Experience", value: "7+ years" },
  ],
};

export const capabilities = [
  {
    title: "Design systems",
    description:
      "Token-driven primitives, accessible component APIs, and documentation teams actually read — so a product stops growing one-off buttons per sprint.",
  },
  {
    title: "Performance",
    description:
      "Core Web Vitals treated as a budget, not an afterthought. Route-level code splitting, sane caching, and rendering strategies chosen per surface.",
  },
  {
    title: "Complex data interfaces",
    description:
      "Tables, dashboards, forms and real-time updates that stay legible under thousands of rows — and stay usable on a mid-range phone.",
  },
  {
    title: "Frontend architecture",
    description:
      "Typed boundaries between API and UI, explicit state ownership, and a developer experience that makes the right path the easy one.",
  },
];

export const principles = [
  {
    title: "Performance is a feature",
    description:
      "A budget agreed with design and product before implementation starts. Interactivity, not just a Lighthouse score.",
  },
  {
    title: "Accessibility is not optional",
    description:
      "Keyboard paths, focus order, contrast and semantics checked as part of the work — not patched before launch.",
  },
  {
    title: "Types are contracts",
    description:
      "Type the boundary between backend and interface once, and let the compiler carry the message everywhere else.",
  },
  {
    title: "Systems beat screens",
    description:
      "Solve the class of problem once in a primitive instead of patching the same layout for the tenth time.",
  },
  {
    title: "Ship in slices",
    description:
      "Thin, reviewable, shippable increments. Short feedback loops beat big-bang launches every time.",
  },
];

export const experience = [
  {
    role: "Product Engineer",
    company: "Komut",
    href: "https://komut.app",
    period: "Current",
    description:
      "Building end-to-end — discovery with design through to production frontend for a social commute platform: routes, matching and live journey sharing.",
    highlights: [
      "Own the product surface end-to-end alongside design",
      "Route matching and live journey state",
      "Mobile-first, real-time interface work",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "AIREV",
    href: "https://airev.ai",
    period: "Previously",
    description:
      "Built On-Demand, an AI platform powered by RAG — agentic workflows, complex data interfaces and enterprise-grade UX.",
    highlights: [
      "Agentic workflow interfaces and streaming output",
      "Data-heavy product management surfaces",
      "Enterprise UX and permission-aware navigation",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Trukkr",
    href: "https://trukkr.ai",
    period: "Previously",
    description:
      "Led frontend for a $6M-funded logistics marketplace — carrier and shipper portals, dashboards and high-volume transactional flows.",
    highlights: [
      "Shipper and carrier portals from scratch",
      "Dashboards over large, noisy operational datasets",
      "High-volume booking and quoting flows",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Trukkr",
    href: "https://trukkr.ai",
    period: "Previously",
    description:
      "Shipped the first versions of the transporter portal and core booking flows.",
    highlights: [
      "Transporter onboarding and portal foundations",
      "Booking flow and form validation",
      "Shared UI patterns reused across the product",
    ],
  },
];

export const stack = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Remix", "Astro"],
  },
  {
    label: "Styling",
    items: ["Tailwind CSS", "CSS Modules", "shadcn/ui", "Material UI"],
  },
  {
    label: "State & data",
    items: ["React Query", "SWR", "Redux Toolkit", "Zustand"],
  },
  {
    label: "Tooling",
    items: ["Vite", "Vitest", "Playwright", "Storybook"],
  },
  {
    label: "Platform",
    items: ["Vercel", "Docker", "Git", "Node.js"],
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  thumbnail: string;
  summary: string;
  detail: string;
  focus: string[];
  links: ProjectLink[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Komut",
    thumbnail: "/images/komut-thumbnail.png",
    summary:
      "Social commute platform — add your route, find people heading the same way, and share the journey.",
    detail:
      "The product I am building now. Route-based matching, live journey state and a mobile-first experience where the interface has to make an unfamiliar concept obvious in seconds.",
    focus: ["Route matching", "Realtime state", "Mobile-first"],
    links: [
      { label: "Live site", href: "https://komut.app" },
      { label: "App", href: "https://app.komut.app/auth/login" },
    ],
    featured: true,
  },
  {
    title: "On-Demand",
    thumbnail: "/images/on-demand.png",
    summary:
      "AI platform for managing complex product workflows — real-time data interfaces and enterprise UX.",
    detail:
      "AI platform powered by RAG. The frontend work was mostly about making agentic workflows legible: streaming output, dense operational data, and an interface that stays usable when the model is uncertain.",
    focus: ["Agentic workflows", "Data tables", "Enterprise UX"],
    links: [
      { label: "Live site", href: "https://on-demand.io/" },
      { label: "App", href: "https://app.on-demand.io/" },
    ],
    featured: true,
  },
  {
    title: "Trukkr",
    thumbnail: "/images/portal-trukkr.png",
    summary:
      "Logistics marketplace connecting carriers with shippers — dashboards, portals and transactional flows.",
    detail:
      "Marketplace for a $6M-funded logistics company. Carrier and shipper portals, operational dashboards over noisy datasets, and high-volume booking flows where every interaction has to survive real-world messiness.",
    focus: ["Dashboards", "Portals", "Transactional forms"],
    links: [
      { label: "Live site", href: "https://trukkr.ai" },
      {
        label: "Transporter portal",
        href: "https://trukkr.ai/transporter-portal",
      },
    ],
    featured: true,
  },
  {
    title: "Bailey Motors",
    thumbnail: "/images/bailey-motors.png",
    summary:
      "Family car lot and repair shop site built for trust and transparency.",
    detail:
      "A marketing site for a family-run business. The work was in the details: fast loads on mobile, honest structure, and content that makes buying a used car feel safe.",
    focus: ["Marketing site", "Performance", "SEO"],
    links: [
      { label: "Live site", href: "https://next-js-five-lemon-14.vercel.app/" },
    ],
    featured: false,
  },
  {
    title: "skvllpkvnz",
    thumbnail: "/images/nft.png",
    summary: "NFT landing page with responsive layout and restrained motion.",
    detail:
      "A landing page experiment: responsive layout, load-on-scroll motion and asset loading tuned to keep the page stable while the visuals settle.",
    focus: ["Landing page", "Motion", "Responsive"],
    links: [
      { label: "Live site", href: "https://akramnarejo.github.io/skvllpkvz/" },
      {
        label: "Code",
        href: "https://github.com/akramnarejo/skvllpkvz",
      },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const openSource = [
  {
    name: "frontend-projects",
    description: "A collection of frontend builds, from fundamentals upward.",
    language: "JavaScript",
    href: "https://github.com/akramnarejo/frontend-projects",
  },
  {
    name: "100jsfunctions",
    description: "100 JavaScript functions, each with a worked solution.",
    language: "TypeScript",
    href: "https://github.com/akramnarejo/100jsfunctions",
  },
  {
    name: "url-keeper",
    description: "Chrome extension for saving and organising URLs.",
    language: "JavaScript",
    href: "https://github.com/akramnarejo/url-keeper",
  },
  {
    name: "savings-calculator",
    description: "Multi-period savings calculator with clear projections.",
    language: "JavaScript",
    href: "https://github.com/akramnarejo/savings-calculator",
  },
  {
    name: "akramnarejo",
    description: "This portfolio — Next.js, TypeScript and Tailwind CSS.",
    language: "TypeScript",
    href: "https://github.com/akramnarejo/akramnarejo",
  },
];

export const contact = {
  heading: "Let's build something fast, accessible and considered.",
  body: "Open to senior frontend and product engineering roles. If you are hiring for a frontend engineer who cares about the last 10% of the interface, I would like to hear from you.",
};
