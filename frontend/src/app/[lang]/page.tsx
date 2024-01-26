import Image from "next/image";

import BaseButton from "@/app/[lang]/components/BaseButton";

import heroImage from "@public/images/home/hero-image.png";
import BgIcon1 from "@public/images/home/bg-icon-1.png";
import BgIcon2 from "@public/images/home/bg-icon-2.png";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-t from-midnight-blue from-50% via-purple to-midnight-blue dark:text-gray-100">
        <div className="pt-10 pb-16 px-5 md:px-5 md:py-[100px] lg:py-[120px] lg:px-[120px] grid xl:grid-cols-2 gap-20 lg:gap-10 xl:gap-0 max-w-[1440px] mx-auto">
          <div className="flex flex-col justify-start rounded-lg xl:text-left">
            <h5 className="font-arupala text-base mb-4">
              Powered by Native Teams
            </h5>

            <h1 className="font-arupala font-bold leading-none text-3xl md:text-5xl lg:text-6xl mb-4">
              Thriving beyond boundaries
            </h1>

            <p className="tmt-6 mb-4 text-base md:text-lg font-light">
              “The Future is Remote” is your opportunity to tap into the
              expertise of accomplished professionals who have excelled in the
              world of remote work, the gig economy, and the dynamic startup
              ecosystem.
            </p>

            <p className="tmt-6 text-lg font-light">
              Explore our events to connect with like-minded individuals and
              supercharge your business or career, whether you’re a freelancer,
              a remote worker, or a startup owner.
            </p>

            <div className="flex space-y-4 justify-center md:justify-start mt-10">
              <BaseButton className="w-full md:w-auto" url="/">
                Read More
              </BaseButton>
            </div>
          </div>
          <div className="flex items-start justify-center">
            <Image
              src={heroImage}
              alt={"Jack Giving Speach"}
              className="object-contain"
            />
          </div>
        </div>
        <Image
          className="absolute left-[-20px] bottom-[-250px] lg:bottom-[-250px] lg:left-0"
          src={BgIcon1}
          alt={"Background Icon 1"}
        />
        <Image
          className="absolute right-0 bottom-[-100px] lg:bottom-[-250px]"
          src={BgIcon2}
          alt={"Background Icon 1"}
        />
      </section>

      {/* NEXT EVENT SECTION */}
      <section className="bg-midnight-blue">
        <div className="px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px]  max-w-[1440px] mx-auto">
          <div className="bg-purple bg-opacity-25 px-8 py-6 md:py-10 md:px-14 xl:px-[72px] border border-purple rounded-[20px]">
            <h1 className="font-arupala text-3xl md:text-4xl font-semibold leading-none mb-12 text-center">
              Our Next Event
            </h1>

            <div className="flex flex-col xl:flex-row gap-8">
              <Image
                src="https://placehold.co/420x260"
                alt=""
                className="m-auto rounded-[26px] border border-purple w-full xl:w-[420px] h-auto"
                unoptimized
                width={420}
                height={260}
              />

              <div className="flex flex-col">
                <h1 className="font-arupala text-3xl font-semibold leading-none mb-3">
                  Online Webinar
                </h1>

                <p className="tmt-6 pb-8 text-base md:text-lg font-light">
                  Get guided through the challenges of the modern world of
                  remote work. Explore the revolutionary impact of remote work
                  on education and growth, and get the latest insights to help
                  you master remote work finances and strategies on The Future
                  is Remote online webinar.
                </p>

                <div className="mt-auto h-[1px] w-full bg-gradient-to-r from-purple from-30% to-transparent"></div>
              </div>
            </div>

            <div className="flex justify-center pt-6 md:pt-14">
              <BaseButton type="secondary" url="/">
                Discover more
              </BaseButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}