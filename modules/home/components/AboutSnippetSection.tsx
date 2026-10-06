"use client";

import { useTranslations } from "next-intl";
import { BsArrowRight } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import AnimateCounter from "@/common/components/elements/AnimateCounter";
import { Link } from "@/i18n/navigation";

const STATS = [
  { value: 8, suffix: "K+", labelKey: "stat_users" },
  { value: 10, suffix: "+", labelKey: "stat_projects" },
  { value: 5, suffix: "+", labelKey: "stat_companies" },
  { value: 15, suffix: "+", labelKey: "stat_technologies" },
];

const AboutSnippetSection = () => {
  const t = useTranslations("HomePage.about_snippet");

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Left: Text */}
        <div className="flex flex-col gap-5 lg:flex-1">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {t("label")}
            </p>
            <SectionHeading title={t("heading")} />
          </div>
          <div className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-400">
            <p>{t("paragraph_1")}</p>
            <p>{t("paragraph_2")}</p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-gap hover:gap-2.5"
          >
            {t("read_more")} <BsArrowRight size={14} />
          </Link>
        </div>

        {/* Right: Stats */}
        <div className="grid grid-cols-2 gap-5 lg:w-64 lg:shrink-0">
          {STATS.map((stat) => (
            <div
              key={stat.labelKey}
              className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-center dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                <AnimateCounter total={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnippetSection;
