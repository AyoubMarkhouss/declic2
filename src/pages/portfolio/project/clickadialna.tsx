import React, { useRef, useState } from "react";
import Image from "next/image";
import Header from "~/components/header-burger";
import Footer from "~/components/footer";
import Iphone15Pro from "~/components/ui/iphone-15-pro";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowCircleDown, FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { cn } from "~/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/carousel";
import { TextAnimate } from "~/components/ui/text-animate";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Clickadialna = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <div className="pt-20  overflow-x-hidden">
          {/* <TextAnimate
            animation="blurInUp"
            by="character"
            className="fontmed laptop:text-7xl bg-redeclic fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
          >
            Casablanca Beer
          </TextAnimate> */}
          <div className="w-screen relative h-[calc(100vh_-_80px)] flex justify-center items-center">
            <Image
              alt="d"
              src="/Clickadialna/Slider.jpg"
              height={2000}
              width={2000}
              className="w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Clicka Dialna
          </h1>
          <p className=" tablet:text-lg text-justify">
            An innovative brand content concept, aligned with the communication
            pillars of the Flag Spéciale brand, creating an engagement space
            with our community beyond our Meta networks. This concept addresses
            the challenge of promoting a beer brand in Morocco while respecting
            the constraints related to collaborations with influencers and the
            limitations of direct product visibility on platforms like YouTube
            and TikTok.
          </p>

          <div className="grid grid-cols-3 pt-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-2 flex-col fontmed items-center justify-center border-r-[1px] border-gray-500"
            >
              <p className="text-lg">Category</p>
              <p className="text-md tablet:text-lg text-redeclic  text-center">
                Entertainment
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-2 flex-col fontmed items-center justify-center "
            >
              <p className="text-lg">Client</p>
              <p className="text-md tablet:text-lg text-redeclic  text-center">
                Société des Boissons du Maroc
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-2 flex-col fontmed items-center justify-center border-l-[1px] border-gray-500"
            >
              <p className="text-lg">Brand</p>
              <p className="text-md tablet:text-lg text-redeclic text-center">
                Flag Spéciale Original
              </p>
            </motion.div>
          </div>
        </div>
        {/* <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl bg-redeclic text-white fontmed justify-center tablet:justify-start text-4xl w-full  h-24  px-20 flex  items-center"
        >
          Master Visual
        </TextAnimate> */}

        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full laptop:max-w-6xl desktop:max-w-7xl my-10 pl-3 tablet:pl-0 mx-auto"
          setApi={setApi}
        >
          <CarouselContent className="">
            {affiches.map((it, index) => (
              <CarouselItem key={index} className="laptop:basis-1/3">
                <div className="p-1">
                  <Image
                    src={it.image}
                    width={5020}
                    height={5020}
                    alt="image"
                    className="w-96 "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden tablet:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          <div className=" laptop:hidden py-2 text-center text-sm text-muted-foreground">
            {current} / {count}
          </div>
        </Carousel> */}
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          Behind The Scenes
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 gap-x-5">
            <div className="flex flex-col gap-y-5">
              <p className=" text-justify laptop:text-start laptop:text-lg desktop:text-xl">
                Dive into the behind-the-scenes of CLICKA DIALNA, where laughter
                and surprises were the main attraction! Discover exclusive
                moments and unseen footage from this unique concept, where our
                influencer guests joined in on the fun with jokes.
              </p>
            </div>
            {/* <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px] desktop:h-[550px]"
                iframevid="https://www.youtube.com/embed/n1bdY9z7WpY?si=J9Mm59Q2bNR8l7rE?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
              />
             
              <iframe
                className="laptop:hidden  object-cover h-screen w-full overflow-hidden"
                src="https://www.youtube.com/embed/n1bdY9z7WpY?si=uk63L4XKPj6goSym?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div> */}

            <div className="">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full laptop:max-w-2xl desktop:max-w-5xl"
                setApi={setApi}
              >
                <CarouselContent>
                  {staticimg.map((jj, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          alt="static"
                          src={jj.img}
                          width={1000}
                          height={1000}
                          className="w-full h-64 laptop:h-[390px] desktop:h-[600px] object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden tablet:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
                <div className=" py-2 text-center text-sm text-muted-foreground">
                  {current} / {count}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          Episodes
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 py-5 laptop:py-0 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify laptop:text-start gap-y-10">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:max-w-full">
                "Bla Tferniss" is a Moroccan version of the global concept "Try
                Not to Laugh," with an added touch of football—because why not?
                It pits guests against each other in a laid-back and humorous
                atmosphere that reflects our brand, without making any reference
                to our product. <br />
                Between discoveries, discussions, and fun activities, each
                moment captured the true spirit of the festival. Thank you to
                everyone who helped make this event a success. See you soon for
                more adventures!
              </p>
              <Link
                href="https://www.youtube.com/@LClickaDialna"
                className="fontmed flex justify-center items-center gap-x-3 shadow-lg w-full tablet:w-fit px-4 py-4 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
              >
                MORE EPISODES <FaPlay />
              </Link>
            </div>
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/VHtXV1KXWdU?si=XRxg5kmuI7hy5r11?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Clickadialna;

// const affiches = [
//   {
//     id: 1,
//     content: "Item 1",
//     image: "/Porschefestival/master-visual/OffRoad-1.webp",
//   },
//   {
//     id: 2,
//     content: "Item 2",
//     image: "/Porschefestival/master-visual/OffRoad-2.webp",
//   },
//   {
//     id: 3,
//     content: "Item 3",
//     image: "/Porschefestival/master-visual/porsche.webp",
//   },
//   {
//     id: 4,
//     content: "Item 1",
//     image: "/Porschefestival/master-visual/OffRoad-1.webp",
//   },
//   {
//     id: 5,
//     content: "Item 2",
//     image: "/Porschefestival/master-visual/OffRoad-2.webp",
//   },
//   {
//     id: 6,
//     content: "Item 3",
//     image: "/Porschefestival/master-visual/porsche.webp",
//   },
// ];

const staticimg = [
  { img: "/Clickadialna/shooting/BTS1.webp" },
  { img: "/Clickadialna/shooting/BTS2.webp" },
  { img: "/Clickadialna/shooting/BTS3.webp" },
  { img: "/Clickadialna/shooting/BTS4.webp" },
  { img: "/Clickadialna/shooting/BTS5.webp" },
  { img: "/Clickadialna/shooting/BTS6.webp" },
  { img: "/Clickadialna/shooting/BTS7.webp" },
  { img: "/Clickadialna/shooting/BTS8.webp" },
];
