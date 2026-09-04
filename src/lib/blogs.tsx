import type { ReactNode } from "react";
import Link from "next/link";

export type BlogCard = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
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
    href: "/blogs/all/",
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
    href: "/blogs/engineers-blog/",
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
    href: "/blogs/iso-9001-2015/",
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
    href: "/blogs/startup-certified/",
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
    href: "/blogs/piping-stress-analysis/",
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
    href: "/blogs/greenfield-projects/",
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
    href: "/blogs/fire-evacuation-planning/",
    tags: ["Safety", "Fire", "Compliance"],
  },
  {
    slug: "pfd-vs-pid",
    title: "PFD vs. P&ID: Key Differences and the Engineering Design Handoff",
    metaTitle: "PFD vs. P&ID: Key Differences in Plant Engineering",
    metaDescription:
      "Learn how PFDs and P&IDs differ, what information each contains, and how process information moves into detailed P&ID development for plant engineering.",
    category: "Process & CAD Engineering",
    image: "/PFD.jpeg",
    excerpt:
      "Learn how PFDs and P&IDs differ, what information each contains, and how process information moves into detailed P&ID development for plant engineering.",
    date: "September 2026",
    author: "Port AI Engineers",
    readTime: "10 min read",
    href: "/blogs/pfd-vs-pid/",
    tags: ["P&ID", "PFD", "Process Engineering", "CAD Drafting"],
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
    href: "/blogs/piping-stress-analysis/",
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
    href: "/blogs/greenfield-projects/",
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
    href: "/blogs/fire-evacuation-planning/",
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
  {
    slug: "pfd-vs-pid",
    title: "PFD vs. P&ID: Key Differences and the Engineering Design Handoff",
    metaTitle: "PFD vs. P&ID: Key Differences in Plant Engineering",
    metaDescription:
      "Learn how PFDs and P&IDs differ, what information each contains, and how process information moves into detailed P&ID development for plant engineering.",
    category: "Process & CAD Engineering",
    image: "/PFD.jpeg",
    excerpt:
      "Learn how PFDs and P&IDs differ, what information each contains, and how process information moves into detailed P&ID development for plant engineering.",
    date: "September 2026",
    author: "Port AI Engineers",
    readTime: "10 min read",
    href: "/blogs/pfd-vs-pid/",
    tags: ["P&ID", "PFD", "Process Engineering", "CAD Drafting"],
    content: (
      <>
        {/* Introduction */}
        <p className="text-base leading-relaxed text-[var(--color-muted)]">
          In industrial plant engineering, few engineering deliverables are as foundational—or as frequently misunderstood by early-stage project stakeholders—as the Process Flow Diagram (PFD) and the Piping and Instrumentation Diagram (P&amp;ID). While both diagrams map the physical and functional architecture of chemical, petrochemical, manufacturing, and energy facilities, they serve fundamentally different purposes at distinct phases of the engineering lifecycle.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A Process Flow Diagram establishes the thermodynamic and mass balance foundation of a facility, defining what happens to raw materials, fluids, and utilities as they move across unit operations. In contrast, a Piping and Instrumentation Diagram serves as the comprehensive mechanical and operational master plan, detailing how that process will be physically piped, isolated, monitored, and automated in real-world equipment and control systems.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Confusing these two documents or rushing the transition between them is one of the most common causes of engineering change orders, piping clashes, and field rework during construction. Understanding the distinct role of each diagram—and managing the engineering design handoff between them with procedural rigor—is essential for engineering consultants, EPC contractors, and plant owners alike.
        </p>

        {/* SECTION 1 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          1. What Is a Process Flow Diagram (PFD)?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A Process Flow Diagram (PFD) is a schematic drawing that illustrates the sequence of equipment, major chemical transformations, and bulk fluid transport within an industrial process unit. Developed primarily during conceptual design and Front-End Engineering Design (FEED), the PFD illustrates the continuous flow of process fluids, energy balances, and operating envelopes without burdening the viewer with mechanical details.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          On an engineering-grade PFD, major process equipment is prominently depicted using standardized graphical symbols. This includes distillation columns, reactors, pressure vessels, shell-and-tube heat exchangers, storage tanks, multi-stage compressors, and primary process pumps. Minor equipment, individual auxiliary components, and redundant standby units (such as spare pumps or utility bypasses) are typically omitted to maintain macro-level clarity.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Crucially, the PFD incorporates process stream numbering tied directly to heat and material balances (HMB). Accompanying stream tables specify fundamental process variables for each designated stream, including design operating temperatures, normal operating pressures, total mass flow rates, volumetric capacities, vapor-liquid fractions, fluid density, and primary chemical compositions.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Major utility inputs—such as high-pressure steam, cooling water supply and return, fuel gas, refrigeration loops, and plant compressed air—are indicated at the boundary limits of major equipment. By focusing strictly on process feasibility, system continuity, and thermodynamic stability, the PFD forms the core baseline from which all detailed mechanical engineering and equipment procurement datasheets originate.
        </p>

        {/* SECTION 2 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          2. What Is a Piping and Instrumentation Diagram (P&amp;ID)?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A Piping and Instrumentation Diagram (P&amp;ID)—also referred to as a Process and Instrumentation Diagram or Engineering Flow Sheet—is the definitive technical schematic that details the complete physical piping, mechanical components, field instrumentation, control loops, and safety systems required to construct, commission, and operate the plant.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Unlike the conceptual PFD, the P&amp;ID depicts every mechanical pipeline that will be fabricated in the field or shop. Each line is identified with a standardized alphanumeric code indicating nominal pipe size (NPS or DN), fluid service code, line sequential number, piping material specification class, insulation type and thickness, and heat tracing requirements (electric or steam). Reducers, flow direction arrows, slope designations, and physical specification breaks (such as changes in pressure rating or metallurgy) are explicitly documented.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          The P&amp;ID also details all operational and isolation valves, identifying whether each is a gate, globe, ball, butterfly, diaphragm, or check valve. Automated control valves and emergency shutdown valves (ESDV) are displayed with their actuator types and fail-safe operational positions (Fail Open - FO, Fail Closed - FC, or Fail Locked - FL). Essential piping features such as high-point vents, low-point drains, sample connections, temporary strainers, blind flanges, and spectacle blinds are fully shown to support hydrostatic pressure testing and operational isolation.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Furthermore, the P&amp;ID illustrates the entire instrumentation and control framework. Field transmitters (flow, pressure, temperature, level), control room distributed control system (DCS) nodes, local indicator gauges, programmable logic controller (PLC) interlocks, safety relief valves (PSV), and automated safety shutdown sequences are mapped using standardized instrumentation symbology. As a result, the P&amp;ID serves as the shared reference document across process, piping, electrical, instrumentation, civil, constructability, and operations disciplines throughout the entire asset lifecycle.
        </p>

        {/* SECTION 3 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          3. PFD vs. P&amp;ID — Side-by-Side Comparison
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          To illustrate the technical boundaries between the two documents, the following comparison highlights key engineering attributes across both deliverables:
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
          <table className="w-full text-left text-sm text-[var(--color-text)]">
            <thead className="border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_12%,var(--color-surface))] text-xs uppercase tracking-wider text-[var(--color-primary)]">
              <tr>
                <th className="px-6 py-4 font-semibold">Characteristic</th>
                <th className="px-6 py-4 font-semibold">Process Flow Diagram (PFD)</th>
                <th className="px-6 py-4 font-semibold">Piping &amp; Instrumentation Diagram (P&amp;ID)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] text-xs sm:text-sm">
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Primary Purpose</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Defines process chemistry, mass/energy balances, and core system operating envelopes.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Defines complete mechanical piping, instrumentation, control loops, and physical equipment connections.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Level of Detail</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Macro-level / conceptual; omits minor lines, utility branches, and auxiliary valves.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Comprehensive / mechanical; details every line, valve, instrument, nozzle, and drain point.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Equipment Shown</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Major process equipment with basic tags, operating duties, and preliminary design capacities.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">All process, utility, and auxiliary equipment, including spares, nozzles, foundation tags, and internals.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Piping Representation</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Primary process streams only; depicted as schematic flow lines without size or spec class.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Every physical pipe line with exact diameter, pipe spec, material class, insulation, and tracing.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Instrumentation</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Only critical primary control loops that govern fundamental process stability.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Complete field instrumentation, transmitters, local gauges, safety interlocks, and DCS I/O tags.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Valves &amp; Fittings</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Major control valves directly affecting process flow; manual isolation valves omitted.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">All manual isolation, control, check, relief (PSV), drain, vent, and sampling valves.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Process Data Included</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Stream tables with operating temperature, pressure, flow rate, composition, and enthalpy.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Process data generally omitted; replaced with mechanical design pressure, test pressure, and line specs.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Typical Engineering Stage</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Conceptual Engineering and Front-End Engineering Design (FEED).</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Detailed Engineering, Procurement, Construction, Commissioning, and Plant Operation.</td>
              </tr>
              <tr className="hover:bg-[color-mix(in_srgb,var(--color-primary)_4%,transparent)] transition-colors">
                <td className="px-6 py-4 font-semibold">Primary Stakeholders</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Process engineers, project managers, client leadership, financial estimators.</td>
                <td className="px-6 py-4 text-[var(--color-muted)]">Piping designers, instrumentation engineers, safety teams (HAZOP), fabricators, operators.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs italic text-[var(--color-muted)]">
          *Note: Applicable project, client, industry, and drafting standards may vary depending on jurisdiction, facility operating envelope, and contractual specifications (e.g., ISA-5.1, ISO 10628, ASME, or proprietary owner-operator specifications).
        </p>

        {/* SECTION 4 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          4. How Information Moves From PFD to P&amp;ID
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          The transition from a validated PFD to an approved P&amp;ID represents the critical bridge between chemical/process conceptualization and physical mechanical design. This engineering handoff is not an abrupt shift, but an iterative, phased progression governed by multi-discipline coordination:
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 1: Process Simulation &amp; Flow Definition
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Process engineers perform steady-state or dynamic process simulations to establish heat and material balances, thermodynamic limits, and stream properties, documenting these in the approved PFD package.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 2: Equipment Tagging &amp; Nozzle Sizing
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Equipment tags from the PFD are locked and transferred to the mechanical equipment list. Mechanical and piping engineers define specific nozzle schedules, elevation datum lines, design pressures, and flange ratings.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 3: Line Sizing &amp; Piping Material Specifications
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Process fluid streams from the PFD are assigned individual line numbers based on velocity criteria and allowable pressure drops. Piping engineers assign appropriate piping material classes (metallurgy, pressure rating, gasket type) based on fluid corrosivity and operating conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 4: Isolation, Vent, and Drain Philosophy Integration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Piping designers incorporate manual block valves, bypass lines, high-point vents, low-point drains, and utility flush connections necessary for plant maintenance, pressure testing, and chemical decontamination.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 5: Control Loop &amp; Safety Interlock Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              Instrumentation and control engineers translate the high-level control strategies depicted on the PFD into full instrument loops, specifying transmitters, local indicators, automated control valves, interlocks, and emergency shutdown connections.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_60%,transparent)] p-5">
            <h3 className="text-base font-semibold text-[var(--color-primary)]">
              Step 6: Multidisciplinary Review &amp; Baseline Issue
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              The preliminary P&amp;ID is reviewed collaboratively across process, piping, instrumentation, structural, and safety disciplines before being issued for formal HAZOP (Hazard and Operability) analysis and detailed 3D CAD modeling.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          While this progression illustrates the typical path of engineering data, the exact sequencing and sign-off gates vary depending on project execution contracts (EPC vs EPCM), client drafting standards, and industry-specific regulations.
        </p>

        {/* SECTION 5 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          5. What Should Be Established Before Detailed P&amp;ID Development?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Attempting to draft detailed P&amp;IDs while foundational process criteria remain fluid inevitably leads to severe drawing rework, mismatched line lists, and spatial clashes in 3D piping layouts. Engineering teams typically verify that key process parameters are stabilized before releasing drafting packages for detailed P&amp;ID development:
        </p>
        <ul className="mt-4 space-y-3 pl-5 text-[var(--color-muted)] text-sm sm:text-base">
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Frozen Process Simulation &amp; Stream Tables:</strong> A finalized heat and material balance (HMB) confirming mass flow rates, operating temperatures, and maximum operating pressures across all primary circuits.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Preliminary Mechanical Equipment List:</strong> Confirmed equipment naming conventions, capacities, materials of construction, and design pressure/temperature ratings.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Battery Limits &amp; Tie-In Identifiers:</strong> Clearly designated physical and contractual boundaries where process and utility streams enter or leave the battery limits of the unit.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Piping Material Specifications (PMS):</strong> Approved piping classes defining pipe wall thicknesses, flange ratings, valve body materials, and gasket types compatible with process fluids.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Project Line Numbering Philosophy:</strong> Established standards for designating line size, fluid service codes, unit area codes, sequential numbers, and insulation classifications.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Basic Control &amp; Overpressure Protection Philosophy:</strong> Defined functional logic for automated control loops, fail-safe valve orientations, pressure relief valve (PSV) discharge routings, and emergency depressurization paths.
          </li>
          <li className="list-disc">
            <strong className="text-[var(--color-text)]">Project Drafting Standards &amp; Symbology:</strong> Established symbol libraries and layer conventions adhering to project-specific criteria or recognized industry drafting standards.
          </li>
        </ul>
        <p className="mt-3 text-xs italic text-[var(--color-muted)]">
          These prerequisites represent sound engineering practice rather than an inflexible, universal mandate. In fast-track projects, partial P&amp;ID drafting often proceeds concurrently with process refinement under disciplined management of change protocols.
        </p>

        {/* SECTION 6 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          6. Common Problems During the PFD-to-P&amp;ID Handoff
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          When coordination breaks down between process engineering and mechanical drafting, systematic discrepancies can cascade into procurement and site construction. Industry experience highlights several recurring handoff challenges:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Tagging Inconsistencies
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Equipment or instrument tags modified on process datasheets without updating the corresponding P&amp;ID callouts lead to procurement errors, mislabeled purchase orders, and mismatched line lists.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Volatile Process Operating Data
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Uncontrolled revisions to stream temperatures, pressures, or flow rates after line sizing has been frozen force downstream recalculation of pipe wall thickness and valve sizing.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Ambiguous Battery Limit Interfaces
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Unclear line continuation references between adjacent P&amp;ID sheets or offsite utility packages result in mismatched pipe diameters, uncoordinated spec breaks, and field fabrication clashes.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Late Instrument Loop Additions
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Introducing safety interlocks or flow meters late in detailed engineering disrupts 3D piping routing, required straight-run pipe lengths, and pipe rack space allocations.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Unmanaged Redline Revisions
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Informal verbal changes or untracked markup notes exchanged between disciplines without revision clouding and formal revision control create conflicting drawing sets in field offices.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 space-y-2">
            <h3 className="text-base font-semibold text-[var(--color-text)]">
              Inadequate Multi-Discipline Review
            </h3>
            <p className="text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
              Isolating P&amp;ID drafting within CAD teams without periodic reviews by piping stress engineers and operations leads creates unvented dead-legs, pocketed lines, and unmaintainable valve heights.
            </p>
          </div>
        </div>

        {/* SECTION 7 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          7. How P&amp;ID Review Supports Engineering Quality
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          A disciplined P&amp;ID review process acts as the primary quality safeguard in plant design. By bringing together process, piping, instrumentation, civil/structural, and plant operations specialists, structured reviews ensure that conceptual process goals are safely and feasibly implemented:
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          During formal Hazard and Operability (HAZOP) and constructability reviews, multi-discipline teams systematically evaluate every line and node on the P&amp;ID using guidewords (such as &quot;No Flow,&quot; &quot;More Temperature,&quot; or &quot;Reverse Flow&quot;). Potential operational deviations are scrutinized, verifying that adequate relief capacity, isolation boundaries, and automated interlocks exist to safeguard plant personnel and capital equipment.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Structured drawing check gates—moving from Issue for Review (IFR) to Issue for Design (IFD) and Issue for Construction (IFC)—maintain complete configuration control. Line-by-line verification confirms that piping specification breaks match flange ratings, valve accessibility aligns with operator walkways, and instrument impulse lines avoid vibration hazards. This rigorous checking culture minimizes the risk of costly on-site modifications and supports smooth commissioning.
        </p>

        {/* SECTION 8 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          8. When to Use PFD and When to Use P&amp;ID
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          For project managers, plant owners, and non-specialist engineering leaders, knowing which document to reference depends directly on the decision context:
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">
              Turn to the Process Flow Diagram (PFD) when you need to:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Understand overall chemical process transformations, flow pathways, and mass/energy balances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Evaluate plant throughput, utility requirements, operating envelopes, and overall system efficiency.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Prepare conceptual project estimates, feasibility reports, and executive stakeholder presentations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Conduct early preliminary hazard reviews before mechanical details are established.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">
              Turn to the Piping and Instrumentation Diagram (P&amp;ID) when you need to:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Procure valves, piping spools, field instruments, automated actuators, and specialty fittings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Perform detailed 3D piping routing, clash detection, and extraction of isometric fabrication drawings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Execute formal HAZOP, LOPA (Layer of Protection Analysis), and plant safety regulatory audits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Program DCS/PLC control logic, alarm setpoints, safety interlocks, and emergency shutdown matrices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                <span>Conduct pre-commissioning walkdowns, line pressure testing, and ongoing plant operations and maintenance.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 9 */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          9. PFD and P&amp;ID Services at Port AI Engineers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Port AI Engineers delivers comprehensive industrial drafting and engineering documentation services to EPC contractors, industrial plant owners, and engineering consultants worldwide. Our drafting specialists and engineering teams support the entire design lifecycle, ensuring seamless alignment between conceptual process chemistry and detailed mechanical execution.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Our <Link href="/services/cad/pfd/" className="font-semibold text-[var(--color-primary)] underline hover:opacity-80">PFD Design &amp; Drafting Services</Link> assist engineering teams during conceptualization and FEED, producing clean, standardized process flow diagrams complete with stream reference tables, boundary limits, and utility interfaces tailored to client drafting conventions.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          For detailed engineering and plant modernization projects, our <Link href="/services/cad/pid/" className="font-semibold text-[var(--color-primary)] underline hover:opacity-80">P&amp;ID Design &amp; Drafting Services</Link> deliver standards-compliant, intelligent piping and instrumentation diagrams. We handle line sizing integration, valve tagging, instrument loop mapping, safety relief representation, and as-built redline drafting, coordinating closely with related disciplines such as <Link href="/services/cad/general-arrangement/" className="text-[var(--color-primary)] underline hover:opacity-80">General Arrangement Drawing Services</Link> and <Link href="/services/engineering/plant-layout/" className="text-[var(--color-primary)] underline hover:opacity-80">Industrial Plant Layout Design Services</Link>.
        </p>

        {/* CONCLUSION */}
        <h2 className="mt-10 text-2xl font-semibold text-[var(--color-text)]">
          Conclusion
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          In industrial plant engineering, the Process Flow Diagram and the Piping and Instrumentation Diagram are not competing representations of a facility; they are complementary, sequential stages of an evolving engineering design. The PFD defines the operating concept, establishing what the plant must achieve thermodynamically and chemically. The P&amp;ID defines the mechanical reality, detailing how that process will be safely contained, routed, monitored, and operated.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          By treating the PFD-to-P&amp;ID transition as a formal engineering handoff—anchored by stabilized process data, disciplined tagging standards, and multi-discipline review gates—engineering organizations minimize rework, protect project schedules, and establish a dependable technical foundation for fabrication, construction, and safe plant operations.
        </p>
      </>
    ),
  },
];
