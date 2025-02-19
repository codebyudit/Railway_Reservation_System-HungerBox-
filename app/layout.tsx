import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Railway Reservation System",
  description: "Book your premium train tickets with ease",
    generator: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <header className="bg-gradient-to-r from-amber-500 to-amber-700 shadow-lg">
            <div className="container mx-auto px-4 py-6 flex justify-center">
              <h1 className="text-3xl font-bold text-white">Railway Reservation System</h1>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>
          <footer className="bg-gray-900 text-center py-4">
            <p className="text-gray-400">&copy; 2025 Railway Reservation System. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}