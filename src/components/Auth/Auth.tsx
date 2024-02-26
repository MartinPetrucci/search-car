"use client";

import { Button } from "@mui/material";
import { usePathname, useParams, useSearchParams } from "next/navigation";

export default function Auth() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  return (
    <div>
      <p>code: {code}</p>
      {code ? (
        <span>is authenticated</span>
      ) : (
        <a href="https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=7523285884318227&redirect_uri=https://search-car-xi.vercel.app/">
          auth
        </a>
      )}
    </div>
  );
}
