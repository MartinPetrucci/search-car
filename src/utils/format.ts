import { Car, CarResult } from "@/interfaces";

function getAttribute(car: CarResult, attr: string): string {
  return (
    car.attributes.find((attribute) => attribute.id === attr)?.value_name || ""
  );
}

export function formatCar(input: CarResult): Car {
  const [kms] = getAttribute(input, "KILOMETERS").split(" ");
  const [power] = getAttribute(input, "POWER").split(" ");
  const year = getAttribute(input, "VEHICLE_YEAR");

  const dollarQuote = 1020;
  const price =
    input.currency_id == "ARS" ? input.price : input.price * dollarQuote;

  const result: Car = {
    id: input.id,
    title: input.title,
    year: parseInt(year),
    kms: parseInt(kms),
    currency_id: "ARS",
    price: parseFloat(price.toFixed(2)),
    power: parseInt(power),
    link: input.permalink,
    relation: price / parseInt(kms),
    thumbnail: input.thumbnail,
  };
  return result;
}

export function formatAmount(number: number): string {
  return (
    number
      // .toFixed(2)
      .toString()
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
}
