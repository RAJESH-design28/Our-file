import React from "react";

const PopularProperties = () => {
  return (
    <section className="mx-auto px-3 py-16 w-324">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-medium text-blue-950">
          Popular Properties
        </h1>

        <button className="bg-[#005555] text-white py-4 px-6 rounded-full">
          View all properties
        </button>
      </div>
    </section>
  );
};

export default PopularProperties;
