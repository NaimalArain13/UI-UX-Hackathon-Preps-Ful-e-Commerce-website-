import BreadCrumb from "@/app/component/breadCrumb";
import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4 sm:p-7  min-h-screen">
      {/* Breadcrumb Section */}
      <BreadCrumb route1={"Contact"} />

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 max-w-6xl w-full">
          {/* Left Section */}
          <div className="bg-white shadow-md rounded-md p-6 w-full md:max-w-sm flex flex-col gap-8">
            {/* Call Us Section */}
            <div className="flex items-start gap-3">
              
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
          <div className="bg-white shadow-md rounded-md p-6 w-full flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-gray-100 rounded-md p-3 w-full text-sm focus:ring-2 focus:ring-red-500 h-32 resize-none"
            ></textarea>
            <button className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 w-fit self-end">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
