import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

const Card = () => {
  return (
    <div className="h-[600px] w-[90%] rounded-2xl mx-auto pt-4 mb-28 items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-between px-20 mt-20">
        <div className="w-[30%] h-[200px] border-2 rounded-3xl bg-white">
          <p className=" leading-7text-sm mt-4 text-start px-6">
            "This finance app template has been a game-changer for me. It's
            intuitive, easy to use, and helps me keep.”
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/1.webp"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Fletch Skinner</h1>
              <p className="text-sm">Apple CTO & Partner</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[200px] border-2 rounded-3xl  bg-white">
          <p className=" leading-7 mt-4  text-sm text-start px-6">
            "Our family uses this app to manage our finances together.”
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/1.webp"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Octavia Melvin</h1>
              <p className="text-sm">Watppad & Designer</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[200px] border-2 rounded-3xl  bg-white">
          <p className=" leading-7 mt-4 text-sm text-start px-6">
            "I've tried several finance apps, but this template stands out. It's
            highly customizable, and I love the budgeting.”
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/1.webp"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Dylan Meringu</h1>
              <p className="text-sm">Slack CEO & Partner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-20 mt-10">
        <div className="w-[30%] h-[200px] border-2 rounded-3xl  bg-white">
          <p className=" leading-7 mt-4 text-sm text-start px-6">
            "I'm not a financial expert, but this app template simplifies
            everything. I can track expenses.”
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/blue.png"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Sue Shei</h1>
              <p className="text-sm">Yelp CTO & UI Designer</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[200px] border-2 rounded-3xl  bg-white">
          <p className=" leading-7 mt-4 text-sm text-start px-6">
            "The reports and charts in this template are fantastic. They give me
            a clear picture of where my money is going."
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/1.webp"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Kate Smith</h1>
              <p className="text-sm">Zapier & HR</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[200px] border-2 rounded-3xl  bg-white">
          <p className=" leading-7 mt-4 text-sm text-start px-6">
            "As I plan for retirement, this app template has been a valuable
            tool.”
          </p>
          <div className="flex items-center gap-2 mt-4 px-6">
            <div className="flex items-start mr-3">
              <FaApple className="rounded-full border-2 text-4xl relative" />
              <Image
                src="/1.webp"
                height={40}
                width={40}
                alt="1"
                className="-ml-2 rounded-full border-2"
              />
            </div>
            <div>
              <h1 className="text-xl">Alan Fresco</h1>
              <p className="text-sm">Klarna & Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
