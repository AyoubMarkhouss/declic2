import React from "react";
import { instrumentSerif } from "~/components";
import { cn } from "~/utils";

const Craft = () => {
  return (
    <div className="h-screen bg-white rounded-[50px]">
      <div className="flex justify-center items-center h-full">
        <p
          style={{ fontWeight: 500 }}
          className="text-redeclic text-[11.75rem] text-center leading-none"
        >
          We craft <br />
          digital{" "}
          <span className={cn(instrumentSerif.variable, "unique italic")}>
            designs
          </span>
        </p>
      </div>
    </div>
  );
};

export default Craft;
