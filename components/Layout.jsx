import React from "react";
import Head from "next/head";
import { Footer, Navbar } from ".";
import { ThemeProvider } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import Signin from "../pages/auth/signin";
const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div>
      {session && session.user ? (
        <>
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
        </>
      ) : (
        <>
          <div>
            <Signin />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
