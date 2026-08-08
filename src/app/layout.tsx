import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { generalContractorJsonLd } from "@/lib/seo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hycoreconstruction.com"
  ),
  title: {
    default: "Hycore Construction | Building Communities, One Project at a Time",
    template: "%s | Hycore Construction",
  },
  description:
    "Hycore Construction is a forward-thinking construction company built on precision, accountability, and long-term partnerships. We deliver high-quality commercial and residential projects.",
  keywords: [
    "construction",
    "home construction",
    "commercial construction",
    "remodeling",
    "kitchen remodeling",
    "steel structure",
    "project management",
    "Hycore Construction",
  ],
  authors: [{ name: "Hycore Construction" }],
  creator: "Hycore Construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hycore Construction",
    title: "Hycore Construction | Building Communities, One Project at a Time",
    description:
      "A forward-thinking construction company dedicated to transforming ideas into reality.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hycore Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hycore Construction",
    description:
      "A forward-thinking construction company dedicated to transforming ideas into reality.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D7C5407TB1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D7C5407TB1');
          `}
        </Script>
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-brand-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generalContractorJsonLd()) }}
        />
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
