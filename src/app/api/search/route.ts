import { SearchResponse } from "@/interfaces";
import { ML_BASE_URL, MLAuth } from "@/utils/meli";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // console.log({ searchParams });
  const car = searchParams.get("car");
  const offset = searchParams.get("offset");
  console.log({ car });
  const url = new URL(
    `${ML_BASE_URL}/sites/MLA/search?category=1744&q=${car}&offset=${offset}`
  );
  const res = await fetch(url, {
    headers: { ...MLAuth },
  });
  const data = (await res.json()) as SearchResponse;
  // console.log({ data });
  return NextResponse.json(data);
}
