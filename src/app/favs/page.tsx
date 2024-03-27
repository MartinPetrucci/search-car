import { CarTooltip } from "@/components/CarTooltip/CarTooltip";
import { Car } from "@/interfaces";
import { BASE_URL } from "@/utils/meli";

export default async function FavCarsPage() {
  // const res = await fetch(`${BASE_URL}/api/fav-cars`);
  const res = await fetch(`https://search-car-xi.vercel.app/api/fav-cars`);
  const favCars = (await res.json()) as Car[];
  console.log({ data: favCars });
  return (
    <main>
      <h1>hola</h1>
      {favCars && favCars.length > 0 && (
        <div>
          {favCars.map((car) => (
            <CarTooltip key={car.id} car={car} />
          ))}
        </div>
      )}
      {JSON.stringify(favCars)}
    </main>
  );
}
