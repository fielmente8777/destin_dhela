import type { ReactNode } from "react";
import "./sliding.title.scss";
import { Section } from "@/src/components/sectionComponants";

interface SlidingTitleItem {
  title: string;
  icon?: ReactNode;
}

const SliderDiamondIcon = () => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M5.54396 11.077L-3.51258e-05 5.544L5.54396 3.57628e-07L11.077 5.544L5.54396 11.077ZM5.54396 10.076L10.076 5.544L5.54396 1.001L1.01196 5.544L5.54396 10.076ZM5.54396 7.843L3.23397 5.544L5.54396 3.234L7.85397 5.544L5.54396 7.843Z"
      fill="#614B33"
    />
  </svg>
);

export default function SlidingTitle({
  items,
  ariaHidden = false,
}: {
  items: SlidingTitleItem[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items, ...items, ...items];

  return (
    <Section
      defaultPadding={false}
      sectionClassName="relative overflow-hidden border-y border-tertiary bg-bg-main py-[13px] text-primary w-full font-dm-sans text-[16px] leading-[24px] font-normal"
      {...({ "aria-hidden": ariaHidden } as any)}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track flex items-center">
          {titles.map((item, i) => (
            <span key={i} className="marquee-item shrink-0 flex items-center">
              <SliderDiamondIcon />
              <span>{item.title}</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}