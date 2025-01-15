import React, { useState, useRef } from "react";

import { motion, useInView, useTransform, useScroll } from "framer-motion";

import Link from "next/link";
import ViewMore from "./icons/viewMore";
import { TextAnimate } from "./ui/text-animate";

const HorizontalScrollCarousel = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2.5%", "-60%"]);
  const m = useTransform(scrollYProgress, [0, 1], ["0.5%", "-89.5%"]);

  return (
    <div>
      
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="fontmed justify-center tablet:justify-start text-4xl laptop:text-7xl w-full bg-redeclic text-white h-24  px-20 flex  items-center"
      >
        OUR PROJETCS
      </TextAnimate>
      <section ref={targetRef} className="-my-28 tablet:-my-0 relative h-[300vh] z-10">
        <div className="sticky top-0 laptop:top-0 desktop:top-20">
          <div className="absolute top-0  -z-10 h-[calc(100vh_-_50vh)] w-full left-0" />
         
          <div className="flex h-screen items-center overflow-hidden ">
            <motion.div
              style={{ x }}
              className="hidden tablet:flex gap-20 items-center "
            >
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  hoveredCardId={hoveredCardId}
                  onHoverStart={() => setHoveredCardId(card.id)}
                  onHoverEnd={() => setHoveredCardId(null)}
                />
              ))}
            </motion.div>
            <motion.div
              style={{ x: m }}
              className="flex tablet:hidden gap-20 items-center"
            >
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  hoveredCardId={hoveredCardId}
                  onHoverStart={() => setHoveredCardId(card.id)}
                  onHoverEnd={() => setHoveredCardId(null)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mb-20">
        <Link
          href="/portfolio?section=work"
          className="fontmed shadow-lg px-4 py-4 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: string;
  title: string;
  id: number;
  desc: string;
  page: string;
};

const Card = ({
  card,
  hoveredCardId,
  onHoverStart,
  onHoverEnd,
}: {
  card: CardType;
  hoveredCardId: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  // const isHovered = hoveredCardId === card.id;
  const isOtherHovered = hoveredCardId !== null && hoveredCardId !== card.id;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Link href={card.page}>
      <div
        className="group overflow-hidden object-contain relative flex flex-col gap-y-2 h-full bigmobile:w-96 tablet:w-[400px] z-10"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[400px] relative  group-hover:border-[10px] transition-all duration-300 transform group-hover:border-redeclic hover:cursor-pointer shadow-lg overflow-hidden"
        >
          <div className="px-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex hidden z-[999999]">
            <ViewMore />
          </div>
          <img
            src={card.url}
            width={500}
            height={500}
            alt="images"
            className={`object-cover h-[400px] w-full transition-all duration-300 transform ${
              isOtherHovered
                ? "brightness-50 scale-100 "
                : "brightness-100 group-hover:scale-110"
            }`}
          />
        </motion.div>

        <h1
          className={`fontmed  text-4xl transition-colors duration-300 ${
            isOtherHovered ? "text-gray-400" : "text-black"
          }`}
        >
          {card.title}
        </h1>
        <p
          className={`fontmed  transition-colors duration-300 -mt-2 ${
            isOtherHovered ? "text-gray-400" : "text-gray-400"
          }`}
        >
          {card.desc}
        </p>
      </div>
    </Link>
  );
};

const cards: CardType[] = [
  {
    url: "/qnibila.jpg",
    title: "Flag Speciale Original",
    desc: "lorem impsum huba",
    id: 1,
    page: "",
  },
  {
    url: "/gold.jpg",
    title: "Flag Speciale Gold",
    desc: "lorem impsum huba",
    id: 2,
    page: "",
  },
  {
    url: "/casablancabeer.jpg",
    title: "Casablanca Beer",
    desc: "lorem impsum huba",
    id: 3,
    page: "/portfolio/project",
  },
  {
    url: "/stork.jpg",
    title: "Stork",
    desc: "lorem impsum huba",
    id: 6,
    page: "",
  },
  {
    url: "https://framerusercontent.com/images/xrD1XEKUiPxzEfAp3NgFFX5Mbk.png",
    title: "Carlsberg Beer",
    desc: "lorem impsum huba",
    id: 5,
    page: "",
  },

  {
    url: "https://framerusercontent.com/images/63Ou8G3dAZyA7jCePWCbGXWT0.png",
    title: "Vins D'ici",
    desc: "lorem impsum huba",
    id: 7,
    page: "",
  },
  {
    url: "https://framerusercontent.com/images/8Ffi88e202S78L0ljwETS0kBaC4.png",
    title: "Vins Castel",
    desc: "lorem impsum huba",
    id: 8,
    page: "",
  },
];
