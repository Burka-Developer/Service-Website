import { type NextRequest, NextResponse } from "next/server"
import { createBooking, getBookings, initializeDatabase } from "@/lib/db"

export async function GET() {
  try {
    await initializeDatabase()
    const bookings = await getBookings()
    return NextResponse.json({ success: true, data: bookings })
  } catch (error) {
    console.error("GET /api/bookings error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch bookings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase()
    const body = await request.json()

    const { name, email, phone, address, service, date, time, comments, file_url } = body

    if (!name || !email || !phone || !address || !service || !date || !time) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const booking = await createBooking({
      name,
      email,
      phone,
      address,
      service,
      date,
      time,
      comments,
      file_url,
    })

    // Send email notification (mock implementation)
    console.log("New booking created:", booking)

    return NextResponse.json({ success: true, data: booking })
  } catch (error) {
    console.error("POST /api/bookings error:", error)
    return NextResponse.json({ success: false, error: "Failed to create booking" }, { status: 500 })
  }
}
