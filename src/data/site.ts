export const meta = {
  title: "Stefano Tranquillini",
  description:
    "CO-Founder @ CHINO.io · PhD Computer Science · Backend systems, compliance infrastructure, distributed architecture.",
};

export const nav = [
  { label: "ciao", href: "#ciao" },
  { label: "about", href: "#about" },
  { label: "entrepreneur", href: "#entrepreneur" },
  { label: "tech", href: "#tech" },
  { label: "researcher", href: "#researcher" },
  { label: "real life", href: "#real-life" },
];

export const projects = [
  { label: "vince", href: "https://vince.chino.io" },
  { label: "yourtime", href: "https://yourtime.io" },
  { label: "janus", href: "#" },
];

export const social = [
  {
    label: "linkedin",
    href: "https://linkedin.com/in/stefanotranquillini",
    abbr: "LI",
  },
  {
    label: "github",
    href: "https://github.com/stefanotranquillini",
    abbr: "GH",
  },
  { label: "email", href: "mailto:stefano@chino.io", abbr: "EM" },
  {
    label: "keybase",
    href: "https://keybase.io/stefanotranquillini",
    abbr: "KB",
  },
];

export const ciao = {
  prompt: "> Hello, world.",
  name: "STEFANO TRANQUILLINI",
  role: "CO-Founder @ CHINO.io",
  taglines: ["PhD in Computer Science", "INTP-T · Trento, Italy"],
};

export const about = {
  bio: [
    "My name is Stefano Tranquillini, but everybody calls me Stefano.",
    "I'm a computer scientist who crossed from academic research into entrepreneurship — and never fully left either world.",
    "INTP-T by nature. I like building systems, untangling hard problems, and occasionally overengineering things just to understand how they work at a fundamental level.",
  ],
  personality: "INTP-T",
  timeline: [
    { year: "2025–03", event: "CHINO.io acquired by Gruppo Sicuro" },
    { year: "2014–12", event: "Founded CHINO.io" },
    {
      year: "2014–03",
      event: "PhD defended · Computer Science · University of Trento",
    },
    {
      year: "2011",
      event: "Master in Computer Science — University of Trento",
    },
    {
      year: "2008",
      event: "Bachelor in Computer Science — University of Trento",
    },
  ],
};

export const entrepreneur = {
  company: "CHINO.io",
  role: "CO-Founder",
  period: "2014 — 2025",
  tagline: "law × security × technology",
  description: [
    "Started as a research idea: what if compliance infrastructure was a product, not a consulting project? Ten years later, CHINO.io served healthcare, fintech, and enterprise clients handling sensitive data under GDPR, HIPAA, and beyond.",
    "Building a company from scratch taught me that good architecture is not just technical — it's organizational, legal, commercial. The full stack.",
  ],
  highlight: "Acquired by Gruppo Sicuro · March 2025",
  pillars: [
    "Compliance API for sensitive data management",
    "GDPR & HIPAA certified infrastructure",
    "Healthcare, fintech, enterprise verticals",
    "10+ years at the law-tech intersection",
  ],
};

export const tech = {
  intro:
    "Backend systems, distributed architecture, compliance infrastructure.",
  skills: [
    { category: "languages", items: ["Python"] },
    {
      category: "backend",
      items: ["Django", "Django REST Framework", "REST API Design", "FastAPI"],
    },
    {
      category: "architecture",
      items: [
        "System Design",
        "Distributed Systems",
        "Microservices",
        "Monolith",
      ],
    },
    {
      category: "data & infra",
      items: ["PostgreSQL", "Docker", "Kubernetes", "Redis"],
    },
    {
      category: "compliance",
      items: ["GDPR", "HIPAA", "Access Control", "Security Engineering"],
    },
  ],
  philosophy:
    "Advanced knowledge of programming paradigms for backend systems. Ability to design complex application architectures in both monoliths or microservices that can scale horizontally or vertically without downtime.",
};

export const researcher = {
  degree: "PhD in Computer Science",
  institution: "University of Trento",
  postdoc: "PostDoc researcher · University of Trento",
  industry: ["SAP Research", "HP Labs"],
  areas: [
    "Business Process Management",
    "Wireless Sensor Networks",
    "Crowdsourcing & Collective Intelligence",
    "ICT Innovation",
  ],
  teaching: [
    "ICT for Innovation — University of Trento",
    "Business Process Management — University of Trento",
  ],
  reflection:
    "The research side never left. Systems thinking, rigorous analysis, and curiosity about how things work at a fundamental level — that's the thread connecting academia to entrepreneurship.",
};

export const realLife = {
  intro: "Outside the keyboard.",
  interests: [
    { name: "Photography", icon: "camera" },
    { name: "Running", icon: "running" },
    { name: "Hiking", icon: "mountain" },
    // { name: 'Swimming', icon: 'waves' },
    { name: "Snowboarding", icon: "snowflake" },
    { name: "Golf", icon: "golf" },
    { name: "Sci-Fi & Biography", icon: "book" },
    { name: "LEGO", icon: "lego" },
    { name: "Video Games", icon: "gamepad" },
    { name: "Personal Finance", icon: "chart" },
    { name: "Crypto", icon: "crypto" },
  ],
  quote:
    '"I don\'t know why people are so keen to put the details of their private life in public; they forget that invisibility is a superpower."',
  quoteAuthor: "Banksy",
};
