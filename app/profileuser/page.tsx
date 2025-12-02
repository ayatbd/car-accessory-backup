import Container from "@/components/shared/Container";

export default function EditProfile() {
  return (
    <div className="bg-[#222222]">
      <Container>
        <div className="text-white mx-auto p-8">
          <h1 className="text-2xl font-medium mb-10">Edit Profile</h1>

          {/* Top Section */}
          <div className="flex items-center gap-8 mb-10">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Aurora smith"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Email</label>
              <input
                type="email"
                placeholder="aurorasmith@gmail.com"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium">Contact Number</label>
              <input
                type="text"
                placeholder="+99-0##########"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2 mb-10">
            <label className="text-lg font-medium">Address</label>
            <input
              type="text"
              className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
            />
          </div>

          {/* Password Changes */}
          <div className="mb-10">
            <label className="text-lg font-medium">Password Changes</label>
            <div className="flex items-center justify-between mt-2">
              <input
                type="password"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
              <input
                type="password"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
              <input
                type="password"
                className="w-[400px] py-5 border border-white/80 bg-transparent rounded-sm px-4"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="bg-[#F7D7A8] text-black rounded-md font-medium px-24 py-5">
            SAVE CHANGES
          </button>
        </div>
      </Container>
    </div>
  );
}
