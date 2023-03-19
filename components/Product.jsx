import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const Product = ({ product: { image, name, slug, price, details } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        {/* <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div> */}
        <div className="wrapper">
          <div className="card">
            <div className="front">
              <h1>{name}</h1>
              <p className="price">${price}</p>
              <div className="img-wrapper">
                <img src={urlFor(image && image[0])} width={250} height={250} />
              </div>
            </div>

            <div className="right-move">
              <h2>Details</h2>
              {details}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
