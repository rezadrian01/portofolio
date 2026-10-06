import { useTranslations } from "next-intl";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

import { Link } from "@/i18n/navigation";
import { PERSONAL } from "@/common/constants/personal";

const ContactCTASection = () => {
  const t = useTranslations("HomePage.contact_cta");

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-8 py-14 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-neutral-600 dark:text-neutral-400">
          {t("subtext")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80"
          >
            {t("cta")}
          </Link>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-sm text-neutral-500 underline underline-offset-2 transition-colors hover:text-primary dark:text-neutral-400"
          >
            {PERSONAL.email}
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-5">
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
      </div>
    </section>
  );
};

export default ContactCTASection;
