import localFont from "next/font/local";

export const instrumentSans = localFont({
  src: [
    {
      path: "./../pages/fonts/instrument-sans-v1-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../pages/fonts/instrument-sans-v1-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../pages/fonts/instrument-sans-v1-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../pages/fonts/instrument-sans-v1-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-instrument-sans",
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "./../pages/fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../pages/fonts/InstrumentSerif-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-instrument-serif",
});
