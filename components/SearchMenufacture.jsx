"use client";
import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@constants";

const SearchMenufacture = ({ menufacturer, setmenufacturer }) => {
  const [query, setquery] = useState("");

  const filteredManufacturer =
    query === ""
      ? manufacturers
      : manufacturers.filter((menu) => {
          return menu.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="search-manufacturer">
      <Combobox value={menufacturer} onChange={setmenufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input "
            placeholder="Volkswagon"
            displayValue={(manufacturer) => manufacturer}
            onChange={(e) => setquery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setquery("")}
          >
            <Combobox.Options
              className=" m-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-1 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturer.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Create '{query}'
                </Combobox.Option>
              ) : (
                filteredManufacturer.map((menu) => (
                  <Combobox.Option
                    key={menu}
                    value={menu}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      } `
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {menu}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}

                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMenufacture;
