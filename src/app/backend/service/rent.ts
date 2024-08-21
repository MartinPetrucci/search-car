import { ML_BASE_URL } from "@/utils/meli";
import { DTOtoEntity, filterProperty } from "../mapper/rent";

export async function getRentProperties(
  category: string,
  coordinates: string,
  offset: number
) {
  const url = new URL(`${ML_BASE_URL}/sites/MLA/search`);
  url.searchParams.append("category", category);
  url.searchParams.append("item_location", coordinates);
  url.searchParams.append("offset", offset.toString());
  const res = await fetch(url.toString());
  const data = (await res.json()) as APIResponse;
  return data;
}

export async function getAllRentProperties(
  category: string,
  coordinates: string,
  offset: number,
  allProperties: PropertyDTO[]
) {
  const data = await getRentProperties(category, coordinates, offset);
  if (data && data.results) {
    allProperties.push(...data.results);
  }
  console.log(allProperties.length);
  console.log(`TOTAL ${category} ->`, data.paging.total);
  if (
    allProperties.length < data?.paging?.total &&
    offset < data?.paging?.total
  ) {
    return getAllRentProperties(
      category,
      coordinates,
      offset + 50,
      allProperties
    );
  }
  return allProperties;
}

const alquilerDeptoCategory = "MLA1473";
const alquilerHouseCategory = "MLA1467";
const alquilerPHCategory = "MLA105181";

export async function getPropertiesByType(
  coordinates: string,
  maxPrice: string,
  minSpace: string
) {
  const houseResults: PropertyDTO[] = [];
  await getAllRentProperties(
    alquilerHouseCategory,
    coordinates,
    0,
    houseResults
  );
  const deptoResults: PropertyDTO[] = [];
  await getAllRentProperties(
    alquilerDeptoCategory,
    coordinates,
    0,
    deptoResults
  );
  const phResults: PropertyDTO[] = [];
  await getAllRentProperties(alquilerPHCategory, coordinates, 0, phResults);
  const properties: Properties[] = [
    {
      propertyType: "Casa",
      categoryID: alquilerHouseCategory,
      amount: houseResults.length,
      results: houseResults
        .map((property) => DTOtoEntity(property))
        .filter((property) => filterProperty(property, maxPrice, minSpace)),
    },
    {
      propertyType: "Departamento",
      categoryID: alquilerDeptoCategory,
      amount: deptoResults.length,
      results: deptoResults
        .map((property) => DTOtoEntity(property))
        .filter((property) => filterProperty(property, maxPrice, minSpace)),
    },
    {
      propertyType: "PH",
      categoryID: alquilerPHCategory,
      amount: phResults.length,
      results: phResults
        .map((property) => DTOtoEntity(property))
        .filter((property) => filterProperty(property, maxPrice, minSpace)),
    },
  ];
  return properties;
}
