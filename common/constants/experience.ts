export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract" | "Volunteer";
  startDate: string;
  endDate: string | null;
  description: string[];
  isShow: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "CV Solusi Cipta Media",
    location: "Malang, East Java, Indonesia",
    type: "Full-time",
    startDate: "2026-07",
    endDate: null,
    description: [
      "Building the Inventory Control module of a web-based ERP for a two-plant automotive component manufacturer, replacing a procurement process previously run on dozens of Excel workbooks.",
      "Designed an MRP-style calculation engine that turns approved production plans into per-supplier purchase orders, accounting for BOM requirements, current stock, in-transit orders, safety stock, and packing rules.",
      "Built a background worker that tracks sea and air shipments through browser automation (Playwright) and updates invoice ETAs automatically.",
      "Implemented per-plant data isolation across usage, stock, open POs, and invoices, and validated every calculation against users' legacy Excel workbooks before release.",
    ],
    isShow: true,
  },
  {
    title: "Software Engineer",
    company: "Intervyou.me · PT Intervyou Labs Indonesia",
    companyUrl: "https://intervyou.me",
    location: "Malang, East Java, Indonesia",
    type: "Full-time",
    startDate: "2025-05",
    endDate: "2026-07",
    description: [
      "Architected and shipped the backend infrastructure for Intervyou.me, an AI-powered career development platform serving 8,000+ users.",
      "Designed RESTful APIs and database schemas covering user sessions, mock interview flows, AI scoring, and CV analysis.",
      "Integrated the Google Gemini API for real-time analysis of interview responses, and owned deployment, monitoring, and performance optimization as the user base scaled.",
      "Contributed to the product's acceptance into the NVIDIA Inception and Google for Startups programs.",
    ],
    isShow: true,
  },
  {
    title: "Application Security Intern",
    company: "PT PLN (Persero)",
    location: "Jakarta, Indonesia",
    type: "Internship",
    startDate: "2026-03",
    endDate: "2026-06",
    description: [
      "Drove the migration of PLN's internal application security standard from OWASP ASVS v4.0.3 to v5.0.0, reviewing and adapting 400+ requirements to the organization's infrastructure and policy context.",
      "Conducted security verification sessions across 3 to 4 internal applications through collaborative code reviews covering authentication, session management, and access control.",
      "Identified implementation gaps and communicated concrete remediation expectations to development teams.",
    ],
    isShow: true,
  },
  {
    title: "Teaching Assistant, Information Systems",
    company: "Universitas Negeri Malang",
    companyUrl: "https://um.ac.id",
    location: "Malang, East Java, Indonesia",
    type: "Part-time",
    startDate: "2025-09",
    endDate: "2025-12",
    description: [
      "Mentored student teams building web applications for real-world clients, guiding requirements analysis, architecture decisions, and full-stack implementation.",
      "Reviewed technical deliverables (system logic, architecture, and code quality) and provided structured feedback.",
      "Set up and managed deployment servers for student applications, resolving infrastructure issues during testing and demo phases.",
    ],
    isShow: true,
  },
  {
    title: "Full Stack Developer",
    company: "PT. Transpo Indonesia Mandiri",
    location: "Malang, East Java, Indonesia",
    type: "Contract",
    startDate: "2025-04",
    endDate: "2025-09",
    description: [
      "Led end-to-end development of a vehicle rental and tour package booking platform covering multiple vehicle types and custom travel packages.",
      "Engineered a dynamic pricing model with the Google Maps API that calculates travel distance in real time to automate fare computation, replacing manual estimation.",
      "Built RESTful APIs and designed relational database schemas to manage bookings, vehicle inventory, user data, and pricing logic.",
    ],
    isShow: true,
  },
  {
    title: "Teaching Assistant, Database Systems",
    company: "Universitas Negeri Malang",
    companyUrl: "https://um.ac.id",
    location: "Malang, East Java, Indonesia",
    type: "Part-time",
    startDate: "2025-01",
    endDate: "2025-05",
    description: [
      "Guided students through relational database design, SQL querying, and normalization concepts.",
      "Conducted lab sessions and supported students in completing database projects.",
    ],
    isShow: true,
  },
  {
    title: "Core Team, Web Development Division",
    company: "GDGoC (Google Developer Group on Campus) UM",
    location: "Malang, East Java, Indonesia",
    type: "Volunteer",
    startDate: "2024-10",
    endDate: "2025-06",
    description: [
      "Developed and delivered technical learning modules covering HTML, CSS, JavaScript, and React for the campus developer community.",
      "Co-organized Tech Talk, a technical event with 180+ participants, handling speaker coordination and activity flow.",
    ],
    isShow: true,
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company: "Dicoding Indonesia",
    companyUrl: "https://dicoding.com",
    location: "Remote",
    type: "Part-time",
    startDate: "2024-01",
    endDate: "2024-06",
    description: [
      "Completed an intensive bootcamp covering front-end and back-end development with JavaScript and Node.js.",
      "Built several portfolio projects applying RESTful API design and cloud deployment principles.",
    ],
    isShow: true,
  },
];
