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
// Top part remains unchanged...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fixify - AI-Powered DeFi Optimization" />
        <meta name="twitter:description" content="Automate and optimize yield farming with AI on Solana." />
        <meta name="twitter:image" content="https://fixify-public-assets.vercel.app/og-image.jpeg" />
        <link rel="canonical" href="https://fixify.io" />
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
      </head>
      // Everything above stays the same...
      <body className={`${inter.className} antialiased`} style={{ minHeight: "100dvh" }}>
        <div role="main">{children}</div>
      </body>
    </html>
  );
}

