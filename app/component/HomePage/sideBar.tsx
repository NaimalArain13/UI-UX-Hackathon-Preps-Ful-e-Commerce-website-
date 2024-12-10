"use client"
import Link from "next/link";
import { useState } from "react";


  export default function SidebarComponent() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };
    return (
        <aside className="hidden md:flex w-64 bg-white border-r border-gray-200">
        <nav className="p-4">
          <ul className="space-y-2">
           {/* Women’s Fashion */}
          <li>
            <button
              className="w-full flex justify-between items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              onClick={() => toggleDropdown("womens-fashion")}
            >
              <span>Women’s Fashion</span>
              <span>{activeDropdown === "womens-fashion" ? "▲" : "▼"}</span>
            </button>
            {activeDropdown === "womens-fashion" && (
              <ul className="mt-2 space-y-1 pl-4">
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 3
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Men’s Fashion */}
          <li>
            <button
              className="w-full flex justify-between items-center text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              onClick={() => toggleDropdown("mens-fashion")}
            >
              <span>Men’s Fashion</span>
              <span>{activeDropdown === "mens-fashion" ? "▲" : "▼"}</span>
            </button>
            {activeDropdown === "mens-fashion" && (
              <ul className="mt-2 space-y-1 pl-4">
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block text-gray-600 hover:text-blue-500 hover:bg-gray-50 rounded-md p-2"
                  >
                    Category 3
                  </Link>
                </li>
              </ul>
            )}
          </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Electronics</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Home & Lifestyle</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Medicine</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Sports & Outdoor</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Baby & Toys</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Groceries & Pets</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded-md p-2"
              >
                <span>Health & Beauty</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }

  
