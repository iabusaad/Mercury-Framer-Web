"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";

const Freedom = () => {
  return (
    <motion.div
      className=" mx-auto mt-10 w-[90%]"
      animate={{ y: 50 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <CustomButton
          className=" flex items-center mx-auto p-3  border bg-transparent rounded-3xl mt-32 mb-10"
          text="Maercury Finance App"
        />
      </div>
      <div className="flex items-center justify-center mx-40">
        <div>
          <h1 className="font-semibold text-6xl mb-14 leading-tight">
            Our Solution Empowers
            <br />
            <span className="text-blue-500 ml-2">Financial Freedom!</span>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-between px-20">
        <div className="w-[48%] h-[420px] border-2 rounded-3xl bg-gray-50">
          <Image src="/img1.webp" alt="img1" width={600} height={100} />
          <h1 className="text-2xl font-semibold text-center mb-6">
            Thousands of data sources of Mercury
          </h1>
          <p className=" leading-7  text-sm text-start px-6">
            Sync your calendar and track your meeting exspanenses. Mercury will
            read this and <span className="font-semibold">categorize</span> your
            expense <span className="font-semibold">against your budget</span>{" "}
            in seconds.
          </p>
        </div>
        <div className="w-[48%] h-[420px] border-2 rounded-3xl bg-gray-50">
          <Image src="/img2.webp" alt="img2" width={600} height={100} />
          <h1 className="text-2xl font-semibold text-center mb-6">
            Instant transfers for users
          </h1>
          <p className=" leading-7  text-sm text-start px-6">
            <span className="font-semibold">Instantly transfer</span> money
            expense
            <span className="font-semibold">money to other Mercury users</span>
            in seconds. Better yet, no transaction fees.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-20 mt-20">
        <div className="w-[30%] h-[150px] border-2 rounded-3xl">
          <h1 className="text-lg font-semibold text-center mb-3 mt-6">
            Real-time Notifications
          </h1>
          <p className=" leading-7  text-sm text-start px-6">
            Our solution empowers users with{" "}
            <span className="font-semibold">real-time</span> notifications.
          </p>
        </div>
        <div className="w-[30%] h-[150px] border-2 rounded-3xl">
          <h1 className="text-lg font-semibold text-center mb-3 mt-6">
            Spending Warnings
          </h1>
          <p className=" leading-7  text-sm text-start px-6">
            Our solution provides
            <span className="font-semibold"> comprehensive tools</span> to help
            you manage your spending.
          </p>
        </div>
        <div className="w-[30%] h-[150px] border-2 rounded-3xl">
          <h1 className="text-lg font-semibold text-center mb-3 mt-6">
            Designed to Boost Savings
          </h1>
          <p className=" leading-7  text-sm text-start px-6">
            Our solution is
            <span className="font-semibold"> designed to boost</span> your
            savings and highlight opportunity areas
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Freedom;
