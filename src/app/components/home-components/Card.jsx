import React from "react";
import products from "@/app/prdoucts";

export default function Card() {
  const featuredProducts = products.filter((item) => item.featured).slice(0, 4);

  return (
    <section className="mt-16">
      <div className="text-center">
        <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
          Premium Selection
        </span>

        <h2 className="text-4xl font-bold mt-2">Featured Collection</h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Handpicked premium spirits loved by our customers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl"
          >
            {/* Image */}

            <div className="relative overflow-hidden bg-[#F8F8F8]">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <span className="absolute top-4 left-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-black">
                Featured
              </span>

              <span className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">
                {item.category}
              </span>
            </div>

            {/* Content */}

            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                {item.brand}
              </p>

              <h3 className="mt-2 text-xl font-bold line-clamp-1">
                {item.name}
              </h3>

              <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.flavours?.slice(0, 2).map((flavour) => (
                  <span
                    key={flavour}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs"
                  >
                    {flavour}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-yellow-500">⭐ {item.rating}</p>

                  <p className="text-xs text-gray-400">
                    {item.reviewCount} reviews
                  </p>
                </div>

                <h4 className="text-2xl font-bold text-[#111]">
                  ₹{item.price}
                </h4>
              </div>

              <button
                className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-[#D4AF37] hover:text-black"
                type="button"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
