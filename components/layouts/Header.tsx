import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
export default function Header() {
  return (
    <Container>
      <nav className="w-full text-white py-[40px]">
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
                href="/products"
                className="hover:text-[#e8d39f] transition"
              >
                All Products & Service
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-[#e8d39f] transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#e8d39f] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#e8d39f] transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT — Buttons */}
          <div className="flex items-center gap-4">
            {/* Sign In button (outlined) */}
            <button className="px-6 py-2 rounded-md border border-[#e8d39f] text-white hover:bg-[#e8d39f] hover:text-black transition">
              Sign In
            </button>

            {/* Sign Up button (filled) */}
            <button className="px-6 py-2 rounded-md bg-[#e8d39f] text-black hover:bg-[#d7c089] transition">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </Container>
  );
}
