import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { MdSearch } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Header() {
  const user = true;
  return (
    <div className="bg-[#222222]">
      <Container>
        <nav className="w-full text-white py-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* LEFT — Logo */}
            <div className="flex items-center gap-2">
              <div className="text-[#e8d39f] text-7xl font-bold leading-none">
                <Image
                  src="/pictures/header_logo.png"
                  alt=""
                  width={88}
                  height={88}
                />
              </div>
            </div>

            {/* CENTER — Menu Items */}
            <ul className="flex items-center gap-16 text-[24px] font-light">
              <li>
                <Link href="/" className="hover:text-[#e8d39f] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/allproducts"
                  className="hover:text-[#e8d39f] transition"
                >
                  All Products & Service
                </Link>
              </li>
              <li>
                <Link
                  href="/allproducts"
                  className="hover:text-[#e8d39f] transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-[#e8d39f] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#e8d39f] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* RIGHT — Buttons */}
            {!user ? (
              <div className="flex items-center gap-4">
                {/* Sign In button (outlined) */}
                <Link href="/signin">
                  <button className="cursor-pointer px-6 py-2 rounded-md border border-[#e8d39f] text-white hover:bg-[#e8d39f] hover:text-black transition">
                    Sign In
                  </button>
                </Link>

                {/* Sign Up button (filled) */}
                <Link href="/signup">
                  <button className="cursor-pointer px-6 py-2 rounded-md bg-[#e8d39f] text-black hover:bg-[#d7c089] transition">
                    Sign Up
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-[170px]">
                <div className="flex items-center gap-5">
                  <span className="rounded-full border border-white p-1.5">
                    <MdSearch size={20} className="text-white" />
                  </span>
                  <span className="rounded-full border border-white p-1.5">
                    <IoMdNotifications size={20} className="text-white" />
                  </span>
                </div>
                <div className="flex items-center gap-px">
                  <span className="rounded-full bg-white p-1.5">
                    <FaRegUser size={20} className="text-black" />
                  </span>
                  <span>
                    <RiArrowDropDownLine size={20} />
                  </span>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
}
