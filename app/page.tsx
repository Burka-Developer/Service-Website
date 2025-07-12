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

// --- Professional Color Palette ---
// Defining colors here makes the component easier to theme and maintain.
const colors = {
  background: "#FCF7F8", // Off-white (Snow)
  primary: "#A31621", // Deep Red (Madder)
  primaryHover: "#8A121B", // Darker red for hover
  textPrimary: "#1f2937", // A strong, dark gray for main text
  textSecondary: "#4b5563", // A softer gray for subtitles
  white: "#FFFFFF",
};

const services = [
  { icon: Hammer, key: "carpentry" },
  { icon: Settings, key: "aluminum" },
  { icon: Zap, key: "welding" },
  { icon: Zap, key: "electrical" },
  { icon: Settings, key: "generator" },
  { icon: Wind, key: "ac" },
  { icon: Paintbrush, key: "painting" },
  { icon: Palette, key: "upholstery" },
  { icon: Droplets, key: "plumbing" },
  { icon: Monitor, key: "autocad" },
  { icon: Monitor, key: "web" },
  { icon: Smartphone, key: "app" },
]

const features = [
  { icon: CheckCircle, text: { ar: "خدمة 24/7", en: "24/7 Service" } },
  { icon: Star, text: { ar: "جودة مضمونة", en: "Quality Guaranteed" } },
  { icon: Phone, text: { ar: "استجابة سريعة", en: "Quick Response" } },
]

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: colors.background }}>
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="fade-in space-y-8">
              <div className="space-y-6">
                <h1
                  className={`text-5xl md:text-7xl font-bold leading-tight ${
                    language === "ar" ? "font-arabic" : "font-english"
                  }`}
                  style={{ color: colors.primary }}
                >
                  {t("home.hero.title")}
                </h1>
                <p
                  className={`text-xl leading-relaxed max-w-lg ${language === "ar" ? "font-arabic" : "font-english"}`}
                   style={{ color: colors.textSecondary }}
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
                      className="flex items-center space-x-3 rtl:space-x-reverse bg-white/60 rounded-full px-6 py-3 border"
                      style={{ borderColor: `${colors.primary}20`}}
                    >
                      <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                      <span
                        className={`text-sm font-medium ${language === "ar" ? "font-arabic" : "font-english"}`}
                        style={{ color: colors.primary }}
                      >
                        {feature.text[language]}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 text-white hover:text-white" style={{backgroundColor: colors.primary, color: colors.white}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primaryHover} onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.primary}>
                    <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.hero.cta1")}</span>
                    <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                  </Button>
                </Link>
                <Link href="/request">
                   <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent border hover:bg-transparent" style={{color: colors.primary, borderColor: colors.primary}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = colors.white}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.primary}}>
                    <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.hero.cta2")}</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="slide-up">
              <div className="relative">
                <div className="bg-white rounded-2xl h-96 flex items-center justify-center border" style={{borderColor: `${colors.primary}20`}}>
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: colors.primary}}>
                      <span className="text-white font-bold text-2xl">108</span>
                    </div>
                    <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
                      {language === "ar" ? "صورة الخدمات" : "Services Image"}
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border" style={{borderColor: `${colors.primary}20`}}>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: colors.primary}}></div>
                    <span className="text-sm font-medium" style={{color: colors.textPrimary}}>
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
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16 slide-up">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                language === "ar" ? "font-arabic" : "font-english"
              }`}
               style={{ color: colors.primary }}
            >
              {t("home.services.title")}
            </h2>
            <p
              className={`text-xl max-w-3xl mx-auto ${language === "ar" ? "font-arabic" : "font-english"}`}
               style={{ color: colors.textSecondary }}
            >
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.key}
                  className="service-card group cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-xl border"
                  style={{ backgroundColor: colors.background, borderColor: `${colors.primary}20` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-50 transition-colors border" style={{borderColor: `${colors.primary}20`}}>
                      <Icon className="w-8 h-8" style={{color: colors.primary}} />
                    </div>
                    <h3
                      className={`font-bold text-lg mb-2 ${
                        language === "ar" ? "font-arabic" : "font-english"
                      }`}
                       style={{ color: colors.textPrimary }}
                    >
                      {t(`services.${service.key}`)}
                    </h3>
                    <div className="w-12 h-1 rounded-full mx-auto" style={{backgroundColor: colors.primary}}></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button size="lg" className="text-lg px-8 py-4 text-white hover:text-white" style={{backgroundColor: colors.primary, color: colors.white}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = colors.primaryHover} onMouseOut={(e) => e.currentTarget.style.backgroundColor = colors.primary}>
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
      <section className="section-padding border-t" style={{backgroundColor: colors.background, borderColor: `${colors.primary}20`}}>
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
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto border" style={{borderColor: `${colors.primary}20`}}>
                    <Icon className="w-8 h-8" style={{color: colors.primary}} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold" style={{color: colors.primary}}>{stat.number}</div>
                  <div className={`text-lg ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
                    {stat.label[language]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{backgroundColor: colors.primary}}>
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <h2
                className={`text-3xl md:text-4xl font-bold ${language === "ar" ? "font-arabic" : "font-english"}`}
                style={{color: colors.white}}
              >
                {t("home.quote.title")}
              </h2>
              <p
                className={`text-xl max-w-2xl mx-auto ${language === "ar" ? "font-arabic" : "font-english"}`}
                style={{color: `${colors.background}99`}} // White with some transparency
              >
                {t("home.quote.subtitle")}
              </p>
              <Link href="/request">
                <Button size="lg" className="text-lg px-8 py-4" style={{backgroundColor: colors.white, color: colors.primary}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.background; e.currentTarget.style.opacity = '0.9'}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = colors.white; e.currentTarget.style.opacity = '1'}}>
                  <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("home.quote.cta")}</span>
                  <ArrowRight className={`w-5 h-5 ${language === "ar" ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white section-padding border-t" style={{borderColor: `${colors.primary}20`}}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                language === "ar" ? "font-arabic" : "font-english"
              }`}
               style={{ color: colors.primary }}
            >
              {language === "ar" ? "موقعنا في الرياض" : "Our Location in Riyadh"}
            </h2>
            <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse" style={{color: colors.textSecondary}}>
              <MapPin className="w-5 h-5" style={{color: colors.primary}} />
              <span className={language === "ar" ? "font-arabic" : "font-english"}>
                {language === "ar" ? "حي العارض، الرياض" : "Al Arid District, Riyadh"}
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border" style={{borderColor: `${colors.primary}20`}}>
            <div className="h-96 flex items-center justify-center rounded-lg border" style={{backgroundColor: colors.background, borderColor: `${colors.primary}20`}}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: colors.primary}}>
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <p className={`text-lg ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textPrimary}}>
                  {language === "ar" ? "خريطة جوجل التفاعلية" : "Interactive Google Map"}
                </p>
                <p className={`${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.textSecondary}}>
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
