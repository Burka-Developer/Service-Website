"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Filter, Eye, Download } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: { ar: "تصميم فيلا سكنية", en: "Residential Villa Design" },
    category: "autocad",
    image: "/images/buildings.jpg",
    description: {
      ar: "تصميم معماري كامل لفيلا سكنية بمساحة 400 متر مربع",
      en: "Complete architectural design for a 400 sqm residential villa",
    },
    beforeAfter: false,
    downloadable: true,
  },
  {
    id: 2,
    title: { ar: "صيانة نظام التكييف المركزي", en: "Central AC System Maintenance" },
    category: "ac",
    image: "/images/ac.jpg",
    description: {
      ar: "صيانة شاملة لنظام التكييف المركزي في مجمع تجاري",
      en: "Complete maintenance of central AC system in commercial complex",
    },
    beforeAfter: true,
    downloadable: false,
  },
  {
    id: 3,
    title: { ar: "موقع إلكتروني لشركة تجارية", en: "Commercial Company Website" },
    category: "web",
    image: "/images/webdev.jpg",
    description: {
      ar: "تطوير موقع إلكتروني متجاوب لشركة تجارية مع نظام إدارة المحتوى",
      en: "Responsive website development for commercial company with CMS",
    },
    beforeAfter: false,
    downloadable: false,
  },
  {
    id: 4,
    title: { ar: "أعمال النجارة المخصصة", en: "Custom Carpentry Work" },
    category: "carpentry",
    image: "/images/carpanter.jpg",
    description: {
      ar: "تصنيع وتركيب مكتبة خشبية مخصصة للمنزل",
      en: "Manufacturing and installation of custom wooden library for home",
    },
    beforeAfter: true,
    downloadable: false,
  },
  {
    id: 5,
    title: { ar: "تطبيق جوال للتجارة الإلكترونية", en: "E-commerce Mobile App" },
    category: "app",
    image: "/images/app.jpg",
    description: {
      ar: "تطوير تطبيق جوال للتجارة الإلكترونية مع نظام الدفع المتكامل",
      en: "Mobile e-commerce app development with integrated payment system",
    },
    beforeAfter: false,
    downloadable: false,
  },
  {
    id: 6,
    title: { ar: "أعمال الدهان الخارجي", en: "Exterior Painting Work" },
    category: "painting",
    image: "/images/painting.jpg",
    description: {
      ar: "دهان خارجي كامل لمبنى سكني بألوان عصرية",
      en: "Complete exterior painting of residential building with modern colors",
    },
    beforeAfter: true,
    downloadable: false,
  },
  {
    id: 7,
    title: { ar: "تركيب نظام كهربائي", en: "Electrical System Installation" },
    category: "electrical",
    image: "/images/electrical.jpg",
    description: {
      ar: "تركيب نظام كهربائي كامل لمكتب تجاري",
      en: "Complete electrical system installation for commercial office",
    },
    beforeAfter: true,
    downloadable: false,
  },
  {
    id: 8,
    title: { ar: "مخطط مجمع سكني", en: "Residential Complex Plan" },
    category: "autocad",
    image: "/images/Auto Cad.webp",
    description: {
      ar: "تصميم مخطط شامل لمجمع سكني يحتوي على 20 وحدة",
      en: "Comprehensive plan design for residential complex with 20 units",
    },
    beforeAfter: false,
    downloadable: true,
  },
]

const categories = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "autocad", ar: "أوتوكاد", en: "AutoCAD" },
  { key: "ac", ar: "تكييف", en: "AC" },
  { key: "web", ar: "مواقع", en: "Web" },
  { key: "app", ar: "تطبيقات", en: "Apps" },
  { key: "carpentry", ar: "نجارة", en: "Carpentry" },
  { key: "painting", ar: "دهان", en: "Painting" },
  { key: "electrical", ar: "كهرباء", en: "Electrical" },
]

// --- Professional Color Palette ---
const colors = {
  background: "#FCF7F8", // Off-white (Snow)
  primary: "#A31621", // Deep Red (Madder)
  primaryHover: "#8A121B", // Darker red for hover
  accent: "#FFD700", // Gold accent
  textPrimary: "#1f2937", // A strong, dark gray for main text
  textSecondary: "#4b5563", // A softer gray for subtitles
  white: "#FFFFFF",
};

export default function PortfolioPage() {
  const { language, t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    if (category === "all") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === category))
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="section-padding border-b" style={{backgroundColor: colors.primary}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-white ${language === "ar" ? "font-arabic" : "font-english"}`}>{t("nav.portfolio")}</h1>
          <p className={`text-xl mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: 'rgba(252,247,248,0.85)'}}>
            {language === "ar"
              ? "استعرض مجموعة من أعمالنا المنجزة بنجاح"
              : "Browse through our successfully completed projects"}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className={`font-medium text-gray-700 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                {language === "ar" ? "تصفية حسب:" : "Filter by:"}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category.key)}
                className={`ripple rounded-lg text-base font-semibold ${language === "ar" ? "font-arabic" : "font-english"}`}
                style={selectedCategory === category.key ? {backgroundColor: colors.primary, color: colors.white, borderColor: colors.primary, boxShadow: '0 2px 8px 0 rgba(163,22,33,0.10)'} : {backgroundColor: 'transparent', color: colors.primary, borderColor: colors.primary}}
                onMouseOver={(e) => {
                  if (selectedCategory === category.key) {
                    e.currentTarget.style.backgroundColor = colors.primary;
                    e.currentTarget.style.color = colors.white;
                  } else {
                    e.currentTarget.style.backgroundColor = colors.primaryHover;
                    e.currentTarget.style.color = colors.white;
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = selectedCategory === category.key ? colors.primary : 'transparent';
                  e.currentTarget.style.color = selectedCategory === category.key ? colors.white : colors.primary;
                }}
              >
                {category[language]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <Card key={item.id} className="service-card group cursor-pointer fade-in" style={{animationDelay: `${idx * 80}ms`, backgroundColor: colors.background, borderColor: `${colors.primary}20`, borderRadius: '2rem', boxShadow: '0 6px 32px 0 rgba(163,22,33,0.10)'}}>
                {/* Large Image with Overlay */}
                <div className="relative w-full" style={{height: '260px'}}>
                  <img
                    src={item.image || "/images/house.jpg"}
                    alt={item.title[language]}
                    className="object-cover w-full h-full rounded-t-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    decoding="async"
                    style={{height: '100%', width: '100%'}}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none transition-all duration-500 group-hover:from-black/70 group-hover:via-black/20" />
                  {/* Category Badge Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <Badge style={{backgroundColor: colors.primary, color: colors.white, borderColor: colors.primary}}>{t(`services.${item.category}`)}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3
                    className={`font-bold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                    style={{color: colors.textPrimary}}
                  >
                    {item.title[language]}
                  </h3>
                  <p className={`mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
                    {item.description[language]}
                  </p>
                  <div className="flex">
                    <Link href="/request">
                      <Button 
                        size="lg" 
                        className="w-full btn-primary ripple text-lg py-3 rounded-lg font-semibold"
                        style={{backgroundColor: colors.primary, color: 'white', borderColor: colors.primary}}
                        onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primaryHover; e.currentTarget.style.color = 'white'}} 
                        onMouseOut={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = 'white'}}
                      >
                        {language === "ar" ? "طلب خدمة" : "Request Service"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className={`text-gray-500 text-lg ${language === "ar" ? "font-arabic" : "font-english"}`}>
                {language === "ar" ? "لا توجد مشاريع في هذه الفئة" : "No projects found in this category"}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
