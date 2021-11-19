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
        {/* Location Form */}
        <SearchBar.Field>
          <>
            <SearchBar.Label>Where</SearchBar.Label>
            <LocationAutoComplete />
          </>
        </SearchBar.Field>
        <SearchBar.Separator />

        {/* From Date */}
        <SearchBar.Field>
          <>
            <SearchBar.Label>From</SearchBar.Label>
            <div className="flex flex-row gap-2">
              <DateRangePicker />
              <TimePicker />
            </div>
          </>
        </SearchBar.Field>

        {/* Unitl Date */}
        <SearchBar.Field>
          <>
            <SearchBar.Label>Until</SearchBar.Label>
            <div className="flex flex-row gap-2">
              <DateRangePicker />
              <TimePicker />
            </div>
          </>
        </SearchBar.Field>
      </>
    </SearchBar>
  );
};

export default SearchBarContainer;
