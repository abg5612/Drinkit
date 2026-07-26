"use client";

import React from "react";

export default function Bannersection() {
  return (
    <div className="bg-[#0B0F19]">
      <div className="flex items-center justify-center h-screen px-6">
        <div id="default-carousel" className="relative w-full max-w-7xl" data-carousel="slide">

          {/* Carousel wrapper */}
          <div className="relative h-[650px] overflow-hidden rounded-3xl">

            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
              <img
                src="https://i.pinimg.com/736x/51/0c/b0/510cb0441bcd360eaf851887e718bb5c.jpg"
                className="absolute block w-full h-full object-cover"
                alt="Premium Drinks"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
                <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
                  Premium Collection
                </p>

                <h1 className="text-5xl md:text-7xl font-black text-white mt-4">
                  Discover Luxury
                  <br />
                  Spirits
                </h1>

                <p className="text-gray-300 mt-5 max-w-xl text-lg">
                  Explore finest whisky, rum, vodka and gin collections crafted
                  for unforgettable moments.
                </p>

                <button className="mt-8 bg-[#D4AF37] text-black px-8 py-3 rounded-full w-fit font-semibold hover:bg-yellow-300 transition">
                  Explore Collection
                </button>
              </div>

            </div>


            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item="">
              <img
                src="/GPTBanner2.png"
                className="absolute block w-full h-full object-cover"
                alt="Premium Drinks"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">

                <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm">
                  Exclusive Bottles
                </p>

                <h1 className="text-5xl md:text-7xl font-black text-white mt-4">
                  Taste The
                  <br />
                  Extraordinary
                </h1>

                <p className="text-gray-300 mt-5 max-w-xl text-lg">
                  Handpicked premium beverages from Indias finest and worlds
                  most iconic brands.
                </p>

                <button className="mt-8 bg-white text-black px-8 py-3 rounded-full w-fit font-semibold hover:bg-[#D4AF37] transition">
                  Shop Now
                </button>

              </div>

            </div>

          </div>


          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3">

            <button
              type="button"
              className="w-3 h-3 rounded-full bg-[#D4AF37]"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />

            <button
              type="button"
              className="w-3 h-3 rounded-full bg-white/50"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />

          </div>


          {/* Previous */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-5 cursor-pointer group"
            data-carousel-prev=""
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              ❮
            </span>
          </button>


          {/* Next */}
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-5 cursor-pointer group"
            data-carousel-next=""
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              ❯
            </span>
          </button>


        </div>
      </div>
    </div>
  );
}