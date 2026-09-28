import LinkButton from "@/src/components/buttons/LinkButton";
import { SectionWithContainer } from "@/src/components/sectionComponants";
import Image from "next/image";
import { landingPageData } from "../(landing-page)/components/pagedata";

export const metadata = {
  title: "Thank You | Destinn Dhela - Jim Corbett",
  description: "Thank you for reaching out to Destinn Dhela. We will get back to you shortly.",
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-bg-main flex items-center justify-center py-12">
      <SectionWithContainer
        sectionClassName="w-full"
        containerClassName="flex items-center justify-center"
      >
        <div className="flex flex-col gap-6 items-center justify-center text-center max-w-3xl mx-auto w-full">
          {/* Logo */}
          <div className="max-w-[220px] sm:max-w-sm w-full relative aspect-4/2 bg-white rounded-lg shadow-sm border border-sand-border/50 overflow-hidden flex items-center justify-center p-3">
            <div className="relative w-full h-full">
              <Image
                src={landingPageData.hero.logo || "/dd/Logo.png"}
                alt="Destinn Dhela Logo"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>

          {/* Subheading / Tag */}
          <p className="text-sm md:text-base uppercase tracking-widest text-tertiary font-dm-sans font-medium">
            THANK YOU FOR SUBMITTING
          </p>

          {/* Main Heading */}
          <h1 className="font-bold font-varela text-2xl sm:text-3xl md:text-4xl lg:text-[44px] sm:whitespace-nowrap text-primary leading-tight">
            We will get back to you shortly!
          </h1>

          {/* Back to Home CTA */}
          <LinkButton
            href="/"
            label="Back to Home"
            className="w-fit mx-auto rounded-full bg-primary hover:bg-[#4d602e] text-white px-8 py-3.5 text-sm uppercase tracking-wider font-open-sans font-medium shadow-md transition-all hover:scale-105"
          />
        </div>
      </SectionWithContainer>
    </main>
  );
}
