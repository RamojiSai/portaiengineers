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
    <div className="min-h-screen bg-[#0B1F4D] text-[var(--color-text)]">
      {/* Section 1: Interactive Engineering Wheel */}
      <section
        id="engineering-flow"
        className="w-full bg-[#0B1F4D] px-6 py-16 sm:px-10"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div
            className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${isEngineeringVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0"
              }`}
          >
            <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="px-2 text-white/40">/</span>
              <Link href="/services/" className="hover:underline">Services</Link>
              <span className="px-2 text-white/40">/</span>
              <span className="text-white">Engineering</span>
            </nav>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Plant & Piping Engineering Services
            </h1>
            <p className="text-base text-white/75 sm:text-lg">
              Delivering intelligent engineering solutions designed for industrial
              precision, scalability, and operational excellence.
            </p>
          </div>

          <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex items-center justify-center lg:justify-start lg:-ml-10">
              <div className="relative h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] [--node-radius:120px] [--center-edge-offset:56px] sm:[--node-radius:190px] sm:[--center-edge-offset:84px]">
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6D7EFF] bg-[#8494FF] text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(132,148,255,0.55)] sm:h-40 sm:w-40">
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
                    <div className="h-full w-full rounded-full bg-[#CBD5E1]" />
                    <div
                      className={`absolute left-0 top-0 h-full w-full origin-left rounded-full bg-[#8494FF] transition-transform duration-700 ${isActive(index) ? "scale-x-100" : "scale-x-0"
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
                      ? "scale-105 border-[#6D7EFF] bg-[#8494FF] text-white shadow-[0_0_20px_rgba(132,148,255,0.6)]"
                      : "border-[#D6DEFF] bg-white text-[#1E293B] hover:scale-105 hover:border-[#8494FF] hover:bg-[#EEF2FF] hover:text-[#8494FF] hover:shadow-[0_0_16px_rgba(132,148,255,0.35)]"
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
              <article
                key={activeNode.key}
                className="fade-in-up rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.1)] sm:p-10"
              >
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    {activeNode.title}
                  </h2>
                  <p className="text-base text-slate-600">{activeNode.overview}</p>
                </div>

                <div className="mt-6 space-y-2 border-l-4 border-[#8494FF] pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                    Why It Matters
                  </p>
                  <p className="text-base text-slate-600">{activeNode.whyItMatters}</p>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                    What We Do
                  </p>
                  <p className="text-base text-slate-600">{activeNode.whatWeDo}</p>
                </div>

                <div className="mt-8">
                  <Link
                    href={`/services/engineering/${activeNode.slug}/`}
                    className="group inline-flex items-center gap-2 rounded-full border border-[#8494FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF] transition-colors duration-300 hover:bg-[#8494FF] hover:text-white"
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

      {/* Section 2: Crawlable HTML Grid for All 8 Engineering Disciplines */}
      <section className="w-full bg-[#08173B] px-6 py-16 sm:px-10 sm:py-20 border-t border-slate-800">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8494FF]">
              Engineering Disciplines
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Comprehensive Plant Engineering Capabilities
            </h2>
            <p className="max-w-3xl text-sm text-white/70 sm:text-base">
              Explore our core multidisciplinary capabilities delivering end-to-end process design, 3D piping routing, stress analysis, and plant engineering deliverables.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringGridDisciplines.map((item) => (
              <Link
                key={item.key}
                href={`/services/engineering/${item.slug}/`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#0E265C] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8494FF] hover:shadow-[0_12px_30px_rgba(132,148,255,0.2)]"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#8494FF]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {item.overview}
                  </p>
                  <p className="text-xs text-slate-400">
                    {item.whatWeDo}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8494FF] transition-transform group-hover:translate-x-1">
                  View {item.title} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Integrated CAD Support for Engineering Projects */}
      <section className="w-full bg-[#0B1F4D] px-6 py-16 sm:px-10 sm:py-20 border-t border-slate-800/80">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-slate-700/80 bg-[#0E265C] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                  Integrated Capabilities
                </span>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Fabrication-Ready CAD Support for Engineering Projects
                </h2>
                <p className="text-sm text-slate-300 sm:text-base leading-relaxed">
                  Every industrial engineering project relies on accurate, code-compliant documentation. Port AI Engineers supports plant engineering deliverables with comprehensive CAD drafting capabilities — including PFDs, P&amp;IDs, fabrication-ready isometrics, equipment arrangement drawings, and design automation.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/services/cad/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8494FF] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Explore CAD Services &rarr;
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#8494FF] hover:text-[#8494FF]"
                  >
                    Contact Our Engineers &rarr;
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700/60 bg-[#08173B]/70 p-6 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  Key CAD Deliverables
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8494FF]" />
                    <span>Process Flow &amp; P&amp;ID Diagrams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8494FF]" />
                    <span>Fabrication-Ready Piping Isometrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8494FF]" />
                    <span>General Arrangement (GA) Layouts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8494FF]" />
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
        className="w-full bg-[#0B1F4D] px-6 py-20 sm:px-10 sm:py-24 border-t border-slate-800/80"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className={`space-y-8 transition-all duration-700 ease-out ${isWhyVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-6 opacity-0"
              }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-[#8494FF]">Engineering Services</span>
              </h2>
              <p className="text-base text-white/75 sm:text-lg">
                We combine advanced engineering expertise, AI-powered automation,
                and industry-standard design practices to deliver scalable,
                precise, and future-ready engineering solutions.
              </p>
            </div>

            <div className="grid gap-4">
              {featureBlocks.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200/70 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8494FF] hover:shadow-[0_20px_40px_rgba(132,148,255,0.2)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8494FF]/10 text-[#8494FF]">
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
                      <h3 className="text-base font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">
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
                className="inline-flex items-center gap-2 rounded-full border border-[#8494FF] px-6 py-2.5 text-sm font-semibold text-[#8494FF] transition-colors duration-300 hover:bg-[#8494FF] hover:text-white"
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
                className="rounded-2xl border border-[#8494FF]/15 bg-[rgba(132,148,255,0.08)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="text-3xl font-semibold text-[#8494FF] sm:text-4xl">
                  {pillar.value}
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
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

