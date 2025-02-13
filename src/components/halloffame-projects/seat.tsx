import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import g from "/public/AboutUs/FastPro.webp";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Seat = () => {
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
  function SampleNextArrow(props: {
    className: any;
    style: any;
    onClick: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div>
        <button
          className={className}
          style={{ ...style, display: "block", color: "black" }}
          onClick={onClick}
        >
          <ArrowRight className="stroke-redeclic" />
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
          className={className}
          style={{ ...style, display: "block", color: "black" }}
          onClick={onClick}
        >
          <ArrowLeft className="stroke-redeclic" />
        </button>
      </div>
    );
  }

  const settings = {
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
    <div className="w-[90%] tablet:w-full">
      <div className="space-y-5 ">
        <Slider
          className="ml-10 tablet:ml-0"
          asNavFor={nav2}
          ref={(slider) => {
            if (slider) sliderRef1.current = slider;
          }}
          {...settings}
        >
          {images.map((image, j) => (
            <Image
              className="w-[26rem] h-[26rem] object-contain"
              key={j}
              src={image.g}
              alt="image"
              width={500}
              height={500}
            />
          ))}
        </Slider>
        <Slider
          className="ml-10 tablet:ml-0"
          asNavFor={nav1}
          ref={(slider) => {
            if (slider) sliderRef2.current = slider;
          }}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {images.map((image, j) => (
            <Image
              className="w-5 px-2 h-fit object-cover"
              key={j}
              src={image.g}
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

export default Seat;

const images = [
  { g: "/Halloffame-images/SEAT/2.webp" },
  { g: "/Halloffame-images/SEAT/1.webp" },
  { g: "/Halloffame-images/SEAT/3.webp" },
  { g: "/Halloffame-images/SEAT/4.webp" },
  { g: "/Halloffame-images/SEAT/5.webp" },
  { g: "/Halloffame-images/SEAT/6.webp" },
 
];
