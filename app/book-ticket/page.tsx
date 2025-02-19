"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Ticket, ArrowLeft, BookOpen } from "lucide-react"

export default function BookTicket() {
  const [trainId, setTrainId] = useState("")
  const [passengerName, setPassengerName] = useState("")
  const [bookingId, setBookingId] = useState<string | null>(null)
  const [trains, setTrains] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    fetch("/api/trains")
      .then((res) => res.json())
      .then((data) => setTrains(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trainId, passengerName }),
    })
    const data = await res.json()
    if (data.bookingId) {
      setBookingId(data.bookingId)
    } else {
      setBookingId(null)
    }
  }

  return (
    <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-green-400 flex items-center justify-center">
          <Ticket className="w-6 h-6 mr-2" />
          Book a Ticket
        </CardTitle>
        <CardDescription className="text-gray-300">Enter your details to book a train ticket</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="trainId" className="text-gray-300">
                Train
              </Label>
              <Select onValueChange={setTrainId}>
                <SelectTrigger id="trainId" className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Select a train" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  {trains.map((train) => (
                    <SelectItem key={train.id} value={train.id}>
                      {train.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-300">
                Passenger Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
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
          className="bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button type="submit" onClick={handleSubmit} className="bg-green-400 text-gray-900 hover:bg-green-500">
          <BookOpen className="w-4 h-4 mr-2" /> Book Ticket
        </Button>
      </CardFooter>
      {bookingId && (
        <CardContent>
          <p className="text-center text-lg font-semibold text-green-400">
            Booking successful! Your booking ID is: {bookingId}
          </p>
        </CardContent>
      )}
    </Card>
  )
}

