"use client";
import React, { useState } from "react";
import { BiArrowToRight, BiArrowFromRight } from "react-icons/bi";

const AccountSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Initially closed for mobile screens

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 fixed left-4 z-50 bg-gray-800 text-white rounded-full sm:hidden"
      >
        {isExpanded ? <BiArrowFromRight size={24} /> : <BiArrowToRight size={24} />}
      </button>

      {/* Overlay (for dimming background when sidebar is open) */}
      {isExpanded && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-Primary border-r rounded-lg shadow-md transition-transform duration-300 z-50 ${
          isExpanded ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 sm:w-64 w-64`}
      >
        {/* Toggle Button Inside Sidebar */}
        <button
          onClick={toggleSidebar}
          className="fixed z-50 top-2 left-2 p-2 bg-gray-800 text-white rounded-full  sm:hidden"
        >
          {isExpanded ? <BiArrowFromRight size={24} /> : <BiArrowToRight size={24} />}
        </button>

        <nav className="mt-9 p-4">
          <ul className="space-y-4">
            {/* Manage My Account Section */}
            <li>
              <p className="text-md font-semibold cursor-pointer">
                Manage My Account
              </p>
              <ul className="mt-2">
                <li className="p-2 text-md font-medium hover:bg-gray-500/50 cursor-pointer">
                  My Profile
                </li>
                <li className="p-2 text-md font-medium hover:bg-gray-500/50 cursor-pointer">
                  Address Book
                </li>
                <li className="p-2 text-md font-medium hover:bg-gray-500/50 cursor-pointer">
                  My Payment Options
                </li>
              </ul>
            </li>

            {/* My Orders Section */}
            <li>
              <p className="text-md font-semibold cursor-pointer">My Orders</p>
              <ul className="mt-2">
                <li className="p-2 text-md font-medium hover:bg-gray-500/50 cursor-pointer">
                  My Returns
                </li>
                <li className="p-2 text-md font-medium hover:bg-gray-500/50 cursor-pointer">
                  My Cancellations
                </li>
              </ul>
            </li>

            {/* My Wishlist Section */}
            <li className="text-md font-semibold cursor-pointer">My Wishlist</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AccountSidebar;
