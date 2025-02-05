import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Footer from "~/components/footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "~/components/header-burger";
import { TextAnimate } from "~/components/ui/text-animate";
import ViewMore from "~/components/icons/viewMore";
import { useTranslation } from "~/context/TranslationContext";

// import { useRouter } from "next/router";

export const clients = [
  {
    image: "/Clients/Refs-logos/Audi.png",
    title: "Audi",
    description: "audi",
  },
  {
    image: "/Clients/Refs-logos/FSO.png",
    title: "Flag Speciale Original",
    description: "flagSpecialeOriginal",
  },
  {
    image: "/Clients/Refs-logos/Casablanca.png",
    title: "Casablanca beer",
    description: "casablancaBeer",
  },
  {
    image: "/Clients/Refs-logos/PORSCHE.png",
    title: "Porsche Morocco",
    description: "porscheMorocco",
  },
  {
    image: "/Clients/Refs-logos/CUPRA.png",
    title: "Cupra Morocco",
    description: "cupraMorocco",
  },
  {
    image: "/Clients/Refs-logos/SEAT.png",
    title: "SEAT Morocco",
    description: "seatMorocco",
  },
  {
    image: "/Clients/Refs-logos/FSG.png",
    title: "Flag Speciale Gold",
    description: "flagSpecialeGold",
  },
  {
    image: "/Clients/Refs-logos/AinIfrane.png",
    title: "Aïn Ifrane",
    description: "ainIfrane",
  },
  {
    image: "/Clients/Refs-logos/UM.png",
    title: "Universal Music Maghreb",
    description: "universalMusicMaghreb",
  },
  {
    image: "/Clients/Refs-logos/VW.png",
    title: "Volkswagen Morocco",
    description: "volkswagenMorocco",
  },
  {
    image: "/Clients/Refs-logos/Motul.png",
    title: "Motul Africa",
    description: "motulAfrica",
  },
  {
    image: "/Clients/Refs-logos/Castel.png",
    title: "Castel France",
    description: "castelFrance",
  },

  {
    image: "/Clients/Refs-logos/VWFleet.png",
    title: "Volkswagen Fleet",
    description: "volkswagenFleet",
  },
  {
    image: "/Clients/Refs-logos/ClickaDialna.png",
    title: "L'Clicka Dialna",
    description: "lClickaDialna",
  },
  {
    image: "/Clients/Refs-logos/Vindici.png",
    title: "Vins d'ici",
    description: "vinsDici",
  },
  {
    image: "/Clients/Refs-logos/Stork.png",
    title: "Stork",
    description: "stork",
  },
  {
    image: "/Clients/Refs-logos/AlJabr.png",
    title: "Al Jabr",
    description: "alJabr",
  },

  {
    image: "/Clients/Refs-logos/Yassamine.png",
    title: "Yassamine",
    description: "yassamine",
  },
  {
    image: "/Clients/Refs-logos/BISC.png",
    title: "British International School of Casablanca (BISC)",
    description: "britishInternationalSchoolOfCasablancaBISC",
  },
  {
    image: "/Clients/Refs-logos/Seriderm.png",
    title: "Seriderm",
    description: "seriderm",
  },
  {
    image: "/Clients/Refs-logos/Marina.png",
    title: "Marina Shopping",
    description: "marinaShopping",
  },

  {
    image: "/Clients/Refs-logos/Tachfine.png",
    title: "Tachfine Center",
    description: "tachfineCenter",
  },
  {
    image: "/Clients/Refs-logos/G4S.png",
    title: "G4S",
    description: "g4s",
  },
  {
    image: "/Clients/Refs-logos/FSB.png",
    title: "Flag Speciale Black",
    description: "flagSpecialeBlack",
  },

  {
    image: "/Clients/Refs-logos/Renault.png",
    title: "Renault Morocco",
    description: "renaultMorocco",
  },

  {
    image: "/Clients/Refs-logos/Dacia.png",
    title: "Dacia Morocco",
    description: "daciaMorocco",
  },
  {
    image: "/Clients/Refs-logos/FastPro.png",
    title: "Fast Pro Morocco",
    description: "fastProMorocco",
  },
  {
    image: "/Clients/Refs-logos/Midas.png",
    title: "Midas Morocco",
    description: "midasMorocco",
  },
  {
    image: "/Clients/Refs-logos/BeachMama.png",
    title: "Beach Mama",
    description: "beachMama",
  },
  {
    image: "/Clients/Refs-logos/Anatolia.png",
    title: "Anatolia",
    description: "anatolia",
  },

  {
    image: "/Clients/Refs-logos/ExpressRelais.png",
    title: "Express Relais",
    description: "expressRelais",
  },
];
export default function Portfolio() {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  // const router = useRouter();
  const section = searchParams.get("section");
  const [visibleWorks, setVisibleWorks] = useState(6);
  const [numColumns, setNumColumns] = useState(3); // Number of works visible initially
  const [selectedClient, setSelectedClient] = useState<{
    image: string;
    description: string;
    title: string;
  } | null>(null);
  useEffect(() => {
    const updateColumns = () => {
      const columns =
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setNumColumns(columns);
    };

    updateColumns(); // Initial call
    window.addEventListener("resize", updateColumns); // Update on resize

    return () => window.removeEventListener("resize", updateColumns); // Cleanup
  }, []);
  // Function to load more works
  const loadMoreWorks = () => {
    setVisibleWorks((prev) => prev + 6); // Show 6 more works on each click
  };
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
              className="fontbold pb-3 bigmobile:text-3xl text-center  laptop:text-7xl desktop:text-8xl text-redeclic"
            >
              {t.home.title}
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-md laptop:max-w-[70%] pb-5"
            >
              {t.home.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex gap-x-5 pb-5 "
            >
              <Link
                href={"?section=work"}
                className={`px-4 text-2xl py-2 rounded ${
                  section === "work" ? "text-redeclic" : "text-black"
                }`}
              >
                {t.home.work}
              </Link>
              <Link
                href={"?section=client"}
                className={`text-2xl px-4 py-2 rounded ${
                  section === "client" ? "text-redeclic" : "text-black"
                }`}
              >
                Clients
              </Link>
            </motion.div>
          </div>

          {/* Conditional rendering of the sections */}
          {/* {section === "work" ? (
            <div className="columns-xs min-h-screen h-full laptop:columns-3 gap-20 mb-28">
              {work.slice(0, visibleWorks).map((g) => (
                <motion.div
                  className="mb-10 group break-inside-avoid"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  key={g.title}
                >
                  <Image
                    className="laptop:opacity-80 hover:border-4 border-redeclic laptop:hover:scale-105 laptop:hover:opacity-100 object-cover transition-all duration-300 transform"
                    alt="500"
                    src={g.image}
                    width={500}
                    height={500}
                  />
                  <div className="flex items-center laptop:group-hover:scale-105 transition-all duration-300 transform justify-between pt-2">
                    <h1 className="fontmed group-hover:text-redeclic text-lg">
                      {g.title}
                    </h1>
                    <FaChevronRight className="group-hover:fill-redeclic" />
                  </div>
                  <p className="text-sm laptop:group-hover:scale-105 transition-all duration-300 transform">
                    {g.category}
                  </p>
                  <p className="text-xs laptop:group-hover:scale-105 transition-all duration-300 transform text-gray-400">
                    {g.date}
                  </p>
                </motion.div>
              ))}
              {visibleWorks < work.length && (
                <button
                  className="fontmed absolute laptop:-bottom-20 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-redeclic text-white"
                  onClick={loadMoreWorks}
                >
                  View More
                </button>
              )}
            </div>
          ) : (
            <></>
          )} */}
          {section === "work" ? (
            <div className="flex gap-10 mb-10">
              {/* Create the columns dynamically */}
              {Array.from({ length: numColumns }).map((_, colIndex) => (
                <div className="flex-1 space-y-4" key={colIndex}>
                  {/* Distribute items to columns */}
                  {work
                    .filter((_, index) => index % numColumns === colIndex)
                    .slice(0, Math.ceil(visibleWorks / numColumns))
                    .map((g) => (
                      <Link href={g.link}>
                        <motion.div
                          className="group mb-5"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          key={g.title}
                        >
                          <div className="relative group">
                            <div className="px-5 hidden laptop:group-hover:flex group absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                              <ViewMore />
                            </div>
                            <Image
                              className="opacity-80 group-hover:opacity-100 object-cover transition-all duration-300 transform"
                              alt={g.title}
                              src={g.image}
                              width={500}
                              height={500}
                            />
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <h1 className="fontmed group-hover:text-redeclic text-lg">
                              {g.title}
                            </h1>
                            <FaChevronRight className="group-hover:fill-redeclic" />
                          </div>
                          <p className="text-sm">
                            {t.home.workCategories[g.category]}
                          </p>
                        </motion.div>
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          ) : null}
          {section === "work" && visibleWorks < work.length && (
            <button
              className="fontmed my-10 uppercase mx-auto block px-6 py-2 bg-redeclic text-white"
              onClick={loadMoreWorks}
            >
              {t.Horizontalscroll.viewmorebtn}
            </button>
          )}

          {section === "client" ? (
            <div className="grid grid-cols-2 laptop:grid-cols-4 gap-6 px-5 laptop:px-20 justify-center items-center">
              {clients.map((client, index) => (
                <Link
                  href={`/portfolio/client/${client.title
                    .split(" ")
                    .join("_")
                    .toLocaleLowerCase()}`}
                  key={index}
                  className="group flex justify-center items-center pb-10 cursor-pointer"
                  onClick={() => setSelectedClient(client)}
                >
                  <Image
                    alt="img"
                    className="w-20 tablet:w-40 filter hover:scale-105 grayscale group-hover:filter-none transition-all duration-300"
                    width={1000}
                    height={1000}
                    src={client.image}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
          {/* Client Details Section */}
          {selectedClient && (
            <div className="grid grid-cols-3 items-center py-10">
              <div></div>
              <div className="flex flex-col gap-y-5 items-center">
                <Image
                  src={selectedClient.image}
                  alt="Selected Client"
                  width={300}
                  height={300}
                  className="mb-4 "
                />
                <h1 className="fontmed text-5xl py-3">
                  About {selectedClient.title}
                </h1>
                <p className="text-lg text-justify text-gray-700">
                  {selectedClient.description}
                </p>

                {work
                  .filter((k) => k.brand === selectedClient.title)
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
                          {/* {g.category} */}
                          {t.home.workCategories[g.category]}
                        </p>
                      </div>
                    );
                  })}
                <button
                  className="fontmed mt-20 px-4 py-2 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
                  onClick={() => setSelectedClient(null)}
                >
                  {t.clients.cta}
                </button>
              </div>
              <div></div>
            </div>
          )}
        </div>
        <div className="relative h-[470px] bg-white flex gap-y-7 flex-col justify-center items-center overflow-hidden">
          <div className="absolute cursor-not-allowed inset-0">
            <video
              src="/goat-HD.webm" // Replace with your video path in the public folder
              autoPlay
              loop
              muted
              playsInline
              className="object-cover pointer-events-none absolute bottom-0 w-full h-full"
            />
          </div>

          <div className="bg-black/30 w-screen h-[470px] absolute"></div>
          <h1 className="fontreg uppercase text-white text-center text-5xl z-10">
            {t.home.goat}
          </h1>
          <button className="z-10 border-2 uppercase text-white text-xl border-white hover:bg-redeclic hover:border-redeclic transition-all transform delay-100 px-5 py-3">
            <a href="/">{t.home.discover}</a>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}
type WorkCategory =
  | "entertainment"
  | "automotive"
  | "beverages"
  | "automotiveMaintenance"
  | "deliveryService";
type WorkItem = {
  title: string;
  image: string;

  category: WorkCategory;
  link: string;
  brand: string;
};

const work: WorkItem[] = [
  {
    title: "L'Clicka Dialna",
    image: "/AboutUs/ClickaDialna.jpg",
    category: "entertainment",
    link: "/portfolio/project/clickadialna",
    brand: "L'Clicka Dialna",
  },
  {
    title: "Porsche Festival 2024",
    image: "/Porschefestival/Slider_porsche_desktop.webp",
    category: "automotive",

    link: "/portfolio/project/porschefestival",
    brand: "Porsche Morocco",
  },

  {
    title: "Feel the spirit of morocco",
    image: "/AboutUs/CasablancaBeer.jpg",
    category: "beverages",
    link: "/portfolio/project/casablancabeer",
    brand: "Casablanca beer",
  },

  {
    title: "SEAT Attitude",
    image: "/Seat/Slider.jpg",
    category: "automotive",

    link: "/portfolio/project/seat",
    brand: "SEAT Morocco",
  },
  {
    title: "Fast Pro",
    image: "/AboutUs/FastPro.webp",
    category: "automotiveMaintenance",
    link: "/portfolio/project/fastpro",
    brand: "Fast Pro",
  },
  {
    title: "Aïn Ifrane",
    image: "/Ainifrane/Slider_ifran_desktop.webp",
    category: "beverages",
    link: "/portfolio/project/ainifrane",
    brand: "Aïn Ifrane",
  },
  {
    title: "Express Relais",
    image: "/Expressrelais/ExpressRelais.webp",
    category: "deliveryService",
    link: "/portfolio/project/expressrelais",
    brand: "Express Relais",
  },
  {
    title: "Cupra",
    image: "/Cupra/Slider_cupra_desktop.webp",
    category: "automotive",
    link: "/portfolio/project/cupra",
    brand: "Cupra",
  },
  {
    title: "Flag Spéciale Original",
    image: "/FSO/fso-cover.webp",
    category: "beverages",
    link: "/portfolio/project/flagspecialeoriginal",
    brand: "Flag Speciale Original",
  },

  {
    title: "VW Cinema",
    image: "/VW/slider-desktop.webp",
    category: "automotive",
    link: "/portfolio/project/vw",
    brand: "VW Cinema",
  },
];
