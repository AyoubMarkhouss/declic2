import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "~/components/footer";
import HalloffameCarousel from "~/components/halloffameCarousel";
import Header from "~/components/header-burger";
import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";
import { TextAnimate } from "~/components/ui/text-animate";

export default function Halloffame() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <div className="bigmobile:px-5 laptop:px-36 relative min-h-screen h-full pt-20">
          <div className="h-60  flex flex-col justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="fontbold pb-3 bigmobile:text-4xl text-center laptop:text-7xl desktop:text-9xl text-redeclic"
            >
              Hall Of Fame
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="fontbold pb-3 bigmobile:text-xl text-center laptop:text-4xl desktop:text-5xl text-redeclic"
            >
              Our greatest hits !
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-md laptop:max-w-[70%] pb-5"
            >
              Here’s where we showcase our proudest moments in Morocco. Projects
              that made an impact and left their mark. Take a peek at what we do
              best (and yes, we love to brag a little)! 😉 <br /> 👉 Click on a
              client to explore their success story!
            </motion.p>
          </div>
        </div>
        <HalloffameCarousel />
        <HorizontalScrollCarousel />
        <Footer />
      </div>
    </>
  );
}
