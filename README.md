# 🚆 Railway Reservation System

A web-based Railway Reservation System that allows users to check seat availability, book tickets, cancel bookings, and check ticket status using a unique booking ID.

## 🚀 Tech Stack
- **Next.js** - For building the frontend and backend API routes.
- **TypeScript** - Ensuring type safety and better developer experience.
- **Tailwind CSS** - For a sleek and responsive UI.
- **Radix UI** - For accessible and high-quality UI components.

## 🎯 Features
- **Train & Seat Management**
  - Predefined trains with unique IDs and names.
  - Each train has a fixed number of seats (e.g., 100 per train).
  - Tracks available and booked seats for each train.

- **Ticket Booking**
  - Users can book one seat per request on a selected train.
  - Each user can book only one seat per train.
  - Generates a unique Booking ID upon successful reservation.
  - Displays "No seats available" if the train is full.

- **Ticket Cancellation**
  - Users can cancel a ticket using their Booking ID.
  - Canceling a ticket frees up the seat for new bookings.

## 📸 Screenshots
(Add screenshots of the UI here)

## 🛠 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/railway-reservation.git
cd railway-reservation
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```
> Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build & Deploy
To build the project for production:
```sh
npm run build
```
To start the production server:
```sh
npm start
```

## 📜 License
This project is licensed under the MIT License.

## 👨‍💻 Author
- **Your Name** - [GitHub](https://github.com/your-username)

---
Made with ❤️ using Next.js, TypeScript, Tailwind CSS, and Radix UI.

