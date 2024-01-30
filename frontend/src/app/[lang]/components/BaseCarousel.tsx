"use client";

import { useState, useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ReactNode } from "react";

interface CarouselSettings {
  responsive?: any;
  swipeable?: boolean;
  draggable?: boolean;
  ssr?: boolean;
  infinite?: boolean;
  arrows?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  transitionDuration?: number;
  keyBoardControl?: boolean;
  containerClass?: string;
  showDots?: boolean;
  itemClass?: string;
  className?: string;
}

const CustomDot = ({
  onClick = () => {},
  index = 0,
  carouselState = {},
}: {
  onClick?: () => void;
  index?: number;
  carouselState?: any;
}) => {
  const { slidesToShow } = carouselState;

  let showSlides = 0;

  switch (slidesToShow) {
    case 1:
      showSlides = 4;
      break;
    default:
      showSlides = slidesToShow;
      break;
  }

  return (
    index < showSlides && (
      <li>
        <button
          className="bg-white h-3 w-3 rounded-full mx-1"
          onClick={() => onClick()}
        />
      </li>
    )
  );
};

export default function BaseCarousel({
  settings,
  children,
}: {
  settings?: CarouselSettings;
  children: ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldShowDots = isMobile || settings?.showDots;

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 4,
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
  };

  return (
    <div className="relative mx-[-12px]">
      <Carousel
        swipeable={settings?.swipeable || true}
        draggable={settings?.draggable || true}
        responsive={settings?.responsive || responsive}
        ssr={settings?.ssr || true}
        infinite={settings?.infinite || true}
        arrows={settings?.arrows || false}
        transitionDuration={settings?.transitionDuration || 300}
        autoPlay={settings?.autoPlay || true}
        showDots={shouldShowDots}
        dotListClass="custom-dot-list-style"
        autoPlaySpeed={settings?.autoPlaySpeed || 5000}
        keyBoardControl={settings?.keyBoardControl || true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px px-3"
        className="z-10"
        renderDotsOutside={true}
        customDot={<CustomDot />}
        additionalTransfrom={0}
        customTransition="transform 0s linear"
      >
        {children}
      </Carousel>
    </div>
  );
}
