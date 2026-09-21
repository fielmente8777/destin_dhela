import { SettleIcon, TreeIcon, StarIcon } from "@/src/utils/icons";

export const landingPageData = {
  offer: [
    "Direct Booking Offer: Save 15% + Free Breakfast",
  ],
  hero: {
    logo: "/dd/Logo.png",
    tag: "DESTINN DHELA RETREAT BY JUNGLE DIARIES · JIM CORBETT",
    title: "Your Complete<br class=\"block sm:hidden\" /> <span class=\"italic font-fraunces font-bold\">Corbett</span><br class=\"hidden sm:block\" /> Getaway",
    description: "Green mornings, safari days, rooftop swims and star filled nights at a comfortable retreat made for time together.",
    benefits: "Save 15% when you book direct · Free cancellation on most dates*",
    images: ["/dd/banner.png", "/dd/banner.png", "/dd/banner.png"],
  },
  step: [
    { title: "450 sq. ft. Spacious Rooms" },
    { title: "Rooftop Infinity Pool" },
    { title: "Direct Booking Offer: Save 15% + Free Breakfast" },
    { title: "20 min. to Dhela Safari Gate" },
    { title: "Kumaoni & Multi-cuisine Dining" },
  ],
  about: {
    tag: "WHY DESTINN",
    heading: "Stay Close To The Wild.<br />Stay Close To Comfort.",
    description:
      "Most stays near Corbett give you a room and a view. Destinn gives you a reason to linger between safaris, space, food, leisure and a signature night sky. A 14 room retreat where the Corbett landscape is part of every day, from private balcony views to unhurried evenings on the rooftop.",
    featureCards: [
      {
        icon: <SettleIcon />,
        title: "Space To Settle In",
        description: "Approximately 450 sq. ft. rooms, private balconies and lush green surroundings.",
      },
      {
        icon: <TreeIcon />,
        title: "Life Above The Trees",
        description: "An infinity pool and Jim's Sky Grill with expansive rooftop views.",
      },
      {
        icon: <StarIcon />,
        title: "More Than A Room",
        description: "Dining, games, garden time and stargazing make the retreat part of the journey.",
      },
    ],
  },
  accommodation: {
    tag: "ACCOMMODATION",
    heading: "Room To Actually Settle In",
    subtext: "Fourteen rooms, kept deliberately spacious, so a Corbett stay doesn't feel like a stopover between safaris.",
    bullets: [
      "Private balcony with forest-facing views",
      "Modern, contemporary bathrooms",
      "Lift access & ample on-site parking",
      "Suited to families, couples and small groups",
    ],
    images: [
      "/dd/room.png",
      "/dd/gallery1.png",
      "/dd/gallery2.png",
      "/dd/gallery3.png",
      "/dd/gallery4.png",
    ],
  },
  safariStargazing: {
    tag: "FROM SAFARI TO STARGAZING",
    heading: "A Full Day Of Corbett, All<br />In One Stay.",
    image: "/dd/safari.png",
    steps: [
      {
        step: "01",
        title: "Explore",
        description: "Reach the Dhela Safari Entrance Gate in approximately 20 minutes.",
      },
      {
        step: "02",
        title: "Unwind",
        description: "Return for a rooftop swim and green views across the landscape.",
      },
      {
        step: "03",
        title: "Gather",
        description: "Share Kumaoni favourites, multi-cuisine comfort or an evening at the Sky Grill.",
      },
      {
        step: "04",
        title: "Look Up",
        description: "End the day stargazing with high-resolution astronomical equipment.",
      },
    ],
  },
  stargazingBanner: {
    tag: "A SIGNATURE DESTINN EXPERIENCE",
    heading: "Evenings End Beneath A<br />Sky Full Of Stars.",
    description:
      "After the forest quiets, the night becomes the destination. Slow down<br class=\"hidden sm:inline\" /> on the rooftop and discover the sky through dedicated astronomical<br class=\"hidden sm:inline\" /> equipment.",
    image: "/dd/TeleScope.png",
  },
  dining: {
    tag: "FOOD & TOGETHERNESS",
    heading: "Good Days Deserve<br />Memorable Meals.",
    description:
      "Sir Jim's Dining serves multi-cuisine comfort and Kumaoni flavours, while Jim's Sky Grill turns dinner into a rooftop evening. Indoor games, gardens and gathering spaces make room for families and small celebrations.",
    image: "/dd/food.png",
    outlets: [
      {
        type: "dining",
        title: "Sir Jim's Dining",
        subtitle: "A welcoming 30-cover dining room.",
        description:
          "Kumaoni local dishes alongside Indian, Mughlai, Chinese and South Indian favourites, built to work for families and mixed groups alike.",
      },
      {
        type: "grill",
        title: "Jim's Sky Grill",
        subtitle: "A 35-cover rooftop dining experience.",
        description:
          "Grilled delicacies served with panoramic mountain and greenery views, Destinn's evening centrepiece.",
      },
    ],
  },
  location: {
    tag: "LOCATION",
    heading: '<span class="sm:whitespace-nowrap">Close To Ramnagar. Convenient</span><br class="hidden sm:block" /> For Dhela.',
    subtext: "Practical distances, not just \"in the middle of nature\", here's exactly what's nearby",
    matrix: [
      { place: "Ramnagar town", distance: "≈ 4 km" },
      { place: "Ramnagar railway station", distance: "≈ 4 km" },
      { place: "Dhela Safari Entrance Gate", distance: "≈ 8 km" },
      { place: "Pantnagar airport", distance: "≈ 80 km" },
    ],
  },
  gallery: {
    tag: "EXPLORE GALLERY",
    heading: "A Glimpse Of Destinn",
    subtext: "Every space, moment and detail, captured.",
    images: [
      "/dd/gallery1.png",
      "/dd/gallery2.png",
      "/dd/gallery3.png",
      "/dd/gallery4.png",
    ],
  },
  faqs: {
    tag: "GOOD TO KNOW",
    heading: "Before You Enquire!",
    items: [
      {
        q: "How Far Is Destinn From The Dhela Safari Zone?",
        a: "Destinn is located just approximately 8 km (around 15-20 minutes drive) from the Dhela Safari Entrance Gate in Jim Corbett.",
      },
      {
        q: "Is Stargazing Included In The Stay?",
        a: "Yes! Stargazing sessions with dedicated high-resolution astronomical equipment on our rooftop are accessible for our staying guests.",
      },
      {
        q: "Do You Host Families And Small Groups?",
        a: "Absolutely. With 14 spacious rooms (approx. 450 sq. ft. each), rooftop infinity pool, gardens, and indoor games, Destinn is ideal for families and celebrations.",
      },
      {
        q: "What About Food?",
        a: "We feature two signature dining options: Sir Jim's Dining (indoor multi-cuisine & Kumaoni flavours) and Jim's Sky Grill (rooftop grilled specialties with mountain views).",
      },
      {
        q: "How Do I Confirm A Booking?",
        a: "You can book direct through the form on this page or connect with our team on WhatsApp/Phone at +91 88688 88494 to receive immediate confirmation and 15% off.",
      },
    ],
  },
  contact: {
    location: "lorem ipsum dolor , Ramnagar, Jim Corbett, Uttarakhand",
    phone: "+91 XXXXX XXXXX",
    email: "demo@gmail.com",
    copyright: "© 2026 DESTINN DHELA. All rights reserved. Powered by Fielmente",
  },
};
