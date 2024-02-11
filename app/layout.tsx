import SupabaseProvider from "./supabase-provider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "styles/main.css";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";
// import CustomToast from "@/components/Toast/Toast";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const meta: Metadata = {
  title: {
    template: "%s | Frigear",
    default: "Non-profit | Frigear",
  },
  generator: "Next.js",
  applicationName: "Frigear-App",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/da-DK",
      "de-DE": "/de-DE",
      "en-US": "/en-US",
    },
  },
  keywords: [
    "Foreningen Frigear, Frigear, Non-profit, Frivillige, Roskilde festival frivillig, bar, Arena scenen, Frigear Bar, Forening, Almennyttig, Frivillig-drevet, Frivillig-forening, Foreningsliv",
  ],
  creator: "Morten Six",
  description:
    "Foreningen Frigear faciliterer, støtter, og driver frivillig non-profit projekter, med fokus på medlemsindflydelse og bæredygtighed.",
  openGraph: {
    title: "Frigear",
    description:
      "Foreningen Frigear faciliterer, støtter, og driver frivillig non-profit projekter, med fokus på medlemsindflydelse og bæredygtighed.",
    url: "https://frigear.nu/",
    siteName: "Frigear",
    images: ["logo_with_rf_bgr.jpg", "FGR_logo_purple-dark.png"],
    type: "website",
  },
  twitter: {
    title: "Frigear",
    description:
      "Foreningen Frigear faciliterer, støtter, og driver frivillig non-profit projekter, med fokus på medlemsindflydelse og bæredygtighed.",
    site: "https://frigear.nu/",
    images: ["logo_with_rf_bgr.jpg", "FGR_logo_purple-dark.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://frigear.nu"
  ),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="da">
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
        <Analytics />
      </body>
    </html>
  );
}
