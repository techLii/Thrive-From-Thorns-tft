"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";

import { usePathname, useRouter } from "next/navigation";

function NavLink(
  href: string,
  text: string,
  pathname: string,
  dropdown: boolean = false,
  onClick?: () => void,
  ariaExpanded?: boolean
) {
  if (dropdown) {
    return (
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-1 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-csag-primary transition-all duration-200",
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-csag-primary"
            : ""
        )}
        aria-haspopup="menu"
        aria-expanded={ariaExpanded}
        aria-label={`${text} menu`}
      >
        {text} <ChevronDown size={16} />
      </button>
    );
  } else
    return (
      <Link
        href={href}
        className={cn(
          `hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-csag-primary transition-all duration-200`,
          pathname === href
            ? "underline underline-offset-4 decoration-2 decoration-csag-primary"
            : ""
        )}
      >
        {text}
      </Link>
    );
}

function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const currentPath = mounted ? pathname || "" : "";
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isInvolvedDropdownOpen, setIsInvolvedDropdownOpen] = useState(false);
  const involvedRef = useRef<HTMLDivElement | null>(null);
  // mobile state
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [isMobileInvolvedOpen, setIsMobileInvolvedOpen] = useState(false);

  // ensure client-only elements (portals) render after first mount
  useEffect(() => setMounted(true), []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsMobileAboutOpen(false);
    setIsMobileInvolvedOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!isMobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileOpen]);

  // Close the About dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isAboutDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsAboutDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isAboutDropdownOpen]);

  // Close the Get Involved dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isInvolvedDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        involvedRef.current &&
        !involvedRef.current.contains(e.target as Node)
      ) {
        setIsInvolvedDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsInvolvedDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isInvolvedDropdownOpen]);

  // Avoid SSR/client mismatches by rendering only after mount
  if (!mounted) return null;

  return (
    <div className="flex items-center align-middle justify-between text-foreground p-4 px-6 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div
        onClick={() => router.push("/")}
        className="flex cursor-pointer items-center"
      >
        <div
          className="relative h-10 w-[160px] sm:h-11 sm:w-[190px] md:h-12 md:w-[220px]"
          aria-label="Thrive From Thorns Kenya"
          title="Thrive From Thorns Kenya"
        >
          <Image
            src="/images/csag-logo-no-bg.png"
            alt="Thrive From Thorns Kenya logo"
            fill
            priority
            className="object-contain hover:scale-[1.02] transition-transform duration-200"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 190px, 220px"
            quality={80}
          />
        </div>
        {/* <h2 className="text-2xl font-bold tracking-wide">
          <span className="md:block hidden uppercase font-sans">
            Thrive From Thorns Kenya
          </span>
          <span className="md:hidden block">CSAG</span>
        </h2> */}
      </div>
      <div className="items-center text-lg gap-x-16 font-semibold xl:flex hidden">
        <nav className="space-x-8 flex flex-row items-center">
          {NavLink("/", "Home", currentPath)}
          <div className="relative" ref={aboutRef}>
            {NavLink(
              "/about",
              "About Us",
              currentPath,
              true,
              () => setIsAboutDropdownOpen((o) => !o),
              isAboutDropdownOpen
            )}
            {isAboutDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-minimal border border-gray-100 py-2 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Who We Are
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsAboutDropdownOpen(false)}
                >
                  Leadership & Team
                </Link>
              </div>
            )}
          </div>
          {NavLink("/our-projects", "Our Projects", currentPath)}
          <div className="relative" ref={involvedRef}>
            {NavLink(
              "/get-involved",
              "Get Involved",
              pathname,
              true,
              () => setIsInvolvedDropdownOpen((o) => !o),
              isInvolvedDropdownOpen
            )}
            {isInvolvedDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-minimal border border-gray-100 py-2 z-50">
                <Link
                  href="/partnership"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Become a Partner
                </Link>
                <Link
                  href="/donate"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Donate
                </Link>
                <Link
                  href="/volunteer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-csag-primary/10 hover:text-csag-primary transition-colors"
                  onClick={() => setIsInvolvedDropdownOpen(false)}
                >
                  Volunteer & Join Us
                </Link>
              </div>
            )}
          </div>
          {NavLink("/blog", "Blog & News", currentPath)}
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="/donate"
            className="bg-csag-accent-dark hover:bg-csag-accent-darker text-white px-8 py-3 uppercase font-sans tracking-wide rounded-minimal duration-200 ease-in-out cursor-pointer font-bold transition-all hover:translate-y-[-1px]"
            aria-label="Donate Now"
            title="Donate Now"
          >
            DONATE NOW
          </Link>
        </div>
      </div>
      <div className="xl:hidden flex items-center justify-between">
        <button
          type="button"
          className="inline-flex hover:cursor-pointer items-center text-sm p-2 text-gray-600 rounded-minimal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-csag-primary transition-all duration-200"
          aria-controls="mobile-nav"
          aria-expanded={isMobileOpen}
          aria-label={
            isMobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          title={isMobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileOpen((o) => !o)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile overlay (portal to body so it shades the page, not the navbar) */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "xl:hidden fixed inset-0 bg-black/30 z-40 transition-opacity duration-200",
              isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            onClick={() => setIsMobileOpen(false)}
          />,
          document.body
        )}

      {/* mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "xl:hidden absolute top-full left-0 right-0 z-50 origin-top bg-white border-b border-gray-100 shadow-sm",
          "transition-all duration-200",
          isMobileOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        <nav className="p-2">
          <div className="space-y-1">
            <Link
              href="/"
              className={cn(
                "block rounded-minimal px-4 py-3 text-base font-medium",
                currentPath === "/"
                  ? "bg-gray-50 text-csag-primary"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setIsMobileOpen(false)}
            >
              Home
            </Link>

            {/* About (expandable) */}
            <button
              className={cn(
                "w-full flex items-center justify-between rounded-minimal px-4 py-3 text-base font-medium",
                currentPath.startsWith("/about")
                  ? "bg-gray-50 text-csag-primary"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setIsMobileAboutOpen((o) => !o)}
              aria-expanded={isMobileAboutOpen}
            >
              <span>About Us</span>
              <ChevronDown
                size={18}
                className={cn(
                  "transition-transform",
                  isMobileAboutOpen && "rotate-180"
                )}
              />
            </button>
            {isMobileAboutOpen && (
              <div className="px-2 pb-2">
                <Link
                  href="/about"
                  className="block rounded-minimal px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Who We Are
                </Link>
                <Link
                  href="/team"
                  className="block rounded-minimal px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Leadership & Team
                </Link>
              </div>
            )}

            <Link
              href="/our-projects"
              className={cn(
                "block rounded-minimal px-4 py-3 text-base font-medium",
                currentPath.startsWith("/our-projects")
                  ? "bg-gray-50 text-csag-primary"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setIsMobileOpen(false)}
            >
              Our Projects
            </Link>

            {/* Get Involved (expandable) */}
            <button
              className={cn(
                "w-full flex items-center justify-between rounded-minimal px-4 py-3 text-base font-medium",
                currentPath.startsWith("/get-involved") ||
                  ["/donate", "/volunteer", "/partnership"].includes(
                    currentPath
                  )
                  ? "bg-gray-50 text-csag-primary"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setIsMobileInvolvedOpen((o) => !o)}
              aria-expanded={isMobileInvolvedOpen}
            >
              <span>Get Involved</span>
              <ChevronDown
                size={18}
                className={cn(
                  "transition-transform",
                  isMobileInvolvedOpen && "rotate-180"
                )}
              />
            </button>
            {isMobileInvolvedOpen && (
              <div className="px-2 pb-2">
                <Link
                  href="/partnership"
                  className="block rounded-minimal px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Become a Partner
                </Link>
                <Link
                  href="/donate"
                  className="block rounded-minimal px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Donate
                </Link>
                <Link
                  href="/volunteer"
                  className="block rounded-minimal px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Volunteer & Join Us
                </Link>
              </div>
            )}

            <Link
              href="/blog"
              className={cn(
                "block rounded-minimal px-4 py-3 text-base font-medium",
                currentPath.startsWith("/blog")
                  ? "bg-gray-50 text-csag-primary"
                  : "hover:bg-gray-50"
              )}
              onClick={() => setIsMobileOpen(false)}
            >
              Blog & News
            </Link>

            <div className="pt-2 pb-3 px-2">
              <Link
                href="/donate"
                className="block text-center bg-csag-accent-dark hover:bg-csag-accent-darker text-white px-6 py-3 uppercase font-sans tracking-wide rounded-minimal font-bold transition-all duration-200 hover:translate-y-[-1px]"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Donate Now"
                title="Donate Now"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
