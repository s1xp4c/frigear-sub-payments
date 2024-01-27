import SupabaseProvider from "./supabase-provider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Script from "next/script";
import { PropsWithChildren } from "react";
import "styles/main.css";

const meta = {
  title: "Foreningen Frigear",
  description:
    "Frigear appen for medlemmer og nysgerrige på vores Non-profit projekter",
  cardImage: "/logo_with_rf_bgr.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://frigear.nu/",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title,
  },
  twitter: {
    card: "summary_large_image",
    site: "Frigear App",
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black loading">
        <SupabaseProvider>
          {/* @ts-expect-error */}
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Footer />
        </SupabaseProvider>
      </body>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
    </html>
  );
}
