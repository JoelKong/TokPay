//Type Imports
import type { AppProps } from "next/app";

//Imports
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  return <Component {...pageProps} />;
}
