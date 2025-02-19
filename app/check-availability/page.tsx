"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Train, ArrowLeft, Search } from "lucide-react"

export default function CheckAvailability() {
  const [trainId, setTrainId] = useState("")
  const [availableSeats, setAvailableSeats] = useState<number | null>(null)
  const [trains, setTrains] = useState<{ id: string; name: string }[]>([])

  useEffect(() => {
    fetch("/api/trains")
      .then((res) => res.json())
      .then((data) => setTrains(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch(`/api/availability?trainId=${trainId}`)
    const data = await res.json()
    if (data.availableSeats !== undefined) {
      setAvailableSeats(data.availableSeats)
    } else {
      setAvailableSeats(null)
    }
  }

  return (
    <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-amber-400 flex items-center justify-center">
          <Train className="w-6 h-6 mr-2" />
          Check Seat Availability
        </CardTitle>
        <CardDescription className="text-gray-300">Enter the train details to check available seats</CardDescription>
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
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button type="submit" onClick={handleSubmit} className="bg-amber-400 text-gray-900 hover:bg-amber-500">
          <Search className="w-4 h-4 mr-2" /> Check Availability
        </Button>
      </CardFooter>
      {availableSeats !== null && (
        <CardContent>
          <p className="text-center text-lg font-semibold text-amber-400">Available seats: {availableSeats}</p>
        </CardContent>
      )}
    </Card>
  )
}

