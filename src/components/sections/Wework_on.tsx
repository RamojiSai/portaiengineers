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
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container-industrial">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            Work Platforms
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage industry-leading software platforms to deliver precise engineering
            and design solutions for complex industrial projects.
          </p>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

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

      <div className="container-industrial">
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm max-w-3xl mx-auto">
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
      className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] w-[180px] border border-border/50 hover:border-accent/30"
    >
      {platform.image ? (
        <div className="flex-1 flex items-center justify-center w-full mb-3 px-2">
          <img
            src={platform.image}
            alt={platform.name}
            className="w-auto h-auto max-w-[100px] max-h-[70px] object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
          <span className="text-2xl font-bold text-primary-foreground">{platform.text}</span>
        </div>
      )}
      <span className="text-sm font-medium text-foreground/80 text-center line-clamp-2">
        {platform.name}
      </span>
    </div>
  );
}