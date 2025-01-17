import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
function HalloffameCarousel() {
  const [brand, setBrand] = useState<string>("brand1");

  return (
    <div className="max-w-screen-lg py-28 mx-auto">
      <div className="flex justify-between w-full">
        {brands.map((g) => (
          <p
            onClick={() => setBrand(g)}
            className="hover:text-red-500 cursor-pointer"
            key={g}
          >
            {g}
          </p>
        ))}
      </div>
      {brand === "brand1" && <Sliders sliderClicked={brand} />}
      {brand === "brand2" && <Sliders sliderClicked={brand} />}
      {brand === "brand3" && <Sliders sliderClicked={brand} />}
      {brand === "brand4" && <Sliders sliderClicked={brand} />}
      {brand === "brand5" && <Sliders sliderClicked={brand} />}
      {brand === "brand6" && <Sliders sliderClicked={brand} />}
    </div>
  );
}

export default HalloffameCarousel;

const Sliders = ({ sliderClicked }: { sliderClicked: string }) => {
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
      <p>you clicked on: {sliderClicked}</p>
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
  );
};

const images = [
  "/AboutUs/CasablancaBeer.jpg",
  "/AboutUs/CasablancaBeer.jpg",
  "/AboutUs/CasablancaBeer.jpg",
  "/AboutUs/CasablancaBeer.jpg",
  "/AboutUs/CasablancaBeer.jpg",
  "/AboutUs/CasablancaBeer.jpg",
];

const brands = ["brand1", "brand2", "brand3", "brand4"];
