"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import RotatingText from "@/common/components/elements/RotatingText";
import { Link } from "@/i18n/navigation";
import { PERSONAL } from "@/common/constants/personal";

const HeroSection = () => {
  const t = useTranslations("HomePage.hero");

  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center">
      <div className="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:justify-between md:gap-12">
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-5 md:max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="mb-1 text-sm font-medium tracking-widest text-neutral-500 dark:text-neutral-400">
              {t("greeting")}
            </p>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              {PERSONAL.name}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-2xl font-semibold text-primary sm:text-3xl">
              <RotatingText
                texts={PERSONAL.roles}
                mainClassName="text-primary"
                rotationInterval={2500}
                splitBy="words"
              />
            </div>
          </div>

          <p className="max-w-md leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t("tagline")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              {t("cta_projects")}
            </Link>
            <a
              href={PERSONAL.cvUrl}
              download
              className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-primary dark:hover:text-primary"
            >
              {t("cta_cv")}
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${PERSONAL.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
              aria-label="GitHub"
            >
              <BsGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-reza-adrian/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/rezadrian._"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </a>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className="relative flex justify-center md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary/30 ring-4 ring-primary/10 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/images/reza.jpg"
              alt={PERSONAL.name}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 288px, 320px"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 -z-10 rounded-full border-2 border-dashed border-primary/20" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <BsChevronDown
          size={22}
          className="text-neutral-400 dark:text-neutral-500"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
