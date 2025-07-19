"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail, Clock, MessageCircle, Loader2 } from "lucide-react"

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

export default function ContactPage() {
  const { language, t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: language === "ar" ? "تم الإرسال بنجاح" : "Message Sent Successfully",
          description:
            language === "ar"
              ? "شكراً لتواصلك معنا، سنرد عليك قريباً"
              : "Thank you for contacting us, we will reply soon",
        })

        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: language === "ar" ? "خطأ" : "Error",
        description: language === "ar" ? "حدث خطأ، يرجى المحاولة مرة أخرى" : "An error occurred, please try again",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="section-padding border-b" style={{backgroundColor: colors.primary}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-white ${language === "ar" ? "font-arabic" : "font-english"}`}>{t("nav.contact")}</h1>
          <p className={`text-xl mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: 'rgba(252,247,248,0.85)'}}>
            {language === "ar"
              ? "نحن هنا لمساعدتك، تواصل معنا في أي وقت"
              : "We are here to help you, contact us anytime"}
          </p>
        </div>
      </section>

      <section className="section-padding fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h2
                className={`text-3xl font-bold mb-8 ${language === "ar" ? "font-arabic" : "font-english"}`}
                style={{color: colors.primary}}
              >
                {language === "ar" ? "معلومات التواصل" : "Contact Information"}
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colors.primary}}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                      style={{color: colors.primary}}
                    >
                      {t("footer.address")}
                    </h3>
                    <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
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
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colors.primaryHover}}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                      style={{color: colors.primary}}
                    >
                      {language === "ar" ? "الهاتف" : "Phone"}
                    </h3>
                    <p className="text-gray-600">+966 53 530 2532</p>
                    <p className="text-gray-600">+966 53 530 2532</p>
                    <p className="text-gray-600 font-semibold mt-2">WhatsApp: +966 53 530 2532</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colors.primaryHover}}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                      style={{color: colors.primary}}
                    >
                      {language === "ar" ? "البريد الإلكتروني" : "Email"}
                    </h3>
                    <p className="text-gray-600">info@108.cl</p>
                    <p className="text-gray-600">support@108.cl</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colors.primaryHover}}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                      style={{color: colors.primary}}
                    >
                      {language === "ar" ? "ساعات العمل" : "Working Hours"}
                    </h3>
                    <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                      {language === "ar" ? "السبت - الخميس: 8:00 ص - 6:00 م" : "Saturday - Thursday: 8:00 AM - 6:00 PM"}
                    </p>
                    <p className={`text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                      {language === "ar" ? "الجمعة: مغلق" : "Friday: Closed"}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{backgroundColor: colors.primaryHover}}>
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${language === "ar" ? "font-arabic" : "font-english"}`}
                      style={{color: colors.primary}}
                    >
                      {language === "ar" ? "واتساب" : "WhatsApp"}
                    </h3>
                    <a
                      href="https://wa.me/+966535302532"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      +966 53 530 2532
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <Card className="card-white shadow-lg fade-in" style={{backgroundColor: colors.background, borderColor: `${colors.primary}20`}}>
                <CardHeader>
                  <CardTitle className={`text-2xl ${language === "ar" ? "font-arabic" : "font-english"}`} style={{color: colors.primary}}>
                    {language === "ar" ? "أرسل لنا رسالة" : "Send us a Message"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                      >
                        {t("common.name")} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`input-field ${language === "ar" ? "font-arabic" : "font-english"}`}
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                      >
                        {t("common.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                      >
                        {t("common.message")} *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                        className={`input-field ${language === "ar" ? "font-arabic" : "font-english"}`}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary ripple text-lg py-4 rounded-lg font-semibold" style={{backgroundColor: 'var(--primary)', color: 'white', borderColor: 'var(--primary)'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'var(--primary-hover)'; e.currentTarget.style.color = 'white'}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = 'white'}} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("common.loading")}</span>
                        </>
                      ) : (
                        <span className={language === "ar" ? "font-arabic" : "font-english"}>{t("common.submit")}</span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2
              className={`text-3xl font-bold text-black mb-8 text-center ${language === "ar" ? "font-arabic" : "font-english"}`}
            >
              {language === "ar" ? "موقعنا في الرياض" : "Our Location in Riyadh"}
            </h2>
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
