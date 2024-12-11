"use client"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { UserPen } from "lucide-react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="top-0 sticky z-10 w-full max-w-[1440px] p-5 mx-auto bg-white border-b border-Button">
      <div className="flex justify-between items-center px-4 ">
        {/* logo */}
        <div className="font-bold text-2xl">Exclusive</div>
        {/* link */}
        <div className="hidden md:flex gap-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
        {/* search and icons */}
        <div className="hidden md:flex gap-3 items-center">
          <div className="relative flex items-center">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="w-[243px] "
            />
            <IoSearchOutline
              size={24}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="md:flex gap-4 hidden">
            <Link href={"/shop/wishlist"}>
            <CiHeart size={28} />
            </Link>
            <Link href={"/shop/wishlist/cart"}>
            <BsCart size={28} />
            </Link>
            <Link  href={"/myAccount"}>
              <UserPen size={28} />
              </Link>
          </div>
          </div>
        {/* Mobile Menu */}
        <button onClick={()=>setIsOpen(!isOpen)} className="block md:hidden text-Button">
          {isOpen?  <AiOutlineClose size={28} />:<AiOutlineMenu size={28} />}
        </button>
        {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6 text-center">
          {/* Close Icon */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-black z-10"
          >
            <AiOutlineClose size={28} />
          </button>


          <Link href={"/"}  className="text-Text2 text-xl font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href={"/about"} className="text-Text2 text-xl font-semibold" onClick={() => setIsOpen(false)}>About</Link>
          <Link href={"/contact"} className="text-Text2 text-xl font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href={"/signup"} className="text-Text2 text-xl font-semibold" onClick={() => setIsOpen(false)}>Sign Up</Link>
          
          <div className="flex flex-row gap-4">
            <Link href={"/shop/wishlist"} >
            <CiHeart size={30} onClick={() => setIsOpen(false)}/>
            </Link>
            <Link href={"/shop/wishlist/cart"} onClick={() => setIsOpen(false)}>
            <BsCart size={30} />
            </Link>

            <Link  href={"/myAccount"} onClick={() => setIsOpen(false)}>
              <UserPen size={30} />
              </Link>
              </div>
        
        </div>
      )}
        
      </div>
    </div>
  );
}
