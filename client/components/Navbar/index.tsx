import React, { ReactElement } from 'react';

import { Logo, PrimaryNav } from 'components';

const Navbar = (): ReactElement => {
  return (
    <div className="flex flex-row items-center justify-between px-5 h-[60px]">
      {/* Logo */}
      <Logo />

      <div>
        <PrimaryNav />
      </div>
    </div>
  );
};

export default Navbar;
