"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

const Management = () => {
  return (
    <motion.div
      className="flex gap-60 w-[90%] mx-auto mt-32 justify-center "
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[300px] h-[470px] bg-slate-100 rounded-2xl relative">
        <Image
          src="/card3.svg"
          alt="card3"
          width={300}
          height={100}
          className="absolute mt-72 ml-32 rounded-2xl"
        />
        <Image
          src="/card4.svg"
          alt="card4"
          height={500}
          width={300}
          className="absolute mt-10 ml-12 rounded-2xl"
        />
      </div>
      <div>
        <CustomButton
          className="p-2 mb-6 border bg-transparent rounded-3xl"
          text="Mercury Finance App"
        />
        <h1 className="font-bold text-5xl mb-6 leading-tight">
          Bill and Reminder <br />
          <span className="text-blue-500 ml-2">Management.</span>
        </h1>
        <p className="text-lg mb-10 leading-8">
          Mercury uses a reminder system to track regular bills and payments,
          <br /> ensuring timely payments and avoiding late fees.
        </p>

        <div className="flex gap-3 items-center">
          <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
          <p className="leading-8">
            Spend up to <span className="font-semibold">$40,000</span> per more
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
          <p className="leading-8">
            No fees on your{" "}
            <span className="font-semibold">foreign currency</span>expenses
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
          <p className="leading-8">
            <span className="font-semibold">Personalized</span> Mercury credit
            card
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <TiTick className="border-2 bg-blue-600 rounded-full text-white" />
          <p className="leading-8">
            Priority service and security team{" "}
            <span className="font-semibold">access included</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Management;
