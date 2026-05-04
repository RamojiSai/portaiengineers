import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Plant Engineering Services",
    links: [
      { label: "Engineering Services", href: "/services/engineering#engineering-flow" },
      { label: "Process Engineering", href: "/services/engineering#engineering-flow" },
      { label: "3D Piping Design", href: "/services/engineering#engineering-flow" },
      { label: "Piping Engineering Services", href: "/services/engineering#engineering-flow" },
      { label: "Instrumentation & Control", href: "/services/engineering#engineering-flow" },
      { label: "Piping Stress Analysis", href: "/services/engineering#engineering-flow" },
      { label: "Greenfield Projects", href: "/services/engineering#engineering-flow" },
      { label: "Brownfield Projects", href: "/services/engineering#engineering-flow" },
    ],
  },
  {
    title: "Cad Services",
    links: [
      { label: "Process Flow Diagram (PFD)", href: "/services/engineering#cad-flow" },
      { label: "P&ID Drawings", href: "/services/engineering#cad-flow" },
      { label: "Isometric Drawings", href: "/services/engineering#cad-flow" },
      { label: "General Arrangement", href: "/services/engineering#cad-flow" },
      { label: "CAD Conversion", href: "/services/engineering#cad-flow" },
      { label: "CAD Training", href: "/services/engineering#cad-flow" },
      { label: "CAD Automation", href: "/services/engineering#cad-flow" },
      { label: "Fire Evacuation Drawings", href: "/services/engineering#cad-flow" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "AI Engineering Tools", href: "/platform/overview" },
      { label: "Search + Data AI", href: "/platform/overview" },
      { label: "Security + Governance", href: "/platform/overview" },
      { label: "Development Tools", href: "/platform/overview" },
      { label: "Integrations", href: "/platform/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Leadership", href: "/#about" },
      { label: "Partners", href: "/#about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Reports & Research", href: "/blogs/all" },
      { label: "Implementation Index", href: "/blogs/all" },
      { label: "AI Readiness Report", href: "/blogs/all" },
      { label: "Try Demo", href: "/#cta", isSpecial: true },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="border-t border-white/10" />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.2fr)]">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {column.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-white">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                  >
                    {link.isSpecial ? (
                      <span className="flex items-center gap-2">
                        {link.label}
                        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_rgba(15,118,110,0.8)]" />
                      </span>
                    ) : (
                      link.label
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                CTA
              </span>
            </div>
            <div className="mt-4 space-y-3">
              <h4 className="text-xl font-semibold text-white">Let’s work together</h4>
              <p className="text-sm text-slate-400">
                Get answers and a customized quote for your projects.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Schedule Demo
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  -&gt;
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.jpeg"
                alt="Port AI logo"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="space-y-1 text-sm text-slate-400">
                <div className="flex flex-col leading-tight text-white">
                  <span className="text-base font-semibold">Port AI</span>
                  <span className="text-xs font-medium text-slate-400">
                    Engineers PVT. LTD
                  </span>
                </div>
                <p>
                  Enterprise Engineers that deliver results. Built with modern technology.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-4 rounded-xl border border-dashed border-white/20" />
                <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_rgba(15,118,110,0.8)] animate-float" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                QR Code
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            © 2025 Port AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
