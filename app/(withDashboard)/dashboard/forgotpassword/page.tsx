import { Button } from "antd";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="bg-[#fff5e4] min-h-screen flex items-center justify-center">
      <form className=" w-2xl">
        <div className="space-y-7">
          <div className="space-y-5">
            <h1 className="text-[32px] text-[#222222] font-medium">
              Forgot Password
            </h1>
            <p className="text-[20px] text-[#3E3E3E]">
              Enter your email address to get a verification code for resetting
              your password.
            </p>
          </div>
          <div className="space-y-5 mb-[52px]">
            <div>
              <label
                className="block text-[18px] text-[#222222] mb-2"
                htmlFor="currentPassword"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#3E3E3E]"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
        <Link href="verifyotp">
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
            Get OTP
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
