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
import seat from "/public/Clients/Refs-logos/SEAT.png";
import midas from "/public/Clients/Refs-logos/Midas.png";
import renault from "/public/Clients/Refs-logos/Renault.png";
import dacia from "/public/Clients/Refs-logos/Dacia.png";
import fso from "/public/Clients/Refs-logos/FSO.png";
import fsg from "/public/Clients/Refs-logos/FSG.png";
import casabeer from "/public/Clients/Refs-logos/Casablanca.png";
import stork from "/public/Clients/Refs-logos/Stork.png";
import dml from "/public/Clients/Refs-logos/DML.png";
// prods
import AinIfran from "./halloffame-projects/seat";
import AlJabr from "./halloffame-projects/renault";
import Anatolia from "./halloffame-projects/dacia";
import Audi from "./halloffame-projects/audi";

import Casablanca from "./halloffame-projects/midas";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Seat from "./halloffame-projects/seat";
import Midas from "./halloffame-projects/midas";
import Renault from "./halloffame-projects/renault";
import Dacia from "./halloffame-projects/dacia";
import Fso from "./halloffame-projects/fso";
import Fsg from "./halloffame-projects/fsg";
import Casabeer from "./halloffame-projects/casabeer";
import Dml from "./halloffame-projects/dml";
import Stork from "./halloffame-projects/stork";

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
          <ArrowRight className="hidden lg:block" />
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
          <ArrowLeft className="hidden lg:block" />
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
    <div className="w-screen max-w-screen-lg mx-auto mb-20">
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

      {brand === "seat" && <Seat />}
      {brand === "audi" && <Audi />}
      {brand === "midas" && <Midas />}
      {brand === "renault" && <Renault />}
      {brand === "dacia" && <Dacia />}
      {brand === "fso" && <Fso />}
      {brand === "fsg" && <Fsg />}
      {brand === "casabeer" && <Casabeer />}
      {brand === "stork" && <Stork />}
      {brand === "dml" && <Dml />}
    </div>
  );
}

export default HalloffameCarousel;

const brandsLink = [
  { brand: "seat", logo: seat },
  { brand: "audi", logo: audi },
  { brand: "midas", logo: midas },
  { brand: "renault", logo: renault },
  { brand: "dacia", logo: dacia },
  { brand: "fso", logo: fso },
  { brand: "fsg", logo: fsg },
  { brand: "casabeer", logo: casabeer },
  { brand: "stork", logo: stork },
  { brand: "dml", logo: dml },
];
