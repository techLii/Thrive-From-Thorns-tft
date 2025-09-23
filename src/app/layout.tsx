import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import GtagRouteTracker from "./components/GtagRouteTracker";
import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID;
const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;
const GTAG_SCRIPT_ID = GTAG_ID || GA_ADS_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Init script: only config once per ID
const gtagInit = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  ${GTAG_ID ? `gtag('config', '${GTAG_ID}', { send_page_view: false });` : ""}
  ${
    GA_ADS_ID
      ? `gtag('config', '${GA_ADS_ID}', { send_page_view: false });`
      : ""
  }
`;

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : undefined,
  title: {
    default: "Thrive From Thorns Kenya (TFT)",
    template: "%s | TFT",
  },
  description:
    "Thrive From Thorns Kenya (TFT) is a non-profit NGO improving access to quality education and resources for children in rural Kenya.",
  keywords: [
    "Thrive From Thorns Kenya",
    "TFT Kenya",
    "NGO in Kenya",
    "nonprofit organization Kenya",
    "education for children in Kenya",
    "rural education programs Kenya",
    "charity for children Kenya",
    "support education in rural Kenya",
    "Kenya education NGO",
    "community development Kenya",
    "non-profit for children in Africa",
    "child support programs Kenya",
    "access to education Kenya",
    "help children in Kenya",
    "education charity East Africa",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL || "/",
    siteName: "Thrive From Thorns Kenya (TFT)",
    title: "Thrive From Thorns Kenya (TFT)",
    description:
      "TFT expands learning opportunities for children in rural Kenya through books, trained educators, safe spaces and community support.",
    images: [
      {
        url: "/images/csag-logo-no-bg.png",
        width: 800,
        height: 800,
        alt: "TFT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrive From Thorns Kenya (TFT)",
    description:
      "TFT expands learning opportunities for children in rural Kenya through books, trained educators, safe spaces and community support.",
    images: ["/images/csag-logo-no-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {GTAG_SCRIPT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_SCRIPT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {gtagInit}
            </Script>
          </>
        )}
        {/* Google Tag Manager */}
        {GTM_ID ? (
          <Script id="gtm" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        ) : null}
        <StructuredData />
        <GtagRouteTracker />
        {children}
      </body>
    </html>
  );
}
