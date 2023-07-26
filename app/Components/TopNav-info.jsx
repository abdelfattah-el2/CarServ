"use client";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function NavInfo() {
  return (
    <div className="flex font-Ubuntu container mx-auto px-4 p-3 justify-between">
      <div className=" justify-center font-normal items-center flex text-sm">
        {/* locations  */}
        <div className=" justify-center items-center text-xs  md:text-sm flex md:mr-3 ">
          <span className=" mr-1 text-primary">
            <LocationOnIcon fontSize={"small"} />
          </span>
          123 Street,New York,USA
        </div>
        {/* time info */}
        <div className=" justify-center items-center text-xs md:text-sm flex ">
          <span className=" mr-1 text-primary">
            <AccessTimeIcon fontSize={"small"} />
          </span>
          Mon - Fri : 09.00 AM - 09.00 PM
        </div>
      </div>
      {/* Contact info and social */}
      <div className="justify-center font-normal items-center flex text-sm">
        <div className="justify-center items-center text-xs md:text-sm flex ">
          <span className="text-primary mr-1">
            <LocalPhoneIcon fontSize={"small"} />
          </span>
          +012 345 6789
        </div>
        <div className="hidden sm:block ml-4">
          <ul className="   flex  ">
            <li className="px-1">
              <Link href={"/"}>
                <IconButton
                  id="icon"
                  aria-label="GO To Facebook"
                  className="text-primary p-2 bg-white rounded-sm shadow-sm"
                >
                  {" "}
                  <FaFacebookF fontSize={"20px"} />{" "}
                </IconButton>
              </Link>
            </li>
            <li className="px-1">
              <Link href={"/"} aria-label="GO To Twitte">
                <IconButton
                  id="icon"
                  className="text-primary p-2 bg-white rounded-sm shadow-sm"
                >
                  <TwitterIcon fontSize={"small"} />
                </IconButton>
              </Link>
            </li>
            <li className="px-1">
              <Link href={"/"} aria-label="GO To LinkedIn">
                <IconButton
                  id="icon"
                  className="text-primary p-2 bg-white rounded-sm shadow-sm"
                >
                  <LinkedInIcon fontSize={"small"} />
                </IconButton>
              </Link>
            </li>
            <li className="px-1">
              <Link href={"/"} aria-label="GO To Instagram">
                <IconButton
                  id="icon"
                  className="text-primary p-2 bg-white rounded-sm shadow-sm"
                >
                  <InstagramIcon fontSize={"small"} />
                </IconButton>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
