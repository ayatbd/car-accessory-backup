import { Button } from "antd";
import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const value = {
  image: "https://i.ibb.co.com/N6fv344C/image1.png",
  name: "James Mitchell",
  email: "email@gmail.com",
};

const Profile = () => {
  return (
    <div className="bg-[#fff5e4] pl-[134px] pt-7 min-h-screen">
      <div className="flex items-center gap-6">
        <div className="avatar">
          <div className="rounded-full">
            <Image src={value.image} width={200} height={200} alt="Avatar" />
          </div>
        </div>
        <span className="text-[40px] text-[#222222]">{value.name}</span>
      </div>
      <div className="w-[1040px] space-y-[300px]">
        <form className="mt-[45px] space-y-8">
          <div>
            <label
              className="block text-[18px] text-[#222222] mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              defaultValue={value.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#3E3E3E]"
              id="email"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-[18px] text-[#222222] mb-2"
              htmlFor="email"
            >
              Name
            </label>
            <input
              defaultValue={value.name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#3E3E3E]"
              id="name"
              type="name"
            />
          </div>
        </form>
        <Link href="/dashboard/updateprofile">
          <Button
            style={{
              backgroundColor: "#222222",
              borderRadius: "5px",
              color: "#FFE0A7",
              fontSize: "18px",
              padding: "20px 0",
            }}
            type="primary"
            block
          >
            <Pen /> Edit Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
