import React from 'react'
import Image from "next/image"
function Bottom() {
    const buttons:Props[]=[
        {
            image:"/images/icon-delivery.png",
            title:"FREE AND FAST DELIVERY",
            description:"Free delivery for all orders over $140"
        },
        {
            image:"/images/Icon-Customer service.png",
            title:"24/7 CUSTOMER SERVICE",
            description:"Friendly 24/7 customer support"
        },
        {
            image:"/images/Icon-secure.png",
            title:"MONEY BACK GUARANTEE",
            description:"We reurn money within 30 days"
        },
    ]
  return (
    <div className='grid grid-cols md:grid-cols-3 py-7 gap-[26px] mx-auto w-full'>
        {buttons.map((button, index)=>(
            <BottomComponent key={index} {...button} />
        ))}
    </div>
  )
}

export default Bottom

interface Props {
    image:string;title:string;description:string
}
 const BottomComponent = ({image,title,description}:Props)=>{
    return(
    <div className='flex flex-col space-y-2 items-center justify-center py-4'>
        <div className='w-12 h-12 rounded-full bg-Text1 flex items-center justify-center'>
        <Image 
        src={image}
        alt={title}
        width={38}
        height={38} 
        className='rounded-full bg-Button p-2'
        />
        </div>
        <h1 className='text-[26px] font-semibold'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
    )
}