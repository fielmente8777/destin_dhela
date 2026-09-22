"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { SectionWithContainer } from "@/src/components/sectionComponants";

export const SafariStargazing: React.FC = () => {
  const data = landingPageData.safariStargazing;

  return (
    <SectionWithContainer
      sectionId="safari-stargazing"
      sectionClassName="bg-[#182107] text-white border-b border-[#2D3F23]"
      defaultPadding={false}
      containerClassName="pt-12 sm:pt-16 md:pt-[139px] pb-12 sm:pb-16 md:pb-[139px]"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-6">
        <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#B58A4A] font-normal font-dm-sans">
          {data.tag}
        </p>

        <h2
          className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl text-white leading-tight tracking-[0px]"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-[52px]">
        {/* Itinerary */}
        <div className="w-full max-w-[596px] lg:w-[596px] shrink-0 flex flex-col order-2 lg:order-1">
          {/* Desktop Header */}
          <div className="hidden lg:block">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#B58A4A] font-normal font-dm-sans">
              {data.tag}
            </p>

            <h2
              className="mt-[8px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-white leading-tight lg:leading-[48px] tracking-[0px]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />
          </div>

          {/* Itinerary Steps */}
          <div className="w-full flex flex-col mt-0 lg:mt-[40px]">
            {data.steps.map((item, idx) => (
              <div
                key={idx}
                className="border-t border-[#F7F5EE33] pt-[22px] pb-[34px] last:pb-0 flex items-start gap-4 sm:gap-6"
              >
                <span className="text-[10.9px] leading-[16px] font-inter font-normal text-[#CAAF5C] pt-1 shrink-0 w-6">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-varela font-normal capitalize text-[20px] leading-[26px] tracking-[0px] text-[#F7F5EE]">
                    {item.title}
                  </h3>
                  <p className="mt-[7px] text-[14px] leading-[20px] font-dm-sans font-normal text-[#BCBCAA]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-[672px] lg:w-[672px] shrink-0 flex justify-center order-1 lg:order-2">
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[666px] rounded-[8px] overflow-hidden shadow-xl">
            <Image
              src={data.image}
              alt="Corbett Retreat Experience"
              fill
              className="object-cover object-center rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SafariStargazing;
