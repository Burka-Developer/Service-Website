"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { SiTiktok, SiX, SiSnapchat } from "react-icons/si"

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
                    <>الرياض، المملكة العربية السعودية</>
                  ) : (
                    <>Riyadh, Saudi Arabia</>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5" style={{color: colors.iconColor}} />
                <span className="text-sm" style={{color: colors.textSecondary}}>+966554352108</span>
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
              {language === "ar" ? "\u062a\u0627\u0628\u0639\u0646\u0627" : "Follow Us"}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/share/1CJps5icpK/" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/S7Yol?t=iIhlFzrCGWtUxn7VnNDM5A&s=09" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <SiX className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/108.cl?igsh=aXM1b2NiNGE0bmhi" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.snapchat.com/add/est.108?share_id=-2aj4hN-84w&locale=ar-SA" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <SiSnapchat className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@108.cl?_t=ZS-8xh9oCLUBrm&_r=1" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{color: colors.textSecondary}} onMouseOver={(e) => e.currentTarget.style.color = colors.hover} onMouseOut={(e) => e.currentTarget.style.color = colors.textSecondary}>
                <SiTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{borderTop: `1px solid ${colors.borderColor}`}}>
          <p className={`text-sm ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
            © 2025 108 Establishment. All rights are reserved
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button - Kept green for brand recognition */}
      <a
        href="https://wa.me/966554352108"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </footer>
  )
}
