"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { MdSearch } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import ProfileNotification from "@/app/(withDashboard)/_components/ProfileNotification";
import UserDropdown from "../ui/UserDropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = false;

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "All Products & Service",
      href: "/allproducts",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "About",
      href: "/aboutus",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  // All Products & Service
  // Shop
  // About
  // Contact

  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="flex shadow-md py-4 sm:px-10 md:px-0 bg-[#222222] min-h-[70px] tracking-wide relative z-50">
          <div className="flex flex-wrap items-center justify-between gap-5 w-full">
            {/* Desktop Logo */}
            <Link href="/" className="max-sm:hidden">
              <Image
                src="/pictures/header_logo.png"
                width={88}
                height={88}
                alt="logo"
              />
            </Link>

            {/* Mobile Logo */}
            <Link href="/" className="hidden max-sm:block">
              <Image
                src="/pictures/header_logo.png"
                width={40}
                height={40}
                alt="logo"
                className="w-9"
              />
            </Link>

            {/* Menu Wrapper */}
            <div
              className={`${
                open ? "block" : "max-lg:hidden"
              } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
            >
              {/* Close Icon (Mobile) */}
              <button
                onClick={() => setOpen(false)}
                className={`${
                  open ? "flex" : "hidden"
                } lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 items-center justify-center border border-gray-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                </svg>
              </button>

              {/* Navigation */}
              <ul
                className={`lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${
                  open ? "block" : "max-lg:hidden"
                }`}
              >
                {/* Mobile Top Logo */}
                <li className="mb-6 hidden max-lg:block">
                  <Link href="/">
                    <Image
                      src="/pictures/header_logo.png"
                      width={48}
                      height={48}
                      alt="logo"
                      className=" bg-gray-700"
                    />
                  </Link>
                </li>

                {navLinks.map((item) => (
                  <li
                    key={item.title}
                    className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                  >
                    <Link
                      href={item.href}
                      className={`md:hover:text-[#e8d39f] md:focus:text-[#e8d39f] block font-normal lg:gap-16 md:gap-6 gap-3 lg:text-white text-black lg:text-[24px] md:text-[18px] text-[16px] transition duration-300 ease-in-out font-kanit`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Buttons */}
            <div className="flex max-lg:ml-auto space-x-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <Link href="/signin">
                    <button className="px-6 py-2 rounded-md border border-[#e8d39f] hover:bg-[#e8d39f] hover:text-black">
                      Sign In
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="px-6 py-2 rounded-md bg-[#e8d39f] text-black hover:bg-[#d7c089]">
                      Sign Up
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex items-center lg:gap-[155px] md:gap-5 gap-3">
                  <div className="flex items-center gap-5">
                    <span className="rounded-full border border-white p-1.5">
                      <MdSearch color="#fff" size={20} />
                    </span>
                    <span className="rounded-full border border-white p-1.5 dropdown dropdown-bottom dropdown-end hover:cursor-pointer">
                      <div>
                        <IoMdNotifications
                          tabIndex={0}
                          color="#fff"
                          size={20}
                        />
                        <ProfileNotification />
                      </div>
                    </span>
                  </div>
                  <UserDropdown />
                </div>
              )}

              {/* Open Icon (Mobile) */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden cursor-pointer"
              >
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
