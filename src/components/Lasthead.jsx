"use client";
import React from "react";
import { motion } from "framer-motion";

const Lasthead = () => {
  return (
    <motion.div
      className="flex items-center justify-between"
      initial={{ x: 100 }}
      animate={{ x: -2000 }}
      transition={{ duration: "5" }}
    >
      <h1 className="text-4xl">
        <span className="text-blue-300">MERCURY</span>
        <span className="text-blue-400">READY</span>
        <span className="text-purple-400">TO MOVE FASTER</span>
      </h1>
      <h1 className="text-4xl">
        <span className="text-blue-300">MERCURY</span>
        <span className="text-blue-400">READY</span>
        <span className="text-purple-400">TO MOVE FASTER</span>
      </h1>
    </motion.div>
  );
};

export default Lasthead;
