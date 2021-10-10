import React, { ReactElement } from 'react';

const Icon = ({ size = '10' }: { size: string }): ReactElement => {
  return (
    <svg width={size} height={size} viewBox="4 2 6.275 12">
      <path
        fill="#121214"
        fillRule="evenodd"
        d="M9.522 14a.75.75 0 01-.555-.245l-4.773-5.25a.754.754 0 010-1.01l4.773-5.25a.75.75 0 011.11 1.01L5.764 8l4.315 4.745A.75.75 0 019.521 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Icon;
