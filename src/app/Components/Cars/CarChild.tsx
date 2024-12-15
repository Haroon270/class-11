import React from 'react'
import Image from 'next/image'
import CarParent from './CarParent'

interface carChildProps{
    carName?:string ,
    carImage?:any,
    carPrice?:string,
    carReviews?:string,



}
function CarChild({carName, carImage, carPrice, carReviews,}:carChildProps) {
   

  return ( 
    <div className='w-10/12 flex justify-around pt-10' > 
        <div className='flex flex-col items-center justify-center pt-2 pb-5 border w-64 h-auto border-blue-400  '>
            <h1 className='text-red-600 text-lg font-bold'>{carName}</h1>
            <div> <Image src={carImage} alt={"Car Image"} width={240} height={280}/></div>
            <h1>Price: {carPrice}</h1>
            <h1>Reviews: <span className='text-yellow-600'>★★★☆☆</span></h1>


        </div>
    
    </div>
  )
}

export default CarChild
