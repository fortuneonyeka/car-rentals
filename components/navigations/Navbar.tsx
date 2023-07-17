import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from '../CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image src="/rent-logo.jpeg" alt='logo'
          height={18}
          width={118}
          className='object-contain'
          />
        </Link>
        <CustomButton title="Sign In"
        btnType="button"
        containerStyles='text-indigo-400 hover:bg-indigo-200 rounded-full
        bg-white min-w-[30px] max-h-[40px] text-xl'
        />
      </nav>
    </header>
  )
}

export default Navbar