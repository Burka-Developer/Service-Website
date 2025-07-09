import { sql } from "@vercel/postgres"

export interface Booking {
  id: number
  name: string
  email: string
  phone: string
  address: string
  service: string
  date: string
  time: string
  comments?: string
  file_url?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  created_at: string
  updated_at: string
}

export interface Contact {
  id: number
  name: string
  email: string
  message: string
  status: "unread" | "read" | "replied"
  created_at: string
}

export interface Service {
  id: number
  key: string
  name_ar: string
  name_en: string
  description_ar: string
  description_en: string
  price_range: string
  duration: string
  active: boolean
  created_at: string
}

// Initialize database tables
export async function initializeDatabase() {
  try {
    // Create bookings table
    await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        address VARCHAR(500) NOT NULL,
        service VARCHAR(100) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL,
        comments TEXT,
        file_url VARCHAR(500),
        status VARCHAR(20) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create contacts table
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(20) DEFAULT 'unread',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Create services table
    await sql`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        key VARCHAR(50) UNIQUE NOT NULL,
        name_ar VARCHAR(255) NOT NULL,
        name_en VARCHAR(255) NOT NULL,
        description_ar TEXT NOT NULL,
        description_en TEXT NOT NULL,
        price_range VARCHAR(100) NOT NULL,
        duration VARCHAR(100) NOT NULL,
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Insert default services if they don't exist
    const servicesData = [
      {
        key: "carpentry",
        name_ar: "النجارة",
        name_en: "Carpentry",
        description_ar: "خدمات النجارة المتخصصة تشمل تصنيع وتركيب الأثاث المخصص",
        description_en: "Specialized carpentry services including custom furniture manufacturing",
        price_range: "500-2000 SAR",
        duration: "1-3 days",
      },
      {
        key: "plumbing",
        name_ar: "السباكة",
        name_en: "Plumbing",
        description_ar: "خدمات السباكة الشاملة تشمل التركيب والصيانة وإصلاح التسريبات",
        description_en: "Comprehensive plumbing services including installation and maintenance",
        price_range: "200-800 SAR",
        duration: "2-4 hours",
      },
      {
        key: "electrical",
        name_ar: "الأعمال الكهربائية",
        name_en: "Electrical Work",
        description_ar: "تركيب وصيانة الأنظمة الكهربائية والإضاءة",
        description_en: "Installation and maintenance of electrical systems and lighting",
        price_range: "200-1000 SAR",
        duration: "4-8 hours",
      },
      {
        key: "ac",
        name_ar: "التكييف",
        name_en: "Air Conditioning",
        description_ar: "تركيب وصيانة وإصلاح أنظمة التكييف",
        description_en: "Installation, maintenance and repair of AC systems",
        price_range: "300-2000 SAR",
        duration: "2-6 hours",
      },
    ]

    for (const service of servicesData) {
      await sql`
        INSERT INTO services (key, name_ar, name_en, description_ar, description_en, price_range, duration)
        VALUES (${service.key}, ${service.name_ar}, ${service.name_en}, ${service.description_ar}, ${service.description_en}, ${service.price_range}, ${service.duration})
        ON CONFLICT (key) DO NOTHING
      `
    }

    console.log("Database initialized successfully")
  } catch (error) {
    console.error("Database initialization error:", error)
    throw error
  }
}

// Booking operations
export async function createBooking(booking: Omit<Booking, "id" | "created_at" | "updated_at" | "status">) {
  try {
    const result = await sql`
      INSERT INTO bookings (name, email, phone, address, service, date, time, comments, file_url)
      VALUES (${booking.name}, ${booking.email}, ${booking.phone}, ${booking.address}, ${booking.service}, ${booking.date}, ${booking.time}, ${booking.comments || null}, ${booking.file_url || null})
      RETURNING *
    `
    return result.rows[0] as Booking
  } catch (error) {
    console.error("Error creating booking:", error)
    throw error
  }
}

export async function getBookings() {
  try {
    const result = await sql`
      SELECT * FROM bookings 
      ORDER BY created_at DESC
    `
    return result.rows as Booking[]
  } catch (error) {
    console.error("Error fetching bookings:", error)
    throw error
  }
}

export async function updateBookingStatus(id: number, status: string) {
  try {
    const result = await sql`
      UPDATE bookings 
      SET status = ${status}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `
    return result.rows[0] as Booking
  } catch (error) {
    console.error("Error updating booking status:", error)
    throw error
  }
}

export async function deleteBooking(id: number) {
  try {
    await sql`DELETE FROM bookings WHERE id = ${id}`
    return true
  } catch (error) {
    console.error("Error deleting booking:", error)
    throw error
  }
}

// Contact operations
export async function createContact(contact: Omit<Contact, "id" | "created_at" | "status">) {
  try {
    const result = await sql`
      INSERT INTO contacts (name, email, message)
      VALUES (${contact.name}, ${contact.email}, ${contact.message})
      RETURNING *
    `
    return result.rows[0] as Contact
  } catch (error) {
    console.error("Error creating contact:", error)
    throw error
  }
}

export async function getContacts() {
  try {
    const result = await sql`
      SELECT * FROM contacts 
      ORDER BY created_at DESC
    `
    return result.rows as Contact[]
  } catch (error) {
    console.error("Error fetching contacts:", error)
    throw error
  }
}

// Service operations
export async function getServices() {
  try {
    const result = await sql`
      SELECT * FROM services 
      WHERE active = true
      ORDER BY id ASC
    `
    return result.rows as Service[]
  } catch (error) {
    console.error("Error fetching services:", error)
    throw error
  }
}
