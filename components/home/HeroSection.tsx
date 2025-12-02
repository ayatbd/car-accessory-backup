import Image from "next/image";
import Container from "../shared/Container";

const HeroSection = () => {
  return (
    <section className="w-full text-white py-16 md:py-20">
      <Container>
        <div className="px-4 md:px-6 md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* GOLD LINE + TITLE */}
            <div className="flex gap-4 md:gap-6 items-start">
              <div className="w-1 bg-[#EAC88C] h-24 md:h-40 rounded-full"></div>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight">
                  Welcome to QC
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-[#EAC88C] leading-tight">
                  Car Accessories
                </h1>

                <p className="text-gray-300 mt-4 text-base sm:text-lg md:text-[20px] leading-relaxed">
                  Li Europan lingues es membres del sam
                  <br className="hidden sm:block" />
                  familie. Lor separat existentie es un myth.
                </p>
              </div>
            </div>

            {/* CONTACT BUTTON */}
            <button className="border border-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition">
              Contact us →
            </button>

            {/* STATS */}
            <div className="flex gap-10 sm:gap-14 pt-4">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-[50px] font-bold text-[#EAC88C]">
                  150+
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  Types of Machines Car
                </p>
              </div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-[50px] font-bold text-[#EAC88C]">
                  50K+
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  Our Client Actives
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <Image
              width={628}
              height={508}
              src="/pictures/hero/hero.png"
              alt="Car Mechanic Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl select-none"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
