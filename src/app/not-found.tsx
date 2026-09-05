import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Port AI Engineers",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <title>Page Not Found | Port AI Engineers</title>
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        404 — Not Found
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-[var(--color-muted)]">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
        <Link
          href="/services/engineering/"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Engineering Services
        </Link>
        <Link
          href="/services/cad/"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          CAD Services
        </Link>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
