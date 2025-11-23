const Notifications = () => {
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
  return (
    <div className="bg-[#222222] min-h-screen">
      <div className="pt-[88px] pl-[134px] w-[1040px]">
        <ul className="rounded-sm space-y-7 z-1 p-10 w-full">
          {notifications.map((notification, id) => (
            <li
              key={id}
              className="flex gap-3 border-b border-[#FFE6B9] pb-4 w-full"
            >
              <span className="flex items-center justify-start gap-1.5">
                <a className="text-18px flex flex-col justify-center items-start ml-1">
                  <span className="text-white">{notification.message}</span>
                  <span className="text-white">{notification.time}</span>
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
