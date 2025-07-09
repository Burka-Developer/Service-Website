"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import { Upload, Calendar, MapPin, Loader2 } from "lucide-react"

const riyadhAreas = [
  { ar: "حي العليا", en: "Al Olaya" },
  { ar: "حي الملز", en: "Al Malaz" },
  { ar: "حي العارض", en: "Al Arid" },
  { ar: "حي النخيل", en: "Al Nakheel" },
  { ar: "حي الروضة", en: "Al Rawdah" },
  { ar: "حي السليمانية", en: "Al Sulimaniyah" },
  { ar: "حي الورود", en: "Al Wurud" },
  { ar: "حي الياسمين", en: "Al Yasmin" },
]

const services = [
  "carpentry",
  "aluminum",
  "welding",
  "electrical",
  "generator",
  "ac",
  "painting",
  "upholstery",
  "plumbing",
  "autocad",
  "web",
  "app",
]

export default function RequestPage() {
  const { language, t } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    comments: "",
    file: null as File | null,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.size <= 10 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, file }))
    } else {
      toast({
        title: language === "ar" ? "خطأ" : "Error",
        description:
          language === "ar" ? "حجم الملف يجب أن يكون أقل من 10 ميجابايت" : "File size must be less than 10MB",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          comments: formData.comments,
          file_url: null, // File upload would be handled separately
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: language === "ar" ? "تم الإرسال بنجاح" : "Successfully Submitted",
          description:
            language === "ar"
              ? "سيتم التواصل معك قريباً لتأكيد الموعد"
              : "We will contact you soon to confirm the appointment",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          service: "",
          date: "",
          time: "",
          comments: "",
          file: null,
        })
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
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
          >
            {t("nav.request")}
          </h1>
          <p className={`text-xl text-gray-600 ${language === "ar" ? "font-arabic" : "font-english"}`}>
            {language === "ar"
              ? "املأ النموذج أدناه وسنتواصل معك لتأكيد موعد الخدمة"
              : "Fill out the form below and we will contact you to confirm the service appointment"}
          </p>
        </div>
      </section>

      {/* Request Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Card className="card-white">
            <CardHeader>
              <CardTitle
                className={`text-2xl text-center text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
              >
                {language === "ar" ? "نموذج طلب الخدمة" : "Service Request Form"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="phone"
                      className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                    >
                      {t("common.phone")} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+966 XX XXX XXXX"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="address"
                      className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                    >
                      <MapPin className="w-4 h-4 inline mr-1" />
                      {language === "ar" ? "المنطقة في الرياض" : "Area in Riyadh"} *
                    </Label>
                    <Select value={formData.address} onValueChange={(value) => handleInputChange("address", value)}>
                      <SelectTrigger className="input-field">
                        <SelectValue placeholder={language === "ar" ? "اختر المنطقة" : "Select Area"} />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-300">
                        {riyadhAreas.map((area, index) => (
                          <SelectItem key={index} value={area[language]} className="hover:bg-gray-50">
                            <span className={language === "ar" ? "font-arabic" : "font-english"}>{area[language]}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <Label
                    htmlFor="service"
                    className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                  >
                    {language === "ar" ? "نوع الخدمة" : "Service Type"} *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="input-field">
                      <SelectValue placeholder={language === "ar" ? "اختر الخدمة" : "Select Service"} />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="hover:bg-gray-50">
                          <span className={language === "ar" ? "font-arabic" : "font-english"}>
                            {t(`services.${service}`)}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="date"
                      className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                    >
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {language === "ar" ? "التاريخ المفضل" : "Preferred Date"} *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="time"
                      className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                    >
                      {language === "ar" ? "الوقت المفضل" : "Preferred Time"} *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <Label htmlFor="file" className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    <Upload className="w-4 h-4 inline mr-1" />
                    {language === "ar" ? "رفع ملف (اختياري)" : "Upload File (Optional)"}
                  </Label>
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg,.cad"
                    onChange={handleFileChange}
                    className="input-field"
                  />
                  <p className={`text-sm text-gray-500 mt-1 ${language === "ar" ? "font-arabic" : "font-english"}`}>
                    {language === "ar"
                      ? "يمكنك رفع ملفات CAD، صور، أو مستندات (حد أقصى 10 ميجابايت)"
                      : "You can upload CAD files, images, or documents (max 10MB)"}
                  </p>
                </div>

                {/* Comments */}
                <div>
                  <Label
                    htmlFor="comments"
                    className={`text-black ${language === "ar" ? "font-arabic" : "font-english"}`}
                  >
                    {language === "ar" ? "تفاصيل إضافية" : "Additional Details"}
                  </Label>
                  <Textarea
                    id="comments"
                    rows={4}
                    value={formData.comments}
                    onChange={(e) => handleInputChange("comments", e.target.value)}
                    placeholder={
                      language === "ar"
                        ? "اكتب أي تفاصيل إضافية حول الخدمة المطلوبة..."
                        : "Write any additional details about the required service..."
                    }
                    className={`input-field ${language === "ar" ? "font-arabic" : "font-english"}`}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full btn-primary text-lg py-4" disabled={isSubmitting}>
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
      </section>

      <Footer />
    </div>
  )
}
