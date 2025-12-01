"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ratingBars = [
  { stars: 5, percent: 90 },
  { stars: 4, percent: 60 },
  { stars: 3, percent: 40 },
  { stars: 2, percent: 20 },
  { stars: 1, percent: 10 },
];

const ProductReviews = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  return (
    <section className="w-full text-white py-12 px-4 flex justify-center">
      <div className="max-w-[1080px] w-full">
        {/* ------- HIGHLIGHTS ------- */}
        <div>
          <button className="bg-white text-[#222222] font-medium px-[90px] py-4 w-fit rounded-md border border-white/10">
            Highlights
          </button>
          <div className="h-px bg-white mt-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-300">
            <ul className="space-y-2">
              <li>
                • Engineered For High-Performance Braking, Ideal For Both Street
                And Track Use.
              </li>
              <li>• Advanced Material Boosts Braking Efficiency.</li>
              <li>• Stable Performance, Less Brake Fade.</li>
              <li>
                • Reduces Brake Dust, Keeps Wheels Cleaner For Extended
                Duration.
              </li>
            </ul>

            <ul className="space-y-2">
              <li>• Quieter Braking With Reduced Noise.</li>
              <li>• Extended Pad Life Lowers Replacement Frequency.</li>
            </ul>
          </div>
        </div>

        {/* ------- RATINGS SECTION ------- */}
        <div className="mt-12 border-white/10 pt-10">
          <button className="bg-white text-[#222222] font-medium px-[46px] py-4 w-fit rounded-md border border-white/10">
            Ratings & Reviews
          </button>
          <div className="h-px bg-[#FFE6B9] mt-2"></div>
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            {/* Left — Rating Summary */}
            <div className="">
              <p className="text-4xl font-bold">4.8 ⭐</p>
              <p className="text-gray-400 mt-1 leading-tight">
                1,64,002 Ratings <br /> & <br /> 5,922 Reviews
              </p>
            </div>

            {/* Right — Rating Bars */}
            <div className="flex-1 space-y-3">
              {ratingBars.map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="w-6">{item.stars}★</span>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E6C48F]"
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------- USER RATING FORM ------- */}
        <div className="mt-12 max-w-[870px]">
          <h3 className="font-medium text-2xl">What is your rate?</h3>

          {/* Stars */}
          <div className="flex gap-3 mt-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => setSelectedRating(star)}
                className={`cursor-pointer text-2xl transition 
                  ${selectedRating >= star ? "text-[#E6C48F]" : "text-gray-500"}`}
              />
            ))}
          </div>

          <p className="mt-4 text-gray-300">
            Please share your opinion about the product
          </p>

          {/* Textarea */}
          <textarea
            className="w-full bg-white border border-white/10 text-black mt-4 p-4 rounded-md focus:outline-none focus:border-[#E6C48F] min-h-[150px]"
            placeholder="Your review"
          ></textarea>

          {/* Button */}
          <button className="mt-4 w-full bg-[#F7D79F] hover:bg-[#e9c987] text-black font-semibold py-3 rounded-md transition border border-[#E6C48F]">
            SEND REVIEW
          </button>
        </div>

        {/* ------- CUSTOMER FEEDBACKS ------- */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold">Customer Feedbacks</h2>
          <div className="mt-6 space-y-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b-2 border-white pb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src="/pictures/all-products/image2.png" // your avatar file
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="space-y-1">
                    <p className="font-semibold">
                      Dianne Russell{" "}
                      <span className="font-normal text-primary-yellow">
                        {" "}
                        • Just now
                      </span>
                    </p>
                    <div className="flex gap-1 text-[#E6C48F]">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mt-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ullamcorper ut lectus nec tincidunt. Nunc mattis
                  dignissim arcu, sit amet consequat sem auctor a.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
