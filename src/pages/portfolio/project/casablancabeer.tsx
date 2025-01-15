import React, { useRef, useState } from "react";
import Image from "next/image";
import Header from "~/components/header-burger";
import Footer from "~/components/footer";
import Iphone15Pro from "~/components/ui/iphone-15-pro";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowCircleDown, FaStar } from "react-icons/fa";
import { cn } from "~/utils";
import ReactPlayer from "react-player";
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

const Casablancabeer = () => {
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
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="fontmed laptop:text-7xl  bg-gradient-to-r from-redeclic to-[#b0011c] fontmed justify-center tablet:justify-start text-4xl w-full text-white h-24  px-20 flex  items-center"
          >
            Casablanca Beer
          </TextAnimate>
          <div className="w-screen relative h-[calc(100vh_-_176px)] flex justify-center items-center">
            <Image
              alt="d"
              src="/Casablancabeer/Slider.jpg"
              height={2000}
              width={2000}
              className="w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className=" tablet:text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            voluptate consectetur doloremque, dolor aut repellendus labore velit
            pariatur aliquam quo provident necessitatibus aliquid at ratione
            magnam laudantium sunt, omnis nesciunt. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Totam voluptate consectetur
            doloremque, dolor aut repellendus labore velit pariatur aliquam quo
            provident necessitatibus aliquid at ratione magnam laudantium sunt,
            omnis nesciunt.
          </p>
          <p className=" tablet:text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
            voluptate consectetur doloremque, dolor aut repellendus labore velit
            pariatur aliquam quo provident necessitatibus aliquid at ratione
            magnam laudantium sunt, omnis nesciunt. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Totam voluptate consectetur
            doloremque, dolor aut repellendus labore velit pariatur aliquam quo
            provident necessitatibus aliquid
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
                Alcohol
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
                SBM
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
          className="fontmed laptop:text-7xl  bg-gradient-to-r from-redeclic to-[#b0011c] fontmed justify-center tablet:justify-start text-4xl w-full text-white h-24  px-20 flex  items-center"
        >
          Master Visual
        </TextAnimate>
        {/* <div className="flex px-20 py-20">
          <div className="grid grid-cols-3 gap-10">
            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover "
            />
            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover  "
            />

            <Image
              alt="d"
              src="/casablancabeer.jpg"
              height={2000}
              width={2000}
              className="w-full object-cover  "
            />
          </div>
        </div> */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl my-20 pl-3 tablet:pl-0 mx-auto"
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
          className="fontmed laptop:text-7xl  bg-gradient-to-r from-redeclic to-[#b0011c] fontmed justify-center tablet:justify-start text-4xl w-full text-white h-24  px-20 flex  items-center"
        >
          Social Media
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-5">
            <div className="flex flex-col text-justify laptop:text-start gap-y-5">
              <h1 className="fontmed text-center laptop:text-start text-4xl text-redeclic">
                The Moroccan Spirit
              </h1>
              <p className="text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
              </p>
              <p className="text-xl">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
              </p>
              <p className="text-xl">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis obcaecati reiciendis nostrum voluptatum omnis,
                doloremque inventore explicabo labore qui reprehenderit vitae
                animi quisquam, adipisci repellat quae itaque similique fugit
                numquam!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Iphone15Pro
                className="hidden laptop:block h-[500px]"
                iframevid="https://www.youtube.com/embed/_5EVk40zITs?si=BIWnpEQ4mYfxs3Qv&amp;controls=0"
              />
              <video
                className="laptop:hidden object-cover w-full overflow-hidden "
                src="https://www.youtube.com/embed/_5EVk40zITs?si=BIWnpEQ4mYfxs3Qv&amp;controls=0"
                autoPlay
                loop
                muted
                playsInline
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
      </div>
      <Footer />
    </>
  );
};

export default Casablancabeer;

const affiches = [
  { id: 1, content: "Item 1", image: "/Casablancabeer/master-visual/1.jpg" },
  { id: 2, content: "Item 2", image: "/Casablancabeer/master-visual/2.jpg" },
  { id: 3, content: "Item 3", image: "/Casablancabeer/master-visual/3.jpg" },
  { id: 4, content: "Item 4", image: "/Casablancabeer/master-visual/4.jpg" },
  { id: 5, content: "Item 5", image: "/Casablancabeer/master-visual/5.jpg" },
  // { id: 6, content: "Item 6", image: "/Casablancabeer/master-visual/Principal.jpg" },
];

const staticimg = [
  { img: "/Casablancabeer/static-posts/CASA_PE_AOUT_freshness.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_AOUT_Grab.jpg" },
  {
    img: "/Casablancabeer/static-posts/CASA_PE_AOUT_vibrant freshness.jpg",
  },
  { img: "/Casablancabeer/static-posts/CASA_PE_JUIN_berrad.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_SEP_Cheers.jpg" },
  { img: "/Casablancabeer/static-posts/CASA_PE_SEP_Savor.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_1.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_2.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Baya_3.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_Bilzzart_2.jpg" },
  { img: "/Casablancabeer/static-posts/Casablanca_Post_SKU Bottle_Citron.jpg" },
  {
    img: "/Casablancabeer/static-posts/Casablanca_Post_SKU Bottle_Citron2.jpg",
  },
  { img: "/Casablancabeer/static-posts/CasaXSecretEvent_Giveaway2.jpg" },
  { img: "/Casablancabeer/static-posts/CasaXTime_Giveaway.jpg" },
];
