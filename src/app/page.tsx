import Auth from "@/components/Auth/Auth";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 gap-4">
      {/* <SearchCar /> */}
      <Suspense fallback={<span>suspense...</span>}>
        <Auth />
      </Suspense>
    </main>
  );
}
