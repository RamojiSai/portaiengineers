"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const NODE_SWITCH_MS = 60000;
const COUNT_DURATION_MS = 1400;

const cadNodes = [
  {
    key: "cad-pfd",
    title: "PFD",
    angle: 270,
    overview:
      "Process Flow Diagrams (PFD) represent the overall flow of materials, energy, and major equipment within a plant. It gives a simplified, high-level view of how the system operates.",
    whyItMatters:
      "PFD acts as the foundation of process design. It helps teams understand system flow before moving into detailed engineering. This ensures alignment between process, mechanical, and operations teams.",
    whatWeDo:
      "Port AI Engineers create clear, structured, and industry-standard PFDs that improve decision-making and reduce early-stage project risks.",
    positionClass: "left-1/2 top-2 -translate-x-1/2",
  },
  {
    key: "cad-pid",
    title: "P&ID",
    angle: 315,
    overview:
      "Piping & Instrumentation Diagrams (P&ID) provide detailed information about piping systems, valves, instruments, and control logic.",
    whyItMatters:
      "P&IDs are the core reference for construction, operation, and maintenance. Every system detail is defined here.",
    whatWeDo:
      "We deliver highly accurate, standards-compliant P&IDs ensuring safe, reliable, and efficient plant operations.",
    positionClass: "right-8 top-12",
  },
  {
    key: "cad-iso",
    title: "Isometric",
    angle: 0,
    overview:
      "Isometric drawings provide detailed piping layouts with dimensions, weld points, and fabrication data.",
    whyItMatters:
      "They are directly used for fabrication and site installation.",
    whatWeDo:
      "We create fabrication-ready isometric drawings that ensure precision and reduce costly rework.",
    positionClass: "right-1 top-1/2 -translate-y-1/2",
  },
  {
    key: "cad-ga",
    title: "GA",
    angle: 45,
    overview:
      "GA drawings define plant layout, equipment placement, and spatial arrangement.",
    whyItMatters: "It ensures proper utilization of space and smooth workflow.",
    whatWeDo:
      "We design optimized layouts that improve safety, accessibility, and operational efficiency.",
    positionClass: "right-8 bottom-12",
  },
  {
    key: "cad-conversion",
    title: "CAD Conversion",
    angle: 90,
    overview:
      "Conversion of legacy drawings (PDF, paper, sketches) into digital CAD formats.",
    whyItMatters:
      "Digital formats enable easy modification, sharing, and storage.",
    whatWeDo:
      "We provide clean, accurate CAD conversions ready for modern engineering use.",
    positionClass: "left-1/2 bottom-2 -translate-x-1/2",
  },
  {
    key: "cad-training",
    title: "CAD Training",
    angle: 135,
    overview: "Hands-on CAD training focused on real engineering applications.",
    whyItMatters: "Skilled professionals improve project quality and speed.",
    whatWeDo: "We train teams with practical, industry-focused CAD skills.",
    positionClass: "left-8 bottom-12",
  },
  {
    key: "cad-automation",
    title: "CAD Automation",
    angle: 180,
    overview: "Automation tools that reduce repetitive drafting work.",
    whyItMatters: "Improves speed, accuracy, and consistency.",
    whatWeDo: "We build smart automation solutions to boost productivity and reduce errors.",
    positionClass: "left-1 top-1/2 -translate-y-1/2",
  },
  {
    key: "cad-fire",
    title: "Fire Evacuation",
    angle: 225,
    overview:
      "Safety layout drawings showing emergency exits and evacuation paths.",
    whyItMatters: "Critical for emergency preparedness and compliance.",
    whatWeDo:
      "We create clear, compliant evacuation plans that prioritize safety.",
    positionClass: "left-8 top-12",
  },
];

const featureBlocks = [
  {
    title: "Advanced CAD Expertise",
    description:
      "Industry-standard tools and methodologies ensuring precision, compliance, and engineering excellence in every drawing.",
  },
  {
    title: "Speed & Efficiency",
    description:
      "Automated workflows and proven processes that reduce drafting time while maintaining quality and accuracy.",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous review standards, compliance validation, and client-centric design ensuring deliverables exceed expectations.",
  },
];

const metricTargets = [
  { value: 99, suffix: "%", label: "Drawing Accuracy" },
  { value: 50, suffix: "%", label: "Faster CAD Delivery" },
  { value: 80, suffix: "%", label: "Automation Efficiency" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

export default function CADServicesPage() {
  const [cadActiveIndex, setCadActiveIndex] = useState(0);
  const [isCadVisible, setIsCadVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const [metricValues, setMetricValues] = useState<number[]>(
    metricTargets.map(() => 0)
  );

  const activeCadNode = useMemo(
    () => cadNodes[cadActiveIndex],
    [cadActiveIndex]
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCadActiveIndex((prev) => (prev + 1) % cadNodes.length);
    }, NODE_SWITCH_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const isCadActive = (index: number) => index === cadActiveIndex;

  useEffect(() => {
    const section = document.getElementById("why-choose-services");
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = document.getElementById("cad-flow");
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCadVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isWhyVisible) {
      return;
    }

    let rafId: number | null = null;
    const start = window.performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setMetricValues(
        metricTargets.map((metric) => Math.round(metric.value * eased))
      );

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isWhyVisible]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <section
        id="cad-flow"
        className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10 sm:py-20"
      >
        <div
          className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${
            isCadVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            CAD Services
          </h1>
          <p className="text-base text-[var(--color-muted)] sm:text-lg">
            Advanced CAD drafting, automation, and design solutions built to
            improve engineering productivity and technical accuracy.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex items-center justify-start lg:-ml-10">
            <div className="relative h-[480px] w-[480px] sm:h-[560px] sm:w-[560px]">
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] text-center text-sm font-semibold text-[var(--color-on-primary)] shadow-[0_0_24px_var(--color-primary-glow)] sm:h-40 sm:w-40">
                CAD Services
              </div>

              {cadNodes.map((node, index) => (
                <div
                  key={`${node.key}-connector`}
                  className="absolute left-1/2 top-1/2 h-1 w-[140px] -translate-y-1/2 origin-left"
                  style={{ transform: `translateY(-50%) rotate(${node.angle}deg)` }}
                >
                  <div className="h-full w-full rounded-full bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
                  <div
                    className={`absolute left-0 top-0 h-full w-full origin-left rounded-full bg-[var(--color-primary)] transition-transform duration-700 ${
                      isCadActive(index) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              ))}

              {cadNodes.map((node, index) => (
                <button
                  key={node.key}
                  type="button"
                  onClick={() => setCadActiveIndex(index)}
                  className={`absolute ${node.positionClass} flex h-20 w-20 items-center justify-center rounded-full border border-transparent text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-500 sm:h-24 sm:w-24 ${
                    isCadActive(index)
                      ? "scale-105 bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-[0_0_20px_var(--color-primary-glow)]"
                      : "bg-[var(--color-surface)] text-[var(--color-muted-strong)]"
                  }`}
                >
                  {node.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                Home
              </Link>
              <span className="px-2">→</span>
              <Link
                href="/services/cad"
                className="transition-colors hover:text-[var(--color-primary)]"
              >
                Services
              </Link>
              <span className="px-2">→</span>
              <span className="text-[var(--color-text)]">CAD</span>
            </nav>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                CAD Design Services
              </h2>
              <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">
                Professional CAD solutions designed for engineering precision.
              </p>
            </div>

            <article
              key={activeCadNode.key}
              className="fade-in-up rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_22px_60px_var(--color-card-shadow)] sm:p-10"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                  {activeCadNode.title}
                </h3>
                <p className="text-base text-[var(--color-muted)]">
                  {activeCadNode.overview}
                </p>
              </div>

              <div className="mt-6 space-y-2 border-l-4 border-[var(--color-primary)] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Why It Matters
                </p>
                <p className="text-base text-[var(--color-muted)]">
                  {activeCadNode.whyItMatters}
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  What We Do
                </p>
                <p className="text-base text-[var(--color-muted)]">
                  {activeCadNode.whatWeDo}
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={`/services/cad/flow/${activeCadNode.key}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="why-choose-services"
        className="w-full bg-[var(--color-primary-soft)] px-6 py-20 sm:px-10 sm:py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`space-y-8 transition-all duration-700 ease-out ${
              isWhyVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-6 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Why Choose Our <span className="text-[var(--color-primary)]">CAD Services</span>
              </h2>
              <p className="text-base text-[var(--color-muted)] sm:text-lg">
                We deliver precise, automation-driven CAD solutions that accelerate
                engineering workflows while maintaining the highest standards of
                accuracy and compliance.
              </p>
            </div>

            <div className="grid gap-4">
              {featureBlocks.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_40px_var(--color-primary-glow)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] text-[var(--color-primary)]">
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
                        <path d="M12 3v4" />
                        <path d="M12 17v4" />
                        <path d="M3 12h4" />
                        <path d="M17 12h4" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-[var(--color-text)]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`grid gap-4 sm:grid-cols-2 transition-all duration-700 ease-out ${
              isWhyVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-6 opacity-0"
            }`}
          >
            {metricTargets.map((metric, index) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-bg))] p-6 shadow-[0_12px_30px_var(--color-card-shadow)]"
              >
                <div className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                  {metricValues[index]}
                  {metric.suffix}
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
