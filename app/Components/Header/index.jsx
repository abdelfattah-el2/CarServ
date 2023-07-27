import Link from "next/link";

export default function HeaderPage({ title, namePage, img = true }) {
  return (
    // if img true == img bg-headr-1  if false === img bg-headr2
    <div className={img ? " bg-headr-1" : " bg-headr2"}>
      <div className="p-12 bg-[#000000b3] text-center ">
        <div className=" container mx-auto px-4">
          <h1 className=" mb-4 text-white text-[2.5rem] sm:text-[4rem] font-bold">{title}</h1>
          <nav className=" text-white uppercase  mb-3 font-Ubuntu font-normal">
            <Link className=" text-primary mr-2" href={"/"}>
              Home
            </Link>
            <span>/</span>
            <h1 className=" inline-block  ml-2" >
              {namePage}
            </h1>
          </nav>
        </div>
      </div>
    </div>
  );
}
