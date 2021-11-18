import React, { ReactElement, useState } from 'react';
import { AutoComplete, Input } from 'antd';

import style from './index.module.sass';

const LocationAutoComplete: React.FC = (): ReactElement => {
  const [options, setOptions] = useState<{ value: string }[]>([
    { value: 'a' },
    { value: 'b' },
    { value: 'c' },
  ]);

  const handleSearch = (value: string) => {
    // setOptions(!value ? [] : [{ value }]);
  };

  return (
    <AutoComplete
      options={options}
      // onSelect={onSelect}
      // onSearch={handleSearch}
      bordered={false}
    >
      <Input
        placeholder="City, airport, address or hotel"
        bordered={false}
        className={`${style.locationautocomplete} w-full md:min-w-[255px] px-0`}
      />
    </AutoComplete>
  );
};

export default LocationAutoComplete;
