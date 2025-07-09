"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-xl">108</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                {language === "ar" ? "خدمات 108" : "108 Services"}
              </span>
              <span className={`text-xs text-gray-500 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                {language === "ar" ? "حلول شاملة" : "Complete Solutions"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-black font-medium transition-colors relative group ${
                  language === "ar" ? "font-arabic" : "font-english"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </Link>
            ))}

            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse btn-secondary bg-transparent"
            >
              <Globe className="w-4 h-4" />
              <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("nav.language")}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg font-medium transition-colors ${
                    language === "ar" ? "font-arabic" : "font-english"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="mx-4 mt-4 flex items-center space-x-2 rtl:space-x-reverse btn-secondary bg-transparent"
              >
                <Globe className="w-4 h-4" />
                <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("nav.language")}</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
