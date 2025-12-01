// components/AllProductsPage.jsx

import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AllProductsPage() {
  const categories = [
    { name: "Autoparts & analog", count: 287 },
    { name: "Car & Motor Care", count: 212 },
    { name: "Gifts & Merchandise", count: 20 },
    { name: "Navigation Devices", count: 34 },
    { name: "Tools & Equipment", count: 120 },
    { name: "Tires & Wheels", count: 21 },
    { name: "Oils & Fluids", count: 100 },
  ];

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: "AC service & repair",
    image: "/pictures/products$services/p$s1.png", // replace as needed
  }));

  return (
    <div className="min-h-screen text-white bg-[#222222]">
      <Container>
        <div className="mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LEFT SIDEBAR */}
          <aside className="md:col-span-1 space-y-10 ">
            {/* Categories */}
            <div className="bg-[#3e3e3e] rounded-lg p-2.5">
              <div>
                <span className="flex items-center">
                  <span>
                    <RiArrowDropDownLine
                      size={40}
                      className="text-primary-yellow"
                    />
                  </span>
                  <p font-medium text-2xl text-primary-yellow>
                    Show All Categories
                  </p>
                </span>
                <ul className="space-y-2 my-10">
                  {categories.map((cat) => (
                    <li
                      key={cat.name}
                      className="flex items-center gap-2 p-3.5 text-[20px] text-white"
                    >
                      <span>{cat.name}</span>
                      <span>({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Filters */}
              <div>
                <h2 className="font-medium text-2xl mb-4 text-primary-yellow">
                  Show Filter
                </h2>
                <div className="space-y-4">
                  {/* Price */}
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Price min"
                      className="w-1/2 px-3 py-2 bg-white rounded text-sm border border-gray-700"
                    />
                    <input
                      type="number"
                      placeholder="Price max"
                      className="w-1/2 px-3 py-2 bg-white rounded text-sm border border-gray-700"
                    />
                  </div>

                  {/* Brand */}
                  <select className="w-full px-3 py-2 text-black bg-white text-sm rounded border border-gray-700">
                    <option>All brands</option>
                  </select>

                  {/* Model */}
                  <select className="w-full px-3 py-2 text-black bg-white text-sm rounded border border-gray-700">
                    <option>All models</option>
                  </select>

                  {/* Years */}
                  <div className="flex space-x-2">
                    <select className="w-1/2 px-3 py-2 text-black bg-white text-sm rounded border border-gray-700">
                      <option>Year from</option>
                    </select>
                    <select className="w-1/2 px-3 py-2 text-black bg-white text-sm rounded border border-gray-700">
                      <option>Year to</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <button className="w-full cursor-pointer bg-[#f3d9b1] text-black py-2 rounded font-medium">
                    Reset filter
                  </button>

                  <button className="w-full cursor-pointer bg-white text-black py-2 rounded font-medium">
                    Additional Request to vector
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <main className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <div key={p.id} className="relative w-full">
                  <Image
                    width={282}
                    height={312}
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Black overlay */}
                  <div className="absolute text-center bottom-0 left-0 right-0 bg-black/65 p-3">
                    <h3 className="text-white text-[24px] font-medium text-center">
                      {p.title}
                    </h3>
                    <Link href="allproducts/${p.id}" key={p.id}>
                      <button className="mt-3 cursor-pointer px-[60px] bg-[#F3D29C] text-black py-2.5 rounded-sm text-sm">
                        Visit
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
