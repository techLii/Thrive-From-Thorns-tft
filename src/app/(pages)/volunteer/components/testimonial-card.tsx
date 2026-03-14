"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  role?: string;
  imageUrl: string;
  testimonial: string;
}

export function TestimonialCard({ m }: { m: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = m.testimonial.length > 200;

  return (
    <blockquote className="h-full rounded-lg bg-white p-6 flex flex-col">
      <Quote aria-hidden className="h-8 w-8 text-csag-primary/60 shrink-0" />
      <div className="mt-3 flex-1 flex flex-col">
        <p className={`text-gray-800 italic ${expanded ? "whitespace-pre-line" : "line-clamp-4"}`}>
          {m.testimonial}
        </p>
        {!expanded && isLong && (
          <button
            onClick={() => setExpanded(true)}
            className="text-csag-primary text-sm font-semibold mt-2 self-start hover:underline"
          >
            Read more
          </button>
        )}
        {expanded && isLong && (
          <button
            onClick={() => setExpanded(false)}
            className="text-csag-primary text-sm font-semibold mt-2 self-start hover:underline"
          >
            Show less
          </button>
        )}
      </div>
      <footer className="mt-5 flex items-center gap-4 text-sm text-gray-600 shrink-0">
        <Image
          src={m.imageUrl}
          alt={m.name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-lg object-cover"
          sizes="56px"
          quality={70}
        />
        <div>
          <span className="block font-semibold text-gray-900">
            {m.name}
          </span>
          <span className="block">
            {m.role ? `${m.role} | ${m.designation}` : m.designation}
          </span>
        </div>
      </footer>
    </blockquote>
  );
}
