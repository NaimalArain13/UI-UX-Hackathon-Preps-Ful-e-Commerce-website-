"use client";

import React from "react";
import Image from "next/image"
import { ProductCardProps } from "@/lib/data";
import { CiHeart } from "react-icons/ci";
import JustForYou from "@/app/component/justForYou";
import  Link  from "next/link";

const wishlistProps2: ProductCardProps[] = [
  {

    id:1,
    image: "/images/Product-1.svg",
    title: "Breed Dry Dog Food",
    price: 900,
    rating: 65,
    saleBadge:"new",
    color: "green",
    padding: "px-3 py-1",
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
    saleBadge:"new",
    color: "green",
    padding: "px-3 py-1",
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
    saleBadge:"new",
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
    saleBadge:"sale",
    color: "blue",
    padding: "px-3 py-1",
    heartIcon: <CiHeart size={24}/>,
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
];
export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-Primary ">
      <div className="container mx-auto p-4 lg:p-8">
        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Product Images */}
          <div className="flex flex-col lg:w-1/2 gap-4">
            <div className="bg-Secondary rounded-lg p-4">
              <Image
                src="/images/productD2.svg"
                alt="Main Product"
                height={315}
                width={446}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4">
              <div className="md:w-28 md:h-28 bg-Secondary rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/images/productD1.svg`}
                  alt={`Thumbnail`}
                  height={114}
                  width={121}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-28 md:h-28 bg-Secondary rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/images/productD1.svg`}
                  alt={`Thumbnail`}
                  height={114}
                  width={121}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-28 md:h-28 bg-Secondary rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/images/productD1.svg`}
                  alt={`Thumbnail`}
                  height={114}
                  width={121}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-28 md:h-28 bg-Secondary rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={`/images/productD1.svg`}
                  alt={`Thumbnail`}
                  height={114}
                  width={121}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="lg:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Havic HV G-92 Gamepad
            </h1>
            <p className="text-lg text-red-500 font-semibold">$152.00</p>
            <p className="text-sm text-gray-600 mt-4">
              PlayStation 5 Controller Skin high-quality soft-touch silicon
              material for enhanced grip.
            </p>

            {/* Colours */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-800">Colours:</h3>
              <div className="flex gap-2 mt-2">
                <div className="w-8 h-8 bg-gray-200 border rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-black border rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-blue-500 border rounded-full cursor-pointer"></div>
              </div>
            </div>

            {/* Size Options */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-800">Size:</h3>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  S
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  M
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                  L
                </button>
              </div>
            </div>

            {/* Quantity & Buy Now */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border rounded-md overflow-hidden">
                <button className="px-4 py-2 bg-gray-100">-</button>
                <input
                  type="text"
                  value="1"
                  readOnly
                  className="w-12 text-center border-l border-r"
                />
                <button className="px-4 py-2 bg-gray-100">+</button>
              </div>
              <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-icons text-green-500">
                  local_shipping
                </span>
                <p className="text-sm text-gray-600">Free Delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-green-500">sync_alt</span>
                <p className="text-sm text-gray-600">
                  Return Delivery within 7 days
                </p>
              </div>
            </div>
          </div>
        </div>


<div className="py-16">
<div className="flex items-center gap-2 mb-8">
        <div className="bg-Button2 w-4 h-10 border rounded border-Button2"></div>{" "}
        <h1 className="font-sm   text-Secondary2">Related Items</h1>
      </div>
      
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 ">
      {wishlistProps2.map((card, index) => (
        <Link href={`/${card.id}`}>
        <JustForYou key={index} {...card} />
        </Link>
      ))}
    </div>
    </div>
        {/* Related Items */}
        {/* <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Related Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition"
                >
                  <img
                    src={`https://via.placeholder.com/150x150.png?text=Product+${
                      index + 1
                    }`}
                    alt={`Related Product ${index + 1}`}
                    className="w-full h-auto mb-4 rounded"
                  />
                  <h3 className="text-sm font-medium text-gray-800">
                    Product Title {index + 1}
                  </h3>
                  <p className="text-sm text-red-500 font-semibold">$120.00</p>
                </div>
              ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
