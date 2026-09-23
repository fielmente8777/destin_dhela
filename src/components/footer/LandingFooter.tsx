"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Form1 from "@/src/components/forms/Form1";
import { ContactProps } from "@/src/app/(landing-page)/components/pagedata";
import { contact as defaultContact } from "@/src/utils/constent";
import { PhoneIcon, EmailIcon, FooterLocationIcon } from "@/src/utils/icons";
import { SectionWithContainer } from "@/src/components/sectionComponants";

interface Props {
  data?: ContactProps;
  heroLogo?: string;
}

export const LandingFooter: React.FC<Props> = ({
  data,
  heroLogo = "/dd/Logo.png",
}) => {
  const phone = data?.phone || defaultContact.phone[0];
  const email = data?.email || defaultContact.email;
  const address = data?.location || defaultContact.address;

  return (
    <footer className="w-full font-sans">
      {/* Booking Form */}
      <SectionWithContainer
        sectionId="booking-form"
        sectionClassName="bg-primary border-t border-primary"
        defaultPadding={false}
        containerClassName="pt-[24px] pb-[24px] flex flex-col justify-center items-center gap-[20px]"
      >
        <div className="w-full flex justify-center">
          <Form1 />
        </div>

        <p className="font-open-sans font-normal text-[14px] leading-[16px] text-white text-center">
          Save 15% when you book direct · Free cancellation on most dates*
        </p>
      </SectionWithContainer>

      {/* Footer Info */}
      <SectionWithContainer
        sectionClassName="bg-bg-main border-t border-sand-border/60"
        defaultPadding={false}
        containerClassName="pt-[40px] md:pt-[74px] pb-[40px] md:pb-[74px] flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 font-sans"
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-[198px] h-[104px] bg-white rounded-[8px] p-0 flex items-center justify-center shrink-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={heroLogo}
                alt="Destinn Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="max-w-[340px]">
          <p className="font-dm-sans font-normal text-[14px] leading-[20px] text-body-text">
            Location
          </p>
          <div className="mt-[12px] flex items-start gap-2 text-body-text font-dm-sans">
            <span className="mt-0.5 text-primary shrink-0">
              <FooterLocationIcon />
            </span>
            <Link
              href={defaultContact.addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans font-normal text-[18px] leading-[26px] text-body-text hover:text-primary transition-colors"
            >
              {address}
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-dm-sans font-normal text-[14px] leading-[20px] text-body-text">
            Contact
          </p>
          <div className="mt-[12px] space-y-1 text-body-text font-dm-sans">
            <div className="flex items-center gap-2">
              <span className="text-primary shrink-0">
                <PhoneIcon />
              </span>
              <Link
                href={`tel:${phone.replace(/[\s-]/g, "")}`}
                className="font-dm-sans font-normal text-[18px] leading-[26px] text-body-text hover:text-primary transition-colors"
              >
                Call: {phone}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary shrink-0">
                <EmailIcon />
              </span>
              <Link
                href={`mailto:${email}`}
                className="font-dm-sans font-normal text-[18px] leading-[26px] text-body-text hover:text-primary transition-colors"
              >
                Email: {email}
              </Link>
            </div>
          </div>
        </div>
      </SectionWithContainer>

      {/* Copyright Bar */}
      <SectionWithContainer
        sectionClassName="bg-primary"
        defaultPadding={false}
        containerClassName="pt-[16px] pb-[16px] flex flex-col sm:flex-row items-center justify-between font-dm-sans font-normal text-[14px] leading-[20px] text-white gap-2 sm:gap-0 text-center sm:text-left"
      >
        <p>© Destinn Dhela Retreat by Jungle Diaries · A Unit of Devine Wild Bloom Resort LLP</p>
        <p>Powered by Fielmente</p>
      </SectionWithContainer>
    </footer>
  );
};

export default LandingFooter;
