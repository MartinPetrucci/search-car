/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AvFilter, Car, CarResult, SearchResponse } from "@/interfaces";
import { useAuth } from "@/store/authContext";
import { formatCar } from "@/utils/format";
import { BACKEND_URL, P_BACKEND_URL } from "@/utils/meli";
import { Button, CircularProgress, TextField } from "@mui/material";
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CarDataset } from "../Chart/Chart";

export default function SearchBar({
  carDatasets,
  setCarDatasets,
}: {
  carDatasets: CarDataset[];
  setCarDatasets: Dispatch<SetStateAction<CarDataset[]>>;
}) {
  const [query, setQuery] = useState<string>("");
  const [offset, setOffset] = useState(0);
  const amount = useMemo(
    () =>
      carDatasets.find((dataSet) => dataSet.model == query)?.cars.length || 0,
    [carDatasets]
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setOffset(0);
    getCars();
  };

  async function searchCars() {
    const res = await fetch(
      `${P_BACKEND_URL}/api/search?car=${query}&offset=${offset}`
    );
    const data = (await res.json()) as SearchResponse;
    return data;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getCars() {
    const response = await searchCars();
    const resultCars = response.results?.map((result) => formatCar(result));
    if (resultCars.length > 0) {
      setCarDatasets((prev) => {
        if (offset == 0) {
          return [...prev, { model: query, cars: resultCars }];
        }
        return prev.map((d) => {
          if (d.model == query) {
            return { model: query, cars: [...d.cars, ...resultCars] };
          }
          return d;
        });
      });

      if (response.paging.total > amount) {
        setOffset((prev) => prev + 50);
      }
    }
  }

  useEffect(() => {
    if (query != "") {
      getCars();
    }
  }, [offset]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <TextField
          className="w-full"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={carDatasets.length >= 5}
        >
          Search
        </Button>
      </form>
    </div>
  );
}
