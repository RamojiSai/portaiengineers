import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header";
import FooterSection from "../components/sections/FooterSection";
import GlobalGetInTouch from "../components/layout/GlobalGetInTouch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Port AI Engineers Pvt. Ltd.",
  description: "Precision-focused engineering and CAD services powered by AI. Delivering faster, safer, and more predictable outcomes for complex industrial projects.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
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
        <Header />
        {children}
        <GlobalGetInTouch />
        <FooterSection />
      </body>
    </html>
  );
}
