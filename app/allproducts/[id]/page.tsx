"use client";

import Container from "@/components/shared/Container";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa";
import ProductReviews from "./_componets/ProductReview";
import Link from "next/link";

const ProductShowcase = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  return (
    <div className="min-h-screen text-white bg-[#222222]">
      <Container>
        <div className="w-full flex justify-center py-12 px-4">
          <div className="max-w-[1080px] w-full flex flex-col lg:flex-row items-center gap-20">
            {/* LEFT — IMAGE */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <Image
                src="/pictures/all-products/image1.png" // <-- replace with your image in /public
                alt="EBC Brakes S6KF1272 Set"
                width={409}
                height={419}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* RIGHT — DETAILS */}
            <div className="w-full lg:w-1/2 text-white">
              <h1 className="text-[40px] font-medium leading-tight">
                EBC Brakes S6KF1272 – S6 Bluestuff Brake Pad Set
              </h1>

              <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                D847 REBAR 6 Blackout Wheels by FUEL®. These astonishing
                monoblock wheels would fit someone who is looking for strength.
              </p>

              {/* PRICE */}
              <div className="flex items-center gap-24">
                <p className="text-[40px] font-medium text-[#F7D79F] mt-6">
                  $250.00
                </p>

                {/* REVIEWS */}
                <div className="flex items-center gap-3 mt-4 bg-white px-6 py-3 rounded-full w-fit">
                  <FaRegCommentDots className="text-black text-xl" />
                  <span className="text-lg text-black font-semibold">
                    67 Reviews
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <Link href="/customerinfo">
                <button className="mt-8 bg-primary-yellow hover:bg-[#e9c987] text-black font-semibold px-11 py-4 rounded-sm transition shadow-lg cursor-pointer">
                  Request to service
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ProductReviews></ProductReviews>
      </Container>
    </div>
  );
};

export default ProductShowcase;
