"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import SectionHeading from "@/common/components/elements/SectionHeading";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message: string;
}

const ContactForm = () => {
  const t = useTranslations("ContactPage.form");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:border-primary";

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Honeypot: hidden from people, filled in by bots */}
        <input
          {...register("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <input
              {...register("name", { required: true, maxLength: 100 })}
              placeholder={t("input_name")}
              className={inputCls}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{t("input_name")} is required</p>
            )}
          </div>
          <div>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder={t("input_email")}
              type="email"
              className={inputCls}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">Valid email is required</p>
            )}
          </div>
        </div>

        <input
          {...register("phone", { maxLength: 30 })}
          placeholder={t("input_phone")}
          className={inputCls}
        />

        <div>
          <textarea
            {...register("message", { required: true, maxLength: 3000 })}
            placeholder={t("input_message")}
            rows={5}
            className={`${inputCls} resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{t("input_message")} is required</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity dark:text-neutral-950 hover:opacity-80 disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : t("button")}
        </button>

        {status === "success" && (
          <p className="rounded-lg bg-green-50 px-4 py-2.5 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
            {t("error")}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
