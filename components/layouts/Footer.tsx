import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-20">
      {/* Top border */}
      <div className="w-full h-[1px] bg-[#e8d39f]/40 mb-16" />

      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="w-full flex items-start justify-center gap-24">
          {/* LEFT SIDE */}
          <div className="space-y-10">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-[#e8d39f] flex items-center justify-center">
                <MdEmail size={26} color="#e8d39f" />
              </div>

              <div>
                <p className="text-lg font-semibold text-white/90">
                  Email Drop
                </p>
                <p className="text-white/80 text-sm">qcommentsllc@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-[#e8d39f] flex items-center justify-center">
                <FaBuilding size={26} color="#e8d39f" />
              </div>

              <div>
                <p className="text-lg font-semibold text-white/90">
                  Location From
                </p>
                <p className="text-white/80 text-sm">
                  Mon–Sun, 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="w-[1px] h-64 bg-[#e8d39f]/50" />

          {/* RIGHT SIDE */}
          <div className="text-center w-80">
            {/* Logo (QC) */}
            <div className="text-[#e8d39f] text-6xl font-bold tracking-wide">
              QC
            </div>
            <p className="text-white/60 text-sm mt-1 mb-6">Since 2015</p>

            <p className="text-white/80 leading-relaxed">
              There are many variations
              <br />
              of product of Image.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-8">
              <div className="w-12 h-12 rounded-full bg-[#e8d39f] flex items-center justify-center">
                <FaTwitter size={20} className="text-black" />
              </div>

              <div className="w-12 h-12 rounded-full bg-[#e8d39f] flex items-center justify-center">
                <FaFacebookF size={20} className="text-black" />
              </div>

              <div className="w-12 h-12 rounded-full bg-[#e8d39f] flex items-center justify-center">
                <FaLinkedinIn size={20} className="text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
