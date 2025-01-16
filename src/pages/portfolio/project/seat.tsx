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

const Seat = () => {
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
              src="/Seat/Slider.jpg"
              height={2000}
              width={2000}
              className="w-screen h-full object-cover "
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-15 h-96"></div> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-3 px-5 py-10 laptop:px-52 laptop:py-20">
          <h1 className="fontmed text-center laptop:text-start text-4xl">
            SEAT Attitude
          </h1>
          <p className=" tablet:text-lg text-justify">
            After introducing "Level Up," marking the new strategic partnership
            between SEAT and CAC, its new importer, it became essential to
            affirm the brand's DNA and solidify its identity. <br />
            This vision came to life through the SEAT Attitude campaign, which
            activated four key platforms represented by renowned ambassadors:
            Othman Choufani, Lilias Tebbai, ReqTeq, Aezaddy, Aidance, Sara
            Morbi, and Sika. <br /> This campaign brilliantly highlighted SEAT’s
            core values, encapsulated by its signature "Born in the Sun." <br />{" "}
            More than just a car, SEAT offers its customers a unique experience
            and mindset, celebrating a dynamic and inspiring lifestyle.
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
          Led Display
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-2 gap-y-10 gap-x-10">
            <div className="col-span-1 laptop:col-span-2">
              <p className="text-justify laptop:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem deserunt accusantium doloribus molestiae provident,
                recusandae velit, maxime ipsum sapiente modi voluptatibus
                placeat, dignissimos aut labore eum. Voluptatibus nostrum ab
                nihil!
              </p>
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
          Press
        </TextAnimate>
        <div className="px-5 laptop:px-20 flex flex-col gap-y-5  py-10">
          <div className="grid grid-cols-1 laptop:grid-cols-3 gap-y-5 gap-x-10">
            <div className="col-span-1 flex items-center ">
              <p className="text-justify laptop:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem deserunt accusantium doloribus molestiae provident,
                recusandae velit, maxime ipsum sapiente modi voluptatibus
                placeat, dignissimos aut labore eum. Voluptatibus nostrum ab
                nihil, Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                <br /> <br />
                Voluptatem deserunt accusantium doloribus molestiae provident,
                recusandae velit, maxime ipsum sapiente modi voluptatibus
                placeat, dignissimos aut labore eum. Voluptatibus nostrum ab
                nihil!
                <br /> <br />
                Voluptatem deserunt accusantium doloribus molestiae provident,
                recusandae velit, maxime ipsum sapiente modi voluptatibus
                placeat, dignissimos aut labore eum. Voluptatibus nostrum ab
                nihil!
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
              <p className=" text-justify  laptop:text-start laptop:text-lg desktop:text-xl">
                The SEAT Attitude campaign gained even greater momentum through
                a strategic rollout on social media and a powerful advertising
                campaign. Through interactive challenges, immersive videos, and
                static posts, each communication platform was highlighted,
                driven by our ambassadors and their unique worlds. <br />
                <br /> In parallel, an Ads campaign was launched to amplify SEAT
                Attitude's reach and connect with an even wider audience.
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
              <p className=" text-justify laptop:text-start laptop:text-lg desktop:text-xl">
                The SEAT Attitude campaign was not limited to digital platforms;
                it also came to life on the ground through unique and memorable
                activations: At the Ain Diab Surf School, we introduced
                enthusiasts to the thrill of the waves, embodying the freedom
                and adventure of SEAT Attitude. <br /> <br /> In our showrooms,
                fans had the opportunity to meet their favorite artists,
                creating unforgettable moments of connection. <br /> <br /> A
                surf competition brought together amateurs and professionals to
                celebrate the passion and performance of the sport. <br />{" "}
                <br /> Finally, arcade gaming stations, dressed in SEAT Attitude
                branding, were strategically placed in key locations, adding a
                playful and unexpected touch. These activations brought the SEAT
                Attitude spirit closer to the audience, transforming it into
                tangible, dynamic, and engaging experiences.
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
