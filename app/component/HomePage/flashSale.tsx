"use client"
import React from "react";
import CountDownTimer from "./count-down";
import { ProductCardProps } from "../wishlist";
import JustForYou from "../justForYou";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

function FlashSale() {
  const wishlistProps2: ProductCardProps[] = [
    {
      id:9,
      image: "/images/Product-3.svg",
      title: "ASUS FHD Gaming Laptop",
      price: 900,
      rating: 65,
      heartIcon: <CiHeart size={24}/>,
      priceStrikeThrough: 1160,
      onAddToCart: () => console.log("Added to cart"),
      onDelete: () => console.log("Deleted"),
    },
    {id:10,
      image: "/images/Monitor-Cart.svg",
      price: 1160,
      title: "IPS LCD Gaming Monitor",
      rating: 65,
      heartIcon: <CiHeart size={24}/>,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {id:11,
      image: "/images/Product-7.svg",
      price: 560,
      title: "HAVIT HV-G92 Gamepad",
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
      id:12,
      image: "/images/wishlist8.svg",
      price: 200,
      heartIcon: <CiHeart size={24}/>,
      title: "AK-900 Wired Keyboard",
      rating: 65,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
  ];
  return (
    <div className="mx-auto w-full max-w-7xl py-7">

      <div className="flex items-center gap-2">
        <div className="bg-Button2 rounded w-4 h-10 border border-Button2"></div>{" "}
        <h1 className="font-sm  text-Secondary2">Today's</h1>
      </div>

      <div className="flex items-center  gap-9 py-4">
        <div>
          <h1 className="font-semibold text-[36px]">Flash Sales</h1>
        </div>
      <CountDownTimer />
      </div>

      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {wishlistProps2.map((card, index) => (
        <Link href={`/${card.id}`}>
        <JustForYou key={index} {...card} />
        </Link>
      ))}
    </div>

    </div>
  );
}

export default FlashSale;
