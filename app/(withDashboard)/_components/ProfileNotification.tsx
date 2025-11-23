import { BellDot, BellRing } from "lucide-react";

const notifications = [
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
    <div className="w-9 h-9 rounded-lg bg-[#ffff] flex items-center justify-center">
      {/* <UserRound className="text-black cursor-pointer" /> */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} className="m-1">
          <BellRing className="text-black cursor-pointer" />
        </div>
        <ul className="dropdown-content menu bg-base-100 rounded-sm z-1 w-[506px] p-10 shadow-sm">
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
      </div>
    </div>
  );
};

export default ProfileNotification;
