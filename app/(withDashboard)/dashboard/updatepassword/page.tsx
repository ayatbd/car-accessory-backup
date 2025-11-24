import { Button } from "antd";
import Link from "next/link";

const UpdatePassword = () => {
  return (
    <div className="bg-[#fff5e4] min-h-screen flex items-center justify-center">
      <form className=" w-2xl">
        <div className="space-y-7">
          <div className="space-y-5">
            <h1 className="text-[32px] text-[#222222] font-medium">
              Update Password
            </h1>
            <p className="text-[20px] text-[#3E3E3E]">
              To update your password, check email for OTP being sent. Enter it
              in designated field to complete reset process.
            </p>
          </div>
          <div className="space-y-5 mb-[52px]">
            <div>
              <label
                className="block text-[18px] text-[#222222] mb-2"
                htmlFor="currentPassword"
              >
                New Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#3E3E3E]"
                id="currentPassword"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                className="block text-[18px] text-[#222222] mb-2"
                htmlFor="currentPassword"
              >
                Re-enter New Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#3E3E3E]"
                id="currentPassword"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>
        <Link href="">
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
            Confirm
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default UpdatePassword;
