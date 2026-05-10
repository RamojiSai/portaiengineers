"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setAnimate(true);
    }, 150);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-6 py-20 sm:px-10 sm:py-24"
      id="platform"
    >
      <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
      <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                About
              </span>
              <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Advanced Engineering Powered by AI
              </h2>
              <p className="text-justify text-base text-[var(--color-muted)] sm:text-lg">
                We combine automation, data intelligence, and rigorous
                engineering practices to deliver faster, safer, and more
                predictable outcomes.
              </p>
            </div>
            <div className="space-y-6 text-sm text-[var(--color-muted)] sm:text-base">
            <p className="text-justify">
              Port Engineers Pvt. Ltd. is a technology-driven engineering and CAD
              services company delivering precision-focused solutions for
              complex industrial projects. With a strong foundation in plant
              engineering, design automation, and industrial drafting, we
              support global industries with safe, scalable, and cost-effective
              engineering outcomes.
            </p>
            <p className="text-justify">
              Teams gain real-time visibility into design dependencies, risks,
              and change impacts, ensuring every deliverable aligns with
              compliance and operational goals.
            </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Automation-first execution",
                "Predictive design insights",
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
            <Link
              href="/platform/overview"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              Learn More
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="fade-in-up rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-15 shadow-[0_20px_50px_var(--color-card-shadow)]">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                <span>Our Pulse</span>
                <span className="text-[var(--color-primary)]">Active</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Automation", value: "95%" },
                  { label: "Quality", value: "98%" },
                  { label: "Delivery", value: "99%" },
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm font-medium text-[var(--color-text)]">
                      <span>{metric.label}</span>
                      <span>{metric.value}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-1000 ease-out"
                        style={{ width: animate ? metric.value : "0%" }}
                      />
                    </div>
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
