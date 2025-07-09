"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { Filter, Eye, Download } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: { ar: "تصميم فيلا سكنية", en: "Residential Villa Design" },
    category: "autocad",
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
      <section className="bg-gradient-to-r from-[#004AAD] to-[#00C2A8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}>
            {t("nav.portfolio")}
          </h1>
          <p className={`text-xl text-blue-100 ${language === "ar" ? "font-arabic" : "font-english"}`}>
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
                className={`${selectedCategory === category.key ? "bg-[#004AAD] hover:bg-[#003a8c]" : ""} ${
                  language === "ar" ? "font-arabic" : "font-english"
                }`}
              >
                {category[language]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="service-card overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title[language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#004AAD] text-white">{t(`services.${item.category}`)}</Badge>
                  </div>
                  {item.beforeAfter && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {language === "ar" ? "قبل وبعد" : "Before/After"}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3
                    className={`font-bold text-lg mb-2 text-gray-900 ${language === "ar" ? "font-arabic" : "font-english"}`}
                  >
                    {item.title[language]}
                  </h3>
                  <p className={`text-gray-600 mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {item.description[language]}
                  </p>

                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className={language === "ar" ? "font-arabic" : "font-english"}>
                        {language === "ar" ? "عرض" : "View"}
                      </span>
                    </Button>

                    {item.downloadable && (
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        <span className={language === "ar" ? "font-arabic" : "font-english"}>
                          {language === "ar" ? "تحميل" : "Download"}
                        </span>
                      </Button>
                    )}
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
