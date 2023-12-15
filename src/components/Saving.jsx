import React from "react";
import CustomButton from "./CustomButton";
import { FaApple } from "react-icons/fa";
import { PiNavigationArrowFill } from "react-icons/pi";
import Image from "next/image";
import Pagewrapper from "@/app/Pagewrapper";

const Saving = () => {
  return (
    <div className=" mx-auto mt-32 w-[90%] h-[950px] border-2 rounded-2xl">
      <div>
        <CustomButton
          className=" flex items-center mx-auto p-3  border bg-transparent rounded-3xl mt-32 mb-10"
          text="Maercury Finance App"
        />
      </div>
      <div className="flex items-center justify-between mx-40">
        <div className="relative cursor-pointer">
          <PiNavigationArrowFill className="text-1.5xl ml-16 rotate-90  -mt-4 absolute" />
          <p className="p-1.5 px-4 text-white bg-black rounded-3xl">John</p>
        </div>

        <div>
          <h1 className="font-semibold text-6xl mb-6 leading-tight">
            Start Saving
            <span className="text-blue-500 ml-2">Today</span>
          </h1>
          <p className="text-lg mb-10 leading-8 text-center">
            Your powerful companion on the road to financial success! Explore
            <br /> personal budget management, investment opportunities and
            more.
          </p>

          <CustomButton
            icon=<FaApple />
            text=" Download App Store"
            className=" flex items-center p-3  mx-auto bg-black text-white border rounded-3xl"
          />
        </div>

        <div className="relative cursor-pointer mt-16">
          <PiNavigationArrowFill className="text-1.5xl -ml-4 -mt-4 absolute" />
          <p className="p-1.5 px-4 text-white bg-black rounded-3xl">Kate</p>
        </div>
      </div>
      <Pagewrapper>
        <div className="mt-20 ">
          <Image
            src="/sphone.webp"
            height={50}
            width={400}
            alt="phone"
            className="mx-auto"
          />
        </div>
      </Pagewrapper>
    </div>
  );
};

export default Saving;
