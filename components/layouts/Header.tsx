import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT — Logo */}
        <div className="flex items-center gap-2">
          <div className="text-[#e8d39f] text-7xl font-bold leading-none">
            QC
          </div>
          <p className="text-xs text-[#e8d39f] -mt-2 ml-1 tracking-wide">
            Since 2015
          </p>
        </div>

        {/* CENTER — Menu Items */}
        <ul className="flex items-center gap-16 text-lg font-light">
          <li>
            <Link href="/" className="hover:text-[#e8d39f] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#e8d39f] transition">
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
  );
}
