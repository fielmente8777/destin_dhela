"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BannerDotIcon } from "@/src/utils/icons";
import { Container, Section } from "@/src/components/sectionComponants";
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

  const images =
    hero.images && hero.images.length > 0
      ? hero.images
      : ["/dd/banner.png", "/dd/banner.png", "/dd/banner.png"];

  return (
    <Section
      defaultPadding={false}
      sectionClassName="relative w-full h-[650px] sm:h-[720px] lg:h-[800px] overflow-hidden"
    >
      {/* Background Swiper */}
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

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center lg:justify-start text-center pt-10 sm:pt-14 lg:pt-[281px] pb-6 sm:pb-8 lg:pb-0 pointer-events-none px-3 sm:px-0">
        <Container className="w-full flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center text-center w-fit mx-auto h-[28px] sm:h-[34px] px-2.5 sm:px-4 bg-[#FFFFFF1A] backdrop-blur-[12px] border border-[#FFFFFF33] rounded-full text-[8px] min-[360px]:text-[8.5px] min-[390px]:text-[9px] min-[425px]:text-[10px] sm:text-[12px] leading-none font-dm-sans font-semibold uppercase tracking-[0.2px] min-[360px]:tracking-[0.4px] min-[390px]:tracking-[0.6px] sm:tracking-[2px] text-white whitespace-nowrap shadow-sm">
              <span className="text-center">{hero.tag}</span>
            </div>

            {/* Heading */}
            <h1
              className="mt-[12px] w-full font-fraunces font-bold text-3xl sm:text-5xl lg:text-[56px] leading-tight sm:leading-tight lg:leading-[64px] tracking-[0px] text-white text-center drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />

            {/* Description */}
            <p
              className="mt-[12px] w-full font-dm-sans font-normal text-[13.5px] min-[375px]:text-[14px] min-[400px]:text-[15px] sm:text-[18px] leading-[22px] sm:leading-[26px] tracking-[0px] text-white text-center max-w-2xl mx-auto drop-shadow-sm px-2 sm:px-0"
              dangerouslySetInnerHTML={{ __html: hero.description }}
            />
          </div>
        </Container>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-[8px] w-[52px] h-[12px]">
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
    </Section>
  );
};

export default ImageB;
