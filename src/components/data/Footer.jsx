import React from "react";
import logo from "../img/navbar/logo.jpg";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const Footer = () => {
  return (
    <footer>
      <div className="hidden md:block container mx-auto py-[40px] px-[40px] bg-[#F9FFF7] rounded-[24px]">
        <div className="flex justify-between">
          <div className="basis-5/12 mr-5">
            <img src={logo} className="mb-6 w-[207px]" />
            <p className="footer__desc">
              Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br />{" "}
              Kecamatan Setiabudi, Kota Jakarta Selatan,
              <br /> Daerah Khusus Ibukota Jakarta 12950
            </p>
            <div className="flex gap-2 mt-[30px]">
              <div className="w-[40px] p-2 bg-white rounded-full hover:bg-[#8BAC3E] text-[#8bac3e] hover:text-white transition duration-200 ease-out cursor-pointer">
                <a>
                  <AiOutlineMail size={25} />
                </a>
              </div>
              <div className="w-[40px] p-2 bg-white rounded-full hover:bg-[#8BAC3E] text-[#8bac3e] hover:text-white transition duration-200 ease-out cursor-pointer">
                <a>
                  <BsTelephone size={25} />
                </a>
              </div>
              <div className="w-[40px] p-2 bg-white rounded-full hover:bg-[#8BAC3E] text-[#8bac3e] hover:text-white transition duration-200 ease-out cursor-pointer">
                <a>
                  <AiOutlineInstagram size={25} />
                </a>
              </div>
            </div>
          </div>
          <div className="basis-2/12">
            <h3 className="mb-6 footer__heading">Categories</h3>

            <div className=" ">
              <ul className="flex flex-col gap-4 footer__desc__contact ">
                <li>
                  <a> Cupcake</a>{" "}
                </li>
                <li>
                  <a> Pizza</a>{" "}
                </li>
                <li>
                  <a> Kebab</a>{" "}
                </li>
                <li>
                  <a> Salmon</a>{" "}
                </li>
                <li>
                  <a> Doughnut</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-2/12">
            <h3 className="mb-6 footer__heading">About Us</h3>

            <div className=" ">
              <ul className="flex flex-col gap-4 footer__desc__contact ">
                <li>
                  <a> About Us</a>{" "}
                </li>
                <li>
                  <a> FAQ</a>{" "}
                </li>
                <li>
                  <a> Report Problem</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-3/12">
            <h3 className="mb-6 footer__heading">Newsletter</h3>

            <p className="footer__desc">
              Get now free 50% discount for all <br /> products on your first
              order
            </p>
            <div className="flex my-3">
              <input
                className="p-2 rounded-l-[8px] border-y-2 border-l-2 border-black"
                placeholder="Your email address"
              ></input>
              <button className="bg-[#8BAC3E] p-2 rounded-r-[8px] text-white">
                {" "}
                SEND
              </button>
            </div>
            <p className="flex items-center gap-2 footer__desc__contact ">
              <AiOutlineMail size={20} className="text-[#8BAC3E]" />
              elemesid@gmail.com
            </p>
            <p className="flex items-center gap-2 footer__desc__contact ">
              <BsTelephone size={20} className="text-[#8BAC3E]" />
              0888 1111 2222
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden fixed w-full bg-white shadow-sm bottom-0">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-center">
            <RxHamburgerMenu size={60} className="text-{#757575}" />
            <h4 className="heading__footer-mobile">Home</h4>
          </div>
          <div className="text-center">
            <RxHamburgerMenu size={60} className="text-{#757575}" />
            <h4 className="heading__footer-mobile">Promotion</h4>
          </div>
          <div className="text-center">
            <RxHamburgerMenu size={60} className="text-{#757575}" />
            <h4 className="heading__footer-mobile">Others</h4>
          </div>
        </div>
      </div>

      <h3 className="hidden md:block footer__copy text-center py-6">
        © 2021 Elemes id. All rights reserved
      </h3>
    </footer>
  );
};

export default Footer;
