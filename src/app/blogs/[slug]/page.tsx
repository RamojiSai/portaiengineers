import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../lib/blogs";
import {
  JsonLd,
  createBreadcrumbSchema,
  createBlogPostingSchema,
} from "../../../lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonical = `https://portaiengineers.com/blogs/${post.slug}/`;
  const imageUrl = post.image;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | Port AI Engineers`,
      description,
      url: canonical,
      siteName: "Port AI Engineers",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Port AI Engineers`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Port AI Engineers`,
      description,
      images: [imageUrl],
    },
  };
}

const serviceMapping: Record<string, { label: string; href: string }> = {
  "piping-stress-analysis": {
    label: "Piping Stress Analysis Services",
    href: "/services/engineering/piping-stress-analysis/",
  },
  "greenfield-projects": {
    label: "Greenfield Projects Engineering",
    href: "/services/engineering/greenfield-projects/",
  },
  "fire-evacuation-planning": {
    label: "Fire Evacuation Drawings & Layouts",
    href: "/services/cad/fire-evacuation/",
  },
  "pfd-vs-pid": {
    label: "P&ID and PFD CAD Services",
    href: "/services/cad/pid/",
  },
  "pdf-pid-conversion": {
    label: "CAD Conversion Services",
    href: "/services/cad/conversion/",
  },
  "fire-evacuation-drawing-standards": {
    label: "Fire Evacuation Drawing Services",
    href: "/services/cad/fire-evacuation/",
  },
};

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return notFound();
  }

  const matchedService = serviceMapping[slug];

  const canonicalUrl = `https://portaiengineers.com/blogs/${post.slug}/`;

  const blogPostingSchema = createBlogPostingSchema({
    id: `${canonicalUrl}#article`,
    url: canonicalUrl,
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    authorName: post.author,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
    { name: post.title, url: canonicalUrl },
  ]);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={blogPostingSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="bg-[var(--color-bg)] px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-6xl space-y-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[var(--color-muted)]">
            <Link href="/" className="transition-colors hover:text-[var(--color-primary)]">Home</Link>
            <span>/</span>
            <Link href="/blogs/" className="transition-colors hover:text-[var(--color-primary)]">Blogs</Link>
            <span>/</span>
            <span className="truncate max-w-[260px] sm:max-w-md text-[var(--color-primary)]">{post.title}</span>
          </nav>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              {post.category}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-4xl space-y-6 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
              <span className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-bg))] px-3 py-1 text-[var(--color-primary)]">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <div className="prose prose-invert max-w-none text-[var(--color-text)]">
              {post.content}
            </div>
          </div>
          <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="font-semibold text-[var(--color-text)]">More from Port AI Engineers</p>
              <p className="text-sm text-[var(--color-muted)]">Explore related engineering and CAD insights.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {matchedService && (
                <Link
                  href={matchedService.href}
                  className="rounded-full border border-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
                >
                  {matchedService.label} &rarr;
                </Link>
              )}
              <Link
                href="/contact/"
                className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition duration-300 hover:opacity-90"
              >
                Contact Us
              </Link>
              <Link
                href="/blogs/"
                className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]"
              >
                &larr; Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
