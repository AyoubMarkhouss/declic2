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
import ViewMore from "~/components/icons/viewMore";
import { useTranslation } from "~/context/TranslationContext";

export default function Portfolio() {
  // Function to load more works
  const { t } = useTranslation();
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
              className="fontbold pb-3 bigmobile:text-3xl text-center laptop:text-7xl desktop:text-7xl text-redeclic"
            >
              {t.home.title}
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-lg laptop:max-w-[70%] pb-5"
            >
              {t.home.description}
            </motion.p>
            <div className="flex gap-x-5">
              <Link
                href={`/portfolio?section=work`}
                className={`px-4 text-2xl py-2 rounded ${
                  section === "work" ? "text-redeclic" : "text-black"
                }`}
              >
                {t.home.work}
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
              <h1 className="fontmed text-center text-5xl py-3">
                {client?.title}
              </h1>
              <p className="text-lg text-justify text-gray-700">
                {/* {client?.description} */}
                {t.clients[client?.description as keyof typeof t.clients]}
              </p>

              {work
                .filter((k) => k.brand === client?.title)
                .map((g) => {
                  return (
                    <Link href={g.link}>
                      <div
                        className="my-10  group  break-inside-avoid"
                        key={g.title}
                      >
                        <div className="relative">
                          <div className="px-5 hidden laptop:group-hover:flex group absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2   z-[999999]">
                            <ViewMore />
                          </div>
                          <Image
                            className="object-cover group-hover:border-[10px] group-hover:border-redeclic hover:cursor-pointer  transition-all duration-300 transform"
                            alt="500"
                            src={g.image}
                            width={500}
                            height={500}
                          />
                        </div>

                        <div className="flex items-center transition-all duration-300 transform justify-between pt-2">
                          <h1 className="fontmed group-hover:text-redeclic text-lg">
                            {g.title}
                          </h1>
                          <FaChevronRight className="group-hover:fill-redeclic" />
                        </div>
                        <p className="text-sm ">
                          {
                            t.home.workCategories[
                              g.category as keyof typeof t.home.workCategories
                            ]
                          }
                        </p>
                      </div>
                    </Link>
                  );
                })}
              <Link
                href="/portfolio?section=client"
                className="fontmed mt-20 px-4 py-2 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
              >
                {t.clients.cta}
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
type WorkCategory =
  | "entertainment"
  | "automotive"
  | "beverages"
  | "automotiveMaintenance"
  | "deliveryService";
interface WorkItem {
  title: string;
  image: string;
  category: WorkCategory;
  link: string;
  brand: string;
}

const work: WorkItem[] = [
  {
    title: "L'Clicka Dialna",
    image: "/AboutUs/ClickaDialna.jpg",
    category: "entertainment",
   
    link: "/portfolio/project/clickadialna",
    brand: "L'Clicka Dialna",
  },
  {
    title: "Porsche Morocco",
    image: "/AboutUs/PorscheFestival.jpg",
    category: "automotive",
    
    link: "/portfolio/project/porschefestival",
    brand: "Porsche Morocco",
  },
  {
    title: "Casablanca Beer",
    image: "/AboutUs/CasablancaBeer.jpg",
    category: "beverages",
    link: "/portfolio/project/casablancabeer",
    brand: "Casablanca beer",
  },
  {
    title: "SEAT Attitude",
    image: "/AboutUs/SeatAttitude.jpg",
    category: "automotive",
   
    link: "/portfolio/project/seat",
    brand: "SEAT Morocco",
  },
  {
    title: "Fast Pro",
    image: "/AboutUs/FastPro.webp",
    category: "automotiveMaintenance",
 
    link: "/portfolio/project/fastpro",
    brand: "Fast Pro Morocco",
  },
  {
    title: "Aïn Ifrane",
    image: "/Ainifrane/AinIfrane.webp",
    category: "beverages",

    link: "/portfolio/project/ainifrane",
    brand: "Aïn Ifrane",
  },
  {
    title: "Cupra Morocco",
    image: "/Cupra/Cupra.webp",
    category: "automotive",
  
    link: "/portfolio/project/cupra",
    brand: "Cupra Morocco",
  },
  {
    title: "Express Relais",
    image: "/Expressrelais/ExpressRelais.webp",
    category: "automotiveMaintenance",

    link: "/portfolio/project/expressrelais",
    brand: "Express Relais",
  },
  {
    title: "Flag Spéciale Original",
    image: "/FSO/fso-cover.webp",
    category: "beverages",

    link: "/portfolio/project/flagspecialeoriginal",
    brand: "Flag Speciale Original",
  },
  {
    title: "Volkswagen Cinema",
    image: "/VW/vw-cover.webp",
    category: "automotive",

    link: "/portfolio/project/vw",
    brand: "Volkswagen Morocco",
  },
  // {
  //   title: "Project 4",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  //   category: "Automobile",
  //   date: "28 avril 2024",
  //   link: "",
  //   brand: "",
  // },
  // {
  //   title: "Project 5",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  //   category: "Automobile",
  //   date: "29 avril 2024",
  //   link: "",
  //   brand: "",
  // },
  // {
  //   title: "Project 6",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  //   category: "Automobile",
  //   date: "30 avril 2024",
  //   link: "",
  //   brand: "",
  // },
  // {
  //   title: "Project 7",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  //   category: "Automobile",
  //   date: "1 mai 2024",
  //   link: "",
  //   brand: "",
  // },
  // {
  //   title: "Project 8",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  //   category: "Automobile",
  //   date: "2 mai 2024",
  //   link: "",
  //   brand: "",
  // },
  // {
  //   title: "Project 9",
  //   image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  //   category: "Automobile",
  //   date: "3 mai 2024",
  //   link: "",
  //   brand: "",
  // },
];
