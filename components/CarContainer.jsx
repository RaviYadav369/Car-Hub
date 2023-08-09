"use client";
import { fetchCarsData } from "@utils/fetchcars";
import React from "react";
import CarCard from "./CarCard";

const CarContainer = async () => {
  const allCars = await fetchCarsData();
  const isDataempty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  // console.log(cars);
  return (
    <>
      <div className="">
        {!isDataempty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} key={car.id} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <div className="text-black text-xl font-bold">Opps, no results</div>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CarContainer;
