import React from "react";
import Head from "next/head";
import { Footer, Navbar } from ".";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="layout">
        <title>THE AUDIO SHOP</title>

        <Head />
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
