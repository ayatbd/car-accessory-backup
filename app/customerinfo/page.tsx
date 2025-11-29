"use client";

import { useState } from "react";

export default function CustomerInformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    brand: "",
    model: "",
    year: "",
    vehicleId: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#222222] min-h-screen py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl mx-auto p-6 text-white"
      >
        {/* Customer Info */}
        <h2 className="text-[40px] font-medium mb-4 text-primary-yellow">
          Customer Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>
        </div>

        {/* Vehicle Info */}
        <h2 className="text-[40px] font-medium mb-4 text-primary-yellow">
          Vehicle Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Brand Name</label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Model</label>
            <input
              type="text"
              name="model"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Year</label>
            <input
              type="text"
              name="year"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Vehicle ID</label>
            <input
              type="text"
              name="vehicleId"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-md p-3 text-white"
            />
          </div>
        </div>

        {/* Problem Description */}
        <div className="mt-8">
          <label className="block mb-2 font-medium">
            Please describe the problem
          </label>
          <textarea
            name="problem"
            rows={6}
            onChange={handleChange}
            className="w-full border border-gray-600 rounded-md p-3 text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-14 bg-[#F3D29C] text-black py-3 rounded-md text-sm font-medium hover:bg-[#eac88d] transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
