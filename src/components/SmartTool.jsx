"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const SmartTool = () => {
  return (
    <motion.div
      className="flex gap-48 w-[90%] mx-auto"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <CustomButton
          className="p-2 mb-6 border bg-transparent rounded-3xl"
          text="Mercury Finance App"
        />
        <h1 className="font-bold text-5xl mb-6 leading-tight">
          Achieve Your <br />
          Savings Goals with
          <br />
          <span className="text-blue-500 ml-2">Smart Tools.</span>
        </h1>
        <p className="text-lg mb-10">
          Achieve your savings goals with the help of our smart tools. Set
          specific <br /> targets, create savings plans, and track your
          progress.
        </p>
        <div className="flex items-center gap-10">
          <div className="flex gap-3 items-center">
            <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
            <p>
              Spend up to <span className="font-semibold">$40,000</span> per
              more
            </p>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
              <p>
                Spend up to <span className="font-semibold">$40,000</span> per
                more
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-10">
          <button className=" flex items-center p-2 gap-3 border bg-black text-white rounded-3xl">
            Get a Demo
            <MdArrowOutward />
          </button>
          <CustomButton
            className="p-2 border bg-transparent rounded-3xl"
            text="Learn More"
          />
        </div>
      </div>
      <div>
        <div className="w-[300px] h-[470px] bg-slate-100 rounded-2xl relative">
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/card1.svg"
              alt="card1"
              height={500}
              width={300}
              className="absolute mt-10 ml-12 rounded-2xl"
            />
            <Image
              src="/card2.svg"
              alt="card2"
              width={300}
              height={100}
              className="absolute mt-72 ml-32 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SmartTool;
