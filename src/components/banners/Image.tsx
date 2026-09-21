"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BannerDotIcon } from "@/src/utils/icons";
import "swiper/css";
import "swiper/css/autoplay";

interface ImageBannerProps {
  hero: {
    tag: string;
    title: string;
    description: string;
    benefits: string;
    images: string[];
  };
}

const ImageB: React.FC<ImageBannerProps> = ({ hero }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = hero.images && hero.images.length > 0 ? hero.images : ["/dd/banner.png", "/dd/banner.png", "/dd/banner.png"];

  return (
    <section className="relative w-full h-[620px] sm:h-[720px] md:h-[800px] overflow-hidden">
      {/* Background Swiper with Autoplay */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <Image
              src={img}
              alt={`Destinn Retreat Banner ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/40" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content Centered with top offset for overlay navbar */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center pt-16 sm:pt-20 pointer-events-none">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-5">
          {/* Badge Tag: Mobile hugs text tightly / Desktop: 500px width */}
          <div className="inline-flex items-center justify-center w-auto max-w-[92vw] sm:w-full sm:max-w-[500px] h-[34px] px-3.5 sm:px-4 bg-[#FFFFFF1A] backdrop-blur-[12px] border border-[#FFFFFF33] rounded-full text-[11px] sm:text-[12px] leading-[15px] font-dm-sans font-semibold uppercase tracking-[1.5px] sm:tracking-[2.3px] text-white">
            {hero.tag}
          </div>

          {/* Heading */}
          <h1
            className="font-fraunces font-bold text-3xl sm:text-5xl lg:text-[56px] leading-tight sm:leading-tight lg:leading-[64px] tracking-[0px] text-white text-center drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />

          {/* Subtitle / Description */}
          <p className="font-dm-sans font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] tracking-[0px] text-white text-center max-w-2xl mx-auto drop-shadow-sm">
            {hero.description}
          </p>
        </div>
      </div>

      {/* Pagination Dot Buttons (52 Hug x 12 Hug): Always visible, interactive */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-[8px] w-[52px] h-[12px]">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              if (swiperInstance) {
                swiperInstance.slideToLoop(idx);
                setActiveIndex(idx);
              }
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`cursor-pointer transition-all duration-300 flex items-center justify-center p-0 m-0 w-3 h-3 ${
              activeIndex === idx
                ? "opacity-100 scale-110"
                : "opacity-40 hover:opacity-80 scale-100"
            }`}
          >
            <BannerDotIcon className="w-3 h-3" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageB;
