import React from "react";
import logo from "../img/hero/Image.png";
import star from "../img/hero/icon-star.png";

const Hero = () => {
  return (
    <section className="hero md:hero-md overflow-hidden">
      <div className="w-full relative md:absolute">
        <div className="container md:h-screen flex flex-col md:flex-row  md:items-center md:justify-center gap-2 mx-auto ">
          <div className=" mt-28 md:mt-0 basis-12/12 md:basis-6/12 col-1">
            <h1 className=" text-[48px]  font-[500] md:text-[64px] text-[#8bac3e] md:leading-[64px] mb-8 ml-[20px] md:ml-0">
              Good Food Us <br />
              Good Mood
            </h1>
            <div className=" flex relative w-[230px] h-[230px] mb-6  md:hidden bg-[#c4c4c46f] rounded-full mb-20 md:mb-0 ml-6 md:ml-0">
              <img
                src={logo}
                className="absolute top-[18px] left-[19px] md:top-14 md:left-14 w-[192px]"
                alt="logo hero"
              />
              <div className="absolute top-[150px] left-[100px] md:top-[25rem] md:-left-16 flex gap-6 w-[300px] md:w-[292px] rounded-[17px] bg-white/70 py-[18px] px-[23px]">
                <div className="flex gap-2 overflow-hidden">
                  <img src={logo} className="w-[53px]" alt="logo hero mini" />
                  <div>
                    <h1>Green Salad Tomato</h1>
                    <p>Tomato</p>
                    <img src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[350px] md:w-auto mb-8 mx-6 md:mx-0">
              <p className="hero__desc">
                I would think that conserving our natural resources <br />{" "}
                should be a conservative position: Not to waste food, and <br />{" "}
                not to throw away a lot of the food that we buy.
              </p>
            </div>
            <div className="flex gap-3 w-[300px] md:w-auto mx-6  md:mx-0">
              <button className="button button__primary">
                Daftar Sekarang
              </button>
              <button className="button button__secondary">About Us</button>
            </div>
          </div>
          <div className="hidden md:flex md:basis-6/12">
            <div className="md:relative md:w-[518px] md:h-[518px] bg-[#c4c4c46f] rounded-full">
              <img
                src={logo}
                className="absolute top-14 left-14 object-cover"
                alt="logo"
              />
              <div className="absolute md:top-[25rem] md:-left-16 flex gap-6 w-[292px] rounded-[17px] bg-white/70 py-[18px] px-[23px]">
                <img src={logo} className="w-[53px]" alt="logo" />
                <div>
                  <h1>Green Salad Tomato</h1>
                  <p>Tomato</p>
                  <img src={star} alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
