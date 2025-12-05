import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import Image from "next/image";

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

const page = () => {
  return (
    <div className="bg-[#222222]">
      <PageBanner title="About Us" subtitle="About Us" />
      <Container>
        <div className="mt-[120px]">
          <div className="lg:h-[725px] flex lg:flex-row flex-col items-center gap-7 bg-[#222222] text-white">
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
                  className="absolute top-[50%] right-0 -translate-y-1/2 w-[452px] h-[498px] object-cover rounded-[5px] shadow-lg"
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
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <p className="text-[#FFE0A7] text-2xl">TESTIMONIAL</p>
          <h1 className="text-[55px] font-bold text-white">
            What customer say about Our services
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 py-20">
          {testimonials.map((item) => (
            <div className="overflow-hidden" key={item.id}>
              <div className="bg-[#131313] overflow-hidden text-white rounded-xl p-8 flex md:flex-row flex-col items-center gap-6">
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

                <div className="flex flex-col md:items-start items-center">
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
                  <p className="text-gray-300 leading-relaxed max-w-md text-center">
                    {item.text}
                  </p>

                  {/* Name */}
                  <p className="font-semibold text-[#F3D29C]">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
