import type { AppProps } from "next/app";

import "~/styles/globals.css";
import { cn } from "~/utils";
import { instrumentSans } from "../components";
import { ReactLenis } from "../utils/Lenis";
import { appWithTranslation } from "next-i18next";
import {
  TranslationProvider,
  useTranslation,
} from "~/context/TranslationContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const metadata = {
  title: "Declic Agency | Home",
  description:
    "Declic Agency redefines communication in Morocco with fearless creativity and strategic brilliance. We craft bold, memorable campaigns that captivate audiences and drive success.",
  icons: {
    icon: "/declic-red.png",
  },
};
function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <TranslationProvider>
        <div className={cn(instrumentSans.variable, "title")}>
          <Component {...pageProps} />
        </div>
      </TranslationProvider>
    </ReactLenis>
  );
}

export default appWithTranslation(App);
