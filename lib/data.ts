import { ReactNode } from "react";

export interface ProductCardProps {
    id:number,
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
    onDelete: () => void;
  }
export const data: ProductCardProps[] = [
  {
    id: 1,
    image: "/image.jpg",
    title: "Breeze AC",
    price: 900,
    rating: 65,
    priceStrikeThrough: 1160,
    onAddToCart: () => console.log("Added to cart"),
    onDelete: () => console.log("Deleted"),
  },
  {
    id:2,
    image: "/images/Qrcode1.png",
    price: 1160,
    title: "CANON EOS DSLR Camera",
    rating: 65,
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:3,
    image: "/images/Qrcode1.png",
    price: 560,
    title: "ASUS FHD Gaming Laptop",
    rating: 65,
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
    image: "/images/Qrcode1.png",
    price: 200,
    title: "Curology Product Set ",
    rating: 65,
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:5,
    image: "/images/Qrcode1.png",
    price: 200,
    title: "Kids Electric Car",
    rating: 65,
    saleBadge:"new",
    color:"green",
    padding:"px-3 py-1",
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:6,
    image: "/images/Qrcode1.png",
    price: 200,
    title: "Jr. Zoom Soccer Cleats",
    rating: 65,
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:7,
    image: "/images/Qrcode1.png",
    price: 200,
    title: "GP11 Shooter USB Gamepad",
    rating: 65,
    saleBadge:"new",
    color:"green",
    padding:"px-3 py-1",
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:8,
    image: "/images/Qrcode1.png",
    price: 200,
    title: "Quilted Satin Jacket",
    rating: 65,
    onAddToCart: () => {
      alert("Product Added to the cart");
    },
    onDelete: () => {
      alert("Product deleted from the wishlist");
    },
  },
  {
    id:9,
    image: "/images/Qrcode1.png",
    title: "ASUS FHD Gaming Laptop",
    price: 900,
    rating: 65,
    priceStrikeThrough: 1160,
    onAddToCart: () => console.log("Added to cart"),
    onDelete: () => console.log("Deleted"),
  },
  {id:10,
    image: "/images/Qrcode1.png",
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
  {id:11,
    image: "/images/Qrcode1.png",
    price: 560,
    title: "HAVIT HV-G92 Gamepad",
    rating: 65,
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
    image: "/images/Qrcode1.png",
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
  {
    id:13,
    image: "/images/Qrcode1.png",
    title: "ASUS FHD Gaming Laptop",
    price: 900,
    rating: 65,
    priceStrikeThrough: 1160,
    onAddToCart: () => console.log("Added to cart"),
    onDelete: () => console.log("Deleted"),
  },
  {
    id:14,
    image: "/images/Qrcode1.png",
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
    id:15,
    image: "/images/Qrcode1.png",
    price: 560,
    title: "HAVIT HV-G92 Gamepad",
    rating: 65,
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
    image: "/images/Qrcode1.png",
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
  {
    id:21,
    image: "/images/Qrcode1.png",
    title: "ASUS FHD Gaming Laptop",
    price: 900,
    rating: 65,
    priceStrikeThrough: 1160,
    onAddToCart: () => console.log("Added to cart"),
    onDelete: () => console.log("Deleted"),
  },
  {
    id:22,
    image: "/images/Qrcode1.png",
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
    image: "/images/Qrcode1.png",
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
    image: "/images/Qrcode1.png",
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
  {
    id:17,
    image: "/images/Qrcode1.png",
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
    image: "/images/Qrcode1.png",
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
    image: "/images/Qrcode1.png",
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
    image: "/images/Qrcode1.png",
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

export default data;;