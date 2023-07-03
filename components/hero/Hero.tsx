"use client";
import Image from 'next/image'
import CustomButton from '../CustomButton'

const Hero = () => {
const handleScroll = () => {
  
}

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x '>
        <h1 className='hero__title'>Explore the most luxurious car collections</h1>

        <p className='hero__subtitle'> Streamline your car rental experience with our effortless booking process...</p>

        <CustomButton 
        title="Explore Cars" 
        containerStyles="bg-primary-blue text-white 
        px-4 rounded-full"
        handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
          <div className='hero__image'>
              <Image  src="/Rolls-Royce.png" alt='hero'
              fill
              className='object-contain'
              />
          </div>
          <div className='hero__image-overlay'/>
      </div>
    </div>
  )
}

export default Hero