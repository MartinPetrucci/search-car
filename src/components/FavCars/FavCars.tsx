"use client";

import useFavCars from "@/hooks/useFavCars";
import { CircularProgress } from "@mui/material";
import { CarTooltip } from "../CarTooltip/CarTooltip";

export default function FavCars() {
  const { data: favCars, isLoading } = useFavCars();

  return (
    <div>
      {isLoading && <CircularProgress />}
      {favCars && favCars.length > 0 && (
        <div className="grid grid-flow-row">
          {favCars.map((car) => (
            <CarTooltip key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
