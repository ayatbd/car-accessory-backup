"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-10 min-h-screen bg-[#222222]">
      <div className="flex items-center justify-center mb-14">
        <Image src="/pictures/logo(2).png" alt="" width={150} height={135} />
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="w-full max-w-[979] text-white">
          <div className="px-[165px] space-y-5">
            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="text-[40px] font-semibold">
                Great to have you back !
              </h1>
            </div>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-5 my-9">
            <div className="flex-1 h-[2px] bg-gray-600"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-[2px] bg-gray-600"></div>
          </div>
          {/* Login Form */}
          <form className="space-y-5 px-[165px]">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-[20px]">Username or Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[20 px]">Password</label>
                <Link
                  href=""
                  className="text-[20 px] px-11 border-b text-[#FFE6B9]"
                >
                  Forgot
                </Link>
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

            {/* Forgot password */}
            <div className="flex justify-end -mt-2">
              <a
                href="/forgot-password"
                className="text-sm text-gray-300 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#F3D29C] text-black py-3 rounded-md text-sm font-medium hover:bg-[#eac88d] transition"
            >
              Sign In
            </button>

            {/* Register Link */}
            <p className="text-center border-t py-6 space-x-2 text-sm text-gray-300 mt-8">
              Captures collects and uses personal data in accordance with
              our Privacy Policy. By creating an account, you agree to our Terms
              & Conditions.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
