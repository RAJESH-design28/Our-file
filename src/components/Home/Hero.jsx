import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 h-screen bg-[url('https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover" />
      <div className="absolute inset-0 bg-black/40 h-screen" />
      <div className="absolute inset-0 h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl text-white">
          {" "}
          Easiest way to find your dream home
        </h1>

        <div className="space-x-4">
          <input
            type="text"
            placeholder="Your location e.g. Dharan"
            className="bg-white py-4 px-7 rounded-full"
          />
          <button className="py-4 bg-primary px-6 text-white rounded-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
