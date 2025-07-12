"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

// --- Professional Color Palette ---
// Using the same palette as the homepage ensures brand consistency.
const colors = {
  background: "#A31621", // Deep Red (Madder) for the footer background
  textPrimary: "#FCF7F8", // Off-white (Snow) for primary text for high contrast
  textSecondary: "#FCF7F8b3", // Off-white with transparency for subtitles
  iconColor: "#FCF7F8",
  borderColor: "#FCF7F833", // Subtle border with transparency
  hover: "#FCF7F8cc", // Slightly more transparent for hover
};

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
    <footer style={{ backgroundColor: colors.background, color: colors.textPrimary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg" style={{color: colors.background}}>108</span>
              </div>
              <span className={`font-bold text-xl ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textPrimary}}>
                {t("footer.company")}
              </span>
            </div>
            <p className={`mb-6 ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
              {t("footer.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{color: colors.iconColor}} />
                <div className={`text-sm ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
                  {language === "ar" ? (
                    <>
                      العنوان المختصر: RRDA4393<br />
                      رقم المبنى: 4393، اسم الشارع: الشريح<br />
                      الرقم الفرعي: 7354، اسم الحي: حي العارض<br />
                      الرمز البريدي: 13335، المدينة: الرياض
                    </>
                  ) : (
                    <>
                      Short Address: RRDA4393<br />
                      Building: 4393, Street: Al Shareeh<br />
                      Unit: 7354, District: Al Arid<br />
                      Postal Code: 13335, City: Riyadh
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5" style={{color: colors.iconColor}} />
                <span className="text-sm" style={{color: colors.textSecondary}}>+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5" style={{color: colors.iconColor}} />
                <span className="text-sm" style={{color: colors.textSecondary}}>info@108.cl</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`font-semibold text-lg mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}
              style={{color: colors.textPrimary}}
            >
              {t("footer.quick_links")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${
                      language === "ar" ? "font-arabic" : "font-english"
                    }`}
                     style={{color: colors.textSecondary}}
                     onMouseOver={(e) => e.currentTarget.style.color = colors.hover}
                     onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}
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
              className={`font-semibold text-lg mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}
              style={{color: colors.textPrimary}}
            >
              {language === "ar" ? "تابعنا" : "Follow Us"}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{borderTop: `1px solid ${colors.borderColor}`}}>
          <p className={`text-sm ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
            © 2024 108 Services. {t("footer.rights")}
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button - Kept green for brand recognition */}
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
