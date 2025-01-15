
import type { AppProps } from "next/app";

import "~/styles/globals.css";
import { cn } from "~/utils";
// import { useBearStore } from "~/utils/zustand/hoveredEffect";
import { instrumentSans } from "../components";
import { ReactLenis } from "../utils/Lenis";

// type MousePosition = {
//   x: number;
//   y: number;
// };
export default function App({ Component, pageProps }: AppProps) {
  // const [mousePosition, setMousePosition] = useState<MousePosition>({
  //   x: 0,
  //   y: 0,
  // });

  // const { cursorVariant } = useBearStore();
  // console.log(cursorVariant);
  // useEffect(() => {
  //   const mouseMove = (e: MouseEvent) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 8,
  //     y: mousePosition.y - 8,
  //   },
  //   text: {
  //     height: 50,
  //     width: 50,
  //     x: mousePosition.x - 25,
  //     y: mousePosition.y - 25,
  //     backgroundColor: "#e404263b",
  //     mixBlendMode: "difference" as const,
  //   },
  // };

  return (
    <ReactLenis root>
      <div className={cn(instrumentSans.variable, "title")}>
        <Component {...pageProps} />
        {/* <motion.div
          className="cursor z-[999999]"
          variants={variants}
          animate={cursorVariant}
        ></motion.div> */}
      </div>
    </ReactLenis>
  );
}
