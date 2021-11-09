import React, { ReactElement } from 'react';

import { Input } from 'components';

interface AutocompleteProps {
  label: string;
}

const Autocomplete = ({ label }: AutocompleteProps): ReactElement => {
  return (
    <div>
      <label htmlFor="search-input-selector">
        <p className="text-[11px] font-basis-grotesque font-bold">{label}</p>
        <Input
          id="search-input-selector"
          type="text"
          placeholder="City, airport, address or hotel"
        />
      </label>
      <div className="w-full h-1/2 flex flex-col gap-2">
        <div>Current Location</div>
      </div>
    </div>
  );
};

export default Autocomplete;
