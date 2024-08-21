const dollarQuote = 1290;
export function DTOtoEntity(dto: PropertyDTO): Property {
  const {
    title,
    permalink,
    thumbnail,
    currency_id,
    price,
    location,
    attributes,
  } = dto;
  const totalArea =
    getAttribute(attributes, "TOTAL_AREA")?.value_struct?.number ?? 1;
  const realPrice = currency_id === "ARS" ? price : price * dollarQuote;
  const pricePerSquareMeter = Number.parseFloat(
    (realPrice / totalArea).toFixed(2)
  );
  const property: Property = {
    neighborhood: location.neighborhood.name,
    currency_id,
    price: realPrice,
    pricePerSquareMeter,
    coveredArea:
      getAttribute(attributes, "COVERED_AREA")?.value_struct?.number ?? 0,
    totalArea,
    rooms: parseInt(getAttribute(attributes, "ROOMS")?.value_name ?? "0"),
    propertyType: getAttribute(attributes, "PROPERTY_TYPE")?.value_name ?? "",
    title,
    permalink,
    thumbnail,
  };
  return property;
}

export function getCoordinates(p1: string, p2: string): string {
  const [lat1, lon1] = p1.split(", ");
  const [lat2, lon2] = p2.split(", ");
  return `lat:${lat1}_${lat2},lon:${lon1}_${lon2}`;
}

function getAttribute(
  attributes: Attribute[],
  attributeID: string
): Attribute | undefined {
  return attributes.find((attr) => attr.id === attributeID);
}

export function filterProperty(
  property: Property,
  maxPrice: string,
  minSpace: string
): boolean {
  if (maxPrice === "" || minSpace === "") {
    return true;
  }
  return (
    property.price <= parseFloat(maxPrice) &&
    property.totalArea >= parseInt(minSpace)
  );
}
