import React, { ReactElement } from 'react';
import Link from 'next/link';

import { Button } from 'components';

const CallToAction = ({
  image,
  alt,
  title,
  titleEmphasis,
  description,
  href,
  cat,
}: {
  image: string;
  alt: string;
  title: string;
  titleEmphasis: string;
  description: string;
  href: string;
  cat: string;
}): ReactElement => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="px-10 md:pr-0 xl:mr-[44px] flex justify-center lg:justify-start">
        <img
          src={`${image}`}
          alt={alt}
          className="object-cover"
          width="416"
          height="285"
        />
        ,
      </div>
      <div className="flex flex-col lg:ml-[44px]">
        <h2 className="mb-[16px] text-[21px] font-black leading-7 tracking-medium">
          <span className="text-black">{title}</span>&nbsp;
          <span className="text-primary">{titleEmphasis}</span>
        </h2>
        <p className="mb-[32px] font-normal text-base text-black leading-snug">
          {description}
        </p>
        <div className="w-full flex justify-center lg:justify-start ">
          <Link href={href}>
            <>
              <Button
                size="md"
                primary
                className="text-lg leading-tight font-bold"
              >
                {cat}
              </Button>
            </>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
