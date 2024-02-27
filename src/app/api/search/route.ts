import { SearchResponse } from "@/interfaces";
import { ML_BASE_URL, MLAuth } from "@/utils/meli";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const car = searchParams.get("car");
  const offset = searchParams.get("offset");
  const url = new URL(
    `${ML_BASE_URL}/sites/MLA/search?category=1744&q=${car}&offset=${offset}`
  );
  const res = await fetch(url);
  const data = (await res.json()) as SearchResponse;
  return NextResponse.json(data);
}
