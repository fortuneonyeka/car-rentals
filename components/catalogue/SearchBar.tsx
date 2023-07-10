"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchBtnImg from "../../public/magnifying-glass.svg"
import modelIcon from "../../public/model-icon.png"
import Image from "next/image";

const SearchButton = ({otherClasses}:{otherClasses: string}) => (
  <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
    <Image  src={SearchBtnImg} width={40} height={40} alt="serach btn" className="object-contain"/>
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const handleSearch = () => {};

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden"/>
      </div>

      <div className="searchbar__item">
          <Image  src={modelIcon} alt="modelIcon" width={25} height={25} className="absolute w-[25px] h-[25px] ml-2"/>
          <input type="text" name="model" value={model}
          onChange={(e) => setModel(e.target.value)} placeholder="G Class"
          className="searchbar__input"/>

          <SearchButton otherClasses="sm:hidden md:block"/>
      </div>
          {/* <SearchButton otherClasses="max-sm:hidden"/> */}
    </form>
  );
};

export default SearchBar;
