import React from "react";
import Link from "next/link";
const error = () => {
  return (
    <>
      <div className="center">
        <h1>Some Error Has Occured</h1>
        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
};

export default error;
