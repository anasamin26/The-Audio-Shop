import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runNaturalConfetti } from "../lib/utils";
import { useStateContext } from "../context/StateContext";
const Success = () => {
  const { setcartItems, settotalPrice, settotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setcartItems([]);
    settotalPrice(0);
    settotalQuantities(0);
    runNaturalConfetti();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You for your order!</h2>
        <p className="email-msg">Check your email inbox for the reciept.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:anasamin26@gmail.com">
            anasamin26@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
