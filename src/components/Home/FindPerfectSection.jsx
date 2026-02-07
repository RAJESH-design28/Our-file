import React, { useMemo } from "react";
import { Home, UserRound, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";

const FindPerfectSection = () => {
  const highlights = useMemo(
    () => [
      {
        id: 1,
        title: "2M Properties",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: Home,
      },
      {
        id: 2,
        title: "Top Rated Agents",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: UserRound,
        active: false,
      },
      {
        id: 3,
        title: "Legit Properties",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: ShieldCheck,
        active: false,
      },
    ],
    []
  );

  const stats = useMemo(
    () => [
      { id: 1, value: 3298, label: "# of Buy Properties" },
      { id: 2, value: 2181, label: "# of Sell Properties" },
      { id: 3, value: 9316, label: "# of All Properties" },
      { id: 4, value: 7191, label: "# of Agents" },
    ],
    []
  );

  return (
    <section className="py-8 bg-[#F8F9FA]">
      <div className="mx-auto px-3 py-16 w-324 ">
        <div className=" mx-auto mb-[56px] text-center space-y-4 max-w-[600px] ">
          <h1 className="text-secondary text-[36px] font-medium">
            Let's find home that's perfect for you{" "}
          </h1>
          <p className="text-[#787777]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit.{" "}
          </p>
        </div>

        <div className="grid grid-cols-2">
          <ul className="space-y-16">
            {highlights.map((el) => {
              const Icon = el.icon;
              return (
                <li className="flex items-center gap-4">
                  <div className="bg-[#bababa] h-16 w-16 flex items-center justify-center rounded-full">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-secondary text-lg font-medium">
                      {el.title}
                    </h3>
                    <p className="text-[#787777]">{el.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <img
            src="https://themewagon.github.io/property/images/hero_bg_3.jpg"
            alt="propery"
          />
        </div>

        <div className="mt-12 grid grid-cols-4">
          {stats.map((el) => (
            <div key={el.id}>
              <h3 className="text-[40px] text-secondary font-bold">
                <CountUp
                  end={el.value}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>

              <p className="text-sm text-[#787777]">{el.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindPerfectSection;
