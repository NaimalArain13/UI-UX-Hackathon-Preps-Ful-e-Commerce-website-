"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image"
import { useState } from "react";

export interface RowPropType {
    index:number,image:string,product:string,price:number,subtotal:number
  }
const CartRow = ({index,image, product,price,subtotal}:RowPropType) => {
  const [quantity, setQuantity] = useState(1); // Track the quantity
  const total = quantity * price; // Calculate subtotal dynamically

  // Handle increment
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  

    return (
      <tr
        className="border-b hover:bg-gray-50 cursor-pointer"
        
      >
        <td className="py-4 px-5 text-gray-500">{index}</td>
        
        <td className="py-4 px-5 flex gap-5 items-center">
            <div className="flex gap-3 flex-col md:flex-row items-center">
          <Image
            src={image || "/placeholder-image.png"}
            alt="product"
            width={54}
            height={54}
            className="rounded shadow"
          /> <p className="text-gray-800 md:font-medium">{product}</p>
          </div>
        </td>
        <td className="py-4 px-5 text-gray-800">${price.toFixed(2) || "N/A"}</td>
        <td className="py-4 px-5 text-gray-800">
        <div className="flex items-center gap-2">
          {/* Decrement Button */}
          <Button
            onClick={handleDecrement}
            disabled={quantity === 1} // Disable if quantity is 1
            className={`py-1 px-2 ${
              quantity === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            -
          </Button>

          {/* Quantity Display */}
          <span className="px-4 py-1 border rounded">{quantity}</span>

          {/* Increment Button */}
          <Button
            onClick={handleIncrement}
            className="py-1 px-2 bg-gray-200 hover:bg-gray-300"
          >
            +
          </Button>
        </div>
      </td>
        <td className="py-4 px-5 text-gray-500">${subtotal.toFixed(2)}</td>
      </tr>
    );
  };

  export default CartRow