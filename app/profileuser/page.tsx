"use client";
import Container from "@/components/shared/Container";
import Image from "next/image";
import { useState } from "react";

import { FiEdit2 } from "react-icons/fi";

export default function EditProfile() {
  type ProfileData = {
    fullName: string;
    email: string;
    contact: string;
    address: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
  };

  const [data, setData] = useState<ProfileData>({
    fullName: "Aurora smith",
    email: "aurorasmith@gmail.com",
    contact: "+99-0##########",
    address: "",
    password: "************",
    newPassword: "************",
    confirmPassword: "************",
  });

  const [editField, setEditField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ProfileData
  ) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSave = () => {
    console.log("Updated Profile:", data);
    alert("Profile updated successfully!");
    setEditField(null);
  };
  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="text-white mx-auto p-8">
          <div className="flex items-center justify-start gap-10 py-20">
            <Image
              src="/pictures/profile.png"
              alt="Profile"
              width={148}
              height={148}
            />
            <h1 className="font-medium text-4xl text-[#FFE0A7]">
              Charles Smith
            </h1>
          </div>
          <h1 className="text-2xl font-medium mb-10">Edit Profile</h1>

          {/* Top Section */}
          <div className="flex items-center gap-8 mb-10">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-lg">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  readOnly={editField !== "fullName"}
                  value={data.fullName}
                  onChange={(e) => handleChange(e, "fullName")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("fullName")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-lg">Email</label>
              <div className="relative">
                <input
                  type="email"
                  readOnly={editField !== "email"}
                  value={data.email}
                  onChange={(e) => handleChange(e, "email")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("email")}
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block mb-2 text-lg">Contact Number</label>
              <div className="relative">
                <input
                  type="text"
                  readOnly={editField !== "contact"}
                  value={data.contact}
                  onChange={(e) => handleChange(e, "contact")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("contact")}
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mt-10">
            <label className="block mb-2 text-lg">Address</label>
            <div className="relative">
              <input
                type="text"
                readOnly={editField !== "address"}
                value={data.address}
                onChange={(e) => handleChange(e, "address")}
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
              <FiEdit2
                className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                onClick={() => setEditField("address")}
              />
            </div>
          </div>

          {/* Password Changes */}
          <h2 className="text-2xl mt-12 mb-4">Password Changes</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Current Password */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  readOnly={editField !== "password"}
                  value={data.password}
                  onChange={(e) => handleChange(e, "password")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("password")}
                />
              </div>
            </div>

            {/* New Password */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  readOnly={editField !== "newPassword"}
                  value={data.newPassword}
                  onChange={(e) => handleChange(e, "newPassword")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("newPassword")}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  readOnly={editField !== "confirmPassword"}
                  value={data.confirmPassword}
                  onChange={(e) => handleChange(e, "confirmPassword")}
                  className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
                />
                <FiEdit2
                  className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer"
                  onClick={() => setEditField("confirmPassword")}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleSave}
              className="bg-[#F8D8A8] text-black font-semibold px-12 py-3 rounded-md shadow-md hover:bg-[#f5c98a] transition"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
