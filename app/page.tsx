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
  { icon: Star, text: { ar: "جودة مضمونة", en: "Quality Guaranteed" } },
  { icon: Phone, text: { ar: "استجابة سريعة", en: "Quick Response" } },
]

const serviceImages = [
  "/images/Carpentery.jpg", // carpentry
  "/images/Aluminum Work.jpg", // aluminum
  "/images/Wielding Work.jpg", // welding
  "/images/electrical Work.jpg", // electrical
  "/images/Diesel Engine.jpg", // generator
  "/images/ac.jpg", // ac
  "/images/painting.jpg", // painting
  "/images/imges work.webp", // upholstery (best match)
  "/images/Plumbling.png", // plumbing
  "/images/Auto Cad.webp", // autocad
  "/images/Web Development.jpg", // web
  "/images/App Development.jpg", // app
];

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background, scrollBehavior: 'smooth' }}>
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
                  {/* Remove 'in Riyadh' from the English translation */}
                  {language === "ar"
                    ? t("home.hero.title")
                    : "Your One-Stop Solution for Home & Tech Services"}
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
            {/* Add a hero image for visual appeal */}
            <div className="slide-up flex items-center justify-center">
              <img
                src="/placeholder.jpg"
                alt="Service Hero"
                className="rounded-2xl shadow-lg object-cover h-96 w-full max-w-lg border border-[color:var(--primary)]"
                style={{ background: '#eee' }}
              />
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
            {services.map((service, idx) => {
              const Icon = service.icon
              // Assign a random image for each card (cycled if more cards than images)
              const imageSrc = serviceImages[idx % serviceImages.length];
              return (
                <Card
                  key={service.key}
                  className="service-card group cursor-pointer fade-in transform transition-transform duration-300 hover:scale-[1.04] hover:shadow-2xl border overflow-hidden max-w-md mx-auto bg-white/90 backdrop-blur-md"
                  style={{borderRadius: '2rem', boxShadow: '0 6px 32px 0 rgba(163,22,33,0.10)'}}
                >
                  <CardContent className="p-0 text-center">
                    <div className="relative w-full aspect-[5/3] rounded-t-2xl overflow-hidden border-b border-[color:var(--primary)] bg-[#fafafa] group-hover:shadow-xl transition-all duration-500">
                      <img
                        src={imageSrc}
                        alt={t(`services.${service.key}`)}
                        className="object-cover w-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                        style={{ height: 'calc(100% + 10px)' }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                    </div>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto -mt-10 mb-2 border transition-all duration-300 z-10 relative shadow-lg group-hover:scale-105" style={{borderColor: colors.primary}}>
                      <Icon className="w-10 h-10 transition-colors duration-300" style={{color: colors.primary}} />
                    </div>
                    <h3
                      className={`font-bold text-2xl mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Remove 24/7 stat and rebalance grid to 3 columns */}
            {[
              { icon: Users, number: "500+", label: { ar: "مشروع مكتمل", en: "Projects Completed" } },
              { icon: Star, number: "50+", label: { ar: "عميل راضي", en: "Happy Clients" } },
              { icon: Clock, number: "5+", label: { ar: "سنوات خبرة", en: "Years Experience" } },
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
            <div className="h-96 flex items-center justify-center rounded-lg border overflow-hidden" style={{backgroundColor: colors.background, borderColor: `${colors.primary}20`}}>
                <iframe
                  title="Riyadh Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  style={{ border: 0, borderRadius: 12 }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=46.6753%2C24.6212%2C46.8253%2C24.8212&amp;layer=mapnik&amp;marker=24.7136%2C46.6753"
                ></iframe>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
