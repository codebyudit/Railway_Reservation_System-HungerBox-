import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Train, Ticket, XCircle, Info } from "lucide-react"

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
        <CardContent className="p-6 flex flex-col items-center">
          <Train className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Check Availability</h2>
          <p className="text-sm mb-4 text-center">View available seats for your journey</p>
          <Link href="/check-availability" className="mt-auto">
            <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">Check Now</Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
        <CardContent className="p-6 flex flex-col items-center">
          <Ticket className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Book Ticket</h2>
          <p className="text-sm mb-4 text-center">Reserve your seat in style</p>
          <Link href="/book-ticket" className="mt-auto">
            <Button className="w-full bg-white text-green-600 hover:bg-gray-100">Book Now</Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
        <CardContent className="p-6 flex flex-col items-center">
          <XCircle className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Cancel Ticket</h2>
          <p className="text-sm mb-4 text-center">Hassle-free cancellation process</p>
          <Link href="/cancel-ticket" className="mt-auto">
            <Button className="w-full bg-white text-red-600 hover:bg-gray-100">Cancel Ticket</Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105">
        <CardContent className="p-6 flex flex-col items-center">
          <Info className="w-12 h-12 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Check Status</h2>
          <p className="text-sm mb-4 text-center">Track your booking with ease</p>
          <Link href="/check-status" className="mt-auto">
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Check Status</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

