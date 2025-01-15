import { Html, Head, Main, NextScript } from "next/document";
import { ReactLenis } from "../utils/Lenis";
export default function Document() {
  return (
    <Html lang="en">
      <ReactLenis>
        <Head />

        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </ReactLenis>
    </Html>
  );
}
