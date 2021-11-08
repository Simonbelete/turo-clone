import React, { ReactElement } from 'react';

const Icon = ({ size = '10' }: { size?: string }): ReactElement => {
  return (
    <svg width={size} height={size} viewBox="2 4.864 12 6.273">
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M2 10.386a.75.75 0 01.245-.555l5.25-4.773a.754.754 0 011.01 0l5.25 4.773a.75.75 0 01-1.01 1.11L8 6.627l-4.745 4.314A.75.75 0 012 10.386z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Icon;
