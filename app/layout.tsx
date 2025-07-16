import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Cairo, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/contexts/language-context"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "108 Establishment - خدمات 108",
  description:
    "Your One-Stop Solution for Home & Tech Services - حلولك الشاملة للخدمات المنزلية والتقنية في السعودية",
  keywords:
    "services, maintenance, construction, IT, Saudi Arabia, خدمات, صيانة, إنشاءات, تقنية المعلومات, السعودية",
  authors: [{ name: "108 Establishment" }],
  openGraph: {
    title: "108 Establishment - خدمات 108",
    description: "Professional services in Saudia Arabia - خدمات احترافية في السعودية",
    url: "https://108.cl",
    siteName: "108 Establishment",
    locale: "ar_SA",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${cairo.variable} ${poppins.variable} font-sans antialiased bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
