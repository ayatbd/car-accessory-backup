"use client";
import { useState } from "react";
import styles from "./../dashboard/dashboard.module.css";

import {
  LayoutDashboard,
  Wallet,
  BanknoteArrowUp,
  Cog,
  LogOut,
  UsersRound,
  CircleUser,
  ChevronDown,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { IoIosPeople } from "react-icons/io";
import Swal from "sweetalert2";

const SideBar = () => {
  const [openUsers, setOpenUsers] = useState(false);

  const handleLogout = () => {
    console.log("clicked done");
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <aside className="md:min-w-[16%] bg-[#f5dca7] text-[#0f0f0f] p-6">
      <div className="">
        <Image
          className="mx-auto"
          width={135}
          height={120}
          src="https://i.ibb.co.com/3mPw55DZ/logo.png"
          alt="Logo"
        />
      </div>

      <nav className={`p-9 ${styles.sidebar}`}>
        {/* Dashboard */}
        <ul>
          <li>
            <Link href="/dashboard">
              <button>
                <span className="flex items-center gap-2">
                  <LayoutDashboard /> Dashboard
                </span>
              </button>
            </Link>
          </li>
          <li className="w-full bg-transparent">
            {/* Header */}
            <button
              onClick={() => setOpenUsers(!openUsers)}
              className="w-full flex items-center justify-between py-3 cursor-pointer"
            >
              <span className="flex items-center gap-2 text-[18px]">
                <UsersRound /> Users
              </span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openUsers ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-300 pt-3 flex flex-col gap-3 ${
                openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <Link href="/dashboard/vendors">
                <button
                  className={`flex items-center gap-2 py-1 transition ${styles.sublist}`}
                >
                  <CircleUser /> Vendors
                </button>
              </Link>

              <Link href="/dashboard/customers">
                <button
                  className={`flex items-center gap-2 py-1 transition ${styles.sublist}`}
                >
                  <IoIosPeople size={24} /> Customers
                </button>
              </Link>
            </div>
          </li>
          <li>
            <Link href="/dashboard/wallet">
              <button>
                <span className="flex items-center gap-2">
                  <Wallet /> Wallet
                </span>
              </button>
            </Link>
          </li>
          <li>
            {/* Income */}
            <Link href="/dashboard/income">
              <button>
                <span className="flex items-center gap-2">
                  <BanknoteArrowUp /> Income
                </span>
              </button>
            </Link>
          </li>
          <li>
            {/* Settings */}
            <Link href="/dashboard/settings">
              <button>
                <span className="flex items-center gap-2">
                  <Cog /> Settings
                </span>
              </button>
            </Link>
          </li>
          <li>
            {/* Logout */}
            <button onClick={handleLogout}>
              <span className="flex items-center gap-2">
                <LogOut /> Logout
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
