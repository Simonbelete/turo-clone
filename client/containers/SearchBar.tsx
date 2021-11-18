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
        <SearchBar.Field>
          <>
            <SearchBar.Label>Where</SearchBar.Label>
            <LocationAutoComplete />
          </>
        </SearchBar.Field>
        <SearchBar.Separator />
        <DateRangePicker />
        <TimePicker />
      </>
    </SearchBar>
  );
};

export default SearchBarContainer;
