import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting...",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://portaiengineers.com/services/",
  },
};

export default function LegacyPlatformFeaturesRedirectPage() {
  const target = "/services/";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg)] px-6 text-center text-[var(--color-text)]">
      <div className="max-w-md space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Page Moved
        </p>
        <p className="text-base font-medium">
          Redirecting to{" "}
          <a href={target} className="text-[var(--color-primary)] underline">
            {target}
          </a>
          ...
        </p>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace("${target}");`,
          }}
        />
      </div>
    </div>
  );
}
