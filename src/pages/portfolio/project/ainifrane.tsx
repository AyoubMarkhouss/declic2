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

const Ainifrane = () => {
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
              src="/Ainifrane/Slider_ifran_desktop.webp"
              height={2000}
              width={2000}
              className="hidden tablet:block w-screen h-full object-cover "
            />
            <Image
              alt="d"
              src="/Ainifrane/Slider_ifran_mobile.webp"
              height={2000}
              width={2000}
              className="block tablet:hidden w-screen h-full object-cover "
            />

            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Aïn Ifrane
          </h1>
          <p className=" tablet:text-lg text-justify">
            As part of our collaboration with Aïn Ifrane, we designed and
            deployed a comprehensive strategy encompassing all aspects of the
            brand, from digital to trade. This strategy revolves around the
            iconic claim, "Ressourcez-vous où que vous soyez" ("Recharge
            wherever you are"), highlighting the importance of recharging in
            every moment of life. By developing impactful campaigns and creative
            concepts that embody this commitment, we also supported the launch
            of the "Aïn Ifrane chez vous" delivery service, further
            strengthening the brand's connection with its consumers and its role
            as a trusted daily partner.
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
                Beverages
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
                Aïn Ifrane
              </p>
            </motion.div>
          </div>
        </div>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          Master visual
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
        </Carousel>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          Social media
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 laptop:gap-x-10 desktop:gap-x-20 gap-y-5">
            <div className="flex flex-col justify-center gap-y-5">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                In parallel, we orchestrated an ambitious digital deployment,
                blending innovation with consistency. A campaign focused on the
                "Aïn Ifrane chez vous" home delivery service was launched to
                meet the modern needs of consumers while ensuring their daily
                replenishment. Simultaneously, we spread the new brand idea
                through captivating content and a strengthened presence across
                all digital platforms, ensuring optimal visibility and authentic
                engagement with the brand’s diverse audiences.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px] desktop:h-[550px]"
                iframevid="https://www.youtube.com/embed/9GDzW1m0ICM?si=3n5Zvg5q8-mfG9LU?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1"
              />

              <iframe
                className="laptop:hidden  object-cover h-screen w-full overflow-hidden"
                src="https://www.youtube.com/embed/9GDzW1m0ICM?si=3n5Zvg5q8-mfG9LU?controls=0&modestbranding=1&autoplay=1&mute=1&rel=0&loop=1"
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
                  {staticpost.map((jj, index) => (
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
          className="fontmed laptop:text-7xl  bg-redeclic text-white  fontmed justify-center tablet:justify-start text-3xl w-full h-24  px-20 flex  items-center"
        >
          Activation
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col  gap-y-5 ">
          <div className="grid grid-cols-1 laptop:grid-cols-2  laptop:gap-x-20 laptop:py-10 desktop:gap-x-20 py-5">
            <div className="flex flex-col justify-center">
              <p className=" text-justify  laptop:text-lg desktop:text-xl">
                In response to the water shortage, Aïn Ifrane turned a challenge
                into an opportunity for meaningful engagement. By branding its
                trucks with a bold and unexpected message – "Don’t wash me,
                water is scarce!" – the brand took a stand on a crucial social
                responsibility issue. This simple yet impactful gesture not only
                raised public awareness about the importance of conserving this
                precious resource but also reinforced Aïn Ifrane’s image as a
                committed and responsible brand. An initiative widely praised
                for its relevance and authenticity.
              </p>
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
                  {activation.map((jj, index) => (
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

export default Ainifrane;

const affiches = [
  {
    id: 1,
    content: "Item 1",
    image: "/Ainifrane/master-visuals/kv1.webp",
  },
  {
    id: 2,
    content: "Item 2",
    image: "/Ainifrane/master-visuals/kv2.webp",
  },
  {
    id: 3,
    content: "Item 3",
    image: "/Ainifrane/master-visuals/kv3.webp",
  },
  {
    id: 4,
    content: "Item 1",
    image: "/Ainifrane/master-visuals/kv1.webp",
  },
  {
    id: 5,
    content: "Item 2",
    image: "/Ainifrane/master-visuals/kv2.webp",
  },
  {
    id: 6,
    content: "Item 3",
    image: "/Ainifrane/master-visuals/kv3.webp",
  },
];

const staticpost = [
  { img: "/Ainifrane/static-posts/post1.webp" },
  { img: "/Ainifrane/static-posts/post2.webp" },
  { img: "/Ainifrane/static-posts/post3.webp" },
  { img: "/Ainifrane/static-posts/post4.webp" },
  { img: "/Ainifrane/static-posts/post5.webp" },
  { img: "/Ainifrane/static-posts/post6.webp" },
  { img: "/Ainifrane/static-posts/post7.webp" },
  { img: "/Ainifrane/static-posts/post8.webp" },
  { img: "/Ainifrane/static-posts/post9.webp" },
  
];

const activation = [
  { img: "/Ainifrane/activations/activation1.webp" },
  { img: "/Ainifrane/activations/activation2.webp" },
  
];
