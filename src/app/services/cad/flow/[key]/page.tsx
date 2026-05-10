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
    key: "cad-pfd",
    title: "Process Flow Diagram (PFD)",
    image: "/ProcessFlow.webp",
    description: [
      "Process Flow Diagrams provide a clear, high-level view of how materials and energy move through an industrial system.",
      "We create structured PFDs that capture major equipment, key streams, and operating intent to guide all downstream engineering.",
      "Our team aligns process assumptions early to reduce rework and keep design reviews efficient.",
      "Each diagram is delivered with consistent legends and tagging so teams can reference them throughout the project lifecycle.",
      "This results in faster alignment, cleaner handoffs, and confident decision-making.",
    ],
    highlights: [
      "System-level flow clarity",
      "Stream and utility alignment",
      "Review-ready tagging standards",
    ],
    deliverables: [
      "System-level flow diagram with major equipment",
      "Stream and utility balance references",
      "Process legend and tag conventions",
    ],
    outcomes: [
      "Faster alignment across teams",
      "Cleaner handoff into P&ID development",
      "Reduced rework in early design",
    ],
  },
  {
    key: "cad-pid",
    title: "P&ID",
    image: "/P&ID.png",
    description: [
      "P&ID drawings capture the detailed piping, instrumentation, and control logic required to build and operate safely.",
      "We develop P&IDs that are standards-compliant, clearly tagged, and ready for review across engineering teams.",
      "Our deliverables reduce construction ambiguity and support safer commissioning.",
      "Each sheet is structured for maintenance and long-term operational use.",
      "This ensures your team has a reliable source of truth from design through operations.",
    ],
    highlights: [
      "Control logic clarity",
      "Code-compliant documentation",
      "Long-term operational reference",
    ],
    deliverables: [
      "Detailed P&ID sheets with control logic",
      "Instrument and valve tagging references",
      "Review-ready revision tracking",
    ],
    outcomes: [
      "Lower commissioning risk",
      "Improved safety and compliance",
      "Accurate construction references",
    ],
  },
  {
    key: "cad-iso",
    title: "Isometric",
    image: "/Isometric.jpg",
    description: [
      "Isometric drawings translate piping layouts into fabrication-ready instructions.",
      "We provide accurate dimensions, weld points, and material callouts that support fast shop work and precise installation.",
      "Our team validates constructability to prevent site revisions and schedule delays.",
      "Each drawing is reviewed for clarity and compatibility with fabrication workflows.",
      "This reduces rework and improves installation confidence.",
    ],
    highlights: [
      "Fabrication-ready clarity",
      "Weld and spool accuracy",
      "Reduced field changes",
    ],
    deliverables: [
      "Dimensioned iso drawings",
      "Weld and spool references",
      "Material take-off details",
    ],
    outcomes: [
      "Faster shop fabrication",
      "Fewer site revisions",
      "Improved installation accuracy",
    ],
  },
  {
    key: "cad-ga",
    title: "General Arrangement (GA)",
    image: "/GeneralArrangements.jpg",
    description: [
      "GA drawings establish how equipment, structures, and access paths fit together on site.",
      "We produce layout plans that support safe access, maintenance, and operational efficiency.",
      "Our deliverables highlight spatial coordination and minimize interferences across disciplines.",
      "Each layout is optimized for workflow and long-term maintainability.",
      "This helps projects move smoothly from design to construction.",
    ],
    highlights: [
      "Optimized spatial coordination",
      "Access and clearance planning",
      "Operationally efficient layouts",
    ],
    deliverables: [
      "Layout plans with equipment positioning",
      "Access and clearance annotations",
      "Coordination-ready revisions",
    ],
    outcomes: [
      "Improved safety and access",
      "Better cross-discipline coordination",
      "Reduced layout conflicts",
    ],
  },
  {
    key: "cad-conversion",
    title: "CAD Conversion",
    image: "/image.png",
    description: [
      "CAD conversion modernizes legacy drawings into reusable digital assets.",
      "We clean, standardize, and validate converted files to match current drafting standards.",
      "This improves collaboration, storage, and future update cycles.",
      "Each converted drawing is structured for long-term maintainability.",
      "Teams gain faster access to reliable documentation.",
    ],
    highlights: [
      "Legacy data modernization",
      "Standardized layers and tags",
      "QA-checked deliverables",
    ],
    deliverables: [
      "Clean CAD source files",
      "Layer and tag normalization",
      "Revision-ready formatting",
    ],
    outcomes: [
      "Faster updates to legacy assets",
      "Improved data reuse",
      "Consistent drawing libraries",
    ],
  },
  {
    key: "cad-training",
    title: "CAD Training",
    image: "/lhqkttgb_image1.png",
    description: [
      "CAD training equips teams with the skills needed for consistent, high-quality drafting.",
      "We tailor sessions to your workflows, using real project scenarios and practical exercises.",
      "Participants learn best practices that reduce errors and accelerate delivery.",
      "Training materials are structured for ongoing reference and improvement.",
      "This builds long-term drafting capability across the organization.",
    ],
    highlights: [
      "Workflow-specific training",
      "Hands-on project exercises",
      "Reusable learning materials",
    ],
    deliverables: [
      "Workflow-based training sessions",
      "Practice exercises and templates",
      "Skill validation checkpoints",
    ],
    outcomes: [
      "Higher drafting accuracy",
      "Faster team ramp-up",
      "Consistent output standards",
    ],
  },
  {
    key: "cad-automation",
    title: "CAD Automation",
    image: "/CADautomation.webp",
    description: [
      "CAD automation reduces repetitive drafting work and increases delivery speed.",
      "We build automation scripts and workflows aligned to your drafting standards.",
      "This improves consistency and frees teams to focus on higher-value engineering tasks.",
      "Automation is documented for maintainability and future expansion.",
      "The result is faster, more reliable CAD output at scale.",
    ],
    highlights: [
      "Automation aligned to standards",
      "Consistent drafting quality",
      "Scalable delivery workflows",
    ],
    deliverables: [
      "Automation scripts and macros",
      "Standardized templates",
      "Usage and maintenance guidance",
    ],
    outcomes: [
      "Reduced drafting time",
      "Fewer manual errors",
      "Scalable delivery capacity",
    ],
  },
  {
    key: "cad-fire",
    title: "Fire Evacuation",
    image: "/Low-Carbon-Ammonia-image1.webp",
    description: [
      "Fire evacuation drawings provide clear guidance for safe exits and emergency response.",
      "We produce compliant layouts with clear routing, signage, and equipment references.",
      "Our drawings support audits, training, and operational readiness.",
      "Each plan is organized for quick understanding during critical events.",
      "This strengthens compliance and improves safety culture.",
    ],
    highlights: [
      "Compliance-ready evacuation plans",
      "Clear signage and routing",
      "Improved emergency readiness",
    ],
    deliverables: [
      "Evacuation route layouts",
      "Emergency equipment references",
      "Code-compliant labeling",
    ],
    outcomes: [
      "Improved safety readiness",
      "Compliance support",
      "Faster emergency response",
    ],
  },
];

export function generateStaticParams() {
  return flowDetails.map((detail) => ({ key: detail.key }));
}

export default async function CadFlowDetailPage({
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
          href="/services/cad#cad-flow"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
        >
          Back to CAD Flow Diagram
        </Link> */}

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              CAD Service Detail
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
