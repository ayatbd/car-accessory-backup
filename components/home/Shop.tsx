"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function CarSlider() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="relative w-full max-w-[1300px] mx-auto py-10">
      {/* LEFT ARROW */}
      <button
        className="swiper-button-prev-custom absolute left-[-55px] top-1/2 -translate-y-1/2 
                   w-[50px] h-[50px] border border-white/40 rounded-md 
                   flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6L9 12L15 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        className="swiper-button-next-custom absolute right-[-55px] top-1/2 -translate-y-1/2 
                   w-[50px] h-[50px] bg-[#EAC88C] rounded-md shadow 
                   flex items-center justify-center hover:bg-[#f0d9a7] transition"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="w-full"
      >
        {cards.map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              {/* Image */}
              <Image
                width={328}
                height={190}
                src="/pictures/shop/image1.png"
                alt="car shop"
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Car Repair Shop</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Explore our diverse inventory, receive expert service, and
                  find unbeatable deals at our trusted car shop.
                </p>
                <button className="bg-[#EAC88C] px-5 py-2 font-medium rounded-md">
                  Enquire Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
