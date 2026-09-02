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
        url: "https://portaiengineers.com/services/engineering/flow/process/",
      },
      {
        name: "3D Piping Engineering",
        url: "https://portaiengineers.com/services/engineering/flow/piping-3d/",
      },
      {
        name: "Piping Engineering",
        url: "https://portaiengineers.com/services/engineering/flow/piping-eng/",
      },
      {
        name: "Instrumentation & Control",
        url: "https://portaiengineers.com/services/engineering/flow/instrumentation/",
      },
      {
        name: "Piping Stress Analysis",
        url: "https://portaiengineers.com/services/engineering/flow/stress/",
      },
      {
        name: "Greenfield Projects",
        url: "https://portaiengineers.com/services/engineering/flow/greenfield/",
      },
      {
        name: "Brownfield Projects",
        url: "https://portaiengineers.com/services/engineering/flow/brownfield/",
      },
      {
        name: "Power Plants",
        url: "https://portaiengineers.com/services/engineering/flow/power-plants/",
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
