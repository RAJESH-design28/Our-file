import React from "react";
import { Home, UserRound, ShieldCheck } from "lucide-react";

const FindPerfectSection = () => {
  const highlights = [
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
  ];

  const stats = [
    { id: 1, value: "3,298", label: "# of Buy Properties" },
    { id: 2, value: "2,181", label: "# of Sell Properties" },
    { id: 3, value: "9,316", label: "# of All Properties" },
    { id: 4, value: "7,191", label: "# of Agents" },
  ];

  return (
    <section className="mx-auto px-3 py-16 w-324">
      <div className="text-center">
        <h2 className="text-[32px] font-medium text-secondary">
          Let&apos;s find home that&apos;s perfect for you
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim
          pariatur similique debitis vel nisi qui reprehenderit.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1.6fr]">
        <div className="space-y-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-5 transition-colors"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200 text-slate-400 transition-colors group-hover:border-blue-900 group-hover:text-blue-900">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative">
          <div
            className="absolute -right-6 top-10 hidden h-44 w-44 rounded-xl lg:block"
            style={{
              backgroundImage:
                "radial-gradient(#d5dbe3 2px, transparent 2px)",
              backgroundSize: "16px 16px",
            }}
          />
          <img
            className="h-full w-full rounded-2xl object-cover shadow-[0_12px_40px_rgba(15,23,42,0.15)]"
            src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1200&q=80"
            alt="Modern home"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative mt-12">
        <div
          className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-xl lg:block"
          style={{
            backgroundImage:
              "radial-gradient(#d5dbe3 2px, transparent 2px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-[32px] font-semibold text-secondary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindPerfectSection;
