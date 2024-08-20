"use client";

import SearchHouse from "@/components/SearchHouse/SearchHouse";
import { Suspense } from "react";

export default function HousePage() {
  return (
    <main className="flex min-h-screen flex-col p-12 gap-4">
      <Suspense>
        <SearchHouse />
      </Suspense>
    </main>
  );
}
