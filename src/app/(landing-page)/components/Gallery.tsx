"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";

export const Gallery: React.FC = () => {
  const images = landingPageData.gallery.images;

  return (
    <section className="w-full overflow-hidden">
      {/* 4 Image Full-Bleed Grid Display */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-[240px] sm:h-[320px] lg:h-[400px] overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Destinn Gallery Showcase ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
