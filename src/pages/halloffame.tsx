import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "~/components/footer";
import HalloffameCarousel from "~/components/halloffameCarousel";
import Header from "~/components/header-burger";
import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";
import { TextAnimate } from "~/components/ui/text-animate";
import { useTranslation } from "../context/TranslationContext";

export default function Halloffame() {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <div className="bigmobile:px-5 laptop:px-36 relative  h-full pt-28">
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
              {t.halloffame.subtitle}
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-md laptop:max-w-[70%] pb-5"
            >
              {t.halloffame.description} <br />
              {t.halloffame.desc2}
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
