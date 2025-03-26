import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Fixify",
  description: "AI-Powered Yield Optimization on Solana",
  generator: "v0.dev",
  applicationName: "Fixify",
  keywords: ["AI", "DeFi", "Solana", "Yield", "Security", "Blockchain"],
  authors: [{ name: "Fixify Team", url: "https://fixify.io" }],
  creator: "Fixify",
  themeColor: "#000000",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Fixify - AI-Powered DeFi Optimization",
    description: "Automate and optimize yield farming with AI on Solana.",
    url: "https://fixify.io",
    siteName: "Fixify",
    type: "website",
    images: [
      {
        url: "https://fixify-public-assets.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Fixify OpenGraph Preview",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fixify",
  url: "https://fixify.io",
  logo: "https://fixify-public-assets.vercel.app/og-image.jpeg",
  sameAs: [
    "https://twitter.com/fixify",
    "https://github.com/fixify",
    "https://linkedin.com/company/fixify"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fixify - AI-Powered DeFi Optimization" />
        <meta name="twitter:description" content="Automate and optimize yield farming with AI on Solana." />
        <meta name="twitter:image" content="https://fixify-public-assets.vercel.app/og-image.jpeg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Fixify" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://fixify.io" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          rel="preload"
          href="https://fixify-public-assets.vercel.app/og-image.jpeg"
          as="image"
        />
        <link
          rel="icon"
          href="https://fixify-public-assets.vercel.app/og-image.jpeg"
          type="image/jpeg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`} style={{ minHeight: "100dvh" }}>
        <main id="app" role="main">{children}</main>
      </body>
    </html>
  );
}
