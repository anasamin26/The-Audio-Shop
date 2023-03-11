import React, { useState, useEffect } from "react";
import { Product } from "@/components";
import { client } from "@/lib/client";
const index = ({
  Wiredheadphone,
  Wirelessheadphone,
  Wiredearphone,
  Wirelessearphone,
  Bluetoothspeaker,
}) => {
  // const [wirelesshead, setwirelesshead] = useState(false);
  // const [wirelessear, setwirelessear] = useState(false);
  // const [wiredear, setwiredear] = useState(false);
  // const [wiredhead, setwiredhead] = useState(false);
  // const [speaker, setspeaker] = useState(false);
  // useEffect(() => {
  //   Wirelessheadphone.length > 0 ? setwirelesshead(true) : "";
  //   Wirelessearphone.length > 0 ? setwirelessear(true) : setwirelessear(false);
  //   Wiredearphone.length > 0 ? setwiredear(true) : setwiredear(false);
  //   Wiredheadphone.length > 0 ? setwiredhead(true) : setwiredhead(false);
  //   Bluetoothspeaker.length > 0 ? setspeaker(true) : setspeaker(false);
  // }, []);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", reveal);
  }
  return (
    <>
      <div className="products-container">
        <div className="products-heading ">
          <h2 className="font-best">Wireless Earbuds</h2>
        </div>
        <div className="products-container ">
          {Wirelessearphone?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>

        <div className="products-heading ">
          <h2 className="font-best">Wireless Headphones</h2>
        </div>
        <div className="products-container reveal ">
          {Wirelessheadphone?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="products-heading ">
          <h2 className="font-best">Bluetooth Speaker</h2>
        </div>
        <div className="products-container reveal ">
          {Bluetoothspeaker?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="products-heading ">
          <h2 className="font-best">Classic Earbuds</h2>
        </div>
        <div className="products-container reveal ">
          {Wiredearphone?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className="products-heading ">
          <h2 className="font-best">Classic Headphones</h2>
        </div>
        <div className="products-container reveal ">
          {Wiredheadphone?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
export const getServerSideProps = async () => {
  const wiredheadphone = '*[_type=="product"&& category=="wired-headphone"]';
  const wirelessheadphone =
    '*[_type=="product"&& category=="wireless-headphone"]';
  const wiredearphone = '*[_type=="product"&& category=="wired-earphone"]';
  const wirelessearphone =
    '*[_type=="product"&& category=="wireless-earphone"]';
  const bluetoothspeaker =
    '*[_type=="product"&& category=="bluetooth-speaker"]';

  const Wiredheadphone = await client.fetch(wiredheadphone);
  const Wirelessheadphone = await client.fetch(wirelessheadphone);
  const Wiredearphone = await client.fetch(wiredearphone);
  const Wirelessearphone = await client.fetch(wirelessearphone);
  const Bluetoothspeaker = await client.fetch(bluetoothspeaker);

  return {
    props: {
      Wiredheadphone,
      Wirelessheadphone,
      Wiredearphone,
      Wirelessearphone,
      Bluetoothspeaker,
    },
  };
};
