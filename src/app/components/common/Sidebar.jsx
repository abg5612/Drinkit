"use client";

import React from "react";
import { useCart } from "@/app/components/context/CartContext";

export default function Sidebar() {
  const { cart, setCart, isCartOpen, setIsCartOpen } = useCart();

  function IncreaseQnty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function DecreaseQnty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="border-b pb-4 mb-5 flex items-center p-4">
        <h5 className="text-lg font-medium">Shopping Cart</h5>

        <button
          onClick={() => setIsCartOpen(false)}
          className="absolute top-2.5 right-2.5 w-9 h-9 flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      <div className="px-4 grid gap-4 overflow-y-auto h-[75vh]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-4 border-b pb-4"
            >
              <div className="flex gap-3">
                <button
                  className="text-2xl h-fit"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>

                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />

                <div>
                  <h5 className="font-semibold">{item.name}</h5>
                  <p>₹ {item.price}</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center border rounded">
                  <button
                    className="px-2"
                    onClick={() => DecreaseQnty(item.id)}
                  >
                    -
                  </button>

                  <span className="px-2">{item.quantity}</span>

                  <button
                    className="px-2"
                    onClick={() => IncreaseQnty(item.id)}
                  >
                    +
                  </button>
                </div>

                <p className="font-semibold">
                  ₹ {item.price * item.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>

          <span>
            ₹
            {cart.reduce(
              (total, item) =>
                total + Number(item.price) * Number(item.quantity),
              0
            )}
          </span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
}