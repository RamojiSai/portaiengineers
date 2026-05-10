"use client";

import { usePathname } from "next/navigation";
import GetInTouchSection from "../sections/GetInTouchSection";

export default function GlobalGetInTouch() {
  const pathname = usePathname();

  if (pathname.startsWith("/contact")) {
    return null;
  }

  return <GetInTouchSection />;
}
