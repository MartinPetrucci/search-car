import { ML_BASE_URL, MLAuth } from "@/utils/meli";
import { NextResponse } from "next/server";

global.accessToken = null;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const url = new URL(`${ML_BASE_URL}/oauth/token`);
  const req = {
    method: "POST",
    headers: {
      ...MLAuth,
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: "7523285884318227",
      client_secret: "jlAMArxyPTlL4kQpSw9kxiNnF8a5T6JC",
      redirect_uri: "https://search-car-xi.vercel.app/",
      code: code,
    }),
  };
  const res = await fetch(url, req);
  const data = await res.json();
  if (data.access_token) {
    global.access_token = data.access_token;
    return NextResponse.json({ msg: "OK" });
  } else {
    return NextResponse.json({ msg: "error" });
  }
}
