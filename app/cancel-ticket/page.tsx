"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { XCircle, ArrowLeft, X } from "lucide-react"

export default function CancelTicket() {
  const [bookingId, setBookingId] = useState("")
  const [cancellationStatus, setCancellationStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/cancel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingId }),
    })
    const data = await res.json()
    if (data.message) {
      setCancellationStatus(data.message)
    } else {
      setCancellationStatus("Failed to cancel ticket. Please check your booking ID.")
    }
  }

  return (
    <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-red-400 flex items-center justify-center">
          <XCircle className="w-6 h-6 mr-2" />
          Cancel Ticket
        </CardTitle>
        <CardDescription className="text-gray-300">Enter your booking ID to cancel your ticket</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bookingId" className="text-gray-300">
                Booking ID
              </Label>
              <Input
                id="bookingId"
                placeholder="Enter your booking ID"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                className="bg-gray-800 text-white border-gray-700"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button type="submit" onClick={handleSubmit} className="bg-red-400 text-gray-900 hover:bg-red-500">
          <X className="w-4 h-4 mr-2" /> Cancel Ticket
        </Button>
      </CardFooter>
      {cancellationStatus && (
        <CardContent>
          <p className="text-center text-lg font-semibold text-red-400">{cancellationStatus}</p>
        </CardContent>
      )}
    </Card>
  )
}

