import { Bath, Bed } from "lucide-react";
import React from "react";

const ProptertyCard = () => {
  return (
    <article>
      <img
        src="https://themewagon.github.io/property/images/img_6.jpg"
        alt="property"
        className="h-103 w-103"
      />

      <div className="p-7.5">
        <p className="text-[#005555] text-xl font-bold   ">$1,29,000</p>
        <p className="my-2 text-[13px] text-[#666]">
          532 California Fake , Ave.
        </p>
        <p className="font-bold text-xl mb-4">Kathmandu, Nepal</p>

        <div className="flex items-center gap-4">
          <div className="flex text-xs text-[#666] items-center gap-2">
            <Bed />2 beds
          </div>
          <div className="flex text-xs text-[#666] items-center gap-2">
            <Bath />2 baths
          </div>
        </div>

        <button className="mt-4 bg-[#005555] px-4 py-2 rounded-full text-white">
          See details
        </button>
      </div>
    </article>
  );
};

export default ProptertyCard;
