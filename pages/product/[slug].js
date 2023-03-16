import React, { useState, useEffect, useRef } from "react";
import { client, urlFor } from "@/lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "@/components";
import { useStateContext } from "../../context/StateContext";
import { render } from "react-dom";
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, videoFile, _id } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setshowCart, setqty } = useStateContext();
  const [opacity, setOpacity] = useState(1);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  const handleBuyNow = () => {
    onAdd(product, qty);
    setshowCart(true);
  };
  const [videoUrl, setVideoUrl] = useState("");
  const getVideoStyle = (opacity) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    outline: "none",
    cursor: "pointer",
    transition: "opacity 0.3s ease-in-out",
    opacity: opacity,
  });
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const video = videoRef.current;
        const isVisible =
          entries[0].isIntersecting && entries[0].intersectionRatio >= 0.5;

        if (video) {
          if (isVisible) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      { threshold: [0, 0.5, 1] }
    );

    const observer = observerRef.current;
    const video = videoRef.current;

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <h3>Price</h3>
          <p className="price">${price}</p>

          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {product.generatedVideoURL ? (
        <div>
          <video
            ref={videoRef}
            className="video-container"
            style={getVideoStyle(opacity)}
            onMouseEnter={() => setOpacity(0.8)}
            onMouseLeave={() => setOpacity(1)}
            src={product.generatedVideoURL.current}
            controls
          />
        </div>
      ) : null}
      <div className="maylike-products-wrapper ">
        <h2 className="font-best">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container  track">
            {products.map((item) => {
              if (product._id !== item._id)
                return <Product key={item._id} product={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
