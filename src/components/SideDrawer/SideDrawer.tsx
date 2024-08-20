// import "./drawer.css";

import { Car } from "@/interfaces";
import { Box, Button, Drawer } from "@mui/material";
import Image from "next/image";
import { P_BACKEND_URL } from "@/utils/meli";
interface Props {
  open: boolean;
  toggleDrawer: () => void;
  car: Car | undefined;
}
export default function SideDrawer({ open, toggleDrawer, car }: Props) {
  async function addToFav(car: Car) {
    const res = await fetch(`${P_BACKEND_URL}/api/fav-cars`, {
      method: "POST",
      body: JSON.stringify(car),
    });
    const data = await res.json();
    console.log({ data });
  }
  return (
    <Drawer
      className="drawer"
      anchor="right"
      open={open}
      onClose={toggleDrawer}
    >
      <Box className="w-96">
        {car && (
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={car.thumbnail}
              alt="car"
              width={320}
              height={150}
              className="shadow-md"
            />
            <h2 className="text-center font-medium text-lg">{car.title}</h2>
            <h2 className="text-center font-medium text-lg">AR${car.price}</h2>
            <span>{car.kms} kms</span>
            <span>{car.year}</span>
            <div className="flex justify-between gap-4 p-2">
              <Button
                variant="outlined"
                onClick={() => {
                  window.open(car.link, "_blank");
                }}
              >
                VER EN MERCADO LIBRE
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  addToFav(car);
                }}
              >
                AÑADIR A FAVORITOS
              </Button>
            </div>
          </div>
        )}
      </Box>
    </Drawer>
  );
}
