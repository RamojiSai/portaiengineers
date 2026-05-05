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

function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    title: "P&ID Design",
    description:
      "Detailed process and piping diagrams built for industrial operations.",
  },
  {
    title: "Plant Design",
    description:
      "End-to-end plant engineering for industrial infrastructure.",
  },
  {
    title: "Piping Design",
    description: "Intelligent piping layouts for efficient plant performance.",
  },
  {
    title: "2D & 3D Design",
    description: "Advanced modeling and drafting solutions.",
  },
  {
    title: "GA Drawings",
    description: "Equipment layout and general arrangement planning.",
  },
];

const features = [
  "Accuracy & Quality",
  "Cost Effective",
  "Industry Expertise",
  "On-Time Delivery",
  "Client First Approach",
];

const timeline = [
  { step: "01", title: "Requirement Analysis" },
  { step: "02", title: "Process Understanding" },
  { step: "03", title: "PFD & P&ID Development" },
  { step: "04", title: "Design & Drafting (2D/3D)" },
  { step: "05", title: "Review & Optimization" },
  { step: "06", title: "Final Delivery" },
];

const industries = [
  "Oil & Gas",
  "Chemical Plants",
  "Power Plants",
  "Water Treatment",
  "Food Processing",
  "Pharmaceutical",
  "Manufacturing Units",
];

export default function BlogsAllPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="w-full bg-[#0B1F4D] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#D9A441]">
                  ENGINEERING EXCELLENCE
                </div>

                <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Complete Engineering Design Solutions for Modern Industries
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  <span>May 5, 2026</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>8 min read</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>Port AI Engineers</span>
                </div>

                <div className="space-y-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  <div>Port AI Engineers Private Limited</div>
                  <div>portaiengineers.com</div>
                  <div>Engineering &amp; Design</div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(8,19,44,0.6)]">
                <img
                  src="/co2-capture.webp"
                  alt="Engineering plant infrastructure"
                  className="h-64 w-full object-cover sm:h-72 lg:h-[360px]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-6 py-14 sm:px-10 sm:py-16">
        <div className="mx-auto w-full max-w-3xl space-y-14">
          {/* Section 1 — Introduction */}
          <FadeIn>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                In today’s fast-moving industrial landscape, every project demands
                precision, efficiency, and smart design. At Port AI Engineers Private
                Limited, we deliver the engineering foundations that industries rely on
                — from concept to commissioning.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <figure className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img
                src="/Low-Carbon-Ammonia-image1.webp"
                alt="Industrial engineering design collaboration"
                className="h-64 w-full object-cover sm:h-80"
              />
              <figcaption className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Featured insight: Industrial engineering systems designed for scale
              </figcaption>
            </figure>
          </FadeIn>

          {/* Section 2 — Who We Are */}
          <FadeIn>
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Who We Are
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  Port AI Engineers Private Limited is a modern engineering services
                  company built on industrial purpose, delivering reliable, accurate,
                  and customized design solutions for industrial projects of every
                  scale.
                </p>
                <p>
                  We work closely with our clients to understand project-specific
                  requirements and translate them into precise engineering outputs that
                  meet international standards.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Section 3 — Our Core Engineering Services */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Our Core Engineering Services
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9A441]"
                  >
                    <div className="space-y-2">
                      <div className="text-base font-semibold text-slate-900">
                        {card.title}
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Section 4 — Why Leading Industries Choose Us */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Why Leading Industries Choose Us
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4"
                  >
                    <div className="text-sm font-semibold text-slate-900">
                      {feature}
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-[#D9A441]" />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Section 5 — Our Engineering Process */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Our Engineering Process
              </h2>

              <div className="relative pl-6">
                <div className="absolute left-2 top-1.5 h-[calc(100%-6px)] w-px bg-[#E5E7EB]" />
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.step} className="relative">
                      <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full border border-[#D9A441] bg-white" />
                      <div className="rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4">
                        <div className="text-xs font-semibold tracking-[0.22em] text-[#D9A441]">
                          {item.step}
                        </div>
                        <div className="mt-1 text-sm font-semibold text-slate-900 sm:text-base">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Section 6 — Industries We Serve */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Industries We Serve
              </h2>

              <div className="flex flex-wrap gap-3">
                {industries.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Section 7 — Mission & Vision */}
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                Mission &amp; Vision
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                  <div className="text-xs font-semibold tracking-[0.22em] text-[#D9A441]">
                    Mission
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                    To deliver high-quality engineering design solutions that combine
                    industrial precision, safety, and long-term project value.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                  <div className="text-xs font-semibold tracking-[0.22em] text-[#D9A441]">
                    Vision
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                    To become a leading engineering design company recognized globally
                    for innovation, technical accuracy, and industrial reliability.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Final CTA */}
          <FadeIn>
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-7 sm:p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                  Partner With Port AI Engineers
                </h2>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  Whether you are planning a new industrial facility or optimizing an
                  existing system, our engineering team is ready to support your
                  project from concept to completion.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#0B1F4D] px-6 py-3 text-xs font-semibold tracking-[0.22em] text-white transition-colors duration-300 hover:bg-[#0B1F4D]/90"
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
