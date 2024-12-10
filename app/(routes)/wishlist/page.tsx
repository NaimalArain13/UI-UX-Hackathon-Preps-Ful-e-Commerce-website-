"use client";
import BreadCrumb from "@/app/component/breadCrumb";
import JustForYou from "@/app/component/justForYou";
import ProductCard, { ProductCardProps } from "@/app/component/wishlist";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function WishListPage() {
  const wishlistProps1: ProductCardProps[] = [
    {
      id:17,
      image: "/images/wishlist1.svg",
      title: "Gucci duffle bag",
      price: 960,
      rating: 64,
      saleBadge: "-35%",
      priceStrikeThrough: 1160,
      color: "red", // Allowed color
      padding: "px-3 py-1", // Custom padding
      onAddToCart: () => console.log("Added to cart"),
      onDelete: () => console.log("Deleted"),
    },
    {
      id:18,
      image: "/images/wishlist2.svg",
      price: 1960,
      title: "RGB liquid CPU Cooler",
      rating: 65,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {
      id:19,
      image: "/images/wishlist3.svg",
      price: 550,
      title: "GP11 Shooter USB Gamepad",
      rating: 65,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {
      id:20,
      image: "/images/wishlist4.svg",
      price: 750,
      title: "Quilted Satin Jacket",
      rating: 50,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
  ];
  const wishlistProps2: ProductCardProps[] = [
    {
      id:21,
      image: "/images/wishlist5.svg",
      title: "ASUS FHD Gaming Laptop",
      price: 900,
      rating: 65,
      priceStrikeThrough: 1160,
      onAddToCart: () => console.log("Added to cart"),
      onDelete: () => console.log("Deleted"),
    },
    {
      id:22,
      image: "/images/wishlist6.svg",
      price: 1160,
      title: "IPS LCD Gaming Monitor",
      rating: 65,
      onAddToCart: () => {
        alert("Product Added to the cart");
      },
      onDelete: () => {
        alert("Product deleted from the wishlist");
      },
    },
    {
      id:23,
      image: "/images/wishlist7.svg",
      price: 560,
      title: "HAVIT HV-G92 Gamepad",
      rating: 65,
      saleBadge: "+35%",
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
      id:24,
      image: "/images/wishlist8.svg",
      price: 200,
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
    <div className="max-w-7xl w-full mx-auto p-7">
      <BreadCrumb route={"Wishlist"}/>
      <div className="flex justify-between items-center py-4">
        <h1 className="font-medium text-xl">Wishlist (4)</h1>
        <Button
          className="md:p-6 md:px-9  rounded-none bg-transparent text-Button"
          variant={"outline"}
        >
          Move All To Bag
        </Button>
      </div>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 mb-9">
        {wishlistProps1.map((wishlist, index) => (
          <Link key={index} href={"/productDetail"}>
          <ProductCard key={index} {...wishlist} />
          </Link>
        ))}
      </div>

      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="bg-Button2 w-5 h-10 border border-Button2"></div>{" "}
          <h1 className="font-medium text-xl">Just For You</h1>
        </div>
        <Button
          className="md:p-6 md:px-11 rounded-none bg-transparent text-Button"
          variant={"outline"}
        >
          See All
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
  );
}
