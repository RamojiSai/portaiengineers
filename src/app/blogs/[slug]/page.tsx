import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../lib/blogs";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="bg-[var(--color-bg)] px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14">
        <div className="mx-auto max-w-6xl space-y-8">
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
            <img
              src={post.image}
              alt={post.title}
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
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
            <div>
              <p className="font-semibold text-[var(--color-text)]">More from Port AI Engineers</p>
              <p>Explore related engineering and CAD insights.</p>
            </div>
            <Link
              href="/blogs"
              className="rounded-full border border-[var(--color-border)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)]"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
