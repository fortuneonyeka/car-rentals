"use client"
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fuels, yearsOfProduction } from '@/constants/constants';
import { useState, useEffect } from 'react';
import { CarProps } from '@/types';
import { fetchCars } from '@/utils';
import {ShowMore} from '@/components';

export default function Home({ searchParams }) {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const fetchData = async () => {
    try {
      const cars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 10,
        model: searchParams.model || "",
      });
      setAllCars(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setAllCars([]);
    }
  };

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>explore the best cars in town</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car: CarProps) => <CarCard car={car} key={car.id} />)}
            </div>

            <ShowMore  pageNumber={(searchParams.limit || 10 ) / 10}
            isNext={(searchParams.limit || 10 ) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-red-600 font-bold text-xl'>Ooops, no car found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}


      </div>
    </main>
  );
}
