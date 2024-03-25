/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { AvFilter, Car, CarResult, SearchResponse } from "@/interfaces";
import { useAuth } from "@/store/authContext";
import { formatCar } from "@/utils/format";
import { BASE_URL } from "@/utils/meli";
import { Button, TextField } from "@mui/material";
import {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { CarDataset } from "../Chart/Chart";

export default function SearchBar({
  amount,
  setCars,
  setCarDatasets,
}: // setFilters,
// queryFilter,
{
  amount: number;
  setCars: Dispatch<SetStateAction<Car[]>>;
  setCarDatasets: Dispatch<SetStateAction<CarDataset[]>>;
  // setFilters: Dispatch<SetStateAction<AvFilter[]>>;
  // queryFilter: {
  //   [k: string]: FormDataEntryValue;
  // };
}) {
  // const { state } = useAuth();

  const [query, setQuery] = useState<string>("");
  const [offset, setOffset] = useState(0);
  // const [filters, setFilters] = useState<AvFilter[]>([]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log("token from component", state.accessToken);
    setCars([]);
    // setCarDataset((prev) => ({ ...prev, cars: [] }));
    setOffset(0);
    getCars();
  };

  // function getQueryString() {
  //   let queryString = "";
  //   for (const key in queryFilter) {
  //     queryString = queryString.concat(`${key}=${queryFilter[key]}&`);
  //   }
  //   return queryString;
  // }

  async function searchCars() {
    // const queryString = getQueryString();
    const res = await fetch(
      `${BASE_URL}api/search?car=${query}&offset=${offset}`
    );
    const data = (await res.json()) as SearchResponse;
    return data;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getCars() {
    const response = await searchCars();
    const resultCars = response.results?.map((result) => formatCar(result));
    if (resultCars.length > 0) {
      setCars((prev) => [...prev, ...resultCars]);
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
        // const desireDataset = prev.find((d) => d.model == query);
        // if (desireDataset) {
        //   return [
        //     ...prev,
        //     { ...desireDataset, cars: [...desireDataset.cars, ...resultCars] },
        //   ];
        // }
        // return prev;
      });
      // setCarDataset((prev) => ({
      //   model: query,
      //   cars: [...prev.cars, ...resultCars],
      // }));
      if (response.paging.total > amount) {
        setOffset((prev) => prev + 50);
      } else {
        // setFilters(response.available_filters);
      }
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
      </form>
    </div>
  );
}
