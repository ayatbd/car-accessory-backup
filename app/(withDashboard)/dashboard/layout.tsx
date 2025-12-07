"use client";
import { createContext, useState, useEffect, useMemo } from "react";
import SideBar from "../_components/SideBar";
import ProfileNotification from "../_components/ProfileNotification";
import Link from "next/link";
import { FaBell, FaRegUser } from "react-icons/fa";
import DashboardHeader from "../_components/DashboardHeader";
import { usePathname } from "next/navigation";

type PageTitleContextType = {
  title: string;
  setTitle: (s: string) => void;
};
export const PageTitleContext = createContext<PageTitleContextType>({
  title: "Dashboard",
  setTitle: () => {},
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // dynamic dashboard title
  const pathname = usePathname() || "";
  const [title, setTitle] = useState("Dashboard");

  // mapping from path -> title
  const titleMap: Record<string, string> = useMemo(
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
      "/dashboard/termofservices": "Term of services",
    }),
    []
  );

  const isDashboard = pathname === "/dashboard";
  const navbarColor = isDashboard ? "bg-[#181818]" : "bg-[#6B5E46]";

  useEffect(() => {
    if (!pathname) return;

    const mapped = titleMap[pathname];

    // If mapping exists → update only if different
    if (mapped) {
      if (mapped !== title) setTitle(mapped);
      return;
    }

    // Fallback title
    const parts = pathname.split("/").filter(Boolean);
    const last = parts.length ? parts[parts.length - 1] : "dashboard";
    const friendly =
      last === "dashboard"
        ? "Dashboard"
        : last.charAt(0).toUpperCase() + last.slice(1);

    // Set only if different
    if (friendly !== title) setTitle(friendly);
  }, [pathname, titleMap, title]);

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      <div className="min-h-screen flex ">
        {/* Sidebar */}
        <SideBar />
        {/* Main Content Area */}
        <div className="min-w-[84%]">
          <main className="flex-1">
            {/* Top header */}
            <div className={`px-[134px] ${navbarColor}`}>
              <header className="flex items-center justify-between py-7">
                <span>
                  <DashboardHeader></DashboardHeader>
                </span>

                <div className="flex items-center gap-[52px]">
                  <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
                    {/* <UserRound className="text-black cursor-pointer" /> */}
                    <div className="dropdown dropdown-bottom dropdown-end">
                      <div tabIndex={0} className="m-1">
                        <FaBell
                          fill="gray"
                          size={20}
                          className="cursor-pointer"
                        />
                        <ProfileNotification />
                      </div>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
                    <Link href="/dashboard/profile">
                      <button>
                        <FaRegUser
                          size={20}
                          color="primary-black"
                          className=" cursor-pointer"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </header>
            </div>

            {/* children  */}
            {children}
          </main>
        </div>
      </div>
    </PageTitleContext.Provider>
  );
}
