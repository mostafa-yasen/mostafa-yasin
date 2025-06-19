import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { siteConfig, personalData } from "@/lib/data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${personalData.name} - ${personalData.title}`,
    template: `%s | ${personalData.name}`,
  },
  description: siteConfig.description,
  keywords: ["resume", "portfolio", "full-stack developer", "web developer", "software engineer", personalData.name],
  authors: [{ name: personalData.name, url: siteConfig.url }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: `@${personalData.name.replace(/\s+/g, "").toLowerCase()}`, // Placeholder, replace with actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico", // Add your favicon
    shortcut: "/favicon-16x16.png", // Add your favicon
    apple: "/apple-touch-icon.png", // Add your favicon
  },
  manifest: `${siteConfig.url}/site.webmanifest`, // Add your manifest file
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 md:pt-20">
              {" "}
              {/* Adjusted padding for navbar height */}
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
