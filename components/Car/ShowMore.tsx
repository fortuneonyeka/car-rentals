"use client "
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "../CustomButton";


const ShowMore = ({isNext, setLimit, pageNumber}:ShowMoreProps) => {
 
  
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; 
   setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
          <CustomButton title="Show More" btnType="button" containerStyles="bg-indigo-600 hover:bg-indigo-200  rounded-full " 
          textStyle="text-white hover:text-indigo-600"
          handleClick={handleNavigation}
          />
        )}
    </div>
  )
}

export default ShowMore