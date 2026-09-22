"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { landingPageData } from "../../app/(landing-page)/components/pagedata";
import { contact } from "@/src/utils/constent";
import { WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import { useWebContext } from "@/src/context-api/WebContext";

const LandingNavbar = () => {
  const pathName = usePathname();
  const { setIsOpenFormPopUp } = useWebContext();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <header className="absolute top-[15px] left-0 right-0 z-40 w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[100px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="w-[115px] h-[60px] sm:w-[152px] sm:h-[80px] bg-white rounded-[8px] p-2 sm:p-3 shadow-md flex items-center justify-center border border-white/60 hover:shadow-lg transition-shadow shrink-0"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={landingPageData.hero.logo || "/dd/Logo.png"}
              alt="Destinn Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-[8px] sm:gap-[12px]">
          {/* Enquire Now */}
          <a
            href={contact.WhatsappCta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enquire on WhatsApp"
            className="w-[44px] sm:w-[160px] h-[44px] p-0 sm:px-[16px] sm:py-[12px] rounded-[4px] bg-white border border-[#4F5E33]/40 text-[#4F5E33] hover:bg-gray-50 transition-all text-[14px] leading-[20px] tracking-[0px] uppercase font-open-sans font-normal shadow-sm flex items-center justify-center sm:gap-[8px] shrink-0 cursor-pointer"
          >
            <WhatsAppIcon className="w-[24px] h-[24px] sm:w-4 sm:h-4 text-[#4F5E33] shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Enquire Now</span>
          </a>

          {/* Book Now */}
          <button
            type="button"
            onClick={() => setIsOpenFormPopUp(true)}
            aria-label="Book Now"
            className="w-[44px] sm:w-[160px] h-[44px] p-0 sm:px-[16px] sm:py-[12px] rounded-[4px] bg-[#4F5E33] hover:bg-[#3E4C26] text-white border border-[#4F5E33] transition-all text-[14px] leading-[20px] tracking-[0px] uppercase font-open-sans font-normal shadow-sm flex items-center justify-center sm:gap-[8px] shrink-0 cursor-pointer"
          >
            <BookNowIcon className="w-[20px] h-[20px] sm:w-3.5 sm:h-3.5 text-white shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Book Now</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
