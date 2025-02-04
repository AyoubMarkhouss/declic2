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

const Casablancabeer = () => {
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
              src="/Casablancabeer/Slider-min.webp"
              height={2000}
              width={2000}
              className="hidden laptop:block w-screen h-full object-cover "
            />
            <Image
              alt="d"
              src="/Casablancabeer/Slider_casa_mobile.webp"
              height={2000}
              width={2000}
              className="laptop:hidden w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Feel The Spirit of Morocco
          </h1>
          <p className=" tablet:text-lg text-justify">
            {t.project.casabeer.description}
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
                {t.project.categories.beverages}
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
                Casablanca Beer
              </p>
            </motion.div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl bg-redeclic text-white fontmed justify-center tablet:justify-start text-4xl w-full  h-24  px-20 flex  items-center"
        >
          Master Visual
        </TextAnimate>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl my-10 pl-3 tablet:pl-0 mx-auto"
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
        </Carousel>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          {t.project.casabeer.limitededition.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify justify-center gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:w-full">
                {t.project.casabeer.limitededition.description}
              </p>
            </div>
            <div className=" laptop:col-span-1">
              <Image
                alt=""
                src="/Casablancabeer/Casablanca-limitededition.webp"
                width="2000"
                height="2000"
              />
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          {t.project.casabeer.anthem.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify justify-center gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:w-full">
                {t.project.casabeer.anthem.description}
              </p>
            </div>
            <div className=" laptop:col-span-1">
              <iframe
                src="https://open.spotify.com/embed/album/5gwzIvlKdciryiRCzcOWoy?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          Social Media
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-5">
            <div className="flex flex-col text-justify  gap-y-5">
              <p className="laptop:text-lg desktop:text-xl">
                {t.project.casabeer.socialmedia}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px] desktop:h-[550px]"
                iframevid="https://www.youtube.com/embed/n1bdY9z7WpY?si=J9Mm59Q2bNR8l7rE?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
              />
              {/* <iframe
                className="laptop:hidden object-cover w-full overflow-hidden "
                src="https://www.youtube.com/embed/_5EVk40zITs?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
                autoPlay
                loop
                muted
                playsInline
              /> */}
              <iframe
                className="laptop:hidden  object-cover h-screen w-full overflow-hidden"
                src="https://www.youtube.com/embed/n1bdY9z7WpY?si=uk63L4XKPj6goSym?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex justify-center items-center">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
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
                          className="w-full"
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
          {t.project.casabeer.aftermovie.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify justify-center gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:w-full">
                {t.project.casabeer.aftermovie.description}
              </p>
            </div>
            <div className=" laptop:col-span-1">
              <iframe
                className=" object-cover h-[300px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/PxgHWFfXnFc?si=DgMSvOoacOO5nvJe?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
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

export default Casablancabeer;

const affiches = [
  { id: 1, content: "Item 1", image: "/Casablancabeer/master-visual/1.webp" },
  { id: 2, content: "Item 2", image: "/Casablancabeer/master-visual/2.webp" },
  // { id: 3, content: "Item 3", image: "/Casablancabeer/master-visual/3.webp" },
  { id: 4, content: "Item 4", image: "/Casablancabeer/master-visual/4.webp" },
  { id: 5, content: "Item 5", image: "/Casablancabeer/master-visual/5.webp" },
  { id: 6, content: "Item 6", image: "/Casablancabeer/master-visual/6.webp" },
  // { id: 6, content: "Item 6", image: "/Casablancabeer/master-visual/Principal.jpg" },
];

const staticimg = [
  { img: "/Casablancabeer/static-posts/CASA_PE_AOUT_freshness-min.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_AOUT_Grab-min.jpg" },
  {
    img: "/Casablancabeer/static-posts/CASA_PE_AOUT_vibrant freshness-min.jpg",
  },
  { img: "/Casablancabeer/static-posts/CASA_PE_JUIN_berrad-min.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_SEP_Cheers-min.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_SEP_Savor-min.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_1-min.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_2-min.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_3-min.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Bilzzart_2-min.jpg" },
  {
    img: "/Casablancabeer/static-posts/Casablanca_Post_SKU Bottle_Citron-min.jpg",
  },
  {
    img: "/Casablancabeer/static-posts/Casablanca_Post_SKU Bottle_Citron2-min.jpg",
  },
  { img: "/Casablancabeer/static-posts/CasaXSecretEvent_Giveaway2-min.jpg" },
  { img: "/Casablancabeer/static-posts/CasaXTime_Giveaway-min.jpg" },
];
