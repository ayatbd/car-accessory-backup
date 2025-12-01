import PageBanner from "@/components/shared/PageBanner";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#222222]">
      <PageBanner />
      <div className="mt-[120px]">
        <div className="w-[1294px] mx-auto h-[725px] flex items-center gap-7 bg-[#222222] relative text-white">
          <div className="flex-7/12 w-full">
            {/* LEFT SECTION — MAIN IMAGE CONTAINER */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                width={597}
                height={725}
                src="/pictures/about_us/image3.jpg" // replace with your actual image path
                alt="Main"
                className="w-[597px] h-[725px] object-cover rounded-xl"
              />

              {/* ABSOLUTE UPPER IMAGE */}
              <Image
                width={452}
                height={498}
                src="/pictures/about_us/image2.png" // replace with your actual image path
                alt="Upper"
                className="absolute top-[114px] right-0 w-[452px] h-[498px] object-cover rounded-[5px] shadow-lg"
              />
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="flex-5/12">
            <div className=" h-[455px] flex flex-col gap-[30px]">
              <div>
                <p className="text-[#EAC87C] font-bold tracking-wide text-[20px]">
                  CAREFUL CRAFTED
                </p>
                <h1 className="text-[40px] font-medium leading-tight">
                  Search, Select, Buy online
                </h1>
              </div>

              <p className="text-[20px] opacity-90 leading-[1.6]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
