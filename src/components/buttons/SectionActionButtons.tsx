"use client";

import React from "react";
import { WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import { contact } from "@/src/utils/constent";
import { useWebContext } from "@/src/context-api/WebContext";

interface SectionActionButtonsProps {
  section?: string;
  className?: string;
  compact?: boolean;
}

export const SectionActionButtons: React.FC<SectionActionButtonsProps> = ({
  section,
  className = "",
  compact = false,
}) => {
  const { setIsOpenFormPopUp } = useWebContext();

  return (
    <div className={`flex flex-row items-center justify-center lg:justify-start gap-[12px] font-open-sans ${className}`}>
      {/* Enquire Now */}
      <a
        href={contact.WhatsappCta}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[140px] sm:w-[160px] h-[44px] px-[16px] py-[12px] rounded-[4px] bg-white hover:bg-[#FAF8F5] text-[#4F5E33] border border-[#4F5E33]/40 font-normal font-open-sans text-[14px] leading-[20px] tracking-[0px] uppercase transition-all cursor-pointer shadow-xs flex items-center justify-center gap-[8px] whitespace-nowrap shrink-0"
      >
        <WhatsAppIcon className="w-4 h-4 text-[#4F5E33] shrink-0" />
        <span>Enquire Now</span>
      </a>

      {/* Book Now */}
      <button
        type="button"
        onClick={() => setIsOpenFormPopUp(true)}
        className="w-[140px] sm:w-[160px] h-[44px] px-[16px] py-[12px] rounded-[4px] bg-[#4F5E33] hover:bg-[#3E4C26] text-white border border-[#4F5E33] font-normal font-open-sans text-[14px] leading-[20px] tracking-[0px] uppercase transition-all cursor-pointer shadow-sm flex items-center justify-center gap-[8px] whitespace-nowrap shrink-0"
      >
        <BookNowIcon className="w-3.5 h-3.5 text-white shrink-0" />
        <span>Book Now</span>
      </button>
    </div>
  );
};

export default SectionActionButtons;
