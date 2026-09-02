import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAD Services & Engineering Drawings in Industrial Projects",
  description:
    "Discover how Port AI Engineers delivers precision CAD services, code compliance, and reliable engineering documentation across industrial facilities.",
  alternates: {
    canonical: "https://portaiengineers.com/blogs/engineers-blog/",
  },
  openGraph: {
    title: "CAD Services & Engineering Drawings in Industrial Projects | Port AI Engineers",
    description:
      "Discover how Port AI Engineers delivers precision CAD services, code compliance, and reliable engineering documentation across industrial facilities.",
    url: "https://portaiengineers.com/blogs/engineers-blog/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/cad-services-BOtMPt39.jpg",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - CAD Services & Engineering Drawings",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAD Services & Engineering Drawings in Industrial Projects | Port AI Engineers",
    description:
      "Discover how Port AI Engineers delivers precision CAD services, code compliance, and reliable engineering documentation across industrial facilities.",
    images: ["/cad-services-BOtMPt39.jpg"],
  },
};

import Link from "next/link";
import React from "react";
import "./engineer.css";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../../lib/schema";

// ── SVG helpers ────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8"  y1="2" x2="8"  y2="6" />
    <line x1="3"  y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

// ── SCOPE CARD data ────────────────────────────────────────────
const SCOPES = [
  { label: "2D CAD Drafting",        icon: "M3 9h18M9 21V9M3 3h18v18H3z" },
  { label: "3D Modelling",           icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" },
  { label: "Assembly Drawings",      icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" },
  { label: "Detailed Engineering",   icon: "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" },
  { label: "BIM Modelling",          icon: "M2 20h20M6 20V10l6-6 6 6v10M10 20v-5h4v5" },
  { label: "CAD Conversion",         icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { label: "As-Built Drawings",      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138" },
  { label: "Design Review",          icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7" },
]

// ── HOW PORT AI HELPS ──────────────────────────────────────────
const HELPS = [
  {
    title: "Faster Turnaround, Zero Compromise",
    desc:  "Our dedicated CAD team delivers accurate drawings on aggressive timelines — helping you hit milestones without sacrificing quality.",
    bullets: ["Rapid 2D/3D production cycles", "Parallel workstreams for large packages", "Agile revision management"],
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    iconStroke: "#2E86DE",
  },
  {
    title: "Error-Free Documentation",
    desc:  "ISO 9001:2015 quality checks at every stage mean drawings are validated, compliant, and ready for fabrication or regulatory submission.",
    bullets: ["Multi-layer review process", "Industry standard compliance", "Audit-ready documentation"],
    iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946",
    iconStroke: "#0FA3B1",
  },
  {
    title: "Scale Your Design Capacity",
    desc:  "Whether you need one drafter or a full CAD team, Port AI provides flexible resourcing that scales with your project demands.",
    bullets: ["On-demand CAD resourcing", "No long-term hiring overheads", "Expertise across all major platforms"],
    iconPath: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
    iconStroke: "#F4A946",
  },
  {
    title: "Reduce Rework & Project Risk",
    desc:  "Precise, validated CAD outputs eliminate costly downstream errors — reducing rework, change orders, and construction delays.",
    bullets: ["Design clash detection", "Early issue identification", "Fewer RFIs during execution"],
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    iconStroke: "#7C5CBF",
  },
  {
    title: "Legacy Drawing Modernisation",
    desc:  "Convert ageing paper or raster drawings into clean, intelligent digital CAD files — giving your legacy assets a new lease of life.",
    bullets: ["Paper to CAD conversion", "Raster to vector processing", "Drawing management & archiving"],
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2",
    iconStroke: "#0D7A5F",
  },
  {
    title: "Seamless Client Collaboration",
    desc:  "We work as an extension of your team — transparent communication, regular updates, and a single point of contact for every project.",
    bullets: ["Dedicated project manager", "Regular progress reporting", "Flexible revision cycles"],
    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    iconStroke: "#E05D3A",
  },
]

// ── TABLE data ─────────────────────────────────────────────────
const TABLE_ROWS = [
  ["2D CAD Drafting",        "Precise construction-ready drawings"],
  ["3D Solid Modelling",     "Visual validation before fabrication"],
  ["Assembly Drawings",      "Clear part relationships & BOMs"],
  ["BIM Modelling",          "Coordinated, clash-free project data"],
  ["CAD Conversion",         "Digital-ready legacy drawing archive"],
  ["As-Built Drawings",      "Accurate post-construction record"],
  ["Design Review Support",  "Reduced errors & change orders"],
]

// ── COMMITMENT items ───────────────────────────────────────────
const COMMITS = [
  "Accurate, validated CAD outputs",
  "ISO 9001:2015 quality-backed process",
  "All major platforms — AutoCAD, SolidWorks, Revit, CATIA",
  "Rapid turnaround with flexible resourcing",
  "Transparent communication & single POC",
  "Continuous improvement on every project",
]

// ── FUTURE tags ────────────────────────────────────────────────
const FUTURE_TAGS = [
  "AI-Assisted CAD",
  "BIM Level 3",
  "Digital Twins",
  "Cloud Collaboration",
  "Generative Design",
]

// ── SERVICES footer badges ─────────────────────────────────────
const SERVICES = [
  "CAD Services", "Engineering Design",
  "Technical Consultancy", "Project Management",
  "Manpower Support",
]

// ══════════════════════════════════════════════════════════════
// COMPONENT
// ══════════════════════════════════════════════════════════════
export default function CADServicesPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/blogs/engineers-blog/#webpage",
    url: "https://portaiengineers.com/blogs/engineers-blog/",
    name: "CAD Services & Engineering Drawings in Industrial Projects",
    description:
      "Discover how Port AI Engineers delivers precision CAD services, code compliance, and reliable engineering documentation across industrial facilities.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
    {
      name: "CAD Services & Engineering Drawings in Industrial Projects",
      url: "https://portaiengineers.com/blogs/engineers-blog/",
    },
  ]);

  return (
    <div className="engineering-blog-page">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      {/* ── HERO ── */}
      <header className="cad-hero">
        <div className="cad-hero__inner">

          {/* Blog Tags */}
          <div className="cad-tag-row">
            <span className="cad-tag cad-tag--primary">
              <StarIcon /> CAD Services
            </span>
            <span className="cad-tag cad-tag--outline">2D &amp; 3D Design</span>
            <span className="cad-tag cad-tag--teal">Company Services</span>
            <span className="cad-tag cad-tag--outline">BIM &amp; Drafting</span>
          </div>

          {/* Heading + Hero Image */}
          <div className="cad-hero__grid">
            <div>
              <h1>
                CAD Services.<br />
                <span>Designed with Precision.</span>
              </h1>
              <p className="cad-hero__subtitle">
                Port AI Engineers Pvt. Ltd. delivers end-to-end CAD design services — from 2D
                technical drafting and 3D solid modelling to BIM coordination and legacy
                drawing conversion — helping businesses bring their engineering vision to life
                with accuracy, speed, and ISO-certified quality.
              </p>
              <div className="cad-hero__meta">
                <span className="cad-meta-item"><CalIcon /> July 2025</span>
                <span className="cad-meta-item"><PinIcon /> Hyderabad, Telangana, India</span>
                <span className="cad-meta-item"><ClockIcon /> 7 min read</span>
              </div>
            </div>
            <div className="cad-hero__img-box">
              <img
                src="/images/blogs/cad-engineering-team.webp"
                alt="CAD engineers collaborating on 3D models"
                width={720}
                height={480}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </header>

      {/* ── BANNER ── */}
      <div className="cad-banner">
        <div className="cad-banner__inner">
          <div className="cad-banner__badge">
            <div className="cad-banner__icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div>
              <div className="cad-banner__title">CAD Design Services</div>
              <div className="cad-banner__sub">Port AI Engineers Private Limited · Hyderabad</div>
            </div>
          </div>
          <div className="cad-banner__stats">
            <div className="cad-banner__stat"><div className="num">8+</div><div className="lbl">CAD Capabilities</div></div>
            <div className="cad-banner__stat"><div className="num">7+</div><div className="lbl">Industries</div></div>
            <div className="cad-banner__stat"><div className="num">ISO</div><div className="lbl">9001:2015</div></div>
          </div>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <main className="cad-article">

        {/* Lead */}
        <p className="cad-lead">
          At Port AI Engineers Pvt. Ltd., CAD is not just a drafting tool — it is the language
          through which our engineers translate complex ideas into precise, buildable, and
          compliant engineering outputs. From initial concept sketches to fully coordinated
          3D models and construction-ready drawings, our CAD team delivers
          <strong> accuracy, speed, and quality</strong> at every stage of your project.
        </p>

        {/* Image 2 — CAD drawing beside text */}
        <div className="cad-img-card">
          <img
            className="cad-img-card__img cad-img-card__img--dark"
            src="/images/blogs/cad-architectural-elevation.webp"
            alt="Detailed AutoCAD architectural elevation drawing"
            width={948}
            height={640}
            loading="lazy"
            decoding="async"
          />
          <div className="cad-img-card__text">
            <div className="cad-img-card__label">Real Work. Real Precision.</div>
            <h2 className="cad-img-card__title">
              Technical Drawings That <span>Speak for Themselves</span>
            </h2>
            <p className="cad-img-card__desc">
              Every line, dimension, and annotation in our CAD drawings is placed with intent.
              Our drafting team produces multi-view elevations, sections, and detail drawings
              that meet international standards and are ready for fabrication, construction,
              or regulatory submission — the first time, every time.
            </p>
            <div className="cad-pills">
              <span className="cad-pill cad-pill--gold">ISO 9001:2015 Certified</span>
              <span className="cad-pill cad-pill--teal">✓ Fabrication Ready</span>
              <span className="cad-pill">AutoCAD · Revit · SolidWorks</span>
              <span className="cad-pill cad-pill--navy">Global Standards</span>
            </div>
          </div>
        </div>

        {/* Image 3 — Designer at workstation */}
        <div className="cad-img-card" style={{ flexDirection: "row-reverse" }}>
          <img
            className="cad-img-card__img"
            src="/images/blogs/cad-designer-workstation.webp"
            alt="CAD designer working on 3D models across multiple screens"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <div className="cad-img-card__text">
            <div className="cad-img-card__label">Our CAD Environment</div>
            <h2 className="cad-img-card__title">
              Multi-Platform <span>CAD Expertise</span>
            </h2>
            <p className="cad-img-card__desc">
              Our designers work across all major CAD and BIM platforms — AutoCAD, SolidWorks,
              CATIA, Revit, and more. Whether you need a parametric 3D assembly or a
              detailed 2D shop drawing, our team has the platform fluency and domain
              knowledge to deliver exactly what your project demands.
            </p>
            <div className="cad-pills">
              <span className="cad-pill">AutoCAD</span>
              <span className="cad-pill">SolidWorks</span>
              <span className="cad-pill">Revit / BIM</span>
              <span className="cad-pill">CATIA</span>
              <span className="cad-pill cad-pill--teal">✓ Multi-Platform</span>
            </div>
          </div>
        </div>

        {/* SCOPE */}
        <div className="cad-section-label">Core CAD Capabilities</div>
        <h2 className="cad-block-title">What Our CAD Team Delivers</h2>
        <p>
          Our CAD services span the full design lifecycle — from initial concept drafting
          through to as-built documentation and legacy conversion:
        </p>

        <div className="cad-scope-grid">
          {SCOPES.map((s) => (
            <div className="cad-scope-card" key={s.label}>
              <div className="cad-scope-card__icon">
                <svg width="22" height="22" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </div>
              <div className="cad-scope-card__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* EXPLAINER */}
        <div className="cad-section-label">Why CAD Quality Matters</div>
        <h2 className="cad-block-title">The Real Cost of Poor CAD Documentation</h2>

        <div className="cad-explainer">
          <p>
            Inaccurate or poorly structured CAD drawings are one of the leading causes of
            construction delays, budget overruns, and compliance failures. A single
            incorrect dimension or missing detail can cascade into costly rework, site
            shutdowns, or regulatory rejection.
          </p>
          <p>
            At Port AI Engineers, every drawing goes through a structured review and
            validation process backed by our ISO 9001:2015 Quality Management System —
            so your team always receives outputs that are accurate, complete, and
            ready to use without rework.
          </p>
          <div className="cad-industry-tags">
            {["Manufacturing","Oil & Gas","Infrastructure","Marine & Ports",
               "Industrial Facilities","Energy & Utilities","Transportation",
               "Architecture & Construction"].map((ind) => (
              <span className="cad-industry-tag" key={ind}>{ind}</span>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div className="cad-section-label">Service Value Map</div>
        <h2 className="cad-block-title">How Our CAD Services Drive Project Success</h2>
        <p>Every CAD service we deliver maps directly to a measurable project outcome:</p>

        <table className="cad-table">
          <thead>
            <tr>
              <th>CAD Service</th>
              <th>Project Outcome</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(([svc, outcome]) => (
              <tr key={svc}>
                <td><span className="cad-check">✓</span>{svc}</td>
                <td>{outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* HOW PORT AI HELPS */}
        <div className="cad-section-label">How Port AI Engineers Helps You</div>
        <h2 className="cad-block-title">6 Ways We Make a Difference for Our Customers</h2>
        <p>
          Working with Port AI Engineers is not just about getting drawings done — it is about
          gaining a reliable engineering partner who genuinely invests in your project&apos;s
          success. Here is how we help:
        </p>

        <div className="cad-help-grid">
          {HELPS.map((h, i) => (
            <div className="cad-help-card" key={h.title}>
              <span className="cad-help-card__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="cad-help-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     stroke={h.iconStroke} strokeWidth="1.8">
                  <path d={h.iconPath} />
                </svg>
              </div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
              <ul className="cad-mini-list">
                {h.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* COMMITMENT */}
        <div className="cad-commitment">
          <h2>Our CAD Quality Commitment</h2>
          <p>
            Every drawing we deliver is a direct reflection of our commitment to precision,
            reliability, and your project&apos;s success. We do not just produce files — we
            deliver engineering confidence.
          </p>
          <div className="cad-commit-grid">
            {COMMITS.map((c) => (
              <div className="cad-commit-item" key={c}>
                <CheckIcon />
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE */}
        <div className="cad-section-label">Looking Ahead</div>
        <h2 className="cad-block-title">The Future of CAD at Port AI Engineers</h2>

        <div className="cad-future">
          <div className="cad-future__text">
            <p>
              As engineering evolves through AI-assisted design, generative modelling, and
              cloud-based collaboration, Port AI Engineers is actively investing in
              next-generation CAD capabilities — ensuring our clients always have access
              to the most accurate, efficient, and future-ready design services available.
            </p>
          </div>
          <div className="cad-future__tags">
            {FUTURE_TAGS.map((tag) => (
              <span className="cad-future-tag" key={tag}>
                <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div className="cad-section-label">About the Company</div>
        <div className="cad-about">
          <div className="cad-about__logo">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </div>
          <div className="cad-about__content">
            <h3>Port AI Engineers Pvt. Ltd.</h3>
            <p>
              An ISO 9001:2015 certified and Startup India recognized engineering and
              technology-driven organization headquartered in Hyderabad, India. We deliver
              intelligent engineering solutions, scalable CAD workflows, and quality-driven
              execution across industries worldwide.
            </p>
            <div className="cad-about__services">
              {SERVICES.map((s) => (
                <span className="cad-about__svc" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* NAVIGATION & RELATED SERVICES */}
        <div style={{ marginTop: "40px", padding: "28px", borderRadius: "16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <div>
              <h4 style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: "600", color: "#fff" }}>Explore Engineering &amp; CAD Services</h4>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>Browse our complete industrial services or discuss your project requirements.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <Link href="/blogs/" style={{ padding: "8px 18px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
                &larr; Back to Blogs
              </Link>
              <Link href="/services/cad/" style={{ padding: "8px 18px", borderRadius: "9999px", border: "1px solid #3b82f6", color: "#3b82f6", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
                CAD Services &rarr;
              </Link>
              <Link href="/services/engineering/" style={{ padding: "8px 18px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
                Engineering Services
              </Link>
              <Link href="/contact/" style={{ padding: "8px 18px", borderRadius: "9999px", background: "#3b82f6", color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "600" }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="cad-footer">
        <p>© 2026 <strong>Port AI Engineers Private Limited</strong> · Hyderabad, Telangana, India</p>
        <p style={{ marginTop: "6px", fontSize: "12px", opacity: 0.6 }}>
          ISO 9001:2015 Certified · Startup India Recognized · CAD &amp; Engineering Excellence
        </p>
      </footer>
    </div>
  );
}