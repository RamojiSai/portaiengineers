"use client";

import { usePathname } from "next/navigation";
import GetInTouchSection from "../sections/GetInTouchSection";
import { WorkPlatformsSection } from "../sections/Wework_on";

export default function GlobalGetInTouch() {
  const pathname = usePathname();

  if (pathname.startsWith("/contact")) {
    return null;
  }

  return (
    <>
      <WorkPlatformsSection />
      <GetInTouchSection showForm={pathname === "/"} />
    </>
  );
}
