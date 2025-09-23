"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GtagCommand = "config" | "event" | "js";
type GtagArgs =
  | [GtagCommand, string, Record<string, unknown>?]
  | [GtagCommand, Date];

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function sendPageview(url: string) {
  if (typeof window === "undefined") return;

  const title = typeof document !== "undefined" ? document.title : undefined;

  const payload: Record<string, unknown> = {
    page_path: url,
    page_title: title,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", payload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "page_view", ...payload });
  }
}

export default function GtagRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    sendPageview(pathname);
  }, [pathname]);

  return null;
}
