"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { HiX } from "react-icons/hi";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import Portal from "@/common/components/elements/Portal";
import { type ProjectEntry } from "@/common/constants/projects";

interface ProjectModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const t = useTranslations("ProjectsPage");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <Portal>
      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
              className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <button
                onClick={onClose}
                aria-label={t("close")}
                className="absolute right-3 top-3 z-20 rounded-full bg-black/40 p-1.5 text-white transition-colors hover:bg-black/60"
              >
                <HiX size={18} />
              </button>

              <div className="overflow-y-auto">
                {/* Thumbnail (full image at natural aspect ratio, never cropped) */}
                <div className="w-full bg-neutral-100 dark:bg-neutral-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-auto w-full"
                  />
                </div>

                <div className="space-y-4 p-6">
                <span className="inline-block w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {project.category}
                </span>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>

                {/* Tech stack (full list) */}
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {t("tech_stack")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-300"
                      >
                        <BsGithub size={15} /> {t("source_code_text")}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-white transition-opacity dark:text-neutral-950 hover:opacity-90"
                      >
                        <BsBoxArrowUpRight size={13} /> {t("live_demo_text")}
                      </a>
                    )}
                  </div>
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default ProjectModal;
