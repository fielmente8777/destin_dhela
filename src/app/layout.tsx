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
      <head>
        <meta
          name="google-site-verification"
          content="h6gI6z_cFXceQKKOKKO4Yua9hWo0fvyY799yW3UQp20"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-M63FLTC7"
        ></script>
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());`}
        </Script>
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E776ESD01S"
        ></script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E776ESD01S');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#5F6764]">
        <WebProvider>
          <LandingNavbar />
          {children}
          <PopUpForm />
          <ImagePopup />

          <Whatsapp whatsAppNumber={contact.phone} />
          <Call callNumber={contact.phone} />
        </WebProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","zbn7fquy92");`}
        </Script>
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
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
