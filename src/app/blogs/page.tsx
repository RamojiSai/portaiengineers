import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogCards } from "../../lib/blogs";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../lib/schema";

export const metadata: Metadata = {
  title: "Engineering Insights, Blogs & Technical Articles",
  description:
    "Browse engineering insights, technical guides, and industry updates covering CAD services, piping stress analysis, greenfield projects, and ISO certifications.",
  alternates: {
    canonical: "https://portaiengineers.com/blogs/",
  },
  openGraph: {
    title: "Engineering Insights, Blogs & Technical Articles | Port AI Engineers",
    description:
      "Browse engineering insights, technical guides, and industry updates covering CAD services, piping stress analysis, greenfield projects, and ISO certifications.",
    url: "https://portaiengineers.com/blogs/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/hero-petrochemical-DMHvwGIB.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Blog & Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights, Blogs & Technical Articles | Port AI Engineers",
    description:
      "Browse engineering insights, technical guides, and industry updates covering CAD services, piping stress analysis, greenfield projects, and ISO certifications.",
    images: ["/hero-petrochemical-DMHvwGIB.webp"],
  },
};

export default function BlogsListingPage() {
  const collectionPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/blogs/#webpage",
    url: "https://portaiengineers.com/blogs/",
    name: "Engineering Insights, Blogs & Technical Articles",
    description:
      "Browse engineering insights, technical guides, and industry updates covering CAD services, piping stress analysis, greenfield projects, and ISO certifications.",
    type: "CollectionPage",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
  ]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={collectionPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="bg-[var(--color-bg)] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Blogs
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
                Browse engineering stories, project insights, and technical guidance.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Discover blogs covering Process Engineering, CAD Services, Plant Engineering, and more. Tap any card to read the full article with a polished, readable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {blogCards.map((card, index) => (
              <Link
                key={card.slug}
                href={card.href}
                className="group overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.24)]"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <Image
                    src={card.image}
                    alt=""
                    width={600}
                    height={400}
                    priority={index === 0}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-bg))] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                      {card.category}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-[var(--color-text)]">{card.title}</h2>
                    <p className="max-h-16 overflow-hidden text-sm leading-relaxed text-[var(--color-muted)]">
                      {card.excerpt}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--color-muted)]">
                    <span>{card.author}</span>
                    <span>{card.date}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[var(--color-primary)]">{card.readTime}</span>
                    <span className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-bg)]">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
