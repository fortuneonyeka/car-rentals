"use client";
import { useState } from "react";
import CarImage from "../../public/hero.png";
import Steering from "../../public/steering-wheel.svg";
import Tire from "../../public/tire.svg";
import Gas from "../../public/gas.svg";
import Image from "next/image";
import CustomButton from "../CustomButton";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold text-blue-600">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium text-green-400">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={CarImage} alt="car model" fill priority />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center item-center gap-2">
            <Image
              src={Steering}
              width={20}
              height={20}
              alt="steering wheel"
              className="mx-auto"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manuel"}
            </p>
          </div>
          <div className="flex flex-col justify-center item-center gap-2">
            <Image
              src={Tire}
              width={20}
              height={20}
              alt="steering wheel"
              className="mx-auto"
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center item-center gap-2">
            <Image
              src={Gas}
              width={20}
              height={20}
              alt="steering wheel"
              className="mx-auto"
            />
            <p className="text-[14px] text-red-600">{city_mpg}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full rounded-full py-[16px] bg-indigo-400
              hover:bg-indigo-200 "
            textStyle="text-white text-[14px] leading-[17px] font-bold hover:text-blue-600"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={closeModal} car={car}/>
    </div>
  );
};

export default CarCard;
