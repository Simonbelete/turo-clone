import React, { ReactElement } from 'react';

import { Logo, PrimaryNav } from 'components';

const Navbar = (): ReactElement => {
  return (
    <div className="flex flex-row justify-between">
      {/* Logo */}
      <Logo />

      <div>
        <PrimaryNav />
      </div>
    </div>
  );
};

export default Navbar;
