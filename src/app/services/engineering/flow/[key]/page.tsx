import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createServiceSchema,
} from "../../../../../lib/schema";

type RelatedService = {
  title: string;
  href: string;
};

type FlowDetail = {
  key: string;
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

const ENGINEERING_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/services/process-engineering.webp": { width: 1536, height: 1024 },
  "/3DPIPE-DESIGN.jpg": { width: 1080, height: 608 },
  "/images/services/piping-engineering.webp": { width: 1536, height: 1024 },
  "/Instrumentation-Control-Engineering.jpg": { width: 1915, height: 1091 },
  "/images/services/piping-stress-analysis.webp": { width: 1536, height: 1024 },
  "/images/services/greenfield-project.webp": { width: 1536, height: 1024 },
  "/images/services/brownfield.webp": { width: 1536, height: 1024 },
  "/co2-capture.webp": { width: 992, height: 558 },
};

const flowDetails: FlowDetail[] = [
  {
    key: "process",
    title: "Process Engineering",
    image: "/images/services/process-engineering.webp",
    imageAlt: "Industrial process engineering diagram",
    description: [
      "Process engineering establishes the technical foundation of every industrial project. We translate production goals into safe, compliant, and scalable process designs that guide downstream teams.",
      "Our engineers define process intent early, align equipment selection with operating envelopes, and build a clear engineering narrative that supports control, safety, and execution.",
      "From establishing fluid properties, mass balance fundamentals, and operating thermal profiles to specifying process equipment capacities, we ensure every system boundary is rigorously evaluated before mechanical drafting begins.",
      "Port AI Engineers works closely with client teams to validate assumptions, document constraints, and keep the process design ready for detailed engineering, instrumentation planning, and procurement coordination.",
      "Each deliverable is structured for review, audit, and future revisions, enabling predictable approvals, streamlined plant operations, and faster project flow across disciplines.",
      "The result is a reliable process basis that reduces technical uncertainties, eliminates downstream redesigns, and accelerates industrial project delivery.",
    ],
    highlights: [
      "Process design basis and operating intent documentation",
      "Operating envelope definition, fluid characteristics, and validation",
      "Alignment with plant safety criteria and compliance requirements",
      "Equipment capacity parameters and operational boundary definitions",
    ],
    deliverables: [
      "Process design basis documentation",
      "Operating envelopes and system constraints",
      "Equipment operating parameters and stream references",
      "Coordination-ready packages for piping and instrumentation teams",
    ],
    outcomes: [
      "Reduced operational risk during detailed engineering",
      "Faster downstream piping and instrumentation execution",
      "Improved long-term process reliability and plant throughput",
    ],
    relatedServices: [
      { title: "Piping & Instrumentation Diagram (P&ID)", href: "/services/cad/flow/cad-pid/" },
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
      { title: "3D Piping Engineering", href: "/services/engineering/flow/piping-3d/" },
    ],
  },
  {
    key: "piping-3d",
    title: "3D Piping Engineering",
    image: "/3DPIPE-DESIGN.jpg",
    imageAlt: "3D industrial piping engineering design",
    description: [
      "3D piping Engineering provides a complete spatial model of piping systems, ensuring every route, support, and tie-in is coordinated before fabrication begins.",
      "We build constructability-ready models that reduce site rework and improve multidisciplinary coordination across civil, structural, and mechanical teams.",
      "Our engineering team focuses on clash detection, access validation, and field-fit accuracy, evaluating pipe rack density, nozzle orientations, and equipment maintenance clearances in full three-dimensional space.",
      "By integrating piping layouts directly with pipe stress recommendations and fabrication constraints, we eliminate spatial interferences before spools are cut and dispatched to the site.",
      "Models are delivered with clear design intent so downstream teams can interpret, fabricate, and install efficiently with complete dimensional confidence.",
      "This approach minimizes field modifications, optimizes materials handling, and supports safer, cleaner site execution for complex plant environments.",
    ],
    highlights: [
      "Clash detection, interference resolution, and spatial validation",
      "Constructability-focused layout coordination with structural framing",
      "Equipment nozzle orientation and maintenance access clearances",
      "Fabrication-aligned routing standards and support integration",
    ],
    deliverables: [
      "Comprehensive 3D piping routing models",
      "Interference and clash detection review outputs",
      "Constructability and accessibility review reports",
      "Model coordinate references for isometric extraction",
    ],
    outcomes: [
      "Fewer site revisions and eliminated field clashes",
      "Better coordination between civil, structural, and piping teams",
      "Higher installation accuracy during shop and field assembly",
    ],
    relatedServices: [
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
      { title: "Piping Stress Analysis", href: "/services/engineering/flow/stress/" },
      { title: "Piping Isometric Drawings", href: "/services/cad/flow/cad-iso/" },
    ],
  },
  {
    key: "piping-eng",
    title: "Piping Engineering",
    image: "/images/services/piping-engineering.webp",
    imageAlt: "Industrial piping engineering design",
    description: [
      "Piping engineering defines the technical standards, materials, and system architecture that keep plants safe and operational for decades.",
      "We deliver coordinated piping specifications, line lists, and documentation aligned to codes, client standards, and project objectives.",
      "Our team defines wall thicknesses, pressure ratings, flange classes, and valve types suited for demanding industrial fluids and elevated thermal conditions.",
      "Every piping line is coordinated with equipment datasheets, process stream parameters, and environmental requirements to ensure integrity across all operating modes.",
      "Documentation is structured for procurement, fabrication, and construction review, eliminating ambiguity during execution and procurement cycles.",
      "Clients gain a clear, compliance-ready piping engineering package that supports predictable delivery, seamless material procurement, and long-term asset integrity.",
    ],
    highlights: [
      "Code-compliant piping specifications and material classes",
      "Comprehensive line lists, design pressures, and temperature ratings",
      "Valve schedules and specialty piping component coordination",
      "Documentation aligned to procurement, fabrication, and construction",
    ],
    deliverables: [
      "Piping material specifications (PMS) and class sheets",
      "Comprehensive line lists and material selection schedules",
      "Valve data coordination and specialty item listings",
      "Compliance-ready engineering design documentation packages",
    ],
    outcomes: [
      "Improved code compliance and operational integrity",
      "Predictable material procurement and fabrication workflows",
      "Reduced plant maintenance risk and extended system lifecycle",
    ],
    relatedServices: [
      { title: "Process Engineering", href: "/services/engineering/flow/process/" },
      { title: "3D Piping Engineering", href: "/services/engineering/flow/piping-3d/" },
      { title: "Piping Stress Analysis", href: "/services/engineering/flow/stress/" },
    ],
  },
  {
    key: "instrumentation",
    title: "Instrumentation & Control",
    image: "/Instrumentation-Control-Engineering.jpg",
    imageAlt: "Industrial instrumentation and control engineering",
    description: [
      "Instrumentation and control design enables safe automation, accurate monitoring, and reliable plant performance.",
      "We define instrumentation layouts, control logic references, and integration-ready documentation tailored to the process intent.",
      "Our engineers specify sensor locations, valve actuators, transmitter requirements, and field junction architectures to ensure precise process surveillance.",
      "By coordinating closely with process engineers and electrical specialists, we establish structured input/output frameworks, safety interlock boundaries, and automated shutdown criteria.",
      "Our deliverables support clear commissioning, reduce startup risk, and provide operators with dependable control visibility and alarm management.",
      "We align instrumentation strategies with compliance requirements and operational goals, ensuring plants run safely while achieving steady throughput and target product quality.",
    ],
    highlights: [
      "Control philosophy alignment and automation framework integration",
      "Instrumentation location, junction, and routing layout coordination",
      "Field device specification and process boundary integration",
      "Integration-ready documentation for multi-vendor control architectures",
    ],
    deliverables: [
      "Instrumentation layout plans and location drawings",
      "Control philosophy references and logic narrative schedules",
      "Instrument index coordination and I/O assignment references",
      "Integration-ready commissioning documentation packages",
    ],
    outcomes: [
      "Improved continuous plant monitoring and signal reliability",
      "Safer industrial operations through clear interlock definitions",
      "Consistent control strategy across all plant operating modes",
    ],
    relatedServices: [
      { title: "Process Engineering", href: "/services/engineering/flow/process/" },
      { title: "Piping & Instrumentation Diagram (P&ID)", href: "/services/cad/flow/cad-pid/" },
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
    ],
  },
  {
    key: "stress",
    title: "Piping Stress Analysis",
    image: "/images/services/piping-stress-analysis.webp",
    imageAlt: "Piping stress analysis engineering",
    description: [
      "Piping stress analysis validates structural integrity under pressure, temperature, and dynamic loads.",
      "We model critical scenarios, identify risk points, and recommend design improvements before fabrication.",
      "Our analysis addresses thermal expansion, internal pressure, occasional seismic or wind forces, and nozzle reaction limits on pumps, vessels, and compressors.",
      "By calculating sustained and expansion stresses against established design criteria, we determine optimal pipe support locations, guide placements, and spring hanger selections.",
      "Detailed documentation provides clarity for engineering review, fabrication checks, client approvals, and long-term asset compliance audits.",
      "This rigorous validation prevents costly piping overstresses, protects connected mechanical equipment from excessive loads, and safeguards facility uptime.",
    ],
    highlights: [
      "Thermal expansion, sustained, and occasional load case validation",
      "Equipment nozzle load evaluation against allowable manufacturer limits",
      "Pipe support, restraint, guide, and spring hanger optimization",
      "Design recommendations for stress mitigation and routing adjustments",
    ],
    deliverables: [
      "Comprehensive piping stress analysis calculation reports",
      "Load case summary sheets and nozzle qualification summaries",
      "Pipe support load tables and spring hanger schedule references",
      "Compliance-ready engineering documentation and stress markups",
    ],
    outcomes: [
      "Reduced structural failure risk and eliminated pipe overstresses",
      "Protected rotating machinery nozzles and pressure equipment connections",
      "Better long-term plant reliability and verified code compliance",
    ],
    relatedServices: [
      { title: "3D Piping Engineering", href: "/services/engineering/flow/piping-3d/" },
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
    ],
  },
  {
    key: "greenfield",
    title: "Greenfield Projects",
    image: "/images/services/greenfield-project.webp",
    imageAlt: "Greenfield industrial plant engineering project",
    description: [
      "Greenfield engineering requires clear, end-to-end coordination across disciplines.",
      "We deliver full lifecycle engineering support to take projects from concept to execution with confidence.",
      "From initial plot plan organization and boundary limit interfaces to coordinated utility distribution, our team structures greenfield facilities for phased construction and future expansion.",
      "Our multi-discipline coordination brings process, piping, instrumentation, and layout specialists together under a unified project framework.",
      "We align early design decisions with long-term plant operations, optimizing capital expenditure, operational safety, maintenance access, and modular constructability.",
      "Structured deliverables reduce rework and enable smooth handoffs between project stages, giving industrial owners a dependable engineering foundation for new facility delivery.",
    ],
    highlights: [
      "Concept-to-detail multidisciplinary plant engineering coordination",
      "Plot plan development, battery limit interfaces, and utility routing",
      "Integrated design aligned to long-term operations and constructability",
      "Phased delivery schedules supporting smooth construction execution",
    ],
    deliverables: [
      "Concept-to-detail multidisciplinary engineering packages",
      "Integrated utility distribution and plot coordination layouts",
      "Cross-discipline design coordination and review documentation",
      "Construction-ready deliverable sets structured for procurement",
    ],
    outcomes: [
      "Faster project ramp-up from initial concept to detailed execution",
      "Reduced scope changes through integrated cross-discipline planning",
      "Higher delivery confidence for industrial plant investments",
    ],
    relatedServices: [
      { title: "Process Engineering", href: "/services/engineering/flow/process/" },
      { title: "3D Piping Engineering", href: "/services/engineering/flow/piping-3d/" },
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
    ],
  },
  {
    key: "brownfield",
    title: "Brownfield Projects",
    image: "/images/services/brownfield.webp",
    imageAlt: "Brownfield industrial facility retrofit engineering",
    description: [
      "Brownfield projects require upgrades without interrupting existing operations.",
      "We deliver retrofit-ready engineering packages that respect site constraints and operational safety.",
      "Our approach incorporates existing as-built validation, tie-in verification, and space conflict identification in operating operating plants.",
      "We sequence retrofit designs around scheduled turnaround windows, ensuring modifications integrate cleanly into functioning utility and process systems.",
      "Our engineers work with client site teams to document site conditions, mitigate operational hazards, and structure tie-in packages for minimal downtime.",
      "This systematic approach enables safe modernization, reliable debottlenecking, and asset life extension while protecting facility throughput and worker safety.",
    ],
    highlights: [
      "As-built condition validation and tie-in point verification",
      "Retrofit planning designed around operational shutdown windows",
      "Risk mitigation planning for live plant modifications and revamps",
      "Operationally safe execution support for plant expansions",
    ],
    deliverables: [
      "As-built validation packages and tie-in schedule references",
      "Retrofit and debottlenecking design documentation",
      "Operational risk mitigation notes and tie-in execution drawings",
      "Brownfield equipment and line replacement engineering packages",
    ],
    outcomes: [
      "Minimized operational downtime during plant revamps and tie-ins",
      "Safer retrofit execution within operating industrial facilities",
      "Predictable modification schedules aligned to turnaround windows",
    ],
    relatedServices: [
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
      { title: "3D Piping Engineering", href: "/services/engineering/flow/piping-3d/" },
      { title: "CAD Conversion", href: "/services/cad/flow/cad-conversion/" },
    ],
  },
  {
    key: "power-plants",
    title: "Power Plants",
    image: "/co2-capture.webp",
    imageAlt: "Power plant systems engineering layout",
    description: [
      "Power generation projects demand reliability, safety, and regulatory compliance at every stage.",
      "We provide multidisciplinary engineering deliverables tailored to power plant requirements.",
      "Our team provides engineering support across steam networks, fuel systems, boiler balance of plant (BOP), cooling water circuits, and water treatment packages.",
      "We evaluate high-temperature piping stresses, equipment layouts, and instrumentation loops to ensure resilient performance under continuous operation.",
      "Clear documentation supports stakeholder approvals, procurement, construction coordination, and routine plant maintenance procedures.",
      "Clients gain dependable engineering support for mission-critical power generation infrastructure that meets stringent industrial performance and environmental standards.",
    ],
    highlights: [
      "Multidiscipline power plant coordination across mechanical and piping systems",
      "Balance of plant (BOP) systems coordination and utility loop planning",
      "Reliability, thermal endurance, and operational safety alignment",
      "Engineering documentation for regulatory review and lifecycle maintenance",
    ],
    deliverables: [
      "Discipline-aligned power system design outputs and specifications",
      "Balance of plant (BOP) piping and equipment layout coordination",
      "Compliance, safety, and operational boundary documentation",
      "Commissioning-ready documentation packages for generation systems",
    ],
    outcomes: [
      "Higher plant reliability across critical utility and power circuits",
      "Improved operational safety under demanding thermal conditions",
      "Consistent, structured project delivery for industrial energy systems",
    ],
    relatedServices: [
      { title: "Process Engineering", href: "/services/engineering/flow/process/" },
      { title: "Piping Engineering", href: "/services/engineering/flow/piping-eng/" },
      { title: "Instrumentation & Control", href: "/services/engineering/flow/instrumentation/" },
    ],
  },
];

export function generateStaticParams() {
  return flowDetails.map((detail) => ({ key: detail.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const detail = flowDetails.find((item) => item.key === key);

  if (!detail) {
    return {
      title: "Service Detail",
    };
  }

  const title = `${detail.title} Services`;
  const description =
    detail.description[0] ||
    `${detail.title} engineering deliverables and solutions by Port AI Engineers Pvt. Ltd.`;
  const canonical = `https://portaiengineers.com/services/engineering/flow/${detail.key}/`;
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

export default async function EngineeringFlowDetailPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const detail = flowDetails.find((item) => item.key === key);

  if (!detail) {
    notFound();
  }

  const canonicalUrl = `https://portaiengineers.com/services/engineering/flow/${detail.key}/`;

  const serviceSchema = createServiceSchema({
    name: detail.title,
    description:
      detail.description[0] ||
      `${detail.title} engineering deliverables and solutions by Port AI Engineers Pvt. Ltd.`,
    url: canonicalUrl,
    serviceType: "Industrial Engineering Services",
    image: detail.image,
  });

  const webPageSchema = createWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: `${detail.title} Services`,
    description:
      detail.description[0] ||
      `${detail.title} engineering deliverables and solutions by Port AI Engineers Pvt. Ltd.`,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "Engineering", url: "https://portaiengineers.com/services/engineering/" },
    { name: detail.h1 || detail.title, url: canonicalUrl },
  ]);

  const imageDimensions =
    ENGINEERING_IMAGE_DIMENSIONS[detail.image] ?? { width: 1536, height: 1024 };

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
            href="/services/engineering/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Engineering
          </Link>
          <span className="px-2">→</span>
          <span className="text-[var(--color-text)]" aria-current="page">
            {detail.h1 || detail.title}
          </span>
        </nav>

        {/* Back Link to Parent Engineering Division */}
        <div className="mt-4">
          <Link
            href="/services/engineering/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:underline"
          >
            &larr; Back to Engineering Services
          </Link>
        </div>

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Engineering Service Detail
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
              className="h-64 w-full object-cover sm:h-80"
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
                Explore complementary engineering disciplines and drafting workflows coordinated by Port AI Engineers.
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
                  Need help scoping this service?
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Share your project requirements and we will tailor the scope to match.
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
