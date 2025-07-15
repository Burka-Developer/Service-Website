"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { SiTiktok, SiX, SiSnapchat } from "react-icons/si"

// --- Professional Color Palette ---
// Centralizing the color palette for brand consistency and easy maintenance.
const colors = {
  background: "#FCF7F8", // Off-white (Snow)
  primary: "#A31621", // Deep Red (Madder)
  textPrimary: "#1f2937", // A strong, dark gray for main text
  textSecondary: "#4b5563", // A softer gray for subtitles
  borderColor: "#0000001a", // Subtle black border with transparency
};


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/request", label: t("nav.request") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <nav className="shadow-sm sticky top-0 z-50" style={{backgroundColor: colors.background, borderBottom: `1px solid ${colors.borderColor}`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow bg-white">
              <Image src="/logo.png" alt="108 Home Maintenance Logo" width={48} height={48} className="rounded-xl" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.primary}}>
                {language === "ar" ? "\u062e\u062f\u0645\u0627\u062a 108" : "108 Services"}
              </span>
              <span className={`text-xs ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
                {language === "ar" ? "\u062d\u0644\u0648\u0644 \u0634\u0627\u0645\u0644\u0629" : "Complete Solutions"}
              </span>
            </div>
          </Link>

          {/* Social & WhatsApp */}
          {/* No WhatsApp or social buttons as per user request */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium nav-underline transition-colors relative group ${language === "ar" ? "font-arabic" : "font-english"}`}
                style={{color: colors.textPrimary}}
                onMouseOver={(e) => e.currentTarget.style.color = colors.primary}
                onMouseOut={(e) => e.currentTarget.style.color = colors.textPrimary}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse bg-transparent border hover:bg-transparent"
              style={{color: colors.primary, borderColor: colors.primary}}
              onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = 'white'}}
              onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.primary}}
            >
              <Globe className="w-4 h-4" />
              <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("nav.language")}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2" style={{color: colors.primary}}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" style={{borderTop: `1px solid ${colors.borderColor}`}}>
            <div className="px-2 pt-4 pb-6 space-y-2" style={{backgroundColor: colors.background}}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    language === "ar" ? "font-arabic" : "font-english"
                  }`}
                  style={{color: colors.textPrimary}}
                  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = `${colors.primary}10`; e.currentTarget.style.color = colors.primary}}
                  onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.textPrimary}}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-2 rtl:space-x-reverse bg-transparent border hover:bg-transparent"
                  style={{color: colors.primary, borderColor: colors.primary}}
                  onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = 'white'}}
                  onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.primary}}
                >
                  <Globe className="w-4 h-4" />
                  <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("nav.language")}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
