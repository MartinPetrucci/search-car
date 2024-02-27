import Auth from "@/components/Auth/Auth";
import SearchCar from "@/components/SearchCar/SearchCar";
import { AuthProvider } from "@/store/authContext";
import { Suspense } from "react";

export default function Home() {
  return (
    // <AuthProvider>
    <main className="flex min-h-screen flex-col p-12 gap-4">
      {/* <Suspense fallback={<span>suspense...</span>}>
          <Auth />
        </Suspense> */}
      <SearchCar />
    </main>
    // </AuthProvider>
  );
}
