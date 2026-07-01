import Link from "next/link";

import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProvenResultsSection from "../components/sections/ProvenResultsSection";

export default function Home() {
  const engineeringServices = [
    {
      title: "Engineering Services",
      description: "Integrated plant planning and execution support.",
      href: "/services/engineering",
    },
    {
      title: "Process Engineering",
      description: "Process optimization from concept through delivery.",
      href: "/services/engineering/flow/process",
    },
    {
      title: "3D Piping Engineering",
      description: "Accurate 3D routing for build-ready layouts.",
      href: "/services/engineering/flow/piping-3d",
    },
    {
      title: "Piping Engineering",
      description: "Code-compliant piping systems and specifications.",
      href: "/services/engineering/flow/piping-eng",
    },
    {
      title: "Instrumentation & Control",
      description: "Smart control strategies for safe operations.",
      href: "/services/engineering/flow/instrumentation",
    },
    {
      title: "Piping Stress Analysis",
      description: "Stress validation for reliability and safety.",
      href: "/services/engineering/flow/stress",
    },
    {
      title: "Greenfield Projects",
      description: "End-to-end engineering for new facilities.",
      href: "/services/engineering/flow/greenfield",
    },
    {
      title: "Brownfield Projects",
      description: "Revamps and upgrades with minimal downtime.",
      href: "/services/engineering/flow/brownfield",
    },
  ];

  const cadServices = [
    {
      title: "Process Flow Diagram (PFD)",
      description: "Clear process mapping for early alignment.",
      href: "/services/cad/flow/cad-pfd",
    },
    {
      title: "P&ID Drawings",
      description: "Detailed piping and instrumentation diagrams.",
      href: "/services/cad/flow/cad-pid",
    },
    {
      title: "Isometric Drawings",
      description: "Fabrication-ready isometrics and spools.",
      href: "/services/cad/flow/cad-iso",
    },
    {
      title: "General Arrangement",
      description: "Site and equipment layout coordination.",
      href: "/services/cad/flow/cad-ga",
    },
    {
      title: "CAD Conversion",
      description: "Migrate legacy files to modern CAD.",
      href: "/services/cad/flow/cad-conversion",
    },
    {
      title: "CAD Training",
      description: "Upskill teams with practical CAD workflows.",
      href: "/services/cad/flow/cad-training",
    },
    {
      title: "CAD Automation",
      description: "Automations that reduce drafting time.",
      href: "/services/cad/flow/cad-automation",
    },
    {
      title: "Fire Evacuation Drawings",
      description: "Compliant safety plans and egress maps.",
      href: "/services/cad/flow/cad-fire",
    },
  ];

  const industriesWeServe = [
    "Oil & Gas",
    "Power Plants",
    "Pharmaceutical",
    "Food & Beverage (F&B)",
    "Chemicals & Petrochemicals",
    "Steel & Metals",
    "Paints & Coatings",
    "Cement Plants",
    "Water & Wastewater Treatment",
    "Renewable Energy",
    "Fertilizers",
    "Refineries",
    "Process Industries",
    "Manufacturing Plants",
    "Pulp & Paper",
    "Mining & Minerals",
    "HVAC & Utilities",
    "Marine & Offshore",
    "Dairy Plants",
    "Distilleries & Breweries",
    "Sugar Plants",
    "Textile Industries",
    "LNG / Gas Processing",
    "Bulk Material Handling Plants",
    "Industrial Utilities",
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <HeroSection />
      <section className="bg-[var(--color-bg)] px-6 pt-1 pb-6 sm:px-10 sm:pt-2 sm:pb-8 mt-1">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
            Industries We Serve
          </h2>
          <div className="marquee mt-4 rounded-3xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] py-3 sm:py-4">
            <div className="marquee-track gap-3 px-4 sm:px-6">
              {[...industriesWeServe, ...industriesWeServe].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="whitespace-nowrap rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)] shadow-[0_10px_24px_var(--color-card-shadow)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-[var(--color-bg)] px-6 py-20 sm:px-10 sm:py-24"
        id="services"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Services
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Engineering and CAD services built for complex delivery.
            </h1>
            <p className="max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
              We transform complex concepts into precision-engineered realities, using advanced CAD solutions to accelerate innovation and streamline the path from blueprint to build.
            </p>
            <Link
              href="/services/engineering"
              className="w-fit rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-12 grid gap-10">
            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
                <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Engineering Services
                </h2>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {engineeringServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex h-full min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border border-transparent bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] p-6 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] hover:shadow-[0_22px_44px_var(--color-primary-glow)]"
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
                <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  CAD Services
                </h2>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {cadServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group flex h-full min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border border-transparent bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] p-6 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] hover:shadow-[0_22px_44px_var(--color-primary-glow)]"
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--color-muted)]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-bg)] px-6 py-14 sm:px-10 sm:py-16">
        <div className="mx-auto w-full max-w-6xl">
          <div className="fade-in-up group relative overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_14%,var(--color-bg)),var(--color-bg))] p-6 shadow-[0_20px_50px_var(--color-card-shadow)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-3xl" />
            <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] blur-3xl" />

            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_40%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_16%,transparent)] text-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary-glow)]">
                    <svg
                      className="h-7 w-7"
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
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
                      Certification
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                      ISO 9001:2015 Certified Company
                    </h2>
                    <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                      Port AI Engineers Pvt. Ltd. is officially ISO 9001:2015 certified, demonstrating our commitment to quality management, engineering excellence, and continuous improvement.
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center gap-4 rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] px-5 py-4 shadow-[0_18px_40px_var(--color-card-shadow)]">
                  <img
                    src="/ISOimage.webp"
                    alt="ISO 9001:2015 certification badge"
                    className="h-14 w-14 object-contain"
                  />
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    ISO Certified
                  </div>
                </div>
              </div>
              <Link
                href="/blogs/iso-9001-2015"
                className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ProvenResultsSection />
    </div>
  );
}
