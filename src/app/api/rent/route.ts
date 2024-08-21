import {
  getAllRentProperties,
  getPropertiesByType,
} from "@/app/backend/service/rent";
import { NextResponse } from "next/server";
import { DTOtoEntity, getCoordinates } from "@/app/backend/mapper/rent";

const triunviratoYBeiro = "-34.58144677298442, -58.47429658096765";
const lopeDeVegaYBeiro = "-34.61386385326509, -58.5251418750388";
const coordinates = getCoordinates(lopeDeVegaYBeiro, triunviratoYBeiro);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const minSpace = searchParams.get("minSpace") ?? "";
  const properties = await getPropertiesByType(coordinates, maxPrice, minSpace);
  return NextResponse.json(properties);
}
