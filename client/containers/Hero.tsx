import React, { ReactElement } from 'react';

import { Hero } from 'components';
import { SearchBar } from 'containers';

const HeroContainer = (): ReactElement => {
  return (
    <Hero>
      <SearchBar />
    </Hero>
  );
};

export default HeroContainer;
