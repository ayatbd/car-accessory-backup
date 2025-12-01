"use client";

import Image from "next/image";

const PageBanner = () => {
  return (
    <section className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/pictures/banner.png" // place image in public folder
        alt="About Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="flex items-center">
        <div className="relative max-w-[1300px] z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About US
          </h1>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 mt-4 text-white text-lg font-medium">
            <span>Home</span>
            <span className="text-white/60">|</span>
            <span className="text-[#E6C48F]">About US</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
