"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "70%",
    label: "Faster Operations",
    description: "We deliver with quality.",
  },
  {
    value: "24/7",
    label: "Engagement",
    description: "We provide support.",
  },
  {
    value: "90%",
    label: "Data Accuracy",
    description: "Compliance and quality tracking.",
  },
  {
    value: "90 Day",
    label: "Deployment",
    description: "Data collection to client delivery.",
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
      className="relative w-full bg-[linear-gradient(135deg,#e0f2fe,#f8fbff)] px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 text-center">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Proven Impact
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            PROVEN IMPACT
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Real results across operations, engagement, and intelligence
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={`flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:scale-[1.05] hover:border-[#8494FF] hover:shadow-[0_24px_50px_rgba(132,148,255,0.2)] ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              <div className="text-3xl font-semibold text-[#8494FF] sm:text-4xl">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8494FF]">
                {metric.label}
              </div>
              <p className="text-sm text-slate-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
