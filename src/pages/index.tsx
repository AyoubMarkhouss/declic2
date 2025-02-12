import Head from "next/head";
import { useState } from "react";

import HorizontalScrollCarousel from "~/components/horizontalScrollCarousel";
import Footer from "~/components/footer";
import Herovideo from "~/components/herovideo";
import Sheepsection from "~/components/sheepsection";
import Header from "~/components/header-burger";
import LanguageSwitcher from "~/components/LanguageSwitcher";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
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
