import Link from "next/link";

const contactItems = [
  {
    label: "Email",
    value: "contact@portaiengineers.com",
    href: "mailto:contact@portaiengineers.com",
    description: "Send us your project requirements and timelines.",
    icon: (
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
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="m22 8-10 6L2 8" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 9440584273",
    href: "tel:+919440584273",
    description: "Talk to our engineering team directly.",
    icon: (
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.06a2 2 0 0 1 2.11-.45c.85.24 1.72.42 2.62.54A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+91 9440584273",
    href: "https://wa.me/919440584273",
    description: "Start a quick chat with our team.",
    icon: (
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
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M8.6 8.9c.2-.3.5-.3.7-.3h.6c.2 0 .5 0 .7.6l.6 1.6c.1.3 0 .5-.2.7l-.6.6c-.2.2-.2.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.6c.2-.2.4-.3.7-.2l1.6.6c.6.2.6.5.6.7v.6c0 .2 0 .5-.3.7-.3.3-1 1-2.4.7-1.4-.3-3.1-1.2-4.5-2.6-1.4-1.4-2.3-3.1-2.6-4.5-.3-1.4.4-2.1.7-2.4z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "Kukatpally, Hyderabad, Telangana - 500072, India",
    href: "https://maps.app.goo.gl/1m6XzmsweawyRhDh8",
    description: "Visit our office or schedule an onsite consultation.",
    icon: (
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
        <path d="M12 21s7-6.3 7-11.2A7 7 0 1 0 5 9.8C5 14.7 12 21 12 21z" />
        <circle cx="12" cy="9.8" r="2.5" />
      </svg>
    ),
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/port-ai/",
    icon: (
      <svg
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3ZM10.5 14.7v-5.4l4.7 2.7-4.7 2.7Z" />
      </svg>
    ),
  },
];

export default function GetInTouchSection() {
  return (
    <section className="w-full bg-[var(--color-primary-soft)] px-5 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Get in Touch
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Ready to Collaborate with Port AI Engineers?
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] sm:text-base lg:text-lg">
            Reach out with your project goals, timelines, or technical questions. We
            respond quickly with clear next steps and expert guidance.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_var(--color-primary-glow)] sm:p-6"
              target={item.label === "Address" ? "_blank" : undefined}
              rel={item.label === "Address" ? "noreferrer" : undefined}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] text-[var(--color-primary)]">
                {item.icon}
              </div>
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {item.label}
                </div>
                <div className="text-base font-semibold text-[var(--color-text)] sm:text-lg">
                  {item.value}
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Follow Us
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)] sm:text-xl">
                Stay connected with Port AI Engineers
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
