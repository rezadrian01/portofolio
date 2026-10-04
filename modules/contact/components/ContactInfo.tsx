"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  BsEnvelope,
  BsGeoAlt,
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import { PERSONAL } from "@/common/constants/personal";

const SOCIAL_LINKS = [
  {
    icon: <BsGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/rezadrian01",
  },
  {
    icon: <BsLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-reza-adrian/",
  },
  {
    icon: <BsInstagram size={18} />,
    label: "Instagram",
    href: "https://www.instagram.com/rezadrian._",
  },
  {
    icon: <BsFacebook size={18} />,
    label: "Facebook",
    href: "https://www.facebook.com/reza.adrian.5458498",
  },
];

const ContactInfo = () => {
  const t = useTranslations("ContactPage.info");
  const tContact = useTranslations("ContactPage");

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} />
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t("subtext")}
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-3">
        <a
          href={`mailto:${PERSONAL.email}`}
          className="flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400"
        >
          <BsEnvelope size={16} className="shrink-0 text-primary" />
          {PERSONAL.email}
        </a>
        <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
          <BsGeoAlt size={16} className="shrink-0 text-primary" />
          {PERSONAL.address}
        </div>
      </div>

      {/* Social Links */}
      <div className="pt-2">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
          {tContact("social_media.title")}
        </p>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 transition-colors hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-400"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
