"use client";
import Image from "next/image";
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
  UsersRound,
  LayoutDashboard,
  Wallet,
  BanknoteArrowUp,
  Cog,
  LogOut,
} from "lucide-react";

// NOTE: The Figma screenshot file (provided by you) is referenced below as a local path.
// The path used: "/mnt/data/Screenshot 2025-11-23 014154.png"
// (Per your environment this will be transformed to a URL when the canvas/tooling runs.)

const FIGMA_IMAGE_URL = "/mnt/data/Screenshot 2025-11-23 014154.png";

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
    <div className="min-h-screen flex bg-[#0f0f0f] text-white">
      {/* Left Sidebar */}
      <aside className="md:w-[336px] bg-[#f5dca7] text-[#0f0f0f] flex-shrink-0 p-6">
        <div className="mb-8">
          <Image
            width={120}
            height={110}
            src="https://i.ibb.co.com/3mPw55DZ/logo.png"
            alt="Logo"
          />
          {/* <div className="text-4xl font-serif">QC</div> */}
          {/* <div className="text-xs">since 2015</div> */}
        </div>

        <nav className="space-y-4">
          <button className="w-full text-left px-3 py-2 rounded hover:bg-[#e9d9b7]">
            <span className="flex items-center justify-start gap-1.5">
              <LayoutDashboard />
              Dashboard
            </span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-[#e9d9b7]">
            <span className="flex items-center justify-start gap-1.5">
              <Wallet />
              Wallet
            </span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-[#e9d9b7]">
            <span className="flex items-center justify-start gap-1.5">
              <BanknoteArrowUp />
              Income
            </span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-[#e9d9b7]">
            <span className="flex items-center justify-start gap-1.5">
              <Cog />
              Settings
            </span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-[#e9d9b7]">
            <span className="flex items-center justify-start gap-1.5">
              <LogOut />
              Logout
            </span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Top header */}
        <header className="md:h-20 flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2b2b2b] flex items-center justify-center">
              🔔
            </div>
            <div className="w-9 h-9 rounded-full bg-[#2b2b2b] flex items-center justify-center">
              👤
            </div>
          </div>
        </header>

        <p className="text-sm text-gray-300 mb-4">Welcome Admin!</p>

        {/* Dashboard grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Top stats cards */}
          <div className="col-span-12 md:col-span-12 lg:col-span-12 grid grid-cols-3 gap-4">
            {[
              {
                title: "Total Users",
                value: "50055",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Vendors",
                value: "3454",
                icon: <Headset className="w-6 h-6" />,
              },
              {
                title: "Customers",
                value: "2454",
                icon: <UserRound className="w-6 h-6" />,
              },
            ].map((c, idx) => (
              <div
                key={idx}
                className="bg-[#121212] p-4 rounded border border-dashed border-[#1f6fdb]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-gray-400">{c.title}</div>
                    <div className="text-xl font-medium mt-1">{c.value}</div>
                  </div>
                  <div className="text-gray-300">{c.icon}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="col-span-12 lg:col-span-8 bg-[#0c0c0c] rounded border border-dashed border-[#1f6fdb] p-4">
            <div className="text-sm text-gray-300 mb-2">Income Statistics</div>
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

          <div className="col-span-12 lg:col-span-4 bg-[#0c0c0c] rounded border border-dashed border-[#1f6fdb] p-4">
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
          <div className="col-span-12 lg:col-span-6 bg-[#0c0c0c] rounded border border-dashed border-[#1f6fdb] p-3">
            <div className="text-sm text-gray-300 mb-2">Vendor Accounts</div>
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

          <div className="col-span-12 lg:col-span-6 bg-[#0c0c0c] rounded border border-dashed border-[#1f6fdb] p-3">
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
      </main>
    </div>
  );
}
