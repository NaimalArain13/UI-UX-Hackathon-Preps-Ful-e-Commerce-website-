import { Button } from "@/components/ui/button";
import Image from "next/image";
import { RiAppleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import SidebarComponent from "./sideBar";


export default function HeroSection(){
    return(
        <div className='max-w-7xl mx-auto w-full py-7 flex  text-white'>
            <SidebarComponent />
            <div className=" w-0 border-l border-gray-400 pl-3"></div>
        <div className=' bg-Button flex justify-between gap-6 p-7'>
       <div className='w-1/2 flex flex-col gap-5 items-start justify-center'>
       <p className='flex items-center gap-4'><RiAppleLine size={48}/> iPhone 14 Series</p>
       <h1 className='font-semibold text-[48px]'>Up to 10% off Voucher</h1>
       
      
        <Button className="underline underline-offset-4 outline-none border-none cursor-pointer  bg-transparent">Shop Now <FaArrowRightLong size={24}/></Button>

       </div>
       <div className='w-1/2 flex items-center justify-center'>
        <Image src={"/images/heroBanner.png"} alt="Frame Image" width={600} height={420}/>
       </div>
       </div>
    </div>
    )
}