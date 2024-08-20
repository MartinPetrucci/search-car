import { ML_BASE_URL, MLAuth } from "@/utils/meli";
import { NextResponse } from "next/server";

// https://developers.mercadolibre.com.ar/es_ar/localiza-inmuebles
export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const maxPrice = searchParams.get("maxPrice");
  const minSpace = searchParams.get("minSpace");
  const alquilerCategory = "MLA1473";
  const triunviratoYBeiro = "-34.58144677298442, -58.47429658096765";
  const lopeDeVegaYBeiro = "-34.61386385326509, -58.5251418750388";
  const coordinates = getCoordinates(lopeDeVegaYBeiro, triunviratoYBeiro);
  const allResults = await fetchAllResults(
    coordinates,
    alquilerCategory,
    0,
    []
  );
  if (!maxPrice) {
    return NextResponse.json(allResults);
  }
  if (!minSpace) {
    return NextResponse.json(allResults);
  }

  const filteredResults = allResults.filter((result) => {
    const totalArea =
      result.attributes.find((attr) => attr.id == "TOTAL_AREA")?.value_struct
        ?.number ?? 1;
    return (
      result.price <= parseFloat(maxPrice) && totalArea >= parseInt(minSpace)
    );
  });
  return NextResponse.json(filteredResults);
}

async function fetchAllResults(
  coordinates: string,
  category: string,
  offset: number,
  allData: Result[]
): Promise<Result[]> {
  const url = new URL(`${ML_BASE_URL}/sites/MLA/search`);
  url.searchParams.append("category", category);
  url.searchParams.append("item_location", coordinates);
  url.searchParams.append("offset", offset.toString());

  const res = await fetch(url.toString());
  const data = (await res.json()) as APIResponse;

  if (data && data.results) {
    allData.push(...data.results); // Accumulate results
  }

  if (allData.length < data?.paging?.total && offset < data?.paging?.total) {
    return fetchAllResults(coordinates, category, offset + 50, allData);
  }
  const dollarQuote = 1290;
  return allData.map((result) => {
    const price =
      result.currency_id == "ARS" ? result.price : result.price * dollarQuote;
    const totalArea =
      result.attributes.find((attr) => attr.id == "TOTAL_AREA")?.value_struct
        ?.number ?? 1;
    const relation = price / totalArea;
    return {
      ...result,
      price: price,
      pricePerSquareMeter: Number.parseFloat(relation.toFixed(2)),
    };
  });
}

function getCoordinates(p1: string, p2: string): string {
  const [lat1, lon1] = p1.split(", ");
  const [lat2, lon2] = p2.split(", ");
  return `lat:${lat1}_${lat2},lon:${lon1}_${lon2}`;
}
