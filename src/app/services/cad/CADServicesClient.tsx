"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";

const NODE_SWITCH_MS = 10000;

const cadNodes = [
  {
    key: "cad-pfd",
    slug: "pfd",
    title: "PFD",
    angle: 270,
    overview:
      "Process Flow Diagrams (PFD) represent the overall flow of materials, energy, and major equipment within a plant. It gives a simplified, high-level view of how the system operates.",
    whyItMatters:
      "PFD acts as the foundation of process design. It helps teams understand system flow before moving into detailed engineering. This ensures alignment between process, mechanical, and operations teams.",
    whatWeDo:
      "Port AI Engineers create clear, structured, and industry-standard PFDs that improve decision-making and reduce early-stage project risks.",
    positionClass: "max-w-sm",
  },
  {
    key: "cad-pid",
    slug: "pid",
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
    slug: "isometric",
    title: "Isometric",
    angle: 0,
    overview:
      "Isometric drawings provide detailed piping layouts with dimensions, weld points, and fabrication data.",
    whyItMatters:
      "They are directly used for fabrication and site installation.",
    whatWeDo:
      "We create fabrication-ready isometric drawings that ensure precision and reduce costly rework.",
    positionClass: "max-w-sm",
  },
  {
    key: "cad-ga",
    slug: "general-arrangement",
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
    slug: "conversion",
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
    slug: "training",
    title: "CAD Training",
    angle: 135,
    overview: "Hands-on CAD training focused on real engineering applications.",
    whyItMatters: "Skilled professionals improve project quality and speed.",
    whatWeDo: "We train teams with practical, industry-focused CAD skills.",
    positionClass: "left-8 bottom-12",
  },
  {
    key: "cad-automation",
    slug: "automation",
    title: "CAD Automation",
    angle: 180,
    overview: "Automation tools that reduce repetitive drafting work.",
    whyItMatters: "Improves speed, accuracy, and consistency.",
    whatWeDo: "We build smart automation solutions to boost productivity and reduce errors.",
    positionClass: "w-full h-auto max-h-screen object-contain",
  },
  {
    key: "cad-fire",
    slug: "fire-evacuation",
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

const cadPillars = [
  { value: "Rigorous", label: "Drawing Accuracy & QA" },
  { value: "Agile", label: "CAD Project Delivery" },
  { value: "Standardized", label: "Drafting Automation" },
  { value: "Dedicated", label: "Technical Support" },
];

function CADServicesPageContent() {
  const [cadActiveIndex, setCadActiveIndex] = useState(0);
  const [isCadVisible, setIsCadVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);

  const activeCadNode = useMemo(
    () => cadNodes[cadActiveIndex],
    [cadActiveIndex]
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCadActiveIndex((prev) => (prev + 1) % cadNodes.length);
    }, NODE_SWITCH_MS);

    return () => window.clearTimeout(timeoutId);
  }, [cadActiveIndex]);

  const isCadActive = (index: number) => index === cadActiveIndex;

  const handleSelectCadNode = (index: number) => {
    setCadActiveIndex(index);
  };

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
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Section 1: Interactive CAD Wheel */}
      <section
        id="cad-flow"
        className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div
            className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${
              isCadVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="px-2 text-[var(--color-muted)]">/</span>
              <Link href="/services/" className="hover:underline">Services</Link>
              <span className="px-2 text-[var(--color-muted)]">/</span>
              <span className="text-[var(--color-text)]">CAD</span>
            </nav>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Industrial CAD Drafting & Design Services
            </h1>
            <p className="text-base text-[var(--color-muted)] sm:text-lg">
              Advanced CAD drafting, automation, and design solutions built to
              improve engineering productivity and technical accuracy.
            </p>
          </div>

          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Desktop Circular Wheel (Viewport >= 768px) */}
            <div className="hidden md:flex relative items-center justify-center lg:justify-start lg:-ml-10">
              <div className="relative h-[300px] w-[300px] sm:h-[520px] sm:w-[520px] [--node-radius:110px] [--center-edge-offset:48px] sm:[--node-radius:190px] sm:[--center-edge-offset:84px]">
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] text-center text-xs font-semibold text-[var(--color-on-primary)] shadow-sm sm:h-40 sm:w-40 sm:text-sm">
                  CAD Services
                </div>

                {cadNodes.map((node, index) => (
                  <div
                    key={`${node.key}-connector`}
                    className="absolute left-1/2 top-1/2 h-1 rounded-full"
                    style={{
                      width: "calc(var(--node-radius) - var(--center-edge-offset))",
                      transform: `translateY(-50%) rotate(${node.angle}deg) translateX(var(--center-edge-offset))`,
                      transformOrigin: "left center",
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-[var(--color-border)]" />
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
                    onClick={() => handleSelectCadNode(index)}
                    className={`absolute left-1/2 top-1/2 flex h-14 w-14 items-center justify-center rounded-full border px-1 text-center text-[8px] font-semibold uppercase leading-[1.1] tracking-normal transition-all duration-300 sm:h-24 sm:w-24 sm:text-[11px] sm:tracking-[0.08em] ${
                      isCadActive(index)
                        ? "scale-105 border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm"
                        : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                    style={{
                      transform: `translate(-50%, -50%) rotate(${node.angle}deg) translateX(var(--node-radius)) rotate(${-node.angle}deg)`,
                    }}
                  >
                    {node.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* Mobile Service Selector (Viewport < 768px) */}
              <div className="flex md:hidden flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    CAD Capabilities ({cadActiveIndex + 1}/{cadNodes.length})
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
                  {cadNodes.map((node, index) => (
                    <button
                      key={`mobile-${node.key}`}
                      type="button"
                      onClick={() => handleSelectCadNode(index)}
                      className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200 min-h-[44px] ${
                        isCadActive(index)
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm"
                          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-border-strong)]"
                      }`}
                    >
                      {node.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active CAD Service Card */}
              <article
                key={activeCadNode.key}
                className="fade-in-up rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-10"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                    {activeCadNode.title}
                  </h2>
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
                    href={`/services/cad/${activeCadNode.slug}/`}
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
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
        </div>
      </section>

      {/* Crawlable HTML Grid for All 8 CAD Services */}
      <section className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10 sm:py-20 border-t border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              CAD Capabilities
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Comprehensive CAD &amp; Drafting Solutions
            </h2>
            <p className="max-w-3xl text-sm text-[var(--color-muted)] sm:text-base">
              Explore all fabrication-ready drafting, conversion, and automation capabilities delivered by Port AI Engineers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cadNodes.map((node) => (
              <Link
                key={node.key}
                href={`/services/cad/${node.slug}/`}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_12px_30px_var(--color-card-shadow)]"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                    {node.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                    {node.overview}
                  </p>
                  <p className="text-xs text-[var(--color-muted-strong)]">
                    {node.whatWeDo}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] transition-transform group-hover:translate-x-1">
                  View {node.title} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-choose-services"
        className="w-full bg-[var(--color-bg)] px-6 py-20 sm:px-10 sm:py-24 border-t border-[var(--color-border)]"
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
                  className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
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

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
              >
                Inquire About CAD Services &rarr;
              </Link>
              <Link
                href="/services/engineering/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Explore Engineering Services &rarr;
              </Link>
            </div>
          </div>

          <div
            className={`grid gap-4 sm:grid-cols-2 transition-all duration-700 ease-out ${
              isWhyVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-6 opacity-0"
            }`}
          >
            {cadPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_12px_30px_var(--color-card-shadow)]"
              >
                <div className="text-3xl font-semibold text-[var(--color-primary)] sm:text-4xl">
                  {pillar.value}
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {pillar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CADServicesClient() {
  return (
    <Suspense fallback={null}>
      <CADServicesPageContent />
    </Suspense>
  );
}
