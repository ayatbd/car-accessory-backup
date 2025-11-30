"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "../shared/Container";
import Title from "../ui/Title";

const data = [
  {
    id: 1,
    img: "/pictures/shop/image2.jpg",
    title: "Car Repair Shop",
    desc: "Explore our diverse inventory, receive expert service, and find unbeatable deals at our trusted car shop.",
  },
  {
    id: 2,
    img: "/pictures/shop/image2.jpg",
    title: "Car Repair Shop",
    desc: "Explore our diverse inventory, receive expert service, and find unbeatable deals at our trusted car shop.",
  },
  {
    id: 3,
    img: "/pictures/shop/image2.jpg",
    title: "Car Repair Shop",
    desc: "Explore our diverse inventory, receive expert service, and find unbeatable deals at our trusted car shop.",
  },
  {
    id: 4,
    img: "/pictures/shop/image2.jpg",
    title: "Car Repair Shop",
    desc: "Explore our diverse inventory, receive expert service, and find unbeatable deals at our trusted car shop.",
  },
];

export default function Shop() {
  return (
    <div className="bg-[#222222]">
      <Title title="SHOP"></Title>
      <Container>
        <div className="relative mx-auto py-10">
          {/* Navigation Buttons */}
          <div className="swiper-button-prev left-0! text-white! border! !border-white !p-4 !rounded-sm hover:bg-[#FFE6B9] hover:text-black! transition duration-300 ease-in-out"></div>
          <div className="swiper-button-next right-0! text-white! !border !border-white !p-4 !rounded-sm hover:bg-[#FFE6B9] hover:text-black! transition duration-300 ease-in-out"></div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            centeredSlides={false}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#5b5857] backdrop-blur-lg text-white rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={item.img}
                    width={600}
                    height={300}
                    alt={item.title}
                    className="w-full object-cover p-1 rounded-md"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[12px] text-white mb-3">{item.desc}</p>

                    <button className="bg-[#f9dba5] text-black px-6 py-2 rounded">
                      Enquire Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
