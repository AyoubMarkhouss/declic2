import React, { useRef, useState } from "react";
import Image from "next/image";
import Header from "~/components/header-burger";
import Footer from "~/components/footer";
import Iphone15Pro from "~/components/ui/iphone-15-pro";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowCircleDown, FaStar } from "react-icons/fa";
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
import { useTranslation } from "~/context/TranslationContext";

const Fastpro = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
const { t } = useTranslation();
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
              src="/Fastpro/Slider_laptop.webp"
              height={2000}
              width={2000}
              className="hidden tablet:block w-screen h-full object-cover "
            />
            <Image
              alt="d"
              src="/Fastpro/Slider_mobile.webp"
              height={2000}
              width={2000}
              className="block tablet:hidden w-screen h-full object-cover "
            />

            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Fast Pro
          </h1>
          <p className=" tablet:text-lg text-justify">
            {t.project.fastpro.description}
          </p>

          <div className="grid grid-cols-3 pt-10">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex gap-2 flex-col fontmed items-center justify-center border-r-[1px] border-gray-500"
            >
              <p className="text-lg">{t.project.ccb.category}</p>
              <p className="text-md tablet:text-lg text-redeclic  text-center">
                {t.project.categories.automotiveMaintenance}
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
                Foramag
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
                Fast pro
              </p>
            </motion.div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          {t.project.fastpro.logo.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col  gap-y-5 ">
          <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:-my-14 desktop:-my-28 laptop:gap-x-20 desktop:gap-x-20 py-5">
            <div className="flex flex-col justify-center">
              <p className=" text-justify laptop:text-lg desktop:text-xl">
                {t.project.fastpro.logo.description}
              </p>
            </div>

            <div className="">
              <Image
                alt="fastpro-logo"
                src="/Clients/Refs-logos/FastPro.png"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          {t.project.fastpro.campaign.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col  gap-y-5 ">
          <div className="grid grid-cols-1 laptop:grid-cols-2  laptop:gap-x-20 laptop:py-10 desktop:gap-x-20 py-5">
            <div className="flex flex-col justify-center">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                {t.project.fastpro.campaign.description}
              </p>
            </div>

            <div className=" py-5">
              <Image
                alt="fastpro-campaign"
                src="/Fastpro/Campain/FastPro_compain.webp"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          {t.project.fastpro.centers.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:gap-x-20 desktop:gap-x-20 gap-y-5">
            <div className="flex flex-col justify-center gap-y-5">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                {t.project.fastpro.centers.description}
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

            <div className="flex justify-center items-center w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full laptop:max-w-2xl desktop:max-w-5xl"
                setApi={setApi}
              >
                <CarouselContent>
                  {centers.map((jj, index) => (
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
        {/* <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          The Aftermovie
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 py-5 laptop:py-0 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify justify-center laptop:text-start gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:max-w-full">
                A day full of experiences and sharing. Participants had the
                chance to discover and enjoy various workshops, indulge in tasty
                moments at the food court, and explore a curated display of the
                latest models and classic cars.Through discoveries, discussions,
                and activities, each space allowed everyone to fully experience
                the spirit of the festival. Thank you to everyone who helped
                make this event a success. See you soon for more adventures!
              </p>
            </div>
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/--8eCy6QWWs?si=oNjb0EtMhIJ0ytZM?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Fastpro;

const affiches = [
  {
    id: 1,
    content: "Item 1",
    image: "/Porschefestival/master-visual/OffRoad-1.webp",
  },
  {
    id: 2,
    content: "Item 2",
    image: "/Porschefestival/master-visual/OffRoad-2.webp",
  },
  {
    id: 3,
    content: "Item 3",
    image: "/Porschefestival/master-visual/porsche.webp",
  },
  {
    id: 4,
    content: "Item 1",
    image: "/Porschefestival/master-visual/OffRoad-1.webp",
  },
  {
    id: 5,
    content: "Item 2",
    image: "/Porschefestival/master-visual/OffRoad-2.webp",
  },
  {
    id: 6,
    content: "Item 3",
    image: "/Porschefestival/master-visual/porsche.webp",
  },
];

const centers = [
  { img: "/Fastpro/Centers/fp1.webp" },
  { img: "/Fastpro/Centers/fp2.webp" },
  { img: "/Fastpro/Centers/fp3.webp" },
  { img: "/Fastpro/Centers/fp4.webp" },
  { img: "/Fastpro/Centers/fp5.webp" },
  { img: "/Fastpro/Centers/fp6.webp" },
  { img: "/Fastpro/Centers/fp7.webp" },
  { img: "/Fastpro/Centers/fp8.webp" },
  { img: "/Fastpro/Centers/fp9.webp" },
  { img: "/Fastpro/Centers/fp10.webp" },
  { img: "/Fastpro/Centers/fp11.webp" },
  
];
