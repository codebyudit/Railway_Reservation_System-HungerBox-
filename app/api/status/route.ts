import { NextResponse } from "next/server"
import { getBookingStatus } from "@/lib/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const bookingId = searchParams.get("bookingId")

  if (!bookingId) {
    return NextResponse.json({ error: "Booking ID is required" }, { status: 400 })
  }

  const status = getBookingStatus(bookingId)

  if (!status) {
    return NextResponse.json({ error: "Booking not found" }, { status: 404 })
  }

  return NextResponse.json({ status })
}

