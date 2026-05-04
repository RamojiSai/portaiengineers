"use client";

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
      className="relative flex min-h-screen items-center overflow-hidden bg-[linear-gradient(135deg,#e0f2fe,#f8fbff)] px-6 py-20 sm:px-10 sm:py-24"
      id="platform"
    >
      <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
      <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                About
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Advanced Engineering Powered by AI
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
                We combine automation, data intelligence, and rigorous
                engineering practices to deliver faster, safer, and more
                predictable outcomes.
              </p>
            </div>
            <div className="space-y-6 text-sm text-slate-600 sm:text-base">
            <p>
              Port Engineers Pvt. Ltd. is a technology-driven engineering and CAD
              services company delivering precision-focused solutions for
              complex industrial projects. With a strong foundation in plant
              engineering, design automation, and industrial drafting, we
              support global industries with safe, scalable, and cost-effective
              engineering outcomes.
            </p>
            <p>
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
                  className="rounded-full border border-white/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              Learn More
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="fade-in-up rounded-3xl border border-white/60 bg-white/70 p-15 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
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
