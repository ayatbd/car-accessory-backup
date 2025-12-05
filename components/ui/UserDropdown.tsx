"use client";

import { useState, useRef, useEffect } from "react";
import { FiShoppingBag, FiHeart, FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 cursor-pointer"
      >
        <span className="rounded-full bg-white p-1.5">
          <FaRegUser size={20} className="text-black" />
        </span>
        <RiArrowDropDownLine
          size={22}
          className="text-white md:display-[unset] hidden"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 lg:w-96 md:w-80 w-72 bg-white rounded-sm shadow-xl p-6 z-50">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 bg-black rounded-full text-white p-0.5 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <IoClose size={22} />
          </button>

          <div className="space-y-6 text-gray-900 lg:text-[18px] md:text-[16px] sm:text-[14px]">
            <Link
              href="/my-orders"
              className="flex items-center gap-4 hover:text-black hover:cursor-pointer hover:underline"
            >
              <FiShoppingBag size={22} /> My Order
            </Link>

            <Link
              href="/wishlist"
              className="flex items-center gap-4 hover:text-black hover:cursor-pointer hover:underline"
            >
              <FiHeart size={22} /> My wishlist & followed stores
            </Link>

            <Link
              href="/logout"
              className="flex items-center gap-4 hover:text-black hover:cursor-pointer hover:underline"
            >
              <FiLogOut size={22} /> Log out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
