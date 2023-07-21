import Carousel from "./Components/Carousel";
import bg_1 from "./img/carousel-bg-1.jpg" 
import bg_2 from "./img/carousel-bg-2.jpg"

export default function Home() {
  const images = [
   bg_1 ,
   bg_2
 
  ];
  return (<>
    <div className="">
    <Carousel images={images} />
      
      
    </div>
    </>
  );
}
