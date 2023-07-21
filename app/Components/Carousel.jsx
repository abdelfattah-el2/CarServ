"use client";
import "../globals.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import corsl_1 from "../img/carousel-1.png";
import corsl_2 from "../img/carousel-2.png";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import React, { useState } from "react";
import Link from "next/link";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className={
          " relative  flex items-center duration-1000 delay-150  justify-center"
        }
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        <div className="ovrelay absolute"></div>
        <button onClick={prevSlide} className={"arrowLeft"}>
          &#8249;
        </button>

        <Image
          alt=""
          src={images[activeIndex]}
          className=" duration-1000  delay-100"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" absolute z-[2000]  "
        >
          <div className="  flex justify-between  items-center container mx-auto px-20 text-white ">
            {activeIndex === 0 ? (
              <>
                <motion.div
                  className=" text-center lg:text-start p-2"
                  initial={{ opacity: 0, y: -90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    ease: "linear",
                    duration: 0.6,
                    y: { duration: 0.8 },
                  }}
                >
                  <div className=" min-w-fit ">
                    <p className="  text-base lg:p-2">// CAR SERVICING //</p>
                    <h1 className=" mt-2 sm:mt-5 lg:text-7xl md:text-6xl sm:text-5xl  text-2xl lg:mt-5 font-bold ">
                      Qualified Car Repair Service Center
                    </h1>
                  </div>
                  <Link href={"/"}>
                    {" "}
                    <button className="hover:bg-primary/80 mt-3 sm:mt-6 lg:mt-10 uppercase font-medium font-Ubuntu sm:px-5 sm:py-4 bg-primary lg:px-12 lg:py-5 px-3 py-2">
                      {" "}
                      learn More <ArrowForwardOutlinedIcon />
                    </button>
                  </Link>
                </motion.div>
                {/* Img */}
                <motion.div
                  className=" hidden lg:block  px-1  "
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    ease: "linear",
                    duration: 0.3,
                    scale: { duration: 0.7 },
                  }}
                >
                  {" "}
                  <Image className=" max-w-full h-auto" src={corsl_1} />
                </motion.div>
              </>
            ) : (
              <>
                {" "} <div className="   flex justify-between  items-center">
                <motion.div
                  className=" text-center lg:text-start p-2"
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    ease: "linear",
                    duration: 0.6,
                    y: { duration: 0.7 },
                  }}
                >
                  <div className=" min-w-fit ">
                    <p className="  text-base lg:p-2">// CAR SERVICING //</p>
                    <h1 className=" mt-2 sm:mt-5 lg:text-7xl md:text-6xl sm:text-5xl  text-2xl lg:mt-5 font-bold ">
                    Qualified Car Wash Service Center
                    </h1>
                  </div>
                  <Link href={"/"}>
                    {" "}
                    <button className="hover:bg-primary/80 mt-3 sm:mt-6 lg:mt-10 uppercase font-medium font-Ubuntu sm:px-5 sm:py-4 bg-primary lg:px-12 lg:py-5 px-3 py-2">
                      {" "}
                      learn More <ArrowForwardOutlinedIcon />
                    </button>
                  </Link>
                </motion.div>
                {/* Img */}
                <motion.div
                  className=" hidden lg:block  px-1  "
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.2,
                    ease: "linear",
                    duration: 0.3,
                    scale: { duration: 0.7 },
                  }}
                >
                  {" "}
                  <Image className=" max-w-full h-auto" src={corsl_2} />
                </motion.div>
            </div>
              </>
            )}
          </div>
        </motion.div>
        <button onClick={nextSlide} className={"arrowRight"}>
          &#8250;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
