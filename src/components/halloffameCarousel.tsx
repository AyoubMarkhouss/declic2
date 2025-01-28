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
import { ArrowLeft, ArrowRight } from "lucide-react";

function HalloffameCarousel() {
  function SampleNextArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div>
        <button
          className="absolute bottom-14 -right-10"
          style={{ ...style, display: "block", color: "black" }}
          onClick={onClick}
        >
          <ArrowRight />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div>
        <button
          className="absolute bottom-14 -left-10"
          style={{ ...style, display: "block", color: "black" }}
          onClick={onClick}
        >
          <ArrowLeft />
        </button>
      </div>
    );
  }
  const [brand, setBrand] = useState<string>("ainIfran");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };
  return (
    <div className="max-w-screen-lg mx-auto mb-20">
      <div className="slider-container mb-10 ">
        <Slider className="flex justify-between w-full " {...settings}>
          {brandsLink.map((g) => (
            <div
              onClick={() => setBrand(g.brand)}
              className="hover:text-red-500 cursor-pointer w-32 h-32 flex justify-center items-center"
              key={g.brand}
            >
              <Image
                src={g.logo}
                width={500}
                height={500}
                alt="logo"
                className="w-32 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
      {brand === "audi" && <Audi />}
      {brand === "ainIfran" && <AinIfran />}
      {brand === "casablanca" && <Casablanca />}
      {brand === "alJabr" && <AlJabr />}
      {brand === "anatolia" && <Anatolia />}

      {brand === "beachMama" && <BeachMama />}
    </div>
  );
}

export default HalloffameCarousel;

const brandsLink = [
  { brand: "audi", logo: audi },
  { brand: "ainIfran", logo: ainIfrane },
  { brand: "alJabr", logo: alJabr },
  { brand: "anatolia", logo: anatolia },

  { brand: "beachMama", logo: beachMama },
  { brand: "casablanca", logo: casablanca },
];
