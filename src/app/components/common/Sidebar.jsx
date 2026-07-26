"use client";
import React, { useState } from "react";
import products from "@/app/prdoucts";

export default function Sidebar() {
 const initialItems = products.slice(0,4).map((item) => ({
  ...item,
  quantity: 1,
}));

  const [items, setItems] = useState(initialItems);
  function IncreaseQnty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function DecreaseQnty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <>
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-96"
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
        >
          <div className="border-b border-default pb-4 mb-5 flex items-center">
            <h5
              id="drawer-right-example"
              className="inline-flex items-center text-lg font-medium text-body"
            >
              Shopping Cart
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <div
                id={`item-${item.id}`}
                key={item.id}
                className="flex items-center justify-between gap-6 border-b border-gray-200 py-4"
              >
                {/* LEFT SIDE: Image + Info */}
                <div className="flex items-center gap-4">
                  <h2
                    className="cursor-pointer text-3xl"
                    id={`remove-${item.id}`}
                    onClick={() => removeItem(item.id)}
                  >
                    &times;
                  </h2>
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover border border-gray-100"
                  />

                  <div>
                    <h6 className="font-semibold text-gray-800">{item.name}</h6>
                    <p className="text-sm text-black font-bold">
                      ₹ {item.price}
                    </p>
                  </div>
                </div>

                {/* RIGHT SIDE: Quantity + Total */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                    <button
                      className="px-2 text-lg"
                      onClick={() => DecreaseQnty(item.id)}
                    >
                      −
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      className="px-2 text-lg"
                      onClick={() => IncreaseQnty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    Total: ₹ {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-heading">Total:</span>
            <span className="text-lg font-bold text-heading">
              Rs:{" "}
              {items.reduce(
                (total, item) =>
                  total + Number(item.price) * Number(item.quantity || 1),
                0,
              )}
            </span>
            <div>
             
            </div>
          </div>
           <button className="bg-black text-white w-full mt-2 px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">
                Checkout
              </button>
        </div>
      </>
    </div>
  );
}
