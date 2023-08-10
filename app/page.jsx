import { Hero, SearchBar, CustomFilter, CustomButton } from "@components";
import CarContainer from "@components/CarContainer";
import { fuels, yearsOfProduction } from "@constants";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-semibold">Cars Catalogue</h1>
            <p>Explore the cars you might likes</p>
          </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
          <CarContainer />
          <div className="mt-8 flex justify-center items-center">
             <CustomButton title='Show More' containerStyles='text-white rounded-full  bg-primary-blue' />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
