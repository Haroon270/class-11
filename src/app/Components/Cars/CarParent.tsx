import React from 'react'

import Suzuki from "../../../../public/carphotos/Suzuki.png";
import Suzuki_Cultus from "../../../public/Cultus.png";
import Fortuner from "../../../public/carphotos/Fortuner.png";
import Alsvin from "../../../public/carphotos/Alsvin.png";
import CarChild from './CarChild';
function CarParent() {
    const carsData = [
        {
          carName: "Suzuki Alto",
          carImage: "/Suzuki.png",
          carPrice: "PKR 23.3 - 30.5 lacs",
          carReviews: "202 Reviews",
        },
    
        {
          carName: "Suzuki Cultus",
          carImage: "/Cultus.png",
          carPrice: "PKR 38.6 - 45.5 lacs",
          carReviews: "4 star",
        },
        {
          carName: "Fortuner",
          carImage: "/Fortuner.png",
          carPrice: "PKR 1.45 - 1.99 crore",
          carReviews: "4 star",
        },
        {
          carName: "Changan Alsvin",
          carImage: "/Alsvin.png",
          carPrice: "PKR 38.0 - 45.7 lacs",
          carReviews: "4 star",
        },
      ]
  return (
<div><h1 className='text-center pt-6 font-bold text-green-700 text-3xl underline bg-slate-200 p-4 px-6'>Assignment No 05 Using Props & .map method 
</h1>
    <div  className=' flex flex-col md:flex md:flex-row justify-center items-center mx-auto'>
         {carsData.map((carinfo)=>{return(
          
             <CarChild 
             key={carinfo.carName}
             carName={carinfo.carName}
             carImage={carinfo.carImage}
             carPrice={carinfo.carPrice}
             carReviews={carinfo.carReviews}/>)

         })}
  </div>
  </div>
  )
}

export default CarParent
