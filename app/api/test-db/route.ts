// app/api/test-db/route.ts
import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT 1');
    return NextResponse.json({ success: true, rows });
  } catch (error: any) {
    // Log the full error for debugging
    console.error('DB Test Error:', error);
    // Return a more detailed error message
    return NextResponse.json({ success: false, error: error?.message || String(error) });
  }
}