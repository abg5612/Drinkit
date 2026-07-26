"use client";
import React from "react";

export default function Cart() {

  function IncreaseQuantity() {
    const quantityElement = document.getElementById("quantity");
    let quantityElementValue = parseInt(quantityElement.innerText) + 1;
    quantityElement.innerText = quantityElementValue;
  }

  function DecreaseQuantity() {
    const quantityElement = document.getElementById("quantity");
    let quantityElementValue = parseInt(quantityElement.innerText) - 1;
    quantityElement.innerText = quantityElementValue;
  }


  return (
    <div>
      <h2 className="text-center text-4xl font-bold mb-4 mt-10">
        Top Picks for this week
      </h2>
      <p className="text-center text-gray-600">
        Browse our wide range of categories and find exactly what youre looking
        for.
      </p>

      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

  <div className="overflow-hidden rounded-2xl border border-gray-300 group flex items-center justify-center bg-gray-50 h-[500px]">
    <img
      src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b"
      alt="Banner"
      className="w-[75%] h-[420px] object-contain rounded-2xl transition-all duration-500 group-hover:scale-110"
    />
  </div>

  <div className="pl-6">
    <p className="text-[#D4AF37] font-medium">
      Scotch
    </p>

    <h2 className="text-3xl mb-4 mt-2 font-bold">
      Johnnie Walker Black Label
    </h2>

    <p className="text-sm text-gray-500 mb-6">
      ⭐⭐⭐⭐⭐ (134 reviews) &nbsp; | 18 sold in last 32 hours &nbsp; | SKU: 53453412
    </p>

    <h3 className="text-2xl mb-4 font-bold">
      Rs 3200.00
    </h3>

    <h6 className="text-gray-600 mb-6">
      Blended Scotch whisky with smoky, fruity and spicy flavours
    </h6>

    <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button 
        id="increase" 
        className="px-5 py-2 text-[30px] hover:bg-gray-100 transition" 
        onClick={IncreaseQuantity}
      >
        +
      </button>

      <div id="quantity" className="px-6 text-[20px]">
        1
      </div>

      <button 
        id="decrease" 
        className="px-5 py-2 text-[30px] hover:bg-gray-100 transition" 
        onClick={DecreaseQuantity}
      >
        −
      </button>
    </div>

    <button className="bg-[#000000] w-full text-white px-3 py-3 rounded-xl hover:bg-[#D4AF37] hover:text-black transition mt-6">
      Add to Cart
    </button>

    <button className="bg-[#D4AF37] w-full text-black px-3 py-3 rounded-xl hover:bg-yellow-300 transition mt-4">
      Buy Now
    </button>

  </div>

</div>
    </div>
  );
}
