"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import JustForYou from '../justForYou'
import { CiHeart } from 'react-icons/ci';
import { ProductCardProps } from '../wishlist';
import ButtonComponent from '../button';
import Link from 'next/link';

function ProductSection() {
    const wishlistProps2: ProductCardProps[] = [
        {

          id:1,
          image: "/images/Product-1.svg",
          title: "Breed Dry Dog Food",
          price: 900,
          rating: 65,
          heartIcon: <CiHeart size={24}/>,
          priceStrikeThrough: 1160,
          onAddToCart: () => console.log("Added to cart"),
          onDelete: () => console.log("Deleted"),
        },
        {
          id:2,
          image: "/images/Product-2.svg",
          price: 1160,
          title: "CANON EOS DSLR Camera",
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
          id:3,
          image: "/images/Product-3.svg",
          price: 560,
          title: "ASUS FHD Gaming Laptop",
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
          id:4,
          image: "/images/Product-4.svg",
          price: 200,
          title: "Curology Product Set ",
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
          id:5,
          image: "/images/Product-5.svg",
          price: 200,
          title: "Kids Electric Car",
          rating: 65,
          saleBadge:"new",
          color:"green",
          padding:"px-3 py-1",
          heartIcon: <CiHeart size={24}/>,
          onAddToCart: () => {
            alert("Product Added to the cart");
          },
          onDelete: () => {
            alert("Product deleted from the wishlist");
          },
        },
        {
          id:6,
          image: "/images/Product-6.svg",
          price: 200,
          title: "Jr. Zoom Soccer Cleats",
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
          id:7,
          image: "/images/Product-7.svg",
          price: 200,
          title: "GP11 Shooter USB Gamepad",
          rating: 65,
          saleBadge:"new",
          color:"green",
          padding:"px-3 py-1",
          heartIcon: <CiHeart size={24}/>,
          onAddToCart: () => {
            alert("Product Added to the cart");
          },
          onDelete: () => {
            alert("Product deleted from the wishlist");
          },
        },
        {
          id:8,
          image: "/images/Product-8.svg",
          price: 200,
          title: "Quilted Satin Jacket",
          rating: 65,
          heartIcon: <CiHeart size={24}/>,
          onAddToCart: () => {
            alert("Product Added to the cart");
          },
          onDelete: () => {
            alert("Product deleted from the wishlist");
          },
        },
      ];
  return (
    <div className="mx-auto w-full h-auto max-w-7xl py-12">
   
    <div className="flex justify-between items-center py-4">
    <div className="flex flex-col gap-5 py-4 ">
        <div className="flex items-center gap-2">
          <div className="bg-Button2 rounded w-4 h-10 border border-Button2"></div>{" "}
          <h1 className="font-sm  text-Secondary2">Our Products</h1>
        </div>
        
        <div>
          <h1 className="font-semibold text-[36px]">Explore Our Products</h1>
        </div>
      </div>
     
    </div>
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {wishlistProps2.map((card, index) => (
        <Link href={`/${card.id}`}>
        <JustForYou key={index} {...card} />
        </Link>
      ))}
    </div>
    <div className='flex justify-center py-6 mt-7'>
   
        <ButtonComponent text={'View All Products'}  color='red' padding='px-11 py-4'/>
      
      </div>
  </div>
  )
}

export default ProductSection