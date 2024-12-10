import { Input } from "@/components/ui/input";
import Image from "next/image"

export interface RowPropType {
    index:number,image:string,product:string,price:number,subtotal:number
  }
const CartRow = ({index,image, product,price,subtotal}:RowPropType) => {
    
    return (
      <tr
        className="border-b hover:bg-gray-50 cursor-pointer"
        
      >
        <td className="py-4 px-5 text-gray-500">{index}</td>
        
        <td className="py-4 px-5 flex gap-5 items-center">
            <div className="flex gap-3 items-center">
          <Image
            src={image || "/placeholder-image.png"}
            alt="product"
            width={54}
            height={54}
            className="rounded shadow"
          /> <p className="text-gray-800 font-medium">{product}</p>
          </div>
        </td>
        <td className="py-4 px-5 text-gray-800 ">
          ${price || "N/A"}
        </td>
        <td className="py-4 px-5 text-gray-800">
         <Input type="number"
         value={1}
         className="h-10 w-10"
         />
        </td>
        <td className="py-4 px-5 text-gray-500">${subtotal || "N/A"}</td>
      </tr>
    );
  };

  export default CartRow