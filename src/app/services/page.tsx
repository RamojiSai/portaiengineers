import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createItemListSchema,
} from "../../lib/schema";

export const metadata: Metadata = {
  title: "Engineering & CAD Services Portfolio",
  description:
    "Explore comprehensive engineering and CAD services by Port AI Engineers Pvt. Ltd., spanning plant engineering, 3D piping, stress analysis, and drafting solutions.",
  alternates: {
    canonical: "https://portaiengineers.com/services/",
  },
  openGraph: {
    title: "Engineering & CAD Services Portfolio | Port AI Engineers",
    description:
      "Explore comprehensive engineering and CAD services by Port AI Engineers Pvt. Ltd., spanning plant engineering, 3D piping, stress analysis, and drafting solutions.",
    url: "https://portaiengineers.com/services/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/hero/engineering-services-1.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Engineering & CAD Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & CAD Services Portfolio | Port AI Engineers",
    description:
      "Explore comprehensive engineering and CAD services by Port AI Engineers Pvt. Ltd., spanning plant engineering, 3D piping, stress analysis, and drafting solutions.",
    images: ["/images/hero/engineering-services-1.webp"],
  },
};

export default function ServicesIndexPage() {
  const serviceCategories = [
    {
      title: "Engineering Services",
      description:
        "Comprehensive plant engineering, 3D piping design, process engineering, instrumentation & control, and piping stress analysis.",
      href: "/services/engineering",
      badge: "Plant & Systems",
      highlights: [
        "Process Engineering",
        "3D Piping Engineering",
        "Piping Stress Analysis",
        "Greenfield & Brownfield",
      ],
    },
    {
      title: "CAD Services",
      description:
        "Fabrication-ready drafting, P&ID, PFD, isometric drawings, general arrangement layouts, CAD conversion, and automation.",
      href: "/services/cad",
      badge: "Drafting & Automation",
      highlights: [
        "P&ID and PFD Diagrams",
        "Isometric Drawings",
        "General Arrangement (GA)",
        "CAD Conversion & Automation",
      ],
    },
  ];

  const engineeringDisciplines = [
    {
      title: "Process Engineering",
      slug: "process",
      description:
        "End-to-end process design from concept to execution, optimizing systems for performance, safety, and reliability.",
    },
    {
      title: "3D Piping Engineering",
      slug: "piping-3d",
      description:
        "Accurate 3D models of piping systems for spatial visualization, clash detection, and construction planning.",
    },
    {
      title: "Piping Engineering",
      slug: "piping-engineering",
      description:
        "Complete piping system design including material specifications, routing layouts, and technical documentation.",
    },
    {
      title: "Instrumentation & Control",
      slug: "instrumentation",
      description:
        "Design of intelligent control systems and field instrumentation for automated, safe plant operations.",
    },
    {
      title: "Piping Stress Analysis",
      slug: "piping-stress-analysis",
      description:
        "Comprehensive stress analysis under pressure, thermal variation, and structural loads to ensure system integrity.",
    },
    {
      title: "Greenfield Projects",
      slug: "greenfield-projects",
      description:
        "Complete multidisciplinary engineering and layout planning for newly developed industrial facilities.",
    },
    {
      title: "Brownfield Projects",
      slug: "brownfield-projects",
      description:
        "Smart plant upgrade, modification, and revamp solutions executed with minimal disruption to operations.",
    },
    {
      title: "Power Plants",
      slug: "power-plants",
      description:
        "Multidisciplinary engineering deliverables and design support across the power generation plant lifecycle.",
    },
  ];

  const cadDisciplines = [
    {
      title: "PFD (Process Flow Diagrams)",
      slug: "pfd",
      description:
        "Clear, structured diagrams representing the overall flow of materials, energy, and major equipment across plant systems.",
    },
    {
      title: "P&ID (Piping & Instrumentation)",
      slug: "pid",
      description:
        "Standards-compliant diagrams detailing piping lines, valves, instrumentation loops, and operational control logic.",
    },
    {
      title: "Isometric Drawings",
      slug: "isometric",
      description:
        "Fabrication-ready isometric drawings with precise dimensions, weld points, and bill of materials data.",
    },
    {
      title: "General Arrangement (GA)",
      slug: "general-arrangement",
      description:
        "Optimized plant layout and equipment arrangement drawings that prioritize accessibility, safety, and workflow.",
    },
    {
      title: "CAD Conversion",
      slug: "conversion",
      description:
        "Accurate digitization of legacy paper blueprints, PDF drawings, and conceptual sketches into modern CAD formats.",
    },
    {
      title: "CAD Training",
      slug: "training",
      description:
        "Hands-on, practical CAD training programs focused on real-world industrial drafting and engineering applications.",
    },
    {
      title: "CAD Automation",
      slug: "automation",
      description:
        "Custom drafting automation routines and workflows that boost drawing throughput and ensure drafting consistency.",
    },
    {
      title: "Fire Evacuation CAD",
      slug: "fire-evacuation",
      description:
        "Code-compliant safety layout drawings detailing emergency exits, egress pathways, and emergency equipment.",
    },
  ];

  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/services/#webpage",
    url: "https://portaiengineers.com/services/",
    name: "Engineering & CAD Services Portfolio",
    description:
      "Explore comprehensive engineering and CAD services by Port AI Engineers Pvt. Ltd., spanning plant engineering, 3D piping, stress analysis, and drafting solutions.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
  ]);

  const itemListSchema = createItemListSchema({
    name: "Engineering & CAD Services Divisions",
    items: [
      {
        name: "Engineering Services",
        url: "https://portaiengineers.com/services/engineering/",
      },
      {
        name: "CAD Services",
        url: "https://portaiengineers.com/services/cad/",
      },
    ],
  });

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={itemListSchema} />
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl space-y-16">
          {/* Hero Header */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Services Portfolio
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Industrial Engineering & CAD Services
            </h1>
            <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
              Port AI Engineers delivers comprehensive industrial plant engineering and fabrication-ready CAD drafting services. From front-end process conceptualization and 3D piping layouts to detailed isometric drafting and design automation, our multidisciplinary teams deliver code-compliant, precision solutions for complex industrial facilities worldwide.
            </p>
          </div>

          {/* Primary Division Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="group flex flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                      {category.badge}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                      {category.title}
                    </h2>
                    <p className="text-base text-[var(--color-muted)]">
                      {category.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                    {category.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:underline"
                  >
                    Explore {category.title}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Disciplines Grid */}
          <div className="space-y-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Plant & Systems
                </span>
                <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                  Core Engineering Disciplines
                </h2>
              </div>
              <Link
                href="/services/engineering"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View Engineering Services Division &rarr;
              </Link>
            </div>
            <p className="max-w-3xl text-sm text-[var(--color-muted)] sm:text-base">
              Explore specialized multidisciplinary capabilities delivering end-to-end plant engineering, structural stress validation, and system integration.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringDisciplines.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/engineering/${item.slug}/`}
                  className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_12px_30px_var(--color-card-shadow)]"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CAD Disciplines Grid */}
          <div className="space-y-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Drafting & Automation
                </span>
                <h2 className="mt-1 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
                  Specialized CAD & Drafting Capabilities
                </h2>
              </div>
              <Link
                href="/services/cad"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
              >
                View CAD Services Division &rarr;
              </Link>
            </div>
            <p className="max-w-3xl text-sm text-[var(--color-muted)] sm:text-base">
              Fabrication-ready drafting, conversion, and automation solutions developed for rapid turnaround and rigorous technical accuracy.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cadDisciplines.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/cad/${item.slug}/`}
                  className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_12px_30px_var(--color-card-shadow)]"
                >
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                    Learn more &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Project Discussion & Contact CTA */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-surface))] p-8 text-center sm:p-12">
            <div className="mx-auto max-w-2xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                Ready to Discuss Your Engineering or CAD Project?
              </h2>
              <p className="text-sm text-[var(--color-muted)] sm:text-base">
                Whether you need multidisciplinary plant engineering, specialized piping stress validation, or fabrication-ready CAD drawings, Port AI Engineers is ready to collaborate.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://calendar.app.google/4EDU6NFyWQLtrG91A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:opacity-95 hover:shadow-lg"
                >
                  <span>Schedule a Demo</span>
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/services/engineering"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
                >
                  Engineering Services
                </Link>
                <Link
                  href="/services/cad"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
                >
                  CAD Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
