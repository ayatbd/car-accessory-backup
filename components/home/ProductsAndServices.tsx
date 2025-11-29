"use client";

import { useState } from "react";

const categories = [
  "All",
  "GT-R Brake",
  "Wheels",
  "Engine",
  "Ball Bearing",
  "Car Lights",
];

const cardData = [
  {
    id: 1,
    title: "AC service & repair",
    image: "/images/service1.jpg",
    category: "Engine",
  },
  {
    id: 2,
    title: "AC service & repair",
    image: "/images/service1.jpg",
    category: "GT-R Brake",
  },
  {
    id: 3,
    title: "AC service & repair",
    image: "/images/service1.jpg",
    category: "Wheels",
  },
  {
    id: 4,
    title: "AC service & repair",
    image: "/images/service1.jpg",
    category: "Car Lights",
  },
];

export default function ProductAndServices() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? cardData : cardData.filter((c) => c.category === active);

  return (
    <div className="px-5 md:px-10 py-10 bg-black text-white">
      {/* Tabs */}
      <div className="flex items-center gap-4 overflow-x-auto pb-3 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-md border text-sm whitespace-nowrap transition 
                ${
                  active === cat
                    ? "bg-white text-black font-semibold"
                    : "border-gray-500 text-gray-300 hover:bg-white/10"
                }`}
          >
            {cat}
          </button>
        ))}

        <button className="text-xl ml-1">&gt;</button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 rounded-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Black overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/55 p-3">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>

                <button className="mt-3 w-full bg-[#F3D29C] text-black py-2 rounded-md text-sm">
                  Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
