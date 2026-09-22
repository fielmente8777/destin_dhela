import ImageB from "../components/banners/Image";
import SlidingTitle from "../components/sliders/SlidingTitle";
import Form1 from "../components/forms/Form1";
import { Container, Section, SectionWithContainer } from "../components/sectionComponants";
import { landingPageData } from "./(landing-page)/components/pagedata";
import { About } from "./(landing-page)/components/About";
import { Room } from "./(landing-page)/components/Room";
import { SafariStargazing } from "./(landing-page)/components/SafariStargazing";
import { StargazingBanner } from "./(landing-page)/components/StargazingBanner";
import { Dining } from "./(landing-page)/components/Dining";
import { Location } from "./(landing-page)/components/Location";
import { Gallery } from "./(landing-page)/components/Gallery";
import { Faqs } from "./(landing-page)/components/Faqs";
import { LandingFooter } from "./(landing-page)/components/LandingFooter";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <main className="min-h-screen text-[#192118] font-sans flex flex-col w-full mx-auto overflow-x-hidden">
        {/* Hero Banner */}
        <ImageB hero={landingPageData.hero} />

        {/* Sliding Title */}
        <SlidingTitle items={landingPageData.step} />

        {/* Booking Form */}
        <SectionWithContainer
          defaultPadding={false}
          sectionClassName="bg-[#607839] border-t border-[#607839]"
          containerClassName="pt-[24px] pb-[24px] flex flex-col justify-center items-center gap-[20px]"
        >
          <div id="form" className="w-full flex justify-center">
            <Form1 />
          </div>
          <p
            className="font-open-sans font-normal text-[14px] leading-[16px] tracking-[0px] text-white text-center max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
          />
        </SectionWithContainer>

        {/* About */}
        <About />

        {/* Sliding Title */}
        <SlidingTitle items={landingPageData.step} />

        {/* Accommodation */}
        <Room />

        {/* Safari & Stargazing */}
        <SafariStargazing />

        {/* Stargazing Banner */}
        <StargazingBanner />

        {/* Dining */}
        <Dining />

        {/* Location */}
        <Location />

        {/* Gallery */}
        <Gallery />

        {/* FAQs */}
        <Faqs />

        {/* Footer */}
        <LandingFooter />
      </main>
    </div>
  );
}
