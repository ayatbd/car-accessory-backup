"use client";
import Image from "next/image";
import styles from "./dasgboard.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import {
  Users,
  Headset,
  UserRound,
  LayoutDashboard,
  Wallet,
  BanknoteArrowUp,
  Cog,
  LogOut,
  BellRing,
} from "lucide-react";

// NOTE: The Figma screenshot file (provided by you) is referenced below as a local path.
// The path used: "/mnt/data/Screenshot 2025-11-23 014154.png"
// (Per your environment this will be transformed to a URL when the canvas/tooling runs.)

// Sample data to power the sample charts and tables. Replace with real API data as needed.
const lineData = [
  { name: "Jan", a: 30, b: 50 },
  { name: "Feb", a: 45, b: 60 },
  { name: "Mar", a: 60, b: 80 },
  { name: "Apr", a: 40, b: 55 },
  { name: "May", a: 50, b: 65 },
  { name: "Jun", a: 35, b: 45 },
];

const barData = Array.from({ length: 7 }).map((_, i) => ({
  name: `W${i + 1}`,
  value: Math.round(200 + Math.random() * 400),
}));

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-[#0f0f0f] ">
      {/* Left Sidebar */}
      <aside className="md:w-[336px] bg-[#f5dca7] text-[#0f0f0f] p-6">
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

        <nav className={`space-y-4 p-9 ${styles.sidebar}`}>
          <button>
            <span>
              <LayoutDashboard />
              Dashboard
            </span>
          </button>
          <button>
            <span>
              <Wallet />
              Wallet
            </span>
          </button>
          <button>
            <span>
              <BanknoteArrowUp />
              Income
            </span>
          </button>
          <button>
            <span>
              <Cog />
              Settings
            </span>
          </button>
          <button>
            <span>
              <LogOut />
              Logout
            </span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-[#181818]">
        {/* Top header */}
        <div className="px-[134px]">
          <header className="flex items-center justify-between py-9">
            <h1 className="text-[40px] font-semibold text-white">Dashboard</h1>
            <div className="flex items-center gap-[52px]">
              <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
                <BellRing
                  fill="gray"
                  className="text-gray-500 cursor-pointer"
                />
              </div>
              <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
                <UserRound className="text-black cursor-pointer" />
              </div>
            </div>
          </header>
        </div>
        {/* Dashboard grid */}
        <div className="px-[134px] bg-[#222222]">
          <div>
            <p className=" text-white text-2xl py-1">Welcome Admin!</p>

            <div className="grid grid-cols-12 gap-4">
              {/* Top stats cards */}
              <div className="col-span-12 md:col-span-12 lg:col-span-12 grid grid-cols-3 gap-2">
                {[
                  {
                    title: "Total Users",
                    value: "50055",
                    icon: <Users className="w-56px h-56px" />,
                  },
                  {
                    title: "Vendors",
                    value: "3454",
                    icon: <Headset className="w-56px h-56px" />,
                  },
                  {
                    title: "Customers",
                    value: "2454",
                    icon: <UserRound className="w-56px h-56px" />,
                  },
                ].map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-[#121212] py-[21px] px-[41px] rounded border "
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[16px] text-white">{c.title}</div>
                        <div className="text-[18px] text-[#FFE6B9] font-medium mt-1">
                          {c.value}
                        </div>
                      </div>
                      <div className="text-gray-300">{c.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="col-span-12 lg:col-span-8 rounded border  p-4">
                <div className="text-sm text-gray-300 mb-2">
                  Income Statistics
                </div>
                <div style={{ height: 240 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                      <XAxis dataKey="name" stroke="#555" />
                      <YAxis stroke="#555" />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="a"
                        stroke="#f3d29b"
                        strokeWidth={3}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="b"
                        stroke="#ffffff"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4 rounded border  p-4">
                <div className="text-sm text-gray-300 mb-2">
                  Number of Subscription Users
                </div>
                <div style={{ height: 240 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                      <XAxis dataKey="name" stroke="#555" />
                      <YAxis stroke="#555" />
                      <Tooltip />
                      <Bar dataKey="value" barSize={12} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Lower tables */}
              <div className="col-span-12 lg:col-span-6 rounded border  p-3">
                <div className="text-sm text-gray-300 mb-2">
                  Vendor Accounts
                </div>
                <div className="overflow-auto max-h-56">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-[#e9d9b7] text-black">
                        <th className="py-2 px-3">Name</th>
                        <th className="py-2 px-3">Contact</th>
                        <th className="py-2 px-3">Package Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <tr key={i} className="border-t border-gray-800">
                          <td className="py-2 px-3">PRE2209</td>
                          <td className="py-2 px-3">John Smith</td>
                          <td className="py-2 px-3">Yearly</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-6 rounded border  p-3">
                <div className="text-sm text-gray-300 mb-2">User Activity</div>
                <div className="overflow-auto max-h-56">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-[#e9d9b7] text-black">
                        <th className="py-2 px-3">Number</th>
                        <th className="py-2 px-3">Date</th>
                        <th className="py-2 px-3">Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <tr key={i} className="border-t border-gray-800">
                          <td className="py-2 px-3">SI-0000{i}</td>
                          <td className="py-2 px-3">31/01/2024</td>
                          <td className="py-2 px-3">Mr Naveed Noor</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
