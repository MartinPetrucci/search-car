import { ML_BASE_URL } from "@/utils/meli";
import { getCoordinates } from "../house/route";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestURL = new URL(request.url);
  const searchParams = requestURL.searchParams;
  const category = searchParams.get("category");

  const triunviratoYBeiro = "-34.58144677298442, -58.47429658096765";
  const lopeDeVegaYBeiro = "-34.61386385326509, -58.5251418750388";
  const coordinates = getCoordinates(lopeDeVegaYBeiro, triunviratoYBeiro);
  const alquilerC = "MLA79243";
  const alquilerCasa = "MLA1467";
  const url = new URL(`${ML_BASE_URL}/sites/MLA/search`);
  url.searchParams.append("category", category ?? "MLA1473");
  url.searchParams.append("item_location", coordinates);

  // url.searchParams.append("offset", offset.toString());
  const casaUrl = new URL(`${ML_BASE_URL}/categories/${category}`);

  // const res = await fetch(url.toString());
  const res = await fetch(casaUrl.toString());
  const data = (await res.json()) as APIResponse;
  return NextResponse.json(data);
}
