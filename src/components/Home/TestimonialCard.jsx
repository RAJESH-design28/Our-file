import { Star } from "lucide-react";
import React from "react";

const TestimonialCard = () => {
  return (
    <article className="space-y-6 px-4 ">
      <img
        src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=240&h=240&q=80"
        alt="thopda"
        className="h-[100px] w-[100px] rounded-full"
      />

      <div>
        <div className="flex">
          {[1, 2, 3, 4].map(() => (
            <Star className="h-5 w-5 " fill="#f5c542" stroke="none" />
          ))}
        </div>

        <h3 className="text-lg font-medium  text-secondary">Sisan Baniya</h3>
      </div>

      <p className="text-sm  leading-[180%]">
        "Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean."
      </p>

      <span className="text-sm text-[#999] -mt-3"> Designer , Co-founded</span>
    </article>
  );
};

export default TestimonialCard;
