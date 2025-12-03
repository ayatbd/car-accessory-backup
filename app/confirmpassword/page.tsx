"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-10 min-h-screen bg-[#222222]">
      <div className="w-full mx-auto max-w-[800px] text-white py-[50px]">
        <form className="space-y-5 py-[100px] px-[165px] border border-primary-yellow rounded-xl">
          {/* Password */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[20 px]">Password</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? (
                  <HiOutlineEyeOff size={20} />
                ) : (
                  <HiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-[20 px]">Confirm Password</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? (
                  <HiOutlineEyeOff size={20} />
                ) : (
                  <HiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#F3D29C] text-black py-3 rounded-md text-sm font-medium hover:bg-[#eac88d] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
