import Image from "next/image";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// logos
import ainIfrane from "/public/Clients/Refs-logos/AinIfrane.png";
import casablanca from "/public/Clients/Refs-logos/Casablanca.png";
import alJabr from "/public/Clients/Refs-logos/AlJabr.png";
import anatolia from "/public/Clients/Refs-logos/Anatolia.png";
import audi from "/public/Clients/Refs-logos/Audi.png";
import beachMama from "/public/Clients/Refs-logos/BeachMama.png";
// prods
import AinIfran from "./halloffame-projects/ainIfran";
import AlJabr from "./halloffame-projects/alJabr";
import Anatolia from "./halloffame-projects/anatolia";
import Audi from "./halloffame-projects/audi";
import BeachMama from "./halloffame-projects/beachMama";
import Casablanca from "./halloffame-projects/casablanca";
import Slider from "react-slick";

function HalloffameCarousel() {
  function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const [brand, setBrand] = useState<string>("ainIfran");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
  };
  return (
    <div className="max-w-screen-lg pb-20 mx-auto">
      <div className="slider-container">
        <Slider className="flex justify-between w-full" {...settings}>
          {brandsLink.map((g) => (
            <div
              onClick={() => setBrand(g.brand)}
              className="hover:text-red-500 cursor-pointer"
              key={g.brand}
            >
              <Image src={g.logo} width={500} height={500} alt="logo" />
            </div>
          ))}
        </Slider>
      </div>
      {brand === "ainIfran" && <AinIfran />}
      {brand === "casablanca" && <Casablanca />}
      {brand === "alJabr" && <AlJabr />}
      {brand === "anatolia" && <Anatolia />}
      {brand === "audi" && <Audi />}
      {brand === "beachMama" && <BeachMama />}
    </div>
  );
}

export default HalloffameCarousel;

const brandsLink = [
  { brand: "ainIfran", logo: ainIfrane },
  { brand: "alJabr", logo: alJabr },
  { brand: "anatolia", logo: anatolia },
  { brand: "audi", logo: audi },
  { brand: "beachMama", logo: beachMama },
  { brand: "casablanca", logo: casablanca },
];
