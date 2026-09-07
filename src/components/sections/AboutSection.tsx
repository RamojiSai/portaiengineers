"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-5 py-16 sm:px-10 sm:py-24"
      id="about"
    >
      <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
      <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6 text-center sm:text-left">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                About
              </span>
              <h2 className="mx-auto text-[clamp(1.35rem,5.5vw,2.25rem)] font-semibold tracking-tight text-[var(--color-text)] sm:mx-0 sm:whitespace-nowrap">
                Advanced Engineering Powered by AI
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base sm:text-justify lg:text-lg">
                We combine automation, data intelligence, and rigorous
                engineering practices to deliver faster, safer, and more
                predictable outcomes.
              </p>
            </div>
            <div className="space-y-5 text-sm text-[var(--color-muted)] sm:text-base lg:text-lg">
              <p className="leading-relaxed sm:text-justify">
                Port AI Engineers Pvt. Ltd. is a technology-driven engineering and CAD
                services company delivering precision-focused solutions for
                complex industrial projects. With a strong foundation in plant
                engineering, design automation, and industrial drafting, we
                support global industries with safe, scalable, and cost-effective
                engineering outcomes.
              </p>
              <p className="leading-relaxed sm:text-justify">
                Teams gain real-time visibility into design dependencies, risks,
                and change impacts, ensuring every deliverable aligns with
                compliance and operational goals.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {[
                "Automation-first execution",
                "Standards-compliant engineering checks",
                "Enterprise-ready delivery",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <Link
                href="/services/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="fade-in-up rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_var(--color-card-shadow)] sm:p-8">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                <span>Operational Focus</span>
                <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="mt-6 space-y-3.5">
                {[
                  {
                    label: "Automation",
                    status: "Standardized CAD",
                    detail: "Standardized CAD workflows & custom tools",
                  },
                  {
                    label: "Quality",
                    status: "ISO 9001:2015",
                    detail: "Multi-level drawing & engineering review",
                  },
                  {
                    label: "Delivery",
                    status: "Milestone-Tracked",
                    detail: "Disciplined scheduling & clear handover",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_50%,transparent)] p-4 transition-all duration-300 hover:border-[var(--color-primary)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-text)]">
                        {item.label}
                      </span>
                      <span className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
