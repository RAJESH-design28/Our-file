import { Bath, Bed } from "lucide-react";
import React from "react";

const ProptertyCard = ({ property }) => {
  return (
    <article>
      <img
        src={property.image}
        alt={property.id}
        className="h-103 w-103 object-cover"
      />

      <div className="p-7.5">
        <p className="text-[#005555] text-xl font-bold   ">{property.price}</p>
        <p className="my-2 text-[13px] text-[#666]">{property.address}</p>
        <p className="font-bold text-xl mb-4">{property.city}</p>

        <div className="flex items-center gap-4">
          <div className="flex text-xs text-[#666] items-center gap-2">
            <Bed />
            {property.beds} beds
          </div>
          <div className="flex text-xs text-[#666] items-center gap-2">
            <Bath />
            {property.baths} baths
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
