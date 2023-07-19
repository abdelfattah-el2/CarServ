import Link from "next/link";
import { FaCarAlt } from "react-icons/fa";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../globals.css"
export default function NavBar() {
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
          <li className="uppercase ml-2  p-5 flex items-center hover:text-primary ">
            <Link  href={""}>Home</Link>
          </li>
          <li className="hover:text-primary uppercase ml-2 p-5 flex items-center">
            <Link href={""}>About</Link>
          </li>
          <li className="uppercase ml-2 p-5 flex items-center hover:text-primary">
            <Link href={""}>Service</Link>
          </li>
          <li className="uppercase ml-2 p-5 flex items-center hover:text-primary">
            <Link href={""}>Pages <span> <KeyboardArrowDownIcon/></span></Link>
          </li>
          <li className="uppercase  p-5 ml-2 flex items-center hover:text-primary">
            <Link href={""}>Contact</Link>
          </li>
         <div className=" flex items-center  text-lg uppercase p-5 text-white bg-primary"> <Link href={"/"}>Get A Quote <span><ArrowForwardIosIcon /></span></Link></div>
        </ul>
      </div>
    </div>
  );
}
