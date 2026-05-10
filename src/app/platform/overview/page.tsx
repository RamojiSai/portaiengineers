"use client";

import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.18 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const deliverCards = [
  {
    title: "Intelligent Engineering",
    description: "Precision engineering solutions for modern industrial systems.",
  },
  {
    title: "CAD Innovation",
    description: "Advanced drafting, automation, and digital engineering workflows.",
  },
  {
    title: "Process Optimization",
    description: "Engineering systems designed for efficiency and scalability.",
  },
  {
    title: "Industrial Automation",
    description: "AI-powered workflows that reduce manual effort and improve productivity.",
  },
];

const coreStrengths = [
  { value: "99%", label: "Engineering Quality" },
  { value: "3x", label: "Faster Delivery" },
  { value: "24/7", label: "Technical Support" },
  { value: "AI-Driven", label: "Smart Engineering Execution" },
];

export default function OverviewPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Section 1 — Hero Overview */}
      <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-6 py-20 sm:px-10 sm:py-24">
        <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Overview
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
                Engineering Intelligence. Industrial Excellence.
              </h1>
              <p className="text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Port AI Engineers Pvt. Ltd. combines advanced engineering expertise with
                AI-driven innovation to deliver smarter industrial designs, faster
                execution, and scalable engineering solutions for modern enterprises.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2 — Who We Are */}
      <section className="w-full bg-[var(--color-primary-soft)] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Who We Are
                </h2>
                <div className="space-y-5 text-base text-[var(--color-muted)] sm:text-lg">
                  <p>
                    Port AI Engineers Pvt. Ltd. is an engineering and technology-driven
                    company focused on transforming industrial workflows through
                    intelligent engineering solutions.
                  </p>
                  <p>
                    We specialize in plant engineering, CAD services, process
                    optimization, and automation-driven design systems that help
                    organizations improve efficiency, reduce engineering complexity, and
                    accelerate project delivery.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
                <div className="space-y-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    Built For Enterprise Delivery
                  </div>
                  <div className="space-y-3">
                    {["Engineering-led execution", "Automation + AI enablement", "Operational clarity at scale"].map(
                      (pill) => (
                        <div
                          key={pill}
                          className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
                        >
                          <span className="text-sm font-medium text-[var(--color-muted)]">
                            {pill}
                          </span>
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary-glow)]" />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3 — Mission & Vision */}
      <section className="w-full bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Mission
                </div>
                <p className="mt-4 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  To empower industries with intelligent engineering solutions
                </p>
                <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
                  To empower industries with intelligent engineering solutions that
                  improve operational efficiency, drive innovation, and create long-term
                  industrial value.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Vision
                </div>
                <p className="mt-4 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  To become a global leader in engineering innovation
                </p>
                <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
                  To become a global leader in engineering innovation by combining
                  engineering excellence with AI, automation, and digital
                  transformation.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — What We Deliver */}
      <section className="w-full bg-[var(--color-primary-soft)] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  What We Deliver
                </h2>
                <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
                  Enterprise-ready engineering outputs designed to improve speed,
                  quality, and operational predictability.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {deliverCards.map((card) => (
                  <div
                    key={card.title}
                    className="group rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-bg))]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-3">
                        <h3 className="text-base font-semibold text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                          {card.title}
                        </h3>
                        <p className="text-sm text-[var(--color-muted)]">{card.description}</p>
                      </div>
                      <div className="mt-1 h-10 w-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary-glow)] transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:shadow-[0_0_18px_var(--color-primary-glow)]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 2l2.2 6.8H21l-5.6 4.1 2.1 6.7L12 16l-5.5 3.6 2.1-6.7L3 8.8h6.8L12 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 5 — Core Strengths */}
      <section className="w-full bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Core Strengths
                </h2>
                <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
                  Reliable delivery, measurable quality, and always-on technical support.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {coreStrengths.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left shadow-[0_20px_50px_var(--color-card-shadow)]"
                  >
                    <div className="text-3xl font-semibold tracking-tight text-[var(--color-primary)]">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 6 — Why Port AI */}
      <section className="w-full bg-[var(--color-primary-soft)] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeInSection>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Why Port AI Engineers
                </h2>
                <div className="space-y-5 text-base text-[var(--color-muted)] sm:text-lg">
                  <p>
                    We don’t just deliver engineering drawings—we build intelligent
                    engineering ecosystems.
                  </p>
                  <p>
                    Our approach combines technical expertise, digital precision, and
                    automation intelligence to help businesses reduce project risks,
                    improve execution speed, and achieve engineering excellence at scale.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
                <div className="space-y-6">
                  {["Trust & Compliance", "Engineering Depth", "AI + Automation"].map(
                    (item) => (
                      <div key={item} className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] text-[var(--color-primary)]">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-[var(--color-text)]">
                            {item}
                          </div>
                          <div className="text-sm text-[var(--color-muted)]">
                            Built for enterprise teams that demand reliability,
                            repeatability, and measurable outcomes.
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
