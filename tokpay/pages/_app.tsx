//Type Imports
import type { AppProps } from "next/app";

//Imports
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
