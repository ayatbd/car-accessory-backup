"use client";

import Container from "@/components/shared/Container";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function CarTherapyCentre() {
  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="flex justify-center py-40 gap-5">
          <div className="w-full bg-[#3a3a3a] text-white flex-8/12 rounded-xl pt-11 pl-7 pb-32">
            {/* ---------- HEADER ---------- */}
            <div className="space-y-1.5">
              <h1 className="text-[24px] font-medium text-[#e2c878]">
                Car Therapy Centre
              </h1>
              <p className="text-sm text-gray-300">
                127 Kaikorai Valley Road, Dunedin
              </p>

              <div className="flex items-center mt-2 gap-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#e2c878]" />
                  ))}
                <p className="text-gray-300 ml-2">
                  4.8 <span className="text-gray-400">(61+ Reviews)</span>
                </p>
              </div>
            </div>

            {/* ---------- DESCRIPTION ---------- */}
            <div className="text-gray-200 mt-6 space-y-4 leading-relaxed text-[20px]">
              <p>
                Come and find out what makes Albany Toyota different from the
                rest.
              </p>

              <p>
                We are an award winning family owned and operated business for
                over 25 years! Come to Albany Toyota for a complete range of new
                passenger and commercial Toyota’s and our large Signature and
                Used vehicle selection.
              </p>

              <p>
                With service centres in Albany, Browns Bay and Whangaparaoa and
                Parts and Finance in Albany we call ourselves a 'One Stop' shop.
                All this coupled with excellent customer service makes Albany
                Toyota a pleasure to deal with.
              </p>
            </div>

            {/* ---------- WORKSHOP ---------- */}
            <div className="mt-10 text-[20px]">
              <h3 className="text-[#e2c878] mb-2">Our Workshop:</h3>
              <ul className="space-y-1 ml-4">
                <li>• Family owned for over 25 years</li>
                <li>• Genuine Toyota parts</li>
                <li>• 21 Staff</li>
              </ul>
            </div>

            {/* ---------- SPECIALTIES ---------- */}
            <div className="mt-8 text-[20px]">
              <h3 className="font-bold text-[#e2c878] mb-2">Specialties:</h3>
              <ul className="space-y-1 ml-4">
                <li>• Official Dealership</li>
                <li>• Japanese Vehicles</li>
                <li></li>
              </ul>
            </div>

            {/* ---------- RATING BARS ---------- */}
            <div className="mt-24">
              <div className="space-y-2 text-sm w-[300px]">
                {[
                  { label: "Excellent", percent: "90%" },
                  { label: "Great", percent: "80%" },
                  { label: "Average", percent: "50%" },
                  { label: "Poor", percent: "30%" },
                  { label: "Bad", percent: "20%" },
                ].map((item, idx) => (
                  <div
                    className="flex items-center justify-center gap-4"
                    key={idx}
                  >
                    <p className=" w-24">{item.label}</p>
                    <div className="bg-white h-2 w-full rounded relative overflow-hidden">
                      <div
                        className="h-full bg-[#e2c878]"
                        style={{ width: item.percent }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ---------- REVIEWS ---------- */}
              <div className="mt-12 mr-32 space-y-10">
                {[1, 2].map((review) => (
                  <div key={review}>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-lg">Kristin Watson</p>
                        <p className="text-[#4C9A29] text-sm font-semibold">
                          Verified Buyer
                        </p>
                      </div>
                      <div className="flex items-center mt-1 gap-1">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <FaStar key={i} className="text-[#e2c878]" />
                          ))}
                      </div>
                    </div>

                    <p className="mt-3 text-gray-200 leading-relaxed">
                      “Efficient and thorough car repair service, highly
                      recommended for quality workmanship and fair pricing.”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-4/12 w-full min-h-screen bg-[#3a3a3a] rounded-xl text-white py-6 px-4">
            {/* ---------- IMAGE ---------- */}
            <div className="w-full max-w-xl bg-[#3a3a3a] rounded-3xl overflow-hidden">
              <Image
                width={390}
                height={380}
                src="/pictures/shop/details/details.png"
                alt="Car Therapy Centre"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* ---------- TITLE ---------- */}
            <h1 className="text-3xl font-semibold text-[#e7c88b] mt-6">
              Car Therapy Centre
            </h1>

            {/* ---------- CONTACT INFO ---------- */}
            <div className="w-full max-w-xl mt-14 space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-white" />
                <p>NYC, United States</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white" />
                <p>000111222333</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white" />
                <p>somebody@gmail.com</p>
              </div>
            </div>

            {/* ---------- DESCRIPTION ---------- */}
            <p className="w-full max-w-xl mt-7 text-gray-200 leading-relaxed">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            {/* ---------- MAP IMAGE ---------- */}
            <div className="w-full max-w-xl bg-white rounded-3xl overflow-hidden mt-7">
              <Image
                width={390}
                height={160}
                src="/pictures/shop/details/Maps.png"
                alt="Map"
                className="w-full h-60 object-cover"
              />
            </div>

            {/* ---------- SOCIAL ICONS ---------- */}
            <div className="flex items-center justify-end-safe gap-6 mt-7 text-2xl">
              <span>
                <FaInstagram className="hover:text-[#e7c88b] transition" />
              </span>
              <span>
                <FaTwitter className="hover:text-[#e7c88b] transition" />
              </span>
              <span>
                <FaFacebook className="hover:text-[#e7c88b] transition" />
              </span>
              <span>
                <FaYoutube className="hover:text-[#e7c88b] transition" />
              </span>
            </div>

            {/* ---------- OPENING HOURS ---------- */}
            <div className="w-full max-w-xl mt-10">
              <h2 className="text-2xl font-semibold text-[#e7c88b]">
                Opening Hours:
              </h2>

              <div className="mt-8 flex justify-between text-lg">
                <p>Monday to Saturday::</p>
                <p className="text-[#e7c88b]">8am - 4:30pm</p>
              </div>
              <div className="mt-8 flex justify-between text-lg">
                <p>Sunday:</p>
                <p className="text-[#e7c88b]">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
