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

  const description =
    "Declic Agency redefines communication in Morocco with fearless creativity and strategic brilliance. We craft bold, memorable campaigns that captivate audiences and drive success.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Declic Agency | Home",
    description: description,
    url: "https://declicagency.com",
    image: "/declic-red.png",
    publisher: {
      "@type": "Organization",
      name: "Declic Agency",
      logo: {
        "@type": "ImageObject",
        url: "/declic-red.png",
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Declic Agency | Home</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/declic-red.png" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Declic Agency | Home" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/declic-red.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://declicagency.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Header open={open} setOpen={setOpen} />
      <div className={`${open ? "" : "block"}`}>
        <Herovideo />
        <Sheepsection />
        <HorizontalScrollCarousel />
        <Footer />
      </div>
    </div>
  );
}
