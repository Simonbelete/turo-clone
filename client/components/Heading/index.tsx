import React, { ReactElement } from 'react';

const Heading = ({
  styled = false,
  level = 1,
  children,
  className = '',
}: {
  styled?: boolean;
  level?: number;
  children: string;
  className?: string;
}): ReactElement => {
  const fontSizeClassName: string = ((): string => {
    switch (level) {
      case 1:
        return 'text-[90px] font-black';
      case 2:
        return 'text-[70px]';
      case 3:
        return 'text-[51px]';
      case 4:
        return 'text-[41px]';
      case 5:
        return 'text-[21px]';
      default:
        return 'a';
    }
  })();
  return (
    <div>
      <p className={`${fontSizeClassName} ${className}`}>{children}</p>
    </div>
  );
};

export default Heading;
