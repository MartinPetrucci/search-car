import { Car } from "@/interfaces";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

// interface Car {
//   model: string;
//   price: number;
//   kms: number;
//   link: string;
// }

export async function GET() {
  try {
    const result = await sql`SELECT * from FavCars`;
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const data = (await request.json()) as Car;
  console.log({ data });
  const {
    kms,
    link,
    title,
    currency_id,
    id,
    power,
    relation,
    thumbnail,
    year,
    price,
  } = data;
  try {
    const result =
      await sql`INSERT into FavCars Values(${id}, ${title}, ${kms}, ${price}, ${power}, ${year}, ${link}, ${currency_id}, ${1}, ${thumbnail});`;
    // const result = await sql`SELECT * from FavCars;`;
    console.log({ result });
    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
