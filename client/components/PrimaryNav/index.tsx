import React, { ReactElement } from 'react';
import Link from 'next/link';

import { Button, LinkWrapper } from 'components';

export interface PrimaryNavProps {
  menus?: ReactElement[];
}

const MENUS = [
  <div className="hidden md:flex">
    <Link href="/list-your-car">
      <>
        <Button>Become a host</Button>
      </>
    </Link>
  </div>,
  <LinkWrapper href="login">Login</LinkWrapper>,
  <LinkWrapper href="sign-up">Sign up</LinkWrapper>,
];

const PrimaryNav = ({ menus = MENUS }: PrimaryNavProps): ReactElement => {
  return (
    <div className="inline-flex items-center justify-center gap-7">
      {menus &&
        menus.map((_) => (
          <div
            key={_.key}
            className="text-[#414143] h-full flex items-center justify-center font-bold text-[13px]"
          >
            {_}
          </div>
        ))}
    </div>
  );
};

export default PrimaryNav;
