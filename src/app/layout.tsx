import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import FooterSection from "../components/sections/FooterSection";
import GlobalGetInTouch from "../components/layout/GlobalGetInTouch";
import { JsonLd, globalOrganizationSchema, globalWebSiteSchema } from "../lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portaiengineers.com"),
  title: {
    default: "Port AI Engineers Pvt. Ltd. | Precision Engineering & CAD Services",
    template: "%s | Port AI Engineers",
  },
  description: "Precision-focused engineering and CAD services powered by AI. Delivering faster, safer, and more predictable outcomes for complex industrial projects.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/Logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/Logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EC4J1LSR38"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EC4J1LSR38');
          `}
        </Script>
        <JsonLd schema={globalOrganizationSchema()} />
        <JsonLd schema={globalWebSiteSchema()} />
        <Header />
        {children}
        <GlobalGetInTouch />
        <FooterSection />
      </body>
    </html>
  );
}
