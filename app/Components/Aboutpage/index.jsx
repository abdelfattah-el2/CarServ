"use client";
import {  motion, useInView } from "framer-motion";
import { useRef } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import Image from "next/image";
import { FaCarAlt } from "react-icons/fa";
import AboutUs from "../../img/about.jpg";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import useCount from "./count";



export default function AboutC() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  let count1 = useCount(1234, isInView4);
  let count2 = useCount(1234, isInView4);
  let count3 = useCount(1234, isInView4);
  let count4 = useCount(1234, isInView4);

  return (
     <>
      <div className=" overflow-hidden container mx-auto  px-8  py-24">
        <motion.div ref={ref} className=" grid  gap-6   sm:grid-cols-auto">
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="  flex  min-w-[300px]  px-5 py-10"
          >
            <span className="mr-3 pt-4  ">
              <VerifiedIcon
                style={{ fontSize: "60px" }}
                className=" text-primary"
              />
            </span>
            <div className="flex flex-col justify-center p-3 pl-4">
              <h1 className="mb-4 font-bold font-Ubuntu  text-2xl">
                Quality Servicing
              </h1>
              <p className="mb-5 text-light">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <Link
                className="  text-slate-800  font-semibold font-Ubuntu"
                href={"/"}
              >
                Read More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className=" flex  bg-gray-200  min-w-[300px]  px-5 py-10"
          >
            <span className="mr-3 pt-4  ">
              <EngineeringIcon
                style={{ fontSize: "60px" }}
                className=" text-primary"
              />
            </span>
            <div className=" flex flex-col justify-center p-3 pl-4">
              <h1 className="mb-4 font-bold font-Ubuntu  text-2xl">
                Expert Workers
              </h1>
              <p className="mb-5 text-light">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <Link
                className="  text-slate-800  font-semibold font-Ubuntu"
                href={"/"}
              >
                Read More
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className=" flex  min-w-[300px]  px-5 py-10"
          >
            <span className="mr-3 pt-4  ">
              <ConstructionRoundedIcon
                style={{ fontSize: "60px" }}
                className=" text-primary"
              />
            </span>
            <div className="flex flex-col justify-center p-3 pl-4">
              <h1 className="mb-4 font-bold font-Ubuntu  text-2xl">
                Modern Equipment
              </h1>
              <p className="mb-5 text-light">
                Diam dolor diam ipsum sit amet diam et eos erat ipsum
              </p>
              <Link
                className="  text-slate-800  font-semibold font-Ubuntu"
                href={"/"}
              >
                Read More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div ref={ref2} className="flex flex-col lg:flex-row px-14 py-3 pb-20 ">
        {/* img About us */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          animate={isInView2 ? { opacity: 1 } : {}}
        >
          <div className=" relative">
            <Image
              className=" max-h-[400px]  w-full pb-10 lg:pb-0 lg:max-h-[100%] h-full max-w-full"
              src={AboutUs}
              alt=""
            />
            <div className=" absolute font-bold text-[#f2f2f2] top-[-5%] right-[-30px]    bg-[#00000014] p-10">
              <h1 className="   text-xl ">
                <span className=" font-bold text-4xl">15 </span>Years
              </h1>
              <h4 className="text-lg">Experience</h4>
            </div>
          </div>
        </motion.div>
        {/* info About us */}
        <div ref={ref3} className=" px-7">
          <div>
            <h6 className=" text-primary uppercase font-bold">
              // About us //
            </h6>
            <h1 className="font-bold  max-w-[700px] font-Ubuntu  text-[1.9rem] lg:text-[2.5rem]">
              <span className="text-primary"> CarServ</span> Is The Best Place
              For Your Auto Care
            </h1>
            <p className="text-[#596277]  max-w-[550px] font-Ubuntu">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>
          <div className=" pb-5 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              transition={{ duration: 1, delay: 0.3 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : {}}
              className="flex p-4 pl-0 lg:pl-4"
            >
              <div className="w-[55px] font-bold font-Ubuntu h-[55px] flex justify-center items-center mr-4 bg-[#F2F2F2]">
                <span>01</span>
              </div>
              <div>
                <h1 className="mb-[5px] font-bold">Professional & Expert</h1>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </motion.div>
            <motion.div
              className="flex p-4  pl-0 lg:pl-4"
              initial={{ opacity: 0, y: 300 }}
              transition={{ duration: 1, delay: 0.5 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            >
              <div className="w-[55px] font-bold font-Ubuntu h-[55px] flex justify-center items-center mr-4 bg-[#F2F2F2]">
                <span>02</span>
              </div>
              <div>
                <h1 className="mb-[8px] font-bold">Quality Servicing Center</h1>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </motion.div>
            <motion.div
              className="flex p-4  pl-0 lg:pl-4"
              initial={{ opacity: 0, y: 300 }}
              transition={{ duration: 1, delay: 0.7 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            >
              <div className="w-[55px] font-Ubuntu font-bold h-[55px] flex justify-center items-center mr-4 bg-[#F2F2F2]">
                <span>03</span>
              </div>
              <div>
                <h1 className="mb-[8px] font-bold">Awards Winning Workers</h1>
                <p>Diam dolor diam ipsum sit amet diam et eos</p>
              </div>
            </motion.div>
          </div>
          <Link
            href={"/"}
            className="lg:ml-4 flex justify-center items-center w-fit bg-primary text-white px-12 py-4"
          >
            <button className=" uppercase">
              Read More <ArrowForwardOutlinedIcon />
            </button>
          </Link>
        </div>
      </div>
      {/* Fect  */}

      <div className="bg-ur my-5 py-5">
        <div ref={ref4} className=" container  mx-auto  px-5 text-center">
          <div className="  flex  flex-col items-center md:flex-row md:flex-auto      text-white">
            <motion.div initial={{ opacity: 0,  }}
              transition={{ duration: 1, }}
              animate={isInView4? { opacity: 1,  } : {}}  className="  px-3  col-span-3 w-1/4">
              <span>
                <CheckRoundedIcon   sx={{ fontSize:"70px" , fontWeight: "bold"}} />
              </span>
              <h1>{count1}</h1> <p>Years Experience</p>
            </motion.div>
            <motion.div initial={{ opacity: 0,  }}
              transition={{ duration: 1,  }}
              animate={isInView4 ? { opacity: 1,  } : {}} className=" px-3 w-1/4">
              <span>
                <EngineeringIcon  sx={{ fontSize:"70px" , fontWeight: "bold"}} />
              </span>
              <h1>{count2}</h1> <p>Expert Technicians</p>
            </motion.div  >
            <motion.div  initial={{ opacity: 0,  }}
              transition={{ duration: 1,  }}
              animate={isInView4 ? { opacity: 1,  } : {}} className="  px-3 w-1/4">
              <span>
                <GroupsIcon  sx={{ fontSize:"70px" , fontWeight: "bold"}} />
              </span>
              <h1>{count3}</h1> <p>Satisfied Clients</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, }}
              transition={{ duration: 1,  }}
              animate={isInView4 ? { opacity: 1,  } : {}} className=" px-3 flex flex-col  items-center  w-1/4">
              <span>
                <FaCarAlt className="  text-[70px]" />
              </span>
              <h1>{count4}</h1> <p>Compleate Projects</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
