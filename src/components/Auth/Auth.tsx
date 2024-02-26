"use client";

import { BASE_URL } from "@/utils/meli";
import { sha256 } from "js-sha256";
import { usePathname, useParams, useSearchParams } from "next/navigation";

export default function Auth() {
  let code: string | null = "";
  const searchParams = useSearchParams();
  code = searchParams.get("code");

  if (code) {
    getAuth();
  }

  async function getAuth() {
    const res = await fetch(`${BASE_URL}/api/auth?&code=${code}`);
    const data = await res.json();
    console.log({ data });
  }

  // const hash = sha256("12345");
  // const url = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=7523285884318227&redirect_uri=https://search-car-xi.vercel.app/&code_challenge=${hash}&code_challenge_method=S256`;
  const url = `https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=7523285884318227&redirect_uri=https://search-car-xi.vercel.app/`;
  return (
    <div>
      <p>code: {code}</p>
      {code ? (
        <span>is authenticated</span>
      ) : (
        // <a href="https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=7523285884318227&redirect_uri=https://search-car-xi.vercel.app/&code_challenge=12345&code_challenge_method=plain">
        <a href={url}>auth</a>
      )}
    </div>
  );
}
