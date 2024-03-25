"use client";

import { useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AvFilter, Car, CarResult } from "@/interfaces";
import Chart, { CarDataset } from "../Chart/Chart";
import Filters from "../Filters/Filters";
import RangeFilter from "../RangeFilter/RangeFilter";
import { Button } from "@mui/material";

export interface Filter {
  filterFn: (car: Car) => boolean;
}

export default function SearchCar() {
  const [carDatasets, setCarDatasets] = useState<CarDataset[]>([]);
  const [carDataset, setCarDataset] = useState<CarDataset>({
    cars: [],
    model: "",
  });
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  function openAll() {
    filteredCars
      .slice(0, 20)
      .sort((a, b) => a.price - b.price)
      .forEach((car) => {
        window.open(car.link, "_blank");
      });
  }

  function removeDataSet(model: string) {
    setCarDatasets((prev) => {
      return prev.filter((dataSet) => dataSet.model != model);
    });
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 items-center justify-between m-auto w-5/12">
        <div className="flex justify-between items-end w-full">
          <SearchBar
            setCarDatasets={setCarDatasets}
            setCars={setCars}
            amount={cars.length}
          />
          {/* {cars.length > 0 && (
            <Button
              className="text-center text-lg font-medium cursor-pointer h-full"
              onClick={openAll}
              variant="outlined"
            >
              {filteredCars.length} resultados
            </Button>
          )} */}
        </div>
        {/* <RangeFilter setCars={setFilteredCars} originalCars={cars} /> */}
      </div>
      <div>
        {carDatasets.map((dataSet) => (
          <Button
            key={dataSet.model}
            variant="outlined"
            onClick={() => {
              removeDataSet(dataSet.model);
            }}
          >
            {dataSet.model}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Chart
          // cars={filteredCars}
          carDatasets={carDatasets}
        />
      </div>
    </div>
  );
}
