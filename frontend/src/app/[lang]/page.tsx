import Image from "next/image";

import BaseButton from "@/app/[lang]/components/BaseButton";
import BaseCarousel from "./components/BaseCarousel";

import ExploreLearnGrow from "@public/images/home/explore-learn-grow.svg";
import FutureIsRemote from "@public/images/home/future-is-remote.svg";
import heroImage from "@public/images/home/hero-image.png";
import BgIcon1 from "@public/images/home/bg-icon-1.png";
import BgIcon2 from "@public/images/home/bg-icon-2.png";
import BgIcon3 from "@public/images/home/bg-icon-3.png";
import BgIcon4 from "@public/images/home/bg-icon-4.png";
import BgIcon5 from "@public/images/home/bg-icon-5.png";
import BgIcon6 from "@public/images/home/bg-icon-6.png";
import BgIcon7 from "@public/images/home/bg-icon-7.png";

import { formatDate, formatTime } from "@/app/[lang]/utils/api-helpers";

import {
  getCarouselImagesBySection,
  getLastNBlogs,
  getFutureNEvents,
} from "@/app/[lang]/utils/get-strapi-entry";

import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import {
  Event,
  Blog,
  CarouselSection,
  CarouselImage,
} from "@/app/[lang]/utils/shared-types";

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

export default async function Home({ params }: Props) {
  const last15Blogs: Blog[] = await getLastNBlogs(15, params.lang);

  const last1Events: Event[] = await getFutureNEvents(0, 1, params.lang);
  const latestEvent: Event = last1Events[0];

  const last5Events: Event[] = await getFutureNEvents(1, 5, params.lang);

  const carouselSection: CarouselSection = await getCarouselImagesBySection(
    "how-we-did-it",
    params.lang
  );

  const latestEventImageUrl = getStrapiMedia(
    latestEvent?.attributes.image.data?.attributes.url
  );

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-tr from-midnight-blue-light from-60% to-purple dark:text-gray-100">
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
          alt={"Background Icon 2"}
        />
      </section>

      {/* NEXT EVENT SECTION */}
      <section className="bg-midnight-blue-light">
        <div className="px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px]  max-w-[1440px] mx-auto">
          <div className="bg-purple bg-opacity-25 px-8 py-6 md:py-10 md:px-14 xl:px-[72px] border border-purple rounded-[20px]">
            <h1 className="font-arupala text-3xl md:text-4xl font-semibold leading-none mb-4 md:mb-8 text-center">
              Our Next Event
            </h1>

            <div className="mt-auto h-[1px] w-full bg-gradient-to-r from-purple from-30% to-transparent"></div>

            <div className="flex flex-col lg:flex-row gap-8 mt-6 md:mt-12">
              <div className="relative lg:min-w-[384px] m-auto">
                <Image
                  src={latestEventImageUrl || ""}
                  alt="Latest Event Image"
                  className=" rounded-[26px] border border-purple w-full md:w-auto lg:w-[384px] h-auto"
                  width={384}
                  height={264}
                />

                <div className="absolute top-6 left-6">
                  <h3 className="font-arupala text-brand-pink text-2xl md:text-3xl font-bold leading-none mb-3">
                    {latestEvent?.attributes.country?.data.attributes.name}
                  </h3>

                  <h5 className="text-purple text-xl font-bold">
                    {formatDate(latestEvent?.attributes.date, {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </h5>

                  <h5 className="text-xl font-bold">
                    <span>{formatTime(latestEvent?.attributes.date)} CET</span>
                  </h5>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <h1 className="font-arupala text-2xl md:text-3xl font-semibold leading-none mb-3">
                  {latestEvent?.attributes.title}
                </h1>

                <div className="flex flex-col">
                  <p className="tmt-6 pb-8 text-base md:text-lg font-light text-center lg:text-left">
                    {latestEvent?.attributes.description}
                  </p>

                  <div className="flex justify-center lg:justify-start">
                    <BaseButton type="secondary" url="/">
                      Discover more
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE DID IT SECTION */}
      <section className="relative bg-midnight-blue-light">
        <div className="px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px]  max-w-[1440px] mx-auto z-10">
          <h1 className="font-arupala text-xl md:text-4xl font-semibold leading-none mb-6">
            How we did it
          </h1>

          <BaseCarousel>
            {carouselSection?.attributes.images.map((image: CarouselImage) => (
              <div
                key={image.id}
                className="flex align-center justify-center h-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              >
                <Image
                  src={getStrapiMedia(image.image.data?.attributes.url) || ""}
                  alt={image.alt}
                  className="rounded-[20px] border border-purple w-full"
                  width={400}
                  height={500}
                />
              </div>
            ))}
          </BaseCarousel>
        </div>

        <Image
          className="absolute left-[-50px] bottom-[30px] md:bottom-0 md:left-[10px] lg:left-[30px]"
          src={BgIcon3}
          alt={"Background Icon 3"}
        />
      </section>

      {/* BLOG SECTION */}
      <section className="relative bg-gradient-to-b from-midnight-blue-light from-30% via-[#181852] to-midnight-blue-light">
        <div className="px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px] max-w-[1440px] mx-auto z-10">
          <h1 className="font-arupala text-xl md:text-4xl font-semibold leading-none mb-6">
            Blog
          </h1>

          <BaseCarousel
            settings={{
              showDots: true,
              responsive: {
                desktop: {
                  breakpoint: { max: 5000, min: 1024 },
                  items: 3,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 768 },
                  items: 3,
                },
                mobile: {
                  breakpoint: { max: 767, min: 575 },
                  items: 2,
                },
                smallMobile: {
                  breakpoint: { max: 574, min: 0 },
                  items: 1,
                },
              },
            }}
          >
            {last15Blogs.map((blog: Blog) => (
              <div
                key={blog.id}
                className="rounded-[20px] border border-purple"
              >
                <div className="flex align-center justify-center h-full mb-4">
                  <Image
                    src={
                      getStrapiMedia(
                        blog.attributes.image.data?.attributes.url
                      ) || ""
                    }
                    alt={blog?.attributes.title}
                    className="w-full rounded-t-[20px]"
                    width={400}
                    height={500}
                  />
                </div>

                <div className="p-4">
                  <h5 className="font-arupala text-2xl md:text-2xl font-semibold leading-none mb-4">
                    {blog?.attributes.title}
                  </h5>

                  <p className="tmt-6 mb-4 text-base font-light">
                    {blog?.attributes.description}
                  </p>
                </div>
              </div>
            ))}
          </BaseCarousel>
        </div>

        <Image
          className="absolute right-0 top-[-50px]"
          src={BgIcon4}
          alt={"Background Icon 4"}
        />
      </section>

      {/* FUTURE IS REMOTE SECTION */}
      <section className=" bg-midnight-blue-light">
        <div className="pt-0 pb-16 md:pb-[100px] lg:pb-[120px] mx-auto">
          <div className="explore-carousel z-100">
            <div className="w-full overflow-hidden border-t border-b border-white py-5 px-0 z-1">
              <div className="carosel-items">
                <Image
                  src={ExploreLearnGrow}
                  alt="Future Is Remote"
                  className="carosel-img"
                  width={947}
                  height={80}
                />
              </div>
            </div>
          </div>

          <div className="future-is-remote-carousel z-100">
            <div className="w-full overflow-hidden py-5 px-0 z-1 top-0">
              <div className="carosel-items">
                <Image
                  src={FutureIsRemote}
                  alt="Future Is Remote"
                  className="carosel-img min-h-[42px]"
                  width={166}
                  height={42}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE EVENTS SECTION */}
      <section className="relative bg-midnight-blue-light">
        <div className="px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px] max-w-[1440px] mx-auto z-10">
          <h1 className="font-arupala text-xl md:text-4xl font-semibold leading-none mb-6">
            Future events
          </h1>

          <BaseCarousel
            settings={{
              responsive: {
                desktop: {
                  breakpoint: { max: 5000, min: 768 },
                  items: 3,
                },
                mobile: {
                  breakpoint: { max: 767, min: 575 },
                  items: 2,
                  showDots: true,
                },
                smallMobile: {
                  breakpoint: { max: 574, min: 0 },
                  items: 1,
                  showDots: true,
                },
              },
            }}
          >
            {last5Events.map((event: Event) => (
              <div
                key={event.id}
                className="relative rounded-[20px] border border-purple"
              >
                <div className="flex align-center justify-center h-full">
                  <Image
                    src={
                      getStrapiMedia(
                        event.attributes.image.data?.attributes.url
                      ) || ""
                    }
                    alt={event?.attributes.title}
                    className="w-full rounded-[20px]"
                    width={384}
                    height={364}
                  />
                </div>

                <div className="absolute top-6 left-6">
                  <h3 className="font-arupala text-brand-yellow text-2xl md:text-4xl font-bold leading-none mb-4">
                    {event?.attributes.country?.data.attributes.name}
                  </h3>

                  <h5 className="text-purple text-2xl font-bold">
                    {formatDate(event?.attributes.date, {
                      year: "numeric",
                      month: "long",
                    })}
                  </h5>
                </div>
              </div>
            ))}
          </BaseCarousel>
        </div>

        <Image
          className="absolute top-0 right-0 lg:right-[50px] lg:top-[-30px]"
          src={BgIcon5}
          alt={"Background Icon 5"}
        />
      </section>

      {/* SUPPORT US SECTION */}
      <section className="relative overflow-hidden bg-midnight-blue-light">
        <div className="text-center px-5 pt-0 pb-16 md:pb-[100px] lg:pb-[120px] md:px-5 lg:px-[120px] max-w-[1440px] mx-auto z-10">
          <div className="max-w-[992px] md:px-16 mx-auto">
            <div>
              <h1 className="text-brand-yellow font-arupala text-3xl md:text-5xl font-bold leading-none mb-5">
                Contact Us / Become a Partner
              </h1>

              <p className="tmt-6 mb-4 text-base md:text-lg font-light">
                Join our commitment to empowering individuals and business
                owners, and shaping the future of remote work, the gig economy,
                and the startup ecosystem. As a valued partner, you play a
                crucial role in driving a positive change in our community.
              </p>
            </div>

            <div className="flex justify-center pt-6 md:pt-14">
              <BaseButton
                className="w-full sm:w-auto px-[100px] py-5"
                type="secondary"
                url="/"
              >
                Contact us
              </BaseButton>
            </div>
          </div>
        </div>

        <Image
          className="absolute left-[-50px] bottom-[-150px] md:left-0 md:bottom-[-100px]"
          src={BgIcon6}
          alt={"Background Icon 6"}
        />

        <Image
          className="absolute right-[-150px] bottom-[-300px] md:right-[0px] md:bottom-[-250px]"
          src={BgIcon7}
          alt={"Background Icon 7"}
        />
      </section>
    </>
  );
}
