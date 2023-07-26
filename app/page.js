// import Carousel from "./Components/Carousel";
import dynamic from "next/dynamic";
import bg_1 from "./img/carousel-bg-1.jpg";
import bg_2 from "./img/carousel-bg-2.jpg";
// import AboutC from "./Components/Aboutpage";
import { Suspense } from "react";
import Spinners from "./Components/Spinner";

let Carousel = dynamic(() => import("./Components/Carousel"), { ssr: false });
let  AboutC = dynamic(() => import("./Components/Aboutpage"), { ssr: false });
export default async function Home() {
  await new Promise((r) => {
    setTimeout(() => {
      r();
    }, 900);
  });
  const loading = <div></div> 

  const images = [bg_1, bg_2];
  return (
    <>
      <div className=" pb-10">
        <Carousel images={images} />
        <Suspense fallback={loading}>
          <AboutC />
        </Suspense>
      </div>
    </>
  );
}
