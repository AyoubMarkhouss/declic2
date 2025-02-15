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

const Seat = () => {
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
              src="/Seat/Slider.jpg"
              height={2000}
              width={2000}
              className=" hidden laptop:block w-screen h-full object-cover "
            />
            <Image
              alt="d"
              src="/Seat/Slider_seat_mobile.webp"
              height={2000}
              width={2000}
              className="laptop:hidden w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            SEAT Attitude
          </h1>
          <p className=" tablet:text-lg text-justify">
            {t.project.seat.description}
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
                {t.project.categories.automotive}
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
                Centrale Automobile Chérifienne
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
                SEAT
              </p>
            </motion.div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          Films Ads
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-14 laptop:gap-y-5 py-10 mb-10">
          <div className="laptop:pb-5">
            <p>{t.project.seat.filmad}</p>
          </div>
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-14 laptop:gap-y-5 laptop:gap-x-5">
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/Hya98sThWD0?si=d_aJhu-qXaV4WW5N?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X ReqTeq
              </TextAnimate>
            </div>
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/NWt0fSnGzxw?si=fORSo9BAXOsOKXaG?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X Othmane Choufani
              </TextAnimate>
            </div>

            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/k0BX3md11No?si=kpPlS7rM395JB-M6?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X ΛĪDΛИƇƐ
              </TextAnimate>
            </div>
          </div>
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-14 laptop:gap-y-5 laptop:gap-x-5">
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/ppHjAWycwoE?si=HTnaCM_wIhWp9tRT?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X Sikart
              </TextAnimate>
            </div>
            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/1c-YkAIKVrY?si=2gdppwT_moqMqnrr?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X Aezaddy
              </TextAnimate>
            </div>

            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/uKrrRWsEmgQ?si=s12sfw8GdBVPGFAM?controls=0&modestbranding=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <TextAnimate
                animation="blurInUp"
                by="character"
                className="text-lg font-semibold text-center py-2 text-white bg-redeclic"
              >
                SEAT X Sarah Morbi
              </TextAnimate>
            </div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          OOH Video
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-10 gap-x-10">
            <div className="col-span-1 laptop:col-span-2">
              <p className="text-justify ">{t.project.seat.ooh}</p>
            </div>

            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/-hlGPjv3OoE?si=Wx2wt7dYbPt8Xwh5?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className=" laptop:col-span-1 h-52 laptop:h-fit">
              <iframe
                className=" object-cover h-full laptop:h-[327px] desktop:h-[500px] w-full overflow-hidden"
                src="https://www.youtube.com/embed/GOxkhr-Ke34?si=saRCtkYtC_T4HL0z?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {/* <TextAnimate
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
          {t.project.seat.print.title}
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-5 gap-x-10">
            <div className="col-span-1 flex items-center ">
              <p className="text-justify ">
                {t.project.seat.print.description}
              </p>
            </div>

            <div className=" laptop:col-span-1 h-fit laptop:h-fit">
              <Image
                alt="hh"
                src="/Seat/master-visuals/3.webp"
                width={2000}
                height={2000}
              />
            </div>
            <div className=" laptop:col-span-1 h-fit laptop:h-fit">
              <Image
                alt="hh"
                src="/Seat/master-visuals/1.webp"
                width={2000}
                height={2000}
              />
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
            <div className="flex flex-col justify-center gap-y-5">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                {t.project.seat.socialmedia}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px] desktop:h-[550px]"
                iframevid="https://www.youtube.com/embed/Jm-tqD731KE?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=Jm-tqD731KE"
              />

              <iframe
                className="laptop:hidden  object-cover h-screen w-full overflow-hidden"
                src="https://www.youtube.com/embed/Jm-tqD731KE?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=Jm-tqD731KE"
                title="Dailymotion video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

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
                  {staticimg.map((jj, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          alt="static"
                          src={jj.img}
                          width={1000}
                          height={1000}
                          className="w-full h-fit laptop:h-[390px] desktop:h-[600px] object-contain"
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
          Activations
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 laptop:gap-x-20 ">
            <div className="flex flex-col justify-center gap-y-5">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                {t.project.seat.activation.description}
              </p>
            </div>
            {/* <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px] desktop:h-[550px]"
                iframevid="?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
              />

              <iframe
                className="laptop:hidden  object-cover h-screen w-full overflow-hidden"
                src="?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1&playlist=_5EVk40zITs"
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
                className="w-full laptop:max-w-xl desktop:max-w-5xl"
                setApi={setApi}
              >
                <CarouselContent>
                  {activation.map((jj, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          alt="activation"
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
            <div className="flex flex-col text-justify laptop:text-start gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:max-w-full">
                A day full of experiences and sharing. Participants had the
                chance to discover and enjoy various workshops, indulge in tasty
                moments at the food court, and explore a curated display of the
                latest models and classic cars. <br /> <br /> Through
                discoveries, discussions, and activities, each space allowed
                everyone to fully experience the spirit of the festival. Thank
                you to everyone who helped make this event a success. See you
                soon for more adventures!
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

export default Seat;

const affiches = [
  {
    id: 1,
    content: "Item 1",
    image: "/Seat/master-visuals/1.webp",
  },
  {
    id: 2,
    content: "Item 2",
    image: "/Seat/master-visuals/2.webp",
  },
  {
    id: 3,
    content: "Item 3",
    image: "/Seat/master-visuals/3.webp",
  },
  {
    id: 4,
    content: "Item 1",
    image: "/Seat/master-visuals/4.webp",
  },
  {
    id: 1,
    content: "Item 1",
    image: "/Seat/master-visuals/1.webp",
  },
  {
    id: 2,
    content: "Item 2",
    image: "/Seat/master-visuals/2.webp",
  },
  {
    id: 3,
    content: "Item 3",
    image: "/Seat/master-visuals/3.webp",
  },
  {
    id: 4,
    content: "Item 1",
    image: "/Seat/master-visuals/4.webp",
  },
];

const staticimg = [
  { img: "/Seat/static-posts/1.webp" },
  { img: "/Seat/static-posts/2.webp" },
  { img: "/Seat/static-posts/3.webp" },
  { img: "/Seat/static-posts/4.webp" },
  { img: "/Seat/static-posts/5.webp" },
  { img: "/Seat/static-posts/6.webp" },
];

const activation = [
  { img: "/Seat/activations/A1.jpeg" },
  { img: "/Seat/activations/A2.jpeg" },
  { img: "/Seat/activations/A3.jpeg" },
  { img: "/Seat/activations/A4.jpg" },
  { img: "/Seat/activations/A5.jpg" },
];
