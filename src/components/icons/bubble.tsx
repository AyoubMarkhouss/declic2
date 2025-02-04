import * as React from "react";

const Bubble = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    id="Regular"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5px"
      d="M12 3.11c-5.52 0-10 3.58-10 8a7.28 7.28 0 0 0 3 5.71 2.76 2.76 0 0 1-2 3.43s-.32.41.47.56c3.19.58 5.78-2 5.78-2v-.05a12.4 12.4 0 0 0 2.76.31c5.52 0 10-3.58 10-8S17.52 3.11 12 3.11"
    ></path>
  </svg>
);

export default Bubble;
