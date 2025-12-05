import Container from "@/components/shared/Container";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#222222]">
      <Container>
        <div className="pt-20">
          <div className="text-white">
            {/* FLEX WRAPPER */}
            <div className="flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-28">
              {/* LEFT SIDE (FORM) */}
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#F1D8A6] mb-2">
                  Get in touch
                </h1>

                <p className="text-base sm:text-lg mb-8">
                  We are here for you! How can we help?
                </p>

                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block mb-1 text-white text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-14 sm:h-16 bg-transparent border-2 border-[#E8D39E] text-white rounded-xl px-3 outline-none focus:border-[#F7E3AC]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1 text-white text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full h-14 sm:h-16 bg-transparent border-2 border-[#E8D39E] text-white rounded-xl px-3 outline-none focus:border-[#F7E3AC]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-1 text-white text-lg">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-transparent border-2 border-[#E8D39E] text-white rounded-xl p-4 outline-none focus:border-[#F7E3AC]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FBE4B2] text-black rounded-xl text-xl font-medium shadow-[0_0_15px_1px_rgba(148,55,255,0.5)] hover:opacity-90 active:scale-95 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* RIGHT SIDE (IMAGE + CONTACT INFO) */}
              <div className="flex-1 flex flex-col items-center gap-6">
                <Image
                  src="/pictures/contact.gif"
                  width={512}
                  height={512}
                  alt="Contact"
                  className="w-full max-w-sm mx-auto"
                />

                <ul className="space-y-3 text-center lg:text-left">
                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <IoLocationOutline />
                    <span>545 Mavis Island, IL 99191</span>
                  </li>

                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <IoLocationOutline />
                    <span>+2034 4040 3030</span>
                  </li>

                  <li className="flex items-center gap-3 justify-center lg:justify-start">
                    <IoLocationOutline />
                    <span>hello@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
