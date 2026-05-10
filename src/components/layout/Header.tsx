"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Our Platform",
    href: "#platform",
    items: [
      { label: "Overview", href: "/platform/overview" },
      { label: "Features", href: "/platform/features" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: [
      {
        label: "Engineering Services",
        href: "/services/engineering#engineering-flow",
      },
      { label: "CAD Services", href: "/services/engineering#cad-flow" },
      // { label: "Consulting", href: "/services/consulting" },
    ],
  },
  // {
  //   label: "Solutions",
  //   href: "#solutions",
  //   items: [
  //     { label: "AI Solutions", href: "/solutions/ai" },
  //     { label: "Automation", href: "/solutions/automation" },
  //     { label: "Industry Use Cases", href: "/solutions/industry" },
  //   ],
  // },
  {
    label: "Blogs",
    href: "#blogs",
    items: [
      { label: "Blogs", href: "/blogs/all" },
      // { label: "Resources", href: "/blogs/resources" },
    ],
  }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const isEngineeringServicesPage = pathname.startsWith("/services/engineering");

  useEffect(() => {
    if (!isEngineeringServicesPage) {
      setActiveSection(null);
      return;
    }

    const targets = ["engineering-flow", "cad-flow"];
    const nodes = targets
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const hash = window.location.hash.replace("#", "");
    if (targets.includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection("engineering-flow");
    }

    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target) {
          setActiveSection((visible.target as HTMLElement).id);
        }
      },
      {
        threshold: [0.15, 0.35, 0.6],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isEngineeringServicesPage]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Company logo"
            width={140}
            height={48}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <div className="flex flex-col leading-tight text-[var(--color-text)]">
            <span className="text-base font-semibold">Port AI</span>
            <span className="text-xs font-medium text-[var(--color-muted)]">
              Engineers PVT. LTD
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-text)] md:flex">
          {navItems.map((item) => {
            const isServicesItem = item.label === "Services";
            const isActive = isServicesItem
              ? pathname.startsWith("/services")
              : item.items.some((entry) => pathname.startsWith(entry.href));

            return (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className={`flex items-center gap-2 transition-colors duration-300 hover:text-[var(--color-primary)] ${isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-300 group-hover:rotate-180 ${isActive ? "rotate-180" : ""
                      }`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="pointer-events-none absolute left-0 top-full z-30 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="w-60 translate-y-2 rounded-2xl bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] p-4 text-sm text-[var(--color-text)] shadow-[0_16px_30px_var(--color-card-shadow)] backdrop-blur-lg transition-all duration-300 group-hover:translate-y-0">
                    <div className="flex flex-col gap-2">
                      {item.items.map((entry) => {
                        const entryHash = entry.href.split("#")[1];
                        const entryBase = entry.href.split("#")[0];

                        const isEntryActive = isServicesItem
                          ? isEngineeringServicesPage
                            ? (activeSection ?? "engineering-flow") === entryHash
                            : pathname.startsWith(entryBase)
                          : pathname.startsWith(entryBase);

                        return (
                          <Link
                            key={entry.label}
                            href={entry.href}
                            className={`rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-bg)_70%,transparent)] hover:text-[var(--color-primary)] ${isEntryActive
                                ? "bg-[color-mix(in_srgb,var(--color-bg)_70%,transparent)] text-[var(--color-primary)]"
                                : ""
                              }`}
                          >
                            {entry.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-[max-height,opacity] duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-[var(--color-text)]">
          {navItems.map((item) => {
            const isServicesItem = item.label === "Services";
            const isActive = isServicesItem
              ? pathname.startsWith("/services")
              : item.items.some((entry) => pathname.startsWith(entry.href));

            return (
              <div key={item.label} className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu(item.label)}
                  className={`flex items-center justify-between rounded-lg px-2 py-2 text-left transition-colors duration-300 hover:text-[var(--color-primary)] ${isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`transition-transform duration-300 ${activeMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${activeMobileMenu === item.label
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="flex min-h-0 flex-col gap-1 pl-2">
                    {item.items.map((entry) => {
                      const entryHash = entry.href.split("#")[1];
                      const entryBase = entry.href.split("#")[0];

                      const isEntryActive = isServicesItem
                        ? isEngineeringServicesPage
                          ? (activeSection ?? "engineering-flow") === entryHash
                          : pathname.startsWith(entryBase)
                        : pathname.startsWith(entryBase);

                      return (
                        <Link
                          key={entry.label}
                          href={entry.href}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileMenu(null);
                          }}
                          className={`rounded-lg px-3 py-2 text-[var(--color-muted)] transition-colors duration-300 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] ${isEntryActive
                            ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                              : ""
                            }`}
                        >
                          {entry.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
