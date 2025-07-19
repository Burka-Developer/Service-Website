import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test DB connection
export async function initializeDatabase() {
  const conn = await pool.getConnection();
  await conn.ping();
  conn.release();
}

// BOOKINGS
export async function getBookings() {
  const [rows] = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
  return rows;
}

export async function createBooking(data) {
  const {
    name, email, phone, address, service, date, time, comments, file_url
  } = data;
  const [result] = await pool.query(
    `INSERT INTO bookings (name, email, phone, address, service, date, time, comments, file_url, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())`,
    [name, email, phone, address, service, date, time, comments, file_url]
  );
  return {
    id: result.insertId,
    name, email, phone, address, service, date, time, comments, file_url,
    status: 'pending',
    created_at: new Date()
  };
}

export async function updateBookingStatus(id, status) {
  await pool.query('UPDATE bookings SET status = ? WHERE id = ?', [status, id]);
  const [rows] = await pool.query('SELECT * FROM bookings WHERE id = ?', [id]);
  return rows[0];
}

export async function deleteBooking(id) {
  await pool.query('DELETE FROM bookings WHERE id = ?', [id]);
}

// CONTACTS
export async function getContacts() {
  const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
  return rows;
}

export async function createContact(data) {
  const { name, email, message } = data;
  const [result] = await pool.query(
    `INSERT INTO contacts (name, email, message, created_at)
     VALUES (?, ?, ?, NOW())`,
    [name, email, message]
  );
  return {
    id: result.insertId,
    name, email, message,
    created_at: new Date()
  };
}

export default pool;
