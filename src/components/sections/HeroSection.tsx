"use client";

import { useEffect, useMemo, useState } from "react";

const SLIDE_INTERVAL_MS = 5000;

const slides = [
  {
    image: "/Low-Carbon-Ammonia-image1.webp",
    heading: "Engineering the Future of Intelligent Infrastructure",
    subtext:
      "Delivering advanced engineering solutions powered by AI to transform industrial systems.",
  },
  {
    image: "/lhqkttgb_image1.png",
    heading: "Designing the Future of Intelligent Engineering",
    subtext:
      "Leveraging advanced CAD and AI-driven workflows for scalable and precise engineering solutions.",
  },
  {
    image: "/Low-Carbon-Ammonia-image1.webp",
    heading: "Precision Engineering. Digitally Driven.",
    subtext:
      "Transforming complex systems into efficient, optimized, and intelligent designs.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeIndex]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * 0.15);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="relative flex h-[75vh] min-h-[520px] items-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={slide.heading}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translateY(${parallaxOffset}px) scale(${isActive ? 1.05 : 1})`,
                transitionProperty: "opacity, transform",
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-6 py-24 sm:px-10">
        <div
          key={activeSlide.heading}
          className="fade-in-up flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left sm:pl-12 lg:pl-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Engineering Services
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {activeSlide.heading.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={
                  word.toLowerCase() === "intelligent" ||
                  word.toLowerCase() === "digitally"
                    ? "text-[var(--color-primary)]"
                    : ""
                }
              >
                {word}
                {index < activeSlide.heading.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </h1>
          <p className="text-base text-slate-200 sm:text-lg">
            {activeSlide.subtext}
          </p>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Learn More
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(activeIndex - 1)}
        className="absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:inline-flex"
      >
        <span className="text-lg">&#8249;</span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(activeIndex + 1)}
        className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:inline-flex"
      >
        <span className="text-lg">&#8250;</span>
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[var(--color-primary)] shadow-[0_0_12px_rgba(15,118,110,0.7)]"
                : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
