import React from "react";
import ProptertyCard from "../Property/ProptertyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularProperties = () => {
  const properties = [
    {
      id: 1,
      price: "$129,000",
      address: "532 California Fake Ave.",
      city: "Kathmandu, Nepal",
      beds: 2,
      baths: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      id: 2,
      price: "$215,000",
      address: "Lakeside Street",
      city: "Pokhara, Nepal",
      beds: 3,
      baths: 2,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    },
    {
      id: 3,
      price: "$98,500",
      address: "Peaceful Residency",
      city: "Bhaktapur, Nepal",
      beds: 2,
      baths: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 4,
      price: "$320,000",
      address: "City View Apartments",
      city: "Lalitpur, Nepal",
      beds: 4,
      baths: 3,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
  };

  return (
    <section className="mx-auto px-3 py-16 w-324">
      <div className="flex justify-between mb-14">
        <h1 className="text-[32px] font-medium text-blue-950">
          Popular Properties
        </h1>

        <button className="bg-[#005555] text-white py-4 px-6 rounded-full">
          View all properties
        </button>
      </div>

      <Slider {...settings}>
        {properties.map((property) => (
          <ProptertyCard property={property} />
        ))}
      </Slider>
    </section>
  );
};

export default PopularProperties;
