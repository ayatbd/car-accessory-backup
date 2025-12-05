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
    id: 5,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "GT-R Brake",
  },
  {
    id: 6,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "Car Lights",
  },
  {
    id: 7,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "GT-R Brake",
  },
  {
    id: 8,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "Ball Bearing",
  },
  {
    id: 9,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png",
    category: "Ball Bearing",
  },
  {
    id: 10,
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
        <div className="px-5 w-full md:px-10 py-10 text-white">
          <div className="text-center">
            <div className="lg:inline-block">
              <ul className="flex max-lg:flex-col max-lg:space-y-4 gap-2 p-1 bg-gray-100 rounded-md overflow-hidden">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`tab text-[15px] py-3.5 px-7 border-t-[3px] cursor-pointer rounded-md transition
              ${
                active === cat
                  ? "text-white bg-[#222222] font-semibold text"
                  : "text-black hover:text-black hover:bg-gray-300 font-medium"
              }
            `}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {filtered.slice(0, 8).map((item) => (
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

                    <button className="mt-3 cursor-pointer px-[60px] bg-[#F3D29C] text-black py-2.5 rounded-sm text-sm">
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
