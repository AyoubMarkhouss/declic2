import Image from "next/image";
import React from "react";

const Herovideo = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden ">
      {/* Video Background */}
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover "
        src="/declic-glitched.gif"
        alt="dd"
        width={2500}
        height={2500}
      />
      {/* Content Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="fontmed text-5xl md:text-7xl">
          It is what it is my broda
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          Create something amazing with us.
        </p>
      </div> */}

      {/* Scroll for More */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm uppercase tracking-wide mb-4">
            Scroll for more
          </span>
          {/* Mouse Icon */}
          <div className="relative w-8 h-14 border-2 border-white rounded-full flex items-center justify-center">
            <div className="absolute w-2 h-2 bg-white rounded-full animate-move-cursor"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herovideo;
