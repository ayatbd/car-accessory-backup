import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full text-white py-20 px-6 space-y-20">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-medium mb-4">ABOUT US</h2>
        <p className="text-[24px] leading-relaxed text-gray-300">
          At meter per second, we take pride in our values <br />
          service, integrity and excellence.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          width={1300}
          height={448}
          src="/pictures/about_us/image1.png"
          alt="car wash"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* <!-- Box 1 --> */}
        <div>
          <h3 className="text-[24px] font-medium text-[#EAC88C] mb-4">
            1. Who we are?
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Established in 2016, with a Vision
            <br />
            to Provide Customers
            <br />
            Transparent, Convenient and
            <br />
            Reliable Car Service and Repair
            <br />
            right at Customer Doorstep in
            <br />
            Hyderabad
          </p>
        </div>

        {/* <!-- Box 2 --> */}
        <div>
          <h3 className="text-[24px] font-medium text-[#EAC88C] mb-4">
            2. What is the problem?
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Car owners often lack visibility
            <br />
            regarding the quality of
            <br />
            Mechanics, usage of Spare parts
            <br />
            and Transparency in price.
          </p>
        </div>

        {/* <!-- Box 3 --> */}
        <div>
          <h3 className="text-[24px] font-medium text-[#EAC88C] mb-4">
            3. How do we help
          </h3>
          <p className="text-lg leading-relaxed text-gray-200">
            Now, Metre Per Second is a<br />
            Premier Doorstep Car Care
            <br />
            Company providing Car Service
            <br />
            with Professional Technicians
            <br />
            right at your location in
            <br />
            Hyderabad.
          </p>
        </div>
      </div>
    </section>
  );
}
