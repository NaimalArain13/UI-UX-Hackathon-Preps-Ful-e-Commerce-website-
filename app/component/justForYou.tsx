"use client"

import React from 'react';
import Image from "next/image"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BsCart } from 'react-icons/bs';
import ButtonComponent from './button';
import { CiHeart } from "react-icons/ci";
import { ProductCardProps } from './wishlist';
import { Button } from '@/components/ui/button';



export default function JustForYou({
  image,
  title,
  price,
  rating,
  saleBadge,
  priceStrikeThrough,
  color,
  padding,
  heartIcon,
  onAddToCart,
  onDelete,
}:ProductCardProps){
  const totalStars = 5;
  return (
    <div className="relative w-full h-[350px]  bg-Primary">
      <div className='bg-Secondary h-[250px] flex flex-col justify-between'>
        {/* Sale Badge */}
        {saleBadge && (
          <div className='absolute p-2'>
          <ButtonComponent text={saleBadge} color={color} padding={padding}/>
          </div>
        )}

        
        
     {/* Icons (Eye and Heart) */}
     <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Button
            className="px-2 text-Button bg-Primary rounded-full"
            onClick={onDelete}
            aria-label="View"
          >
            <MdOutlineRemoveRedEye size={24} />
          </Button>
          {heartIcon && (
            <Button className="px-2 text-Button bg-Primary rounded-full">
               < CiHeart size={24} />
            </Button>
          )}
        </div>
        
      {/* Product Image */}
      <Image
        src={image}
        alt={title}
        width={178}
        height={178}
        className="w-full h-[150px] object-contain mt-4"
      />

      {/* Add to Cart Button */}
      <button
      
        className="w-full bg-black text-white py-2 gap-2 rounded-md hover:bg-gray-800 flex justify-center items-center"
        onClick={onAddToCart}
      >
        <BsCart size={24} /> Add To Cart
      </button>
      </div>
      <div className='flex flex-col p-3 gap-2'>
      {/* Product Title */}
      <h3 className="text-sm font-medium text-gray-700 truncate ">{title}</h3>

      {/* Product Price and Strike-through */}
      <div className="flex gap-2 items-center">
          <p className="text-Button2 font-bold">${price}</p>
          {priceStrikeThrough && (
            <p className="text-gray-500 line-through">${priceStrikeThrough}</p>
          )}
        </div>
      {/* Product Rating */}
      {rating !== undefined && (
          <div className="flex gap-1 items-center">
            {Array.from({ length: totalStars }).map((_, index) => (
              <IoMdStar
                key={index}
                size={16}
                className={`${
                  index < rating ? "text-yellow-600" : "text-gray-300"
                }`}
              />
            ))}{" "}
            ({rating})
          </div>
        )}
      </div>
    </div>
  );
};


