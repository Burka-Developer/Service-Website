"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Trash2, CheckCircle, Clock, Mail, Phone, Loader2 } from "lucide-react"

interface Booking {
  id: number
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  address: string
  status: string
  comments?: string
  created_at: string
}

interface Contact {
  id: number
  name: string
  email: string
  message: string
  status: string
  created_at: string
}

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

export default function AdminPage() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [bookings, setBookings] = useState<Booking[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginData.email === "admin@108.cl" && loginData.password === "admin123") {
      setIsAuthenticated(true)
      fetchData()
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      })
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive",
      })
    }
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch bookings
      const bookingsResponse = await fetch("/api/bookings")
      const bookingsResult = await bookingsResponse.json()
      if (bookingsResult.success) {
        setBookings(bookingsResult.data)
      }

      // Fetch contacts
      const contactsResponse = await fetch("/api/contacts")
      const contactsResult = await contactsResponse.json()
      if (contactsResult.success) {
        setContacts(contactsResult.data)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })

      const result = await response.json()
      if (result.success) {
        setBookings((prev) => prev.map((booking) => (booking.id === id ? { ...booking, status } : booking)))
        toast({
          title: "Status Updated",
          description: `Booking status changed to ${status}`,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update status",
        variant: "destructive",
      })
    }
  }

  const deleteBooking = async (id: number) => {
    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: "DELETE",
      })

      const result = await response.json()
      if (result.success) {
        setBookings((prev) => prev.filter((booking) => booking.id !== id))
        toast({
          title: "Booking Deleted",
          description: "Booking has been removed",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete booking",
        variant: "destructive",
      })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-[color:var(--accent)] text-[color:var(--primary)] border-[color:var(--accent)]"
      case "confirmed":
        return "bg-[color:var(--primary)] text-white border-[color:var(--primary)]"
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="w-full max-w-md card-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-black">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-black">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="admin@108.cl"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-black">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter password"
                  required
                  className="input-field"
                />
              </div>
              <Button type="submit" className="w-full btn-primary">
                Login
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">Demo credentials: admin@108.cl / admin123</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: colors.background}}>
      {/* Header */}
      <div className="shadow-sm border-b" style={{backgroundColor: colors.white, borderColor: colors.primary}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold" style={{color: colors.primary}}>108 Services Admin</h1>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)} className="btn-secondary ripple" style={{borderColor: colors.primary, color: colors.primary}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = colors.white}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = colors.white; e.currentTarget.style.color = colors.primary}}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-black" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-black">{bookings.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-black">
                    {bookings.filter((b) => b.status === "pending").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-black">
                    {bookings.filter((b) => b.status === "completed").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Mail className="w-8 h-8 text-black" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Inquiries</p>
                  <p className="text-2xl font-bold text-black">{contacts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger value="bookings" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Service Bookings
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="data-[state=active]:bg-white data-[state=active]:text-black">
              Contact Inquiries
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card className="card-white">
              <CardHeader>
                <CardTitle className="text-black">Service Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-black" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="card-white fade-in border border-[color:var(--primary)] bg-white group hover:shadow-lg transition-shadow duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg text-black">{booking.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <span className="flex items-center">
                                <Mail className="w-4 h-4 mr-1" style={{color: 'var(--primary)'}} />
                                {booking.email}
                              </span>
                              <span className="flex items-center">
                                <Phone className="w-4 h-4 mr-1" style={{color: 'var(--primary)'}} />
                                {booking.phone}
                              </span>
                            </div>
                          </div>
                          <Badge className={getStatusColor(booking.status)} style={{borderColor: 'var(--primary)'}}>{booking.status}</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-sm font-medium text-gray-600">Service</p>
                            <p className="capitalize text-black">{booking.service}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Date & Time</p>
                            <p className="text-black">
                              {booking.date} at {booking.time}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Location</p>
                            <p className="text-black">{booking.address}</p>
                          </div>
                        </div>

                        {booking.comments && (
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-600">Comments</p>
                            <p className="text-sm bg-white p-2 rounded border border-gray-200 text-black">
                              {booking.comments}
                            </p>
                          </div>
                        )}

                        <div className="flex space-x-2">
                          {booking.status === "pending" && (
                            <Button
                              size="sm"
                              onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              className="btn-primary ripple rounded-lg text-base font-semibold"
                              style={{backgroundColor: colors.primary, color: colors.white, borderColor: colors.primary}}
                              onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primaryHover; e.currentTarget.style.color = colors.white}}
                              onMouseOut={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = colors.white}}
                            >
                              Confirm
                            </Button>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              size="sm"
                              onClick={() => updateBookingStatus(booking.id, "completed")}
                              className="btn-primary ripple rounded-lg text-base font-semibold"
                              style={{backgroundColor: colors.accent, color: colors.primary, borderColor: colors.accent}}
                              onMouseOver={(e) => {e.currentTarget.style.backgroundColor = colors.primary; e.currentTarget.style.color = colors.white}}
                              onMouseOut={(e) => {e.currentTarget.style.backgroundColor = colors.accent; e.currentTarget.style.color = colors.primary}}
                            >
                              Mark Complete
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteBooking(booking.id)}
                            className="ripple rounded-lg text-base font-semibold"
                            style={{backgroundColor: '#fff0f0', color: '#A31621', borderColor: '#A31621'}}
                            onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#A31621'; e.currentTarget.style.color = '#fff'}}
                            onMouseOut={(e) => {e.currentTarget.style.backgroundColor = '#fff0f0'; e.currentTarget.style.color = '#A31621'}}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                    {bookings.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No bookings found</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries">
            <Card className="card-white">
              <CardHeader>
                <CardTitle className="text-black">Contact Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-black" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((inquiry) => (
                      <div key={inquiry.id} className="card-white fade-in border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-black">{inquiry.name}</h3>
                            <p className="text-sm text-gray-600">{inquiry.email}</p>
                          </div>
                          <Badge
                            className={
                              inquiry.status === "unread"
                                ? "bg-red-100 text-red-800 border-red-200"
                                : "bg-green-100 text-green-800 border-green-200"
                            }
                          >
                            {inquiry.status}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3 bg-white p-3 rounded border border-gray-200">
                          {inquiry.message}
                        </p>
                        <p className="text-xs text-gray-500">{new Date(inquiry.created_at).toLocaleString()}</p>
                      </div>
                    ))}
                    {contacts.length === 0 && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No inquiries found</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
