import React, { ReactElement } from 'react';

interface ButtonProps {
  /**
   *  Outlined button
   */
  outlined?: boolean;

  /**
   * Button Body
   */
  children: ReactElement | string;

  /**
   * Button Size
   */
  size?: 'sm' | 'md' | 'lg';
}

const defaultProps = {
  size: 'md',
};

const Button = ({ children, size, outlined }: ButtonProps): ReactElement => {
  const sizeClass: string = ((): string => {
    switch (size) {
      case 'sm':
        return 'py-1 px-1';
      case 'md':
        return 'py-2 px-2';
      default:
        return 'py-2 px-1';
    }
  })();
  const outlinedClass = outlined && 'border-2';
  return (
    <button className={`${sizeClass} ${outlinedClass}`}>{children}</button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
