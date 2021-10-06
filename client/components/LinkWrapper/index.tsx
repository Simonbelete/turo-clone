import React, { ReactElement } from 'react';
import Link from 'next/link';

export interface LinkWrapperProps {
  children: ReactElement | string;
  href: string;
}

const LinkWrapper = ({
  children,
  href,
  ...props
}: LinkWrapperProps): ReactElement => {
  return (
    <Link href={href} {...props}>
      <>{children}</>
    </Link>
  );
};

export default LinkWrapper;
