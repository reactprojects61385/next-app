import "../styles/globals.css";
import Layout from "./components/layout";

import { Inter } from "@next/font/google";

const defaultFont = Inter({
  subsets: ["latin"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout font={defaultFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
