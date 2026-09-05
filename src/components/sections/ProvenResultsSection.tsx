"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "Verified",
    label: "Quality-First Operations",
    description: "Multi-stage QA and compliance checking across every deliverable.",
  },
  {
    value: "Dedicated",
    label: "Technical Engagement",
    description: "Responsive support and transparent project communication.",
  },
  {
    value: "Rigorous",
    label: "Design Accuracy",
    description: "Detailed code compliance and drawing verification.",
  },
  {
    value: "Agile",
    label: "Project Execution",
    description: "Streamlined coordination from kickoff to client handover.",
  },
];

export default function ProvenResultsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Proven Impact
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            PROVEN IMPACT
          </h2>
          <p className="text-sm text-[var(--color-muted)] sm:text-base">
            Real results across operations, engagement, and intelligence
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`flex h-full flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 ease-out hover:scale-[1.05] hover:border-[var(--color-primary)] hover:shadow-[0_24px_50px_var(--color-primary-glow)] ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              <div className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                {metric.label}
              </div>
              <p className="text-sm text-[var(--color-muted)]">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
