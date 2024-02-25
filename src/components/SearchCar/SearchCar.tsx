"use client";

import { useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AvFilter, Car, CarResult } from "@/interfaces";
import Chart from "../Chart/Chart";
import Filters from "../Filters/Filters";

export interface Filter {
  filterFn: (car: Car) => boolean;
}

export default function SearchCar() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState<AvFilter[]>([]);
  const [queryFilter, setQueryFilter] = useState<{
    [k: string]: FormDataEntryValue;
  }>({});
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 items-center m-auto">
        <SearchBar
          setCars={setCars}
          amount={cars.length}
          setFilters={setFilters}
          queryFilter={queryFilter}
        />
        {cars.length > 0 && <span>Resultados: {cars.length}</span>}
      </div>
      <div className="flex gap-2">
        <Chart cars={cars} />
      </div>
    </div>
  );
}
