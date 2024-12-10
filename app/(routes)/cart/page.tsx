import CartRow, { RowPropType } from "@/app/component/cartRow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BreadCrumb from "@/app/component/breadCrumb";
const images: RowPropType[] = [
  {
    index: 1,
    image: "/images/Monitor-Cart.svg",
    product: "LCD Monitor",
    price: 650,
    subtotal: 600,
  },
  {
    index: 2,
    image: "/images/wishlist3.svg",
    product: "H1 Gamepad",
    price: 650,
    subtotal: 600,
  },
  {
    index: 3,
    image: "/images/product4.svg",
    product: "Small BookSelf",
    price: 650,
    subtotal: 600,
  },
];
export default function Cart() {
  return (
    <div className="max-w-7xl w-full mx-auto p-7">
     <BreadCrumb route={"Contact"}/>

      {/* Table section */}
      <div className="md:p-6">
        <div className="md:overflow-y-scroll overflow-x-scroll h-3/5">
          <table className="min-w-full  bg-white rounded-lg shadow">
            <thead className=" text-Button tracking-tight">
              <tr>
                {["#", "Product", "Price", "Quantity", "Subtotal"].map(
                  (header, index) => (
                    <th
                      key={index}
                      className="py-4 px-4 text-left border-b-2 border-gray-300 pb-3"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {images.map((product, index) => (
                <CartRow key={index} {...product} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between py-4">
          {" "}
          <Button
            className="p-4 md:p-6 md:px-9  rounded-none bg-transparent text-Button"
            variant={"outline"}
          >
            Return To Shop
          </Button>
          <Button
            className="p-4 md:p-6 md:px-9   rounded-none bg-transparent text-Button"
            variant={"outline"}
          >
            Update Cart
          </Button>
        </div>
      </div>

      {/* botton section */}
      <div className="flex flex-col md:flex-row justify-between md:gap-[173px]  md:p-6 py-6">
        <div className="md:w-1/2 w-full">
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
        </div>
        <div className="md:w-1/2 w-full ">
          <div className="py-4">
            <Card className="rounded-none border  border-black ">
              <CardHeader>
                <CardTitle>Card Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>subtotal:</p>
                  <p>$1750</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="flex items-center justify-between border-b pb-2 border-gray-300">
                  <p>Total:</p>
                  <p>$1750</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="p-6 px-9  rounded-none bg-Secondary2 text-Button"
                  variant={"outline"}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
