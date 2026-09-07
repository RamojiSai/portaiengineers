import type { Metadata } from "next";
import Image from "next/image";
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
  relatedArticles?: RelatedService[];
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
    title: "PFD Design & Drafting Services",
    metaTitle: "PFD Design & Drafting Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers detailed Process Flow Diagram (PFD) design and drafting services, mapping equipment, stream balances, and industrial process workflows.",
    h1: "PFD Design & Drafting Services",
    image: "/PFD.jpeg",
    imageAlt: "Process flow diagram for industrial engineering",
    description: [
      "Port AI Engineers provides Process Flow Diagram (PFD) design and drafting services, preparing structured schematics that illustrate major equipment sequences, stream balances, and operating conditions across industrial systems.",
      "Our drafting specialists organize primary process flowpaths, fluid characteristics, and utility distribution networks to establish a dependable foundation for downstream P&ID development.",
      "We support process consultants, EPC engineering teams, and industrial operators across India and the Gulf region, coordinating standard process documentation for projects in the UAE, Saudi Arabia, and Qatar.",
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
      { title: "P&ID Design & Drafting Services", href: "/services/cad/pid/" },
      { title: "Process Engineering Services", href: "/services/engineering/process/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
    ],
  },
  {
    slug: "pid",
    title: "P&ID Design & Drafting Services",
    metaTitle: "P&ID Design & Drafting Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides professional P&ID design and drafting services, delivering standards-compliant piping and instrumentation diagrams for industrial plants.",
    h1: "P&ID Design & Drafting Services",
    image: "/images/services/cad-pid.png",
    imageAlt: "Piping and instrumentation diagram",
    description: [
      "Port AI Engineers delivers comprehensive P&ID design and drafting services, developing detailed piping and instrumentation diagrams that clearly capture process control logic, line specifications, and safety systems for industrial facilities.",
      "Our engineering specialists handle complete P&ID development, conversion from legacy formats, and drawing reviews across mechanical, process, and instrumentation disciplines.",
      "We support EPC contractors, engineering consultants, and industrial facility owners across India and the Gulf region, including outsourced drafting requirements in the UAE, Saudi Arabia, and Qatar.",
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
      { title: "PFD Design & Drafting Services", href: "/services/cad/pfd/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
    ],
  },
  {
    slug: "isometric",
    title: "Piping Isometric Drawing Services",
    metaTitle: "Piping Isometric Drawing Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides piping isometric drawing services, producing fabrication-ready isometrics with accurate dimensions, weld details, and integrated BOMs.",
    h1: "Piping Isometric Drawing Services",
    image: "/images/services/piping-isometric.webp",
    imageAlt: "Industrial piping isometric drawing",
    description: [
      "Port AI Engineers delivers precision piping isometric drawing services, translating complex piping designs into fabrication-ready isometric drawings with comprehensive dimensional and welding details.",
      "Our isometric drafting workflows extract accurate cut pipe lengths, fitting angles, spool boundaries, and integrated Bills of Materials (BOM) to streamline shop fabrication and field erection.",
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
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
    ],
  },
  {
    slug: "general-arrangement",
    title: "General Arrangement Drawing Services",
    metaTitle: "General Arrangement Drawing Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides General Arrangement (GA) drawing services, delivering coordinated equipment layouts, elevation views, and site structural plans.",
    h1: "General Arrangement Drawing Services",
    image: "/GeneralArrangements.jpg",
    imageAlt: "Industrial general arrangement drawing",
    description: [
      "Port AI Engineers provides General Arrangement (GA) drawing services, producing coordinated equipment arrangement drawings, piping GA layouts, and structural spatial plans for industrial plants and process facilities.",
      "We coordinate equipment positioning, maintenance clearances, nozzle orientations, and operator transit corridors across civil, structural, and mechanical disciplines.",
      "Our team supports plant operators, EPC contractors, and fabricators across India and the Gulf region, delivering coordinated GA drawing sets for projects in the UAE, Saudi Arabia, and Qatar.",
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
      { title: "Industrial Plant Layout Services", href: "/services/engineering/plant-layout/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
    ],
    relatedArticles: [
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
    ],
  },
  {
    slug: "conversion",
    title: "CAD Conversion Services",
    metaTitle: "CAD Conversion Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers provides CAD conversion services, transforming legacy paper drawings, PDF files, and raster scans into standardized, editable CAD vector formats.",
    h1: "CAD Conversion Services",
    image: "/images/services/cad-conversion.webp",
    imageAlt: "CAD drawing conversion workflow",
    description: [
      "Port AI Engineers provides professional CAD conversion services, modernizing legacy paper blueprints, raster scans, and PDF drawing sets into dimensionally accurate, layered CAD vector files.",
      "Our engineering drawing conversion process standardizes layers, blocks, and dimension styles according to client specifications, delivering clean digital archives ready for ongoing plant revamps and modifications.",
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
      { title: "CAD Automation Services", href: "/services/cad/automation/" },
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
      { title: "CAD Training Services", href: "/services/cad/training/" },
    ],
    relatedArticles: [
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
    ],
  },
  {
    slug: "training",
    title: "CAD Training Services",
    metaTitle: "CAD Training Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers offers specialized CAD training services, equipping engineering teams with practical drafting workflows, layer standards, and industry practices.",
    h1: "CAD Training Services",
    image: "/images/services/cad-training.webp",
    imageAlt: "Industrial CAD training",
    description: [
      "Port AI Engineers delivers specialized CAD training services, preparing engineering and drafting teams with practical, project-based workflows for industrial and plant design.",
      "Our training programs focus on industry drafting conventions, layer and block standardization, dynamic blocks, and efficient modeling practices tailored to engineering production environments.",
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
      { title: "CAD Automation Services", href: "/services/cad/automation/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
    ],
  },
  {
    slug: "automation",
    title: "CAD Automation Services",
    metaTitle: "CAD Automation Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers offers CAD automation services, creating custom drafting routines, dynamic block libraries, and automated drawing workflows for engineering teams.",
    h1: "CAD Automation Services",
    image: "/images/services/cad-automation.webp",
    imageAlt: "CAD automation and drafting workflow",
    description: [
      "Port AI Engineers provides custom CAD automation services, streamlining engineering workflows and eliminating repetitive drafting tasks through tailored scripts, macros, and dynamic libraries.",
      "We build automated drafting workflows that standardize title blocks, enforce layer hygiene, and accelerate drawing package production while maintaining strict engineering quality standards.",
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
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "CAD Training Services", href: "/services/cad/training/" },
    ],
  },
  {
    slug: "fire-evacuation",
    title: "Fire Evacuation Drawing Services",
    metaTitle: "Fire Evacuation Drawing Services | Port AI Engineers",
    metaDescription:
      "Port AI Engineers delivers compliant fire evacuation drawing services, providing clear emergency exit routes, safety equipment maps, and facility layouts.",
    h1: "Fire Evacuation Drawing Services",
    image: "/images/services/fire-evacuation.webp",
    imageAlt: "Fire evacuation layout drawing",
    description: [
      "Port AI Engineers provides fire evacuation drawing services, developing compliant emergency evacuation plans, exit route layouts, and fire safety drawings for industrial plants and commercial facilities.",
      "Our CAD team maps primary and secondary emergency exit layouts, assembly areas, and emergency equipment locations to ensure audit readiness and workforce safety.",
      "We support industrial plants, commercial complexes, and manufacturing facilities across India and the Gulf region, ensuring evacuation layouts meet statutory life-safety standards in the UAE, Saudi Arabia, and Qatar.",
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
      { title: "General Arrangement Drawing Services", href: "/services/cad/general-arrangement/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
    ],
    relatedArticles: [
      { title: "Industrial Fire Evacuation Drawing Standards: Egress Mapping & Symbols", href: "/blogs/fire-evacuation-drawing-standards/" },
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
  const canonical = `https://portaiengineers.com/services/cad/${detail.slug}/`;
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
    name: detail.h1,
    description: detail.metaDescription,
    url: canonicalUrl,
    serviceType: "Industrial CAD Drafting Services",
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
    { name: "CAD", url: "https://portaiengineers.com/services/cad/" },
    { name: detail.h1, url: canonicalUrl },
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
            {detail.h1}
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
              {detail.h1}
            </h1>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <Image
              src={detail.image}
              alt={detail.imageAlt}
              width={imageDimensions.width}
              height={imageDimensions.height}
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

          {/* Related Technical Guides & Engineering Articles */}
          {detail.relatedArticles && detail.relatedArticles.length > 0 && (
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    Technical Documentation &amp; Insights
                  </span>
                  <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                    Technical Guides &amp; Engineering Articles
                  </h2>
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  Read in-depth technical guides, drafting standards, and engineering insights related to this discipline.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {detail.relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      <span>{article.title}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Next Steps CTA */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  Need a tailored CAD solution?
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Share your requirements and we will map the right deliverables.
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
