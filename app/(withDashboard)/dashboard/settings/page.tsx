import { MdArrowForwardIos } from "react-icons/md";
import styles from "./../dashboard.module.css";

const page = () => {
  return (
    <div className="bg-[#fff5e4] pt-[120px] pl-[134px] min-h-screen">
      <div className="">
        <ul className={`space-y-11 ${styles.listStyle}`}>
          <li>
            Notification <MdArrowForwardIos />
          </li>
          <li>
            Change Password <MdArrowForwardIos />
          </li>
          <li>
            Login Activity <MdArrowForwardIos />
          </li>
          <li>
            Privacy Policy <MdArrowForwardIos />
          </li>
          <li>
            Terms of Services <MdArrowForwardIos />
          </li>
          <li>
            About Us <MdArrowForwardIos />
          </li>
          <li>
            Support <MdArrowForwardIos />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
