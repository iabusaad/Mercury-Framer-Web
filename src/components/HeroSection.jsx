"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import Pagewrapper from "@/app/Pagewrapper";

const HeroSection = () => {
  return (
    <Pagewrapper>
      <div className="border-2 rounded-3xl m-auto w-[90%]">
        <div className="flex w-full px-40 pt-10 justify-between gap-6">
          <div>
            <CustomButton
              className="p-3 mb-6 px-10 border bg-transparent rounded-2xl"
              text="Financial Management"
            />
            <h1 className="font-bold text-7xl mb-6">
              A simpler,
              <br />
              smarter basic <br />
              <span>credit</span>
              <span className="text-blue-500 ml-2">card.</span>
            </h1>
            <p className="text-lg mb-10">
              Your powerful companion on the road to financial success! Explore{" "}
              <br /> personal budget management, investment opportunities.
            </p>
            <div className="flex gap-8 ">
              <div>
                <CustomButton
                  icon=<FaApple />
                  text="App Store"
                  className="p-3 px-6 bg-black text-white border rounded-2xl"
                />
              </div>
              <div className="flex relative">
                <Image
                  src="/1.webp"
                  alt="img"
                  width={50}
                  height={50}
                  className="border-2 rounded-full"
                />
                <Image
                  src="/2.webp"
                  alt="img"
                  width={50}
                  height={50}
                  className="border-2 rounded-full ml-[-10px]"
                />
                <Image
                  src="/3.webp"
                  alt="img"
                  width={50}
                  height={50}
                  className="border-2 rounded-full ml-[-10px] "
                />
              </div>
              <div>
                <h1 className="font-semibold">24k+</h1>
                <p>Active User</p>
              </div>
            </div>
          </div>
          <div>
            <Image src="/phone.webp" alt="phone" width={424} height={682} />
          </div>
        </div>
      </div>
    </Pagewrapper>
  );
};

export default HeroSection;
