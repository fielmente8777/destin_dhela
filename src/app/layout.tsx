import type { Metadata } from "next";
import {
  Fraunces,
  Varela_Round,
  Inter,
  DM_Sans,
  Open_Sans,
  Manrope,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LandingNavbar from "../components/navbar/LandingNavbar";
import { WebProvider } from "../context-api/WebContext";
import PopUpForm from "../components/pop-up/PopUpForm";
import ImagePopup from "../components/pop-up/ImagePopup";
import { contact } from "../utils/constent";
import Call from "../components/ContactButton/Call";
import Whatsapp from "../components/ContactButton/WhatsApp";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const varelaRound = Varela_Round({
  variable: "--font-varela",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destinn Dhela | Jim Corbett",
  description:
    "Leave the city behind. Let the forest set the pace. A boutique luxury escape on Destinn Dhela Road, Jim Corbett.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${varelaRound.variable} ${inter.variable} ${dmSans.variable} ${openSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-[#5F6764]">
        <WebProvider>
          <LandingNavbar />
          {children}
          <PopUpForm />
          <ImagePopup />

          <Whatsapp whatsAppNumber={contact.phone} />
          <Call callNumber={contact.phone} />
        </WebProvider>
      </body>

      {/* Eazbot (Next.js, e.g. in app/layout.jsx) */}
<Script id="eazbot-config" strategy="afterInteractive">
  {`
    window.eazbotConfig = {
      ndid: "3b9308d4-6148-4635-a2da-f8c041a7edd6",
      hid: "56495434",
    };
  `}
</Script>
<Script src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js" strategy="afterInteractive" />
    </html>
  );
}
