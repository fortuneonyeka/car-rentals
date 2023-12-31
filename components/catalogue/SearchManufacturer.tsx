"use client";
import { useState, Fragment } from "react";
import { SearchManuFacturerProps } from "@/types";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { manufacturers } from "@/constants/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManuFacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManaufacturers = query === "" ? manufacturers : manufacturers.filter((item) => (
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  ))

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo2.jpeg"
              alt="car-logo"
              width={20}
              height={20}
              className="ml-4"
            />
            
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Mercedes"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              { filteredManaufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                   {`${query} not found`}
                </div>
              ) : (filteredManaufacturers.map((item) => (
                <Combobox.Option key={item} className={({active}) => `relative 
                search-manufacturer__option ${active ? 
                  "bg-green-600 rounded-xl text-white" : "text-gray-900"}`}
                value={item}>
                  {({selected, active}) => (
                    <>
                     <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5 " aria-hidden="true" />
                          </span>
                        ) : null}
                    </>
              )}
                </Combobox.Option>
              )
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
