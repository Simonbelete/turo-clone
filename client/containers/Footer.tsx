import React, { ReactElement } from 'react';

import { FooterNav, LinkWrapper } from 'components';

const FooterContainer = (): ReactElement => {
  const turoMenus: ReactElement[] = [
    <LinkWrapper href="#">About</LinkWrapper>,
    <LinkWrapper href="#">Team</LinkWrapper>,
    <LinkWrapper href="#">Policies</LinkWrapper>,
    <LinkWrapper href="#">Careers</LinkWrapper>,
    <LinkWrapper href="#">Press</LinkWrapper>,
    <LinkWrapper href="#">OpenRoad</LinkWrapper>,
    <LinkWrapper href="#">Turo shop</LinkWrapper>,
  ];
  return (
    <div>
      <FooterNav title="Turo" menus={turoMenus} />
    </div>
  );
};

export default FooterContainer;
