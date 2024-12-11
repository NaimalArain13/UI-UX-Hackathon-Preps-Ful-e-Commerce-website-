"use client"
import BreadCrumb from "@/app/component/breadCrumb";
import AccountSidebar from "@/app/component/HomePage/accountSidebar";
import Popup from "@/app/component/popUp";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

function MyAccount() {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  return (
    <div className="min-h-screen">
    <div className="p-1 md:hidden">
        <AccountSidebar />
        </div>
    <div className="max-w-7xl w-full mx-auto p-7">
      {/* Breadcrumb Section */}
      <BreadCrumb route1={"My Account"} />
      <div className="w-full flex p-7 gap-5">
        <div className="hidden md:flex">
        <AccountSidebar />
        </div>
      
        {/* Main Content */}
        <div className="w-full md:w-3/4">
          <h2 className="text-xl font-bold mb-6">Edit Your Profile</h2>
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div>
              <label>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Naimal"
                  className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Salahuddin"
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="naimalarain@gmail.com"
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="H-A/...."
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">
              Password Changes
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="current password"
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="new password"
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="password"
                   className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                type="button"
                className="px-2 md:px-4 md:py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <Button
              onClick={()=>setIsPopUpVisible(true)}
                className="p-4 md:p-6 md:px-9   rounded-none bg-Secondary2 text-Button"
                variant={"outline"}
              >
                Save Changes
              </Button>
              {isPopUpVisible && (
                <Popup
                  message="Changes saved successfully"
                  onClose={() => {
                    setIsPopUpVisible(false);
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default MyAccount;
