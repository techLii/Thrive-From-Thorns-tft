import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thrive With Thorns Kenya (TWT)",
  description:
    "A Kenyan based non-profit organization focused on child survival.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main suppressHydrationWarning={true} className="min-h-screen">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
