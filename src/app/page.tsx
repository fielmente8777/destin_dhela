import ImageB from "../components/banners/Image";
import SlidingTitle from "../components/sliders/SlidingTitle";
import Form1 from "../components/forms/Form1";
import { SectionWithContainer } from "../components/sectionComponants";
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
    <div className="w-full bg-[#FDF9EE] min-h-screen flex justify-center">
      <main className="min-h-screen bg-[#FDF9EE] text-[#192118] font-sans flex flex-col w-full mx-auto overflow-x-hidden">
        {/* 1. Hero Image Swiper Banner */}
        <ImageB hero={landingPageData.hero} />

        {/* 2. Sliding Ticker Marquee (Above Form) */}
        <SlidingTitle items={landingPageData.step} />

        {/* 3. Horizontal Booking Form Strip & Benefits Disclaimer */}
        <div className="w-full bg-[#607839] pt-[24px] pb-[24px] px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center gap-[20px]">
          <div id="form" className="w-full max-w-7xl mx-auto flex justify-center">
            <Form1 />
          </div>
          <p
            className="font-open-sans font-normal text-[14px] leading-[16px] tracking-[0px] text-white text-center max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
          />
        </div>

        {/* 3. Why Destinn (About with 3 feature cards) */}
        <About />

        {/* 4. Sliding Ticker Marquee */}
        <SlidingTitle items={landingPageData.step} />

        {/* 5. Accommodation (14 Rooms showcase) */}
        <Room />

        {/* 6. From Safari To Stargazing (4-Step dark itinerary) */}
        <SafariStargazing />

        {/* 7. Stargazing Signature Experience Banner */}
        <StargazingBanner />

        {/* 8. Food & Togetherness (Dining) */}
        <Dining />

        {/* 9. Location & Distance Matrix with Map */}
        <Location />

        {/* 10. Visual Gallery Grid */}
        <Gallery />

        {/* 11. Good To Know / FAQs */}
        <Faqs />

        {/* 12. Footer with Form Strip & Contact Info */}
        <LandingFooter />
      </main>
    </div>
  );
}
