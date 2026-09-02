import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Platform Features & Engineering Capabilities",
  description:
    "Explore Port AI Engineers' core capabilities across engineering design, technical consultancy, project management support, and skilled manpower solutions.",
  alternates: {
    canonical: "https://portaiengineers.com/platform/features/",
  },
  openGraph: {
    title: "Platform Features & Engineering Capabilities | Port AI Engineers",
    description:
      "Explore Port AI Engineers' core capabilities across engineering design, technical consultancy, project management support, and skilled manpower solutions.",
    url: "https://portaiengineers.com/platform/features/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/hero-powerplant-em3KN7cR.jpg",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Platform Features & Capabilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Features & Engineering Capabilities | Port AI Engineers",
    description:
      "Explore Port AI Engineers' core capabilities across engineering design, technical consultancy, project management support, and skilled manpower solutions.",
    images: ["/hero-powerplant-em3KN7cR.jpg"],
  },
};

const coreServices = [
  {
    title: "Engineering Design Services",
    description:
      "We provide engineering design solutions that help organizations transform concepts into practical and scalable solutions.",
    items: [
      "Design development",
      "Engineering documentation",
      "Design validation",
      "Process optimization",
      "Technical drawings",
      "Design reviews",
    ],
    benefits: [
      "Improved project accuracy",
      "Reduced rework",
      "Faster project execution",
      "Better compliance",
    ],
  },
  {
    title: "Technical Consultancy",
    description:
      "Our consulting services help businesses make informed engineering decisions.",
    items: [
      "Feasibility analysis",
      "Technical assessment",
      "Process improvement",
      "Engineering strategy",
      "Risk identification",
      "Performance optimization",
    ],
    benefits: [
      "Reduced project risks",
      "Improved operational efficiency",
      "Better decision-making",
    ],
  },
  {
    title: "Project Management Support",
    description:
      "Successful projects require planning, coordination, and execution. We support organizations throughout the project lifecycle.",
    items: [
      "Project planning",
      "Resource management",
      "Schedule tracking",
      "Quality monitoring",
      "Stakeholder coordination",
    ],
    benefits: [
      "Timely project delivery",
      "Better cost control",
      "Increased project visibility",
    ],
  },
  {
    title: "Skilled Manpower Support",
    description:
      "We provide qualified engineering professionals to support client operations and project requirements.",
    items: [
      "Design engineers",
      "Project engineers",
      "Site engineers",
      "Technical specialists",
      "Engineering consultants",
    ],
    benefits: [
      "Reduced hiring time",
      "Flexible workforce",
      "Specialized expertise",
    ],
  },
];

const industries = [
  "Manufacturing",
  "Energy & Utilities",
  "Infrastructure",
  "Marine & Port Operations",
  "Oil & Gas",
  "Industrial Facilities",
  "Transportation",
  "Technology & Automation",
];

const strengths = [
  { label: "Engineering Design", value: "High Accuracy" },
  { label: "Consultancy", value: "Better Decisions" },
  { label: "Project Support", value: "Faster Execution" },
  { label: "Manpower Solutions", value: "Skilled Resources" },
  { label: "Quality Management", value: "Reliable Delivery" },
  { label: "Innovation", value: "Future-Ready Solutions" },
  { label: "Industry Expertise", value: "Domain Knowledge" },
];

const deliveryFlow = [
  "Client Requirement",
  "Requirement Analysis",
  "Engineering Solution Design",
  "Execution & Implementation",
  "Quality Assurance",
  "Project Delivery",
  "Customer Success",
];

export default function FeaturesPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/platform/features/#webpage",
    url: "https://portaiengineers.com/platform/features/",
    name: "Platform Features & Engineering Capabilities",
    description:
      "Explore Port AI Engineers' core capabilities across engineering design, technical consultancy, project management support, and skilled manpower solutions.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Platform", url: "https://portaiengineers.com/platform/" },
    { name: "Features", url: "https://portaiengineers.com/platform/features/" },
  ]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="relative overflow-hidden px-6 py-16 sm:px-10 sm:py-20">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[var(--color-muted)]">
            <Link href="/" className="transition-colors hover:text-[var(--color-primary)]">Home</Link>
            <span>/</span>
            <Link href="/platform/" className="transition-colors hover:text-[var(--color-primary)]">Platform</Link>
            <span>/</span>
            <span className="text-[var(--color-primary)]">Features</span>
          </nav>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              The Port AI Advantage
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Engineering Excellence. Innovation. Reliability.
            </h1>
            <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
              In today&apos;s rapidly evolving industrial landscape, organizations require
              more than just engineering support. Port AI Engineers Pvt. Ltd. bridges
              engineering expertise with modern technological advancement to help
              businesses accelerate delivery, optimize operations, and achieve
              sustainable growth.
            </p>
            <p className="max-w-3xl text-base text-[var(--color-muted)] sm:text-lg">
              From Engineering Design Services and Technical Consultancy to Project
              Management Support and Skilled Manpower Solutions, we empower
              organizations to execute projects with confidence and efficiency.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">Our Mission</h2>
              <p className="mt-3 text-sm text-[var(--color-muted)] sm:text-base">
                To provide world-class engineering solutions that enable organizations
                to improve productivity, maintain quality standards, and achieve
                operational excellence.
              </p>
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">Our Vision</h2>
              <p className="mt-3 text-sm text-[var(--color-muted)] sm:text-base">
                To become a globally recognized engineering and technology partner
                known for innovation, reliability, quality, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              What We Do
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Engineering Services Built for Modern Industry
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Engineering Design Services",
              "Technical Consultancy Services",
              "Project Management Support",
              "Skilled Manpower Solutions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center shadow-[0_16px_40px_var(--color-card-shadow)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] text-[var(--color-primary)]">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 12h18" />
                    <path d="M12 3v18" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Our Core Services
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Practical, Scalable Engineering Support
            </h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8"
              >
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted)] sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      Services Include
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      Benefits
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                      {service.benefits.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Industries We Serve
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
              Multidisciplinary Expertise Across Sectors
            </h2>
            <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
              Our multidisciplinary expertise enables us to support organizations
              across diverse sectors while adapting to unique business requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-[0_16px_32px_var(--color-card-shadow)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Why Choose Port AI Engineers?
              </h2>
              <div className="mt-6 space-y-4 text-sm text-[var(--color-muted)] sm:text-base">
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Engineering Expertise:</span>
                  {" "}Our team combines technical knowledge with practical industry experience.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Quality-Driven Approach:</span>
                  {" "}We follow structured processes and internationally recognized quality practices.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Customer-Centric Execution:</span>
                  {" "}Every project is executed with a focus on client objectives and measurable outcomes.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Innovation & Technology:</span>
                  {" "}We continuously adopt modern engineering methodologies and digital technologies.
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Scalable Solutions:</span>
                  {" "}Our services are designed to support organizations of all sizes.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_16%,var(--color-bg)),var(--color-bg))] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] text-[var(--color-primary)]">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2l7 3v6c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                    Our Quality Commitment
                  </p>
                  <h3 className="text-xl font-semibold text-[var(--color-text)]">
                    ISO 9001:2015 Certified
                  </h3>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/ISOimage.webp"
                    alt="ISO 9001:2015 certification badge"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 object-contain"
                  />
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    ISO 9001:2015
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                  {[
                    "Consistent service quality",
                    "Continuous improvement",
                    "Customer satisfaction",
                    "Process excellence",
                    "Operational reliability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_18px_40px_var(--color-card-shadow)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              How We Deliver Value
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
              A proven delivery framework for client success
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {deliveryFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]"
                >
                  <span>{step}</span>
                  {index < deliveryFlow.length - 1 ? (
                    <span className="text-[var(--color-muted)]">→</span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_16px_32px_var(--color-card-shadow)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {item.label}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--color-text)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[var(--color-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_14%,var(--color-bg)),var(--color-bg))] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                Looking Ahead
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Driving the Future with Quality & Innovation
              </h2>
              <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                As industries continue embracing digital transformation, automation,
                and intelligent engineering practices, Port AI Engineers Pvt. Ltd.
                remains committed to delivering innovative solutions that drive
                business growth and operational excellence.
              </p>
              <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                We will continue investing in engineering excellence, quality
                management, digital innovation, customer success, and sustainable
                growth.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-sm text-[var(--color-muted)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Focus Areas
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Engineering Excellence",
                  "Quality Management",
                  "Digital Innovation",
                  "Customer Success",
                  "Sustainable Growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_20px_50px_var(--color-card-shadow)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Partner With Port AI Engineers
              </h2>
              <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                Whether you need engineering design support, technical consultancy,
                project management expertise, or skilled manpower solutions, Port AI
                Engineers Pvt. Ltd. is committed to helping you achieve your business
                objectives with confidence.
              </p>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                Engineering Excellence. Innovation. Reliability.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Contact Us
              </Link>
              <Link
                href="/platform/overview/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Platform Overview &rarr;
              </Link>
              <Link
                href="/platform/"
                className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)] hover:underline"
              >
                Back to Platform Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
