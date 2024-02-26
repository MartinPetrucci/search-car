import { SearchResponse } from "@/interfaces";
import { ML_BASE_URL, MLAuth } from "@/utils/meli";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code}");
  const url = new URL(`${ML_BASE_URL}/oauth/token`);
  const res = await fetch(url, {
    method: "POST",
    headers: { ...MLAuth, "content-type": "application/x-www-form-urlencoded" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: "7523285884318227",
      client_secret: "jlAMArxyPTlL4kQpSw9kxiNnF8a5T6JC",
      redirect_uri: "https://search-car-xi.vercel.app/",
      code: code,
    }),
  });
  const data = await res.json();
  console.log({ data });
  return NextResponse.json(data);
  // return NextResponse.json({ msg: "ok" });
}
