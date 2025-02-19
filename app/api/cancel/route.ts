import { NextResponse } from "next/server"
import { cancelTicket } from "@/lib/database"

export async function POST(request: Request) {
  const { bookingId } = await request.json()

  if (!bookingId) {
    return NextResponse.json({ error: "Booking ID is required" }, { status: 400 })
  }

  const success = cancelTicket(bookingId)

  if (!success) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 })
  }

  return NextResponse.json({ message: "Ticket cancelled successfully" })
}

