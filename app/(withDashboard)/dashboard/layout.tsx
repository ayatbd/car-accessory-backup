"use client";

import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import { usePathname } from "next/navigation";
import SideBar from "../_components/SideBar";
import ProfileNotification from "../_components/ProfileNotification";
import DashboardHeader from "../_components/DashboardHeader";
import Link from "next/link";
import { FaBell, FaRegUser } from "react-icons/fa";

/* ---------------------------------------------
   1. Create a typed context for dynamic page titles
-------------------------------------------------- */
export type PageTitleContextType = {
  title: string;
  setTitle: (title: string) => void;
};

// Default values (used only if Provider missing)
export const PageTitleContext = createContext<PageTitleContextType>({
  title: "Dashboard",
  setTitle: () => {},
});

/* ---------------------------------------------
   2. Dashboard Layout Component
-------------------------------------------------- */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // get current route
  const [title, setTitle] = useState<string>("Dashboard");

  /* ---------------------------------------------
     3. Map of known routes → friendly page titles
     useMemo prevents recreation on every render
  -------------------------------------------------- */
  const titleMap = useMemo<Record<string, string>>(
    () => ({
      "/dashboard": "Dashboard",
      "/dashboard/users": "Users",
      "/dashboard/profile": "Profile",
      "/dashboard/settings": "Settings",
      "/dashboard/forgotpassword": "Forgot Password",
      "/dashboard/verifyotp": "Verify OTP",
      "/dashboard/privacypolicy": "Privacy Policy",
      "/dashboard/changepassword": "Change Password",
      "/dashboard/updatepassword": "Update Password",
      "/dashboard/updateprofile": "Update Profile",
      "/dashboard/termofservices": "Term of Services",
    }),
    []
  );

  /* Dynamic navbar background color */
  const isDashboard = pathname === "/dashboard";
  const navbarColor = isDashboard ? "bg-[#181818]" : "bg-[#6B5E46]";

  /* ---------------------------------------------
     4. Update page title whenever path changes
     - Use mapped title if available
     - Otherwise create title from last URL segment
  -------------------------------------------------- */
  useEffect(() => {
    if (!pathname) return;

    // If exact route exists in map, use its title
    const mappedTitle = titleMap[pathname];
    if (mappedTitle) {
      setTitle(mappedTitle);
      return;
    }

    // Fallback: use last segment of URL & capitalize
    const segments = pathname.split("/").filter(Boolean);
    const last = segments.length ? segments[segments.length - 1] : "dashboard";

    const autoTitle =
      last === "dashboard"
        ? "Dashboard"
        : last.charAt(0).toUpperCase() + last.slice(1);

    setTitle(autoTitle);
  }, [pathname, titleMap]);

  /* ---------------------------------------------
     5. Component Layout
  -------------------------------------------------- */
  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      <div className="min-h-screen flex">
        {/* Left Sidebar */}
        <SideBar />

        {/* Right Side (Main Area) */}
        <div className="min-w-[84%]">
          <main className="flex-1">
            {/* Top Navigation Header */}
            <div className={`px-[134px] ${navbarColor}`}>
              <header className="flex items-center justify-between py-7">
                {/* Page Title & Breadcrumb Area */}
                <span>
                  <DashboardHeader />
                </span>

                {/* Notifications + Profile */}
                <div className="flex items-center gap-[52px]">
                  {/* Notification Bell */}
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div tabIndex={0} className="m-1 cursor-pointer">
                        <FaBell fill="gray" size={20} />
                        <ProfileNotification />
                      </div>
                    </div>
                  </div>

                  {/* Profile Icon */}
                  <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                    <Link href="/dashboard/profile">
                      <button>
                        <FaRegUser
                          size={20}
                          className="cursor-pointer text-black"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </header>
            </div>

            {/* Render children pages */}
            {children}
          </main>
        </div>
      </div>
    </PageTitleContext.Provider>
  );
}
