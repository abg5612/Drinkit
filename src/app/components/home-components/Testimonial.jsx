"use client";

import React from "react";
import products from "@/app/prdoucts";

export default function Testimonial() {

  const testimonials = products
    .filter((item) => item.rating >= 4.5)
    .slice(0, 4)
    .map((item, index) => ({
      id: item.id,
      image: `/avatar-${index + 4}.jpg`,
      name: [
        "Rahul Sharma",
        "Arjun Mehta",
        "Vikram Singh",
        "Amit Verma",
      ][index],
      buyer: "Verified Buyer",
      testimonial: `Amazing experience with ${item.name}. The quality, taste and packaging were excellent. Definitely one of the best ${item.category} products I have purchased.`,
      pimage: item.thumbnail,
      title: item.name,
      price: `₹${item.price}`,
      rating: item.rating,
      reviewCount: item.reviewCount,
      brand: item.brand,
    }));


  return (
    <section className="py-16 bg-[#0B0F19]">

      <div className="text-center mb-12">

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
          Customer Reviews
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          What Our Customers Say
        </h2>

        <p className="text-gray-400 mt-3">
          Real reviews from customers enjoying our premium collection.
        </p>

      </div>


      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {testimonials.map((testimonial) => (

          <div
            key={testimonial.id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-[#D4AF37] hover:-translate-y-2 transition duration-500"
          >

            {/* Customer */}

            <div className="flex items-center gap-4">

              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
              />

              <div>

                <h3 className="text-white font-bold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-green-400">
                  ✅ {testimonial.buyer}
                </p>

              </div>

            </div>


            {/* Rating */}

            <div className="mt-5 text-[#D4AF37]">
              {"★".repeat(Math.round(testimonial.rating))}
              <span className="text-gray-400 text-sm ml-2">
                {testimonial.rating} ({testimonial.reviewCount})
              </span>
            </div>


            {/* Review */}

            <p className="text-gray-400 text-sm leading-6 mt-4">
              "{testimonial.testimonial}"
            </p>


            {/* Product */}

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">

              <img
                src={testimonial.pimage}
                alt={testimonial.title}
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>

                <h4 className="text-white text-sm font-semibold line-clamp-1">
                  {testimonial.title}
                </h4>

                <p className="text-xs text-gray-400">
                  {testimonial.brand}
                </p>

                <p className="text-[#D4AF37] font-bold">
                  {testimonial.price}
                </p>

              </div>

            </div>


          </div>

        ))}

      </div>

    </section>
  );
}