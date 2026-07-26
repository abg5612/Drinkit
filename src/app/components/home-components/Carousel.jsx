"use client";
import React from "react";

export default function Carousel() {
  const brands = [
    "https://i.pinimg.com/1200x/76/59/ca/7659ca3d713deb43e329df2d4d08c83e.jpg",
    "https://i.pinimg.com/1200x/0c/4a/c0/0c4ac0a6a8a8edfdf60d5482216303fb.jpg",
    "https://i.pinimg.com/736x/94/ff/4a/94ff4aa60bdc1c88f70c0ac1e7c27f2a.jpg",
    "https://i.pinimg.com/1200x/59/f1/d1/59f1d16f4753e4473e1f5d02f12613ce.jpg",
    "https://i.pinimg.com/736x/2e/e3/ca/2ee3ca4642fbb96a8ab5c81c9e937396.jpg",
    "https://i.pinimg.com/736x/a2/95/f7/a295f77da35da2d26cf05e9fc53aa44f.jpg",
    "https://i.pinimg.com/736x/20/70/e0/2070e0592b37719b700ba3516270130c.jpg",
    "https://i.pinimg.com/736x/8f/7a/4d/8f7a4d67c094c5e6f69018dd2fc94720.jpg",
    "https://i.pinimg.com/1200x/59/46/07/594607c6de8d0534ec31c0a9013fa168.jpg",
    "https://i.pinimg.com/736x/4b/eb/63/4beb63742888da6d70e3e52750c0e966.jpg",
    "https://i.pinimg.com/736x/32/64/59/3264599bedf3dfc185b51ead2a6c28ad.jpg",
    "https://i.pinimg.com/736x/60/5d/33/605d33d7cd2b0bb968ea4446b15fff90.jpg",
  ];
  return (
    <div>
      <div className="m-6 hover:scale-105 transition-all duration-300">
        <img
          src="https://i.pinimg.com/1200x/98/c3/5f/98c35f792d8db83b67ce2a305ef33c66.jpg"
          alt="Banner"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="overflow-hidden py-6 bg-white">
        <div className="flex w-max animate-marquee border-t ">
          {[...brands, ...brands].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand"
            className="h-20 w-auto mx-8 object-contain rounded-xl p-4 transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-110 hover:bg-white hover:shadow-2xl hover:shadow-black-800/390"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
