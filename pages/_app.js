import "../styles/globals.css";
import React from "react";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
  );
}
