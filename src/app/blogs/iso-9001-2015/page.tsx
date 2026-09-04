import type { Metadata } from "next";
import "./iso.css";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Certification Milestone",
  description:
    "Port AI Engineers Pvt. Ltd. has achieved ISO 9001:2015 certification for its Quality Management System, validating engineering design and quality excellence.",
  alternates: {
    canonical: "https://portaiengineers.com/blogs/iso-9001-2015/",
  },
  openGraph: {
    title: "ISO 9001:2015 Certification Milestone | Port AI Engineers",
    description:
      "Port AI Engineers Pvt. Ltd. has achieved ISO 9001:2015 certification for its Quality Management System, validating engineering design and quality excellence.",
    url: "https://portaiengineers.com/blogs/iso-9001-2015/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/ISOimage.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - ISO 9001:2015 Certification",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO 9001:2015 Certification Milestone | Port AI Engineers",
    description:
      "Port AI Engineers Pvt. Ltd. has achieved ISO 9001:2015 certification for its Quality Management System, validating engineering design and quality excellence.",
    images: ["/ISOimage.webp"],
  },
};

const isoHtml = `
<header class="hero">
  <div class="hero-inner">
    <div class="blog-tag-row">
      <span class="tag tag-primary">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
        ISO 9001:2015 Certified
      </span>
      <span class="tag tag-outline">Quality Management</span>
      <span class="tag tag-teal">Company News</span>
      <span class="tag tag-outline">Engineering Excellence</span>
    </div>

    <h1>A New Milestone in<br/><span>Quality &amp; Excellence</span></h1>
    <p class="hero-subtitle">Port AI Engineers Pvt. Ltd. has achieved ISO 9001:2015 certification — a testament to our unwavering commitment to delivering world-class engineering solutions backed by globally recognized quality standards.</p>

    <div class="meta-row">
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        May 2025
      </span>
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Hyderabad, Telangana, India
      </span>
      <span class="meta-item">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        5 min read
      </span>
    </div>
  </div>
</header>

<div class="iso-banner certFadeIn">
    <div class="iso-banner-left">
      <img src="/ISOimage.webp" alt="ISO 9001:2015 badge" />
    </div>
    <div class="iso-banner-right">
      <h3>ISO 9001:2015 · Quality Management System</h3>
      <p>Port AI Engineers' Quality Management System is certified to ISO 9001:2015, demonstrating our commitment to consistent quality, process control, and customer satisfaction.</p>
      <div class="iso-info-pills">
        <span class="pill">Certified QMS</span>
        <span class="pill">Hyderabad</span>
        <span class="pill">5+ Scopes</span>
        <span class="pill">Global Standard</span>
      </div>
    </div>
  </div>

<div class="cert-banner">
  <div class="cert-banner-inner">
    <div class="cert-badge">
      <div class="cert-icon">
        <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
      </div>
      <div>
        <div class="cert-title">ISO 9001:2015 Certified</div>
        <div class="cert-sub">Port AI Engineers Private Limited · Hyderabad</div>
      </div>
    </div>
    <div class="cert-stat-row">
      <div class="cert-stat"><div class="num">5+</div><div class="lbl">Service Scopes</div></div>
      <div class="cert-stat"><div class="num">100%</div><div class="lbl">QMS Compliant</div></div>
      <div class="cert-stat"><div class="num">Global</div><div class="lbl">Recognition</div></div>
    </div>
  </div>
</div>

<main class="article-wrap">
  <p class="lead">
    We are thrilled to announce that Port AI Engineers Pvt. Ltd. has officially achieved <strong>ISO 9001:2015 certification</strong> for its Quality Management System (QMS). This milestone is more than a certificate — it is the embodiment of our promise to every client, partner, and stakeholder: that quality, reliability, and excellence are non-negotiable at the heart of everything we do.
  </p>

  <div class="section-label">Certification Details</div>
  <h2 class="block-title">Official Scope &amp; Coverage</h2>
  <p>Our certification formally covers the following engineering service scopes, all delivered from our base in Hyderabad, Telangana, India:</p>

  <div class="scope-grid">
    <div class="scope-card">
      <div class="sc-icon">
        <svg width="22" height="22" stroke-width="1.8" viewBox="0 0 24 24"><path d="M2 20h20M6 20V10l6-6 6 6v10M10 20v-5h4v5"/></svg>
      </div>
      <div class="sc-label">Engineering Design Services</div>
    </div>
    <div class="scope-card">
      <div class="sc-icon">
        <svg width="22" height="22" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9.5 3h5M12 3v4M6 7h12l-1 10H7L6 7zM9 12h6"/></svg>
      </div>
      <div class="sc-label">Technical Consultancy</div>
    </div>
    <div class="scope-card">
      <div class="sc-icon">
        <svg width="22" height="22" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/></svg>
      </div>
      <div class="sc-label">Project Management Support</div>
    </div>
    <div class="scope-card">
      <div class="sc-icon">
        <svg width="22" height="22" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87"/></svg>
      </div>
      <div class="sc-label">Manpower Support</div>
    </div>
    <div class="scope-card">
      <div class="sc-icon">
        <svg width="22" height="22" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      </div>
      <div class="sc-label">Allied Engineering Services</div>
    </div>
  </div>

  <div class="section-label">Understanding the Standard</div>
  <h2 class="block-title">What is ISO 9001:2015?</h2>

  <div class="iso-explainer">
    <p>ISO 9001:2015 is one of the world's most recognized international standards for Quality Management Systems, developed by the International Organization for Standardization. It provides a structured framework helping organizations consistently deliver high-quality services, strong process management, and excellent customer satisfaction.</p>
    <p>Achieving this certification signals to the world that an organization follows globally accepted quality management practices and operates a customer-focused model built for long-term success.</p>
    <div class="industry-tags">
      <span class="industry-tag">Engineering</span>
      <span class="industry-tag">Manufacturing</span>
      <span class="industry-tag">Information Technology</span>
      <span class="industry-tag">Healthcare</span>
      <span class="industry-tag">Infrastructure</span>
      <span class="industry-tag">Consulting</span>
      <span class="industry-tag">Energy &amp; Industrial</span>
    </div>
  </div>

  <div class="section-label">Strategic Alignment</div>
  <h2 class="block-title">How ISO 9001:2015 Aligns with Our Vision</h2>
  <p>Every goal we set as a company finds direct support within the ISO 9001:2015 framework. Here is how they map:</p>

  <table class="align-table">
    <thead>
      <tr>
        <th>Company Goal</th>
        <th>ISO 9001:2015 Alignment</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><span class="check-icon">✓</span>Deliver high-quality engineering services</td><td>Standardized quality processes</td></tr>
      <tr><td><span class="check-icon">✓</span>Improve operational efficiency</td><td>Continuous monitoring &amp; optimization</td></tr>
      <tr><td><span class="check-icon">✓</span>Build client trust</td><td>International quality compliance</td></tr>
      <tr><td><span class="check-icon">✓</span>Scale engineering operations</td><td>Structured workflow management</td></tr>
      <tr><td><span class="check-icon">✓</span>Ensure consistent project delivery</td><td>Process-based execution</td></tr>
      <tr><td><span class="check-icon">✓</span>Strengthen risk management</td><td>Preventive and corrective controls</td></tr>
      <tr><td><span class="check-icon">✓</span>Enhance customer satisfaction</td><td>Customer-focused quality systems</td></tr>
    </tbody>
  </table>

  <div class="section-label">Client Value</div>
  <h2 class="block-title">5 Key Benefits for Our Clients</h2>
  <p>This certification directly translates into measurable advantages for every client we serve. Here is what you can expect:</p>

  <div class="benefits-grid">
    <div class="benefit-card">
      <span class="benefit-num">01</span>
      <div class="benefit-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E86DE" stroke-width="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
      </div>
      <h3>Improved Service Quality</h3>
      <p>More consistent, reliable, and quality-driven engineering services backed by standardized operational processes.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-num">02</span>
      <div class="benefit-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0FA3B1" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 17.5h7M17.5 14v7"/></svg>
      </div>
      <h3>Better Project Management</h3>
      <p>Structured execution, monitoring, and delivery management ensuring better timelines and reduced risks.</p>
      <ul class="mini-list">
        <li>Reduced operational risks</li>
        <li>Improved accountability</li>
        <li>Efficient communication</li>
      </ul>
    </div>
    <div class="benefit-card">
      <span class="benefit-num">03</span>
      <div class="benefit-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4A946" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      </div>
      <h3>Stronger Customer Focus</h3>
      <p>Better understanding of your requirements, faster issue resolution, and long-term partnership building.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-num">04</span>
      <div class="benefit-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C5CBF" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      </div>
      <h3>Continuous Improvement Culture</h3>
      <p>Ongoing evaluation and optimization of engineering workflows to reduce inefficiencies and drive innovation.</p>
    </div>
    <div class="benefit-card">
      <span class="benefit-num">05</span>
      <div class="benefit-icon-wrap">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D7A5F" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
      </div>
      <h3>Internationally Recognized Credibility</h3>
      <p>Globally accepted quality standards that build confidence among clients, partners, vendors, and enterprise customers.</p>
    </div>
  </div>

  <div class="commitment-block">
    <h2>Our Commitment to Engineering Excellence</h2>
    <p style="color:rgba(255,255,255,0.75); font-size:1rem; margin-bottom: 8px;">The ISO 9001:2015 certification is not just an achievement — it is a responsibility we carry forward in every project, every engagement, and every solution we deliver.</p>
    <div class="commit-grid">
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Delivering reliable engineering solutions
      </div>
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Maintaining strong quality management practices
      </div>
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Adopting advanced technologies and workflows
      </div>
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Supporting clients with scalable services
      </div>
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Continuously improving operational performance
      </div>
      <div class="commit-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        Upholding transparency and excellence always
      </div>
    </div>
  </div>

  <div class="section-label">Looking Ahead</div>
  <h2 class="block-title">Driving the Future with Quality &amp; Innovation</h2>

  <div class="future-strip">
    <div class="future-text">
      <p>As industries transform through AI, automation, and modern infrastructure, quality management is more critical than ever. This certification strengthens our foundation as we expand across new frontiers — bringing intelligent, future-ready engineering to every industry we serve.</p>
    </div>
    <div class="future-tags">
      <span class="future-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10"/></svg>
        Engineering Services
      </span>
      <span class="future-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        Intelligent Automation
      </span>
      <span class="future-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/><path d="M2 12h20M12 2a15 15 0 010 20"/></svg>
        Technical Consultancy
      </span>
      <span class="future-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
        AI-Powered Workflows
      </span>
      <span class="future-tag">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M2 20h20M6 20V10l6-6 6 6v10"/></svg>
        Industrial Infrastructure
      </span>
    </div>
  </div>

  <div class="section-label">About the Company</div>
  <div class="about-card">
    <div class="about-logo">
      <svg width="36" height="36" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
    </div>
    <div class="about-content">
      <h3>Port AI Engineers Pvt. Ltd.</h3>
      <p>An engineering and technology-driven organization headquartered in Hyderabad, India. With a strong focus on intelligent engineering solutions, scalable workflows, and quality-driven execution, we empower industries through innovation, precision, and operational excellence.</p>
      <div class="about-services">
        <span class="about-svc">Engineering Design</span>
        <span class="about-svc">Technical Consultancy</span>
        <span class="about-svc">Project Management</span>
        <span class="about-svc">Manpower Support</span>
        <span class="about-svc">Allied Engineering</span>
      </div>
    </div>
  </div>

  <div class="iso-nav-card">
    <div class="iso-nav-card__inner">
      <div>
        <h4 class="iso-nav-card__title">Explore More from Port AI Engineers</h4>
        <p class="iso-nav-card__desc">Read our engineering insights or connect with our quality management team.</p>
      </div>
      <div class="iso-nav-card__links">
        <a href="/blogs/" class="iso-nav-card__btn">&larr; Back to Blogs</a>
        <a href="/services/engineering/" class="iso-nav-card__btn">Engineering Services</a>
        <a href="/contact/" class="iso-nav-card__btn iso-nav-card__btn--primary">Contact Us</a>
      </div>
    </div>
  </div>
</main>

<footer>
  <p>© 2026 <strong>Port AI Engineers Private Limited</strong> · Hyderabad, Telangana, India</p>
  <p style="margin-top: 6px; font-size: 12px; opacity: 0.6;">ISO 9001:2015 Certified · Quality Management System · Engineering Excellence</p>
</footer>
`;

export default function Iso9001BlogPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/blogs/iso-9001-2015/#webpage",
    url: "https://portaiengineers.com/blogs/iso-9001-2015/",
    name: "ISO 9001:2015 Certification Milestone",
    description:
      "Port AI Engineers Pvt. Ltd. has achieved ISO 9001:2015 certification for its Quality Management System, validating engineering design and quality excellence.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
    {
      name: "ISO 9001:2015 Certification Milestone",
      url: "https://portaiengineers.com/blogs/iso-9001-2015/",
    },
  ]);

  return (
    <div className="iso-page">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <div dangerouslySetInnerHTML={{ __html: isoHtml }} />
    </div>
  );
}
