import { useTranslation } from "../context/TranslationContext";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Sheepsection() {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen bg-white flex overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/goat-HD.webm" // Replace with your GIF path in the public folder
          autoPlay
          loop
          muted
          className="object-cover pointer-events-none cursor-not-allowed absolute bottom-0 w-full h-full "
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-4 tablet:gap-x-5 px-5 tablet:px-20">
        {/* Left Column: Heading */}
        <div className="col-span-1 pt-5 tablet:pt-20">
          {/* <h1 className=" text-5xl tablet:text-5xl text-center desktop:text-6xl laptop:text-start absolute z-20 font-black leading-tight tracking-tight">
            Rise With The
            <span className="pl-2 text-redeclic">
              GOATs <br /> Of Advertising
            </span>
          </h1> */}
          <h1 className=" text-5xl tablet:text-5xl text-center desktop:text-6xl laptop:text-start absolute z-20 font-black leading-tight tracking-tight">
            {t.Sheepsection.t1}
            <span className="pl-2 text-redeclic">
              {t.Sheepsection.t2} <br /> {t.Sheepsection.t3}
            </span>
          </h1>
        </div>

        {/* Middle Column: Sheep GIF */}
        <div className="col-span-2 relative "></div>

        {/* Right Column: Paragraphs */}
        <div className="col-span-1 z-30 text-white text-justify  text-md flex flex-col justify-center">
          <p className=" desktop:text-2xl">{t.Sheepsection.description}</p>
        </div>
        <div className="block laptop:hidden bg-black/30 absolute h-full w-full"></div>
      </div>
    </div>
  );
}
