import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsFacebook as FacebookIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { SocialMediaProps } from "../types/socialMedia";

const iconSize = 35;
const backgroundIconSize = 275;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "Stay in Touch",
    description: "Reach out via email for any inquiries or collaborations.",
    name: "gmail",
    href: "mailto:ahmadadrian324@gmail.com",
    icon: <SiGmail size={iconSize} />,
    backgroundIcon: <SiGmail size={backgroundIconSize} />,
    textColor: "text-red-300",
    backgroundColor: "bg-red-300",
    borderColor: "border-red-300",
    backgroundGradientColor: "bg-gradient-to-b from-red-700 to-red-900",
    colSpan: "md:col-span-2",
    isShow: true,
  },
  {
    title: "Follow My Journey",
    description: "Stay updated with my latest posts and stories on Instagram.",
    name: "instagram",
    href: "https://www.instagram.com/rezadrian._",
    icon: <InstagramIcon size={iconSize} />,
    backgroundIcon: <InstagramIcon size={backgroundIconSize} />,
    textColor: "text-purple-200",
    backgroundColor: "bg-purple-200",
    borderColor: "border-purple-200",
    backgroundGradientColor:
      "bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500",
    isShow: true,
  },
  {
    title: "Let's Connect",
    description:
      "Connect for collaboration or explore my professional experience.",
    name: "linkedin",
    href: "https://www.linkedin.com/in/ahmad-reza-adrian/",
    icon: <LinkedinIcon size={iconSize} />,
    backgroundIcon: <LinkedinIcon size={backgroundIconSize} />,
    textColor: "text-sky-300",
    backgroundColor: "bg-sky-300",
    borderColor: "border-sky-300",
    backgroundGradientColor: "bg-gradient-to-b from-sky-700 to-sky-900",
    isShow: true,
  },
  {
    title: "Explore the Code",
    description: "Explore the source code for all my projects on GitHub.",
    name: "github",
    href: "https://github.com/rezadrian01",
    icon: <GithubIcon size={iconSize} />,
    backgroundIcon: <GithubIcon size={backgroundIconSize} />,
    textColor: "text-slate-400",
    backgroundColor: "bg-slate-400",
    borderColor: "border-slate-400",
    backgroundGradientColor: "bg-gradient-to-b from-slate-900 to-slate-950",
    isShow: true,
  },
  {
    title: "Add Me on Facebook",
    description: "Connect with me on Facebook.",
    name: "facebook",
    href: "https://www.facebook.com/reza.adrian.5458498",
    icon: <FacebookIcon size={iconSize} />,
    backgroundIcon: <FacebookIcon size={backgroundIconSize} />,
    textColor: "text-blue-300",
    backgroundColor: "bg-blue-300",
    borderColor: "border-blue-300",
    backgroundGradientColor: "bg-gradient-to-b from-blue-700 to-blue-900",
    isShow: true,
  },
];
