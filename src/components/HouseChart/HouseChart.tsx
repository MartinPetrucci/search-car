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
import { BACKEND_URL, P_BACKEND_URL } from "@/utils/meli";
import { useState } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";

export interface HouseDataset {
  neighborhood: string;
  houses: Property[];
}

export default function HouseChart({
  houseDatasets,
}: {
  houseDatasets: Properties[];
}) {
  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const [activeHouse, secActiveHouse] = useState<Row | undefined>();

  const colors = ["#FA7070", "#2C7865", "#401F71", "#008DDA", "#FCDC2A"];
  return (
    <>
      {/* <SideDrawer
        open={drawerOpen}
        toggleDrawer={() => {
          setDrawerOpen(!drawerOpen);
        }}
        car={activeHouse}
      /> */}
      <ResponsiveContainer
        width="100%"
        height={800}
        style={{ fontSize: ".75rem", padding: "1rem" }}
      >
        <ScatterChart>
          <Legend />
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Precio" unit="ARS$" />
          <YAxis type="number" dataKey="y" name="Supercifie" unit="m2" />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload[0]) {
                const car: Car = payload[0].payload;
                return <>{<CarTooltip car={car} />}</>;
              }
            }}
          />
          {houseDatasets?.map((houseDataset, index) => (
            <>
              <Scatter
                key={houseDataset.propertyType}
                name={`${houseDataset.propertyType} (${houseDataset.results.length})`}
                fill={colors[index]}
                data={houseDataset.results.map((house) => ({
                  x: house.price,
                  y: house.totalArea,
                  ...house,
                }))}
                onClick={(e) => {
                  const house: Property = e.payload;
                  console.log(house);
                  window.open(house.permalink, "_blank");
                }}
              />
            </>
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
}
