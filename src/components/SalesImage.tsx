import { useEffect, useState } from 'react';
import SaleCard from "./SaleCard.tsx";
import DiscountCard from "./DiscountCard.tsx";

export default function SalesImage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageScale = 1 + scrollPosition * 0.00019; // Adjust the scale factor for a gentler effect

  return (
    <>
      <div>
        <div className="flex flex-wrap flex-grow justify-end z-[-1] h-12 w-full">
          <div
            style={{
              backgroundImage: "url('https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png')",
              backgroundSize: "80% 70%",
              color: "#333",
              transform: `scale(${imageScale})`,
              transition: "transform 0.3s ease-out", // Add a smooth transition
            }}
            className="object-cover my-24 bg-center text-base leading-5 absolute right-auto bottom-auto z-[-1] w-full h-full bg-no-repeat will-change-transform transform-style-preserve-3d"
          ></div>
          <div className="lg:mt-48 md:mt-38 mr-8">
            <SaleCard />
          </div>
        </div>  
      </div> 
      <div> 
          {/*<DiscountCard/>*/}
      </div>
    </>
  );
}
