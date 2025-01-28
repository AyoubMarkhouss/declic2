import type { AppProps } from "next/app";

import "~/styles/globals.css";
import { cn } from "~/utils";
import { instrumentSans } from "../components";
import { ReactLenis } from "../utils/Lenis";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <div className={cn(instrumentSans.variable, "title")}>
        <Component {...pageProps} />
      </div>
    </ReactLenis>
  );
}

export default appWithTranslation(App);
