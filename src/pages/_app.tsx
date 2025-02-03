import type { AppProps } from "next/app";

import "~/styles/globals.css";
import { cn } from "~/utils";
import { instrumentSans } from "../components";
import { ReactLenis } from "../utils/Lenis";
import { appWithTranslation } from "next-i18next";
import { TranslationProvider, useTranslation } from "~/context/TranslationContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
