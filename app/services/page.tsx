"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import {
  Hammer,
  Zap,
  Wind,
  Paintbrush,
  Droplets,
  Monitor,
  Smartphone,
  Settings,
  Palette,
  Clock,
  DollarSign,
} from "lucide-react"

const servicesData = [
  {
    key: "carpentry",
    icon: Hammer,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    description: {
      ar: "خدمات النجارة المتخصصة تشمل تصنيع وتركيب الأثاث المخصص، الأبواب، النوافذ، والديكورات الخشبية",
      en: "Specialized carpentry services including custom furniture manufacturing, doors, windows, and wooden decorations",
    },
    duration: { ar: "1-3 أيام", en: "1-3 days" },
    price: { ar: "500-2000 ريال", en: "500-2000 SAR" },
  },
  {
    key: "aluminum",
    icon: Settings,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    description: {
      ar: "تصنيع وتركيب أعمال الألمنيوم للنوافذ، الأبواب، الواجهات، والهياكل المعدنية",
      en: "Manufacturing and installation of aluminum work for windows, doors, facades, and metal structures",
    },
    duration: { ar: "2-5 أيام", en: "2-5 days" },
    price: { ar: "800-3000 ريال", en: "800-3000 SAR" },
  },
  {
    key: "welding",
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: {
      ar: "خدمات اللحام المتخصصة للمعادن والهياكل الحديدية مع ضمان الجودة والمتانة",
      en: "Specialized welding services for metals and iron structures with quality and durability guarantee",
    },
    duration: { ar: "1-2 أيام", en: "1-2 days" },
    price: { ar: "300-1500 ريال", en: "300-1500 SAR" },
  },
  {
    key: "electrical",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    description: {
      ar: "تركيب وصيانة الأنظمة الكهربائية، الإضاءة، والتوصيلات الكهربائية بمعايير السلامة",
      en: "Installation and maintenance of electrical systems, lighting, and electrical connections with safety standards",
    },
    duration: { ar: "4-8 ساعات", en: "4-8 hours" },
    price: { ar: "200-1000 ريال", en: "200-1000 SAR" },
  },
  {
    key: "generator",
    icon: Settings,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: {
      ar: "صيانة وإصلاح مولدات الديزل والكهرباء مع قطع الغيار الأصلية",
      en: "Maintenance and repair of diesel and electric generators with original spare parts",
    },
    duration: { ar: "2-4 ساعات", en: "2-4 hours" },
    price: { ar: "400-1200 ريال", en: "400-1200 SAR" },
  },
  {
    key: "ac",
    icon: Wind,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: {
      ar: "تركيب وصيانة وإصلاح أنظمة التكييف المركزي والمنفصل مع الضمان",
      en: "Installation, maintenance and repair of central and split air conditioning systems with warranty",
    },
    duration: { ar: "2-6 ساعات", en: "2-6 hours" },
    price: { ar: "300-2000 ريال", en: "300-2000 SAR" },
  },
  {
    key: "painting",
    icon: Paintbrush,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: {
      ar: "خدمات الدهان الداخلي والخارجي بأفضل أنواع الدهانات والألوان",
      en: "Interior and exterior painting services with the best types of paints and colors",
    },
    duration: { ar: "1-3 أيام", en: "1-3 days" },
    price: { ar: "600-2500 ريال", en: "600-2500 SAR" },
  },
  {
    key: "upholstery",
    icon: Palette,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    description: {
      ar: "تنجيد وتجديد الأثاث والمقاعد بأجود الخامات والتصاميم العصرية",
      en: "Upholstery and furniture renovation with the finest materials and modern designs",
    },
    duration: { ar: "2-5 أيام", en: "2-5 days" },
    price: { ar: "400-1800 ريال", en: "400-1800 SAR" },
  },
  {
    key: "plumbing",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: {
      ar: "خدمات السباكة الشاملة تشمل التركيب والصيانة وإصلاح التسريبات",
      en: "Comprehensive plumbing services including installation, maintenance and leak repair",
    },
    duration: { ar: "2-4 ساعات", en: "2-4 hours" },
    price: { ar: "200-800 ريال", en: "200-800 SAR" },
  },
  {
    key: "autocad",
    icon: Monitor,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: {
      ar: "تصميم المخططات الهندسية والمعمارية باستخدام برنامج الأوتوكاد",
      en: "Engineering and architectural drawings design using AutoCAD software",
    },
    duration: { ar: "1-7 أيام", en: "1-7 days" },
    price: { ar: "500-3000 ريال", en: "500-3000 SAR" },
  },
  {
    key: "web",
    icon: Monitor,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    description: {
      ar: "تطوير المواقع الإلكترونية الحديثة والمتجاوبة مع جميع الأجهزة",
      en: "Development of modern and responsive websites compatible with all devices",
    },
    duration: { ar: "1-4 أسابيع", en: "1-4 weeks" },
    price: { ar: "2000-15000 ريال", en: "2000-15000 SAR" },
  },
  {
    key: "app",
    icon: Smartphone,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    description: {
      ar: "تطوير تطبيقات الهواتف الذكية وتحسين محركات البحث SEO",
      en: "Mobile app development and Search Engine Optimization (SEO)",
    },
    duration: { ar: "2-8 أسابيع", en: "2-8 weeks" },
    price: { ar: "5000-25000 ريال", en: "5000-25000 SAR" },
  },
]

export default function ServicesPage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#004AAD] to-[#00C2A8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}>
            {t("nav.services")}
          </h1>
          <p className={`text-xl text-blue-100 ${language === "ar" ? "font-arabic" : "font-english"}`}>
            {language === "ar"
              ? "نقدم مجموعة شاملة من الخدمات المهنية عالية الجودة"
              : "We provide a comprehensive range of high-quality professional services"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.key} className="service-card hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className={`text-xl ${language === "ar" ? "font-arabic" : "font-english"}`}>
                      {t(`services.${service.key}`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-gray-600 mb-4 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                      {service.description[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Clock className="w-3 h-3" />
                        <span className={language === "ar" ? "font-arabic" : "font-english"}>
                          {service.duration[language]}
                        </span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center space-x-1 rtl:space-x-reverse">
                        <DollarSign className="w-3 h-3" />
                        <span className={language === "ar" ? "font-arabic" : "font-english"}>
                          {service.price[language]}
                        </span>
                      </Badge>
                    </div>

                    <Link href={`/request?service=${service.key}`}>
                      <Button className="w-full btn-primary">{t("common.request")}</Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
