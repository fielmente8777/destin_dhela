import Link from "next/link";
import Image from "next/image";
import { landingPageData } from "../(landing-page)/components/pagedata";

export const metadata = {
  title: "Thank You | Destin DeLa - Jim Corbett",
  description: "Thank you for reaching out to Destin DeLa. We will get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#EEEEDC] text-[#192118] flex flex-col justify-between items-center px-4 py-8 md:py-16">
      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center my-auto">
        <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-6">
          <Image
            src={landingPageData.hero.logo || "/logo-image1.png"}
            alt="Destin DeLa Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="w-16 h-16 rounded-full bg-[#30402A] text-[#B58A4A] flex items-center justify-center mb-6 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-[14px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans mb-3">
          DESTIN DELA · JIM CORBETT
        </p>

        <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl text-[#30402A] mb-4">
          Thank You for Your Enquiry!
        </h1>

        <p className="font-dm-sans text-base sm:text-lg text-[#6B635E] max-w-lg mb-8 leading-relaxed">
          We have received your details. Our team will get in touch with you shortly with the best available options and rates for your stay.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-8 py-3 rounded-lg bg-[#30402A] text-white hover:bg-[#243120] transition-colors font-open-sans text-[15px] font-medium shadow-md"
          >
            Return to Homepage
          </Link>
          <a
            href="tel:+918868888494"
            className="px-8 py-3 rounded-lg border border-[#30402A] text-[#30402A] hover:bg-[#30402A] hover:text-white transition-colors font-open-sans text-[15px] font-medium"
          >
            Call Us: +91 88688 88494
          </a>
        </div>
      </div>

      <footer className="w-full text-center text-[13px] text-[#6B635E] font-dm-sans mt-8">
        <p>© 2026 DESTIN DELA. All rights reserved.</p>
      </footer>
    </div>
  );
}
