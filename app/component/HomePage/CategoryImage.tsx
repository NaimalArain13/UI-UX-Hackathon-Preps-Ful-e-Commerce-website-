import React from 'react'
import Image from "next/image";
import ButtonComponent from '../button';

function CategoryImage() {
  return (
    <div className='max-w-7xl mx-auto w-full py-7  text-white'>
        <div className=' bg-Button flex justify-between gap-6 p-7'>
       <div className='w-1/2 flex flex-col gap-5'>
       <p className='text-Button1'>category</p>
       <h1 className='font-semibold text-[48px]'>Enhance Your Music Experience</h1>
       <div className='flex gap-5 text-Button'>
        <div className='w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center'>
            <p className='font-semibold'>23</p>
            <p className='text-xs'>Hours</p>
        </div>
        <div className='w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center'>
        <p className='font-semibold'>5</p>
        <p className='text-xs'>Days</p>
        </div>
        <div className='w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center'>
        <p className='font-semibold'>59</p>
        <p className='text-xs'>Minutes</p>
        </div>
        <div className='w-16 h-16 bg-Primary rounded-full flex flex-col items-center justify-center'>
        <p className='font-semibold'>35</p>
        <p className='text-xs'>Seconds</p>
        </div>
       </div>
       <div className='mt-4'>
        <ButtonComponent text={'Buy Now!'}  color='green' padding='px-14 py-4'/>
       </div>
       </div>
       <div className='w-1/2'>
        <Image src={"/images/FrameImage.png"} alt="Frame Image" width={600} height={420}/>
       </div>
       </div>
    </div>
  )
}

export default CategoryImage