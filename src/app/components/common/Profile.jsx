"use client";

import React from "react";
import { useCart } from "@/app/components/context/CartContext";
import Link from "next/link";

export default function Profile() {
  const {
    isProfileOpen,
    setIsProfileOpen,
    username,
    email,
    contact,
    address,
    setUsername,
    setEmail,
    setContact,
    setAddress,
    setIsCartOpen,
    wishlist,
    setWishlist,
    cart,
    setCart,
    // setAddress,
  } = useCart();

  const ClearProfile = () => {
    setUsername("Username");
    setEmail("Email");
    setContact("Contact");
    setAddress("Location not available");

    setCart([]);
    setWishlist([]);

    // localStorage clear
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("contact");
    localStorage.removeItem("address");

    // Profile sidebar close
    setIsProfileOpen(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-96 bg-white transition-transform duration-300 ${
        isProfileOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ boxShadow: "10px 12px 10px #746f6f69" }}
    >
      <div className="h-screen w-80 bg-white flex flex-col">
        {/* Profile Header */}
        <div className="border-b p-6 relative">
          {/* Close Button */}
          <button
            onClick={() => setIsProfileOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition"
          >
            ✕
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
              👤
            </div>

            <div>
              <h2 className="font-bold text-lg text-gray-800">{username}</h2>

              <p className="text-sm text-gray-500">{email}</p>

              <p className="text-sm text-gray-500">{contact}</p>

              <p className="text-sm text-gray-500 mt-2">📍 {address}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            <li>
              <Link href="/" onClick={() => setIsProfileOpen(false)}>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
                  🏠
                  <span>Home</span>
                </button>
              </Link>
            </li>

            <li>
              <Link href="/Product" onClick={() => setIsProfileOpen(false)}>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
                  🛍️
                  <span>Products</span>
                </button>
              </Link>
            </li>

            <li>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-100 transition"
                onClick={() => {
                  setIsProfileOpen(false);
                  setIsCartOpen(true);
                }}
              >
                <div className="flex items-center gap-3">
                  🛒
                  <span>Cart {cart.length}</span>
                </div>
              </button>
            </li>

            <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
                ❤️
                <span>Wishlist {wishlist.length}</span>
              </button>
            </li>

            {/* <li>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
                📦
                <span>My Orders</span>
              </button>
            </li> */}

            <li>
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
                onClick={() => ClearProfile()}
              >
                🚪
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
