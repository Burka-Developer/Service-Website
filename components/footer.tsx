"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language, t } = useLanguage()

  const quickLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/request", label: t("nav.request") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">108</span>
              </div>
              <span className={`font-bold text-xl text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                {t("footer.company")}
              </span>
            </div>
            <p className={`text-gray-600 mb-6 ${language === "ar" ? "font-arabic" : "font-english"}`}>
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-black mt-1 flex-shrink-0" />
                <div className={`text-sm text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                  {language === "ar" ? (
                    <>
                      العنوان المختصر: RRDA4393
                      <br />
                      رقم المبنى: 4393، اسم الشارع: الشريح
                      <br />
                      الرقم الفرعي: 7354، اسم الحي: حي العارض
                      <br />
                      الرمز البريدي: 13335، المدينة: الرياض
                    </>
                  ) : (
                    <>
                      Short Address: RRDA4393
                      <br />
                      Building: 4393, Street: Al Shareeh
                      <br />
                      Unit: 7354, District: Al Arid
                      <br />
                      Postal Code: 13335, City: Riyadh
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-black" />
                <span className="text-sm text-gray-600">+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-black" />
                <span className="text-sm text-gray-600">info@108.cl</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`font-semibold text-lg mb-4 text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
            >
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-gray-600 hover:text-black transition-colors ${
                      language === "ar" ? "font-arabic" : "font-english"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3
              className={`font-semibold text-lg mb-4 text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
            >
              {language === "ar" ? "تابعنا" : "Follow Us"}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className={`text-gray-500 text-sm ${language === "ar" ? "font-arabic" : "font-english"}`}>
            © 2024 108 Services. {t("footer.rights")}
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/966XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  )
}
