import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "@/styles/globals.scss";
import "@/styles/normalize.css";

const TTSmalls = localFont({
  src: [
    // {
    //   src: "",
    //   weight: "400",
    // },
    {
      path: "../fonts/TTSmalls-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/TTSmalls-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../fonts/TTSmalls-Bold.woff2",
      weight: "700",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={TTSmalls.className}>
      <Component {...pageProps} />
    </div>
  );
}
