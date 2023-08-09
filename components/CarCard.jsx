import Image from "next/image";
import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{car.model}</h2>
      </div>
      <p className="flex font-extrabold mt-6 text-[32px] leading-[38px]">
        <span className="self-start text-[14px] leading-[17px] font-semibold ">
          $
        </span>
        52
        <span className="self-end text-[14px] leading-[17px] font-medium ">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          fill
          className="object-contain"
          alt="car_photo"
        />
      </div>
      <div className="flex mt-2 w-full relative">
        <div className="w-full flex group-hover:invisible justify-between">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>Automatic</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>FWD</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              className="object-contain"
            />
            <p>19 MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container ">
          <button className="custom-btn w-full py-[16px] rounded-full bg-primary-blue ">
            <span className="text-white">View More</span>
            <div className="relative -right-28 h-6 w-6">
              <Image
                src="/right-arrow.svg"
                fill
                alt="right-button"
                className=" object-contain text-white"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
