import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-base text-[var(--color-muted)]">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-[var(--color-primary)] px-6 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
      >
        Go home
      </Link>
    </main>
  );
}
