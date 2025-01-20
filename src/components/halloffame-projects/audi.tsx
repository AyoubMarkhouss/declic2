import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import g from "/public/AboutUs/FastPro.webp";
const Audi = () => {
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);
  return (
    <div>
      <div className="space-y-5">
        <Slider
          asNavFor={nav2}
          ref={(slider) => {
            if (slider) sliderRef1.current = slider;
          }}
        >
          {images.map((g, j) => (
            <Image
              className="w-96 h-96 object-contain"
              key={j}
              src={g}
              alt="image"
              width={500}
              height={500}
            />
          ))}
        </Slider>
        <Slider
          className="space-x-3"
          asNavFor={nav1}
          ref={(slider) => {
            if (slider) sliderRef2.current = slider;
          }}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {images.map((g, j) => (
            <Image
              className="w-5 h-fit px-3 object-cover"
              key={j}
              src={g}
              alt="image"
              width={500}
              height={500}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Audi;

const images = [g, g, g, g, g];
