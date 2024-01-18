import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdMessage, MdCall } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-5">
      <section className="max-w-[1200px] mx-auto  text-white ">
        <div className="grid md:grid-cols-3 py-5 ">
          {/*first col */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl  font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p className="font-light">
              Get exclusive <span className="font-bold">best update </span>
              straight to your inbox
            </p>
            <div className="flex items-center h-10">
              <input
                type="text"
                value=""
                placeholder="E-mail"
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 "
              />
              <button className="bg-orange-600 p-2 rounded-lg">Ok</button>
            </div>
          </div>
          {/*second section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            {/* <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div> */}
            <div>
              <div className="pt-8">
                <h1 className="text-xl font-bold mb-3">Contact Us</h1>
              </div>
              <div className="space-y3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Delhi, India</p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <MdMessage />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <MdCall />
                  <p>+91-123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center py-6 border-gray-400 border-t-2">
            <span className="text-sm text-gray-400">
              copyright &copy; 2024 by TCJ
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span>
                <ul className="flex gap-3">
                    <li>
                        Privacy Policy 
                    </li>
                    <li>
                        Terms & Condition 
                    </li>
                   
                </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
