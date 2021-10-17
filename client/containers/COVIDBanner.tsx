import React, { ReactElement } from 'react';

import { Banner, LinkWrapper } from 'components';

const COVIDBannerContainer = (): ReactElement => {
  return (
    <Banner>
      <>
        <LinkWrapper href="/blog/practicing-safe-car-sharing-while-navigating-covid-19">
          <span className="underline">
            Learn more about traveling safely during COVID-19
          </span>
        </LinkWrapper>
      </>
    </Banner>
  );
};

export default COVIDBannerContainer;
