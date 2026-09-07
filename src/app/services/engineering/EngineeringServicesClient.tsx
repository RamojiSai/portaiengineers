"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";

const NODE_SWITCH_MS = 10000;

const nodes = [
  {
    key: "process",
    slug: "process",
    title: "Process Engineering",
    angle: 270,
    overview: "End-to-end process design from concept to execution.",
    whyItMatters: "Ensures efficient, cost-effective, and safe operations.",
    whatWeDo: "We optimize processes for performance, safety, and reliability.",
    positionClass: "left-1/2 top-4 -translate-x-1/2",
  },
  {
    key: "piping-3d",
    slug: "piping-3d",
    title: "3D Piping Engineering",
    angle: 315,
    overview: "3D models of piping systems for visualization and analysis.",
    whyItMatters: "Helps detect issues before construction begins.",
    whatWeDo: "We deliver accurate 3D models for better planning and execution.",
    positionClass: "right-6 top-16",
  },
  {
    key: "piping-eng",
    slug: "piping-engineering",
    title: "Piping Engineering",
    angle: 0,
    overview:
      "Complete piping system design including materials and documentation.",
    whyItMatters: "Ensures durability, safety, and compliance.",
    whatWeDo: "We provide reliable and efficient piping solutions.",
    positionClass: "right-2 top-1/2 -translate-y-1/2",
  },
  {
    key: "instrumentation",
    slug: "instrumentation",
    title: "Instrumentation & Control",
    angle: 45,
    overview: "Design of control systems and instrumentation for automation.",
    whyItMatters: "Essential for monitoring and controlling plant operations.",
    whatWeDo:
      "We build intelligent control systems for safe and optimized performance.",
    positionClass: "right-6 bottom-16",
  },
  {
    key: "stress",
    slug: "piping-stress-analysis",
    title: "Piping Stress Analysis",
    angle: 90,
    overview:
      "Analysis of piping systems under pressure, temperature, and load.",
    whyItMatters: "Ensures structural integrity and long-term reliability.",
    whatWeDo: "We ensure piping systems are safe, stable, and compliant.",
    positionClass: "left-1/2 bottom-4 -translate-x-1/2",
  },
  {
    key: "greenfield",
    slug: "greenfield-projects",
    title: "Greenfield Projects",
    angle: 135,
    overview: "Complete engineering support for new plant development.",
    whyItMatters: "Ensures proper planning and smooth execution.",
    whatWeDo: "We deliver end-to-end engineering solutions for new facilities.",
    positionClass: "left-6 bottom-16",
  },
  {
    key: "brownfield",
    slug: "brownfield-projects",
    title: "Brownfield Projects",
    angle: 180,
    overview: "Upgrading and modifying existing plants.",
    whyItMatters: "Improves performance without stopping operations.",
    whatWeDo: "We provide smart upgrade solutions with minimal disruption.",
    positionClass: "left-2 top-1/2 -translate-y-1/2",
  },
  {
    key: "power-plants",
    slug: "power-plants",
    title: "Power Plants",
    angle: 225,
    overview: "Engineering design support for power generation facilities.",
    whyItMatters: "Improves reliability, efficiency, and safety across the plant lifecycle.",
    whatWeDo: "We provide multidisciplinary engineering deliverables for power plant projects.",
    positionClass: "left-6 top-16",
  },
];

const engineeringGridDisciplines = [
  ...nodes.map((node) => ({
    key: node.key,
    slug: node.slug,
    title: node.title,
    overview: node.overview,
    whatWeDo: node.whatWeDo,
  })),
  {
    key: "plant-layout",
    slug: "plant-layout",
    title: "Industrial Plant Layout",
    overview: "Comprehensive plot planning, equipment layout, and multidiscipline spatial coordination.",
    whatWeDo: "We organize plant equipment, utility corridors, and access envelopes for seamless execution.",
  },
];

const featureBlocks = [
  {
    title: "Intelligent Engineering",
    description:
      "Leverage AI-driven workflows, automation, and engineering intelligence to accelerate project execution with precision.",
  },
  {
    title: "Custom Project Solutions",
    description:
      "Tailored engineering designs built specifically for plant operations, industrial systems, and infrastructure requirements.",
  },
  {
    title: "Enterprise-Grade Quality",
    description:
      "Standards-compliant engineering deliverables focused on safety, reliability, operational efficiency, and long-term scalability.",
  },
];

const engineeringPillars = [
  { value: "Precision", label: "Design Accuracy & QA" },
  { value: "Agile", label: "Streamlined Delivery" },
  { value: "Proactive", label: "Rework Prevention" },
  { value: "Dedicated", label: "Technical Support" },
];

function EngineeringServicesPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEngineeringVisible, setIsEngineeringVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);

  const activeNode = useMemo(() => nodes[activeIndex], [activeIndex]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, NODE_SWITCH_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  const isActive = (index: number) => index === activeIndex;

  const handleSelectNode = (index: number) => {
    setActiveIndex(index);
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
    const section = document.getElementById("engineering-flow");
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEngineeringVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Section 1: Interactive Engineering Wheel */}
      <section
        id="engineering-flow"
        className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div
            className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${isEngineeringVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0"
              }`}
          >
            <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="px-2 text-[var(--color-muted)]">/</span>
              <Link href="/services/" className="hover:underline">Services</Link>
              <span className="px-2 text-[var(--color-muted)]">/</span>
              <span className="text-[var(--color-text)]">Engineering</span>
            </nav>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Plant & Piping Engineering Services
            </h1>
            <p className="text-base text-[var(--color-muted)] sm:text-lg">
              Delivering intelligent engineering solutions designed for industrial
              precision, scalability, and operational excellence.
            </p>
          </div>

          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Desktop Circular Wheel (Viewport >= 768px) */}
            <div className="hidden md:flex relative items-center justify-center lg:justify-start lg:-ml-10">
              <div className="relative h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] [--node-radius:120px] [--center-edge-offset:56px] sm:[--node-radius:190px] sm:[--center-edge-offset:84px]">
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] text-center text-sm font-semibold text-[var(--color-on-primary)] shadow-sm sm:h-40 sm:w-40">
                  Engineering Services
                </div>

                {nodes.map((node, index) => (
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
                      className={`absolute left-0 top-0 h-full w-full origin-left rounded-full bg-[var(--color-primary)] transition-transform duration-700 ${isActive(index) ? "scale-x-100" : "scale-x-0"
                        }`}
                    />
                  </div>
                ))}

                {nodes.map((node, index) => (
                  <button
                    key={node.key}
                    type="button"
                    onClick={() => handleSelectNode(index)}
                    className={`absolute left-1/2 top-1/2 flex h-14 w-14 items-center justify-center rounded-full border px-1 text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.06em] transition-all duration-300 sm:h-24 sm:w-24 sm:text-[11px] sm:tracking-[0.08em] ${isActive(index)
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
                    Engineering Disciplines ({activeIndex + 1}/{nodes.length})
                  </span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
                  {nodes.map((node, index) => (
                    <button
                      key={`mobile-${node.key}`}
                      type="button"
                      onClick={() => handleSelectNode(index)}
                      className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-200 min-h-[44px] ${
                        isActive(index)
                          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm"
                          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-border-strong)]"
                      }`}
                    >
                      {node.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Service Card */}
              <article
                key={activeNode.key}
                className="fade-in-up rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-10"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                    {activeNode.title}
                  </h2>
                  <p className="text-base text-[var(--color-muted)]">{activeNode.overview}</p>
                </div>

                <div className="mt-6 space-y-2 border-l-4 border-[var(--color-primary)] pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    Why It Matters
                  </p>
                  <p className="text-base text-[var(--color-muted)]">{activeNode.whyItMatters}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    What We Do
                  </p>
                  <p className="text-base text-[var(--color-muted)]">{activeNode.whatWeDo}</p>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/services/engineering/${activeNode.slug}/`}
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

      {/* Section 2: Crawlable HTML Grid for All Engineering Disciplines */}
      <section className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10 sm:py-20 border-t border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Engineering Disciplines
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Comprehensive Plant Engineering Capabilities
            </h2>
            <p className="max-w-3xl text-sm text-[var(--color-muted)] sm:text-base">
              Explore our core multidisciplinary capabilities delivering end-to-end process design, 3D piping routing, stress analysis, and plant engineering deliverables.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringGridDisciplines.map((item) => (
              <Link
                key={item.key}
                href={`/services/engineering/${item.slug}/`}
                className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_12px_30px_var(--color-card-shadow)]"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                    {item.overview}
                  </p>
                  <p className="text-xs text-[var(--color-muted-strong)]">
                    {item.whatWeDo}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] transition-transform group-hover:translate-x-1">
                  View {item.title} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Integrated CAD Support for Engineering Projects */}
      <section className="w-full bg-[var(--color-bg)] px-6 py-16 sm:px-10 sm:py-20 border-t border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 shadow-[0_16px_40px_var(--color-card-shadow)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Integrated Capabilities
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                  Fabrication-Ready CAD Support for Engineering Projects
                </h2>
                <p className="text-sm text-[var(--color-muted)] sm:text-base leading-relaxed">
                  Every industrial engineering project relies on accurate, code-compliant documentation. Port AI Engineers supports plant engineering deliverables with comprehensive CAD drafting capabilities — including PFDs, P&amp;IDs, fabrication-ready isometrics, equipment arrangement drawings, and design automation.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/services/cad/"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
                  >
                    Explore CAD Services &rarr;
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    Contact Our Engineers &rarr;
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-text)]">
                  Key CAD Deliverables
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--color-muted)]">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>Process Flow &amp; P&amp;ID Diagrams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>Fabrication-Ready Piping Isometrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>General Arrangement (GA) Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                    <span>Legacy CAD Conversion &amp; Automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Section */}
      <section
        id="why-choose-services"
        className="w-full bg-[var(--color-bg)] px-6 py-20 sm:px-10 sm:py-24 border-t border-[var(--color-border)]"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`space-y-8 transition-all duration-700 ease-out ${isWhyVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-6 opacity-0"
              }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-[var(--color-primary)]">Engineering Services</span>
              </h2>
              <p className="text-base text-[var(--color-muted)] sm:text-lg">
                We combine advanced engineering expertise, AI-powered automation,
                and industry-standard design practices to deliver scalable,
                precise, and future-ready engineering solutions.
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

            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Inquire About Engineering Services &rarr;
              </Link>
            </div>
          </div>

          <div
            className={`grid gap-4 sm:grid-cols-2 transition-all duration-700 ease-out ${isWhyVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-6 opacity-0"
              }`}
          >
            {engineeringPillars.map((pillar) => (
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

export default function EngineeringServicesClient() {
  return (
    <Suspense fallback={null}>
      <EngineeringServicesPageContent />
    </Suspense>
  );
}

