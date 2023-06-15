import React from "react";
import pizza from "../img/Category/pizza 1.png";
import donut from "../img/Category/doughnut 1.png";
import pancake from "../img/Category/Frame.png";
import kebab from "../img/Category/kebab 1.png";
import salmon from "../img/Category/salmon 1.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Category = () => {
  return (
    <section id="category" className="py-5 mt-10">
      <div className="container py-10 mx-auto ">
        <h1 className="trending__heading md:trending__heading-md mx-6 md:mx-0 w-[300px] md:w-[500px] ">
          Browser Our Category <br />{" "}
          <span className=" text-[#A4B441]"> Receipt</span>
        </h1>
      </div>
      <div className="container mx-auto my-[40px]">
        <div className="flex gap-4 basis-4/12 overflow-auto">
          <div className="background-overlay hover:translate-y-2 transition duration-300 ease-in-out ">
            <div className="w-[300px] flex flex-col justify-center items-center bg-[#F0FEEB] hover:bg-[#F0FEEB94] transition duration-300 ease-in-out  rounded-[8px] py-[31px] px-[81px]">
              <img src={pancake} className="w-[47px]" />
              <div className="mt-8 text-center">
                <h1 className="font-[500] text-[16px] leading-[22px] text-[#333]">
                  Cupcake
                </h1>
                <p className="font-[400] text-[14px] leading-[16px]">
                  22 Items
                </p>
              </div>
            </div>
          </div>
          <div className="background-overlay hover:translate-y-2 transition duration-300 ease-in-out ">
            <div className="w-[300px] flex flex-col justify-center items-center bg-[#e6f3f5] hover:bg-[#e6f3f594] transition duration-300 ease-in-out  rounded-[8px] py-[31px] px-[81px]">
              <img src={pizza} className="w-[47px]" />
              <div className="mt-8 text-center">
                <h1 className="font-[500] text-[16px] leading-[22px] text-[#333]">
                  Pizza
                </h1>
                <p className="font-[400] text-[14px] leading-[16px]">
                  25 Items
                </p>
              </div>
            </div>
          </div>
          <div className="background-overlay hover:translate-y-2 transition duration-300 ease-in-out ">
            <div className="w-[300px] flex flex-col justify-center items-center bg-[#eaeefa] hover:bg-[#eaeefa94] transition duration-300 ease-in-out  rounded-[8px] py-[31px] px-[81px]">
              <img src={kebab} className="w-[47px]" />
              <div className="mt-8 text-center">
                <h1 className="font-[500] text-[16px] leading-[22px] text-[#333]">
                  Kebab
                </h1>
                <p className="font-[400] text-[14px] leading-[16px]">
                  12 Items
                </p>
              </div>
            </div>
          </div>
          <div className="background-overlay hover:translate-y-2 transition duration-300 ease-in-out ">
            <div className="w-[300px] flex flex-col justify-center items-center bg-[#F9EEF3] hover:bg-[#F9EEF394] transition duration-300 ease-in-out  rounded-[8px] py-[31px] px-[81px]">
              <img src={salmon} className="w-[47px]" />
              <div className="mt-8 text-center">
                <h1 className="font-[500] text-[16px] leading-[22px] text-[#333]">
                  Salmon
                </h1>
                <p className="font-[400] text-[14px] leading-[16px]">
                  22 Items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className=" hidden md:flex justify-end  gap-3 mr-[29px]">
          <div className="prev p-4 bg-[#8BAC3E] rounded-full">
            <button className="button__category  flex items-center justify-center gap-3 text-white">
              <BsFillArrowLeftCircleFill size={30} className="text-white" />
              PREV
            </button>
          </div>
          <div className="next p-4 bg-[#8BAC3E] rounded-full ">
            <button className="button__category  flex items-center justify-center gap-3 text-white">
              NEXT
              <BsFillArrowRightCircleFill size={30} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
