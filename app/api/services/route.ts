import { NextResponse } from "next/server"
import { getServices, initializeDatabase } from "@/lib/db"

export async function GET() {
  try {
    await initializeDatabase()
    const services = await getServices()
    return NextResponse.json({ success: true, data: services })
  } catch (error) {
    console.error("GET /api/services error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch services" }, { status: 500 })
  }
}
