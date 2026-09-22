"use client";

import React from "react";
import Image from "next/image";
import { DiningProps } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { ForkIcon, CharmIcon } from "@/src/utils/icons";
import { SectionWithContainer } from "@/src/components/sectionComponants";

interface Props {
  data: DiningProps;
}

export const Dining: React.FC<Props> = ({ data }) => {
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

        {/* Dining Image */}
        <div className="relative w-full max-w-[648px] lg:w-[648px] shrink-0 h-[320px] sm:h-[460px] lg:h-[655px] rounded-[8px] overflow-hidden shadow-sm order-1 lg:order-2">
          <Image
            src={data.image}
            alt="Dining at Destinn"
            fill
            className="object-cover object-center rounded-[8px]"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Dining;
