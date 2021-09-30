import React, { ReactElement } from 'react';
import Link from 'next/link';

interface PrimaryNavProps {
  /**
   * List of menus
   */
  menus?: ReactElement[];
}

const defaultProps: PrimaryNavProps = {
  menus: [<a href="#">One</a>, <a href="#">Two</a>, <a href="#">Three</a>],
};

const PrimaryNav = ({ menus }: PrimaryNavProps): ReactElement => {
  return (
    <div className="inline-flex gap-7">
      {menus &&
        menus.map((_, i) => (
          <div className="text-[#414143] h-full flex items-center justify-center">
            {_}
          </div>
        ))}
    </div>
  );
};

PrimaryNav.defaultProps = defaultProps;
export default PrimaryNav;
