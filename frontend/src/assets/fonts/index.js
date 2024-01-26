import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const arupala = localFont({
  src: [
    {
      path: "./ArupalaGroteskTrial-Air.woff",
      weight: "100",
    },
    {
      path: "./ArupalaGroteskTrial-SuperLt.woff",
      weight: "200",
    },
    {
      path: "./ArupalaGroteskTrial-Light.woff",
      weight: "300",
    },
    {
      path: "./ArupalaGroteskTrial-Regular.woff",
      weight: "400",
    },
    {
      path: "./ArupalaGroteskTrial-Medium.woff",
      weight: "500",
    },
    {
      path: "./ArupalaGroteskTrial-SemiBold.woff",
      weight: "600",
    },
    {
      path: "./ArupalaGroteskTrial-Bold.woff",
      weight: "700",
    },
    {
      path: "./ArupalaGroteskTrial-SuperBold.woff",
      weight: "800",
    },
    {
      path: "./ArupalaGroteskTrial-Ultra.woff",
      weight: "900",
    },
  ],
  variable: "--font-arupala",
});
