import React from "react";
import ServiceCard from "./ServiceCard";
import { Home, Building2, UserRound } from "lucide-react";

const ServiceSection = () => {
  const featureCards = [
    {
      title: "Our Properties",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptates, accusamus.",

      icon: Home,
    },
    {
      title: "Property for Sale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptates, accusamus.",

      icon: Building2,
    },
    {
      title: "Real Estate Agent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptates, accusamus.",

      icon: UserRound,
    },
    {
      title: "House for Sale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptates, accusamus.",

      icon: Home,
    },
  ];

  return (
    <section className="bg-[#ededed] py-7.5 ">
      <div className=" mx-auto px-3 w-324">
        <div className="grid grid-cols-4 gap-4">
          {featureCards.map((el) => (
            <ServiceCard service={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
