import React from "react";

export const ORGANIZATION_ID = "https://portaiengineers.com/#organization";
export const WEBSITE_ID = "https://portaiengineers.com/#website";
export const CANONICAL_BASE = "https://portaiengineers.com";

export function globalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Port AI Engineers Pvt. Ltd.",
    legalName: "Port AI Engineers Private Limited",
    url: "https://portaiengineers.com/",
    logo: "https://portaiengineers.com/Logo.jpeg",
    email: "contact@portaiengineers.com",
    telephone: "+91 9440584273",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kukatpally",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/port-ai/",
      "https://www.instagram.com/portaiengineers",
    ],
  };
}

export function globalWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: "https://portaiengineers.com/",
    name: "Port AI Engineers",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createWebPageSchema({
  id,
  url,
  name,
  description,
  type = "WebPage",
}: {
  id: string;
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
    url,
    name,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createItemListSchema({
  name,
  description,
  items,
}: {
  name?: string;
  description?: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  url,
  serviceType,
  image,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@id": ORGANIZATION_ID,
    },
  };

  if (image) {
    schema.image = image.startsWith("http")
      ? image
      : `https://portaiengineers.com${image.startsWith("/") ? image : `/${image}`}`;
  }

  return schema;
}

export function parseDateToIsoOrOmit(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const match = dateStr.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (match) {
    const [, monthName, dayStr, yearStr] = match;
    const months: Record<string, string> = {
      january: "01", feb: "02", february: "02", mar: "03", march: "03",
      apr: "04", april: "04", may: "05", june: "06",
      july: "07", aug: "08", august: "08", sep: "09", september: "09",
      oct: "10", october: "10", nov: "11", november: "11", dec: "12", december: "12"
    };
    const m = months[monthName.toLowerCase()];
    if (m) {
      const d = dayStr.padStart(2, "0");
      return `${yearStr}-${m}-${d}`;
    }
  }
  return undefined;
}

export function createBlogPostingSchema({
  id,
  url,
  headline,
  description,
  image,
  datePublished,
  authorName,
  type = "BlogPosting",
}: {
  id: string;
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  authorName: string;
  type?: "BlogPosting" | "Article";
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
    mainEntityOfPage: url,
    headline,
    description,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };

  if (image) {
    schema.image = image.startsWith("http")
      ? image
      : `https://portaiengineers.com${image.startsWith("/") ? image : `/${image}`}`;
  }

  const isoDate = parseDateToIsoOrOmit(datePublished);
  if (isoDate) {
    schema.datePublished = isoDate;
  }

  return schema;
}

export function JsonLd({
  schema,
}: {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
