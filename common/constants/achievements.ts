export type AchievementType = "Certificate" | "Award" | "Competition";

export interface Achievement {
  name: string;
  type: AchievementType;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    name: "JavaScript Algorithms and Data Structures",
    type: "Certificate",
    issuer: "freeCodeCamp",
    date: "Jan 2023",
    description:
      "Completed 300+ hours of JavaScript fundamentals covering data structures and algorithms.",
    credentialUrl: "https://freecodecamp.org",
  },
  {
    name: "Responsive Web Design",
    type: "Certificate",
    issuer: "freeCodeCamp",
    date: "Feb 2023",
    description:
      "Mastered HTML, CSS, Flexbox, CSS Grid, and accessibility fundamentals.",
    credentialUrl: "https://freecodecamp.org",
  },
  {
    name: "Next.js 14 & React - The Complete Guide",
    type: "Certificate",
    issuer: "Udemy",
    date: "Mar 2024",
    description:
      "In-depth course covering App Router, server components, data fetching, and deployment.",
  },
  {
    name: "3rd Place, Web Development Hackathon",
    type: "Competition",
    issuer: "Universitas Brawijaya",
    date: "Nov 2023",
    description:
      "Built a full-stack task management app within 24 hours and placed 3rd among 40 teams.",
  },
  {
    name: "Best Project, Computer Science Capstone",
    type: "Award",
    issuer: "Universitas Brawijaya",
    date: "Jun 2024",
    description:
      "Recognized for outstanding final-year capstone project in software engineering.",
  },
  {
    name: "Node.js, Express, MongoDB & More",
    type: "Certificate",
    issuer: "Udemy",
    date: "Aug 2023",
    description:
      "Comprehensive back-end development course covering RESTful APIs, authentication, and MongoDB.",
  },
];
