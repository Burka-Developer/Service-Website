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
  title: "108 Services - خدمات 108",
  description:
    "Your One-Stop Solution for Home & Tech Services - حلولك الشاملة للخدمات المنزلية والتقنية في الرياض",
  keywords:
    "services, maintenance, construction, IT, Riyadh, Saudi Arabia, خدمات, صيانة, إنشاءات, تقنية المعلومات, الرياض",
  authors: [{ name: "108 Services" }],
  openGraph: {
    title: "108 Services - خدمات 108",
    description: "Professional services in Riyadh - خدمات احترافية في الرياض",
    url: "https://108.cl",
    siteName: "108 Services",
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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
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
