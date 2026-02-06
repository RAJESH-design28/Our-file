import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialCard from "./TestimonialCard";
import { useRef } from "react";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const testimonials = [
    {
      id: 1,
      name: "Dave Smith",
      role: "Designer, Co-founder",
      rating: 2,
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=240&h=240&q=80",
    },
    {
      id: 2,
      name: "James Smith",
      role: "Product Lead",
      rating: 3,
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&w=240&h=240&q=80",
    },
    {
      id: 3,
      name: "Mike Houston",
      role: "Marketing Manager",
      rating: 5,
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=240&h=240&q=80",
    },
    {
      id: 4,
      name: "Sara Jensen",
      role: "Real Estate Agent",
      rating: 5,
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=240&h=240&q=80",
    },
    {
      id: 5,
      name: "Leo Perez",
      role: "Home Buyer",
      rating: 5,
      quote:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=240&h=240&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 mx-auto px-3 w-324">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-[32px] font-medium text-secondary">
          Customer Says
        </h1>
        <div className="space-x-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#c5c5c5] text-secondary px-5 py-2 rounded-full hover:bg-secondary hover:text-white cursor-pointer"
          >
            Prev
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#c5c5c5] text-secondary px-5 py-2 rounded-full hover:bg-secondary hover:text-white cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((el) => (
          <TestimonialCard testimonial={el} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
