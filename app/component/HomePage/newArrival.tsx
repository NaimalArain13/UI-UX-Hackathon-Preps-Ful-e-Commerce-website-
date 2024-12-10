import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
function NewArrival() {
  return (
    <div className="mx-auto w-full h-auto max-w-7xl py-12">
   
    <div className="py-4">
    <div className="flex flex-col gap-5 py-4">
        <div className="flex items-center gap-2">
          <div className="bg-Button2 rounded w-4 h-10 border border-Button2"></div>{" "}
          <h1 className="font-sm  text-Secondary2">Featured</h1>
        </div>
        
        <div>
          <h1 className="font-semibold text-[36px]">New Arrival</h1>
        </div>
    </div>
    <div className='grid grid-cols md:grid-cols-4 md:grid-rows-2 gap-[25px]'>
     <div className='grid col-span-2 row-span-2 bg-black relative'>
        <div>
        <Image src={"/images/playStation.png"} alt='Box 1' width={511} height={511} 
        className='flex items-end justify-end'/>
        </div>
        <div className='absolute bottom-2 left-2 p-2 space-y-4 text-Primary'>
            <h1 className='font-semibold text-2xl'>PlayStation 5</h1>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <MyButton />
        </div>
     </div>
     <div className='grid col-span-2 row-span-1 bg-black relative'>
   <Image src="/images/womanHat.png" alt="Box 2" width={432} height={286} 
   className="justify-self-end"/>
    <div className='absolute bottom-2 left-2 p-2 space-y-4 text-Primary'>
        <h1 className='font-semibold text-2xl'>Women's Collections</h1>
        <p className='text-sm'>Featured woman collections that give you another vibe.</p>
        <MyButton />
    </div>
</div>
     <div className='grid col-span-1 row-span-1 bg-black relative'>
     <Image src={"/images/speakers.png"} alt='Box 3' width={210} height={222} className='justify-self-center self-center'/>
        <div className='absolute bottom-2 left-2 p-2 space-y-4 text-Primary'>
            <h1 className='font-semibold text-2xl'>Speakers</h1>
            <p className='text-sm'>Amazon wireless speakers</p>
            <MyButton  />
        </div>
     </div>
     <div className='grid col-span-1 row-span-1 bg-black relative'>
     <Image src={"/images/perfumes.png"} alt='Box 4' width={210} height={222} className='justify-self-center self-center'/>
        <div className='absolute bottom-2 left-2 p-2 space-y-4 text-Primary'>
            <h1 className='font-semibold text-2xl'>Perfume</h1>
            <p className='text-sm'>GUCCI INTENSE OUD EDP</p>
            <MyButton />
        </div>
     </div>
     </div>
     
    </div>
    
  </div>
  )
}

export default NewArrival

const MyButton = ()=>{
        return(
           
                <Button variant="outline" className='px-5 p-1 bg-transparent'>Shop Now</Button>
            
        )
}