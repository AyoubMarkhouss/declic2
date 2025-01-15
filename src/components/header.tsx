import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import declic from "~/../public/logodeclic.png";
import { cn } from "~/utils";
import { useBearStore } from "~/utils/zustand/hoveredEffect";
const Header = () => {
  const { setCursorVariant } = useBearStore();

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect on mobile

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolled(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobile]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.4, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const listVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div
      className="z-50"
      initial={false}
      animate={menuOpen ? "open" : "closed"}
    >
      <div
        className={`fixed z-50 top-5 left-1/2 transform border-2 border-black -translate-x-1/2 bg-white/30 backdrop-blur-md shadow-lg px-4 py-4 rounded-[34px] ${
          isMobile
            ? menuOpen
              ? "w-full rounded-[34px]"
              : "w-full rounded-full"
            : `transition-all duration-500 ${isScrolled ? "w-[40%]" : "w-full"}`
        }`}
        // style={{
        //   maxWidth: "calc(100% - 10rem)", // Adjust for page margin
        // }}
        style={{ maxWidth: isMobile ? "90%" : "calc(100% - 10rem)" }}
      >
        <nav className="flex justify-between items-center px-4">
          <div className="fontmed text-lg">
            <Image
              className="w-20"
              alt="logo"
              src={declic}
              width={1000}
              height={1000}
            />
          </div>

          {isMobile ? (
            <div>
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none z-50"
              >
                <span className="block w-6 h-1 bg-black mb-1"></span>
                <span className="block w-6 h-1 bg-black mb-1"></span>
                <span className="block w-6 h-1 bg-black"></span>
              </button>
            </div>
          ) : (
            <ul className="fontunb flex space-x-5">
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <a
                  href="#"
                  className="text-black text-lg hover:text-red-700 transition"
                >
                  Home
                </a>
              </li>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <a
                  href="#"
                  className="text-black text-lg hover:text-red-700 transition"
                >
                  About
                </a>
              </li>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <a
                  href="#"
                  className="text-black text-lg hover:text-red-700 transition"
                >
                  Services
                </a>
              </li>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <a
                  href="#"
                  className="text-black text-lg hover:text-red-700 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>
        <div
          className={` px-4 ${
            isMobile
              ? menuOpen
                ? "w-full rounded-[34px]"
                : "w-full rounded-full"
              : `transition-all duration-500 flex md:hidden ${
                  isScrolled ? "w-[40%]" : "w-full"
                }`
          }`}
          // style={{
          //   maxWidth: "calc(100% - 0.5rem)", // Adjust for page margin
          // }}
        >
          <motion.nav
            className={cn("rounded-[34px] w-full z-[99999]")}
            variants={{
              open: { height: 180, opacity: 1 },
              closed: { height: 0, opacity: 0 },
            }}
          >
            <motion.ul
              variants={variants}
              className={cn(
                "fontunb flex flex-col items-center space-y-4 w-full h-full px-5 py-5 "
              )}
            >
              {navs.map((b) => (
                <motion.li
                  key={b}
                  variants={listVariants}
                  className="text-center"
                >
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

const navs = ["Home", "About", "Services", "Contact"];
