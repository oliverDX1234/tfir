import Link from "next/link";
import Image from "next/image";

import LogoFooter from "@public/images/logo-footer.png";

export default function Logo({ children }: { children?: React.ReactNode }) {
  return (
    <Link href="/" aria-label="Back to homepage" className="flex items-center">
      {<Image src={LogoFooter} alt="logo" width={80} height={80} className="w-[56px] h-[56px] md:w-[80px] md:h-[80px]"/>}
      <div className="ml-2">{children}</div>
    </Link>
  );
}
