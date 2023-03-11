import React from "react";
import Head from "next/head";
import { Footer, Navbar } from ".";
const Layout = ({ children }) => {
  return (
    <html>
      <body>
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
      </body>
    </html>
  );
};

export default Layout;
