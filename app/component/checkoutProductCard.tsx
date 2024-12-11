import React from 'react';
import Image from "next/image";
function CheckoutProductCard( {image,item,price}:{image:string,item:string,price:number}) {
  return (
    <div className='max-w-7xl w-full mx-auto'>
        <div className='flex gap-4 items-center'>
        <div className='w-full flex justify-between items-center'> 
            <div className='flex gap-4 items-center'>
                <Image 
                src={image} alt={item} width={40} height={40}/> <h1>{item}</h1>
            </div>
           
        <div className=''>
            <p>${price}</p>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default CheckoutProductCard