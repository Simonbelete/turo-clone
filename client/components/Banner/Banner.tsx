import React, { ReactElement } from 'react';

interface BannerProps {
  /**
   * Banners Body Element
   */
  children: ReactElement | string;
}

const Banner = ({ children }: BannerProps): ReactElement => {
  return (
    <div className="w-full text-[#414143] bg-[#f4f4f4]">
      <div className="flex flex-row font-basis-grotesque font-medium text-xs md:text-base justify-center items-center py-3 underline">
        {children}
      </div>
    </div>
  );
};

export default Banner;
