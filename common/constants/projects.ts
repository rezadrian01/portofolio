export type ProjectCategory = "Full-Stack" | "Frontend" | "Backend";

export interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    slug: "intervyou",
    title: "Intervyou",
    description:
      "AI-powered interview preparation platform with CV analysis, ATS optimization, and mock interview features trusted by 4,800+ users.",
    category: "Full-Stack",
    techStack: ["Next.js", "MySQL", "PostgreSQL", "Google Gemini API", "TypeScript"],
    thumbnail: "/images/projects/intervyou.webp",
    liveUrl: "https://intervyou.me",
    featured: true,
  },
  {
    slug: "transpo",
    title: "Transpo",
    description:
      "An online transportation booking platform serving the Malang Raya area, connecting passengers with affordable inter-city travel services across Indonesia.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "MySQL", "Google Maps API", "Prisma", "TailwindCSS"],
    thumbnail: "/images/projects/transpo.webp",
    liveUrl: "https://transpo.id",
    featured: true,
  },
  {
    slug: "simakin",
    title: "Simakin",
    description:
      "AI-powered Quran memorization platform with a personal AI coach that gives real-time feedback on tajweed, makhroj, and fluency with streak tracking.",
    category: "Full-Stack",
    techStack: ["Remix", "Prisma", "MySQL", "Google Gemini API", "Google Cloud Platform", "TailwindCSS"],
    thumbnail: "/images/projects/simakin.webp",
    featured: true,
  },
  {
    slug: "safera",
    title: "Safera",
    description:
      "Streaming donation platform for Indonesian content creators featuring transparent fees, instant bank transfers, QRIS payment, and AI-powered gambling content moderation.",
    category: "Full-Stack",
    techStack: ["NestJS", "Next.js", "Google Gemini API", "MySQL", "TypeScript"],
    thumbnail: "/images/projects/safera.webp",
    featured: true,
  },
  {
    slug: "sekawan-pitu",
    title: "PT Sekawan Pitu",
    description:
      "Company profile and e-commerce website for a free-range livestock farm in Sukabumi, selling fresh eggs, meat, and dairy with same-day local delivery.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    thumbnail: "/images/projects/sekawan-pitu.webp",
    liveUrl: "https://pt-sekawan-pitu.vercel.app",
    featured: false,
  },
  {
    slug: "bipa",
    title: "BIPA",
    description:
      "Learning Management System designed for structured, interactive Indonesian language teaching for foreign speakers (Bahasa Indonesia bagi Penutur Asing).",
    category: "Full-Stack",
    techStack: ["Laravel", "React.js", "TypeScript", "MySQL", "Eloquent", "TailwindCSS"],
    thumbnail: "/images/projects/bipa.webp",
    featured: false,
  },
  {
    slug: "lbc-laundry",
    title: "LBC Laundry",
    description:
      "A full-stack laundry management system for tracking orders, customers, and payments with a real-time dashboard for business owners.",
    category: "Full-Stack",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
    thumbnail: "/images/projects/laundry-management.webp",
    // githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
  {
    slug: "kasirku",
    title: "Kasirku",
    description:
      "A point-of-sale and cashier management web application for small businesses, featuring product management, transaction history, and sales reporting.",
    category: "Full-Stack",
    techStack: ["React.js", "Laravel", "MySQL", "TailwindCSS"],
    thumbnail: "/images/projects/kasirku.webp",
    githubUrl: "https://github.com/rezadrian01/Kasirku",
    featured: false,
  },
  {
    slug: "book-worm",
    title: "Book Worm",
    description:
      "An online bookstore application with user authentication, shopping cart, order management, and admin panel.",
    category: "Full-Stack",
    techStack: ["Next.js", "MySQL", "TailwindCSS"],
    thumbnail: "/images/projects/book-worm.webp",
    // githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
  {
    slug: "sijawi",
    title: "SiJawi",
    description:
      "A frontend application for a Javanese cultural education platform, featuring interactive lessons and quizzes.",
    category: "Frontend",
    techStack: ["React.js", "TypeScript", "TailwindCSS", "Vite"],
    thumbnail: "/images/projects/sijawi.webp",
    // githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
  {
    slug: "mern-online-shop",
    title: "MERN Online Shop",
    description:
      "A full-featured e-commerce platform built with the MERN stack, including product management, cart, and payment integration.",
    category: "Full-Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "/images/projects/online-shop.webp",
    // githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
];
