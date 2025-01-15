import { motion } from "framer-motion";

import ViewMore from "~/components/icons/viewMore";

const OurWork = () => {
  return (
    <div className="px-5 tablet:px-20 ">
      <div className="items-center flex relative ">
        <p style={{ fontWeight: 700 }} className="text-redeclic bigmobile:text-5xl tablet:text-9xl pb-5">
          OUR <br /> WORK
        </p>
      </div>
      <div className="bigmobile:pt-7 tablet:pt-10 laptop:pt-10 desktop:pt-10 border-t-2 border-black ">
        <div className="grid tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 gap-5">
          {ourWork.map((g) => (
            <div key={g.label} className="w-full relative group">
              <div className="px-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex hidden z-[999999]">
                <ViewMore />
              </div>
              <div className="overflow-hidden relative object-contain group rounded-[34px] border-2 border-black">
                <motion.img
                  whileHover={{
                    scale: 1.07,
                    transition: { ease: "linear" },
                  }}
                  className="object-cover hover:brightness-50 object-bottom tablet:h-96 tablet:w-full laptop:h-96 desktop:h-[600px]  laptop:w-full desktop:w-full ]"
                  height={500}
                  width={500}
                  src={g.image}
                  alt={g.label}
                />
                <div className="absolute text-white space-y-2 group-hover:bottom-5 -bottom-24 group-hover:left-5 z-10">
                  <p className="text-5xl font-semibold">{g.label}</p>
                  <p className="text-lg">{g.category}</p>
                </div>
                {/* <div className="bg-black/45 top-0 left-0 hidden group-hover:flex absolute h-[36.321rem] w-[48.429rem]" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;

const ourWork = [
  {
    image:
      "https://framerusercontent.com/images/yQ4k6JD132a26IY2bDsgPSPLOk.png",
    label: "Lumina Eateries",
    category: "Web Design",
  },
  {
    image:
      "https://framerusercontent.com/images/JYd9ADoIpV7qaugNxyHwJJJaNEg.jpg",
    label: "UrbanCraft",
    category: "Branding Visuals",
  },
  {
    image:
      "https://framerusercontent.com/images/84z1MWLgI3dH3znIReOyHpWXOtw.png",
    label: "FitBuddy",
    category: "App design",
  },
  {
    image:
      "https://framerusercontent.com/images/y8F9y9MaoCfl6fZANabyKDa5EoM.png",
    label: "PetPaws+",
    category: "Brand Identity",
  },
  {
    image: "https://framerusercontent.com/images/nBxxAJnJo5aaLm11Fc5dxeSd0.png",
    label: "StellarBloom",
    category: "Brand Identity",
  },
  {
    image: "https://framerusercontent.com/images/j3T3FBO8k5tlkbrH5xodOITA.png",
    label: "Goulburn valley",
    category: "Web Design",
  },
];
