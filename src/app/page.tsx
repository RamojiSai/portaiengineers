import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProvenResultsSection from "../components/sections/ProvenResultsSection";

export default function Home() {
  const engineeringServices = [
    {
      title: "Engineering Services",
      description: "Integrated plant planning and execution support.",
    },
    {
      title: "Process Engineering",
      description: "Process optimization from concept through delivery.",
    },
    {
      title: "3D Piping Design",
      description: "Accurate 3D routing for build-ready layouts.",
    },
    {
      title: "Piping Engineering",
      description: "Code-compliant piping systems and specifications.",
    },
    {
      title: "Instrumentation & Control",
      description: "Smart control strategies for safe operations.",
    },
    {
      title: "Piping Stress Analysis",
      description: "Stress validation for reliability and safety.",
    },
    {
      title: "Greenfield Projects",
      description: "End-to-end engineering for new facilities.",
    },
    {
      title: "Brownfield Projects",
      description: "Revamps and upgrades with minimal downtime.",
    },
  ];

  const cadServices = [
    {
      title: "Process Flow Diagram (PFD)",
      description: "Clear process mapping for early alignment.",
    },
    {
      title: "P&ID Drawings",
      description: "Detailed piping and instrumentation diagrams.",
    },
    {
      title: "Isometric Drawings",
      description: "Fabrication-ready isometrics and spools.",
    },
    {
      title: "General Arrangement",
      description: "Site and equipment layout coordination.",
    },
    {
      title: "CAD Conversion",
      description: "Migrate legacy files to modern CAD.",
    },
    {
      title: "CAD Training",
      description: "Upskill teams with practical CAD workflows.",
    },
    {
      title: "CAD Automation",
      description: "Automations that reduce drafting time.",
    },
    {
      title: "Fire Evacuation Drawings",
      description: "Compliant safety plans and egress maps.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <HeroSection />
      <AboutSection />
      <section
        className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-20 sm:px-10 sm:py-24"
        id="services"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Services
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Engineering and CAD services built for complex delivery.
            </h1>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              We transform complex concepts into precision-engineered realities, using advanced CAD solutions to accelerate innovation and streamline the path from blueprint to build.
            </p>
            <button
              type="button"
              className="w-fit rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              Learn More
            </button>
          </div>

          <div className="mt-12 grid gap-10">
            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-200/80" />
                <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  Engineering Services
                </h2>
                <div className="h-px flex-1 bg-slate-200/80" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {engineeringServices.map((service) => (
                  <div
                    key={service.title}
                    className="group flex h-full min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border border-transparent bg-[linear-gradient(135deg,#e0f2fe,#f8fbff)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#8494FF] hover:bg-[color-mix(in_srgb,#8494FF_6%,white)] hover:shadow-[0_22px_44px_rgba(15,23,42,0.14)]"
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-slate-200/80" />
                <h2 className="text-center text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  CAD Services
                </h2>
                <div className="h-px flex-1 bg-slate-200/80" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {cadServices.map((service) => (
                  <div
                    key={service.title}
                    className="group flex h-full min-h-[220px] cursor-pointer flex-col justify-between rounded-2xl border border-transparent bg-[linear-gradient(135deg,#e0f2fe,#f8fbff)] p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-[#8494FF] hover:bg-[color-mix(in_srgb,#8494FF_6%,white)] hover:shadow-[0_22px_44px_rgba(15,23,42,0.14)]"
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-[var(--color-text)]">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProvenResultsSection />
    </div>
  );
}
