import React from "react";
import { useTranslation } from "~/context/TranslationContext";
import { cn } from "~/utils";

const ViewMore = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
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
        className="hidden"
      ></path>
      <text>
        <textPath
          className="fill-redeclic shrink-0 laptop:text-[19.5px] font-semibold "
          href="#curve-wnxkz4"
          startOffset="0"
          dominant-baseline="Central"
        >
          {t.Horizontalscroll.viewmoreicon}
        </textPath>
      </text>
    </svg>
  );
};

export default ViewMore;
