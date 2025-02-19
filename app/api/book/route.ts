import { NextResponse } from "next/server"
import { bookTicket } from "@/lib/database"

export async function POST(request: Request) {
  const { trainId, passengerName } = await request.json()

  if (!trainId || !passengerName) {
    return NextResponse.json({ error: "Train ID and passenger name are required" }, { status: 400 })
  }

  const bookingId = bookTicket(trainId, passengerName)

  if (!bookingId) {
    return NextResponse.json({ error: "No seats available or train not found" }, { status: 400 })
  }

  return NextResponse.json({ bookingId })
}

