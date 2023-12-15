import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const RevenueTeam = () => {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center">
        The platform fueling today’s high-growth revenue teams
      </h1>
      <div className="flex items-center justify-between mx-36 mt-10 mb-10">
        <Image Src="/towa.svg" alt="towa" height={40} />
        <Image Src="/stamp.svg" alt="stamp" height={40} />
        <Image Src="/rigid.svg" alt="rigid" height={40} />
        <Image Src="/manter.svg" alt="manter" height={40} />
        <Image Src="/explo.svg" alt="explo" height={40} />
      </div>
      <CustomButton
        text="See Customer eview"
        className="flex items-center mx-auto p-2 px-6 border rounded-3xl"
      />
    </div>
  );
};

export default RevenueTeam;
