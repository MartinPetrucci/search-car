import Auth from "@/components/Auth/Auth";
import SearchCar from "@/components/SearchCar/SearchCar";
import { AuthProvider } from "@/store/authContext";
import { Button } from "@mui/material";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-4 gap-4">
      <SearchCar />
    </main>
  );
}
