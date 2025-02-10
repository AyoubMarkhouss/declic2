import Head from "next/head";
import { useState } from "react";

import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";
import Footer from "~/components/footer";
import Herovideo from "~/components/herovideo";
import Sheepsection from "~/components/sheepsection";
import Header from "~/components/header-burger";
import LanguageSwitcher from "~/components/LanguageSwitcher";

export const metadata = {
  title: "Declic Agency | Home",
  description:
    "Declic Agency redefines communication in Morocco with fearless creativity and strategic brilliance. We craft bold, memorable campaigns that captivate audiences and drive success.",
  icons: {
    icon: "/declic-red.png",
  },
};
export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Head>
        <title>Declic Agency | Home</title>
        <meta
          name="description"
          content="Declic Agency redefines communication in Morocco with fearless creativity and strategic brilliance. We craft bold, memorable campaigns that captivate audiences and drive success."
        />

        <link rel="icon" href="/declic-red.png" />
      </Head>
      <div>
        <Header open={open} setOpen={setOpen} />
        <div className={`${open ? "" : "block"}`}>
          <Herovideo />
          <Sheepsection />
          <HorizontalScrollCarousel />
          <Footer />
        </div>
      </div>
    </div>
  );
}
