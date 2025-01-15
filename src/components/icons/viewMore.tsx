import React from "react";
import { cn } from "~/utils";

const ViewMore = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(
        "fill-white bg-[#fff] size-28 rounded-full p-4 animate-spin-slow",
        className
      )}
      viewBox="0 0 100 100"
      overflow="visible"
    >
      <path
        id="curve-wnxkz4"
        d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
        stroke-width="none"
        fill="transparent"
      ></path>
      <text>
        <textPath
          className="fill-redeclic text-[19.5px] font-semibold "
          href="#curve-wnxkz4"
          startOffset="0"
          dominant-baseline="Central"
        >
          ✦ VIEW ✦ MORE ✦ VIEW ✦ MORE
        </textPath>
      </text>
    </svg>
  );
};

export default ViewMore;
