"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryProps } from "./pagedata";
import { Section } from "@/src/components/sectionComponants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Props {
  data: GalleryProps;
}

export const Gallery: React.FC<Props> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const images = data.images;

  return (
    <Section sectionClassName="overflow-hidden" defaultPadding={false}>
      {/* Mobile Auto-sliding Carousel (1 image in middle with side navigation buttons) */}
      <div className="sm:hidden relative w-full h-[280px] min-[400px]:h-[320px] overflow-hidden group">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={0}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <Image
                src={src}
                alt={`Destinn Gallery Showcase ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Side Navigation Buttons */}
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          aria-label="Previous gallery photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md"
        >
          <BtnPrevIcon />
        </button>
        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          aria-label="Next gallery photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md"
        >
          <BtnNextIcon />
        </button>
      </div>

      {/* Desktop / Tablet Grid (Untouched) */}
      <div className="hidden sm:grid w-full grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full sm:h-[320px] lg:h-[400px] overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Destinn Gallery Showcase ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
