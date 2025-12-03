"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Title from "../ui/Title";
import Container from "../shared/Container";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elisa Grant",
    role: "Legacy Solutions Engineer",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
    image: "/pictures/customer_review/image1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Elisa Grant",
    role: "Legacy Solutions Engineer",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
    image: "/pictures/customer_review/image1.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Elisa Grant",
    role: "Legacy Solutions Engineer",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
    image: "/pictures/customer_review/image1.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Elisa Grant",
    role: "Legacy Solutions Engineer",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat",
    image: "/pictures/customer_review/image1.jpg",
    rating: 5,
  },
];

export default function CustomerReview() {
  return (
    <div className="py-16">
      <Container>
        <div className="w-full">
          <div>
            <Title title="CUSTOMER REVIEW"></Title>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            centeredSlides
            loop
            spaceBetween={40}
            slidesPerView={1.2}
            breakpoints={{
              1024: {
                slidesPerView: 2.2,
              },
            }}
            className={`py-14`}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#131313] overflow-hidden text-white rounded-xl p-8 flex items-center gap-6 shadow-[0_0_50px_rgba(255,255,255,0.25)]">
                  {/* Image */}
                  <div
                    style={{ borderRadius: "0 16px 0 16px" }}
                    className="min-w-[180px] h-[180px] overflow-hidden border border-gray-300"
                  >
                    <Image
                      width={160}
                      height={170}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      {"★"
                        .repeat(item.rating)
                        .split("")
                        .map((star, idx) => (
                          <span key={idx} className="text-[#F3D29C] text-lg">
                            {star}
                          </span>
                        ))}
                      <span className="text-sm text-[#F3D29C]">
                        {item.rating}.0 rating
                      </span>
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
                      {item.text}
                    </p>

                    {/* Name */}
                    <p className="font-semibold text-[#F3D29C]">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.role}</p>
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
