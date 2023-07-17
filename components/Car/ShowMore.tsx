"use client "
import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "../CustomButton";
import { updateSearchParams } from "@/utils";


const ShowMore = ({isNext, pageNumber}:ShowMoreProps) => {
  const router = useRouter();
  
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10; 
    const newPathname =  updateSearchParams("limit", `${newLimit}`)

    router.push(newPathname)
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