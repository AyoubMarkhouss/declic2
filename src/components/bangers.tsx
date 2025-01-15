import React from "react";
import { TextAnimate } from "./ui/text-animate";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from ".././components/ui/dialog";
import ViewMore from "./icons/viewMore";

const Bangers = () => {
  return (
    <>
      <div className="">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="fontmed text-7xl  bg-redeclic text-white h-24  px-20 flex  items-center"
        >
          BANGERS
        </TextAnimate>
        <div className="px-20 py-10">
          <div className="grid grid-cols-2 gap-10 group ">
            <div className="relative group-hover:border-[5px] transition-all  transform group-hover:border-redeclic hover:cursor-pointer overflow-hidden">
              <div className="px-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex hidden z-[999999]">
                <ViewMore />
              </div>
              <Image
                alt="zz"
                src="/casablancabeer.jpg"
                width={2000}
                height={2000}
                className="w-full h-52 object-cover"
              />

              <div className="absolute top-0 w-full h-52 bg-black/30 "></div>
              <Dialog>
                <DialogTrigger>
                  {" "}
                  <h2 className="fontmed text-white text-5xl z-10 absolute bottom-10 left-5">
                    Casablanca Beer
                  </h2>
                </DialogTrigger>
                <DialogContent className="max-w-5xl h-fit">
                  <DialogHeader>
                    <DialogTitle className="text-3xl">
                      Casablanca Beer
                    </DialogTitle>

                    <Image
                      alt="zz"
                      src="/casablancabeer.jpg"
                      width={2000}
                      height={2000}
                      className="w-full h-60 object-cover"
                    />
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                    <DialogDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium, tempore voluptatum id optio animi unde neque
                      cupiditate aliquid totam? Pariatur deleniti ab ullam ad
                      beatae magni reiciendis ea, itaque neque Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Praesentium,
                      tempore voluptatum id optio animi unde neque cupiditate
                      aliquid totam? Pariatur deleniti ab ullam ad beatae magni
                      reiciendis ea, itaque neque?
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <Image
                alt="zz"
                src="/casablancabeer.jpg"
                width={2000}
                height={2000}
                className="w-full h-52 object-cover"
              />
              <h2 className="fontmed text-5xl absolute bottom-5 left-5">
                Casablanca Beer
              </h2>
            </div>
            <div className="relative">
              <Image
                alt="zz"
                src="/casablancabeer.jpg"
                width={2000}
                height={2000}
                className="w-full h-52 object-cover"
              />
              <h2 className="fontmed text-5xl absolute bottom-5 left-5">
                Casablanca Beer
              </h2>
            </div>
            <div className="relative">
              <Image
                alt="zz"
                src="/casablancabeer.jpg"
                width={2000}
                height={2000}
                className="w-full h-52 object-cover"
              />
              <h2 className="fontmed text-5xl absolute bottom-5 left-5">
                Casablanca Beer
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bangers;
