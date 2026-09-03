import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../lib/schema";

export const metadata: Metadata = {
  title: "Engineering Intelligence Platform",
  description:
    "Discover Port AI Engineers' technology-driven platform, integrating design automation and data intelligence for complex industrial projects.",
  alternates: {
    canonical: "https://portaiengineers.com/platform/",
  },
  openGraph: {
    title: "Engineering Intelligence Platform | Port AI Engineers",
    description:
      "Discover Port AI Engineers' technology-driven platform, integrating design automation and data intelligence for complex industrial projects.",
    url: "https://portaiengineers.com/platform/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/hero/lightimg.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Engineering Intelligence Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Intelligence Platform | Port AI Engineers",
    description:
      "Discover Port AI Engineers' technology-driven platform, integrating design automation and data intelligence for complex industrial projects.",
    images: ["/images/hero/lightimg.webp"],
  },
};

export default function PlatformIndexPage() {
  const platformSections = [
    {
      title: "Platform Overview",
      description:
        "Learn about our engineering philosophy, mission, vision, and how we combine domain expertise with AI-enabled workflows.",
      href: "/platform/overview/",
      badge: "Vision & Architecture",
    },
    {
      title: "Features & Capabilities",
      description:
        "Explore specialized engineering design, technical consultancy, project management support, and skilled manpower solutions.",
      href: "/platform/features/",
      badge: "Core Capabilities",
    },
  ];

  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/platform/#webpage",
    url: "https://portaiengineers.com/platform/",
    name: "Engineering Intelligence Platform",
    description:
      "Discover Port AI Engineers' technology-driven platform, integrating design automation and data intelligence for complex industrial projects.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Platform", url: "https://portaiengineers.com/platform/" },
  ]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Intelligent Platform
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Engineering Intelligence at Scale
            </h1>
            <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
              Port AI Engineers bridges technical domain depth with modern digital execution. Explore our platform architecture and service capabilities designed for modern enterprise delivery.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {platformSections.map((section) => (
              <div
                key={section.title}
                className="group flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
              >
                <div className="space-y-4">
                  <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                    {section.badge}
                  </span>
                  <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                    {section.title}
                  </h2>
                  <p className="text-base text-[var(--color-muted)]">
                    {section.description}
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:underline"
                  >
                    View {section.title}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_12%,var(--color-bg)),var(--color-bg))] p-8 shadow-[0_16px_40px_var(--color-card-shadow)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  Consult With Our Engineering Platform Specialists
                </h3>
                <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                  Discuss how our intelligent workflows, design automation, and technical consultancy can accelerate your industrial delivery.
                </p>
              </div>
              <Link
                href="/contact/"
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Contact Engineering Team &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
