import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ADBAR Interior Design",
    template: "%s | ADBAR Interior Design",
  },
  description:
    "Blending luxury with nature — nature-friendly, scientifically integrated interior design solutions tailored for Ethiopia.",
  keywords: [
    "Adbar",
    "ADBAR Interior Design",
    "Interior Design Ethiopia",
    "Addis Ababa interior designer",
    "Adama interior designer",
    "Sustainable interior design",
    "Luxury interiors",
    "Residential interior",
    "Commercial office design",
    "Hospitality design",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    title: "ADBAR Interior Design",
    description:
      "Blending luxury with nature — nature-friendly, scientifically integrated interior design solutions tailored for Ethiopia.",
    url: "/",
    siteName: "ADBAR Interior Design",
    images: [
      {
        url: "/images/logo_with_tagline.png",
        width: 1200,
        height: 630,
        alt: "ADBAR Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADBAR Interior Design",
    description:
      "Blending luxury with nature — nature-friendly, scientifically integrated interior design solutions tailored for Ethiopia.",
    images: ["/images/logo_with_tagline.png"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ADBAR Interior Design",
              url: "\/",
              logo: "/images/logo.png",
              sameAs: [],
              telephone: "+251986367678",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ADBAR Interior Design",
              url: "\/",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "/?q={search_term_string}",
                },
                queryInput: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
