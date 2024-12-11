"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import ButtonComponent from "./button";
export interface ProductCardProps {
  id?:number,
  image: string;
  title: string;
  price: number;
  rating: number;
  saleBadge?: string;
  heartIcon?: ReactNode;
  priceStrikeThrough?: number;
  color?: "red" | "blue" | "green";
  padding?: string;
  onAddToCart: () => void;
  
}
export default function ProductCard({
  image,
  title,
  price,
  saleBadge,
  priceStrikeThrough,
  color,
  padding,
  onAddToCart,
  
}: ProductCardProps) {
  return (
    <div className="relative w-full h-[322px] bg-Primary">
      <div className="bg-Secondary h-[250px] flex flex-col justify-between">
        {/* Sale Badge */}
        {saleBadge && (
          <div className="absolute p-2">
            <ButtonComponent text={saleBadge} color={color} padding={padding} />
          </div>
        )}
        {/* Delete Icon */}
        <button
          className="absolute top-2 right-2 p-1 text-Button bg-Primary rounded-full"
        
          aria-label="Delete"
        >
          <RiDeleteBinLine size={24} />
        </button>

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
          className="w-full  bg-Button text-Primary py-2 gap-2 rounded-md hover:bg-gray-800 flex justify-center items-center"
          onClick={onAddToCart}
        >
          <BsCart size={24} /> Add To Cart
        </button>
      </div>
      <div className="flex flex-col p-2 gap-2">
        {/* Product Title */}
        <h3 className="text-sm font-medium text-Primary1 truncate ">{title}</h3>

        {/* Product Price and Strike-through */}
        <div className="flex gap-2 items-center">
          <p className="text-Button2 font-bold">${price}</p>
          {priceStrikeThrough && (
            <p className="text-gray-500 line-through">${priceStrikeThrough}</p>
          )}
        </div>
      </div>
    </div>
  );
}
