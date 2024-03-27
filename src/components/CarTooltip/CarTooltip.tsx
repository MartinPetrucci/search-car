import { Car } from "@/interfaces";
import Image from "next/image";

export function CarTooltip({ car }: { car: Car }) {
  // const car: Car = point?.payload;
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
