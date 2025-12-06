"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-5 bg-[#222222] flex flex-col">
      <div className="flex items-center justify-center mb-5">
        <Image src="/pictures/logo(2).png" alt="" width={125} height={110} />
      </div>

      <div className="flex items-center justify-center px-4 w-full">
        <div className="w-full max-w-3xl text-white">
          <div className="px-4 sm:px-10 md:px-20 lg:px-28 space-y-5">
            {/* Title */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Sign Up Form
              </h1>
              <p className="text-base sm:text-lg text-gray-300">
                Create your account easily with less information.
              </p>
            </div>

            {/* Social login */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-500 py-3 rounded-md hover:bg-white/10 transition">
              <FaGoogle size={18} />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-500 py-3 rounded-md hover:bg-white/10 transition">
              <FaFacebookF size={18} />
              Continue with Facebook
            </button>

            {/* Divider */}
            <div className="flex items-center gap-5">
              <div className="flex-1 h-[1px] bg-gray-600"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="flex-1 h-[1px] bg-gray-600"></div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5 px-4 sm:px-10 md:px-20 lg:px-28">
            {/* First Name */}
            <div className="space-y-1">
              <label className="text-lg">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-1">
              <label className="text-lg">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-lg">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>

            {/* Contact Number */}
            <div className="space-y-1">
              <label className="text-lg">Contact Number</label>
              <input
                type="text"
                placeholder="+880#########"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-lg">Password</label>
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F3D29C] text-black py-3 rounded-md text-sm font-medium hover:bg-[#eac88d] transition"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center space-x-2 text-sm text-gray-300 mt-8">
            <span>Login here?</span>
            <Link
              href="/signup"
              className="text-[#F3D29C] font-medium hover:underline"
            >
              Already have an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
