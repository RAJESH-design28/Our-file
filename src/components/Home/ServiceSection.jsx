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
    <section className="bg-[#ededed] py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-324">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {featureCards.map((el, index) => (
            <ServiceCard key={index} service={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
