import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VIGLO",
  description: "AI-Powered Fraud Detection on Solana",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'