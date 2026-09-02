import type { ReactNode } from "react";

export type BlogCard = {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  href: string;
  tags?: string[];
};

export type BlogDetail = BlogCard & {
  content: ReactNode;
};

export const blogCards: BlogCard[] = [
  {
    slug: "all",
    title: "Inside Port AI Engineers",
    category: "Company News",
    image: "/hero-petrochemical-DMHvwGIB.webp",
    excerpt:
      "A closer look at how precision engineering, process-driven workflows, and ISO-grade delivery shape our mission for modern industrial projects.",
    date: "May 5, 2026",
    author: "Port AI Engineers",
    readTime: "8 min read",
    href: "/blogs/all",
    tags: ["Engineering", "Company", "Quality"],
  },
  {
    slug: "engineers-blog",
    title: "CAD Services Designed with Precision",
    category: "CAD Services",
    image: "/cad-services-BOtMPt39.jpg",
    excerpt:
      "Explore end-to-end CAD workflows, model coordination, and drawing delivery built for speed, accuracy, and fabrication-ready execution.",
    date: "July 2025",
    author: "Port AI CAD Team",
    readTime: "7 min read",
    href: "/blogs/engineers-blog",
    tags: ["CAD", "Design", "BIM"],
  },
  {
    slug: "iso-9001-2015",
    title: "ISO 9001:2015 Certification Milestone",
    category: "Quality Management",
    image: "/ISOimage.webp",
    excerpt:
      "Our ISO 9001:2015 certification validates the systems that power consistent engineering quality and customer-first delivery.",
    date: "May 2025",
    author: "Port AI Engineers",
    readTime: "5 min read",
    href: "/blogs/iso-9001-2015",
    tags: ["ISO", "Quality", "Process"],
  },
  {
    slug: "startup-certified",
    title: "Startup India Recognition",
    category: "Company News",
    image: "/images/certifications/startup-india.webp",
    excerpt:
      "Port AI Engineers is officially recognized under Startup India, supporting innovation, growth, and engineering excellence.",
    date: "June 2026",
    author: "Port AI Engineers",
    readTime: "6 min read",
    href: "/blogs/startup-certified",
    tags: ["Recognition", "Growth", "Innovation"],
  },
  {
    slug: "piping-stress-analysis",
    title: "Piping Stress Analysis for Reliable Operation",
    category: "Piping Stress Analysis",
    image: "/Pipe-Stress-analysis.png",
    excerpt:
      "Understand how stress analysis helps prevent fatigue, reduce risk, and keep piping systems safe under load and thermal movement.",
    date: "June 2026",
    author: "Port AI Engineering",
    readTime: "6 min read",
    href: "/blogs/piping-stress-analysis",
    tags: ["Piping", "Stress", "Reliability"],
  },
  {
    slug: "greenfield-projects",
    title: "Greenfield Projects: Planning for Future Capacity",
    category: "Greenfield Projects",
    image: "/images/services/greenfield-project.webp",
    excerpt:
      "Designing new facilities from scratch requires clarity, coordinated engineering, and a strong focus on long-term operability.",
    date: "April 2026",
    author: "Port AI Planning",
    readTime: "6 min read",
    href: "/blogs/greenfield-projects",
    tags: ["Greenfield", "Project", "Planning"],
  },
  {
    slug: "fire-evacuation-planning",
    title: "Fire Evacuation Planning for Industrial Facilities",
    category: "Fire Evacuation",
    image: "/images/services/fire-evacuation.webp",
    excerpt:
      "A robust fire evacuation plan protects people, assets, and production when every second matters.",
    date: "March 2026",
    author: "Port AI Safety",
    readTime: "5 min read",
    href: "/blogs/fire-evacuation-planning",
    tags: ["Safety", "Fire", "Compliance"],
  },
];

export const blogPosts: BlogDetail[] = [
  {
    slug: "piping-stress-analysis",
    title: "Piping Stress Analysis for Reliable Operation",
    category: "Piping Stress Analysis",
    image: "/Pipe-Stress-analysis.png",
    excerpt:
      "Understand how stress analysis helps prevent fatigue, reduce risk, and keep piping systems safe under load and thermal movement.",
    date: "June 2026",
    author: "Port AI Engineering",
    readTime: "6 min read",
    href: "/blogs/piping-stress-analysis",
    tags: ["Piping", "Stress", "Reliability"],
    content: (
      <>
        <p className="text-base leading-relaxed text-[var(--color-muted)]">
          Piping stress analysis is the foundation of safe and durable plant operation. By simulating thermal growth, support reaction, and pressure loading, engineering teams can identify potential failure points before fabrication begins.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Why Stress Analysis Matters</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A well-executed stress analysis keeps piping systems compliant with industry codes and prevents costly downtime due to fatigue or unsupported loads.
        </p>
        <ul className="mt-6 space-y-3 pl-5 text-[var(--color-muted)]">
          <li className="list-disc">Validate line flexibility under temperature changes</li>
          <li className="list-disc">Optimize support spacing and equipment nozzle loads</li>
          <li className="list-disc">Reduce the risk of vibration and fatigue cracking</li>
        </ul>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">A Practical Approach</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Our engineers use industry-standard analysis tools to model every line segment, calculate reaction forces, and verify compliance with ASME B31.3, B31.1, and other applicable codes.
        </p>
        <div className="mt-8 rounded-3xl bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] p-6 text-sm leading-relaxed text-[var(--color-text)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="font-semibold">Key outcomes delivered:</p>
          <ul className="mt-4 space-y-2 pl-5 text-[var(--color-muted)]">
            <li className="list-disc">Balanced nozzle loads for process and utility equipment</li>
            <li className="list-disc">Optimized support systems for operational reliability</li>
            <li className="list-disc">Clear documentation for fabrication and inspection</li>
          </ul>
        </div>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Ready for Construction</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          The final delivery includes detailed stress reports, support load summaries, and recommendations that allow contractors to install piping systems with confidence.
        </p>
      </>
    ),
  },
  {
    slug: "greenfield-projects",
    title: "Greenfield Projects: Planning for Future Capacity",
    category: "Greenfield Projects",
    image: "/images/services/greenfield-project.webp",
    excerpt:
      "Designing new facilities from scratch requires clarity, coordinated engineering, and a strong focus on long-term operability.",
    date: "April 2026",
    author: "Port AI Planning",
    readTime: "6 min read",
    href: "/blogs/greenfield-projects",
    tags: ["Greenfield", "Project", "Planning"],
    content: (
      <>
        <p className="text-base leading-relaxed text-[var(--color-muted)]">
          Greenfield projects demand a clear vision from the earliest planning stage. Our engineering teams build scalable facility architectures that support future production, safety, and regulatory compliance.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Early-Stage Planning</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Early planning aligns process flow, equipment layout, and infrastructure requirements so the final design is robust, efficient, and easy to operate.
        </p>
        <ul className="mt-6 space-y-3 pl-5 text-[var(--color-muted)]">
          <li className="list-disc">Process definition and capacity planning</li>
          <li className="list-disc">Site evaluation and utility integration</li>
          <li className="list-disc">Future expansion and modular design considerations</li>
        </ul>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Design for Growth</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          We optimize layouts for constructability while preserving flexibility for future upgrades, helping owners extend asset life and improve return on investment.
        </p>
        <div className="mt-8 rounded-3xl bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] p-6 text-sm leading-relaxed text-[var(--color-text)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="font-semibold">Greenfield project priorities:</p>
          <ul className="mt-4 space-y-2 pl-5 text-[var(--color-muted)]">
            <li className="list-disc">Clear process and utility integration</li>
            <li className="list-disc">Buildable plant layouts with safety buffers</li>
            <li className="list-disc">Future-ready expansion corridors</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    slug: "fire-evacuation-planning",
    title: "Fire Evacuation Planning for Industrial Facilities",
    category: "Fire Evacuation",
    image: "/images/services/fire-evacuation.webp",
    excerpt:
      "A robust fire evacuation plan protects people, assets, and production when every second matters.",
    date: "March 2026",
    author: "Port AI Safety",
    readTime: "5 min read",
    href: "/blogs/fire-evacuation-planning",
    tags: ["Safety", "Fire", "Compliance"],
    content: (
      <>
        <p className="text-base leading-relaxed text-[var(--color-muted)]">
          Fire evacuation planning is essential in complex industrial sites. Our team develops clear exit routes, assembly procedures, and emergency response coordination to keep people safe and minimize disruption.
        </p>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Site Evaluation for Safety</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          We review facility zones, occupancy patterns, and mechanical hazards to design evacuation pathways that are both safe and intuitive.
        </p>
        <ul className="mt-6 space-y-3 pl-5 text-[var(--color-muted)]">
          <li className="list-disc">Identify primary and secondary egress routes</li>
          <li className="list-disc">Ensure compliance with NFPA and local fire codes</li>
          <li className="list-disc">Coordinate alarms, signage, and exit lighting</li>
        </ul>
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">Emergency Response Preparedness</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A complete plan includes training, muster-point assignment, and communication protocols so every team member knows exactly what to do if the alarm sounds.
        </p>
        <div className="mt-8 rounded-3xl bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] p-6 text-sm leading-relaxed text-[var(--color-text)] shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <p className="font-semibold">What the plan delivers:</p>
          <ul className="mt-4 space-y-2 pl-5 text-[var(--color-muted)]">
            <li className="list-disc">Mapped evacuation routes for every building area</li>
            <li className="list-disc">Safety procedures for hazardous and high-occupancy zones</li>
            <li className="list-disc">Actionable guidance for drill and incident review</li>
          </ul>
        </div>
      </>
    ),
  },
];
