import { Button } from "antd";
import Link from "next/link";

const ChangePassword = () => {
  return (
    <div className="bg-[#fff5e4] min-h-screen  pt-[72px] pl-[134px]">
      <div className="max-w-[1040px] space-y-[98px]">
        <div className="bg-[#FFE6B9] py-20 px-10 space-y-[60px]">
          <h1 className="text-[24px] text-[#222222] pb-3 border-b border-primary-black">
            Privacy Policy
          </h1>
          <div className="space-y-11">
            <p>
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information. We prioritize your privacy and ensure that
              any data collected is handled securely and in compliance with
              applicable laws. We may collect information such as your name,
              contact details, and browsing activity to improve our services and
              personalize your experience. This information helps us understand
              your preferences and tailor our offerings to better suit your
              needs.
            </p>
            <p>
              We do not share your personal data with third parties unless
              necessary for providing our services or as required by law. You
              have the right to access, update, or delete your personal
              information, and we provide mechanisms to facilitate these
              actions.{" "}
            </p>
            <p>
              By using our services, you consent to the terms outlined in this
              Privacy Policy. We may update this policy periodically, and it is
              your responsibility to review it regularly for any changes.
            </p>
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
            Save
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChangePassword;
