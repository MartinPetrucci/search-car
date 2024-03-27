"use client";

import { useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { AvFilter, Car, CarResult } from "@/interfaces";
import Chart, { CarDataset } from "../Chart/Chart";
import Filters from "../Filters/Filters";
import RangeFilter from "../RangeFilter/RangeFilter";
import { Button } from "@mui/material";
import { BASE_URL } from "@/utils/meli";

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

  async function send() {
    const b = "http://localhost:3000/";
    const res = await fetch(`${b}api/fav-cars`, {
      method: "POST",
      body: JSON.stringify({
        model: "208 gt",
        price: 123,
        kms: 1111,
        link: "http://123.com",
      }),
    });
    const data = await res.json();
    console.log({ data });
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <Button onClick={send}>send</Button>

      <div className="flex flex-col gap-2 items-center justify-between m-auto">
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
      <div className="flex gap-4">
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
