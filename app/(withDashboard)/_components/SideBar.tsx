import styles from "./../dashboard/dashboard.module.css";
// lucid icons
import {
  LayoutDashboard,
  Wallet,
  BanknoteArrowUp,
  Cog,
  LogOut,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <aside className="md:w-[17.5%] bg-[#f5dca7] text-[#0f0f0f] p-6">
      <div className="mb-8">
        <Image
          className="mx-auto"
          width={135}
          height={120}
          src="https://i.ibb.co.com/3mPw55DZ/logo.png"
          alt="Logo"
        />
        {/* <div className="text-4xl font-serif">QC</div> */}
        {/* <div className="text-xs">since 2015</div> */}
      </div>

      <nav className={`p-9 ${styles.sidebar}`}>
        <Link href="/dashboard">
          <button>
            <span>
              <LayoutDashboard />
              Dashboard
            </span>
          </button>
        </Link>
        <Link href="/dashboard/profile">
          <button>
            <span>
              <UsersRound />
              Users
            </span>
          </button>
        </Link>
        <Link href="/dashboard/wallet">
          <button>
            <span>
              <Wallet />
              Wallet
            </span>
          </button>
        </Link>
        <Link href="/dashboard/income">
          <button>
            <span>
              <BanknoteArrowUp />
              Income
            </span>
          </button>
        </Link>
        <Link href="/dashboard/settings">
          <button>
            <span>
              <Cog />
              Settings
            </span>
          </button>
        </Link>
        <Link href="/dashboard/logout">
          <button>
            <span>
              <LogOut />
              Logout
            </span>
          </button>
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
