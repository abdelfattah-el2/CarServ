"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeaderPage({ title, namePage, img = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    // if img true == img bg-headr-1  if false === img bg-headr2
    <div className={img ? " bg-headr-1" : " bg-headr2"}>
      <div ref={ref} className="p-12 bg-[#000000b3] text-center ">
        <div className=" container mx-auto px-4">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className=" mb-4 text-white text-[2.5rem] sm:text-[4rem] font-bold"
          >
            {title}
          </motion.h1>
          <nav className=" text-white uppercase  mb-3 font-Ubuntu font-normal">
            <Link className=" text-primary mr-2" href={"/"}>
              Home
            </Link>
            <span>/</span>
            <h1 className=" inline-block  ml-2">{namePage}</h1>
          </nav>
        </div>
      </div>
    </div>
  );
}
