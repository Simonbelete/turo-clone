import React, { ReactElement } from 'react';

const Banner = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <div className="w-full py-5 text-sm underline flex items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

export default Banner;
