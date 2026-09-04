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
  metaTitle: string;
  metaDescription: string;
  h1: string;
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
  "/GeneralArrangements.jpg": { width: 1144, height: 755 },
};

const serviceDetails: ServiceDetail[] = [
  {
    slug: "process",
    title: "Process Engineering Services",
    metaTitle: "Process Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers process engineering services, translating operating objectives into safe, compliant process designs, mass balances, and system envelopes.",
    h1: "Process Engineering Services",
    image: "/images/services/process-engineering.webp",
    imageAlt: "Industrial process engineering diagram",
    description: [
      "Port AI Engineers provides rigorous process engineering services, establishing the thermodynamic and operational foundations required for safe, efficient, and scalable industrial plant operations.",
      "Our process engineers define design bases, establish mass and energy balances, specify operating envelopes, and coordinate closely with piping and instrumentation teams for seamless project execution.",
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
      { title: "P&ID Design & Drafting Services", href: "/services/cad/pid/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
    ],
  },
  {
    slug: "piping-3d",
    title: "3D Piping Design Services",
    metaTitle: "3D Piping Design Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides 3D piping design services, delivering constructability-ready piping models, clash detection, and multidisciplinary plant coordination.",
    h1: "3D Piping Design Services",
    image: "/3DPIPE-DESIGN.jpg",
    imageAlt: "3D industrial piping engineering design",
    description: [
      "Port AI Engineers provides advanced 3D piping design services, creating constructability-ready 3D piping models, plant layouts, and coordinated routing configurations for industrial facilities.",
      "Our engineers perform thorough clash detection, evaluate nozzle orientations, and integrate pipe support requirements in full 3D space to eliminate field rework before fabrication.",
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
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
    ],
  },
  {
    slug: "piping-engineering",
    title: "Piping Engineering Services",
    metaTitle: "Piping Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers end-to-end piping engineering services, including piping material specifications, line lists, valve data, and plant layout support.",
    h1: "Piping Engineering Services",
    image: "/images/services/piping-engineering.webp",
    imageAlt: "Industrial piping engineering design",
    description: [
      "Port AI Engineers provides comprehensive piping engineering services, defining piping material specifications, line lists, and technical system architectures for process and industrial plants.",
      "Our team coordinates piping design parameters with equipment datasheets, operating pressures, and international design codes to ensure structural integrity and seamless procurement.",
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
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "P&ID Design & Drafting Services", href: "/services/cad/pid/" },
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation Engineering Services",
    metaTitle: "Instrumentation Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers instrumentation engineering services, including control logic references, field device layouts, and integration-ready documentation.",
    h1: "Instrumentation Engineering Services",
    image: "/Instrumentation-Control-Engineering.jpg",
    imageAlt: "Industrial instrumentation and control engineering",
    description: [
      "Port AI Engineers delivers specialized instrumentation engineering services, preparing control philosophy documentation, instrument layouts, and field automation architectures for industrial facilities.",
      "Our engineers coordinate sensor placement, valve actuators, control interlocks, and I/O assignments with process and piping teams to support reliable plant operations and commissioning.",
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
      { title: "Process Engineering Services", href: "/services/engineering/process/" },
      { title: "P&ID Design & Drafting Services", href: "/services/cad/pid/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
    ],
  },
  {
    slug: "piping-stress-analysis",
    title: "Piping Stress Analysis Services",
    metaTitle: "Piping Stress Analysis Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides piping stress analysis services, evaluating thermal expansion, sustained loads, and equipment nozzle forces for industrial piping.",
    h1: "Piping Stress Analysis Services",
    image: "/images/services/piping-stress-analysis.webp",
    imageAlt: "Piping stress analysis engineering",
    description: [
      "Port AI Engineers delivers comprehensive piping stress analysis services, evaluating thermal expansion, sustained pressure, and dynamic forces across critical industrial piping systems.",
      "Our piping stress engineers evaluate equipment nozzle loads, optimize pipe support and spring hanger configurations, and ensure compliance with applicable ASME and international piping codes.",
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
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
    ],
  },
  {
    slug: "greenfield-projects",
    title: "Greenfield Engineering Services",
    metaTitle: "Greenfield Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides greenfield engineering services, coordinating concept-to-detail plant layouts, utility distribution, and multi-discipline engineering.",
    h1: "Greenfield Engineering Services",
    image: "/images/services/greenfield-project.webp",
    imageAlt: "Greenfield industrial plant engineering project",
    description: [
      "Port AI Engineers delivers multidisciplinary greenfield engineering services, providing comprehensive concept-to-detail design coordination for new industrial plant developments.",
      "From plot plan development and battery limit coordination to utility distribution and constructability reviews, our engineering team structures greenfield facilities for phased execution and future capacity.",
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
      { title: "Industrial Plant Layout Services", href: "/services/engineering/plant-layout/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
    ],
  },
  {
    slug: "brownfield-projects",
    title: "Brownfield Engineering Services",
    metaTitle: "Brownfield Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers brownfield engineering services, providing retrofit layouts, as-built validation, and tie-in engineering for live industrial plants.",
    h1: "Brownfield Engineering Services",
    image: "/images/services/brownfield.webp",
    imageAlt: "Brownfield industrial facility retrofit engineering",
    description: [
      "Port AI Engineers provides specialized brownfield engineering services, delivering retrofit designs, debottlenecking studies, and tie-in packages for active industrial facilities.",
      "Our engineers perform as-built validation, evaluate physical routing constraints, and plan modification sequences around plant shutdown windows to minimize operational disruption.",
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
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
    ],
  },
  {
    slug: "power-plants",
    title: "Power Plant Engineering Services",
    metaTitle: "Power Plant Engineering Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers power plant engineering services, supporting balance of plant systems, thermal piping coordination, and utility engineering deliverables.",
    h1: "Power Plant Engineering Services",
    image: "/co2-capture.webp",
    imageAlt: "Power plant systems engineering layout",
    description: [
      "Port AI Engineers provides dedicated power plant engineering services, delivering multidisciplinary design deliverables for thermal systems, balance of plant (BOP), and utility circuits.",
      "We evaluate high-temperature piping systems, equipment arrangements, and continuous utility networks to support operational reliability and stringent compliance standards.",
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
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
    ],
  },
  {
    slug: "plant-layout",
    title: "Industrial Plant Layout Design Services",
    metaTitle: "Industrial Plant Layout Design Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides industrial plant layout design services, delivering optimized equipment layouts, plot plans, and multi-discipline spatial coordination.",
    h1: "Industrial Plant Layout Design Services",
    image: "/GeneralArrangements.jpg",
    imageAlt: "Industrial plant layout and equipment arrangement design",
    description: [
      "Port AI Engineers provides industrial plant layout design services, translating process flow requirements and complex engineering criteria into organized, efficient physical plant arrangements. We work with industrial operators, EPCs, and engineering teams to establish coherent spatial frameworks for process units, utility blocks, and auxiliary facilities.",
      "Our engineering team coordinates comprehensive plot plan development and site organization, evaluating overall land topography, battery limit boundaries, and prevailing wind conditions. We establish equipment spacing criteria, define primary utility routing corridors, and structure plant zoning to accommodate both immediate construction phases and long-term expansion requirements.",
      "We focus on equipment arrangement and accessibility, determining equipment centerlines, foundation footprints, and required maintenance clearance envelopes. By planning crane reach radiuses, laydown zones, nozzle orientations, and operator transit corridors early in the layout phase, we ensure equipment can be safely operated, inspected, and serviced throughout the plant lifecycle.",
      "Our layout process bridges process documentation with physical engineering reality, integrating PFD flowstreams and P&ID line specifications with civil structural framing and 3D piping routing. Working in close collaboration with piping stress analysts and structural designers, we ensure pipe racks, pump skids, and vessel connections align with mechanical load paths and thermal expansion envelopes.",
      "Safety, egress, and practical circulation remain central to our spatial coordination approach. We incorporate clear personnel walkways, vehicular roadways, emergency evacuation corridors, and designated fire-safety buffers across every operating unit, ensuring full alignment with industrial safety standards and local statutory requirements.",
      "By delivering thoroughly validated plant layout documentation, we provide a stable, coordinated reference point for downstream engineering disciplines. These deliverables feed directly into General Arrangement drawings, detailed 3D piping design, procurement packages, and multidisciplinary project coordination, supporting smooth site construction and operational clarity.",
    ],
    highlights: [
      "Plot plan development and site organization",
      "Equipment layout and spatial coordination",
      "Maintenance access and operational clearance planning",
      "Multidiscipline coordination across piping, equipment, and structures",
    ],
    deliverables: [
      "Industrial plant layout plans",
      "Plot plan and equipment arrangement documentation",
      "Equipment positioning and spatial coordination drawings",
      "Utility routing and battery-limit coordination documentation",
    ],
    outcomes: [
      "Clearer spatial coordination between plant disciplines",
      "Better visibility of equipment access and maintenance requirements",
      "More organized plant layout documentation for downstream engineering",
      "Improved coordination of equipment, piping, and utility spaces",
    ],
    relatedServices: [
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Greenfield Engineering Services", href: "/services/engineering/greenfield-projects/" },
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

  const title = { absolute: detail.metaTitle };
  const plainTitle = detail.metaTitle;
  const description = detail.metaDescription;
  const canonical = `https://portaiengineers.com/services/engineering/${detail.slug}/`;
  const imageUrl = detail.image;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: plainTitle,
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
      title: plainTitle,
      description,
      images: [imageUrl],
    },
  };
}

export default async function EngineeringServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    notFound();
  }

  const canonicalUrl = `https://portaiengineers.com/services/engineering/${detail.slug}/`;

  const serviceSchema = createServiceSchema({
    name: detail.h1,
    description: detail.metaDescription,
    url: canonicalUrl,
    serviceType: "Industrial Engineering Services",
    image: detail.image,
  });

  const webPageSchema = createWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: detail.metaTitle,
    description: detail.metaDescription,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "Engineering", url: "https://portaiengineers.com/services/engineering/" },
    { name: detail.h1, url: canonicalUrl },
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
            {detail.h1}
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
              {detail.h1}
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

          {/* Next Steps CTA */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Need help scoping this service?
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Share your project requirements and we will tailor the scope to match.
                </p>
              </div>
              <Link
                href="/contact/"
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
