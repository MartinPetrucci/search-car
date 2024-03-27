"use client";

import { CarTooltip } from "@/components/CarTooltip/CarTooltip";
import FavCars from "@/components/FavCars/FavCars";
import useFavCars from "@/hooks/useFavCars";
import { Car } from "@/interfaces";
import { BACKEND_URL } from "@/utils/meli";
import { CircularProgress } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function FavCarsPage() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main>
        <h1>hola</h1>
        <FavCars />
      </main>
    </QueryClientProvider>
  );
}
