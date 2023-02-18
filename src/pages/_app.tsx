import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-vertical-timeline-component/style.min.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider as ReduxProvider } from "react-redux";
import { Navbar } from "@/common/components";
import store from "@/modules/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <div className="relative">
        <Navbar />
        <div className="h-16" />
        <Component {...pageProps} />
      </div>
    </ReduxProvider>
  );
}
