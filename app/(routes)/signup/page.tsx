"use client";
import Image from "next/image"
import { FcGoogle } from "react-icons/fc";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
export default function CreateAccount() {
  const router = useRouter()

    // Form submission handler
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push("/login"); // Navigate to the login page
    };
  return (
    <div className="min-h-screen container mx-auto md:py-7 ">
      <div className="flex flex-col md:flex-row">
      {/* Left Side - Image Section */}
      <div className="flex-1 bg-[#CBE4E8] flex justify-start items-center p-6">
        <Image 
          src="/images/signup.png"
          alt="Shopping cart and phone"
          width={600}
          height={300}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="flex-1 max-w-md w-full  p-8 lg:p-12">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Create an account</h1>
        <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

        {/* Form */}
        <form onSubmit={(handleSubmit)} className="flex flex-col gap-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-Secondary2 focus:outline-none"
          />
          {/* Email/Phone Input */}
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-Secondary2 focus:outline-none"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          {/* Create Account Button */}
          <button
          onClick={()=>{}}
            type="submit"
            className="w-full bg-Secondary2 text-white py-3 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            Create Account
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-Up */}
        <button
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:outline-none"
        >
         <FcGoogle size={28}/>
          <span className="text-sm">Sign up with Google</span>
        </button>

        {/* Already Have Account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-Secondary2 font-medium hover:underline">
            Log in
          </a>
        </p>
      </div>
      </div>
    </div>
  );
}
