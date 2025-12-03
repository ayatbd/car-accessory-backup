"use client";

import Image from "next/image";

const PageBanner = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="banner w-full h-80 md:h-[380px] lg:h-[420px]">
      {/* Content */}
      <div className="">
        <div className=" max-w-[1300px] z-10 h-full flex flex-col items-start px-6 md:px-16 lg:px-24">
          <h1 className="text-white text-4xl md:text-5xl font-bold">{title}</h1>

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 mt-4 text-white text-lg font-medium">
            <span>Home</span>
            <span className="text-white/60">|</span>
            <span className="text-[#E6C48F]">{subtitle}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
