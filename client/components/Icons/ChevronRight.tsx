import React, { ReactElement } from 'react';

const Icon = ({ size = '10' }: { size: string }): ReactElement => {
  return (
    <svg width={size} height={size} viewBox="5.73 2 6.273 12">
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M6.48 14a.75.75 0 00.555-.245l4.773-5.25a.754.754 0 000-1.01l-4.773-5.25a.75.75 0 00-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 006.48 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Icon;
