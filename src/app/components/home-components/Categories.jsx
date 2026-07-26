"use client";

import React from "react";
import products from "@/app/prdoucts";

const fallbackImages = {
  Whisky:
    "https://images.unsplash.com/photo-1527281400683-1aae777175f8",
  Rum:
    "https://images.unsplash.com/photo-1569529465841-dfecdab7503b",
  Vodka:
    "https://images.unsplash.com/photo-1608885898957-a4f0f6d2b8b7",
  Gin:
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
  Beer:
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
  Wine:
    "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea",
  "Soft Drink":
    "https://images.unsplash.com/photo-1629203851122-3726ecdf080e",
};

export default function Categories() {
  const uniqueCategories = [
    ...new Map(products.map((item) => [item.category, item])).values(),
  ];

  return (
    <section className="py-20 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm block text-center">
          Explore
        </span>

        <h2 className="text-5xl font-black text-center text-white mt-2">
          Shop By Category
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Discover premium spirits and beverages curated from the finest brands
          around the world.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {uniqueCategories.map((item) => {
            const totalProducts = products.filter(
              (p) => p.category === item.category
            ).length;

            return (
              <div
                key={item.category}
                className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer"
              >
                <img
                  src={
                    item.thumbnail ||
                    fallbackImages[item.category] ||
                    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
                  }
                  alt={item.category}
                  onError={(e) => {
                    e.currentTarget.src =
                      fallbackImages[item.category] ||
                      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3";
                  }}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Glass card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
                  <h3 className="text-2xl font-bold text-white">
                    {item.category}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    {totalProducts} Premium Products
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#D4AF37] text-sm font-semibold">
                      Explore →
                    </span>

                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-bold transition group-hover:rotate-45">
                      →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}