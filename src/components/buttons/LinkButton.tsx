"use client";

import React from "react";
import Link from "next/link";
import { useWebContext } from "@/src/context-api/WebContext";

interface LinkButtonProps {
  href: string;
  label: string;
  className?: string;
  labelClass?: string;
  whatsAppIcon?: boolean;
  calendarIcon?: boolean;
  callIcon?: boolean;
  arrowIcon?: boolean;
  [key: string]: unknown;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  className = "",
  labelClass = "",
  whatsAppIcon = false,
  calendarIcon = false,
  callIcon = false,
  arrowIcon = false,
  ...props
}) => {
  const { setIsOpenFormPopUp } = useWebContext();

  // Book Now -> Opens Popup Form Modal
  if (href === "#form") {
    return (
      <button
        type="button"
        onClick={() => setIsOpenFormPopUp(true)}
        className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all ${className}`}
        {...props}
      >
        {calendarIcon && <CalendarIcon />}
        {whatsAppIcon && <WhatsAppIcon />}
        {callIcon && <CallIcon />}
        <span className={labelClass}>{label}</span>
        {arrowIcon && <ArrowIcon />}
      </button>
    );
  }

  // Enquire Now (WhatsApp) / Call / External Links
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 cursor-pointer transition-all ${className}`}
      {...props}
    >
      {whatsAppIcon && <WhatsAppIcon />}
      {callIcon && <CallIcon />}
      {calendarIcon && <CalendarIcon />}
      <span className={labelClass}>{label}</span>
      {arrowIcon && <ArrowIcon />}
    </Link>
  );
};

export default LinkButton;

// Built-in Icons (SVG)
export const WhatsAppIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const CalendarIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const CallIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    width={11}
    height={12}
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7695 0.634306C11.0763 0.946722 11.0763 1.45326 10.7695 1.76567L1.86473 10.8323C1.5579 11.1447 1.06041 11.1447 0.753565 10.8323C0.446728 10.5199 0.446728 10.0134 0.753565 9.70103L9.65838 0.634306C9.9652 0.32189 10.4626 0.32189 10.7695 0.634306Z"
      fill="currentColor"
    />
    <path
      d="M0 1.19999C0 0.75817 0.35178 0.399994 0.785714 0.399994H10.2143C10.6482 0.399994 11 0.75817 11 1.19999V10.8C11 11.2418 10.6482 11.6 10.2143 11.6C9.78034 11.6 9.42857 11.2418 9.42857 10.8V1.99999H0.785714C0.35178 1.99999 0 1.64182 0 1.19999Z"
      fill="currentColor"
    />
  </svg>
);
