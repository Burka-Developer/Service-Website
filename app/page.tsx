"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  ArrowRight,
  MapPin,
  Star,
  CheckCircle,
  Phone,
  Users,
  Clock,
  Award,
} from "lucide-react"

const services = [
  { icon: Hammer, key: "carpentry", color: "text-gray-700" },
  { icon: Settings, key: "aluminum", color: "text-gray-700" },
  { icon: Zap, key: "welding", color: "text-gray-700" },
  { icon: Zap, key: "electrical", color: "text-gray-700" },
  { icon: Settings, key: "generator", color: "text-gray-700" },
  { icon: Wind, key: "ac", color: "text-gray-700" },
  { icon: Paintbrush, key: "painting", color: "text-gray-700" },
  { icon: Palette, key: "upholstery", color: "text-gray-700" },
  { icon: Droplets, key: "plumbing", color: "text-gray-700" },
  { icon: Monitor, key: "autocad", color: "text-gray-700" },
  { icon: Monitor, key: "web", color: "text-gray-700" },
  { icon: Smartphone, key: "app", color: "text-gray-700" },
]

const features = [
  { icon: CheckCircle, text: { ar: "خدمة 24/7", en: "24/7 Service" } },
  { icon: Star, text: { ar: "جودة مضمونة", en: "Quality Guaranteed" } },
  { icon: Phone, text: { ar: "استجابة سريعة", en: "Quick Response" } },
]

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white relative overflow-hidden">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="fade-in space-y-8">
              <div className="space-y-6">
                <h1
                  className={`text-5xl md:text-7xl font-bold leading-tight text-black ${
                    language === "ar" ? "font-arabic" : "font-english"
                  }`}
                >
                  {t("home.hero.title")}
                </h1>
                <p
                  className={`text-xl text-gray-600 leading-relaxed max-w-lg ${language === "ar" ? "font-arabic" : "font-english"}`}
                >
                  {t("home.hero.subtitle")}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 rtl:space-x-reverse bg-gray-50 rounded-full px-6 py-3 border border-gray-200"
                    >
                      <Icon className="w-5 h-5 text-black" />
                      <span
                        className={`text-sm font-medium text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                      >
                        {feature.text[language]}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                    <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.hero.cta1")}</span>
                    <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                  </Button>
                </Link>
                <Link href="/request">
                  <Button size="lg" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                    <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.hero.cta2")}</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="slide-up">
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center border border-gray-200">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                      <span className="text-white font-bold text-2xl">108</span>
                    </div>
                    <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                      {language === "ar" ? "صورة الخدمات" : "Services Image"}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-black">
                      {language === "ar" ? "متاح الآن" : "Available Now"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16 slide-up">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black mb-6 ${
                language === "ar" ? "font-arabic" : "font-english"
              }`}
            >
              {t("home.services.title")}
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${language === "ar" ? "font-arabic" : "font-english"}`}
            >
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.key}
                  className="service-card group cursor-pointer transform hover:scale-105 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors border border-gray-200">
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3
                      className={`font-bold text-lg text-black mb-2 ${
                        language === "ar" ? "font-arabic" : "font-english"
                      }`}
                    >
                      {t(`services.${service.key}`)}
                    </h3>
                    <div className="w-12 h-1 bg-black rounded-full mx-auto"></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <span className={language === "ar" ? "font-arabic" : "font-english"}>
                  {language === "ar" ? "عرض جميع الخدمات" : "View All Services"}
                </span>
                <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white section-padding border-t border-gray-200">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "500+", label: { ar: "مشروع مكتمل", en: "Projects Completed" } },
              { icon: Star, number: "50+", label: { ar: "عميل راضي", en: "Happy Clients" } },
              { icon: Clock, number: "5+", label: { ar: "سنوات خبرة", en: "Years Experience" } },
              { icon: Award, number: "24/7", label: { ar: "دعم متواصل", en: "Support Available" } },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto border border-gray-200">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-black">{stat.number}</div>
                  <div className={`text-lg text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {stat.label[language]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-max">
          <div className="card-white text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <h2
                className={`text-3xl md:text-4xl font-bold text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
              >
                {t("home.quote.title")}
              </h2>
              <p
                className={`text-xl text-gray-600 max-w-2xl mx-auto ${language === "ar" ? "font-arabic" : "font-english"}`}
              >
                {t("home.quote.subtitle")}
              </p>
              <Link href="/request">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.quote.cta")}</span>
                  <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white section-padding border-t border-gray-200">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-black mb-4 ${
                language === "ar" ? "font-arabic" : "font-english"
              }`}
            >
              {language === "ar" ? "موقعنا في الرياض" : "Our Location in Riyadh"}
            </h2>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-gray-600">
              <MapPin className="w-5 h-5 text-black" />
              <span className={language === "ar" ? "font-arabic" : "font-english"}>
                {language === "ar" ? "حي العارض، الرياض" : "Al Arid District, Riyadh"}
              </span>
            </div>
          </div>

          <div className="card-white">
            <div className="bg-gray-50 h-96 flex items-center justify-center rounded-lg border border-gray-200">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <p className={`text-gray-700 text-lg ${language === "ar" ? "font-arabic" : "font-english"}`}>
                  {language === "ar" ? "خريطة جوجل التفاعلية" : "Interactive Google Map"}
                </p>
                <p className={`text-gray-500 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                  {language === "ar" ? "ستظهر هنا عند التطبيق" : "Will be integrated in production"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
