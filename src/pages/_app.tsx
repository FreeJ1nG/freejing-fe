import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-vertical-timeline-component/style.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Navbar } from "@/common/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-16" />
      <Component {...pageProps} />
    </div>
  );
}
