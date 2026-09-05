import type { Metadata } from "next";
import { Suspense } from "react";
import EngineeringServicesClient from "./EngineeringServicesClient";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createItemListSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Plant & Piping Engineering Services",
  description:
    "Multidisciplinary plant engineering services, including 3D piping engineering, process engineering, instrumentation & control, and piping stress analysis.",
  alternates: {
    canonical: "https://portaiengineers.com/services/engineering/",
  },
  openGraph: {
    title: "Plant & Piping Engineering Services | Port AI Engineers",
    description:
      "Multidisciplinary plant engineering services, including 3D piping engineering, process engineering, instrumentation & control, and piping stress analysis.",
    url: "https://portaiengineers.com/services/engineering/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/services/piping-engineering.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Plant & Piping Engineering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant & Piping Engineering Services | Port AI Engineers",
    description:
      "Multidisciplinary plant engineering services, including 3D piping engineering, process engineering, instrumentation & control, and piping stress analysis.",
    images: ["/images/services/piping-engineering.webp"],
  },
};

export default function EngineeringServicesPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/services/engineering/#webpage",
    url: "https://portaiengineers.com/services/engineering/",
    name: "Plant & Piping Engineering Services",
    description:
      "Multidisciplinary plant engineering services, including 3D piping engineering, process engineering, instrumentation & control, and piping stress analysis.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "Engineering Services", url: "https://portaiengineers.com/services/engineering/" },
  ]);

  const itemListSchema = createItemListSchema({
    name: "Engineering Services",
    items: [
      {
        name: "Process Engineering",
        url: "https://portaiengineers.com/services/engineering/process/",
      },
      {
        name: "3D Piping Engineering",
        url: "https://portaiengineers.com/services/engineering/piping-3d/",
      },
      {
        name: "Piping Engineering",
        url: "https://portaiengineers.com/services/engineering/piping-engineering/",
      },
      {
        name: "Instrumentation & Control",
        url: "https://portaiengineers.com/services/engineering/instrumentation/",
      },
      {
        name: "Piping Stress Analysis",
        url: "https://portaiengineers.com/services/engineering/piping-stress-analysis/",
      },
      {
        name: "Greenfield Projects",
        url: "https://portaiengineers.com/services/engineering/greenfield-projects/",
      },
      {
        name: "Brownfield Projects",
        url: "https://portaiengineers.com/services/engineering/brownfield-projects/",
      },
      {
        name: "Power Plants",
        url: "https://portaiengineers.com/services/engineering/power-plants/",
      },
      {
        name: "Industrial Plant Layout",
        url: "https://portaiengineers.com/services/engineering/plant-layout/",
      },
    ],
  });

  return (
    <>
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={itemListSchema} />
      <Suspense fallback={null}>
        <EngineeringServicesClient />
      </Suspense>
    </>
  );
}
