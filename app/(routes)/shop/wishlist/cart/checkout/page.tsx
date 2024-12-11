"use client";
import BreadCrumb from "@/app/component/breadCrumb";
import CheckoutProductCard from "@/app/component/checkoutProductCard";
import Popup from "@/app/component/popUp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Image from "next/image";

const images = [
  {
    image: "/images/Monitor-Cart.svg",
    item: "LCD Monitor",
    price: 650,
  },
  {
    image: "/images/wishlist3.svg",
    item: "H1 Gamepad",
    price: 650,
  },
  {
    image: "/images/product4.svg",
    item: "Small BookSelf",
    price: 650,
  },
];
function Checkout() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  return (
    <div className="max-w-7xl w-full mx-auto p-7">
      {/* Breadcrumb Section */}
      <BreadCrumb route1={"Shop"} route2="Cart" route3="Checkout" />
      <div className="flex flex-col md:flex-row gap-9 md:gap-11 py-7">
        <div className="w-full md:w-1/2 flex pt-7 flex-col gap-4 md:p-5">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            Billing Detials
          </h1>
          <div>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <label>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
                <label>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
                <label>
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />

                <label>
                  Apartment, local, etc. (optional){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />

                <label>
                  Town/City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />

                <label>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />

                <label>
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />

                <label >
                  <input type="checkbox" value="Reading" className="w-[16px] h-[16px] mr-2"/>
                  Save this information for faster check-out next time.
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-9 pt-7 md:p-5">
          <div className="grid grid-cols gap-5">
            {images.map((item, index) => (
              <CheckoutProductCard key={index} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
          <label >
                  <input type="radio" value="Reading" className="w-[16px] h-[16px] mr-2"/>
                  Bank
                </label>

                <div className="flex gap-5">
                  <Image src={"/images/checkout1.svg"} alt={""} width={37} height={16}/>
                  <Image src={"/images/checkout2.svg"} alt={""} width={37} height={16}/>
                  <Image src={"/images/checkout3.svg"} alt={""} width={37} height={16}/>
                  <Image src={"/images/checkout4.svg"} alt={""} width={37} height={16}/>
                  
                </div>
                </div>
          <label >
                  <input type="radio" value="Reading" checked className="w-[16px] h-[16px] mr-2"/>
                  Cash on delivery
                </label>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-2 border-gray-300">
              <p>subtotal:</p>
              <p>$1750</p>
            </div>
            <div className="flex items-center justify-between border-b pb-2 border-gray-300">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Total:</p>
              <p>$1750</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-2">
              <Input
                type="text"
                placeholder="Coupon Code"
                className="p-4 md:p-6 md:px-9   rounded-none bg-transparent text-Button"
              />

              <Button
                className="p-4 md:p-6 md:px-9   rounded-none bg-Secondary2 text-Button"
                variant={"outline"}
              >
                Apply Coupon
              </Button>
            </div>
            <div>
              <Button
                onClick={() => setIsPopUpVisible(true)}
                className="p-4 md:p-6 md:px-9   rounded-none bg-Secondary2 text-Button"
                variant={"outline"}
              >
                Place Order
              </Button>
              {isPopUpVisible && (
                <Popup
                  message="Your Order has been placed"
                  onClose={() => {
                    setIsPopUpVisible(false);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
