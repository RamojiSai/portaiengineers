import type { Metadata } from "next";
import BlogsAllClient from "./BlogsAllClient";
import {
  JsonLd,
  createBreadcrumbSchema,
  createBlogPostingSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Inside Port AI Engineers | Engineering Excellence",
  description:
    "A closer look at how precision engineering, process-driven workflows, and ISO-grade delivery shape our mission for modern industrial projects.",
  alternates: {
    canonical: "https://portaiengineers.com/blogs/all/",
  },
  openGraph: {
    title: "Inside Port AI Engineers | Engineering Excellence | Port AI Engineers",
    description:
      "A closer look at how precision engineering, process-driven workflows, and ISO-grade delivery shape our mission for modern industrial projects.",
    url: "https://portaiengineers.com/blogs/all/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/hero-petrochemical-DMHvwGIB.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Engineering Excellence",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Port AI Engineers | Engineering Excellence | Port AI Engineers",
    description:
      "A closer look at how precision engineering, process-driven workflows, and ISO-grade delivery shape our mission for modern industrial projects.",
    images: ["/hero-petrochemical-DMHvwGIB.webp"],
  },
};

export default function InsidePortAIBlogPage() {
  const canonicalUrl = "https://portaiengineers.com/blogs/all/";

  const blogPostingSchema = createBlogPostingSchema({
    id: `${canonicalUrl}#article`,
    url: canonicalUrl,
    headline: "Inside Port AI Engineers | Engineering Excellence",
    description:
      "A closer look at how precision engineering, process-driven workflows, and ISO-grade delivery shape our mission for modern industrial projects.",
    image: "/hero-petrochemical-DMHvwGIB.webp",
    datePublished: "May 5, 2026",
    authorName: "Port AI Engineers",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Blogs", url: "https://portaiengineers.com/blogs/" },
    { name: "Inside Port AI Engineers", url: canonicalUrl },
  ]);

  return (
    <>
      <JsonLd schema={blogPostingSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <BlogsAllClient />
    </>
  );
}
