import React, { ReactElement } from 'react';

import LinkWrapper from 'components/LinkWrapper';

export interface PrimaryNavProps {
  menus?: ReactElement[];
}

const MENUS = [
  <LinkWrapper href="login">Login</LinkWrapper>,
  <LinkWrapper href="sign-up">Sign up</LinkWrapper>,
];

const PrimaryNav = ({ menus = MENUS }: PrimaryNavProps): ReactElement => {
  return (
    <div className="inline-flex gap-7">
      {menus &&
        menus.map((_) => (
          <div
            key={_.key}
            className="text-[#414143] h-full flex items-center justify-center"
          >
            {_}
          </div>
        ))}
    </div>
  );
};

export default PrimaryNav;
