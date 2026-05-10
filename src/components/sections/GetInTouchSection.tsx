import Link from "next/link";

const contactItems = [
  {
    label: "Email",
    value: "contact@portaienginees.com",
    href: "mailto:contact@portaienginees.com",
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

export default function GetInTouchSection() {
  return (
    <section className="w-full bg-[var(--color-primary-soft)] px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Get in Touch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Ready to Collaborate with Port AI Engineers?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
            Reach out with your project goals, timelines, or technical questions. We
            respond quickly with clear next steps and expert guidance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_20px_50px_var(--color-primary-glow)]"
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
                <div className="text-lg font-semibold text-[var(--color-text)]">
                  {item.value}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
