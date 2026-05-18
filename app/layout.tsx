import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "YouAreProfound — A Meaning Operating System",
  description:
    "Turn timeless wisdom into clarity, peace, and direction you can actually live. Guided wisdom paths, daily mantras, and a reflective Profound Mirror.",
  keywords: [
    "meaning",
    "wisdom",
    "philosophy",
    "reflection",
    "mantras",
    "self understanding",
    "inner peace",
    "purpose",
    "AI reflection",
  ],
  authors: [{ name: "YouAreProfound" }],
  openGraph: {
    title: "YouAreProfound — A Meaning Operating System",
    description:
      "Turn timeless wisdom into clarity, peace, and direction you can actually live.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouAreProfound",
    description: "A meaning operating system for modern life.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  )
}
