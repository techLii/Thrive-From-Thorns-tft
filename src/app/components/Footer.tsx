"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import moment from "moment-timezone";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [nlMsg, setNlMsg] = useState("");

  async function submitNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNlStatus("submitting");
    setNlMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail }),
      });
      if (!res.ok) throw new Error("Failed");
      setNlStatus("success");
      setNlMsg("Subscribed! We'll keep you posted.");
      setNlEmail("");
    } catch (err) {
      console.error(err);
      setNlStatus("error");
      setNlMsg("Subscription failed. Please try again.");
    }
  }
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div
                className="relative h-8 w-[160px] sm:h-9 sm:w-[180px]"
                aria-label="Thrive From Thorns"
                title="Thrive From Thorns"
              >
                <Image
                  src="/images/csag-icon-logo-no-bg.png"
                  alt="Thrive From Thorns logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 160px, 180px"
                  quality={80}
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Thrive From Thorns CLG | Registered under Kenya Companies Act (2015)
              Audited annually. 100% of funds go directly to mission work.
            </p>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TFT on Facebook"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://x.com/"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TFT on X (Twitter)"
                title="X (Twitter)"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TFT on Instagram"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TFT on YouTube"
                title="YouTube"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="TFT on LinkedIn"
                title="LinkedIn"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-projects"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  className="text-gray-300 hover:text-csag-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300 leading-relaxed">
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300">thrivefromthorns@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-csag-primary mt-1" />
                <span className="text-gray-300">
                  +254-710-826-262
                  </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-csag-accent-light">
              Newsletter
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter to receive updates on our work and
              impact.
            </p>
            {nlMsg && (
              <div
                className={`mb-3 rounded-minimal border px-3 py-2 text-xs ${
                  nlStatus === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : nlStatus === "error"
                    ? "border-red-200 bg-red-50 text-red-700"
                    : "border-gray-700 bg-gray-800 text-gray-300"
                }`}
              >
                {nlMsg}
              </div>
            )}
            <form className="space-y-3" onSubmit={submitNewsletter}>
              <input
                type="email"
                placeholder="Your email address"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                required
                className="csag-input-dark"
              />
              <button
                type="submit"
                disabled={nlStatus === "submitting"}
                className="w-full csag-button-accent"
              >
                {nlStatus === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="py-8 border-t border-gray-700 text-center text-gray-400 text-sm space-y-3">
          <p>
            © 2025-{moment().year()} Thrive From Thorns. All rights
            reserved.
          </p>
          <p className="space-x-4">
            <Link
              href="/donor-privacy-policy"
              className="hover:text-csag-primary transition-colors"
            >
              Donor Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-csag-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/sitemap.xml"
              className="hover:text-csag-primary transition-colors"
            >
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
