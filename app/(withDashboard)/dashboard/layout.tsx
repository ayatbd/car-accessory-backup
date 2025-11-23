"use client";
// lucid icons
import { Link, UserRound } from "lucide-react";
import SideBar from "../_components/SideBar";
import ProfileNotification from "../_components/ProfileNotification";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex ">
      {/* Sidebar */}
      <SideBar />
      {/* Main Content Area */}
      <div className="min-w-[82.5%]">
        <main className="flex-1">
          {/* Top header */}
          <div className="px-[134px] bg-[#0f0f0f]">
            <header className="flex items-center justify-between py-9">
              <h1 className="text-[40px] font-semibold text-white">
                Dashboard
              </h1>
              <div className="flex items-center gap-[52px]">
                <ProfileNotification />
                <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
                  <UserRound className=" text-black cursor-pointer" />
                </div>
              </div>
            </header>
          </div>

          {/* children  */}
          {children}
        </main>
      </div>
    </div>
  );
}
