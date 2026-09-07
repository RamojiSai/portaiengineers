import Image from "next/image";

const designPlatforms = [
  { name: "AutoCAD", image: "/autocad-CUR7zBdd.png" },
  { name: "AutoCAD Plant 3D", image: "/autocad-plant3d-BBiTCeXl.webp" },
  { name: "SP3D", image: "/sp3d-DUucQ2SU.png" },
  { name: "E3D", image: null, text: "E3D" },
  { name: "PDMS", image: "/pdms-BoeT2FrU.png" },
  { name: "CADWORX", image: "/cadworx-Cu0tcT4O.webp" },
];

const stressAnalysisPlatforms = [
  { name: "CAESAR II", image: "/caesar-ii-4cfuN5G6.png" },
  { name: "AutoPIPE", image: "/autopipe-B2IGFGbp.png" },
];

// Combine all platforms into a single marquee line
const allPlatforms = [...designPlatforms, ...stressAnalysisPlatforms];

export function WorkPlatformsSection() {
  return (
    <section className="py-20 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] text-[var(--color-primary)] text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
            Work Platforms
          </h2>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-sm sm:text-base">
            We leverage industry-leading software platforms to deliver precise engineering
            and design solutions for complex industrial projects.
          </p>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-6 pr-6">
            {allPlatforms.map((platform, idx) => (
              <PlatformCard key={`a-${idx}`} platform={platform} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 animate-marquee gap-6 pr-6" aria-hidden="true">
            {allPlatforms.map((platform, idx) => (
              <PlatformCard key={`b-${idx}`} platform={platform} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-muted)] text-sm max-w-3xl mx-auto">
            Our engineering team is proficient in all major industry-standard platforms,
            ensuring seamless integration with your existing workflows and delivering
            outputs in your preferred format.
          </p>
        </div>
      </div>

      {/* Marquee animation styles */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}

function PlatformCard({
  platform,
}: {
  platform: { name: string; image: string | null; text?: string };
}) {
  return (
    <div
      className="group bg-[var(--color-surface)] rounded-2xl p-6 shadow-[0_12px_30px_var(--color-card-shadow)] hover:shadow-[0_20px_40px_var(--color-card-shadow)] transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] w-[180px] border border-[var(--color-border)] hover:border-[var(--color-primary)]"
    >
      {platform.image ? (
        <div className="flex-1 flex items-center justify-center w-full mb-3 px-2 h-[70px]">
          <Image
            src={platform.image}
            alt={`${platform.name} engineering software platform logo`}
            width={100}
            height={70}
            className="w-auto h-auto max-w-[100px] max-h-[70px] object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-xl bg-[var(--color-primary)] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl font-bold text-[var(--color-on-primary)]">{platform.text}</span>
        </div>
      )}
      <span className="text-sm font-medium text-[var(--color-text)] text-center line-clamp-2">
        {platform.name}
      </span>
    </div>
  );
}