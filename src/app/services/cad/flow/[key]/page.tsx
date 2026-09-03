import type { Metadata } from "next";

const REDIRECT_MAP: Record<string, string> = {
  "cad-pfd": "/services/cad/pfd/",
  "cad-pid": "/services/cad/pid/",
  "cad-iso": "/services/cad/isometric/",
  "cad-ga": "/services/cad/general-arrangement/",
  "cad-conversion": "/services/cad/conversion/",
  "cad-training": "/services/cad/training/",
  "cad-automation": "/services/cad/automation/",
  "cad-fire": "/services/cad/fire-evacuation/",
};

export function generateStaticParams() {
  return Object.keys(REDIRECT_MAP).map((key) => ({ key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ key: string }>;
}): Promise<Metadata> {
  const { key } = await params;
  const target = REDIRECT_MAP[key] || "/services/cad/";
  const targetUrl = `https://portaiengineers.com${target}`;

  return {
    title: "Redirecting...",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: targetUrl,
    },
  };
}

export default async function LegacyCadFlowRedirectPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const target = REDIRECT_MAP[key] || "/services/cad/";

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
