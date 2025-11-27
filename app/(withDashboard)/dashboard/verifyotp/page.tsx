import { Button } from "antd";
import Link from "next/link";

const VerifyOTP = () => {
  return (
    <div className="bg-[#fff5e4] min-h-screen flex items-center justify-center">
      <form className=" w-2xl">
        <div className="space-y-7">
          <div className="space-y-5">
            <h1 className="text-[32px] text-[#222222] font-medium">
              Verify OTP
            </h1>
            <p className="text-[20px] text-[#3E3E3E]">
              We have sent you an OTP to your email address. Please check it and
              place the OTP for resetting password
            </p>
          </div>
          <div className="space-y-5 mb-[52px]">
            <div className="flex justify-center space-x-4 mb-6">
              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />

              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />

              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />

              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />

              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />

              <input
                type="text"
                maxLength={1}
                className="w-12 h-16 text-center text-2xl border-2 border-[#FFE0A7] rounded-xl
              focus:outline-none focus:ring-2 focus:ring-[#FFE0A7]
              dark:bg-gray-600 dark:text-white dark:border-blue-400
              transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
        <Link href="updatepassword">
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

export default VerifyOTP;
