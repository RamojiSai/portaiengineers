"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavEntry = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  items?: NavEntry[];
};

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    items: [
      {
        label: "Engineering Services",
        href: "/services/engineering/",
      },
      { label: "CAD Services", href: "/services/cad/" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Resources",
    href: "/blogs/",
    items: [
      { label: "All Resources", href: "/blogs/" },
      { label: "Engineering Insights", href: "/blogs/engineers-blog/" },
      { label: "Company Updates", href: "/blogs/all/" },
    ],
  },
  {
    label: "Certifications",
    href: "/blogs/iso-9001-2015/",
    items: [
      { label: "ISO 9001:2015 Certified", href: "/blogs/iso-9001-2015/" },
      { label: "Startup India Certified", href: "/blogs/startup-certified/" },
    ],
  },
  {
    label: "Contact",
    href: "/contact/",
  },
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
            src="/Logo.jpeg"
            alt="Port AI Engineers Pvt. Ltd. Logo"
            width={40}
            height={40}
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

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-[var(--color-text)] lg:gap-8">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.items && item.items.length > 0);
              const isServicesItem = item.label === "Services";
              const isActive = isServicesItem
                ? pathname.startsWith("/services")
                : hasDropdown
                  ? item.items!.some((entry) =>
                      entry.href === "/blogs/"
                        ? pathname === "/blogs" || pathname === "/blogs/"
                        : pathname.startsWith(entry.href)
                    )
                  : item.href.startsWith("/#")
                    ? false
                    : pathname.startsWith(item.href);

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors duration-300 hover:text-[var(--color-primary)] ${
                      isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 transition-colors duration-300 hover:text-[var(--color-primary)] ${
                      isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`transition-transform duration-300 group-hover:rotate-180 ${
                        isActive ? "rotate-180" : ""
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
                  </Link>
                  <div className="pointer-events-none absolute left-0 top-full z-30 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="w-60 translate-y-2 rounded-2xl bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] p-4 text-sm text-[var(--color-text)] shadow-[0_16px_30px_var(--color-card-shadow)] backdrop-blur-lg transition-all duration-300 group-hover:translate-y-0">
                      <div className="flex flex-col gap-2">
                        {item.items!.map((entry) => {
                          const entryHash = entry.href.split("#")[1];
                          const entryBase = entry.href.split("#")[0];

                          const isEntryActive = isServicesItem
                            ? isEngineeringServicesPage
                              ? (activeSection ?? "engineering-flow") === entryHash
                              : pathname.startsWith(entryBase)
                            : entry.href === "/blogs/"
                              ? pathname === "/blogs" || pathname === "/blogs/"
                              : pathname.startsWith(entryBase);

                          return (
                            <Link
                              key={entry.label}
                              href={entry.href}
                              className={`rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--color-bg)_70%,transparent)] hover:text-[var(--color-primary)] ${
                                isEntryActive
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
          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/4EDU6NFyWQLtrG91A"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-full border border-[var(--color-border)] px-3.5 py-2 text-xs font-semibold tracking-wider text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:inline-flex"
            >
              Schedule a Call
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-on-primary)] shadow-sm transition-all duration-300 hover:opacity-95 hover:shadow-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>

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
        className={`border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-[80vh] overflow-y-auto opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-3 px-6 py-4 text-sm font-medium text-[var(--color-text)]">
          {navItems.map((item) => {
            const hasDropdown = Boolean(item.items && item.items.length > 0);
            const isServicesItem = item.label === "Services";
            const isActive = isServicesItem
              ? pathname.startsWith("/services")
              : hasDropdown
                ? item.items!.some((entry) =>
                    entry.href === "/blogs/"
                      ? pathname === "/blogs" || pathname === "/blogs/"
                      : pathname.startsWith(entry.href)
                  )
                : item.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(item.href);

            if (!hasDropdown) {
              return (
                <div key={item.label} className="rounded-lg px-2 py-2">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMobileMenu(null);
                    }}
                    className={`block transition-colors duration-300 hover:text-[var(--color-primary)] ${
                      isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-lg px-2 py-2">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMobileMenu(null);
                    }}
                    className={`flex-1 text-left transition-colors duration-300 hover:text-[var(--color-primary)] ${
                      isActive ? "text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className="p-1 text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    <span
                      className={`inline-block transition-transform duration-300 ${
                        activeMobileMenu === item.label ? "rotate-180" : ""
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
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    activeMobileMenu === item.label
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="flex min-h-0 flex-col gap-1 pl-2">
                    {item.items!.map((entry) => {
                      const entryHash = entry.href.split("#")[1];
                      const entryBase = entry.href.split("#")[0];

                      const isEntryActive = isServicesItem
                        ? isEngineeringServicesPage
                          ? (activeSection ?? "engineering-flow") === entryHash
                          : pathname.startsWith(entryBase)
                        : entry.href === "/blogs/"
                          ? pathname === "/blogs" || pathname === "/blogs/"
                          : pathname.startsWith(entryBase);

                      return (
                        <Link
                          key={entry.label}
                          href={entry.href}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileMenu(null);
                          }}
                          className={`rounded-lg px-3 py-2 text-[var(--color-muted)] transition-colors duration-300 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] ${
                            isEntryActive
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
          <div className="mt-2 flex flex-col gap-2 border-t border-[var(--color-border)] pt-3">
            <Link
              href="/contact/"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-on-primary)] shadow-sm transition-opacity hover:opacity-95"
            >
              Request a Quote
            </Link>
            <a
              href="https://calendar.app.google/4EDU6NFyWQLtrG91A"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-xs font-semibold tracking-wider text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              Schedule a Call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
