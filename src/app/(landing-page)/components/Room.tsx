"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AccommodationProps } from "./pagedata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { BtnNextIcon, BtnPrevIcon, AccommodationIcon } from "@/src/utils/icons";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface Props {
  data: AccommodationProps;
}

export const Room: React.FC<Props> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const images =
    data.images && data.images.length > 0
      ? data.images
      : ["/dd/room.png"];

  return (
    <SectionWithContainer
      sectionId="accommodation"
      sectionClassName="bg-bg-card border-b border-sand-border/70"
      defaultPadding={false}
      containerClassName="pt-12 sm:pt-16 md:pt-[128px] pb-12 sm:pb-16 md:pb-[128px]"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-6">
        <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-secondary font-normal font-dm-sans">
          {data.tag}
        </p>
        <h2 className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl text-primary leading-tight">
          {data.heading}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-[45px]">
        {/* Room Image Swiper */}
        <div className="relative w-full lg:w-[647px] shrink-0 h-[340px] sm:h-[420px] lg:h-[528px] rounded-[8px] overflow-hidden shadow-sm group">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            className="w-full h-full rounded-[8px]"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Destinn Spacious Room ${idx + 1}`}
                  fill
                  className="object-cover object-center rounded-[8px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous room photo"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md"
          >
            <BtnPrevIcon />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next room photo"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-md"
          >
            <BtnNextIcon />
          </button>
        </div>

        {/* Details */}
        <div className="w-full lg:w-[628px] shrink-0 flex flex-col">
          {/* Desktop Header */}
          <div className="hidden lg:flex flex-col">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-secondary font-normal font-dm-sans">
              {data.tag}
            </p>
            <h2 className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-primary leading-tight lg:leading-[48px]">
              {data.heading}
            </h2>
          </div>

          {/* Subtext */}
          <p className="mt-0 lg:mt-[32px] text-base sm:text-[20px] text-body-light font-dm-sans font-normal leading-[30px]">
            {data.subtext}
          </p>

          {/* Bullet List */}
          <ul className="mt-[24px] lg:mt-[32px] space-y-[16px]">
            {data.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-[18px] leading-[26px] text-body-text font-dm-sans font-normal"
              >
                <span className="shrink-0 mt-1">
                  <AccommodationIcon />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="mt-[24px] lg:mt-[32px] flex justify-center lg:justify-start w-full">
            <SectionActionButtons section="Accommodation" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Room;
