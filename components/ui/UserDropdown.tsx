"use client";

import { useState, useRef, useEffect } from "react";
import { FiShoppingBag, FiHeart, FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
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
        <RiArrowDropDownLine size={22} className="text-white" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-96 bg-white rounded-sm shadow-xl p-6 z-50">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <IoClose size={22} />
          </button>

          <div className="space-y-6 text-gray-900 text-[18px]">
            <Link
              href="/my-orders"
              className="flex items-center gap-4 hover:text-black"
            >
              <FiShoppingBag size={22} /> My Order
            </Link>

            <Link
              href="/wishlist"
              className="flex items-center gap-4 hover:text-black"
            >
              <FiHeart size={22} /> My wishlist & followed stores
            </Link>

            <Link
              href="/logout"
              className="flex items-center gap-4 hover:text-black"
            >
              <FiLogOut size={22} /> Log out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
