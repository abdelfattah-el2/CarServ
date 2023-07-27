"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../globals.css";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import EmailIcon from "@mui/icons-material/Email";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import BookIcon from "@mui/icons-material/Book";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  let navTopRef = useRef();
  let navbotRef = useRef();
  // if click out navbar make the hidden fales
  useEffect(() => {
    let close = (e) => {
      if (
        !navbotRef.current.contains(e.target) &&
        !navTopRef.current.contains(e.target)
      ) {
        setHidden(false);
      }
    };
    window.addEventListener("click", close);
  }, []);
  const currentRoute = usePathname();

  return (
    <>
    {/* Start TopBar */}
      <div className=" sticky top-0 z-[55577755] flex justify-between items-center shadow   bg-white ">
        <div className="p-3 py-5 sm:py-4">
          <Link href={"/"}>
            <h1 className=" text-primary flex text-3xl items-center font-bold">
              <span className=" mr-2  ">
                <FaCarAlt />
              </span>
              CarServ
            </h1>
          </Link>
        </div>
        <div className="hidden sm:block">
          <ul className="flex font-Ubuntu font-medium  text-sm">
            <li className="uppercase mr-3   flex items-center hover:text-primary ">
              <Link
                href={"/"}
                className={currentRoute === "/" ? "active py-5" : "py-5"}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-primary uppercase mr-3  flex items-center">
              <Link
                href={"/about"}
                className={currentRoute === "/about" ? "active py-5" : "py-5"}
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
            <li
              ref={navTopRef}
              className="uppercase mr-3 relative  flex items-center "
            >
              <div
                onClick={() => {
                  setHidden(hidden === false ? true : false);
                }}
                className={
                  currentRoute === "/pages/booking" ||
                  hidden ||
                  currentRoute === "/pages/technicians" ||
                  currentRoute === "/pages/testimonial"
                    ? "  text-primary py-5 inline-block      cursor-pointer"
                    : "hover:text-primary py-5 inline-block  cursor-pointer"
                }
                // className={
                //   hidden ? "text-primary py-5 " : "hover:text-primary py-5 "
                // }
              >
                Pages
                <span>
                  <KeyboardArrowDownIcon />
                </span>
              </div>
              <div
                className={
                  hidden
                    ? "  absolute  top-[100%]  z-[200000] duration-700 left-[-50%] border bg-white"
                    : "  absolute hidden opacity-0  top-[150%]  duration-700 left-[-50%] border bg-white"
                }
              >
                <ul>
                  <li>
                    <Link
                      href={"/pages/booking"}
                      className={
                        currentRoute === "/pages/booking"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/pages/technicians"}
                      className={
                        currentRoute === "/pages/technicians"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Technicians
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/pages/testimonial"}
                      className={
                        currentRoute === "/pages/testimonial"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </div>
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
        {/* End TopBar */}
      {/* Start BottomBar */}
      <div className="p-3 pt-0 fixed w-full z-50 bottom-0  bg-white shadow sm:hidden">
        <div>
          <ul className=" flex items-end  justify-evenly">
            <li className="mr-1">
              <Link
                className=" p-1 text-sm flex flex-col-reverse  items-center"
                href={"/"}
              >
                Home
                <span>
                  <IconButton className={currentRoute === "/" ? " text-primary " : ""}>
                    <HomeIcon fontSize={"small"} />
                  </IconButton>
                </span>
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className=" p-1 text-sm flex flex-col-reverse items-center"
                href={"/about"}
              >
                About
                <span>
                  <IconButton
                    className={currentRoute === "/about" ? "text-primary " : ""}
                  >
                    <GroupsIcon fontSize={"small"} />
                  </IconButton>
                </span>
              </Link>
            </li>
            <li className="mr-1">
              <Link
                className=" p-1 text-sm flex flex-col-reverse items-center"
                href={"/service"}
              >
                Service
                <span>
                  <IconButton
                    className={currentRoute === "/service" ? "text-primary " : ""}
                  >
                    <ConstructionRoundedIcon fontSize={"small"} />
                  </IconButton>
                </span>
              </Link>
            </li>

            <li className="mr-1 relative" ref={navbotRef}>
              <div
                className=" cursor-pointer p-1 text-sm  flex flex-col-reverse items-center"
                onClick={() => {
                  setHidden(hidden === false ? true : false);
                }}
              >
                Page
                <span>
                  <IconButton
                    className={
                      currentRoute === "/pages/booking" ||
                      currentRoute === "/pages/technicians" ||
                      hidden ||
                      currentRoute === "/pages/testimonial"
                        ? "  text-primary  "
                        : " "
                    }
                  >
                    <MoreVertOutlinedIcon fontSize={"small"} />
                  </IconButton>
                </span>
              </div>
              <div
                className={
                  hidden
                    ? " absolute  top-[-246%]  duration-1000 left-[-50%] border bg-white"
                    : " absolute   top-[200%] hidden opacity-0  duration-1000  left-[-50%] border bg-white"
                }
              >
                <ul>
                  <li>
                    <Link
                      className={
                        currentRoute === "/pages/booking"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      href={"/pages/booking"}
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        currentRoute === "/pages/technicians"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      href={"/pages/technicians"}
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Technicians
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        currentRoute === "/pages/testimonial"
                          ? "  bg-primary text-white p-3 px-4 block mt-1  "
                          : "p-3 px-4 block mt-1 hover:bg-slate-300/30 "
                      }
                      href={"/pages/testimonial"}
                      onClick={() => {
                        setHidden(hidden === false ? true : false);
                      }}
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mr-1">
              <Link
                className=" p-1 text-sm flex flex-col-reverse items-center"
                href={"/contact"}
              >
                Contact
                <span>
                  <IconButton
                    className={currentRoute === "/contact" ? "text-primary " : ""}
                  >
                    <EmailIcon fontSize={"small"} />
                  </IconButton>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* End ButtonBar */}
    </>
  );
}
