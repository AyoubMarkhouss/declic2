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

const Vw = () => {
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
              src="/VW/slider-desktop.webp"
              height={2000}
              width={2000}
              className="hidden laptop:block w-screen h-full object-cover "
            />
            <Image
              alt="d"
              src="/VW/slider-mobile.webp"
              height={2000}
              width={2000}
              className="laptop:hidden w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Volkswagen Cinema
          </h1>
          <p className=" tablet:text-lg text-justify">
            Volkswagen Maroc partners with the Fête du Cinéma to celebrate the
            7th art in four major cities across Morocco. As the official
            sponsor, the brand shares this journey with the audience by offering
            a unique cinematic experience. This partnership is an opportunity to
            explore the world of cinema together, while highlighting the spirit
            of innovation and conviviality that defines Volkswagen. Through this
            event, the brand invites everyone to experience cinema in a new way,
            with passion and authenticity.
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
                Automotive
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
                Centrale Automobile Chérfienne
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
                Volkswagen Maroc
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
        <div className="grid grid-cols-1 laptop:grid-cols-2">
          <div className="p-5 laptop:p-14">
            <Image
              alt="zz"
              src="/VW/master-visual/m1.webp"
              width={2000}
              height={2000}
              className="w-96 laptop:w-full"
            />
          </div>
          <div className="p-5 laptop:p-14">
            <Image
              alt="zz"
              src="/VW/master-visual/m2.webp"
              width={2000}
              height={2000}
              className="w-96 laptop:w-full"
            />
          </div>
        </div>
        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl my-10 pl-3 tablet:pl-0 mx-auto"
          setApi={setApi}
        >
          <CarouselContent className="">
            {affiches.map((it, index) => (
              <CarouselItem key={index} className="laptop:basis-1/2">
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
        {/* <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          Social Media
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-5">
            <div className="flex flex-col text-justify justify-center gap-y-5">
              <p className="laptop:text-lg desktop:text-xl">
                50 years of history, shared moments, and brewed passion, yet no
                one seemed to remember. So, Flag Spéciale decided to take
                matters into its own hands. First, a teaser on social media
                where the bottle, upset, was sulking at its audience. Then, the
                big reveal: no hard feelings, quite the opposite. To mark this
                historic milestone, we launched a full year of celebration with
                spectacular giveaways, exclusive promotions, and a tailor-made
                influencer strategy. After all, 50 years of being Spéciale
                deserves a celebration to match.
              </p>
            </div>
            <div className="flex items-center justify-center">
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
        </div> */}
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-4xl w-full h-24  px-20 flex  items-center"
        >
          The Deployement
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5 py-5 laptop:py-20">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-5 gap-x-7">
            <div className="flex flex-col text-justify justify-center gap-y-5">
              <p className="laptop:text-lg desktop:text-xl laptop:max-w-lg  desktop:w-full">
                As part of our partnership with the Fête du Cinéma, Volkswagen
                Maroc made a bold statement in cinemas through innovative
                branding and an immersive exhibition. From visual elements to
                carefully designed décor, every space was transformed to reflect
                the spirit of the brand and the event. The audience was immersed
                in a unique atmosphere where the worlds of Volkswagen and cinema
                harmoniously merged. A true sensory journey that allowed
                everyone to experience cinema in a fresh way, while showcasing
                the brand’s core values: innovation, passion, and sharing.
              </p>
            </div>
            <div className=" laptop:col-span-1 ">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
                setApi={setApi}
              >
                <CarouselContent>
                  {deployement.map((jj, index) => (
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
      </div>
      <Footer />
    </>
  );
};

export default Vw;

const affiches = [
  { id: 2, content: "Item 2", image: "/VW/master-visual/m1.webp" },
  { id: 3, content: "Item 3", image: "/VW/master-visual/m2.webp" },

  // { id: 6, content: "Item 6", image: "/Casablancabeer/master-visual/Principal.jpg" },
];

const staticimg = [
  { img: "/FSO/static-posts/fso1.webp" },
  { img: "/FSO/static-posts/fso2.webp" },
  { img: "/FSO/static-posts/fso3.webp" },
  { img: "/FSO/static-posts/fso4.webp" },
  { img: "/FSO/static-posts/fso5.webp" },
];
const deployement = [
  { img: "/VW/deploiement/d1.webp" },
  { img: "/VW/deploiement/d2.webp" },
  { img: "/VW/deploiement/d3.webp" },
  { img: "/VW/deploiement/d4.webp" },
  { img: "/VW/deploiement/d5.webp" },
  { img: "/VW/deploiement/d6.webp" },
  { img: "/VW/deploiement/d7.webp" },
  { img: "/VW/deploiement/d8.webp" },
  
];
