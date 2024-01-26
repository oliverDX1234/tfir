"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoFooter from "./LogoFooter";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`font-arupala font-light text-base hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
}) {
  const BrokenLogoText = ({ text }: { text: String }) => {
    const words = text.split(" ");

    if (words.length >= 2) {
      const brokenText = (
        <>
          {words[0]} {words[1]} <br />
          {words.slice(2).join(" ")}
        </>
      );
      return brokenText;
    } else {
      return text;
    }
  };

  return (
    <footer className="dark:bg-midnight-blue dark:text-gray-50">
      <div className="py-16 px-7 md:px-[20px] lg:px-[120px] space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50 max-w-[1440px] mx-auto">
        <div className="flex justify-between pb-20">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-2">
            <LogoFooter src={logoUrl}>
              {logoText && (
                <h2 className="text-sm lg:text-xl font-bold">
                  <BrokenLogoText text={logoText} />
                </h2>
              )}
            </LogoFooter>
          </div>

          <div className="col-span-10 text-center md:text-left md:col-span-10 items-center justify-end flex-shrink-0 hidden xl:flex">
            <ul className="items-stretch hidden space-x-3 xl:flex">
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6">
          <div className="flex">
            <span className="font-arupala text-sm mr-2 pb-20">
              {new Date().getFullYear()} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
