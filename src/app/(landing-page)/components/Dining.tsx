"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DiningProps } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { ForkIcon, CharmIcon, BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Props {
  data: DiningProps;
}

export const Dining: React.FC<Props> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images =
    data.images && data.images.length > 0
      ? data.images
      : data.image
      ? [data.image, "/new/rooftop.webp"]
      : ["/new/restaurant.webp", "/new/rooftop.webp"];

  return (
    <SectionWithContainer
      sectionId="dining"
      sectionClassName="bg-bg-sand border-b border-sand-border/70"
      defaultPadding={false}
      containerClassName="pt-12 sm:pt-16 md:pt-[87px] pb-12 sm:pb-16 md:pb-[135px]"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-6">
        <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-tertiary font-normal font-dm-sans">
          {data.tag}
        </p>

        <h2
          className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl text-primary leading-tight"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-[76px]">
        {/* Details & Actions */}
        <div className="w-full lg:w-[596px] shrink-0 flex flex-col order-2 lg:order-1">
          {/* Desktop Header */}
          <div className="hidden lg:flex flex-col">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-tertiary font-normal font-dm-sans">
              {data.tag}
            </p>

            <h2
              className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-primary leading-tight lg:leading-[48px]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p className="mt-[40px] text-base sm:text-[18px] text-body-text font-dm-sans font-normal leading-[26px]">
              {data.description}
            </p>
          </div>

          {/* Mobile Description */}
          <p className="lg:hidden mt-0 text-base sm:text-[18px] text-body-text font-dm-sans font-normal leading-[26px]">
            {data.description}
          </p>

          {/* Outlets */}
          <div className="mt-8 lg:mt-[40px] flex flex-col sm:flex-row gap-[28px]">
            {data.outlets.map((outlet, idx) => (
              <div
                key={idx}
                className={`w-full sm:w-[284px] sm:h-[258px] pt-[27px] border-t-2 flex flex-col ${
                  outlet.type === "dining"
                    ? "border-primary"
                    : "border-secondary"
                }`}
              >
                {/* Icon */}
                <div className="w-6 h-6 flex items-center justify-start">
                  {outlet.type === "dining" ? <ForkIcon /> : <CharmIcon />}
                </div>

                <h3
                  className={`mt-[28px] font-varela font-normal text-[24px] leading-[32px] capitalize ${
                    outlet.type === "dining"
                      ? "text-primary"
                      : "text-dark-main"
                  }`}
                >
                  {outlet.title}
                </h3>
                <p className="mt-[8px] font-dm-sans font-normal italic text-[14px] leading-[20px] text-tertiary">
                  {outlet.subtitle}
                </p>
                <p className="mt-[21px] font-inter font-normal not-italic text-[12.9px] leading-[20px] text-body-light">
                  {outlet.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-[38px] flex justify-center lg:justify-start w-full">
            <SectionActionButtons section="Dining" />
          </div>
        </div>

        {/* Dining Image Slider */}
        <div className="relative w-full max-w-[648px] lg:w-[648px] shrink-0 h-[320px] sm:h-[460px] lg:h-[655px] rounded-[8px] overflow-hidden shadow-sm order-1 lg:order-2 group">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={images.length > 1}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full rounded-[8px]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Dining at Destinn Dhela ${idx + 1}`}
                  fill
                  className="object-cover object-center rounded-[8px]"
                  priority={idx === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => swiperInstance?.slidePrev()}
                aria-label="Previous dining photo"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md opacity-90 sm:opacity-0 group-hover:opacity-100 duration-300"
              >
                <BtnPrevIcon />
              </button>
              <button
                type="button"
                onClick={() => swiperInstance?.slideNext()}
                aria-label="Next dining photo"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md opacity-90 sm:opacity-0 group-hover:opacity-100 duration-300"
              >
                <BtnNextIcon />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
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
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx
                        ? "w-6 bg-white shadow-md"
                        : "w-2 bg-white/60 hover:bg-white shadow-sm"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Dining;

