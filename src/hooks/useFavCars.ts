import { Car } from "@/interfaces";
import { P_BACKEND_URL } from "@/utils/meli";
import { useQuery } from "@tanstack/react-query";

async function getFavCars() {
  const res = await fetch(`${P_BACKEND_URL}/api/fav-cars`);
  const favCars = (await res.json()) as Car[];
  return favCars;
}

export default function useFavCars() {
  return useQuery({ queryKey: ["fav-cars"], queryFn: getFavCars });
}
