import React, { ReactElement, useRef, ComponentProps } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronLeft, ChevronRight } from 'components/Icons';
import { CallToAction } from 'components';

type CallToActionProps = ComponentProps<typeof CallToAction>;

// Now Date
const startDate = '2021';
const startTime = '8';
const endDate = '2021';
const endTime = '10';

const CATs: CallToActionProps[] = [
  {
    image: '/image_outdoors_416x285.jpg',
    alt: 'Hatchback booked on Turo driving through Bryce Canyon National Park in Utah',
    title: 'Find the perfect car',
    titleEmphasis: 'to conquer the great outdoors',
    description:
      'Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.',
    href: `/search?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
    cat: 'Browse cars',
  },
  {
    image: '/image_unwind_416x285.jpg',
    alt: 'Couple sitting in hatchback trunk of SUV rented on Turo',
    title: 'Find the perfect car',
    titleEmphasis: 'to unwind for the weekend',
    description:
      'From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.',
    href: `/search?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
    cat: 'Browse cars',
  },
  {
    image: '/image_unwind_416x285.jpg',
    alt: 'Group of friends with SUV rented of Turo on Hawaiian coast',
    title: 'Find the perfect car',
    titleEmphasis: 'to upgrade your vacation plans',
    description:
      'Skip the rental car counter and find the perfect car to complement your vacation vibe.',
    href: `/search?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
    cat: 'Browse cars',
  },
  {
    image: '/image_scenic_416x285.jpg',
    alt: 'Woman with Alfa Romeo rented on Turo at sunset',
    title: 'Find the perfect car',
    titleEmphasis: 'for scenic corners & curves',
    description:
      'Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.',
    href: `/search?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
    cat: 'Browse cars',
  },
  {
    image: '/image_try_416x285-2x.jpg',
    alt: 'Friends sitting in the back of a truck rented on Turo',
    title: 'Find the perfect car',
    titleEmphasis: 'to make errand day easier',
    description:
      'Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.',
    href: `/search?startDate=${startDate}&startTime=${startTime}&endDate=${endDate}&endTime=${endTime}`,
    cat: 'Browse cars',
  },
];

const CTASlider = ({
  cats = CATs,
}: {
  cats?: CallToActionProps[];
}): ReactElement => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        style={{ marginLeft: '20px', marginRight: '20px', position: 'unset' }}
      >
        {cats.map((_) => (
          <SwiperSlide
            key={_.href}
            className="flex items-center justify-center"
          >
            <CallToAction {..._} />
          </SwiperSlide>
        ))}
        <div
          ref={navigationPrevRef}
          className="z-10 flex lg:items-center absolute top-[6rem] lg:top-0 bottom-0 left-5 right-auto cursor-pointer"
        >
          <ChevronLeft size="20" />
        </div>
        <div
          ref={navigationNextRef}
          className="z-10 flex lg:items-center absolute top-[5.5rem] lg:top-0 bottom-0 left-auto right-5 cursor-pointer"
        >
          <ChevronRight size="20" />
        </div>
      </Swiper>
    </div>
  );
};

export default CTASlider;
