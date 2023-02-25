//Imports
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  return <Component {...pageProps} />;
}
