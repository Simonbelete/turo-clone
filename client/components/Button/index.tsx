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
  primary?: boolean;
  className?: string;
}

const defaultProps = {
  size: 'md',
  outlined: false,
};

const Button = ({
  children,
  size,
  outlined = false,
  primary = false,
  className = '',
  ...props
}: ButtonProps): ReactElement => {
  const sizeClass: string = ((): string => {
    switch (size) {
      case 'sm':
        return 'py-1 px-1';
      case 'md':
        return 'py-4 px-5';
      case 'lg':
        return 'py-10 px-10';
      default:
        return 'py-2 px-1';
    }
  })();
  const outlinedClass: string = outlined ? 'border-2' : '';
  const primaryClass: string = primary ? 'text-white bg-primary' : '';
  return (
    <button
      {...props}
      type="button"
      className={`${className} ${sizeClass} ${outlinedClass} ${primaryClass}`}
    >
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;
export default Button;
