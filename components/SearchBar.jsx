"use client";
import React, { useState } from "react";
import SearchMenufacture from "./SearchMenufacture";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [menufacturer, setmenufacturer] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (menufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(model.toLowerCase(),menufacturer.toLowerCase())
  };
  const updateSearchParams = (model, menufacturer) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (menufacturer) {
      searchParams.set("menufacturer", menufacturer);
    } else {
      searchParams.delete("menufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenufacture
          menufacturer={menufacturer}
          setmenufacturer={setmenufacturer}
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 "
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setmodel(e.target.value)}
          placeholder="Tiaguan"
          className="searchbar__input"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
