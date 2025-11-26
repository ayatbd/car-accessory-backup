"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const data = [
  { name: "Jan", white: 500000, gold: 200000 },
  { name: "Feb", white: 550000, gold: 350000 },
  { name: "Mar", white: 450000, gold: 450000 },
  { name: "Apr", white: 120000, gold: 300000 },
  { name: "May", white: 200000, gold: 100000 },
  { name: "Jun", white: 700000, gold: 150000 },
  { name: "Jul", white: 900000, gold: 300000 },
  { name: "Aug", white: 950000, gold: 450000 },
  { name: "Sept", white: 750000, gold: 500000 },
  { name: "Oct", white: 500000, gold: 300000 },
  { name: "Nov", white: 350000, gold: 200000 },
  { name: "Dec", white: 300000, gold: 150000 },
];

export default function IncomeDashboard() {
  return (
    <div className="bg-[#222222] flex px-[130px] pt-14 gap-5">
      <div className="w-full space-y-5 text-white flex-7/12">
        {/* TOP SECTION */}
        <div className="flex gap-4">
          {/* DONUT CARD */}
          <div className="flex-7/12 bg-[#1a1a1a] py-4 px-8 rounded-xl border border-gray-800">
            <div className="flex justify-between text-sm text-gray-300 mb-4">
              <span className="text-white text-lg font-bold">Total Income</span>
              <span>This Month ▼</span>
            </div>

            <div className="flex justify-center items-center relative">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="#f5e6a2"
                  strokeWidth="14"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset="140"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="70"
                  stroke="#ffffff"
                  strokeWidth="14"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray="440"
                  strokeDashoffset="300"
                />
              </svg>

              <div className="absolute text-center">
                <div className="text-gray-300 text-lg">Total income</div>
                <div className="text-2xl font-semibold">$12,875</div>
              </div>
            </div>

            <div className="flex justify-between text-xs mt-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#f5e6a2]"></span>
                <span className="text-[16px] text-white">Premium</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-white"></span>
                <span className="text-[16px] text-white">Premium Pro</span>
              </div>
            </div>
          </div>
          <div className="flex-5/12 space-y-4">
            {/* Monthly Income */}
            <div className="w-full bg-[#1a1a1a] p-4 rounded-xl border border-gray-800">
              <div>
                <div>
                  <p className="text-gray-300 text-lg font-bold">
                    Monthly Packages Income
                  </p>
                  <p className="text-[70px] text-[#f5e6a2] font-bold flex items-center">
                    <span>
                      <MdOutlineWorkspacePremium color="#FFE6B9" size={65} />
                    </span>
                    50k
                  </p>
                </div>
              </div>
            </div>

            {/* Yearly Income */}
            <div className="w-full bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 text-white">
              <div>
                <div>
                  <p className="text-lg font-bold">Yearly Packages Income</p>
                  <p className="text-[70px] font-bold flex items-center">
                    <span>
                      <MdOutlineWorkspacePremium color="#FFFF" size={65} />
                    </span>
                    50k
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LINE CHART SECTION */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
          <div className="flex justify-between mb-4 text-sm">
            <span className="text-white text-lg font-semibold">
              Total Income
            </span>
            <span className="text-gray-300">This Year ▼</span>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data} margin={{ left: -10, right: 20 }}>
              {/* Grid matching screenshot */}
              <CartesianGrid
                stroke="#ffffff33"
                strokeWidth={1}
                horizontal={true}
                vertical={false}
              />

              {/* X Axis */}
              <XAxis
                dataKey="name"
                stroke="#ccc"
                tick={{ fill: "#ccc", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y Axis with perfect matching values */}
              <YAxis
                tick={{ fill: "#ccc", fontSize: 12 }}
                stroke="#ccc"
                domain={[0, 1000000]}
                ticks={[0, 50000, 100000, 500000, 1000000]}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#222",
                  color: "#fff",
                  borderRadius: "8px",
                  border: "none",
                }}
              />

              {/* Gold Line */}
              <Line
                type="monotone"
                dataKey="gold"
                stroke="#e8d39f"
                strokeWidth={3}
                dot={false}
              />

              {/* White Line */}
              <Line
                type="monotone"
                dataKey="white"
                stroke="#ffffff"
                strokeWidth={3}
                dot={(props) =>
                  props.payload.name === "Sept" ? (
                    <circle
                      cx={props.cx}
                      cy={props.cy}
                      r={6}
                      fill="#fff"
                      stroke="#fff"
                    />
                  ) : null
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex-5/12 h-full max-h-screen overflow-auto">
        <div className="flex flex-col h-full bg-[#0a0a0a] text-white rounded-md">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden">
                <div className="border-b">
                  <p className="text-[24px] font-medium text-white px-6 py-4 text-center">
                    Transaction Activities
                  </p>
                </div>
                <table className="min-w-full">
                  <thead className="border-b bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="text-[16px] font-medium text-primary-black px-6 py-4 text-left"
                      >
                        #SL
                      </th>
                      <th
                        scope="col"
                        className="text-[16px] font-medium text-primary-black px-6 py-4 text-left"
                      >
                        Use Name
                      </th>
                      <th
                        scope="col"
                        className="text-[16px] font-medium text-primary-black px-6 py-4 text-left"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-[16px] font-medium text-primary-black px-6 py-4 text-left"
                      >
                        Payment
                      </th>
                    </tr>
                  </thead>

                  <tbody className="px-3">
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] font-medium text-white">
                        1
                      </td>
                      <td className="text-[16px] font-bold text-white px-6 py-4 whitespace-nowrap flex items-center gap-2">
                        <div className="avatar avatar-placeholder">
                          <div className="bg-white text-neutral-content w-5 rounded-full">
                            <span className="text-xs">UI</span>
                          </div>
                        </div>
                        Mark
                      </td>
                      <td className="text-[12px] text-white px-6 py-4 whitespace-nowrap">
                        Mar 5,2025
                      </td>
                      <td className="text-[16px] text-[#FFE6B9] font-medium px-6 py-4 whitespace-nowrap ">
                        $ 12,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
