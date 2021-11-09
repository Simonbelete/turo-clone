import React, { ReactElement } from 'react';

import { SearchBar, LocationAutoComplete } from 'components';

const SearchBarContainer: React.FC = (): ReactElement => {
  return (
    <SearchBar>
      <LocationAutoComplete />
    </SearchBar>
  );
};

export default SearchBarContainer;
