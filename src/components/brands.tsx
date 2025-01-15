import Image from "next/image";
import React from "react";
import audi from "~/../public/Graypngs/audi.png";
import seat from "~/../public/Graypngs/seat.png";
import marjane from "~/../public/Graypngs/marjane.png";
import g4s from "~/../public/Graypngs/g4s.png";
import porshe from "~/../public/Graypngs/porshe.png";
import marina from "~/../public/Graypngs/marina.png";
import aljabr from "~/../public/Graypngs/aljabr.png";
import fastpro from "~/../public/Graypngs/fastpro.png";
import yassamine from "~/../public/Graypngs/yassamine.png";
import motul from "~/../public/Graypngs/motul.png";
import tachfine from "~/../public/Graypngs/tachfine.png";
import bently from "~/../public/Graypngs/bently.png";



const Brands = () => {
 

  return (
    <div className="para px-20 pt-32 ">
      <div className="items-center relative">
        <p style={{ fontWeight: 700 }} className="text-9xl text-redeclic pb-5">
          OUR <br /> CLIENTS
        </p>
        
      </div>
      <div className="grid grid-cols-4 gap-y-12 place-items-center border-t-2 border-black  pt-10">
        {images.map((b, k) => (
          <Image
            className="object-cover h-16 w-fit "
            key={k}
            src={b}
            alt="images"
            width={800}
            height={800}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;

const images = [
  audi,
  seat,
  marjane,
  g4s,
  porshe,
  marina,
  aljabr,
  fastpro,
  yassamine,
  motul,
  tachfine,
  bently,
  
];
