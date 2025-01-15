import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import Footer from "~/components/footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "~/components/header-burger";
import { TextAnimate } from "~/components/ui/text-animate";
// import { useRouter } from "next/router";

export const clients = [
  {
    image: "/audi.png",
    title: "Audi",
    description:
      "Audi has been at the forefront of the automotive industry, delivering premium cars that combine luxury, technology, and performance. With a legacy of innovation, Audi continues to redefine the driving experience through advanced engineering and design.",
  },
  {
    image: "/seat.png",
    title: "SEAT",
    description:
      "SEAT is a Spanish automotive brand known for its youthful, dynamic, and affordable vehicles. Focusing on design, comfort, and cutting-edge technology, SEAT offers cars that resonate with drivers looking for reliability and style.",
  },
  {
    image: "/bently.png",
    title: "Bentley",
    description:
      "Bentley represents the pinnacle of luxury in the automotive world, blending exceptional craftsmanship with powerful performance. Each Bentley vehicle is a masterpiece, designed to deliver an unparalleled driving experience and unmatched sophistication.",
  },
  {
    image: "/porch.png",
    title: "Porsche",
    description:
      "Porsche is synonymous with sports car excellence, offering vehicles that boast unmatched precision, performance, and style. From racetracks to the open road, Porsche delivers a thrilling driving experience like no other.",
  },
  {
    image: "/fast.png",
    title: "Fast Auto",
    description:
      "Fast Auto is dedicated to creating vehicles that embody speed, agility, and innovation. Known for its commitment to high performance and cutting-edge technology, Fast Auto is a brand for those who crave excitement on the road.",
  },
  {
    image: "/Motul.png",
    title: "Motul",
    description:
      "Motul is a global leader in the development and production of high-performance motor oils and lubricants. With a strong presence in motorsports, Motul delivers products designed to maximize engine performance and longevity.",
  },
  {
    image: "/marjan.png",
    title: "Marjane",
    description:
      "Marjan is revolutionizing the retail landscape with a commitment to providing quality products at affordable prices. Known for its wide range of offerings, Marjan caters to customers seeking value without compromising on quality.",
  },
  {
    image: "/g4s.png",
    title: "G4S",
    description:
      "G4S is a global leader in integrated security solutions, providing services that ensure safety and peace of mind. With expertise in technology and risk management, G4S is a trusted partner for businesses and governments worldwide.",
  },
  {
    image: "/marina.png",
    title: "Marina shopping",
    description:
      "Marina specializes in creating luxurious waterfront living spaces that combine elegance with modern amenities. Known for its impeccable design and serene locations, Marina offers an unparalleled lifestyle by the water.",
  },
  {
    image: "/AlJabr.png",
    title: "Al Jabr",
    description:
      "AlJabr is a leader in mobility and engineering solutions, driving innovation in the automotive and industrial sectors. With a commitment to quality and sustainability, AlJabr is shaping the future of transportation and technology.",
  },
  {
    image: "/renaut.svg",
    title: "Renault",
    description:
      "Renault is a French automotive powerhouse known for its innovative designs and commitment to sustainability. From electric vehicles to stylish sedans, Renault continues to push the boundaries of what’s possible in modern mobility.",
  },
];
export default function Portfolio() {
  const searchParams = useSearchParams();
  // const router = useRouter();
  const section = searchParams.get("section");
  const [visibleWorks, setVisibleWorks] = useState(6); // Number of works visible initially
  const [selectedClient, setSelectedClient] = useState<{
    image: string;
    description: string;
    title: string;
  } | null>(null);

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
              className="fontbold pb-3 bigmobile:text-3xl text-center laptop:text-8xl desktop:text-9xl text-redeclic"
            >
              The Lab Of Creativity
            </TextAnimate>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center text-gray-500 text-sm tablet:text-md laptop:max-w-[70%] pb-5"
            >
              Chez Declic Agency, nous avons eu le privilège de travailler avec
              des marques et des clients qui partagent notre vision audacieuse
              de la communication. Chaque projet est une opportunité de
              repousser les limites, d’innover et de créer des
              campagnes mémorables.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex gap-x-5 pb-5"
            >
              <Link
                href={"?section=work"}
                className={`px-4 text-2xl py-2 rounded ${
                  section === "work" ? "text-redeclic" : "text-black"
                }`}
              >
                Work
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
          {section === "work" ? (
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
                          {g.category}
                        </p>
                        <p className="text-xs group-hover:scale-105 transition-all duration-300 transform text-gray-400">
                          {g.date}
                        </p>
                      </div>
                    );
                  })}
                <button
                  className="fontmed mt-20 px-4 py-2 bg-redeclic hover:scale-95 transition-all duration-300 text-white"
                  onClick={() => setSelectedClient(null)}
                >
                  Back to Clients
                </button>
              </div>
              <div></div>
            </div>
          )}
        </div>
        <div className="relative h-[470px] bg-white flex gap-y-7 flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="/goat-HD.mp4" // Replace with your GIF path in the public folder
              autoPlay
              loop
              muted
              className="object-cover absolute bottom-0 w-full h-full "
            />
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-x-5  px-20">
            
            <div className="col-span-1 pt-20">
              <h1 className="text-5xl absolute z-20 font-black leading-tight tracking-tight">
                WHEN THE WORLD <br /> <span className="">ZIGS,</span>{" "}
                <span className="text-redeclic">ZAG.</span>
              </h1>
            </div>

            
            <div className="col-span-2 relative "></div>

           
            <div className="col-span-1 z-30 text-white text-md flex flex-col justify-center">
              <p className="">
                It’s easy to go with the grain, stick within the category codes
                and make your brand as frictionless as possible. It feels safe.
                And in an uncertain world, safety feels like a sensible
                strategy.
              </p>
              <p className="">
                But we believe the greatest risk is to stand still and fail to
                stand out. It’s only the bold that get noticed and the brave
                that get loved today. From your purpose to your point of sale,
                it’s difference that will pay dividends. That is our belief, and
                this is our promise: We will never offer you business as usual.
                We will always build you a brand less ordinary – and far more
                powerful.
              </p>
              <p className="text-black font-bold ">Welcome to BBH.</p>
            </div>
          </div> */}
          <div className="bg-black/30 w-screen h-[470px] absolute"></div>
          <h1 className="fontreg text-white text-center text-5xl z-10">
            THE GOAT OF MOROCCO
          </h1>
          <button className="z-10 border-2 text-white text-xl border-white hover:bg-redeclic hover:border-redeclic transition-all transform delay-100 px-5 py-3">
            <a href="/">Discover</a>
          </button>
        </div>
        <Footer />
      </div>
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
