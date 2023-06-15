import React from "react";
import pizza1 from "../img/trending/categori-1.png";
import pizza2 from "../img/trending/categori-2.png";
import kebab1 from "../img/trending/categori-3.png";
import salmon from "../img/trending/categori-4.png";
import cupcake from "../img/trending/categori-5.png";
import donat1 from "../img/trending/categori-6.png";
import donat2 from "../img/trending/categori-7.png";
import kebab2 from "../img/trending/categori-8.png";
import { AiFillStar } from "react-icons/ai";

const Trending = () => {
  return (
    <section id="trending">
      <div className="container mx-auto py-[40px]">
        <div className="container py-10 mx-auto ">
          <h1 className="trending__heading md:trending__heading-md mx-6 md:mx-0 w-[250px] md:w-[500px] ">
            Browser Our Trending <br />
            <span className=" text-[#A4B441]"> Receipt</span>
          </h1>
        </div>
        <div className="container mx-auto my-[40px]">
          <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-4 md:grid-rows-2 gap-y-6 mx-6 md:mx-0">
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#e6f3f5] hover:bg-[#e6f3f594] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={pizza1} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Pizza Paperoni</h1>
                  <p className="category__desc__card">Pizza</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#e6f3f5] hover:bg-[#e6f3f594] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={pizza2} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Pizza Meat</h1>
                  <p className="category__desc__card">Pizza</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-gray-400" />
                    <AiFillStar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#eaeefa] hover:bg-[#eaeefa94] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={kebab1} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Doner Kebab</h1>
                  <p className="category__desc__card">Kebab</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#F9EEF3] hover:bg-[#F9EEF394] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={salmon} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Salmon Roll</h1>
                  <p className="category__desc__card">Salmon</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#F0FEEB] hover:bg-[#F0FEEB94] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={cupcake} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Cupcake Choco</h1>
                  <p className="category__desc__card">Cupcake</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#F3F7D9] hover:bg-[#F3F7D994] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={donat1} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Doughnut Milk</h1>
                  <p className="category__desc__card">Doughnut</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#F3F7D9] hover:bg-[#F3F7D994] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={donat2} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Doughnut Unicorn</h1>
                  <p className="category__desc__card">Doughnut</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="background-overlay__category hover:translate-y-2 hover:shadow-md transition duration-300 ease-in-out w-[350px] md:w-auto">
              <div className="w-[350px] md:w-[282px] flex flex-col justify-start items-start bg-[#eaeefa] hover:bg-[#eaeefa94] transition duration-300 ease-in-out  rounded-[8px] py-[31px] pl-[30px]">
                <img src={kebab1} className="w-[119px]" />
                <div className="mt-8 flex flex-col ">
                  <h1 className="category__heading__card">Doner Kebab</h1>
                  <p className="category__desc__card">Kebab</p>
                  <div className="flex gap-1">
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                    <AiFillStar className="text-[#FF8412]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
