import type { Metadata } from "next";
import Link from "next/link";
import "./startup.css";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Startup India Recognition Milestone",
  description:
    "Port AI Engineers Pvt. Ltd. is officially recognized under the Startup India initiative by the Government of India, driving innovation in industrial design and engineering.",
  alternates: {
    canonical: "https://portaiengineers.com/blogs/startup-certified/",
  },
  openGraph: {
    title: "Startup India Recognition Milestone | Port AI Engineers",
    description:
      "Port AI Engineers Pvt. Ltd. is officially recognized under the Startup India initiative by the Government of India, driving innovation in industrial design and engineering.",
    url: "https://portaiengineers.com/blogs/startup-certified/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/certifications/startup-india.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Startup India Recognition",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup India Recognition Milestone | Port AI Engineers",
    description:
      "Port AI Engineers Pvt. Ltd. is officially recognized under the Startup India initiative by the Government of India, driving innovation in industrial design and engineering.",
    images: ["/images/certifications/startup-india.webp"],
  },
};

const startupHtml = `
<header class="startup-hero">
  <div class="startup-hero-inner">
    <div class="startup-tags">
      <span class="startup-tag primary">Startup India</span>
      <span class="startup-tag outline">Company News</span>
      <span class="startup-tag teal">Innovation</span>
      <span class="startup-tag outline">Engineering Excellence</span>
    </div>

    <h1>Port AI Engineers Pvt. Ltd. Recognized Under <span>Startup India</span></h1>
    <p class="startup-subtitle">A new chapter of innovation and growth as we accelerate trusted engineering solutions for modern industries.</p>

    <div class="startup-meta">
      <span>Government of India Initiative</span>
      <span>Innovation • Growth • Excellence</span>
      <span>Port AI Engineers Pvt. Ltd.</span>
    </div>
  </div>
</header>


<main class="startup-body">
  <div class="startup-cert-card certReveal">
    <div class="cert-accent">
      <span class="saffron"></span>
      <span class="white"></span>
      <span class="green"></span>
    </div>
    <div class="cert-card-inner">
      <div class="cert-left">
        <div class="cert-image-wrap">
          <img src="/images/certifications/startup-india.webp" alt="DIPP Certificate of Recognition - DIPP265006" width="1400" height="989" loading="lazy" decoding="async" />
        </div>
      </div>
      <div class="cert-right">
        <h3>Certificate of Recognition</h3>
        <div class="cert-details">
          <div><strong>Certificate No.</strong> DIPP265006</div>
          <div><strong>Date of Issue</strong> 01-06-2026</div>
          <div><strong>Valid Upto</strong> 04-05-2036</div>
          <div><strong>Sector</strong> Design Industry</div>
        </div>
      </div>
    </div>
  </div>
  <div class="startup-section-label">A Proud Milestone</div>
  <p class="startup-lead">
    We are delighted to announce that Port AI Engineers Pvt. Ltd. has been officially recognized under the Startup India initiative, a flagship program launched by the Government of India to promote innovation, entrepreneurship, and sustainable business growth across the country.
  </p>
  <p>This recognition marks an important milestone in our journey and reflects our commitment to building innovative engineering solutions, delivering technical excellence, and creating long-term value for our clients, partners, and stakeholders.</p>
  <p>As we continue to grow, this achievement strengthens our vision of becoming a trusted engineering and technology partner capable of solving complex industrial challenges through innovation, quality, and expertise.</p>

  <div class="startup-section-label">What is Startup India?</div>
  <h2>Building a Strong Innovation Ecosystem</h2>
  <p>Startup India is an initiative introduced by the Government of India to encourage entrepreneurship, foster innovation, and support emerging businesses with the resources needed to scale and succeed.</p>

  <div class="startup-card-grid">
    <div class="startup-card"><strong>Innovation-driven growth</strong></div>
    <div class="startup-card"><strong>Business development support</strong></div>
    <div class="startup-card"><strong>Industry collaboration</strong></div>
    <div class="startup-card"><strong>Access to opportunities</strong></div>
    <div class="startup-card"><strong>Simplified regulatory processes</strong></div>
    <div class="startup-card"><strong>Intellectual property support</strong></div>
  </div>
  <p>Being recognized under Startup India signifies that an organization demonstrates innovation, scalability, and the potential to contribute meaningfully to economic and technological development.</p>

  <div class="startup-section-label">What This Means for Us</div>
  <h2>Recognition of Engineering Excellence</h2>
  <p>Startup India recognition is a validation of our commitment to innovation, engineering excellence, and future-focused problem-solving.</p>
  <p>This recognition reinforces our position as a company focused on:</p>
  <ul class="startup-list">
    <li>Engineering excellence</li>
    <li>Technical innovation</li>
    <li>Quality-driven execution</li>
    <li>Digital transformation</li>
    <li>Sustainable growth</li>
    <li>Customer success</li>
  </ul>

  <div class="startup-section-label">Our Mission</div>
  <h2>Empowering Organizations with Reliability</h2>
  <p>At Port AI Engineers, our mission is to empower organizations with reliable engineering services, technical expertise, project support, and innovative solutions that drive operational efficiency and business success.</p>
  <p>We believe that every engineering challenge presents an opportunity to innovate, improve, and create measurable value.</p>

  <div class="startup-section-label">What We Do</div>
  <h2>Specialized Services Across Engineering Domains</h2>
  <div class="startup-card-grid">
    <div class="startup-card">
      <strong>Engineering Design Services</strong>
      <p>High-quality engineering design solutions that improve project outcomes, reduce risk, and enhance operational efficiency.</p>
    </div>
    <div class="startup-card">
      <strong>Technical Consultancy</strong>
      <p>Feasibility studies, engineering reviews, and strategic guidance to support informed technical decisions.</p>
    </div>
    <div class="startup-card">
      <strong>Project Management Support</strong>
      <p>Planning, coordination, monitoring, and delivery support while maintaining quality and compliance standards.</p>
    </div>
    <div class="startup-card">
      <strong>Skilled Manpower Support</strong>
      <p>Qualified engineering professionals and technical resources to help execute projects successfully.</p>
    </div>
    <div class="startup-card">
      <strong>Allied Engineering Services</strong>
      <p>Customized engineering support tailored to industry-specific requirements and business objectives.</p>
    </div>
  </div>

  <div class="startup-section-label">Driving Innovation</div>
  <h2>Innovation Through Engineering</h2>
  <p>Innovation is not simply about adopting new technologies; it is about creating practical solutions that solve real-world challenges.</p>
  <div class="startup-pill-row">
    <span class="startup-pill">Continuous process improvement</span>
    <span class="startup-pill">Modern engineering methodologies</span>
    <span class="startup-pill">Technology-driven solutions</span>
    <span class="startup-pill">Quality-focused delivery</span>
    <span class="startup-pill">Customer-centric execution</span>
  </div>

  <div class="startup-section-label">Why This Matters</div>
  <h2>Commitment to Excellence</h2>
  <p>This recognition provides further motivation for our team to continue pushing boundaries and delivering excellence.</p>
  <div class="startup-card-grid">
    <div class="startup-card"><strong>Customer Success</strong><p>Ensuring every project delivers measurable outcomes and long-term value.</p></div>
    <div class="startup-card"><strong>Quality Excellence</strong><p>Maintaining high standards across all engineering and support services.</p></div>
    <div class="startup-card"><strong>Continuous Improvement</strong><p>Building a culture focused on learning, innovation, and operational excellence.</p></div>
    <div class="startup-card"><strong>Sustainable Growth</strong><p>Expanding our capabilities while creating meaningful impact.</p></div>
  </div>

  <div class="startup-section-label">Building the Future</div>
  <h2>Partnering for Impact</h2>
  <p>As industries evolve through digital transformation, automation, and advanced engineering practices, Port AI Engineers remains committed to helping businesses adapt, innovate, and thrive.</p>
  <p>The Startup India recognition represents not only an achievement but also a responsibility to continue delivering innovative solutions, maintaining the highest standards of quality, and contributing to India&apos;s growing innovation ecosystem.</p>

  <div class="startup-section-label">Looking Ahead</div>
  <h2>Our Roadmap</h2>
  <div class="startup-timeline">
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Expanding engineering capabilities</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Strengthening technical consultancy services</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Supporting larger and more complex projects</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Adopting emerging technologies</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Enhancing operational excellence</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Building long-term client partnerships</div>
    <div class="startup-timeline-step"><span class="startup-step-dot"></span>Driving innovation across industries</div>
  </div>

  <div class="startup-section-label">A Message of Gratitude</div>
  <div class="startup-highlight">
    <p>This achievement would not have been possible without the trust of our clients, the dedication of our team, and the support of our partners.</p>
    <p>We thank everyone who has been part of our journey and look forward to achieving many more milestones together.</p>
    <p><strong>Port AI Engineers Pvt. Ltd.</strong></p>
    <p><strong>Engineering Excellence • Innovation • Reliability</strong></p>
    <p><strong>Recognized by Startup India</strong></p>
  </div>
</main>

<footer class="startup-footer">
  <p>© 2026 <strong>Port AI Engineers Pvt. Ltd.</strong> · Hyderabad, Telangana, India</p>
  <p style="margin-top: 6px; font-size: 12px; opacity: 0.6;">Startup India Recognized · Engineering Excellence · Innovation</p>
</footer>
`;

export default function StartupCertifiedPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/blogs/startup-certified/#webpage",
    url: "https://portaiengineers.com/blogs/startup-certified/",
    name: "Startup India Recognition Milestone",
    description:
      "Port AI Engineers Pvt. Ltd. is officially recognized under the Startup India initiative by the Government of India, driving innovation in industrial design and engineering.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
    {
      name: "Startup India Recognition Milestone",
      url: "https://portaiengineers.com/blogs/startup-certified/",
    },
  ]);

  return (
    <div className="startup-page">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <div dangerouslySetInnerHTML={{ __html: startupHtml }} />
      <div className="mx-auto my-8 max-w-4xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <div>
            <h4 className="text-base font-semibold text-[var(--color-text)]">Explore More from Port AI Engineers</h4>
            <p className="text-sm text-[var(--color-muted)]">Read our engineering insights or connect with our technical team.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/blogs/"
              className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              &larr; Back to Blogs
            </Link>
            <Link
              href="/contact/"
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
