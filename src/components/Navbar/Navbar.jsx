import React from "react";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="">
      <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-sm py-4 sm:py-4">
        <div className="container">
          <div className="flex justify-between ">
            <div className="flex items-center gap-4 font-bold text-white text-2xl">
              <img src={Logo} alt="" className="w-10" />
              <span>TCJ-Space</span>
            </div>
            <div className="text-white  hidden md:block">
              <ul className="flex items-center gap-6 text-xl py-4">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Galaxy</a>
                </li>
                <li>
                  <a href="#">Satelite</a>
                </li>
              </ul>
            </div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md">Login</button>
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Navbar;
