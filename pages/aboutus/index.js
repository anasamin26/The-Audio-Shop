import React from "react";
import { client, urlFor } from "@/lib/client";
const index = ({ bannerData }) => {
  return (
    <>
      <div className="aboutus-container">
        <img
          src={urlFor(bannerData[1].image)}
          alt="headphones"
          className="aboutus-container-image"
        />
        <h2>PEOPLE ARENʼT HEARING ALL THE MUSIC</h2>
        <p>
          The Audio Shop is a leading audio brand founded in 2023 by Anas
          Amin.Through its family of premium consumer headphones, earphones and
          speakers, The Audio Shop has introduced an entirely new generation to
          the possibilities of premium sound entertainment. The brand’s
          continued success helps bring the energy, emotion and excitement of
          playback in the recording studio back to the listening experience for
          music lovers worldwide.
        </p>
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { bannerData },
  };
};
export default index;
