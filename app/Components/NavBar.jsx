"use client";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../globals.css";
import { usePathname } from "next/navigation";
export default function NavBar() {
  const currentRoute = usePathname();
  return (
    <div className=" flex justify-between items-center shadow   bg-white ">
      <div className="p-3">
        <Link href={"/"}>
          <h1 className=" text-primary flex text-3xl items-center font-bold">
            <span className=" mr-2  ">
              <FaCarAlt />
            </span>
            CarServ
          </h1>
        </Link>
      </div>
      <div>
        <ul className="flex font-Ubuntu font-medium  text-sm">
          <li className="uppercase mr-3   flex items-center hover:text-primary ">
            <Link href={"/"} className={currentRoute === "/" ? "active py-5" : "py-5"}>
              Home
            </Link>
          </li>
          <li className="hover:text-primary uppercase mr-3  flex items-center">
            <Link
              href={"/about"}
              className={currentRoute === "/about " ? "active py-5" : "py-5"}
            >
              About
            </Link>
          </li>
          <li className="uppercase mr-3  flex items-center hover:text-primary">
            <Link
              href={"/service"}
              className={currentRoute === "/service" ? "active py-5" : "py-5"}
            >
              Service
            </Link>
          </li>
          <li className="uppercase mr-3 py-5 flex items-center hover:text-primary">
            <Link href={""}>
              Pages
              <span>
                <KeyboardArrowDownIcon />
              </span>
            </Link>
          </li>
          <li className="uppercase mr-4 flex items-center hover:text-primary">
            <Link
              href={"/contact"}
              className={currentRoute === "/contact" ? "active py-5" : "p-y5"}
            >
              Contact
            </Link>
          </li>
          <div className=" flex items-center  text-lg uppercase p-5 text-white bg-primary">
            <Link href={"/"}>
              Get A Quote
              <span>
                <ArrowForwardIosIcon />
              </span>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
