"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  BarChart,
} from "recharts";
import { Users, Headset, UserRound } from "lucide-react";
import { FaSort } from "react-icons/fa";

// NOTE: The Figma screenshot file (provided by you) is referenced below as a local path.
// The path used: "/mnt/data/Screenshot 2025-11-23 014154.png"
// (Per your environment this will be transformed to a URL when the canvas/tooling runs.)

// Sample data to power the sample charts and tables. Replace with real API data as needed.
const lineData = [
  { name: "Jan", monthly: 25, yearly: 45 },
  { name: "Feb", monthly: 45, yearly: 60 },
  { name: "Mar", monthly: 55, yearly: 75 },
  { name: "Apr", monthly: 32, yearly: 50 },
  { name: "May", monthly: 35, yearly: 42 },
  { name: "Jun", monthly: 52, yearly: 42 },
  { name: "Jul", monthly: 10, yearly: 30 },
];

const barData = [
  { name: "Jan", monthly: 300, yearly: 450 },
  { name: "Feb", monthly: 420, yearly: 520 },
  { name: "Mar", monthly: 380, yearly: 610 },
  { name: "Apr", monthly: 260, yearly: 580 },
  { name: "May", monthly: 300, yearly: 540 },
  { name: "Jun", monthly: 350, yearly: 480 },
  { name: "Jul", monthly: 430, yearly: 510 },
  { name: "Aug", monthly: 410, yearly: 620 },
  { name: "Sep", monthly: 410, yearly: 620 },
  { name: "Oct", monthly: 410, yearly: 620 },
  { name: "Nov", monthly: 410, yearly: 620 },
  { name: "Dec", monthly: 410, yearly: 620 },
];

export default function Dashboard() {
  return (
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
                className="bg-primary-black py-[21px] px-[41px] rounded border "
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
          <div className="col-span-12 lg:col-span-6 rounded border p-4 bg-primary-black">
            <div className="text-[20px] text-[#FFFFFF] mb-2">
              Income Statistics
            </div>
            <div className="flex justify-end mb-3 text-xs space-x-4">
              <div className="flex items-center space-x-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#f5e6a2" }}
                ></span>
                <span className="text-[#f5e6a2]">Monthly</span>
              </div>
              <div className="flex items-center space-x-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#ffffff" }}
                ></span>
                <span className="text-white">Yearly</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid
                  stroke="#444"
                  strokeDasharray="0"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#999"
                  tick={{ fill: "#ccc", fontSize: 12 }}
                />
                <YAxis
                  stroke="#999"
                  tick={{ fill: "#ccc", fontSize: 12 }}
                  domain={[20, 80]}
                  ticks={[20, 30, 40, 50, 60, 70, 80]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    borderRadius: "8px",
                    border: "none",
                  }}
                />

                {/* Yearly (Yellow) */}
                <Line
                  type="monotone"
                  dataKey="yearly"
                  stroke="#f5e6a2"
                  strokeWidth={3}
                  dot={false}
                />

                {/* Monthly (White) */}
                <Line
                  type="monotone"
                  dataKey="monthly"
                  stroke="#ffffff"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="col-span-12 lg:col-span-6 rounded border p-4 bg-primary-black">
            <div className="text-sm text-gray-300 mb-2">
              Number of Subscription Users
            </div>
            <div className="flex justify-end mb-3 text-xs space-x-4">
              <div className="flex items-center space-x-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#ffffff" }}
                ></span>
                <span>Monthly</span>
              </div>
              <div className="flex items-center space-x-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#f5e6a2" }}
                ></span>
                <span>Yearly</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid stroke="#444" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#999"
                  tick={{ fill: "#ccc", fontSize: 12 }}
                />
                <YAxis
                  stroke="#999"
                  tick={{ fill: "#ccc", fontSize: 12 }}
                  domain={[0, 800]}
                  ticks={[0, 200, 400, 600, 800]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#222",
                    borderRadius: "8px",
                    border: "none",
                  }}
                />

                {/* Monthly (White) */}
                <Bar
                  dataKey="monthly"
                  fill="#ffffff"
                  barSize={10}
                  radius={[6, 6, 0, 0]}
                />

                {/* Yearly (Yellow) */}
                <Bar
                  dataKey="yearly"
                  fill="#f5e6a2"
                  barSize={10}
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Lower tables */}
          <div className="col-span-12 text-white lg:col-span-6 rounded border-sm bg-primary-black p-3">
            <div className="text-[20px] text-gray-300 mb-2">
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
                      <td className="py-2 px-3 flex items-center gap-2">
                        <div className="avatar avatar-placeholder">
                          <div className="bg-white text-neutral-content w-5 rounded-full">
                            <span className="text-xs">UI</span>
                          </div>
                        </div>
                        John Smith
                      </td>
                      <td className="py-2 px-3">Yearly</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-12 text-white lg:col-span-6 rounded border bg-primary-black p-3">
            <div className="text-[20px] text-gray-300 mb-2">User Activity</div>
            <div className="overflow-auto max-h-56">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-[#e9d9b7] text-black">
                    <th className="py-2 px-3">
                      <span className="flex items-center gap-2">
                        Number <FaSort />
                      </span>
                    </th>
                    <th className="py-2 px-3">
                      <span className="flex items-center gap-2">
                        Date <FaSort />
                      </span>
                    </th>
                    <th className="py-2 px-3">
                      <span className="flex items-center gap-2">
                        Customer <FaSort />
                      </span>
                    </th>
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
  );
}
