import { Button } from "antd";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-[#fff5e4] min-h-screen  pt-[72px] pl-[134px]">
      <div className="max-w-[1040px] space-y-[98px]">
        <div className="bg-[#FFE6B9] py-20 px-10 space-y-[60px]">
          <h1 className="text-[24px] text-[#222222] pb-3 border-b border-[#0A0A0A]">
            About US
          </h1>
          <div className="space-y-11">
            <p>
              Welcome to our photography website! We are passionate about
              capturing lifes moments through the lens, turning ordinary scenes
              into extraordinary memories. With years of experience in
              photography, we specialize in various genres, including
              landscapes, portraits, events, and more. Our goal is to not just
              take pictures but to tell stories, evoke emotions, and freeze
              moments in time that you can cherish forever.
            </p>
            <p>
              Each shot is meticulously crafted, reflecting our dedication to
              excellence and creativity. Whether a wedding, a family gathering,
              or a breathtaking landscape, we strive to capture the essence of
              every moment with precision and artistry. Our commitment to
              quality extends beyond the camera lens; we also prioritize
              exceptional customer service, ensuring your experience with us is
              seamless and enjoyable from start to finish.
            </p>
            <p>
              Thank you for visiting our website, and we look forward to the
              opportunity to collaborate with you on your next photography
              project.
            </p>
          </div>
        </div>
        <Link href="">
          <Button
            style={{
              backgroundColor: "#222222",
              borderRadius: "5px",
              color: "#FFE0A7",
              fontSize: "18px",
              padding: "20px 0",
            }}
            type="primary"
            block
          >
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
