import { NextResponse } from "next/server"
import { getAvailableSeats } from "@/lib/database"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const trainId = searchParams.get("trainId")

  if (!trainId) {
    return NextResponse.json({ error: "Train ID is required" }, { status: 400 })
  }

  const availableSeats = getAvailableSeats(trainId)

  if (availableSeats === null) {
    return NextResponse.json({ error: "Train not found" }, { status: 404 })
  }

  return NextResponse.json({ availableSeats })
}

