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

export interface CarDataset {
  model: string;
  cars: Car[];
}

// export default function Chart({ cars }: { cars: Car[] }) {
export default function Chart({ carDatasets }: { carDatasets: CarDataset[] }) {
  const colors = ["#FA7070", "#2C7865", "#401F71", "#008DDA", "#FCDC2A"];
  return (
    <ResponsiveContainer width="100%" height={800} style={{ padding: "2rem" }}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <Legend />
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Kms" unit="km" />
        <YAxis type="number" dataKey="y" name="Precio" unit="ARS$" />
        <Tooltip
          content={({ payload }) => {
            if (payload) {
              return <>{<CarTooltip point={payload[0]} />}</>;
            }
          }}
        />
        {carDatasets?.map((carDataset, index) => (
          <Scatter
            key={carDataset.model}
            name={`${carDataset.model} (${carDataset.cars.length})`}
            fill={colors[index]}
            data={carDataset.cars.map((car) => ({
              x: car.kms,
              y: car.price,
              ...car,
            }))}
            onClick={(e) => {
              console.log(e);
              const car: Car = e.payload;
              window.open(car.link, "_blank");
            }}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}
// function CarTooltip({ point }: { point: { name: string; unit: string } }) {
function CarTooltip({ point }: { point: Payload<ValueType, NameType> }) {
  const car: Car = point?.payload;
  return (
    <div>
      {car && (
        <div className="flex flex-col items-center bg-white rounded-md h-fit w-48 shadow-md pt-2">
          <Image
            src={car.thumbnail}
            alt="car"
            width={284}
            height={214}
            className="shadow-md"
          />
          <div className="flex flex-col p-3  w-full gap-2 text-center">
            {/* <span className="font-medium overflow-hidden">{car?.title}</span> */}
            <span className="text-center text-lg">ARS${car.price}</span>
            <span>{car.kms} kms</span>
            <span>{car.year}</span>
            {/* <div className="flex justify-between"></div> */}
          </div>
        </div>
      )}
    </div>
  );
}
