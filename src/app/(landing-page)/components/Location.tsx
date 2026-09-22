"use client";

import React from "react";
import { landingPageData } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { SectionWithContainer } from "@/src/components/sectionComponants";

export const Location: React.FC = () => {
  const data = landingPageData.location;

  return (
    <SectionWithContainer
      sectionId="location"
      sectionClassName="bg-[#FDF9EE] border-b border-[#D6D2C7]/70"
      defaultPadding={false}
      containerClassName="pt-12 sm:pt-16 md:pt-[134px] pb-12 sm:pb-16 md:pb-[134px]"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-6">
        <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#614B33] font-normal font-dm-sans">
          {data.tag}
        </p>

        <h2
          className="mt-[16px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl text-[#607839] leading-tight tracking-[0px]"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-[76px]">
        {/* Details & Actions */}
        <div className="w-full lg:w-[596px] lg:max-w-[596px] flex flex-col order-2 lg:order-1">
          {/* Desktop Header */}
          <div className="hidden lg:flex flex-col">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#614B33] font-normal font-dm-sans">
              {data.tag}
            </p>

            <h2
              className="mt-[16px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-[#607839] leading-tight lg:leading-[48px] tracking-[0px]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p className="mt-[16px] text-base sm:text-[18px] text-[#6B635E] font-dm-sans font-normal leading-[26px] tracking-[0px]">
              {data.subtext}
            </p>
          </div>

          {/* Mobile Description */}
          <p className="lg:hidden mt-0 text-base sm:text-[18px] text-[#6B635E] font-dm-sans font-normal leading-[26px] tracking-[0px]">
            {data.subtext}
          </p>

          {/* Distance Matrix */}
          <div className="mt-6 lg:mt-[41px] border-y-[0.8px] divide-y-[0.8px] border-[#D6D2C7] divide-[#D6D2C7]">
            {data.matrix.map((row, idx) => (
              <div key={idx} className="flex items-center justify-between pt-[14px] pb-[15px]">
                <span className="font-dm-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#5C625B]">
                  {row.place}
                </span>
                <span className="font-dm-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-[#614B33]">
                  {row.distance}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-[32px] lg:mt-[40px] flex justify-center lg:justify-start w-full">
            <SectionActionButtons section="Location" />
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full lg:flex-1 max-w-[648px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-sm bg-[#607839] order-1 lg:order-2" />
      </div>
    </SectionWithContainer>
  );
};

export default Location;
