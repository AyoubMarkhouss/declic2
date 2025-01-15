import React, { useRef } from "react";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaYoutubeSquare,
} from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import Link from "next/link";

import { motion, useInView } from "framer-motion";

const Footer = () => {
  // const emptyArray = Array.from({ length: 5 });
  // const duplicatedSlides = [...emptyArray, ...emptyArray];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className=" px-5 tablet:px-20 w-full grid grid-cols-2 tablet:grid-cols-4 bg-gradient-to-b from-redeclic to-[#b0011c] ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="col-span-4 flex justify-center items-center py-5"
      >
        <Image
          alt="declic"
          src="/declic-white.png"
          height={1500}
          width={1500}
          className="w-40"
        />
      </motion.div>
      <div className="col-span-4 flex justify-between border-t-2 pt-10">
        <div className="col-span-1">
          <h2 className="fontmed text-2xl text-white ">
            We are in this location
          </h2>
          <p className="text-gray-300">Rue de L’Adjudant Jean Chelle,</p>
          <p className="text-gray-300">Quartier Oasis,</p>
          <p className="text-gray-300">Casablanca, Maroc</p>
        </div>
        <div className="hidden tablet:block col-span-1">
          <h2 className="fontmed text-2xl text-white ">Get in touch</h2>
          <p className="text-white">+212 (0) 522 206 546 / 544</p>
          <p className="text-white pb-2">Contact@declicagency.ma</p>
          <div className="flex items-center gap-x-4">
            <Link
              href="https://www.instagram.com/declic_agency/"
              className="border-2 rounded-full p-1.5  group hover:bg-white"
            >
              <FaInstagram
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/d%C3%A9clic-agency/about/"
              className="border-2 rounded-full p-1.5 group hover:bg-white"
            >
              <FaLinkedin
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>
            <Link
              href="https://www.facebook.com/declicagency"
              className="border-2 rounded-full p-1.5 group hover:bg-white"
            >
              <FaFacebook
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC6wt8nivSSkdNWymLrEtj0g/featured"
              className="border-2 rounded-full p-1.5 group hover:bg-white"
            >
              <ImYoutube
                size={20}
                className="fill-white group-hover:fill-black  transition-all duration-300 transform"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="block tablet:hidden col-span-1 pt-5 ">
        <h2 className="fontmed text-xl text-white ">Get in touch</h2>
        <p className="text-white ">+212 (0) 522 206 546</p>
        <p className="text-white ">+212 (0) 522 206 544</p>
        <p className="text-white pb-2">Contact@declicagency.ma</p>
        <div className="flex items-center gap-x-4">
          <Link
            href="https://www.instagram.com/declic_agency/"
            className="border-2 rounded-full p-1.5  group hover:bg-white"
          >
            <FaInstagram
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/d%C3%A9clic-agency/about/"
            className="border-2 rounded-full p-1.5 group hover:bg-white"
          >
            <FaLinkedin
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </Link>
          <Link
            href="https://www.facebook.com/declicagency"
            className="border-2 rounded-full p-1.5 group hover:bg-white"
          >
            <FaFacebook
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC6wt8nivSSkdNWymLrEtj0g/featured"
            className="border-2 rounded-full p-1.5 group hover:bg-white"
          >
            <ImYoutube
              size={20}
              className="fill-white group-hover:fill-black  transition-all duration-300 transform"
            />
          </Link>
        </div>
      </div>

      <div className="col-span-4 py-10">
        <div className="grid col-span-2 tablet:grid-cols-4 ">
          <Link
            href="/portfolio?section=work"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Home
          </Link>
          <Link
            href="/portfolio?section=work"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Campagnes
          </Link>
          <Link
            href="/"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="fontmed flex tablet:justify-center text-xl text-white  transition-all duration-300 transform hover:scale-125"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="col-span-4 justify-center items-center pb-5">
        <p className="flex items-center justify-center text-xs text-gray-200">
          Declic Agency 2025 <FaRegCopyright className="" /> All Rights Reserved{" "}
        </p>
      </div>

      {/* <div className="relative w-full overflow-hidden">
        
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 7,
              repeat: Infinity,
            },
          }}
        >
   
          {duplicatedSlides.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${250 / emptyArray.length}%` }}
            >
              <div className="fontmed text-white flex flex-col border-t-2  items-center justify-center h-full text-6xl">
                LET&apos;S COLLABORATE       
              </div>
            </div>
          ))}
        </motion.div>
      </div> */}
    </div>
  );
};

export default Footer;
