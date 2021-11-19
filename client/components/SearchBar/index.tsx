import React, { ReactElement } from 'react';

import { SearchButton } from 'components';
import style from './index.module.sass';

const SearchBarComponent: React.FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  return (
    <div className={style.searchbar}>
      <div className="flex items-center justify-center m-auto h-full">
        <form
          autoComplete="off"
          className="flex flex-col md:flex-row gap-0 items-center md:h-[56px] rounded-[8px] md:rounded-[100px] bg-white px-[5px]"
        >
          {children}
          <div className="px-3">
            <SearchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

const Field: React.FC<{ children: ReactElement }> = ({
  children,
}): ReactElement => {
  return <div className="flex flex-col mt-[4px] pl-3">{children}</div>;
};

const Label: React.FC<{ children: string }> = ({ children }): ReactElement => {
  return <div className="text-[11px] font-bold">{children}</div>;
};

const Separator: React.FC = (): ReactElement => {
  return <div className="border-l h-4/5 mx-1 border-[#c7c7c7]" />;
};

const SearchBar = Object.assign(SearchBarComponent, {
  Separator,
  Field,
  Label,
});

export default SearchBar;
