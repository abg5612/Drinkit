"use client";

import React, { useState } from "react";
import products from "../prdoucts";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("")
  const categories = [
    "All",
    "Whisky",
    "Rum",
    "Vodka",
    "Gin",
    "Beer",
    "Wine",
    "Soft Drink",
  ];
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#080B11] via-[#111827] to-[#080B11] text-white">
      {/* Hero */}

      <section className="relative overflow-hidden py-14 px-6 text-center">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[180px] left-1/2 -translate-x-1/2 top-0"></div>

        <h1 className="text-6xl md:text-7xl font-black tracking-wider">
          Drink<span className="text-[#D4AF37]">it</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-8">
          Explore premium spirits, wines, beers and soft drinks from around the
          world.
        </p>

        {/* Search bar start */}
<div className="mt-10 flex max-w-xl mx-auto gap-3">

  <input type="text" placeholder="Search whisky, rum, vodka..." value={search} onChange={(e)=>setSearch(e.target.value)} className=" flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white outline-none "
  />

  <button className=" px-8 rounded-full bg-[#D4AF37] text-black font-bold">
    Search
  </button>

</div>
        {/* Search bar end */}
      </section>

      {/* Categories */}

      <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border backdrop-blur transition-all duration-300 ${
              activeCategory === cat
                ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                : "border-white/10 bg-white/5 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#D4AF37]/60 hover:-translate-y-3 transition duration-500 hover:shadow-[0_25px_80px_rgba(212,175,55,.18)]"
          >
            {/* Image */}

            <div className="relative h-80 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              {/* Category */}

              <span className="absolute top-5 left-5 px-4 py-1 rounded-full bg-black/60 backdrop-blur text-xs uppercase tracking-widest text-[#D4AF37]">
                {item.category}
              </span>

              {/* Featured */}

              {item.featured && (
                <span className="absolute top-5 right-5 bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}

            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>

                  <p className="text-sm text-gray-400 mt-1">{item.brand}</p>
                </div>

                <span className="text-xs text-green-400">
                  {item.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="text-sm text-gray-400 mt-4 line-clamp-2 leading-6">
                {item.description}
              </p>

              {/* Flavours */}

              <div className="flex flex-wrap gap-2 mt-4">
                {item.flavours?.slice(0, 3).map((flavour) => (
                  <span
                    key={flavour}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {flavour}
                  </span>
                ))}
              </div>

              {/* Meta */}

              <div className="grid grid-cols-2 gap-3 mt-5 text-sm text-gray-300">
                <div>
                  <span className="text-gray-500">Country</span>
                  <p>{item.country}</p>
                </div>

                <div>
                  <span className="text-gray-500">Volume</span>
                  <p>{item.volume}</p>
                </div>

                <div>
                  <span className="text-gray-500">ABV</span>
                  <p>{item.abv}</p>
                </div>

                <div>
                  <span className="text-gray-500">Stock</span>
                  <p>{item.stock}</p>
                </div>
              </div>

              {/* Rating */}

              <div className="flex justify-between items-center mt-6">
                <div>
                  <div className="text-yellow-400">★★★★★</div>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.rating} ({item.reviewCount} reviews)
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold">₹{item.price}</p>

                  {item.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      ₹{item.originalPrice}
                    </p>
                  )}
                </div>
              </div>

              {/* Button */}

             <button
  type="button"
  className="mt-7 w-full py-3 rounded-full bg-[#D4AF37] text-black font-semibold transition hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(212,175,55,.45)]"
  data-drawer-target="drawer-right-example"
  data-drawer-show="drawer-right-example"
  data-drawer-placement="right"
>
  Add to Cart
</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
