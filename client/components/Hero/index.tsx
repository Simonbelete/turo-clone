import React, { ReactElement } from 'react';

import style from './index.module.sass';

const Hero = ({ children }: { children: ReactElement }): ReactElement => {
  return <div className={`${style.hero}`}>{children}</div>;
};

export default Hero;
