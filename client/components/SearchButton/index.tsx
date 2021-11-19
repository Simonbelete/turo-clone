import React, { ReactElement } from 'react';

import { Search } from 'components/Icons';

const SearchButton: React.FC = (): ReactElement => {
  return (
    <button
      type="submit"
      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
    >
      <Search size="20" color="#ffff" />
    </button>
  );
};

export default SearchButton;
