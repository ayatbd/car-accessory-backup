import Container from "@/components/shared/Container";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function OrderDetails() {
  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="mx-auto text-white px-6 py-12">
          <h1 className="text-[48px] font-medium text-center mb-24">
            Order details
          </h1>

          <div className="ml-10 flex justify-center gap-8">
            {/* Vertical line */}
            {/* <div className="left-[32px] top-0 w-[2px] h-full bg-white/30"></div> */}

            <div className="text-[20px] font-bold flex flex-col gap-[150px]">
              <p>10: 11 PM</p>
              <p>10: 11 PM</p>
              <p>10: 11 PM</p>
            </div>

            <div className="flex flex-col gap-[150px]">
              <div className="w-20 h-20 rounded-full bg-[#F7D7A8] flex items-center justify-center">
                <span className="text-black text-3xl">
                  <IoCheckmarkOutline />
                </span>
              </div>
              <div className="w-20 h-20 rounded-full bg-[#F7D7A8] flex items-center justify-center">
                <span className="text-black text-3xl">
                  <IoCheckmarkOutline />
                </span>
              </div>
              <div className="w-20 h-20 rounded-full bg-[#F7D7A8] flex items-center justify-center">
                <span className="text-black text-3xl">
                  <IoCheckmarkOutline />
                </span>
              </div>
            </div>
            <div className="ml-6 mt-1">
              <h2 className="text-2xl font-semibold">Received Car</h2>
              <p className="text-gray-300 text-lg leading-snug max-w-60">
                Your order #4913 was placed for delivery.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
