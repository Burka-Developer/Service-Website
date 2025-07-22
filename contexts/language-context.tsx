"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "أعمالنا",
    "nav.request": "طلب خدمة",
    "nav.contact": "اتصل بنا",
    "nav.language": "English",

    // Home Page
    "home.hero.title": "حلولك الشاملة للخدمات المنزلية والتقنية في الرياض",
    "home.hero.subtitle": "نقدم خدمات احترافية في النجارة، السباكة، الكهرباء، التكييف، تطوير المواقع والتطبيقات وأكثر",
    "home.hero.cta1": "عرض الخدمات",
    "home.hero.cta2": "طلب خدمة",
    "home.services.title": "خدماتنا المميزة",
    "home.services.subtitle": "نقدم مجموعة شاملة من الخدمات المهنية",
    "home.quote.title": "احصل على عرض سعر مجاني اليوم",
    "home.quote.subtitle": "تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك",
    "home.quote.cta": "طلب عرض سعر",

    // Services
    "services.carpentry": "النجارة",
    "services.aluminum": "أعمال الألمنيوم",
    "services.welding": "اللحام",
    "services.electrical": "الأعمال الكهربائية",
    "services.generator": "صيانة المولدات",
    "services.ac": "التكييف",
    "services.painting": "الدهان",
    "services.upholstery": "التنجيد",
    "services.plumbing": "السباكة",
    "services.autocad": "تصميم الأوتوكاد",
    "services.web": "تطوير المواقع",
    "services.app": "تطوير التطبيقات",

    // Common
    "common.request": "طلب هذه الخدمة",
    "common.contact": "اتصل بنا",
    "common.submit": "إرسال",
    "common.name": "الاسم",
    "common.email": "البريد الإلكتروني",
    "common.phone": "رقم الهاتف",
    "common.address": "العنوان",
    "common.message": "الرسالة",
    "common.loading": "جاري التحميل...",
    "common.success": "تم بنجاح",
    "common.error": "حدث خطأ",

    // Footer
    "footer.company": "شركة 108 للخدمات",
    "footer.description": "نقدم خدمات احترافية متنوعة في الرياض",
    "footer.address": "العنوان",
    "footer.quick_links": "روابط سريعة",
    "footer.rights": "جميع الحقوق محفوظة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.request": "Request Service",
    "nav.contact": "Contact",
    "nav.language": "العربية",

    // Home Page
    "home.hero.title": "Your One-Stop Solution for Home & Tech Services in Saudia Arabia",
    "home.hero.subtitle":
      "Professional services in carpentry, plumbing, electrical, AC, web development, app development and more",
    "home.hero.cta1": "View Services",
    "home.hero.cta2": "Request Service",
    "home.services.title": "Our Featured Services",
    "home.services.subtitle": "We provide a comprehensive range of professional services",
    "home.quote.title": "Get a Free Quote Today",
    "home.quote.subtitle": "Contact us for a free consultation and customized quote for your needs",
    "home.quote.cta": "Request Quote",

    // Services
    "services.carpentry": "Carpentry",
    "services.aluminum": "Aluminum Work",
    "services.welding": "Welding",
    "services.electrical": "Electrical Work",
    "services.generator": "Generator Repair",
    "services.ac": "Air Conditioning",
    "services.painting": "Painting",
    "services.upholstery": "Upholstery",
    "services.plumbing": "Plumbing",
    "services.autocad": "AutoCAD Design",
    "services.web": "Web Development",
    "services.app": "App Development",

    // Common
    "common.request": "Request This Service",
    "common.contact": "Contact Us",
    "common.submit": "Submit",
    "common.name": "Name",
    "common.email": "Email",
    "common.phone": "Phone",
    "common.address": "Address",
    "common.message": "Message",
    "common.loading": "Loading...",
    "common.success": "Success",
    "common.error": "Error occurred",

    // Footer
    "footer.company": "108 Establishment",
    "footer.description": "We provide diverse professional services in Saudia Arabia",
    "footer.address": "Address",
    "footer.quick_links": "Quick Links",
    "footer.rights": "All rights reserved",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Set document direction and language
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
