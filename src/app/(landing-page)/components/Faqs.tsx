"use client";

import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { landingPageData } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="w-full bg-[#FDF9EE] pt-12 sm:pt-16 md:pt-[80px] pb-12 sm:pb-16 md:pb-[72px] px-4 sm:px-8 lg:px-[100px] border-b border-[#D6D2C7]/70 relative z-10"
    >
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-[76px]">
          {/* Heading & Actions */}
          <div className="w-full lg:w-[596px] shrink-0 flex flex-col">
            <p className="text-[16px] leading-[24px] tracking-[2.3px] uppercase text-[#614B33] font-normal font-dm-sans">
              {landingPageData.faqs.tag}
            </p>

            <h2
              className="mt-[16px] heading-h2 font-varela font-normal capitalize text-2xl sm:text-4xl lg:text-[40px] text-[#607839] leading-tight lg:leading-[48px] tracking-[0px]"
              dangerouslySetInnerHTML={{ __html: landingPageData.faqs.heading }}
            />

            {/* Desktop Actions */}
            <div className="hidden lg:block mt-[40px]">
              <SectionActionButtons section="FAQs" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="w-full lg:w-[647px] shrink-0 flex flex-col">
            <div className="w-full border-y-[0.5px] divide-y-[0.5px] border-[#614B33] divide-[#614B33] font-sans">
              {landingPageData.faqs.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full pt-[25px] pb-[25px] flex items-center justify-between gap-3 sm:gap-6 text-left cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-varela font-normal text-lg sm:text-xl lg:text-[24px] leading-snug lg:leading-[32px] tracking-[0px] capitalize text-[#607839]">
                        {item.q}
                      </span>

                      <span className="shrink-0 text-[#B58A4A] text-lg sm:text-xl">
                        {isOpen ? <IoRemove /> : <IoAdd />}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 sm:pb-5 pr-2 sm:pr-4 text-xs sm:text-sm md:text-[15px] text-[#636B5C] font-dm-sans font-normal leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden mt-8 sm:mt-10 flex justify-center w-full">
              <SectionActionButtons section="FAQs" className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
