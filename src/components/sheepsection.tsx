

export default function Sheepsection() {
  return (
    <div className="relative h-screen bg-white flex overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/goat-HD.mp4" // Replace with your GIF path in the public folder
          autoPlay
          loop
          muted
          className="object-cover absolute bottom-0 w-full h-full "
        />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-4 tablet:gap-x-5 px-5 tablet:px-20">
        {/* Left Column: Heading */}
        <div className="col-span-1 pt-5 tablet:pt-20">
          <h1 className="text-5xl tablet:text-5xl text-center laptop:text-start absolute z-20 font-black leading-tight tracking-tight">
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
          <p className="">
            Chez <span className="font-bold text-redeclic">Declic Agency</span> , on ne fait pas les choses à
            moitié. Avec une créativité sans limite et une bonne dose d’humour,
            on s’est imposés comme les GOAT (Greatest Of All Time) de la
            communication au Maroc.
          </p>
          <p className="">
            Notre recette ? Des idées audacieuses, des campagnes qui marquent et
            une vision claire : transformer vos projets en véritables succès. On
            allie originalité et stratégie pour créer des concepts qui résonnent
            et captivent. Ne cherchez pas le déclic... vous l’avez
            trouvé (en gras).
          </p>
          
        </div>
        <div className="block laptop:hidden bg-black/30 absolute h-full w-full"></div>
      </div>
    </div>
  );
}
