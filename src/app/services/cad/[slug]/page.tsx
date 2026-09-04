import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createServiceSchema,
} from "../../../../lib/schema";

type RelatedService = {
  title: string;
  href: string;
};

type ServiceDetail = {
  slug: string;
  title: string;
  h1?: string;
  image: string;
  imageAlt: string;
  description: string[];
  highlights: string[];
  deliverables: string[];
  outcomes: string[];
  relatedServices: RelatedService[];
};

const CAD_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/PFD.jpeg": { width: 1024, height: 724 },
  "/images/services/cad-pid.png": { width: 822, height: 518 },
  "/images/services/piping-isometric.webp": { width: 1536, height: 1024 },
  "/GeneralArrangements.jpg": { width: 1144, height: 755 },
  "/images/services/cad-training.webp": { width: 992, height: 992 },
  "/images/services/cad-conversion.webp": { width: 1024, height: 516 },
  "/images/services/cad-automation.webp": { width: 1536, height: 1024 },
  "/images/services/fire-evacuation.webp": { width: 1536, height: 1024 },
};

const serviceDetails: ServiceDetail[] = [
  {
    slug: "pfd",
    title: "Process Flow Diagram (PFD)",
    image: "/PFD.jpeg",
    imageAlt: "Process flow diagram for industrial engineering",
    description: [
      "Process Flow Diagrams provide a clear, high-level view of how materials and energy move through an industrial system.",
      "We create structured PFDs that capture major equipment, key streams, and operating intent to guide all downstream engineering.",
      "Our drafting team organizes main equipment sequences, fluid stream identifications, and core utility distribution networks with clarity.",
      "Each diagram incorporates standardized equipment tags, basic stream temperature and pressure annotations, and balanced flow indicators.",
      "Our team aligns process assumptions early to reduce rework and keep design reviews efficient across client engineering teams.",
      "Each diagram is delivered with consistent legends and tagging so teams can reference them throughout the project lifecycle, resulting in faster alignment, cleaner handoffs, and confident decision-making.",
    ],
    highlights: [
      "System-level flow clarity and process sequencing",
      "Major equipment tagging and stream identification",
      "Stream and utility balance reference coordination",
      "Review-ready drafting standards and legend consistency",
    ],
    deliverables: [
      "System-level flow diagrams highlighting major process equipment",
      "Stream identification and utility balance reference tables",
      "Standardized process legend, symbology, and tag conventions",
      "Review-ready drafting sheets prepared for detailed design handoff",
    ],
    outcomes: [
      "Faster technical alignment across multi-discipline engineering teams",
      "Cleaner, seamless handoff into detailed P&ID drafting",
      "Reduced revision cycles in early industrial system design",
    ],
    relatedServices: [
      { title: "Piping & Instrumentation Diagram (P&ID)", href: "/services/cad/pid/" },
      { title: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
    ],
  },
  {
    slug: "pid",
    title: "P&ID",
    h1: "Piping & Instrumentation Diagram (P&ID)",
    image: "/images/services/cad-pid.png",
    imageAlt: "Piping and instrumentation diagram",
    description: [
      "P&ID drawings capture the detailed piping, instrumentation, and control logic required to build and operate safely.",
      "We develop P&IDs that are standards-compliant, clearly tagged, and ready for review across engineering teams.",
      "Our drafting specialists document pipeline sizes, valve types, instrumentation bubbles, inline components, and safety relief devices in full detail.",
      "By incorporating process control interlocks, utility connections, and boundary battery limits, our drawings serve as the authoritative coordination blueprint between mechanical, electrical, and automation engineers.",
      "Each sheet is structured for maintenance, operational clarity, and long-term facility asset management.",
      "This ensures your project team has a reliable, audit-ready source of truth from detailed design through field commissioning and continuous operations.",
    ],
    highlights: [
      "Detailed piping line designations, sizes, and spec breaks",
      "Instrument tag references and automated control logic clarity",
      "Valve schedules, safety relief valves, and inline specialty items",
      "Long-term operational reference and standards compliance",
    ],
    deliverables: [
      "Detailed P&ID sheets with control logic and interlock references",
      "Instrument and valve tagging coordination schedules",
      "Utility distribution and battery limit interface diagrams",
      "Review-ready revision tracking and drawing lifecycle packages",
    ],
    outcomes: [
      "Lower commissioning risk through clear control representation",
      "Improved plant safety and regulatory compliance verification",
      "Accurate construction and procurement references across disciplines",
    ],
    relatedServices: [
      { title: "Process Flow Diagram (PFD)", href: "/services/cad/pfd/" },
      { title: "Instrumentation & Control", href: "/services/engineering/instrumentation/" },
      { title: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
    ],
  },
  {
    slug: "isometric",
    title: "Isometric",
    h1: "Piping Isometric Drawings",
    image: "/images/services/piping-isometric.webp",
    imageAlt: "Industrial piping isometric drawing",
    description: [
      "Isometric drawings translate piping layouts into fabrication-ready instructions.",
      "We provide accurate dimensions, weld points, and material callouts that support fast shop work and precise installation.",
      "Each drawing captures 3D piping routing in a single-line isometric projection, detailing exact cut lengths, fitting angles, and elevations.",
      "Our team incorporates complete bills of materials (BOM), spool numbering, weld identification (shop vs. field), and support location coordinates.",
      "We validate constructability against physical routing constraints to prevent site revisions and schedule delays during fabrication and erection.",
      "Each drawing is reviewed for clarity, dimensional accuracy, and compatibility with fabrication shop workflows, reducing rework and improving installation confidence.",
    ],
    highlights: [
      "Fabrication-ready clarity with complete three-dimensional coordinates",
      "Weld and spool accuracy with shop versus field weld distinction",
      "Integrated Bill of Materials (BOM) with cut pipe lengths and fitting data",
      "Reduced field changes and accelerated mechanical assembly",
    ],
    deliverables: [
      "Fully dimensioned piping isometric drawings",
      "Weld identification, spool references, and cut-length schedules",
      "Comprehensive material take-off (MTO) and component details",
      "Field-verified fabrication sheets ready for shop production",
    ],
    outcomes: [
      "Faster shop fabrication with minimized cutting and fitting errors",
      "Fewer site revisions and reduced mechanical installation delays",
      "Improved dimensional accuracy during field erection and tie-in",
    ],
    relatedServices: [
      { title: "3D Piping Engineering", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
      { title: "General Arrangement (GA)", href: "/services/cad/general-arrangement/" },
    ],
  },
  {
    slug: "general-arrangement",
    title: "General Arrangement (GA)",
    image: "/GeneralArrangements.jpg",
    imageAlt: "Industrial general arrangement drawing",
    description: [
      "GA drawings establish how equipment, structures, and access paths fit together on site.",
      "We produce layout plans that support safe access, maintenance, and operational efficiency across industrial facilities.",
      "Our deliverables illustrate physical equipment placement, nozzle positions, structural foundations, maintenance drop areas, and operator transit corridors in plan and section views.",
      "By coordinating equipment centerlines with structural steel and piping headers, our layouts minimize spatial interferences across disciplines.",
      "Each layout is optimized for plant workflow, safety egress, crane access, and long-term equipment maintainability.",
      "This rigorous spatial planning helps industrial projects transition smoothly from conceptual layout to site construction and equipment installation.",
    ],
    highlights: [
      "Optimized spatial coordination across equipment, piping, and structures",
      "Maintenance access, crane reach, and clearance envelope planning",
      "Comprehensive plan views, elevations, and detail cross-sections",
      "Operationally efficient layouts supporting safe facility workflows",
    ],
    deliverables: [
      "Detailed general arrangement layout plans with equipment positioning",
      "Elevation and cross-sectional coordination drawings",
      "Access corridors, walkway clearances, and maintenance drop annotations",
      "Coordination-ready revision packages for site construction teams",
    ],
    outcomes: [
      "Improved personnel safety and streamlined equipment access",
      "Better cross-discipline coordination between civil, piping, and structural teams",
      "Reduced site layout conflicts and optimized equipment footings",
    ],
    relatedServices: [
      { title: "3D Piping Engineering", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawings", href: "/services/cad/isometric/" },
    ],
  },
  {
    slug: "conversion",
    title: "CAD Conversion",
    image: "/images/services/cad-training.webp",
    imageAlt: "CAD drawing conversion workflow",
    description: [
      "CAD conversion modernizes legacy drawings into reusable digital assets.",
      "We clean, standardize, and validate converted files to match current drafting standards, CAD layering guidelines, and text styles.",
      "Whether digitizing legacy paper blueprints, raster scans, PDF sets, or obsolete CAD formats, our team verifies dimensional accuracy against original callouts.",
      "We structure converted drawings into standardized layers, normalized blocks, and clean vector geometry ready for modern engineering modifications.",
      "This enhances collaboration, improves digital archival, and streamlines future plant revamps and turnaround planning.",
      "Teams gain faster access to reliable, editable documentation that integrates directly into ongoing plant design workflows.",
    ],
    highlights: [
      "Legacy blueprint and raster data modernization into editable vector CAD",
      "Standardized layer conventions, block definitions, and dimension styles",
      "Dimensional verification against original design notes and callouts",
      "QA-checked deliverables formatted for ongoing plant maintenance",
    ],
    deliverables: [
      "Clean, fully editable CAD source files in standard formats",
      "Layer, font, and block normalization packages",
      "Dimensionally validated drawing sets matching original schematics",
      "Revision-ready digital drawing libraries for plant engineering teams",
    ],
    outcomes: [
      "Faster updates and revamps to legacy plant drawing assets",
      "Improved data reuse and streamlined engineering collaboration",
      "Consistent, organized digital drawing archives across facilities",
    ],
    relatedServices: [
      { title: "CAD Automation", href: "/services/cad/automation/" },
      { title: "CAD Training", href: "/services/cad/training/" },
    ],
  },
  {
    slug: "training",
    title: "CAD Training",
    image: "/images/services/cad-conversion.webp",
    imageAlt: "Industrial CAD training",
    description: [
      "CAD training equips teams with the skills needed for consistent, high-quality drafting.",
      "We tailor sessions to your workflows, using real project scenarios and practical exercises from plant and piping drafting.",
      "Our training modules focus on industry drafting conventions, layer management, title block standards, dynamic blocks, and efficient command workflows.",
      "Participants gain hands-on practice in drafting process schematics, isometric layouts, and general arrangement plans.",
      "Training materials and reference templates are structured for ongoing drafting team reference and continuous improvement.",
      "This practical instruction builds long-term drafting capability, accelerates onboarding for new engineers, and elevates overall output quality.",
    ],
    highlights: [
      "Workflow-specific drafting modules tailored to engineering operations",
      "Hands-on project exercises based on real industrial drafting deliverables",
      "Standardization guidance covering layers, blocks, and dimensioning",
      "Reusable learning materials and reference templates for team use",
    ],
    deliverables: [
      "Structured, workflow-based drafting training sessions",
      "Practical exercises, drafting templates, and reference guides",
      "Standardization checkpoints and technique validation reviews",
      "Reference documentation supporting consistent team drafting habits",
    ],
    outcomes: [
      "Higher drafting accuracy and reduced drafting revision cycles",
      "Faster team ramp-up and seamless onboarding for drafting staff",
      "Consistent, professional drawing output across the organization",
    ],
    relatedServices: [
      { title: "CAD Automation", href: "/services/cad/automation/" },
      { title: "CAD Conversion", href: "/services/cad/conversion/" },
    ],
  },
  {
    slug: "automation",
    title: "CAD Automation",
    image: "/images/services/cad-automation.webp",
    imageAlt: "CAD automation and drafting workflow",
    description: [
      "CAD automation reduces repetitive drafting work and increases delivery speed.",
      "We build automation scripts and workflows aligned to your drafting standards and drawing production requirements.",
      "By automating routine tasks such as title block population, layer standardization, batch plotting, and drawing index generation, teams eliminate manual errors.",
      "Our custom routines free engineers and draftsmen to focus on high-value design coordination and constructability reviews.",
      "Automation scripts are documented for maintainability, ease of use, and future expansion as project requirements grow.",
      "The result is faster turnaround times, strict standard compliance, and scalable CAD delivery capacity for demanding project schedules.",
    ],
    highlights: [
      "Automation scripts and routines aligned to company drafting standards",
      "Elimination of repetitive manual drafting tasks and batch operations",
      "Consistent drafting quality, title block standardization, and layer hygiene",
      "Scalable delivery workflows supporting large drawing packages",
    ],
    deliverables: [
      "Custom CAD automation scripts, tools, and macro routines",
      "Standardized dynamic drawing templates and block libraries",
      "Usage documentation and script maintenance guidelines",
      "Automated batch generation and processing workflows",
    ],
    outcomes: [
      "Significantly reduced drafting hours on routine drawing preparation",
      "Fewer manual errors and standardized drawing package quality",
      "Scalable delivery capacity to handle large engineering project volumes",
    ],
    relatedServices: [
      { title: "CAD Conversion", href: "/services/cad/conversion/" },
      { title: "CAD Training", href: "/services/cad/training/" },
    ],
  },
  {
    slug: "fire-evacuation",
    title: "Fire Evacuation",
    h1: "Fire Evacuation Plans & Layouts",
    image: "/images/services/fire-evacuation.webp",
    imageAlt: "Fire evacuation layout drawing",
    description: [
      "Fire evacuation drawings provide clear guidance for safe exits and emergency response.",
      "We produce compliant layouts with clear routing, signage, and equipment references.",
      "Our drawings map primary and secondary escape routes, emergency assembly points, fire alarm pull stations, fire extinguishers, and hose reel positions.",
      "By incorporating architectural floor plans and industrial plant layouts, we ensure symbols and directional arrows are immediately legible in high-stress situations.",
      "Our documentation supports safety audits, regulatory compliance inspections, personnel training, and facility emergency readiness.",
      "Each evacuation plan is organized for quick visual comprehension, strengthening plant safety culture and regulatory compliance.",
    ],
    highlights: [
      "Compliance-ready evacuation layouts with primary and secondary routes",
      "Clear safety signage, exit door locations, and assembly area mapping",
      "Accurate fire equipment callouts including extinguishers and alarm points",
      "High-visibility layouts designed for rapid comprehension during emergencies",
    ],
    deliverables: [
      "Facility fire evacuation route layouts and floor plan drawings",
      "Emergency safety equipment location maps and symbol references",
      "Code-compliant directional labeling and exit path documentation",
      "Audit-ready emergency evacuation sheets formatted for facility display",
    ],
    outcomes: [
      "Improved personnel safety readiness during emergencies",
      "Clear documentation supporting facility safety compliance audits",
      "Faster, organized emergency egress and response coordination",
    ],
    relatedServices: [
      { title: "General Arrangement (GA)", href: "/services/cad/general-arrangement/" },
      { title: "CAD Conversion", href: "/services/cad/conversion/" },
    ],
  },
];

export function generateStaticParams() {
  return serviceDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    return {
      title: "Service Detail",
    };
  }

  const title = `${detail.title} Services`;
  const description =
    detail.description[0] ||
    `${detail.title} drafting deliverables and CAD solutions by Port AI Engineers Pvt. Ltd.`;
  const canonical = `https://portaiengineers.com/services/cad/${detail.slug}/`;
  const imageUrl = detail.image;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | Port AI Engineers`,
      description,
      url: canonical,
      siteName: "Port AI Engineers",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${detail.title} - Port AI Engineers`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Port AI Engineers`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CadServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    notFound();
  }

  const canonicalUrl = `https://portaiengineers.com/services/cad/${detail.slug}/`;

  const serviceSchema = createServiceSchema({
    name: detail.title,
    description:
      detail.description[0] ||
      `${detail.title} drafting deliverables and CAD solutions by Port AI Engineers Pvt. Ltd.`,
    url: canonicalUrl,
    serviceType: "Industrial CAD Drafting Services",
    image: detail.image,
  });

  const webPageSchema = createWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: `${detail.title} Services`,
    description:
      detail.description[0] ||
      `${detail.title} drafting deliverables and CAD solutions by Port AI Engineers Pvt. Ltd.`,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "CAD", url: "https://portaiengineers.com/services/cad/" },
    { name: detail.h1 || detail.title, url: canonicalUrl },
  ]);

  const imageDimensions =
    CAD_IMAGE_DIMENSIONS[detail.image] ?? { width: 1536, height: 1024 };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        {/* Hierarchical Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Home
          </Link>
          <span className="px-2">→</span>
          <Link
            href="/services/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Services
          </Link>
          <span className="px-2">→</span>
          <Link
            href="/services/cad/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            CAD
          </Link>
          <span className="px-2">→</span>
          <span className="text-[var(--color-text)]" aria-current="page">
            {detail.h1 || detail.title}
          </span>
        </nav>

        {/* Back Link to Parent CAD Division */}
        <div className="mt-4">
          <Link
            href="/services/cad/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:underline"
          >
            &larr; Back to CAD Services
          </Link>
        </div>

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              CAD Service Detail
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {detail.h1 || detail.title}
            </h1>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <img
              src={detail.image}
              alt={detail.imageAlt}
              width={imageDimensions.width}
              height={imageDimensions.height}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-[70vh] w-full object-contain sm:max-h-[75vh]"
            />
          </div>

          <div className="space-y-4 text-base text-[var(--color-muted)] sm:text-lg">
            {detail.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Service Highlights
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Typical Deliverables
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Expected Outcomes
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Services Cross-Linking Section */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Cross-Disciplinary Coordination
                </span>
                <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                  Related Services
                </h2>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                Explore complementary drafting capabilities and plant engineering disciplines coordinated by Port AI Engineers.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {detail.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    <span>{service.title}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact / Scoping CTA Section */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary-soft)] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Need a tailored CAD solution?
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Share your requirements and we will map the right deliverables.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-primary)] transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-primary)_85%,var(--color-bg))]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
