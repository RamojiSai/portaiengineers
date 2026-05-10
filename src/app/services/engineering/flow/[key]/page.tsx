import Link from "next/link";
import { notFound } from "next/navigation";

type FlowDetail = {
  key: string;
  title: string;
  image: string;
  description: string[];
  highlights: string[];
  deliverables: string[];
  outcomes: string[];
};

const flowDetails: FlowDetail[] = [
  {
    key: "process",
    title: "Process Engineering",
    image: "/PipingEngineering.jpg",
    description: [
      "Process engineering establishes the technical foundation of every industrial project. We translate production goals into safe, compliant, and scalable process designs that guide downstream teams.",
      "Our engineers define process intent early, align equipment selection with operating envelopes, and build a clear engineering narrative that supports control, safety, and execution.",
      "Port AI Engineers works closely with client teams to validate assumptions, document constraints, and keep the process design ready for detailed engineering and procurement.",
      "Each deliverable is structured for review, audit, and future revisions, enabling predictable approvals and faster project flow.",
      "The result is a reliable process basis that reduces risk and accelerates delivery across disciplines.",
    ],
    highlights: [
      "Process design basis and intent documentation",
      "Operating envelope definition and validation",
      "Alignment with safety and compliance requirements",
    ],
    deliverables: [
      "Process design basis",
      "Operating envelopes and constraints",
      "Coordination-ready documentation",
    ],
    outcomes: [
      "Reduced operational risk",
      "Faster downstream engineering",
      "Improved process reliability",
    ],
  },
  {
    key: "piping-3d",
    title: "3D Piping Design",
    image: "/lhqkttgb_image1.png",
    description: [
      "3D piping design provides a complete spatial model of piping systems, ensuring every route, support, and tie-in is coordinated before fabrication begins.",
      "We build constructability-ready models that reduce site rework and improve multidisciplinary coordination.",
      "Our team focuses on clash detection, access validation, and field-fit accuracy, providing teams with confidence before construction.",
      "Models are delivered with clear design intent so downstream teams can interpret, fabricate, and install efficiently.",
      "This approach reduces installation delays and supports safer, cleaner site execution.",
    ],
    highlights: [
      "Clash detection and interference resolution",
      "Constructability-focused layout coordination",
      "Fabrication-aligned routing standards",
    ],
    deliverables: [
      "3D routing models",
      "Clash detection outputs",
      "Constructability reviews",
    ],
    outcomes: [
      "Fewer site revisions",
      "Better field coordination",
      "Higher installation accuracy",
    ],
  },
  {
    key: "piping-eng",
    title: "Piping Engineering",
    image: "/Low-Carbon-Ammonia-image1.webp",
    description: [
      "Piping engineering defines the technical standards, materials, and system architecture that keep plants safe and operational for decades.",
      "We deliver coordinated piping specifications, line lists, and documentation aligned to codes, client standards, and project objectives.",
      "Our team focuses on reliability and maintainability, ensuring every decision supports long-term performance.",
      "Documentation is structured for procurement, fabrication, and construction review, reducing ambiguity during execution.",
      "Clients gain a clear, compliance-ready piping package that supports predictable delivery.",
    ],
    highlights: [
      "Code-compliant piping specifications",
      "Materials and line list coordination",
      "Documentation aligned to procurement and fabrication",
    ],
    deliverables: [
      "Piping specifications",
      "Line lists and material selection",
      "Design documentation packages",
    ],
    outcomes: [
      "Improved compliance",
      "Predictable fabrication",
      "Reduced maintenance risk",
    ],
  },
  {
    key: "instrumentation",
    title: "Instrumentation & Control",
    image: "/Instrumentation-Control-Engineering.jpg",
    description: [
      "Instrumentation and control design enables safe automation, accurate monitoring, and reliable plant performance.",
      "We define instrumentation layouts, control logic references, and integration-ready documentation tailored to the process intent.",
      "Our deliverables support clear commissioning, reduce startup risk, and provide operators with dependable control visibility.",
      "We align instrumentation strategies with compliance requirements and operational goals.",
      "This ensures plants run safely while meeting throughput and quality objectives.",
    ],
    highlights: [
      "Control philosophy alignment",
      "Instrumentation layout coordination",
      "Integration-ready documentation",
    ],
    deliverables: [
      "Instrumentation layouts",
      "Control philosophy references",
      "Integration-ready documentation",
    ],
    outcomes: [
      "Improved monitoring",
      "Safer operations",
      "Consistent control strategy",
    ],
  },
  {
    key: "stress",
    title: "Piping Stress Analysis",
    image: "/Pipe-Stress-analysis.png",
    description: [
      "Piping stress analysis validates structural integrity under pressure, temperature, and dynamic loads.",
      "We model critical scenarios, identify risk points, and recommend design improvements before fabrication.",
      "Our analysis ensures compliance with industry codes and supports long-term system reliability.",
      "Detailed documentation provides clarity for review, approvals, and future audits.",
      "This prevents costly failures while protecting safety and uptime.",
    ],
    highlights: [
      "Load case validation and reporting",
      "Code compliance verification",
      "Design recommendations for risk reduction",
    ],
    deliverables: [
      "Stress analysis reports",
      "Load case validation",
      "Compliance-ready documentation",
    ],
    outcomes: [
      "Reduced failure risk",
      "Code-compliant designs",
      "Better long-term reliability",
    ],
  },
  {
    key: "greenfield",
    title: "Greenfield Projects",
    image: "/Low-Carbon-Ammonia-image1.webp",
    description: [
      "Greenfield engineering requires clear, end-to-end coordination across disciplines.",
      "We deliver full lifecycle engineering support to take projects from concept to execution with confidence.",
      "Our team aligns early design decisions with long-term operations, improving cost, safety, and scalability.",
      "Structured deliverables reduce rework and enable smooth handoffs between project stages.",
      "Clients gain a reliable partner for new facility delivery.",
    ],
    highlights: [
      "Concept-to-detail coordination",
      "Cross-discipline delivery planning",
      "Design aligned to long-term operations",
    ],
    deliverables: [
      "Concept-to-detail packages",
      "Multi-discipline coordination",
      "Project-ready deliverables",
    ],
    outcomes: [
      "Faster project ramp-up",
      "Reduced scope changes",
      "Higher delivery confidence",
    ],
  },
  {
    key: "brownfield",
    title: "Brownfield Projects",
    image: "/BrownField.jpg",
    description: [
      "Brownfield projects require upgrades without interrupting existing operations.",
      "We deliver retrofit-ready engineering packages that respect site constraints and operational safety.",
      "Our approach includes as-built validation, risk mitigation planning, and careful coordination with operations teams.",
      "Documentation is structured for efficient approvals and minimal disruption during execution.",
      "This enables safe modernization while protecting uptime.",
    ],
    highlights: [
      "As-built validation and verification",
      "Upgrade planning with risk mitigation",
      "Operationally safe execution support",
    ],
    deliverables: [
      "As-built validation",
      "Upgrade design packages",
      "Risk mitigation plans",
    ],
    outcomes: [
      "Reduced operational downtime",
      "Safer upgrades",
      "Predictable execution",
    ],
  },
  {
    key: "power-plants",
    title: "Power Plants",
    image: "/co2-capture.webp",
    description: [
      "Power generation projects demand reliability, safety, and regulatory compliance at every stage.",
      "We provide multidisciplinary engineering deliverables tailored to power plant requirements.",
      "Our team focuses on efficiency, system reliability, and operational resilience.",
      "Clear documentation supports approvals, construction, and long-term maintenance.",
      "Clients gain dependable engineering support for mission-critical infrastructure.",
    ],
    highlights: [
      "Multidiscipline power plant coordination",
      "Reliability and safety alignment",
      "Documentation for compliance and review",
    ],
    deliverables: [
      "Discipline-aligned design outputs",
      "Compliance and safety documentation",
      "Coordination-ready layouts",
    ],
    outcomes: [
      "Higher plant reliability",
      "Improved operational safety",
      "Consistent project delivery",
    ],
  },
];

export function generateStaticParams() {
  return flowDetails.map((detail) => ({ key: detail.key }));
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

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        {/* <Link
          href="/services/engineering#engineering-flow"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
        >
          Back to Engineering Flow Diagram
        </Link> */}

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Engineering Service Detail
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {detail.title}
            </h1>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <img
              src={detail.image}
              alt={`${detail.title} service visual`}
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
