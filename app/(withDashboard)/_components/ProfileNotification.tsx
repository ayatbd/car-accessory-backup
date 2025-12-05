import { Button } from "antd";
import { BellDot } from "lucide-react";
import Link from "next/link";

type Notification = {
  id: string | number;
  message: string;
  time: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 2,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 3,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 4,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 5,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 6,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
  {
    id: 7,
    message: "You have received $500 from Nova Parker",
    time: "Fri, 12:30pm",
  },
];

const ProfileNotification = () => {
  return (
    <>
      <div
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-sm z-50 lg:w-[506px] md:w-[450px] w-[250px] lg:p-10 md:p-8 sm:p-3 shadow-sm"
      >
        <ul>
          {notifications.map((notification, id) => (
            <li key={id} className="flex gap-3 border-b pb-4">
              <span>
                <BellDot className="w-6 h-6 text-[#8C7B5C]" />
                <a className="text-18px text-[#8C7B5C] flex flex-col justify-center items-start ml-1">
                  {notification.message}
                  <span className="text-[#8C8C8C]">{notification.time}</span>
                </a>
              </span>
            </li>
          ))}
        </ul>
        <div className="text-center mt-9">
          <Link href="" className="">
            <button className="bg-[#222222] rounded-[5px] text-[#FFE0A7] lg:text-[18px] sm:text-[14px] md:text-[16px] py-3! px-8! cursor-pointer!">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileNotification;
