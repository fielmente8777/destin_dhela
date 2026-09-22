"use client";

import React from "react";
import Image from "next/image";
import { StargazingBannerProps } from "./pagedata";
import { MoonIcon } from "@/src/utils/icons";
import { Container, Section } from "@/src/components/sectionComponants";

interface Props {
  data: StargazingBannerProps;
}

export const StargazingBanner: React.FC<Props> = ({ data }) => {
  return (
    <Section
      id="stargazing-banner"
      defaultPadding={false}
      sectionClassName="relative w-full overflow-hidden border-b border-[#2D3F23]"
    >
      {/* Background Image (Full Section Width) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.image}
          alt="Stargazing at Destinn"
          fill
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(17, 16, 5, 0.88) 0%, rgba(17, 16, 5, 0.18) 72%)",
          }}
        />
      </div>

      {/* Content constrained within Container */}
      <Container className="relative z-10 pt-16 sm:pt-24 md:pt-[256px] pb-12 sm:pb-16 md:pb-[75px]">
        <div className="max-w-2xl flex flex-col text-left">
          {/* Icon */}
          <div>{MoonIcon()}</div>

          {/* Tag */}
          <p className="mt-[20px] text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#E2DDD4] font-normal font-dm-sans">
            {data.tag}
          </p>

          {/* Heading */}
          <h2
            className="mt-[4px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-[#FCFAF6] leading-tight lg:leading-[48px]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          {/* Description */}
          <p
            className="mt-[34px] text-sm sm:text-[16px] leading-[24px] text-[#E2DDD4] font-dm-sans font-normal"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default StargazingBanner;
