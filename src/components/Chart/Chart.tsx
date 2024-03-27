import { Car } from "@/interfaces";
import { formatAmount } from "@/utils/format";
import Image from "next/image";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { CarTooltip } from "../CarTooltip/CarTooltip";

export interface CarDataset {
  model: string;
  cars: Car[];
}

// export default function Chart({ cars }: { cars: Car[] }) {
export default function Chart({ carDatasets }: { carDatasets: CarDataset[] }) {
  async function addToFav(car: Car) {
    // const { title, price, kms, link } = car;
    const b = "http://localhost:3000/";
    const res = await fetch(`${b}api/fav-cars`, {
      method: "POST",
      body: JSON.stringify(car),
    });
    const data = await res.json();
    console.log({ data });
  }

  const colors = ["#FA7070", "#2C7865", "#401F71", "#008DDA", "#FCDC2A"];
  return (
    <ResponsiveContainer
      width="100%"
      height={800}
      style={{ fontSize: ".75rem", padding: "1rem" }}
    >
      <ScatterChart
      // margin={{
      //   top: 20,
      //   right: 20,
      //   bottom: 20,
      //   left: 20,
      // }}
      >
        <Legend />
        <CartesianGrid />
        {/* <XAxis type="number" dataKey="x" name="Kms" unit="km" />
        <YAxis type="number" dataKey="y" name="Precio" unit="ARS$" /> */}
        <XAxis type="number" dataKey="x" name="Precio" unit="ARS$" />
        <YAxis type="number" dataKey="y" name="Kms" unit="km" />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload[0]) {
              const car: Car = payload[0].payload;
              return <>{<CarTooltip car={car} />}</>;
            }
          }}
        />
        {carDatasets?.map((carDataset, index) => (
          <Scatter
            key={carDataset.model}
            name={`${carDataset.model} (${carDataset.cars.length})`}
            fill={colors[index]}
            data={carDataset.cars.map((car) => ({
              x: car.price,
              y: car.kms,
              ...car,
            }))}
            onClick={(e) => {
              console.log(e);
              const car: Car = e.payload;
              addToFav(car);
              // window.open(car.link, "_blank");
            }}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}
// function CarTooltip({ point }: { point: { name: string; unit: string } }) {
// function CarTooltip({ point }: { point: Payload<ValueType, NameType> }) {
