"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const NODE_SWITCH_MS = 3500;
const COUNT_DURATION_MS = 1400;
const CONNECTOR_LENGTH_PX = 160;
const CENTER_EDGE_OFFSET_PX = 84;

const nodes = [
  {
    key: "process",
    title: "Process Engineering",
    angle: 270,
    overview: "End-to-end process design from concept to execution.",
    whyItMatters: "Ensures efficient, cost-effective, and safe operations.",
    whatWeDo: "We optimize processes for performance, safety, and reliability.",
    positionClass: "left-1/2 top-4 -translate-x-1/2",
  },
  {
    key: "piping-3d",
    title: "3D Piping Design",
    angle: 315,
    overview: "3D models of piping systems for visualization and analysis.",
    whyItMatters: "Helps detect issues before construction begins.",
    whatWeDo: "We deliver accurate 3D models for better planning and execution.",
    positionClass: "right-6 top-16",
  },
  {
    key: "piping-eng",
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
    title: "Greenfield Projects",
    angle: 135,
    overview: "Complete engineering support for new plant development.",
    whyItMatters: "Ensures proper planning and smooth execution.",
    whatWeDo: "We deliver end-to-end engineering solutions for new facilities.",
    positionClass: "left-6 bottom-16",
  },
  {
    key: "brownfield",
    title: "Brownfield Projects",
    angle: 180,
    overview: "Upgrading and modifying existing plants.",
    whyItMatters: "Improves performance without stopping operations.",
    whatWeDo: "We provide smart upgrade solutions with minimal disruption.",
    positionClass: "left-2 top-1/2 -translate-y-1/2",
  },
  {
    key: "power-plants",
    title: "Power Plants",
    angle: 225,
    overview: "Engineering design support for power generation facilities.",
    whyItMatters: "Improves reliability, efficiency, and safety across the plant lifecycle.",
    whatWeDo: "We provide multidisciplinary engineering deliverables for power plant projects.",
    positionClass: "left-6 top-16",
  },
];

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

const metricTargets = [
  { value: 98, suffix: "%", label: "Design Accuracy" },
  { value: 10, suffix: "x", label: "Faster Engineering Delivery" },
  { value: 60, suffix: "%", label: "Reduced Rework" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

export default function EngineeringServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cadActiveIndex, setCadActiveIndex] = useState(0);
  const [isEngineeringVisible, setIsEngineeringVisible] = useState(false);
  const [isCadVisible, setIsCadVisible] = useState(false);
  const [isWhyVisible, setIsWhyVisible] = useState(false);
  const [metricValues, setMetricValues] = useState<number[]>(
    metricTargets.map(() => 0)
  );

  const activeNode = useMemo(() => nodes[activeIndex], [activeIndex]);
  const activeCadNode = useMemo(
    () => cadNodes[cadActiveIndex],
    [cadActiveIndex]
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, NODE_SWITCH_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCadActiveIndex((prev) => (prev + 1) % cadNodes.length);
    }, NODE_SWITCH_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const isActive = (index: number) => index === activeIndex;
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
    <div className="min-h-screen bg-white text-[var(--color-text)]">
      <section
        id="engineering-flow"
        className="w-full bg-[#F5FAFF] px-6 py-16 sm:px-10"
      >
        <div className="mx-auto w-full max-w-6xl">
        <div
          className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${
            isEngineeringVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0"
          }`}
        >
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Engineering Services
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            Delivering intelligent engineering solutions designed for industrial
            precision, scalability, and operational excellence.
          </p>
        </div>

        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex items-center justify-start lg:-ml-10">
            <div className="relative h-[460px] w-[460px] sm:h-[520px] sm:w-[520px]">
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6D7EFF] bg-[#8494FF] text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(132,148,255,0.55)] sm:h-40 sm:w-40">
                Engineering Services
              </div>

              {nodes.map((node, index) => (
                <div
                  key={`${node.key}-connector`}
                  className="absolute left-1/2 top-1/2 h-1 rounded-full"
                  style={{
                    width: `${CONNECTOR_LENGTH_PX}px`,
                    transform: `translateY(-50%) rotate(${node.angle}deg) translateX(${CENTER_EDGE_OFFSET_PX}px)`,
                    transformOrigin: "left center",
                  }}
                >
                  <div className="h-full w-full rounded-full bg-[#CBD5E1]" />
                  <div
                    className={`absolute left-0 top-0 h-full w-full origin-left rounded-full bg-[#8494FF] transition-transform duration-700 ${
                      isActive(index) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </div>
              ))}

              {nodes.map((node, index) => (
                <button
                  key={node.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`absolute ${node.positionClass} flex h-20 w-20 items-center justify-center rounded-full border text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 sm:h-24 sm:w-24 ${
                    isActive(index)
                      ? "scale-105 border-[#6D7EFF] bg-[#8494FF] text-white shadow-[0_0_20px_rgba(132,148,255,0.6)]"
                      : "border-[#D6DEFF] bg-white text-[#1E293B] hover:scale-105 hover:border-[#8494FF] hover:bg-[#EEF2FF] hover:text-[#8494FF] hover:shadow-[0_0_16px_rgba(132,148,255,0.35)]"
                  }`}
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
            </article>
          </div>
        </div>
        </div>
      </section>

      <section
        id="cad-flow"
        className="w-full bg-[#F5FAFF] px-6 py-20 sm:px-10 sm:py-24"
      >
        <div
          className={`mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center transition-all duration-700 ease-out ${
            isCadVisible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            CAD Services
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Advanced CAD drafting, automation, and design solutions built to
            improve engineering productivity and technical accuracy.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative flex items-center justify-start lg:-ml-10">
            <div className="relative h-[480px] w-[480px] sm:h-[560px] sm:w-[560px]">
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#6D7EFF] bg-[#8494FF] text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(132,148,255,0.55)] sm:h-40 sm:w-40">
                CAD Services
              </div>

              {cadNodes.map((node, index) => (
                <div
                  key={`${node.key}-connector`}
                  className="absolute left-1/2 top-1/2 h-1 -translate-y-1/2 origin-left"
                  style={{
                    width: `${CONNECTOR_LENGTH_PX}px`,
                    transform: `translateY(-50%) rotate(${node.angle}deg) translateX(${CENTER_EDGE_OFFSET_PX}px)`,
                  }}
                >
                  <div className="h-full w-full rounded-full bg-[#CBD5E1]" />
                  <div
                    className={`absolute left-0 top-0 h-full w-full origin-left rounded-full bg-[#8494FF] transition-transform duration-700 ${
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
                  className={`absolute ${node.positionClass} flex h-20 w-20 items-center justify-center rounded-full border text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 sm:h-24 sm:w-24 ${
                    isCadActive(index)
                      ? "scale-105 border-[#6D7EFF] bg-[#8494FF] text-white shadow-[0_0_20px_rgba(132,148,255,0.6)]"
                      : "border-[#D6DEFF] bg-white text-[#1E293B] hover:scale-105 hover:border-[#8494FF] hover:bg-[#EEF2FF] hover:text-[#8494FF] hover:shadow-[0_0_16px_rgba(132,148,255,0.35)]"
                  }`}
                >
                  {node.title}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <article
              key={activeCadNode.key}
              className="fade-in-up rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_22px_60px_rgba(15,23,42,0.1)] sm:p-10"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {activeCadNode.title}
                </h3>
                <p className="text-base text-slate-600">
                  {activeCadNode.overview}
                </p>
              </div>

              <div className="mt-6 space-y-2 border-l-4 border-[#8494FF] pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                  Why It Matters
                </p>
                <p className="text-base text-slate-600">
                  {activeCadNode.whyItMatters}
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                  What We Do
                </p>
                <p className="text-base text-slate-600">
                  {activeCadNode.whatWeDo}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="why-choose-services"
        className="w-full bg-[#f8faff] px-6 py-20 sm:px-10 sm:py-24"
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
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose Our{" "}
                <span className="text-[#8494FF]">Engineering Services</span>
              </h2>
              <p className="text-base text-slate-600 sm:text-lg">
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
                className="rounded-2xl border border-[#8494FF]/15 bg-[rgba(132,148,255,0.08)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="text-3xl font-semibold text-[#8494FF] sm:text-4xl">
                  {metricValues[index]}
                  {metric.suffix}
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
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
