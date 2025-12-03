"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../shared/Container";
import { MdSearch } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import ProfileNotification from "@/app/(withDashboard)/_components/ProfileNotification";

export default function Header() {
  const { Header: AntHeader } = Layout;
  const user = false;
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#222222]">
      <AntHeader className="bg-[#222222] px-0">
        <Container>
          <nav className="w-full text-white py-10">
            {/* Desktop Layout */}
            <div className="mx-auto hidden md:flex items-center justify-between">
              {/* LEFT — Logo */}
              <div className="flex items-center gap-2">
                <div className="lg:w-[88px] lg:h-[88px] md:w-[64px] md:h-[64px] w-[48px] h-[48px]">
                  <Image
                    src="/pictures/header_logo.png"
                    alt=""
                    width={88}
                    height={88}
                  />
                </div>
              </div>

              {/* CENTER — Menu */}
              <ul className="headerList flex items-center lg:gap-16 md:gap-6 gap-3 lg:text-[24px] md:text-[18px] text-[16px] font-light">
                <li>
                  <Link href="/" className="hover:text-[#e8d39f]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/allproducts" className="hover:text-[#e8d39f]">
                    All Products & Service
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-[#e8d39f]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" className="hover:text-[#e8d39f]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#e8d39f]">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* RIGHT — Buttons */}
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
                <div className="flex items-center justify-between gap-[170px]">
                  <div className="flex items-center gap-5">
                    <span className="rounded-full border border-white p-1.5">
                      <MdSearch size={20} />
                    </span>
                    <span className="rounded-full border border-white p-1.5 dropdown dropdown-bottom dropdown-end">
                      <div tabIndex={0}>
                        <IoMdNotifications size={20} />
                        <ProfileNotification />
                      </div>  
                    </span>
                  </div>

                  <div className="dropdown dropdown-end cursor-pointer">
                    <div tabIndex={0} role="button" className="">
                      <div className="flex items-center gap-px">
                        <span className="rounded-full bg-white p-1.5">
                          <FaRegUser size={20} className="text-black" />
                        </span>
                        <span>
                          <RiArrowDropDownLine size={20} />
                        </span>
                      </div>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content  menu bg-base-100 rounded-sm z-1 w-52 p-2 shadow-sm text-black"
                    >
                      <li>
                        <a>Item 1</a> 
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile / Tablet Layout */}
            <div className="flex md:hidden items-center justify-between">
              {/* LEFT — Logo */}
              <div>
                <Image
                  src="/pictures/header_logo.png"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>

              {/* RIGHT — Hamburger Icon */}
              <Button
                type="text"
                icon={<MenuOutlined style={{ color: "white", fontSize: 28 }} />}
                onClick={() => setOpen(true)}
              />
            </div>

            {/* Drawer Menu */}
            <Drawer
              title={
                <Image
                  src="/pictures/header_logo.png"
                  alt=""
                  width={70}
                  height={70}
                />
              }
              placement="right"
              onClose={() => setOpen(false)}
              open={open}
              bodyStyle={{ backgroundColor: "#222222", paddingTop: 20 }}
              headerStyle={{ backgroundColor: "#222222" }}
            >
              <ul className="flex flex-col gap-6 text-white text-[22px] font-light">
                <li>
                  <Link href="/" onClick={() => setOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/allproducts" onClick={() => setOpen(false)}>
                    All Products & Service
                  </Link>
                </li>
                <li>
                  <Link href="/allproducts" onClick={() => setOpen(false)}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>

              {/* RIGHT — User Actions */}
              <div className="lg:mt-10 md:mt-7 mt-5">
                {user ? (
                  <div className="flex flex-col gap-4">
                    <Link href="/signin">
                      <button className="w-full lg:px-6 px-4 py-2 rounded-md border border-[#e8d39f] text-white">
                        Sign In
                      </button>
                    </Link>

                    <Link href="/signup">
                      <button className="w-full lg:px-6 px-4 py-2 rounded-md bg-[#e8d39f] text-black">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6 text-white">
                    <div className="flex items-center gap-5">
                      <span className="rounded-full border border-white p-1.5">
                        <MdSearch size={22} />
                      </span>

                      <span className="rounded-full border border-white p-1.5">
                        <IoMdNotifications size={22} />
                      </span>
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer">
                      <span className="rounded-full bg-white p-1.5">
                        <FaRegUser size={22} className="text-black" />
                      </span>
                      <RiArrowDropDownLine size={22} />
                    </div>
                  </div>
                )}
              </div>
            </Drawer>
          </nav>
        </Container>
      </AntHeader>
    </div>
  );
}
