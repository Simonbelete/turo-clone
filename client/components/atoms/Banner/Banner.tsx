import React, { ReactElement } from 'react';

interface BannerProps {
  /**
   * Banners Body Element
   */
  children: ReactElement | string;
}

const Banner = ({ children }: BannerProps): ReactElement => {
  return (
    <div className="w-full text-base text-[#414143] bg-[#f4f4f4]">
      <div className="flex flex-row justify-center items-center py-3 font-semibold underline">
        {children}
      </div>
    </div>
  );
};

export default Banner;
