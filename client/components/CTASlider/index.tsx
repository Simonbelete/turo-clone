import React, { ReactElement, useRef, useState } from 'react';
import { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ChevronLeft, ChevronRight } from 'components/Icons';

const CTASlider = (): ReactElement => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="relative md:w-1/6">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        style={{ marginLeft: '80px', marginRight: '80px', position: 'unset' }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <div>
            <p>Slide 1</p>
            <p>Slide 1</p>
            <p>Slide 1</p>
            <p>Slide 1</p>
            <p>Slide 1</p>
            <p>Slide 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
            <p>Slide 2</p>
          </div>
        </SwiperSlide>
        <div
          ref={navigationPrevRef}
          className="flex items-center absolute top-0 bottom-0 left-0 right-auto cursor-pointer"
        >
          <ChevronLeft size="20" />
        </div>
        <div
          ref={navigationNextRef}
          className="flex items-center absolute top-0 bottom-0 left-auto right-0 cursor-pointer"
        >
          <ChevronRight size="20" />
        </div>
      </Swiper>
    </div>
  );
};

export default CTASlider;
