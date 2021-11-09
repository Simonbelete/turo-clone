import React, { ReactElement } from 'react';

import style from './index.module.sass';

const SearchBar: React.FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  return (
    <div className={style.searchbar}>
      <div className="flex items-center justify-center m-auto h-full">
        <form
          autoComplete="off"
          className="flex flex-col md:flex-row items-center md:h-[56px] rounded-[8px] md:rounded-[100px] bg-white px-[5px]"
        >
          {children}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
