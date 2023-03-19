import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar } from "../components";
import Signin from "./auth/signin";

const index = ({ products, bannerData }) => {
  const { data: session } = useSession();

  return (
    <>
      <div>
        {session && session.user ? (
          <>
            <header>
              <Navbar />
            </header>
            <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

            <div className="products-heading">
              <h2 className="font-best">Best Selling Products</h2>
            </div>
            <div className="products-container">
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>

            <FooterBanner footerbanner={bannerData.length && bannerData[0]} />
          </>
        ) : (
          <Signin />
        )}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type=="product" && inDemand=="yes"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
export default index;
