import React, { ReactElement } from 'react';

import {
  SearchBar,
  LocationAutoComplete,
  DateRangePicker,
  TimePicker,
} from 'components';

const SearchBarContainer: React.FC = (): ReactElement => {
  return (
    <SearchBar>
      <>
        <LocationAutoComplete />
        <DateRangePicker />
        <TimePicker />
      </>
    </SearchBar>
  );
};

export default SearchBarContainer;
