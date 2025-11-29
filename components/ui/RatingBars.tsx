"use client";

import { FaStar } from "react-icons/fa";

interface ReviewProps {
  name: string;
  text: string;
}

const RatingCard = ({ name, text }: ReviewProps) => {
  return (
    <div className="w-[690px] text-white">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[32px] font-semibold leading-none">{name}</h2>
          <p className="text-[20px] text-green-400 mt-1">Verified Buyer</p>
        </div>

        {/* Stars */}
        <div className="flex gap-2 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar key={i} className="text-yellow-400 text-[28px]" />
          ))}
        </div>
      </div>

      {/* Review text */}
      <p className="text-[26px] leading-snug mt-6">{text}</p>
    </div>
  );
};

export default function RatingBars() {
  return (
    <div className="flex flex-col gap-20">
      <RatingCard
        name="Kristin Watson"
        text="Efficient and thorough car repair service, highly recommended for quality workmanship and fair pricing."
      />

      <RatingCard
        name="Kristin Watson"
        text="Efficient and thorough car repair service, highly recommended for quality workmanship and fair pricing."
      />
    </div>
  );
}
