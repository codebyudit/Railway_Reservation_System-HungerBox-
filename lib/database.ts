interface Train {
  id: string
  name: string
  totalSeats: number
  availableSeats: number
}

interface Booking {
  id: string
  trainId: string
  passengerName: string
}

const trains: Train[] = [
  { id: "1", name: "Vande Bharat Express - 22439", totalSeats: 100, availableSeats: 100 },
  { id: "2", name: "Gatimaan Express - 12050", totalSeats: 100, availableSeats: 100 },
  { id: "3", name: "Tejas Express - 82501", totalSeats: 100, availableSeats: 100 },
  { id: "4", name: "Rajdhani Express - 12439", totalSeats: 100, availableSeats: 100 },
  { id: "5", name: "Shatabdi Express - 12002", totalSeats: 100, availableSeats: 100 },
]

const bookings: Booking[] = []

export function getTrains(): Train[] {
  return trains
}

export function getTrainById(id: string): Train | undefined {
  return trains.find((train) => train.id === id)
}

export function bookTicket(trainId: string, passengerName: string): string | null {
  const train = getTrainById(trainId)
  if (!train || train.availableSeats === 0) {
    return null
  }

  const bookingId = `BOOK${Math.floor(Math.random() * 10000)}`
  bookings.push({ id: bookingId, trainId, passengerName })
  train.availableSeats--

  return bookingId
}

export function cancelTicket(bookingId: string): boolean {
  const bookingIndex = bookings.findIndex((booking) => booking.id === bookingId)
  if (bookingIndex === -1) {
    return false
  }

  const booking = bookings[bookingIndex]
  const train = getTrainById(booking.trainId)
  if (train) {
    train.availableSeats++
  }

  bookings.splice(bookingIndex, 1)
  return true
}

export function getBookingStatus(bookingId: string): string | null {
  const booking = bookings.find((booking) => booking.id === bookingId)
  if (!booking) {
    return null
  }
  return `Booking confirmed for train ${booking.trainId}`
}

export function getAvailableSeats(trainId: string): number | null {
  const train = getTrainById(trainId)
  return train ? train.availableSeats : null
}

