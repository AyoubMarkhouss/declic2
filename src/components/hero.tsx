import { motion } from "framer-motion";
import Image from "next/image";
import WordPullUp from "./word-pull-up";
import Airplane from "./icons/airplane";
const bounceAnimation1 = {
  animate: {
    y: [0, -15, 0], // Moves up and down
  },
  transition: {
    duration: 4, // Time for one cycle
    repeat: Infinity, // Loops indefinitely
    ease: "easeInOut",
  },
};
const bounceAnimation2 = {
  animate: {
    y: [0, -20, 0], // Moves up and down
  },
  transition: {
    duration: 7, // Time for one cycle
    repeat: Infinity, // Loops indefinitely
    ease: "easeInOut",
  },
};
const bounceAnimation3 = {
  animate: {
    y: [0, -16, 0], // Moves up and down
  },
  transition: {
    duration: 4, // Time for one cycle
    repeat: Infinity, // Loops indefinitely
    ease: "easeInOut",
  },
};

const Hero = () => {
  return (
    <div className="h-screen w-full laptop:mt-10 flex flex-col justify-center px-5 md:px-20">
      <div className="border-2 bg-white/30 drop-shadow-2xl  border-black shadow-2xl relative bigmobile:h-[calc(100vh_-_320px)] bigmobile:p-5 bigmobile:pt-20 tablet:flex tablet:gap-10 tablet:flex-col tablet:justify-center tablet:p-10 tablet:h-[calc(100vh_-_250px)] laptop:gap-0 laptop:p-10 laptop:h-[calc(100vh_-_160px)] desktop:justify-normal desktop:p-20 desktop:h-[calc(100vh_-_250px)] rounded-[34px] ">
        <WordPullUp
          className="fontmed bigmobile:text-[45px] bigmobile:pt-7 bigmobile:text-center bigmobile:z-50  tablet:text-7xl tablet:pt-0 tablet:text-center laptop:pt-0 laptop:text-start laptop:text-8xl laptop:leading-[90px] desktop:text-9xl desktop:pt-0 desktop:max-w-[80%] text-[#e60224]  "
          words="Crafting Digital Experiences that Inspire"
        ></WordPullUp>

        {/* <h1 className="fontmed lg:text-[100px]  2xl:text-[190px] 2xl:leading-[10rem] lg:leading-[6rem] text-[#e60224]  ">
            Crafting Digital Experiences that Inspire
          </h1> */}

        <p className="mt-5 text-black text-sm bigmobile:text-center laptop:text-start laptop:text-xl laptop:max-w-[50%] desktop:text-3xl desktop:max-w-[50%]">
          Declic, the 100% independent creative agency that&apos;s been shaping
          the game since 2012.
        </p>
        <motion.div
          className="w-28 absolute -top-5 right-0 bigmobile:-z-10 tablet:w-28 tablet:left-10 laptop:-top-[25px] desktop:w-44 laptop:left-[850px] desktop:left-[1250px] desktop:-top-[40px]"
          {...bounceAnimation1}
        >
          <Image src="/shape1.png" alt="shape1" width={1000} height={1000} />
        </motion.div>
        <motion.div
          className="bigmobile:hidden tablet:block tablet:w-48 tablet:top-14 tablet:right-10 laptop:w-52 absolute laptop:top-28 laptop:right-10 desktop:w-64 desktop:top-36"
          {...bounceAnimation3}
        >
          <Image src="/shape3.png" alt="shape3" width={1000} height={1000} />
        </motion.div>
        <motion.div
          className="bigmobile:bottom-20 bigmobile:w-20 bigmobile:right-80 tablet:w-72 tablet:-bottom-16 tablet:right-80 laptop:w-72 desktop:w-96 absolute laptop:right-56 laptop:-bottom-16 desktop:-bottom-24 desktop:right-64"
          {...bounceAnimation2}
        >
          <Image src="/shape2.png" alt="shape2" width={1000} height={1000} />
        </motion.div>
        <div className="absolute bigmobile:w-full tablet:w-fit px-10 bottom-5 laptop:right-1 right-0 md:right-10  md:bottom-10">
          <button className="button group justify-center w-full bigmobile:h-14  cursor-none flex items-center gap-x-2 border-2 hover:bg-redeclic hover:text-white border-black  p-5 rounded-[30px]  fontmed bg-[#e60224]">
            Call to action{" "}
            <Airplane className="size-5  group-hover:rotate-45 group-hover:fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
