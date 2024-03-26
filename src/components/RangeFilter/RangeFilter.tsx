// "use client";

import { Car } from "@/interfaces";
import { Button, TextField } from "@mui/material";
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CarDataset } from "../Chart/Chart";

interface Props {
  // originalCars: Car[];
  originalCarDatasets: CarDataset[];
  // setCars: Dispatch<SetStateAction<Car[]>>;
  setCarDatasets: Dispatch<SetStateAction<CarDataset[]>>;
}

export default function RangeFilter({
  // originalCars,
  originalCarDatasets,
  // setCars,
  setCarDatasets,
}: Props) {
  const [activeFilters, setActiveFilters] = useState<
    { fn: (car: Car, value: number) => boolean; val: number }[]
  >([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.currentTarget));
    let f: { fn: (car: Car, value: number) => boolean; val: number }[] = [];
    for (const key in form) {
      if (form[key] != "") {
        console.log(key);
        console.log(filters[key]);
        f = f.concat({
          fn: filters[key].filterFn,
          val: parseInt(form[key].toString()),
        });
      }
    }
    setActiveFilters(f);
  };

  useEffect(() => {
    console.log("cambio el original");
    setCarDatasets(() => {
      if (originalCarDatasets.length > 0 && activeFilters.length > 0) {
        return originalCarDatasets?.map((dataSet) => {
          const filteredCars = dataSet.cars.filter((car) => {
            return activeFilters.every((activeFilter) =>
              activeFilter.fn(car, activeFilter.val)
            );
          });
          return { model: dataSet.model, cars: filteredCars };
        });
      }
      console.log("no entro");
      return originalCarDatasets;
    });
  }, [activeFilters, setCarDatasets, originalCarDatasets]);

  const filters: {
    [k: string]: { filterFn: (car: Car, value: number) => boolean };
  } = {
    kmsDesde: { filterFn: (car: Car, kms: number) => car.kms > kms },
    kmsHasta: { filterFn: (car: Car, kms: number) => car.kms < kms },
    precioDesde: {
      filterFn: (car: Car, precio: number) => car.price > precio,
    },
    precioHasta: {
      filterFn: (car: Car, precio: number) => car.price < precio,
    },
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-2 mt-4">
        <TextField name="kmsDesde" type="number" label="kms desde" />
        <TextField name="kmsHasta" type="number" label="kms hasta" />
        <TextField name="precioDesde" type="number" label="precio desde" />
        <TextField name="precioHasta" type="number" label="precio hasta" />
      </div>
      <Button variant="outlined" type="submit">
        APLICAR
      </Button>
    </form>
  );
}
