import { NextResponse } from "next/server"
import { getTrains } from "@/lib/database"

export async function GET() {
  const trains = getTrains()
  return NextResponse.json(trains)
}

