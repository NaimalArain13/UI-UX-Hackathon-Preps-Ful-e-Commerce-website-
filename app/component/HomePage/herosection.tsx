import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RiAppleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import SidebarComponent from "./sideBar";


export default function HeroSection(){
    return(
        <div className='max-w-7xl mx-auto w-full md:py-7 flex  text-white'>
            <SidebarComponent />
            <div className=" w-0 border-l border-gray-400 md:pl-3"></div>
        <div className=' bg-Button flex flex-col md:flex-row md:justify-between justify-center gap-9 md:gap-6 p-7'>
       <div className='md:w-1/2 w-full flex flex-col gap-5 md:items-start items-center justify-center'>
       <p className='flex items-center gap-4'><RiAppleLine size={48}/> iPhone 14 Series</p>
       <h1 className='font-semibold  text-2xl sm:text-4xl md:text-[48px] md:leading-snug'>Up to 10% off Voucher</h1>
       
      
        <Button className="underline underline-offset-4 outline-none border-none cursor-pointer  bg-transparent">Shop Now <FaArrowRightLong size={24}/></Button>

       </div>
       <div className='md:w-1/2 w-full flex items-center justify-center'>
        <Image src={"/images/heroBanner.png"} alt="Frame Image" width={600} height={420}/>
       </div>
       </div>
    </div>
    )
}