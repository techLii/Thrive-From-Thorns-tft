"use client";

import { defaultSeo } from "@/lib/seo";
import { DefaultSeo } from "next-seo";
import { useEffect, useState } from "react";

export default function SeoHead() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <DefaultSeo {...defaultSeo} />;
}
