/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AvFilter, Car, CarResult, SearchResponse } from "@/interfaces";
import { formatCar } from "@/utils/format";
import { Button, TextField } from "@mui/material";
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";

export default function SearchBar({
  amount,
  setCars,
  setFilters,
  queryFilter,
}: {
  amount: number;
  setCars: Dispatch<SetStateAction<Car[]>>;
  setFilters: Dispatch<SetStateAction<AvFilter[]>>;
  queryFilter: {
    [k: string]: FormDataEntryValue;
  };
}) {
  const [query, setQuery] = useState<string>("");
  const [offset, setOffset] = useState(0);
  // const [filters, setFilters] = useState<AvFilter[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setCars([]);
    setOffset(0);
    getCars();
  };

  function getQueryString() {
    let queryString = "";
    for (const key in queryFilter) {
      queryString = queryString.concat(`${key}=${queryFilter[key]}&`);
    }
    return queryString;
  }

  async function searchCars() {
    const queryString = getQueryString();
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    console.log({ BASE_URL });
    // const BASE_URL = "https://search-car-xi.vercel.app/";
    // const res = await fetch(
    //   `http://localhost:3000/api/search?${queryString}car=${query}&offset=${offset}`
    // );
    const res = await fetch(
      `${BASE_URL}api/search?${queryString}car=${query}&offset=${offset}`
    );
    const data = (await res.json()) as SearchResponse;
    console.log("filters", data.available_filters);
    return data;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getCars() {
    const response = await searchCars();
    const cars = response.results.map((result) => formatCar(result));
    setCars((prev) => [...prev, ...cars]);
    if (response.paging.total > amount) {
      setOffset((prev) => prev + 50);
    } else {
      setFilters(response.available_filters);
    }
  }

  useEffect(() => {
    if (query != "") {
      getCars();
    }
  }, [offset]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <TextField
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.currentTarget.value);
          }}
        />
        <Button type="submit" variant="outlined">
          Search
        </Button>
        {/* <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setOffset(0);
            setQuery("");
            setCars([]);
          }}
        >
          BORRAR
        </Button> */}
      </form>
    </div>
  );
}
