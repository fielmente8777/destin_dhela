"use client";

import React from "react";
import Image from "next/image";
import Form1 from "@/src/components/forms/Form1";
import { landingPageData } from "@/src/app/(landing-page)/components/pagedata";
import { PhoneIcon, EmailIcon, FooterLocationIcon } from "@/src/utils/icons";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full font-sans">
      {/* Booking Form */}
      <div id="booking-form" className="w-full bg-[#607839] pt-[24px] pb-[24px] px-4 sm:px-8 lg:px-[100px] flex flex-col justify-center items-center gap-[20px] border-t border-[#607839]">
        <div className="w-full max-w-7xl mx-auto flex justify-center">
          <Form1 />
        </div>

        <p className="font-open-sans font-normal text-[14px] leading-[16px] tracking-[0px] text-white text-center">
          Save 15% when you book direct · Free cancellation on most dates*
        </p>
      </div>

      {/* Footer Info */}
      <div className="w-full bg-[#FDF9EE] border-t border-[#D6D2C7]/60">
        <div className="max-w-[1440px] mx-auto pt-[40px] md:pt-[74px] pb-[40px] md:pb-[74px] px-4 sm:px-8 lg:px-[100px] flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 font-sans">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-[198px] h-[104px] bg-white rounded-[8px] p-3 flex items-center justify-center shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={landingPageData.hero.logo || "/dd/Logo.png"}
                  alt="Destinn Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="max-w-[340px]">
            <p className="font-dm-sans font-normal text-[14px] leading-[20px] tracking-[0px] text-[#6B635E]">
              Location
            </p>
            <div className="mt-[12px] flex items-start gap-2 text-[#6B635E] font-dm-sans">
              <span className="mt-0.5 text-[#607839] shrink-0">
                <FooterLocationIcon />
              </span>
              <p className="font-dm-sans font-normal text-[18px] leading-[26px] tracking-[0px] text-[#6B635E]">
                {landingPageData.contact.location}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-dm-sans font-normal text-[14px] leading-[20px] tracking-[0px] text-[#6B635E]">
              Contact
            </p>
            <div className="mt-[12px] space-y-1 text-[#6B635E] font-dm-sans">
              <div className="flex items-center gap-2">
                <span className="text-[#607839] shrink-0">
                  <PhoneIcon />
                </span>
                <a
                  href={`tel:${landingPageData.contact.phone.replace(/[\s-]/g, "")}`}
                  className="font-dm-sans font-normal text-[18px] leading-[26px] tracking-[0px] text-[#6B635E] hover:text-[#607839] transition-colors"
                >
                  Call: {landingPageData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#607839] shrink-0">
                  <EmailIcon />
                </span>
                <a
                  href={`mailto:${landingPageData.contact.email}`}
                  className="font-dm-sans font-normal text-[18px] leading-[26px] tracking-[0px] text-[#6B635E] hover:text-[#607839] transition-colors"
                >
                  Email: {landingPageData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#607839] pt-[16px] pb-[16px] px-4 sm:px-8 lg:px-[100px] flex flex-col sm:flex-row items-center justify-between font-dm-sans font-normal text-[14px] leading-[20px] tracking-[0px] text-white gap-2 sm:gap-0 text-center sm:text-left">
        <p>© Destinn Dhela Retreat by Jungle Diaries · A Unit of Devine Wild Bloom Resort LLP</p>
        <p>Powered by Fielmente</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
