"use client";

import { useState } from "react";
import Container from "../shared/Container";
import Title from "../ui/Title";
import Image from "next/image";

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
    image: "/pictures/products$services/p$s1.png",
    category: "Engine",
  },
  {
    id: 2,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "GT-R Brake",
  },
  {
    id: 3,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "Wheels",
  },
  {
    id: 4,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "Car Lights",
  },
];

export default function ProductAndServices() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? cardData : cardData.filter((c) => c.category === active);

  return (
    <div>
      <Container>
        <Title title="PRODUCTS & SERVICES"></Title>
        <div className="px-5 md:px-10 py-10 text-white">
          {/* Tabs */}
          <div className="flex justify-center items-center">
            <div className="flex p-[5px] max-w-[730px] bg-white rounded-md items-center justify-center gap-4 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-3 py-2 rounded-md text-[20px] text-[#222222] whitespace-nowrap hover:bg-[#222222] hover:text-white hover:cursor-pointer transition duration-300 ease-in-out
                ${active === cat ? "bg-[#222222] text-white" : ""}`}
                >
                  {cat}
                </button>
              ))}

              <button className="text-xl ml-1">&gt;</button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="border border-gray-600 rounded-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full">
                  <Image
                    width={282}
                    height={312}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Black overlay */}
                  <div className="absolute text-center bottom-0 left-0 right-0 bg-black/65 p-3">
                    <h3 className="text-white text-[24px] font-medium text-center">
                      {item.title}
                    </h3>

                    <button className="mt-3 px-[60px] bg-[#F3D29C] text-black py-2.5 rounded-sm text-sm">
                      Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
