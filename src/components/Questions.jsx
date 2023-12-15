"use client";
import React from "react";
import CustomButton from "./CustomButton";
import AllQuestion from "./AllQuestion";
import Card from "./Card";
import { motion } from "framer-motion";

const Questions = () => {
  return (
    <motion.div
      className=" bg-transparent"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="mx-auto mt-28 w-[90%]">
        <CustomButton
          className=" flex items-center mx-auto p-3  border bg-transparent rounded-3xl mt-32 mb-10"
          text="Maercury Finance App"
        />
      </div>
      <div className="flex items-center justify-center mx-40">
        <div>
          <h1 className="font-semibold text-6xl text-center  leading-tight">
            Frequently Asked
            <br />
            <span className="text-blue-500 ml-2">Questions</span>
          </h1>
        </div>
      </div>
      <AllQuestion />
      <div>
        <h1 className="text-center text-4xl font-semibold mb-6 leading-tight">
          Need Help?
        </h1>
        <p className="text-center mb-8">
          We’re here to help! Feel free to reach out to one of our friendly team
          members for <br /> app support or consider speaking with our team of
          planners.
        </p>
        <CustomButton
          className=" flex items-center px-6 mb-10 mx-auto p-3 text-white  border bg-black rounded-3xl"
          text="Book a Demo"
        />
      </div>
      <Card />
    </motion.div>
  );
};

export default Questions;
