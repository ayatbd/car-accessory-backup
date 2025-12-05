import { Button } from "antd";
import { BellDot } from "lucide-react";
import Link from "next/link";
import { FaBell } from "react-icons/fa";

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
      <ul className="dropdown-content menu bg-base-100 rounded-sm z-50 lg:w-[506px] md:w-[400px] sm:w-[320px] p-10 shadow-sm">
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
        <div className="text-center mt-9">
          <Link href="/dashboard/notifications">
            <Button
              style={{
                backgroundColor: "#222222",
                borderRadius: "5px",
                color: "#FFE0A7",
                fontSize: "18px",
                padding: "20px 40px",
              }}
              type="primary"
            >
              View More
            </Button>
          </Link>
        </div>
      </ul>
    </>
  );
};

export default ProfileNotification;
