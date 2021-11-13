import React, { ReactElement } from 'react';

import {
  SearchBar,
  LocationAutoComplete,
  DateTimeRangePicker,
} from 'components';

const SearchBarContainer: React.FC = (): ReactElement => {
  return (
    <SearchBar>
      <>
        <LocationAutoComplete />
        <DateTimeRangePicker />
      </>
    </SearchBar>
  );
};

export default SearchBarContainer;
