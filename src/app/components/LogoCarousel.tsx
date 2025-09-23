"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type LogoItem = {
  name: string;
  logo: string;
  href?: string;
};

interface LogoCarouselProps {
  items: LogoItem[];
  speed?: "slow" | "normal" | "fast"; // controls animation duration
  className?: string;
  grayscale?: boolean;
}

// A smooth, infinitely scrolling horizontal carousel for logos.
// Duplicates the content to create a seamless loop and pauses on hover for accessibility.
export default function LogoCarousel({
  items,
  speed = "normal",
  className,
  grayscale = true,
}: LogoCarouselProps) {
  const duration = speed === "fast" ? 18 : speed === "slow" ? 36 : 24; // seconds

  // Duplicate to enable seamless scroll
  const loopItems = [...items, ...items];

  return (
    <div
      className={clsx(
        "relative overflow-hidden group",
        // edge fade mask on modern browsers
        "[--mask:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:var(--mask)]",
        className
      )}
      aria-label="Scrolling partner logos"
      role="region"
    >
      <div
        className={clsx(
          "flex gap-8 md:gap-10 w-max will-change-transform",
          "group-hover:[animation-play-state:paused]",
          "motion-reduce:[animation:none]"
        )}
        style={{
          animation: `csag-scroll-x ${duration}s linear infinite`,
        }}
      >
        {loopItems.map((item, i) => {
          const content = (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center justify-center h-16 md:h-20 px-4 flex-none"
              aria-hidden={i >= items.length}
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={160}
                height={80}
                loading="lazy"
                sizes="(max-width: 768px) 120px, 160px"
                quality={70}
                className={clsx(
                  "h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_0_0.5px_rgba(0,0,0,0.35)]",
                  grayscale &&
                    "grayscale group-hover:grayscale-0 transition-all"
                )}
              />
              <span className="sr-only">{item.name}</span>
            </div>
          );

          return item.href ? (
            <Link
              href={item.href}
              key={`${item.name}-${i}-link`}
              className="inline-flex"
              aria-label={item.name}
              tabIndex={i < items.length ? 0 : -1}
            >
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </div>
    </div>
  );
}
