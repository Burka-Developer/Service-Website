import { type NextRequest, NextResponse } from "next/server"
import { updateBookingStatus, deleteBooking } from "@/lib/db"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { status } = body
    const id = Number.parseInt(params.id)

    if (!status || !id) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const booking = await updateBookingStatus(id, status)
    return NextResponse.json({ success: true, data: booking })
  } catch (error) {
    console.error("PATCH /api/bookings/[id] error:", error)
    return NextResponse.json({ success: false, error: "Failed to update booking" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    await deleteBooking(id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE /api/bookings/[id] error:", error)
    return NextResponse.json({ success: false, error: "Failed to delete booking" }, { status: 500 })
  }
}
