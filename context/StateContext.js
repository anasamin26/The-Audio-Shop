import product from "@/sanity_ecommerce/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setshowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantities, settotalQuantities] = useState(0);
  const [qty, setqty] = useState(1);
  let foundProduct;
  let index;
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id == product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    settotalPrice(
      (previousTotalPrice) =>
        previousTotalPrice - foundProduct.price * foundProduct.quantity
    );
    settotalQuantities(
      (previousTotalQuantities) =>
        previousTotalQuantities - foundProduct.quantity
    );
    setcartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id == id);
    index = cartItems.findIndex((product) => product._id == id);

    if (value === "inc") {
      foundProduct.quantity += 1;
      const newCartItems = cartItems;
      setcartItems([...newCartItems]);
      settotalPrice(
        (previousTotalPrice) => previousTotalPrice + foundProduct.price
      );
      settotalQuantities(
        (previousTotalQuantities) => previousTotalQuantities + 1
      );
    } else if (value == "dec") {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        const newCartItems = cartItems;
        setcartItems([...newCartItems]);
        settotalPrice(
          (previousTotalPrice) => previousTotalPrice - foundProduct.price
        );
        settotalQuantities(
          (previousTotalQuantities) => previousTotalQuantities - 1
        );
      }
    }
  };
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    settotalPrice(
      (previousTotalPrice) => previousTotalPrice + product.price * quantity
    );
    settotalQuantities(
      (previousTotalQuantities) => previousTotalQuantities + quantity
    );
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
      });
      setcartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setcartItems([...cartItems, { ...product }]); //adding update product
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const incQty = () => {
    setqty((previousQty) => previousQty + 1);
  };
  const decQty = () => {
    setqty((previousQty) => {
      if (previousQty - 1 < 1) {
        return 1;
      }
      return previousQty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setshowCart,
        toggleCartItemQuantity,
        onRemove,
        settotalQuantities,
        settotalPrice,
        setcartItems,
        setqty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
