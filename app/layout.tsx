import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sondr Designs",
  description: "We help businesses grow by crafting elevated digital experiences to drive conversion and define identity in the online space.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://sondrdesigns.com/#organization",
      "name": "Sondr Designs",
      "url": "https://sondrdesigns.com",
      "logo": { "@type": "ImageObject", "url": "https://sondrdesigns.com/logo.webp" },
      "image": "https://sondrdesigns.com/logo.webp",
      "description": "We help businesses grow by crafting elevated digital experiences to drive conversion and define identity in the online space.",
      "telephone": "+18087219350",
      "email": "studio@sondrdesigns.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Honolulu",
        "addressRegion": "HI",
        "addressCountry": "US"
      },
      "areaServed": { "@type": "City", "name": "Honolulu" },
      "sameAs": [
        "https://www.instagram.com/sondr.designs/",
        "https://www.linkedin.com/company/sondrdesigns/",
        "https://www.facebook.com/people/Sondr-Designs/61583928612114/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sondrdesigns.com/#website",
      "url": "https://sondrdesigns.com",
      "name": "Sondr Designs",
      "publisher": { "@id": "https://sondrdesigns.com/#organization" }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
