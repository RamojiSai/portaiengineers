import type { Metadata } from "next";
import OverviewClient from "./OverviewClient";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Platform Overview | Engineering Intelligence",
  description:
    "Explore Port AI Engineers' mission, vision, and core engineering delivery model, combining precision drafting, automation, and industrial systems design.",
  alternates: {
    canonical: "https://portaiengineers.com/platform/overview/",
  },
  openGraph: {
    title: "Platform Overview | Engineering Intelligence | Port AI Engineers",
    description:
      "Explore Port AI Engineers' mission, vision, and core engineering delivery model, combining precision drafting, automation, and industrial systems design.",
    url: "https://portaiengineers.com/platform/overview/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/Low-Carbon-Ammonia-image1.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Platform Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platform Overview | Engineering Intelligence | Port AI Engineers",
    description:
      "Explore Port AI Engineers' mission, vision, and core engineering delivery model, combining precision drafting, automation, and industrial systems design.",
    images: ["/Low-Carbon-Ammonia-image1.webp"],
  },
};

export default function OverviewPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/platform/overview/#webpage",
    url: "https://portaiengineers.com/platform/overview/",
    name: "Platform Overview | Engineering Intelligence",
    description:
      "Explore Port AI Engineers' mission, vision, and core engineering delivery model, combining precision drafting, automation, and industrial systems design.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Platform", url: "https://portaiengineers.com/platform/" },
    { name: "Overview", url: "https://portaiengineers.com/platform/overview/" },
  ]);

  return (
    <>
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <OverviewClient />
    </>
  );
}
