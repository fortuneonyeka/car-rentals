"use client"
import {useState, Fragment} from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import upDownArrow from "../../public/chevron-up-down.svg"
import { updateSearchParams } from '@/utils';

export default function CustomFilter<T>({title, options, setFilter}: CustomFilterProps<T>) {
  const [selected, setSelected] = useState(options[0])
  

 
  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e) => {
        setSelected(e);
        setFilter(e.value as unknown as T)
      }}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
              <span className='block truncate'>{selected.title}</span>
              <Image src={upDownArrow} alt='arrow' width={20} height={20} className='object-contain'/>
          </Listbox.Button>

          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
           <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option key={option.title} value={option}
                className={({active}) =>`relative cursor-default select-none py-2 px-4 ${active ? 'bg-indigo-600 text-white rounded-2xl' : 'text-gray-900'}`}>
                  {({selected}) => (
                    <span className={ `block truncate ${selected ? 'font-bold text-green-400' : 'font-normal'}`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
           </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

