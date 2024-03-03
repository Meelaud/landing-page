import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { MantineProvider } from "@mantine/core";
import HeroHeader from "@/components/HeroHeader/HeroHeader";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,300&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <HeroHeader />
      <Component {...pageProps} />
    </MantineProvider>
  )
}
