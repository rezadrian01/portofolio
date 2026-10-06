import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import { TbBeach, TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import {
  SiCss,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiReacthookform,
  SiReacttable,
  SiMysql,
  SiMongodb,
  SiAstro,
  SiBun,
  SiYarn,
  SiNestjs,
  SiSupabase,
  SiJest,
  SiDocker,
  SiKotlin,
  SiJetpackcompose,
  SiZod,
  SiShadcnui,
  SiAxios,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import { RiShieldKeyholeFill } from "react-icons/ri";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  TypeScript: {
    icon: <SiTypescript size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  "Vue.js": {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-green-400",
    color: "text-green-400",
    isActive: false,
  },
  "React.js": {
    icon: <SiReact size={iconSize} />,
    background: "bg-cyan-400",
    color: "text-cyan-400",
    isActive: true,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: true,
  },
  "Astro.js": {
    icon: <SiAstro size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  "Shadcn UI": {
    icon: <SiShadcnui size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: true,
  },
  "NextAuth.js": {
    icon: <RiShieldKeyholeFill size={iconSize} />,
    background: "bg-slate-800",
    color: "text-slate-800",
    isActive: true,
  },
  TanStack: {
    icon: <TbBeach size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  "React Table": {
    icon: <SiReacttable size={iconSize} />,
    background: "bg-rose-600",
    color: "text-rose-600",
    isActive: false,
  },
  "React Hook Form": {
    icon: <SiReacthookform size={iconSize} />,
    background: "bg-pink-500",
    color: "text-pink-500",
    isActive: false,
  },
  "React Router": {
    icon: <SiReactrouter size={iconSize} />,
    background: "bg-red-500",
    color: "text-red-500",
    isActive: false,
  },
  Axios: {
    icon: <SiAxios size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  Zod: {
    icon: <SiZod size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-600",
    isActive: true,
  },
  "Framer Motion": {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  Redux: {
    icon: <SiRedux size={iconSize} />,
    background: "bg-violet-500",
    color: "text-violet-500",
    isActive: true,
  },
  Prisma: {
    icon: <SiPrisma size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
    isActive: true,
  },
  "Next.js": {
    icon: <SiNextdotjs size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-50",
    isActive: true,
  },
  "Node.js": {
    icon: <SiNodedotjs size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: true,
  },
  "Express.js": {
    icon: <SiExpress size={iconSize} />,
    background: "bg-neutral-800",
    color: "text-neutral-800",
    isActive: true,
  },
  "Nest.js": {
    icon: <SiNestjs size={iconSize} />,
    background: "bg-rose-600",
    color: "text-rose-600",
    isActive: false,
  },
  Python: {
    icon: <SiPython size={iconSize} />,
    background: "bg-yellow-500",
    color: "text-yellow-500",
    isActive: true,
  },
  FastAPI: {
    icon: <SiFastapi size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
    isActive: true,
  },
  Go: {
    icon: <FaGolang size={iconSize} />,
    background: "bg-sky-500",
    color: "text-sky-500",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-700",
    isActive: true,
  },
  Kotlin: {
    icon: <SiKotlin size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  "Jetpack Compose": {
    icon: <SiJetpackcompose size={iconSize} />,
    background: "bg-cyan-800",
    color: "text-cyan-800",
    isActive: true,
  },
  PostgreSql: {
    icon: <BiLogoPostgresql size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  MySql: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  MongoDb: {
    icon: <SiMongodb size={iconSize} />,
    background: "bg-green-600",
    color: "text-green-600",
    isActive: false,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    isActive: true,
  },
  Jest: {
    icon: <SiJest size={iconSize} />,
    background: "bg-pink-600",
    color: "text-pink-600",
    isActive: false,
  },
  Docker: {
    icon: <SiDocker size={iconSize} />,
    background: "bg-blue-600",
    color: "text-blue-500",
    isActive: true,
  },
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: false,
  },
  Npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-500",
    isActive: true,
  },
  Yarn: {
    icon: <SiYarn size={iconSize} />,
    background: "bg-violet-800",
    color: "text-sky-400",
    isActive: true,
  },
  bun: {
    icon: <SiBun size={iconSize} />,
    background: "bg-orange-100",
    color: "text-yellow-50",
    isActive: true,
  },
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
};
