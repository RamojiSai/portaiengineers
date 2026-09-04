import type { Metadata } from "next";
import { Suspense } from "react";
import CADServicesClient from "./CADServicesClient";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createItemListSchema,
} from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Industrial CAD Services, P&ID, Isometrics & Automation",
  description:
    "Professional CAD services including PFD, P&ID diagrams, isometric drawings, general arrangement layouts, CAD conversion, and drafting automation.",
  alternates: {
    canonical: "https://portaiengineers.com/services/cad/",
  },
  openGraph: {
    title: "Industrial CAD Services, P&ID, Isometrics & Automation | Port AI Engineers",
    description:
      "Professional CAD services including PFD, P&ID diagrams, isometric drawings, general arrangement layouts, CAD conversion, and drafting automation.",
    url: "https://portaiengineers.com/services/cad/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/services/cad-automation.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Industrial CAD Services & Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial CAD Services, P&ID, Isometrics & Automation | Port AI Engineers",
    description:
      "Professional CAD services including PFD, P&ID diagrams, isometric drawings, general arrangement layouts, CAD conversion, and drafting automation.",
    images: ["/images/services/cad-automation.webp"],
  },
};

export default function CADServicesPage() {
  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/services/cad/#webpage",
    url: "https://portaiengineers.com/services/cad/",
    name: "Industrial CAD Services, P&ID, Isometrics & Automation",
    description:
      "Professional CAD services including PFD, P&ID diagrams, isometric drawings, general arrangement layouts, CAD conversion, and drafting automation.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "CAD Services", url: "https://portaiengineers.com/services/cad/" },
  ]);

  const itemListSchema = createItemListSchema({
    name: "CAD Services",
    items: [
      {
        name: "Process Flow Diagram (PFD)",
        url: "https://portaiengineers.com/services/cad/pfd/",
      },
      {
        name: "Piping & Instrumentation Diagram (P&ID)",
        url: "https://portaiengineers.com/services/cad/pid/",
      },
      {
        name: "Piping Isometric Drawings",
        url: "https://portaiengineers.com/services/cad/isometric/",
      },
      {
        name: "General Arrangement (GA)",
        url: "https://portaiengineers.com/services/cad/general-arrangement/",
      },
      {
        name: "CAD Conversion",
        url: "https://portaiengineers.com/services/cad/conversion/",
      },
      {
        name: "CAD Training",
        url: "https://portaiengineers.com/services/cad/training/",
      },
      {
        name: "CAD Automation",
        url: "https://portaiengineers.com/services/cad/automation/",
      },
      {
        name: "Fire Evacuation Plans & Layouts",
        url: "https://portaiengineers.com/services/cad/fire-evacuation/",
      },
    ],
  });

  return (
    <>
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={itemListSchema} />
      <Suspense fallback={null}>
        <CADServicesClient />
      </Suspense>
    </>
  );
}
