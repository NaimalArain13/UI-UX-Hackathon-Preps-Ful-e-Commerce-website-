"use client"
import {useRouter} from "next/navigation";

export default function TopBar() {
  const router = useRouter()
    return (
      <div className="hidden md:flex w-full bg-Button text-Primary text-sm">
        <div className="w-full max-w-[1440px] mx-auto flex justify-end items-center gap-[231px] py-2 px-4">
          {/* Promotional Message */}
          <div className="">
            Summer Sale for All Swim Suits And Free Express Delivery — OFF 50%!{" "}
            <span onClick={()=>router.push("/cart")} className="underline cursor-pointer">Shop Now</span>
          </div>
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            
            <select
              className="bg-Button text-Primary border-none outline-none cursor-pointer"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="cn">Chinese</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  