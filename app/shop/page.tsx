"use client";

import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const workshops = [
  {
    id: 1,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 2,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 3,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 4,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 5,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 6,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
  {
    id: 7,
    name: "Car Therapy Centre",
    address: "127 Kaikorai Valley Road, Dunedin",
    rating: 4.8,
    reviews: 61,
    img: "/pictures/shop/imagecard.png",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-[#111] min-h-screen px-4 overflow-hidden">
      <PageBanner title="Shop" subtitle="Shop" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-24">
          {workshops.map((item) => (
            <div
              key={item.id}
              className="bg-black rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-1 text-white flex gap-2">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-300">{item.address}</p>

                  {/* Ratings */}
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <FaStar size={16} />
                    <span className="text-white">{item.rating}</span>
                    <span className="text-gray-400 text-sm">
                      ({item.reviews}+ Reviews)
                    </span>
                  </div>
                </div>
                <div className="">
                  {/* Visit Button */}
                  <button className="mt-3 bg-[#F3D29C] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#eac88d] transition">
                    Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
