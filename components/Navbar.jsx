import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from ".";
import { useStateContext } from "@/context/StateContext";
import { BsHeadphones } from "react-icons/bs";
const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">THE AUDIO SHOP</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setshowCart(true)}
      >
        <AiOutlineShopping />
        <span className="card-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
