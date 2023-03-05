import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillAudio } from "react-icons/ai";
import { Cart } from ".";
import { useStateContext } from "@/context/StateContext";
import { BsHeadphones } from "react-icons/bs";
const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
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
    </div>
  );
};

export default Navbar;
