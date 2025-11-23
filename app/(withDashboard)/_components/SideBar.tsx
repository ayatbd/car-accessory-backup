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
  ChevronDown,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const [openUsers, setOpenUsers] = useState(false);

  return (
    <aside className="md:min-w-[17.5%] bg-[#f5dca7] text-[#0f0f0f] p-6">
      <div className="mb-8">
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
          <li className="collapse collapse-arrow bg-transparent shadow-none">
            <input
              type="checkbox"
              checked={openUsers}
              onChange={() => setOpenUsers(!openUsers)}
            />
            <div className="collapse-title flex items-center justify-between">
              <span className="flex items-center gap-2 text-[18px]">
                <UsersRound /> Users
              </span>
              {/* <ChevronDown
              className={`${openUsers ? "rotate-180" : ""} transition`}
            /> */}
            </div>

            <div className="collapse-content pl-0">
              <Link href="/dashboard/vendors">
                <button>
                  <span className="flex items-center gap-2">
                    <Wallet /> Vendors
                  </span>
                </button>
              </Link>

              <Link href="/dashboard/customers">
                <button>
                  <span className="flex items-center gap-2">
                    <Wallet /> Customers
                  </span>
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
            <Link href="/dashboard/logout">
              <button>
                <span className="flex items-center gap-2">
                  <LogOut /> Logout
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
