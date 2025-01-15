import React from "react";

const Services = () => {
  return (
    <div className="pt-32 px-20">
      <div className="items-center flex relative">
        <p style={{ fontWeight: 700 }} className="text-9xl text-redeclic pb-5">
          OUR <br /> SERVICES
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-7xl mx-auto">
        {services.map((b, i) => (
          <div
            key={b}
            className="border-t-2 border-black   py-20 flex items-start w-full"
          >
            <p>(0{i + 1})</p>
            <p className=" text-center text-9xl grow">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

const services = ["UX/UI DESIGN", "BRANDING", "App Design"];
