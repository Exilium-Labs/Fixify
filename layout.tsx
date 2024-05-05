import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VIGLO",
  description: "AI-Powered Fraud Detection on Solana",
  generator: "v0.dev",
  applicationName: "VIGLO",
  keywords: ["AI", "Fraud Detection", "Solana", "Blockchain", "Security"],
  authors: [{ name: "VIGLO Team", url: "https://viglo.com" }],
  creator: "VIGLO",
  themeColor: "#000000",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "VIGLO - AI-Powered Fraud Detection",
    description: "Protect your assets with AI-driven fraud detection on Solana.",
    url: "https://viglo.com",
    siteName: "VIGLO",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_f3n-YsTm_1736231910487_raw.jpg-C8QuPQsopNG8KeRVHe1HzUk8ULBAh2.jpeg",
        width: 1200,
        height: 630,
        alt: "VIGLO Fraud Detection",
      },
    ],
  },
};

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
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_f3n-YsTm_1736231910487_raw.jpg-C8QuPQsopNG8KeRVHe1HzUk8ULBAh2.jpeg"
          as="image"
        />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openart-image_f3n-YsTm_1736231910487_raw.jpg-C8QuPQsopNG8KeRVHe1HzUk8ULBAh2.jpeg"
          type="image/jpeg"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
