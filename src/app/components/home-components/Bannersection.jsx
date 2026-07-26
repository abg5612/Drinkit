"use client";

import Link from "next/link";
import React from "react";

export default function Bannersection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Desktop Banner */}
      <img
        src="/desktopbann1.gif"
        alt="Premium Drinks"
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
      />

      {/* Mobile Banner */}
      <video
        src="/mobbanner.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-3xl">
          <p className="text-[#D4AF37] uppercase tracking-[6px] text-sm md:text-base">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-5 leading-tight">
            Discover Luxury
            <br />
            Spirits
          </h1>

          <p className="text-gray-200 mt-6 max-w-xl text-lg">
            Explore finest whisky, rum, vodka and gin collections crafted for
            unforgettable moments.
          </p>

          <Link href="/Product">
            <button className="mt-8 bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:bg-yellow-300 transition">
              Explore Collection
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
