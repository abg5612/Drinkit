"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  // User details
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("Email");
  const [contact, setContact] = useState("Contact");
  const [address, setAddress] = useState("Location not available");

  // Add to cart function
  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setIsCartOpen(true);
  };


const addToWishlist = (item) => {
  setWishlist((prev) => {
    const exists = prev.some(
      (product) => product.id === item.id
    );

    if (exists) {
      return prev.filter(
        (product) => product.id !== item.id
      );
    }

    return [...prev, item];
  });
};

  return (
  <CartContext.Provider
  value={{
    cart,
    setCart,
    addToCart,

    wishlist,
    addToWishlist,
    setWishlist,

    isCartOpen,
    setIsCartOpen,

    isProfileOpen,
    setIsProfileOpen,

    username,
    setUsername,
    email,
    setEmail,
    contact,
    setContact,
    address,
    setAddress,
  }}
>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
