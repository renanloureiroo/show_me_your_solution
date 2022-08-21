import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Header } from "./components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className="bg-blur  bg-no-repeat  h-screen bg-cover md:bg-bottom">
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
