import Link from "next/link";
import { renderButtonStyle } from "@/app/[lang]/utils/render-button-style";
import { ReactNode } from "react";

interface BaseButtonProps {
  url: string;
  target?: string;
  type?: string;
  className?: string;
  children: ReactNode;
}

export default function BaseButton({
  url,
  target,
  type,
  className,
  children,
}: BaseButtonProps) {
  return (
    <Link
      href={url}
      target={target || "_blank"}
      className={`rounded-[50px] px-[44px] py-[14px] text-center ${className} ${renderButtonStyle(
        type || "primary"
      )}`}
    >
      {children}
    </Link>
  );
}
