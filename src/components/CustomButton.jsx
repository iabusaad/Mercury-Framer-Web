import React from "react";

const CustomButton = ({ text, className, icon }) => {
  return (
    <button className={className}>
      <div className="flex  items-center gap-3  ">
        {icon}
        {text}
      </div>
    </button>
  );
};

export default CustomButton;
