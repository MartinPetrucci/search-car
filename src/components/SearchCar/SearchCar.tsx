"use client";

import { useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AvFilter, Car, CarResult } from "@/interfaces";
import Chart from "../Chart/Chart";
import Filters from "../Filters/Filters";
import RangeFilter from "../RangeFilter/RangeFilter";

export interface Filter {
  filterFn: (car: Car) => boolean;
}

export default function SearchCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 items-center m-auto">
        <SearchBar setCars={setCars} amount={cars.length} />
        {cars.length > 0 && <span>Resultados: {cars.length}</span>}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <RangeFilter setCars={setFilteredCars} originalCars={cars} />
        <Chart cars={filteredCars} />
      </div>
    </div>
  );
}
