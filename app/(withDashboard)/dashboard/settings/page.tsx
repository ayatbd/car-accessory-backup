import { MdArrowForwardIos } from "react-icons/md";
import styles from "./../dashboard.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-[#fff5e4] pt-[120px] px-[134px] min-h-screen">
      <div className="">
        <ul className={`space-y-11 ${styles.listStyle}`}>
          <li>
            <Link href="notifications">
              Notification <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="changepassword">
              Change Password <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="">
              Login Activity <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="privacypolicy">
              Privacy Policy <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="termofservices">
              Terms of Services <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="aboutus">
              About Us <MdArrowForwardIos />
            </Link>
          </li>
          <li>
            <Link href="support">
              Support <MdArrowForwardIos />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
