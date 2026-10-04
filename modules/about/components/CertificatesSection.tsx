import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsPatchCheck, BsBoxArrowUpRight } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { CERTIFICATES } from "@/common/constants/certificates";

const CertificatesSection = () => {
  const t = useTranslations("AboutPage.certificates");

  return (
    <section className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} icon={<BsPatchCheck />} />
      </div>

      {CERTIFICATES.length === 0 ? (
        <EmptyState message={t("no_data")} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="space-y-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                  {cert.year}
                </p>
                <h4 className="font-medium text-neutral-900 dark:text-neutral-50">
                  {cert.name}
                </h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {cert.issuer}
                </p>
              </div>
              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  {t("view_credential")} <BsBoxArrowUpRight size={11} />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
