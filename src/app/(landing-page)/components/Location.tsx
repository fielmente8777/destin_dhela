"use client";

import React from "react";
import { LocationProps } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import { contact } from "@/src/utils/constent";

interface Props {
  data: LocationProps;
}

export const Location: React.FC<Props> = ({ data }) => {
  return (
    <SectionWithContainer
      sectionId="location"
      sectionClassName="bg-bg-main border-b border-sand-border/70"
      defaultPadding={false}
      containerClassName="pt-12 sm:pt-16 md:pt-[134px] pb-12 sm:pb-16 md:pb-[134px]"
    >
      {/* Mobile Header */}
      <div className="lg:hidden flex flex-col mb-6">
        <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-tertiary font-normal font-dm-sans">
          {data.tag}
        </p>

        <h2
          className="mt-[16px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl text-primary leading-tight"
          dangerouslySetInnerHTML={{ __html: data.heading }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-[76px]">
        {/* Details & Actions */}
        <div className="w-full lg:w-[596px] lg:max-w-[596px] flex flex-col order-2 lg:order-1">
          {/* Desktop Header */}
          <div className="hidden lg:flex flex-col">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-tertiary font-normal font-dm-sans">
              {data.tag}
            </p>

            <h2
              className="mt-[16px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-primary leading-tight lg:leading-[48px]"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p className="mt-[16px] text-base sm:text-[18px] text-body-text font-dm-sans font-normal leading-[26px]">
              {data.subtext}
            </p>
          </div>

          {/* Mobile Description */}
          <p className="lg:hidden mt-0 text-base sm:text-[18px] text-body-text font-dm-sans font-normal leading-[26px]">
            {data.subtext}
          </p>

          {/* Distance Matrix */}
          <div className="mt-6 lg:mt-[41px] border-y-[0.8px] divide-y-[0.8px] border-sand-border divide-sand-border">
            {data.matrix.map((row, idx) => (
              <div key={idx} className="flex items-center justify-between pt-[14px] pb-[15px]">
                <span className="font-dm-sans font-normal text-[16px] leading-[24px] text-body-text">
                  {row.place}
                </span>
                <span className="font-dm-sans font-normal text-[16px] leading-[24px] text-tertiary">
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
        <div className="relative w-full lg:flex-1 max-w-[648px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-sm border border-sand-border bg-[#E8E6DF] order-1 lg:order-2">
          <iframe
            title="Destinn Dhela Google Map Location"
            src={contact.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Location;
