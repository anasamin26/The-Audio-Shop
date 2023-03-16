import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from ".";
import { useStateContext } from "@/context/StateContext";
import { BsHeadphones } from "react-icons/bs";
const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useStateContext();
  const navigationRoutes = ["home", "aboutus", "products"];
  const router = useRouter();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsNavbarVisible(currentScrollPos < 50 || isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const [mode, setMode] = useState("dark");

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <nav
      className={`navbar ${
        isNavbarVisible ? "navbar--visible" : "navbar--hidden"
      }`}
    >
      <div className="navbar__logo">
        <Link href="/">
          <BsHeadphones />
        </Link>
      </div>
      <button className="navbar__toggle" onClick={handleToggleClick}>
        ☰
      </button>
      <ul className={`navbar__list ${isMenuOpen ? "navbar__list--open" : ""}`}>
        <li className="navbar__item">
          <Link href="/aboutus" className="navbar__link">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/products" className="navbar__link">
            Shop
          </Link>
        </li>
        <li className="navbar__item">
          <DarkModeToggle
            mode={mode}
            dark="Dark"
            light="Light"
            className="bg-black dark:bg-black hover:bg-black dark:hover:bg-black transition-all duration-100 text-white dark:text-black px-8 py-2 text-2xl md:text-4xl rounded-lg text-3xl text-pink-500 absolute bottom-32"
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackC
            olor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              theme == "dark" ? setTheme("light") : setTheme("dark");
              setMode(mode);
            }}
          />
        </li>
        <li className="navbar__item">
          <div className="navbar-rigth">
            <button
              type="button"
              className="cart-icon"
              style={{
                justifyContent: "center",
              }}
              onClick={() => setshowCart(true)}
            >
              <AiOutlineShopping />
              <span className="card-item-qty">{totalQuantities}</span>
            </button>
          </div>
          {showCart && <Cart />}
        </li>
      </ul>
    </nav>
    /* <div className="navbar-container">
        <p
          className="logo"
          style={{
            justifyContent: "left",
          }}
        >
          <Link href="/">
            <BsHeadphones />
          </Link>
        </p>

        <div className="logo">
          <Link href="/aboutus">ABOUT US</Link>
        </div>
        <div className="logo">
          <Link href="/products">SHOP</Link>
        </div>

        <div className="navbar-rigth">
          <button
            type="button"
            className="cart-icon"
            style={{
              justifyContent: "center",
            }}
            onClick={() => setshowCart(true)}
          >
            <AiOutlineShopping />
            <span className="card-item-qty">{totalQuantities}</span>
          </button>
        </div>
        {showCart && <Cart />}
      </div> */
  );
};

export default Navbar;
