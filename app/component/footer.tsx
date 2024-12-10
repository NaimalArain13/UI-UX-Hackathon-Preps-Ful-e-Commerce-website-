import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { IoSendSharp } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-BG py-9">
      <div className="max-w-7xl w-full pt-3 px-4 space-y-8 md:px-8">
        <div className="mx-auto max-w-[1170px] w-full ">
          {/* first section: Links and Logo */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left py-4">
            {/* Logo */}
            <div className="flex justify-center  items-center space-y-3 flex-col text-Primary md:items-start md:justify-start">
              <p className="font-bold mb-3">Exclusive</p>
              <p className="">Subscribe</p>
              <p className="text-sm">Get 10% off your first order</p>
              <div className="w-full border border-1 h-12 border-Primary flex items-center p-1">
                <Input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-transparent text-Text1"
                />
                <IoSendSharp size={24} />
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h3 className="text-Text text-md font-medium mb-4 ">Support</h3>
              <div className="flex text-Text text-sm flex-col space-y-3">
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="text-Text text-md font-medium mb-4">Accounts</h3>
              <div className="flex text-Text text-sm  flex-col space-y-3">
                <Link href={"#"}>My Account</Link>
                <Link href={"#"}>Login / Register</Link>
                <Link href={"#"}>Cart</Link>
                <Link href={"#"}>Wishlist</Link>
                <Link href={"#"}>Shop</Link>
              </div>
            </div>

            {/* Links Column 3 */}
            <div>
              <h3 className="text-Text text-md font-medium mb-4">
                Quick Links
              </h3>
              <div className="flex text-Text text-sm flex-col space-y-3">
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>Terms Of Use</Link>
                <Link href={"#"}>FAQs</Link>
                <Link href={"#"}>Contact</Link>
              </div>
            </div>
            {/*Download Section */}
            <div className=" flex items-center flex-col ">
              <h3 className="text-Text text-md font-medium mb-4">
                Download App
              </h3>
              <div className="flex text-Text text-xs flex-col space-y-3">
                <p>Save $3 with App New User Only</p>
                <div className="flex">
                  <Image
                    src={"/images/Qrcode1.png"}
                    alt="QR-code"
                    width={76}
                    height={76}
                    className="object-cover"
                  />

                  <div className="flex flex-col gap-3 w-[110px] h-[41] ml-2">
                    <div>
                      <Image
                        src={"/images/download1.png"}
                        alt="Google-Playstore"
                        width={103}
                        height={30}
                      />
                    </div>
                    <div>
                      <Image
                        src={"/images/download2.png"}
                        alt="apple Store"
                        width={103}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex max-w-[168px] h-6 w-full justify-center items-center gap-6 text-Primary">
                <BiLogoFacebook size={24} /> <CiTwitter size={24} />{" "}
                <FaInstagram size={24} /> <RiLinkedinLine size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-4 border-gray-700 flex items-center justify-center">
          <div className="flex text-Text1 gap-3 text-sm ">
            <FaRegCopyright />
            <p>Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
