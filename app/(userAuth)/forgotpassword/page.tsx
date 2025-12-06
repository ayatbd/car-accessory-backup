import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="py-10 min-h-screen bg-[#222222]">
      <div className="w-full mx-auto max-w-[800px] text-white py-[50px]">
        <form className="space-y-5 py-[100px] px-[165px] border border-primary-yellow rounded-xl">
          <h1 className="text-4xl">Forgot Password</h1>
          <p>
            Enter your details below to request an your capture award account
            password reset.
          </p>
          {/* Password */}
          <div className="space-y-1 mt-5">
            <div className="flex items-center justify-between">
              <label className="text-[20 px]">Email</label>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 text-sm focus:outline-none focus:border-white"
              />
            </div>
          </div>

          {/* Login Button */}
          <Link href="/confirmpassword">
            <button
              type="submit"
              className="w-full bg-[#F3D29C] text-black py-3 rounded-md text-sm font-medium hover:bg-[#eac88d] transition cursor-pointer"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
