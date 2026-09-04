import type { Metadata } from "next";

const REDIRECT_MAP: Record<string, string> = {
  "process": "/services/engineering/process/",
  "piping-3d": "/services/engineering/piping-3d/",
  "piping-eng": "/services/engineering/piping-engineering/",
  "instrumentation": "/services/engineering/instrumentation/",
  "stress": "/services/engineering/piping-stress-analysis/",
  "greenfield": "/services/engineering/greenfield-projects/",
  "brownfield": "/services/engineering/brownfield-projects/",
  "power-plants": "/services/engineering/power-plants/",
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
  const target = REDIRECT_MAP[key] || "/services/engineering/";
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

export default async function LegacyEngineeringFlowRedirectPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const target = REDIRECT_MAP[key] || "/services/engineering/";

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
