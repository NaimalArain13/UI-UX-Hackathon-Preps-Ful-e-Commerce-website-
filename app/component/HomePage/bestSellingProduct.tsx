"use client"
import React from 'react'
import { ProductCardProps } from '../wishlist';
import { Button } from '@/components/ui/button';
import JustForYou from '../justForYou';
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';

const wishlistProps2: ProductCardProps[] = [
    {
      id:13,
      image: "/images/product1.svg",
      title: "The north coat",
      price: 900,
      rating: 65,
      heartIcon: <CiHeart size={24}/>,
      priceStrikeThrough: 1160,
      onAddToCart: () => console.log("Added to cart"),
      onDelete: () => console.log("Deleted"),
    },
    {
      id:14,
      image: "/images/wishlist1.svg",
      price: 1160,
      title: "Gucci duffle bag",
      rating: 65,
      heartIcon: <CiHeart size={24}/>,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {
      id:15,
      image: "/images/product3.svg",
      price: 560,
      title: "RGB liquid CPU Cooler",
      rating: 65,
      heartIcon: <CiHeart size={24}/>,
      color: "green",
      padding: "px-3 py-1",
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {
      id:16,
      image: "/images/product4.svg",
      price: 200,
      heartIcon: <CiHeart size={24}/>,
      title: "Small BookSelf",
      rating: 65,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
  ];
function BestSellingProduct() {
  return (
    <div className="mx-auto w-full max-w-7xl p-7">
   
    <div className="flex justify-between items-center py-4">
    <div className="flex flex-col gap-5 py-4 ">
        <div className="flex items-center gap-2">
          <div className="bg-Button2 rounded w-4 h-10 border border-Button2"></div>{" "}
          <h1 className="font-sm text-Secondary2">This Month</h1>
        </div>
        
        <div>
          <h1 className="font-semibold  text-2xl md:-[36px]">Best Selling Products</h1>
        </div>
      </div>
      <Button
        className="p-4 md:py-6 md:px-11 rounded-none bg-Secondary2 text-Button"
        variant={"outline"}
      >
        View All
      </Button>
    </div>
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {wishlistProps2.map((card, index) => (
        <Link key={index} href={"/productDetail"}>
        <JustForYou key={index} {...card} />
        </Link>
      ))}
    </div>
  </div>
  )
}

export default BestSellingProduct