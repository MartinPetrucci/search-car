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
  const [filteredCarDataset, setFilteredCarDataset] =
    useState<CarDataset[]>(carDatasets);

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
            carDatasets={carDatasets}
            setCarDatasets={setCarDatasets}
          />
        </div>
        <RangeFilter
          setCarDatasets={setFilteredCarDataset}
          originalCarDatasets={carDatasets}
        />
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
        <Chart carDatasets={filteredCarDataset} />
      </div>
    </div>
  );
}
