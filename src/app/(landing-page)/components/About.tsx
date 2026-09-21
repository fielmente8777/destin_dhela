"use client";

import React from "react";
import { landingPageData } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { StarIcon, TreeIcon, SettleIcon } from "@/src/utils/icons";

export const About: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F5F5EB] pt-12 sm:pt-16 md:pt-[111px] pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-sand-border">
      <div className="mx-auto">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 items-center">
          {/* Left: Tag + Title */}
          <div className="space-y-3 sm:space-y-4 text-left">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#614B33] font-normal font-dm-sans">
              {landingPageData.about.tag}
            </p>

            <h2
              className="heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-[#607839] leading-tight lg:leading-[48px] tracking-[0px]"
              dangerouslySetInnerHTML={{ __html: landingPageData.about.heading }}
            />
          </div>

          {/* Right: Intro Paragraph */}
          <div className="text-[#5E5E5E] text-base md:text-[18px] leading-[26px] font-dm-sans font-normal text-left">
            <p>{landingPageData.about.description}</p>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full mx-auto bg-background shadow-xs lg:divide-x divide-secondary overflow-hidden flex flex-col md:flex-row items-stretch max-lg:divide-y mt-8 sm:mt-12 lg:mt-[91px]">
          {landingPageData.about.featureCards.map((card, idx) => (
            <div
              key={idx}
              className="flex-1 w-full pt-[36px] pb-[40px] px-6 sm:px-8 md:px-[43px] flex flex-col bg-[#FEFDFA]"
            >
              {/* Icon */}
              <div>{card.icon}</div>

              {/* Title & Description */}
              <h3 className="mt-[32px] font-varela font-normal capitalize text-lg sm:text-[24px] leading-[32px] tracking-[0px] text-[#614B33]">
                {card.title}
              </h3>
              <p className="mt-[16px] text-[#5E5E5E] text-[14px] leading-[20px] font-dm-sans font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons Centered */}
        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-[48px]">
          <SectionActionButtons section="Why Destinn" className="justify-center" />
        </div>
      </div>
    </section>
  );
};

export default About;
