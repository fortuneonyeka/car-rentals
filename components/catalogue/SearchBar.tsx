"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import SearchBtnImg from "../../public/magnifying-glass.svg"
import modelIcon from "../../public/model-icon.png"
import Image from "next/image";
import { Router } from "react-router-dom";
import { SearchBarProps } from "@/types";

const SearchButton = ({otherClasses}:{otherClasses: string}) => (
  <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
    <Image  src={SearchBtnImg} width={40} height={40} alt="serach btn" className="object-contain"/>
  </button>
)

const SearchBar = ({setManuFacturer, setModel}: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');

 

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar")
    }

    setModel(searchModel)
    setManuFacturer(searchManufacturer) 
  };

 
  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        selected={searchManufacturer}
        setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>

      <div className="searchbar__item">
          <Image  src={modelIcon} alt="modelIcon" width={25} height={25} className="absolute w-[25px] h-[25px] ml-2"/>
          <input type="text" name="searchModel" value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)} placeholder="G Class"
          className="searchbar__input"/>

          <SearchButton otherClasses="sm:hidden md:block"/>
      </div>
          {/* <SearchButton otherClasses="max-sm:hidden"/> */}
    </form>
  );
};

export default SearchBar;
