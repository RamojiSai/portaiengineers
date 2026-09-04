import Image from "next/image";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  isSpecial?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Plant Engineering Services",
    links: [
      { label: "Engineering Services", href: "/services/engineering/" },
      { label: "Process Engineering", href: "/services/engineering/process/" },
      { label: "3D Piping Engineering", href: "/services/engineering/piping-3d/" },
      { label: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { label: "Instrumentation & Control", href: "/services/engineering/instrumentation/" },
      { label: "Piping Stress Analysis", href: "/services/engineering/piping-stress-analysis/" },
      { label: "Greenfield Projects", href: "/services/engineering/greenfield-projects/" },
      { label: "Brownfield Projects", href: "/services/engineering/brownfield-projects/" },
      { label: "Power Plants", href: "/services/engineering/power-plants/" },
    ],
  },
  {
    title: "Cad Services",
    links: [
      { label: "Process Flow Diagram (PFD)", href: "/services/cad/pfd/" },
      { label: "P&ID Drawings", href: "/services/cad/pid/" },
      { label: "Isometric Drawings", href: "/services/cad/isometric/" },
      { label: "General Arrangement", href: "/services/cad/general-arrangement/" },
      { label: "CAD Conversion", href: "/services/cad/conversion/" },
      { label: "CAD Training", href: "/services/cad/training/" },
      { label: "CAD Automation", href: "/services/cad/automation/" },
      { label: "Fire Evacuation Drawings", href: "/services/cad/fire-evacuation/" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "AI Engineering Tools", href: "/platform/overview/" },
      { label: "Search + Data AI", href: "/platform/overview/" },
      { label: "Security + Governance", href: "/platform/overview/" },
      { label: "Development Tools", href: "/platform/overview/" },
      { label: "Features", href: "/platform/features/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Leadership", href: "/#about" },
      { label: "Partners", href: "/#about" },
      { label: "Contact Us", href: "/contact/" },
    ],
  },

  {
    title: "Certifications",
    links: [
      { label: "ISO  9001 : 2015", href: "/blogs/iso-9001-2015/" },
      { label: "Startup India Certified", href: "/blogs/startup-certified/" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/port-ai/",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 7h4v10h-4v-10Zm7 0h3.8v1.4h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.4v5h-4v-4.5c0-1.1 0-2.5-1.6-2.5-1.6 0-1.9 1.2-1.9 2.4v4.6h-4v-10Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/portaiengineers?igsh=YTJseWtiM2pldWN0",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588678006058",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 9.3V7.6c0-.8.5-1 1-1h2V3.2h-2.7c-2.7 0-3.6 2-3.6 3.3v2.8H8v3.2h2.2V21h3.3v-8.5h2.5l.4-3.2h-2.9Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@portaiengineers?si=FkXxfA4DgDnX2yEl",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3ZM10.5 14.7v-5.4l4.7 2.7-4.7 2.7Z" />
      </svg>
    ),
  },
];

export default function FooterSection() {
  return (
    <footer className="w-full bg-[var(--color-footer-bg)] text-[var(--color-on-footer)]">
      <div className="border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)]" />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.2fr)]">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-footer-muted)]">
                {column.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-[var(--color-on-footer)]">
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

          <div className="h-full rounded-3xl border border-[color-mix(in_srgb,var(--color-on-footer)_12%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_6%,transparent)] p-6 shadow-[0_22px_44px_var(--color-card-shadow)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-footer)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] text-[var(--color-on-footer)]">
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
            <div className="mt-5 space-y-3">
              <h4 className="text-xl font-semibold text-[var(--color-on-footer)]">Let’s work together</h4>
              <p className="text-sm leading-relaxed text-[var(--color-on-footer-muted)]">
                Get answers and a customized quote for your projects
              </p>
              <a
                href="https://calendar.app.google/4EDU6NFyWQLtrG91A"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between rounded-xl border border-[color-mix(in_srgb,var(--color-on-footer)_55%,transparent)] bg-transparent px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-on-footer)] transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_18px_rgba(15,118,110,0.35)]"
              >
                SCHEDULE DEMO
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/Logo.jpeg"
                alt="Port AI logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="space-y-1 text-sm text-[var(--color-on-footer-muted)]">
                <div className="flex flex-col leading-tight text-[var(--color-on-footer)]">
                  <span className="text-base font-semibold">Port AI</span>
                  <span className="text-xs font-medium text-[var(--color-on-footer-muted)]">
                    Engineers PVT. LTD
                  </span>
                </div>
                <p>
                  Advanced Engineering Powered by AI
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_6%,transparent)]">
                <Image
                  src="/LocationQR.png"
                  alt="Location QR code"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-on-footer-muted)]">
                  Follow us on
                </span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-footer)_15%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_8%,transparent)] text-[var(--color-on-footer)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] pt-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--color-on-footer-muted)]">
              © 2026 Port AI. All rights reserved.
            </p>
            <Link
              href="/blogs/iso-9001-2015"
              className="flex items-center text-xs font-semibold text-[var(--color-primary)]"
            >
              <div className="relative flex items-center gap-3 rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] px-3 py-2 shadow-[0_18px_40px_var(--color-card-shadow)]">
                <img
                  src="/ISOimage.webp"
                  alt="ISO 9001:2015 certification badge"
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-10 object-contain"
                />
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  ISO Certified
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
