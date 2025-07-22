// If you see a 'Cannot find module \"mysql2/promise\"' error, run: npm install mysql2
// If you see a 'Cannot find name \"process\"' error, run: npm install --save-dev @types/node
import mysql from 'mysql2/promise';

interface BookingInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  date: string;
  time: string;
  comments?: string;
  file_url?: string | null;
}

interface ContactInput {
  name: string;
  email: string;
  message: string;
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Ensures the bookings, contacts, and services tables exist
export async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      address VARCHAR(255) NOT NULL,
      service VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time VARCHAR(50) NOT NULL,
      comments TEXT,
      file_url VARCHAR(255),
      status VARCHAR(50) DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      status VARCHAR(50) DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS services (
      id INT AUTO_INCREMENT PRIMARY KEY,
      key_name VARCHAR(255) NOT NULL,
      description TEXT,
      duration VARCHAR(255),
      price VARCHAR(255),
      icon VARCHAR(255),
      color VARCHAR(255),
      bgColor VARCHAR(255)
    )
  `);
}

export async function createBooking({ name, email, phone, address, service, date, time, comments, file_url }: BookingInput) {
  const [result]: any = await pool.query(
    `INSERT INTO bookings (name, email, phone, address, service, date, time, comments, file_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, email, phone, address, service, date, time, comments, file_url]
  );
  const [rows]: any = await pool.query('SELECT * FROM bookings WHERE id = ?', [result.insertId]);
  return rows[0];
}

export async function getBookings() {
  const [rows]: any = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
  return rows;
}

export async function updateBookingStatus(id: number, status: string) {
  await pool.query('UPDATE bookings SET status = ? WHERE id = ?', [status, id]);
  const [rows]: any = await pool.query('SELECT * FROM bookings WHERE id = ?', [id]);
  return rows[0];
}

export async function deleteBooking(id: number) {
  await pool.query('DELETE FROM bookings WHERE id = ?', [id]);
}

// CONTACTS
export async function createContact({ name, email, message }: ContactInput) {
  const [result]: any = await pool.query(
    `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message]
  );
  const [rows]: any = await pool.query('SELECT * FROM contacts WHERE id = ?', [result.insertId]);
  return rows[0];
}

export async function getContacts() {
  const [rows]: any = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
  return rows;
}

// SERVICES
export async function getServices() {
  const [rows]: any = await pool.query('SELECT * FROM services ORDER BY id ASC');
  return rows;
}

export default pool;
