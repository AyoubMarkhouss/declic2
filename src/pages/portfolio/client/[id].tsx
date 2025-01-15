import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import Footer from "~/components/footer";
import { clients } from "..";
import { motion } from "framer-motion";
import { TextAnimate } from "~/components/ui/text-animate";
import Header from "~/components/header-burger";
import { useState } from "react";

export default function Portfolio() {
  // Function to load more works

  const path = usePathname();
  const brand = path?.split("/")[3];
  const section = path?.split("/")[2];
  const client = clients.filter(
    (f) => f.title.split(" ").join("_").toLocaleLowerCase() === brand
  )[0];
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <div className="px-5 laptop:px-20 relative pt-20">
          <div className="h-60 flex flex-col justify-center items-center">
            <TextAnimate
              animation="blurInUp"
              by="character"
              className="fontbold pb-3 bigmobile:text-3xl text-center laptop:text-8xl desktop:text-9xl text-redeclic"
            >
              The Lab Of Creativity
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-lg laptop:max-w-[70%] pb-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              reprehenderit sit iste, dolores dolorum molestiae dicta explicabo!{" "}
            </motion.p>
            <div className="flex gap-x-5">
              <Link
                href={`/portfolio?section=work`}
                className={`px-4 text-2xl py-2 rounded ${
                  section === "work" ? "text-redeclic" : "text-black"
                }`}
              >
                Work
              </Link>
              <button
                className={`text-2xl px-4 py-2 rounded ${
                  section === "client" ? "text-redeclic" : "text-black"
                }`}
              >
                Clients
              </button>
            </div>
          </div>

          {/* Client Details Section */}
          <div className="grid laptop:grid-cols-3 items-center py-10">
            <div></div>
            <div className="flex flex-col gap-y-5 items-center">
              <Image
                src={client?.image}
                alt="Selected Client"
                width={300}
                height={300}
                className="mb-4 "
              />
              <h1 className="fontmed text-5xl py-3">About {client?.title}</h1>
              <p className="text-lg text-justify text-gray-700">
                {client?.description}
              </p>

              {work
                .filter((k) => k.brand === client?.title)
                .map((g) => {
                  return (
                    <div
                      className="mb-10 group break-inside-avoid"
                      key={g.title}
                    >
                      <Image
                        className="opacity-80 hover:scale-105 hover:opacity-100 object-cover transition-all duration-300 transform"
                        alt="500"
                        src={g.image}
                        width={500}
                        height={500}
                      />
                      <div className="flex items-center group-hover:scale-105 transition-all duration-300 transform justify-between pt-2">
                        <h1 className="fontmed group-hover:text-redeclic text-lg">
                          {g.title}
                        </h1>
                        <FaChevronRight className="group-hover:fill-redeclic" />
                      </div>
                      <p className="text-sm group-hover:scale-105 transition-all duration-300 transform">
                        {g.category}
                      </p>
                      <p className="text-xs group-hover:scale-105 transition-all duration-300 transform text-gray-400">
                        {g.date}
                      </p>
                    </div>
                  );
                })}
              <Link
                href="/portfolio?section=client"
                className="fontmed mt-20 px-4 py-2 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
              >
                Back to Clients
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const work = [
  {
    title: "Flag Speciale Gold",
    image: "/gold.jpg",
    category: "Mechroubat",
    date: "25 avril 2024",
    link: "",
    brand: "Porsche",
  },
  {
    title: "Flag Speciale Original",
    image: "/qnibila.jpg",
    category: "Mechroubat",
    date: "25 avril 2024",
    link: "",
    brand: "Porsche",
  },
  {
    title: "Casablanca Beer",
    image: "/casablancabeer.jpg",
    category: "Mechroubat",
    date: "25 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Stork",
    image: "/stork.jpg",
    category: "Mechroubat",
    date: "26 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 5",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    category: "Automobile",
    date: "26 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 2",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    category: "Automobile",
    date: "26 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 2",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    category: "Automobile",
    date: "26 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 3",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    category: "Automobile",
    date: "27 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 4",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    category: "Automobile",
    date: "28 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 5",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    category: "Automobile",
    date: "29 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 6",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    category: "Automobile",
    date: "30 avril 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 7",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    category: "Automobile",
    date: "1 mai 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 8",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
    category: "Automobile",
    date: "2 mai 2024",
    link: "",
    brand: "",
  },
  {
    title: "Project 9",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    category: "Automobile",
    date: "3 mai 2024",
    link: "",
    brand: "",
  },
];
