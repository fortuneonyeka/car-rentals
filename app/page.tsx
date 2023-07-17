"use client"
import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fuels, yearsOfProduction } from '@/constants/constants';
import { useState, useEffect } from 'react';
import { CarProps } from '@/types';
import { fetchCars } from '@/utils';
import {ShowMore} from '@/components';
import Loader from "../public/loader.jpeg"
import Image from 'next/image';
import { CarState } from '@/types';

export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManuFacturer] = useState("")
  const [year, setYear] = useState(2022)
  const [fuel, setFuel] = useState("")
  const [model, setModel] = useState("")
  const [limit, setLimit] = useState(10)



  useEffect(() => {
    
    getCars();
  }, [year, fuel, limit, manufacturer, model]);

  const getCars = async () => {
    setLoading(true)
   try {
    const result = await fetchCars({
      manufacturer: manufacturer || "",
      year: year || 2022,
      fuel: fuel || "",
      limit:limit || 10,
      model: model || "",
     })
  
     setAllCars(result)
   } catch (error) {
    console.log(error);
    
   } finally {
    setLoading(false)
   }
  };


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>explore the best cars in town</p>
        </div>

        <div className='home__filters'>
          <SearchBar  setManuFacturer={setManuFacturer}
          setModel={setModel} 
         
          />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction}  setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car: CarProps) => <CarCard car={car} key={car.id} />)}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image  src={Loader.src} alt="loader"
               width={50} height={50} className='object-contain'
                />
              </div>
            )}

            <ShowMore  pageNumber={limit / 10 }
              isNext= {limit > allCars.length}
              setLimit={setLimit}
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
