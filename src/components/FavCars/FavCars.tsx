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
        <div
          className="grid  gap-4 p-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 4fr)",
          }}
        >
          {favCars.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                window.open(car.link, "_blank");
              }}
            >
              <CarTooltip car={car} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
