import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "~/utils";

const Header: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  // const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transitions = [
    { delay: 0, duration: 0.1 },
    { delay: 0.1, duration: 0.2 },
    { delay: 0.2, duration: 0.3 },
    { delay: 0.3, duration: 0.4 },
    { delay: 0.4, duration: 0.5 },
  ];
  const [viva, setViva] = useState<number | undefined>();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest: number) => {
    console.log({ latest });
    setViva(latest);
  });
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isHovered && showLinks) {
      timeout = setTimeout(() => {
        setShowLinks(false);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [isHovered, showLinks]);
  return (
    <div
      className={cn(
        "fixed top-0 z-50 w-full h-20",
        viva && viva > 100
          ? "transition-all transform ease-in-out duration-500  bg-white/100 backdrop-blur-md shadow-md"
          : "transition-all transform ease-in-out duration-500 bg-transparent"
      )}
    >
      {open && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.7 }}
            className="fixed z-50 w-full h-screen flex items-center justify-center"
          >
            <SlideTabs />
          </motion.div>
        </AnimatePresence>
      )}
      <div className="flex fixed z-50 top-0 left-0  h-20 w-full items-center justify-between px-10">
        <div className="">
          <Image
            alt="logo"
            src="/declic-red.png"
            width={1000}
            height={1000}
            className="w-20"
          />
        </div>
        <div className="z-50 flex gap-x-6 items-center">
          {["Home", "About us", "Contact"].map((text, index) => (
            <motion.div
              key={index}
              className="text-xl fontmed"
              variants={linkVariants}
              initial="hidden"
              animate={isHovered || showLinks ? "visible" : "hidden"}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <Link
                className="text-black z-0 hidden laptop:block"
                href={
                  text === "Home"
                    ? "/portfolio?section=work"
                    : text === "About us"
                    ? "/"
                    : "/contact"
                }
              >
                {text}
              </Link>
            </motion.div>
          ))}

          {/* Button */}
          <button
            onMouseEnter={() => {
              setIsHovered(true); // Set hover state to true
              setShowLinks(true); // Show links when button is hovered
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setOpen(!open)} // Toggle menu
            className="flex flex-col gap-2 z-50 bg-transparent group w-14 items-end"
          >
            <span className="w-12 h-1 bg-redeclic rounded-full" />
            <span className="w-7 h-1 bg-redeclic rounded-full transition-all duration-300 group-hover:w-12" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <AnimatePresence mode="sync">
          {open &&
            transitions.map((transition, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: "100vh" }}
                exit={{ height: 0 }}
                transition={{ ...transition, ease: "linear" }}
                className="bg-black top-0 w-full h-7 z-50"
                style={{ zIndex: transitions.length - index }} // Ensure proper stacking order
              />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<{
    top: number;
    width: number;
    opacity: number;
  }>({
    top: 0,
    width: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState<number | null>(null); // No active tab initially

  const pages = [
    { name: "Home", href: "/portfolio?section=work" },
    { name: "Campagnes", href: "/portfolio?section=work" },
    { name: "About us", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="fontmed relative mx-auto flex flex-col w-full text-center gap-3 p-1"
    >
      {pages.map((page, index) => (
        <Tab
          key={index}
          setPosition={setPosition}
          isActive={activeTab === index}
          onClick={() => {
            setActiveTab(index);
          }}
        >
          <a className="w-full text-5xl tablet:text-8xl" href={page.href}>
            {page.name}
          </a>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab: React.FC<{
  children: ReactNode;
  setPosition: (position: {
    top: number;
    width: number;
    opacity: number;
  }) => void;
  isActive: boolean;
  onClick: () => void;
}> = ({ children, setPosition, isActive, onClick }) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          top: ref.current.offsetTop,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={`relative group h-20 z-10 flex justify-center items-center cursor-pointer uppercase w-full text-7xl ${
        isActive ? "bg-red-500 text-white" : "text-white"
      }`}
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<{
  position: { top: number; width: number; opacity: number };
}> = ({ position }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{
        ...position,
      }}
      className="absolute z-0  h-20 w-full bg-redeclic text-center"
    />
  );
};
