import { type NextRequest, NextResponse } from "next/server"
import { createContact, getContacts, initializeDatabase } from "@/lib/db"

export async function GET() {
  try {
    await initializeDatabase()
    const contacts = await getContacts()
    return NextResponse.json({ success: true, data: contacts })
  } catch (error) {
    console.error("GET /api/contacts error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch contacts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await initializeDatabase()
    const body = await request.json()

    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const contact = await createContact({ name, email, message })

    // Send email notification (mock implementation)
    console.log("New contact message:", contact)

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    console.error("POST /api/contacts error:", error)
    return NextResponse.json({ success: false, error: "Failed to create contact" }, { status: 500 })
  }
}
