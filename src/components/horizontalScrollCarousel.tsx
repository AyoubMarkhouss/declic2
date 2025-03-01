import React, { useState, useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import ViewMore from "./icons/viewMore";
import { TextAnimate } from "./ui/text-animate";
import { useTranslation } from "../context/TranslationContext";

const HorizontalScrollCarousel = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const { t } = useTranslation();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Parallax transforms for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["2.5%", "-54%"]);

  return (
    <div>
      <TextAnimate
        animation="blurInUp"
        by="character"
        className="fontmed justify-center uppercase tablet:justify-start text-4xl laptop:text-7xl w-full bg-redeclic text-white h-24 px-20 flex items-center"
      >
        {t.Horizontalscroll.title}
      </TextAnimate>
      <section
        ref={targetRef}
        className="-my-28 tablet:-my-0 relative h-[100vh] laptop:h-[300vh] z-10"
      >
        <div className="sticky top-0 laptop:top-0 desktop:top-20">
          <div className="absolute top-0 -z-10 h-[calc(100vh_-_50vh)] w-full left-0" />

          <div className="flex h-screen items-center overflow-hidden">
            {/* Desktop: Parallax scroll */}
            <motion.div
              style={{ x }}
              className="hidden tablet:flex gap-20 items-center"
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
            {/* Mobile: Native touch scrolling */}
            <div className="flex tablet:hidden gap-x-5 items-center overflow-x-auto scroll-smooth">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  hoveredCardId={hoveredCardId}
                  onHoverStart={() => setHoveredCardId(card.id)}
                  onHoverEnd={() => setHoveredCardId(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mb-20">
        <Link
          href="/?section=work"
          className="fontmed shadow-lg uppercase z-10 px-4 py-4 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
        >
          {t.Horizontalscroll.viewmorebtn}
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
  desc: WorkCategory;
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
  const isOtherHovered = hoveredCardId !== null && hoveredCardId !== card.id;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();
  return (
    <Link href={card.page}>
      <div
        className="group mx-4 laptop:mx-0 overflow-hidden object-contain relative flex flex-col gap-y-2 h-full bigmobile:w-96 tablet:w-[400px] z-10"
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-[400px] relative laptop:group-hover:border-[10px] laptop:transition-all laptop:duration-300 laptop:transform laptop:group-hover:border-redeclic hover:cursor-pointer shadow-lg overflow-hidden"
        >
          <div className="px-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 laptop:group-hover:flex hidden z-[999999]">
            <ViewMore />
          </div>
          <img
            src={card.url}
            width={500}
            height={500}
            alt="images"
            className={`object-cover h-[400px] w-full transition-all duration-300 transform ${
              isOtherHovered
                ? "brightness-50 scale-100"
                : "brightness-100 group-hover:scale-110"
            }`}
          />
        </motion.div>
        <h1
          className={`fontmed text-3xl transition-colors duration-300 ${
            isOtherHovered ? "text-gray-400" : "text-black"
          }`}
        >
          {card.title}
        </h1>
        <p
          className={`fontmed transition-colors duration-300 -mt-2 ${
            isOtherHovered ? "text-gray-400" : "text-gray-400"
          }`}
        >
          {t.home.workCategories[card.desc]}
        </p>
      </div>
    </Link>
  );
};

type WorkCategory =
  | "entertainment"
  | "automotive"
  | "beverages"
  | "automotiveMaintenance"
  | "deliveryService";

const cards: CardType[] = [
  {
    url: "/AboutUs/CasablancaBeer.jpg",
    title: "Feel the spirit of Morocco",
    desc: "beverages",
    id: 1,
    page: "/portfolio/project/casablancabeer",
  },
  {
    url: "/AboutUs/ClickaDialna.jpg",
    title: "Clicka Dialna",
    desc: "entertainment",
    id: 2,
    page: "/portfolio/project/clickadialna",
  },
  {
    url: "/AboutUs/PorscheFestival.jpg",
    title: "Porsche Festival 2024",
    desc: "automotive",
    id: 3,
    page: "/portfolio/project/porschefestival",
  },
  {
    url: "/AboutUs/SeatAttitude.jpg",
    title: "SEAT Attitude",
    desc: "automotive",
    id: 6,
    page: "/portfolio/project/seat",
  },
  {
    url: "/AboutUs/FastPro.webp",
    title: "Fast Pro",
    desc: "automotiveMaintenance",
    id: 7,
    page: "/portfolio/project/fastpro",
  },
  {
    url: "/Ainifrane/AinIfrane.webp",
    title: "Aïn Ifrane",
    desc: "beverages",
    id: 8,
    page: "/portfolio/project/ainifrane",
  },
];
