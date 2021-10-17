import React from 'react';
import type { NextPage } from 'next';

import { Navbar, CTASlider } from 'components';
import { COVIDBanner, Hero } from 'containers';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <COVIDBanner />
        <Navbar />
      </header>
      <main>
        <Hero />
        <CTASlider />
      </main>
      <footer>f</footer>
    </>
  );
};

export default Home;
