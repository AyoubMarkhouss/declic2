
import { useTranslation } from "react-i18next";

export default function Sheepsection() {
 
 const { t, i18n } = useTranslation("common"); // Destructure both t and i18n

  return (
    <div className="relative h-screen bg-white flex overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/goat-HD.webm" // Replace with your GIF path in the public folder
          autoPlay
          loop
          muted
          className="object-cover cursor-not-allowed absolute bottom-0 w-full h-full "
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-4 tablet:gap-x-5 px-5 tablet:px-20">
        {/* Left Column: Heading */}
        <div className="col-span-1 pt-5 tablet:pt-20">
          <h1 className="text-5xl tablet:text-5xl text-center desktop:text-6xl laptop:text-start absolute z-20 font-black leading-tight tracking-tight">
            Rise With The
            <span className="pl-2 text-redeclic">
              GOATs <br /> Of Advertising
            </span>
          </h1>
          
        </div>

        {/* Middle Column: Sheep GIF */}
        <div className="col-span-2 relative "></div>

        {/* Right Column: Paragraphs */}
        <div className="col-span-1 z-30 text-white text-justify laptop:text-start text-md flex flex-col justify-center">
          <p className=" desktop:text-2xl">
            At <span className=" text-redeclic">Declic Agency</span>, we don't
            do things halfway. With boundless creativity and a healthy dose of
            humor, we've earned our place as the GOATs (Greatest of All Time) of
            communication in Morocco. <br /> Our secret? Bold ideas, memorable
            campaigns, and a clear vision: turning your projects into true
            successes. We combine originality and strategy to craft concepts
            that resonate and captivate. Stop looking for the spark...
            you've found it.
          </p>
        </div>
        <div className="block laptop:hidden bg-black/30 absolute h-full w-full"></div>
      </div>
    </div>
  );
}
