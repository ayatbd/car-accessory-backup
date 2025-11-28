"use client";

import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-white space-y-8">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="text-sm text-gray-300">
            Welcome back! Please enter your details.
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
        <div className="flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-gray-600"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-[1px] bg-gray-600"></div>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm">Password</label>
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
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#F3D29C] font-medium hover:underline"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
