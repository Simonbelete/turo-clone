import React from 'react';
import type { NextPage } from 'next';

import { Navbar, CTASlider, DateRangePicker } from 'components';
import { COVIDBanner, Hero, FindYourDriveHeading, Footer } from 'containers';

const Home: NextPage = () => {
  return (
    <>
      <DateRangePicker />
      <header>
        <COVIDBanner />
        <Navbar />
      </header>
      <main>
        <Hero />
        {/* Page Center */}
        <div className="flex flex-col items-center justify-center">
          <div className="py-10">
            <FindYourDriveHeading />
          </div>
        </div>
        {/* End of Page Center */}
        <CTASlider />
      </main>
      <Footer />
    </>
  );
};

export default Home;
