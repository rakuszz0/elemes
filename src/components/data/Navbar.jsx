import React from "react";
import logo from "../img/navbar/logo.jpg";

const Navbar = () => {
  return (
    <nav className=" z-10 bg-transparent absolute w-full py-4 ">
      <div className="container  flex justify-between items-center w-[340px] md:w-full ml-[20px]  md:mx-auto ">
        <img src={logo} className="w-[150px] md:w-auto" alt="Logo navbar" />

        <ul className="hidden sm:flex gap-8">
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
            >
              Home{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
            >
              {" "}
              About
            </a>{" "}
          </li>
          <li className="relative">
            <a
              href="#"
              className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
            >
              {" "}
              Promotion
            </a>
            <span className="badges__li absolute py-[3px] px-[9px] -top-5 left-14 ">
              HOT
            </span>
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
            >
              Blogs{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
            >
              Contact Us{" "}
            </a>{" "}
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-6">
          <a
            href=""
            className="hover:text-[#8BAC3E] transition duration-200 ease-in-out"
          >
            Masuk
          </a>
          <a href="" className="button button__primary">
            Daftar Sekarang
          </a>
        </div>
        <div className="flex sm:hidden items-center gap-6 ml-6 md:ml-0">
          <a href="" className="button button__primary">
            Daftar Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
