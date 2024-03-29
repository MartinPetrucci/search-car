import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const result =
      await sql`INSERT into Cars Values('un modelo', 'desde cronos')`;
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
