import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="p-7">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content Section */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="flex flex-col md:flex-row justify-center items-start gap-5 max-w-6xl h-[457px] w-full">
          {/* Left Section */}
          <div className="bg-white shadow-md rounded-md p-6 w-full h-full max-w-sm flex flex-col gap-8">
            {/* Call Us Section */}
            <div className="flex items-start gap-3">
              <div className="text-red-500 text-2xl">
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call To Us</h3>
                <p className="text-sm text-gray-600">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm font-medium">Phone: +88061112222</p>
              </div>
            </div>
            <hr />
            {/* Write To Us Section */}
            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold text-lg">Write To Us</h3>
                <p className="text-sm text-gray-600">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm font-medium">Emails:</p>
                <p className="text-sm">customer@exclusive.com</p>
                <p className="text-sm">support@exclusive.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-md rounded-md h-full p-6 w-full max-w-2xl flex flex-col gap-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-200 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-200 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="bg-gray-200 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-200 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500 h-32 resize-none"
            ></textarea>
            <button className="bg-red-500  text-white py-3 px-6 rounded-md hover:bg-red-600 w-fit self-end">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;